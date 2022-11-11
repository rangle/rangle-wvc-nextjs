import MapChartCountry from './MapChartCountry'
import { useState, useCallback } from 'react'
import { COUNTRY_CODES } from './MapConstants'

import { generateRandomCoordinates } from './map-helpers'

export default {
  title: 'Example/MapChart/MapChartCountry',
  component: MapChartCountry
}

const Template = (args) => {
  const [markerCoordinates, setMarkerCoordinates] = useState([])
  const onCountryChange = useCallback(({ allData, countryCode }) => {
    setMarkerCoordinates(() => generateRandomCoordinates(allData, countryCode))
  })

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
        onCountryChange={onCountryChange}
        markerCoordinates={markerCoordinates}
      />
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
  },
  markerCoordinates: {
      table: {
          disable: true
      }
  },
  onCountryChange: {
    table: {
        disable: true
    }
}


}
SimpleMap.args = {
  //interactive: true,
  //zoom: 0,
  countryCode: 'CHN',
  duration: 1000,
  padding: 40
}
