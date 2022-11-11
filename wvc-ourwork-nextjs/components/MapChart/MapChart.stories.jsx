import MapChart from './MapChart'
import { Source, Layer } from 'react-map-gl'
import { useState } from 'react'

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
  const [x, setX] = useState(true);

  return (
    <div
      style={{
        position: 'relative',
        width: '500px',
        height: '500px',
        display: 'block',
        border: '2px solid black',
        overflow: 'hidden'
      }}
    >
     
     
      <MapChart {...args}>
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
