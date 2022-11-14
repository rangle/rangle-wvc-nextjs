import MapChartCountry from './MapChartCountry'
import { MapProvider } from 'react-map-gl'
import { Source, Layer } from 'react-map-gl'
import { useState, useEffect } from 'react'
import { COUNTRY_CODES } from './MapConstants'
export default {
  title: 'Example/MapChartCountry',
  component: MapChartCountry
}

const Template = (args) => {
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
      <MapChartCountry
        countryCode={args.countryCode}
        duration={args.duration}
        padding={args.padding}
        interactive={args.interactive}
      />
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
  )
}

export const SimpleMap = Template.bind({})

SimpleMap.argTypes = {
  countryCode: {
    options: Object.keys(COUNTRY_CODES),

    control: {
      type: 'select',
      labels: {
        ...COUNTRY_CODES
      }
    }
  },
  duration: {
    options: [500, 1000, 2000],
    control: { type: 'select' }
  },
  padding: {
    options: [10, 20, 40, 100],
    control: { type: 'select' }
  }
}
SimpleMap.args = {
  //interactive: true,
  //zoom: 0,
  countryCode: 'CHN',
  duration: 1000,
  padding: 40
}
