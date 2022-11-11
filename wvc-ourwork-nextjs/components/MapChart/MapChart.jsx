import React, { useRef, useMemo, useState } from 'react'
import { Map, Source, Layer } from 'react-map-gl'
import './MapChart.scss'


// TODO - move to env and refresh token
const TOKEN =
  'pk.eyJ1IjoiZS1zY2h1bHR6IiwiYSI6ImNsYTJ2MGYzdjA2Yzkzb3BhY2FlaGM1dDEifQ.HBoblCqe9VRjFOfUNacejg'

function MapChartGL({interactive = true,}) {
  const geojson = {
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
  }

  const mapRef = useRef(null)

  // https://gist.github.com/graydon/11198540

  return (
    <Map
      interactive={false}
      mapboxAccessToken={TOKEN}
      initialViewState={{
        // west, siyth, east, north
        bounds: [
          73.61720299999996, 18.168884000000048, 134.77359000000013,
          53.55443600000007
        ],
        zoom: 0
      }}
      mapStyle='mapbox://styles/mapbox/dark-v10'
    >
      
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

    </Map>
  )
}

export default MapChartGL
