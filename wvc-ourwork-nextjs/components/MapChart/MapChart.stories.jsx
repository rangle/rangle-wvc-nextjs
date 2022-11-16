import MapChart from './MapChart'
import { Source, Layer } from 'react-map-gl'
import { useState, useEffect, useRef } from 'react'

export default {
  title: 'Example/Maps',
  component: MapChart
}
const layerStyle1 = {
  id: 'point1',
  type: 'line',
  paint: {
    'line-width': 1,
    'line-color': '#FF6B00'
  }
}
const Template = (args) => {
  const mapRef = useRef()

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '90vh',
        display: 'block',
        overflow: 'hidden'
      }}
    >
      <MapChart
        ref={mapRef}
        {...args}
        bounds={[
          73.61720299999996, 18.168884000000048, 134.77359000000013,
          53.55443600000007
        ]}
      >
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

export const MapChartBase = Template.bind({})
MapChartBase.argTypes = {
  interactive: {
    table: {
      disable: true
    }
  }
}
MapChartBase.args = {
  interactive: true
}

export const MapChartNonInteractive = Template.bind({})
MapChartNonInteractive.argTypes = {
  interactive: {
    table: {
      disable: true
    }
  }
}
MapChartNonInteractive.args = {
  interactive: false
}
