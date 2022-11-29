import MapHeaderContainerComp from './MapHeaderContainer'

import { COUNTRY_CODES } from '../MapConstants'

export default {
  title: 'Example/Maps',
  component: MapHeaderContainerComp
}

const Template = (args) => {
  return (
    <div style={{ display: 'block' }}>
      <MapHeaderContainerComp {...args} />
    </div>
  )
}

export const MapHeaderContainer = Template.bind({})

MapHeaderContainer.argTypes = {
  selectedCountry: {
    options: Object.keys(COUNTRY_CODES),
    table: {
      disable: true
    },
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
MapHeaderContainer.args = {
  showHeaderControls: true,
  showMarkers: true,
  isDark: true,
  duration: 1000,
  padding: 40,
  showEmptyPrograms: false,
  legendText: 'Explore our work around the world',
  countryDropdownLabel: 'Countries',
  programDropdownLabel: 'Program Type'
}
