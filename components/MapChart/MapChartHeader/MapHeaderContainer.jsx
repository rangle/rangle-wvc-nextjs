import React, { useState, useCallback, useEffect, useMemo } from 'react'
import MapChartHeader from './MapChartHeader'

import { COUNTRY_CODES, COUNTRY_NAMES } from '../MapConstants'

// TODO: Fill color is to be based on type + sponsored or not
// will be driven by value in table, Monique to provide columns + formula
// for color later

const PROGRAMMING_TYPE_FILL_COLOR = {
  Development: '#d00',
  'Fragile Contexts and Protracted Emergencies': '#FFBF00'
}

const getCountryOptions = (countryData, showEmptyPrograms) => {
  return countryData
    .filter(
      (country) =>
        showEmptyPrograms ||
        (showEmptyPrograms === false && country?.programs?.length > 0)
    )
    .reduce(
      (acc, { country_code: value, name: label, programs }) => {
        return [...acc, { label, value, programs }]
      },
      [{ value: 'All', label: 'All' }]
    )
}

const getProgramOptions = (programData, selectedCountry) => {
  const countryName = COUNTRY_CODES[selectedCountry]
  return programData
    ?.filter((n) => n.country === countryName || selectedCountry === 'All')
    .reduce(
      (acc, value) => {
        return acc.find((n) => n.value === value.programming_type) !== undefined
          ? acc
          : [
              ...acc,
              { label: value.programming_type, value: value.programming_type }
            ]
      },
      [{ value: 'All', label: 'All' }]
    )
}

const getMarkerCoordinates = (
  allData,
  selectedCountry,
  selectedProgramType
) => {
  const selectedCountryName = COUNTRY_CODES[selectedCountry] || 'All'
  return allData
    .filter(
      ({ country, programming_type, level }) =>
        level === 'programs' &&
        (country === selectedCountryName || selectedCountryName === 'All') &&
        (programming_type === selectedProgramType ||
          selectedProgramType === 'All')
    )
    .map((mapData) => {
      return [
        mapData.central_long,
        mapData.central_lat,
        {
          ...mapData,
          fill: PROGRAMMING_TYPE_FILL_COLOR[mapData.programming_type] || '#d00'
        }
      ]
    })
}
const MapHeaderContainer = ({
  showEmptyPrograms = false,
  showHeaderControls = true,
  showMarkers = true,
  ...props
}) => {
  const [selectedCountry, setSelectedCountry] = useState('All')
  const [selectedProgramType, setSelectedProgramType] = useState('All')
  const [countryData, setCountryData] = useState([])
  const [programData, setProgramData] = useState([])
  const [allData, setAllData] = useState([])

  const countryOptions = useMemo(
    () => getCountryOptions(countryData, showEmptyPrograms),
    [countryData, showEmptyPrograms]
  )

  const programOptions = useMemo(() => {
    return getProgramOptions(programData, selectedCountry)
  }, [selectedCountry, programData])

  const markerCoordinates = useMemo(() => {
    return getMarkerCoordinates(allData, selectedCountry, selectedProgramType)
  }, [selectedCountry, selectedProgramType, allData])

  const onSelectedCountryChange = useCallback((evt) => {
    setSelectedCountry(evt)
    setSelectedProgramType('All')
  }, [])
  const mapViewState = {
    initialViewState: {
      zoom: 1
    }
  }

  useEffect(() => {
    fetch('/data/countries.json')
      .then((r) => r.json())
      .then((json) => {
        const programs = json.filter((n) => n.level === 'programs')
        const countries = json
          .filter((n) => n.level === 'countries')
          .map((item) => {
            return {
              ...item,
              country_code: COUNTRY_NAMES[item.name],
              programs: programs.filter(
                (program) => program.country === item.name
              )
            }
          })
        return { countries, programs, allData: json }
      })
      .then(({ countries, programs, allData }) => {
        setCountryData(() => countries)
        setProgramData(() => programs)
        setAllData(() => allData)
      })
  }, [])

  // TODO: The calculated stats based on filter will be provided by the API
  // hard-coding for now,
  const mapStatistics = [
    {
      title: 'People Reached',
      statistic: '18,123,321'
    },
    {
      title: 'Invested',
      statistic: '$12,423,876'
    },
    {
      title: 'Active Programs',
      statistic: '657'
    }
  ]
  return (
    <>
      <MapChartHeader
        {...props}
        showHeaderControls={showHeaderControls}
        showMarkers={showMarkers}
        markerCoordinates={markerCoordinates}
        mapViewState={mapViewState}
        countryData={countryData}
        selectedCountry={selectedCountry}
        onSelectedCountryChange={onSelectedCountryChange}
        selectedProgramType={selectedProgramType}
        onSelectedProgramTypeChange={setSelectedProgramType}
        countryOptions={countryOptions}
        programOptions={programOptions}
        mapStatistics={mapStatistics}
      ></MapChartHeader>
    </>
  )
}

export default MapHeaderContainer
export { getCountryOptions, getProgramOptions, getMarkerCoordinates }

MapHeaderContainer.displayName = 'MapHeaderContainer'
