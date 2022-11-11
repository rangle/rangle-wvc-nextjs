import React, { useRef, useMemo, useState } from 'react'

// import 'mapbox-gl/dist/mapbox-gl.css';
import {
  Map,
  Source,
  Layer,
  Marker,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl'
import './MapChartGL.scss'
import Pin from './Pin'
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer
} from './layers'
import { cities } from './layers'
const TOKEN =
  'pk.eyJ1IjoiZS1zY2h1bHR6IiwiYSI6ImNsYTJ2MGYzdjA2Yzkzb3BhY2FlaGM1dDEifQ.HBoblCqe9VRjFOfUNacejg'
function MapChartGL() {
  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [-122.4, 37.8] }
      }
    ]
  }
  /*
  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': '#007cbf'
    }
  };*/
  const layerStyle1 = {
    id: 'point1',
    type: 'line',
    paint: {
      'line-width': 2,
      'line-color': '#0080ef'
    }
  }
  const layerStyle2 = {
    id: 'point2',
    type: 'line',
    paint: {
      'line-width': 2,
      'line-color': '#0080ef'
    }
  }
  const [popupInfo, setPopupInfo] = useState(null)
  const mapRef = useRef(null)
  const pins = useMemo(
    () =>
      cities.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor='bottom'
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation()
            setPopupInfo(city)
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  )
  /*const onClick = (event) => {
    const feature = event.features[0]
    const clusterId = feature.properties.cluster_id

    const mapboxSource = mapRef.current.getSource('earthquakes')

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      console.log({ zoom })
      if (err) {
        return
      }

      mapRef.current.easeTo({
        center: feature.geometry.coordinates,
        zoom: 8,
        duration: 5000
      })
    })
  }
  longitude: 67,
        latitude: 33,
  bounds: [[-73.9876, 40.7661], [-73.9397, 40.8002]],
  */
  
  // https://gist.github.com/graydon/11198540
  
  return (
    <Map
    interactive={false}
      mapboxAccessToken={TOKEN}
      initialViewState={{ // west, siyth, east, north
        bounds: [73.61720299999996, 18.168884000000048, 134.77359000000013, 53.55443600000007],
        zoom: 0
      
      
      }}
      mapStyle='mapbox://styles/mapbox/dark-v10'
    >
      {pins}
      <Source
        id='my-data-ch'
        type='geojson'
        data='https://inmagik.github.io/world-countries/countries/CHN.geojson'
      >
        <Layer {...layerStyle1} />
      </Source>
      <Source
        id='my-data'
        type='geojson'
        data='https://inmagik.github.io/world-countries/countries/AFG.geojson'
      >
        <Layer {...layerStyle2} />
      </Source>
    
      {/*
      <Source
        id='earthquakes'
        type='geojson'
        data='https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson'
        cluster={true}
        clusterMaxZoom={14}
        clusterRadius={50}
      >

        <Layer {...clusterLayer} />
        <Layer {...clusterCountLayer} />
        <Layer {...unclusteredPointLayer} />
    </Source>*/}
    </Map>
  )
}

export default MapChartGL
