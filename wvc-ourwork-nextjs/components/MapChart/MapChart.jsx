import React, {
  useRef,
  useMemo,
  useState,
  useCallback,
  forwardRef
} from 'react'
import { Map, Source, Layer } from 'react-map-gl'
import './MapChart.scss'

// TODO - move to env and refresh token
const TOKEN =
  'pk.eyJ1IjoiZS1zY2h1bHR6IiwiYSI6ImNsYTJ2MGYzdjA2Yzkzb3BhY2FlaGM1dDEifQ.HBoblCqe9VRjFOfUNacejg'

const MapChartGL = forwardRef(
  ({ interactive = true, id, children, zoom = 0, ...props }, ref) => {
    /* const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [-122.4, 37.8] }
      }
    ]
  }

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
  }*/

    // const mapRef = useRef(null)
    // if (mapRef.current) {
    //mapRef.current.setZoom(zoom)
    // }
    // https://gist.github.com/graydon/11198540

    return (
      <>
        <Map
          mapboxAccessToken={TOKEN}
          interactive={interactive}
          mapStyle='mapbox://styles/mapbox/dark-v10'
          id={id}
          {...props}
          ref={ref}
        >
          {children}

          {/*
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
    
    </Source>*/}
        </Map>
      </>
    )
  }
)

MapChartGL.displayName = "MapChartGL"

export default MapChartGL
