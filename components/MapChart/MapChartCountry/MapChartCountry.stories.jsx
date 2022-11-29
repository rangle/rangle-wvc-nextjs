import { useState, useCallback } from 'react'

import { COUNTRY_CODES } from '../MapConstants'
import MapChartCountry from './MapChartCountry'
import { generateRandomCoordinates } from '../map-helpers'

export default {
  title: 'Example/Maps',
  component: MapChartCountry
}

const Template = (args) => {
  const [markerCoordinates, setMarkerCoordinates] = useState([])
  const onCountryDataLoaded = useCallback(({ countryData, countryCode }) => {
    setMarkerCoordinates(() => {
      return generateRandomCoordinates(countryData, countryCode)
    })
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
        onCountryDataLoaded={onCountryDataLoaded}
        markerCoordinates={markerCoordinates}
        color={args.color}
      />
    </div>
  )
}

export const MapChartCountrySelect = Template.bind({})

MapChartCountrySelect.argTypes = {
  color: {
    options: ['light', 'dark'],
    control: { type: 'select' }
  },
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
MapChartCountrySelect.args = {
  countryCode: 'CHN',
  duration: 1000,
  padding: 40,
  color: 'light'
}
