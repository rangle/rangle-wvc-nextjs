import React, {useRef } from 'react';

import {Map,Source,Layer} from 'react-map-gl';
import { clusterLayer, clusterCountLayer,unclusteredPointLayer} from './layers';

const TOKEN = 'pk.eyJ1IjoiZS1zY2h1bHR6IiwiYSI6ImNsYTJ2MGYzdjA2Yzkzb3BhY2FlaGM1dDEifQ.HBoblCqe9VRjFOfUNacejg'
function MapChartGL() {
    const mapRef = useRef(null);

  const onClick = event => {
    const feature = event.features[0];
    const clusterId = feature.properties.cluster_id;

    const mapboxSource = mapRef.current.getSource('earthquakes');

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
        console.log({zoom})
      if (err) {
        return;
      }

      mapRef.current.easeTo({
        center: feature.geometry.coordinates,
        zoom: 8,
        duration: 5000
      });
    });
  };
    return (
        <Map 
        mapboxAccessToken={TOKEN}        
          initialViewState={{
            latitude: 40.67,
            longitude: -103.59,
            zoom: 3
          }}
          style={{width: 600, height: 400}}
          onClick={onClick}
          mapStyle="mapbox://styles/mapbox/light-v9"
          interactiveLayerIds={[clusterLayer.id]}
          ref={mapRef}
        >
            <Source
          id="earthquakes"
          type="geojson"
          data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
          </Source>
        </Map>
      );
}

export default MapChartGL