import MapChartCountry from './MapChartCountry'
import { MapProvider } from 'react-map-gl'
import { Source, Layer } from 'react-map-gl'
import { useState, useEffect } from 'react'

export default {
  title: 'Example/MapChartCountry',
  component: MapChartCountry
}

const Template = (args) => {
  return (
    <MapProvider>
      <div
        style={{
          position: 'relative',
          width: '100vw',
          height: '90vh',
          display: 'block',

          overflow: 'hidden'
        }}
      >
        <MapChartCountry countryCode={args.countryCode} duration={args.duration}/>
        {/* 
      <MapChart {...args}>
        <Source
          id='my-data-ch'
          type='geojson'
          data='https://inmagik.github.io/world-countries/countries/CHN.geojson'
        >
          <Layer {...layerStyle1} />
        </Source>
    </MapChart>*/}
      </div>
    </MapProvider>
  )
}

export const SimpleMap = Template.bind({})
SimpleMap.argTypes = {
  countryCode: {
    options: ['AFG', 'CHN','CAF','EGY','JPN','PAK','KOR'],
    control: { type: 'select'}
  },
  duration: {
    options: [500, 1000, 2000],
    control: { type: 'select'}
  }
}
SimpleMap.args = {
  interactive: true,
  zoom: 0,
  countryCode: 'CHN',
  duration: 1000,
}
