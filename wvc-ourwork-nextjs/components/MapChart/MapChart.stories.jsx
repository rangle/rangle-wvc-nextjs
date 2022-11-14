import MapChart from './MapChart'
import { Source, Layer } from 'react-map-gl'
import { useState, useEffect, useRef } from 'react'

export default {
  title: 'Example/MapChart',
  component: MapChart
}
const layerStyle1 = {
  id: 'point1',
  type: 'line',
  paint: {
    'line-width': 2,
    'line-color': '#0080ef'
  }
}
const Template = (args) => {
  const mapRef = useRef();
  console.log(mapRef)
  return (
    <div
      style={{
        position: 'relative',
        width: '60vw',
        height: '90vh',
        display: 'block',
        
        overflow: 'hidden'
      }}
    >
     
     
      <MapChart {...args} ref={mapRef}>
        <Source
          id='my-data-ch'
          type='geojson'
          data='https://inmagik.github.io/world-countries/countries/CHN.geojson'
        >
          <Layer {...layerStyle1} />
        </Source>
      </MapChart>
    </div>
  )
}

export const SimpleMap = Template.bind({})
SimpleMap.args = {
  interactive: true,
  zoom: 0,
}
