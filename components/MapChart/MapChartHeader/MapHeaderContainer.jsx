import React, { useState, useCallback, useMemo } from 'react'
import MapChartHeader from './MapChartHeader'
import { COUNTRY_CODES } from '../MapConstants'

//TODO: Fill color is to be based on type + sponsored or not
// will be driven by value in table, Monique to provide columns + formula
// for color later
//TODO: this should actually be an object as the design states that it can be
// different shapes with different colors
const PROGRAMMING_TYPE_FILL_COLOR = {
  Development: '#d00',
  'Fragile Contexts and Protracted Emergencies': '#FFBF00'
}

const getCountryOptions = (countryData, showEmptyPrograms, selectedYear) => {
  return countryData
    .filter(
      (country) =>
        showEmptyPrograms ||
        (showEmptyPrograms === false && country?.programs?.length > 0) ||
        (selectedYear ? selectedYear === country['YEAR'] : true)
    )
    .reduce(
      (acc, { NAME: label, programs }) => {
        return [...acc, { label: label, value: label, programs }]
      },
      [{ value: 'All', label: 'All' }]
    )
}

const getProgramOptions = (programData, selectedCountry, selectedYear) => {
  const countryName = COUNTRY_CODES[selectedCountry]
  return programData
    ?.filter(
      (n) =>
        n.country === countryName ||
        selectedCountry === 'All' ||
        (selectedYear ? selectedYear === n['YEAR'] : true)
    )
    .reduce(
      (acc, { PROGRAMMING_TYPE: programming_type }) => {
        return acc.find((n) => n.value === programming_type) !== undefined
          ? acc
          : [...acc, { label: programming_type, value: programming_type }]
      },
      [{ value: 'All', label: 'All' }]
    )
}

//TODO The design only shows 2021 but its risky to rely only on that number because
// it will either never update, unless a code change is done, or the results might become weird
// for now hardcoding 'all' and '2021' as the year is not even visible in the DB yet
const getYearOptions = (programData) => {
  const years = programData
    .map((program) => program['YEAR'])
    .filter((year) => year !== undefined)
  const uniqueYears = [...new Set(['All', '2021', ...years])]
  return uniqueYears.map((year) => ({ value: year, label: year }))
}

const getMarkerCoordinates = (
  programData,
  selectedCountry,
  selectedProgramType
) => {
  const selectedCountryName = COUNTRY_CODES[selectedCountry] || 'All'
  return programData
    .filter(
      ({ COUNTRY: country, PROGRAMMING_TYPE: programming_type }) =>
        (country === selectedCountryName || selectedCountryName === 'All') &&
        (programming_type === selectedProgramType ||
          selectedProgramType === 'All')
    )
    .map((mapData) => {
      return [
        mapData['CENTRAL_LONG'],
        mapData['CENTRAL_LAT'],
        {
          ...mapData,
          fill:
            PROGRAMMING_TYPE_FILL_COLOR[mapData['PROGRAMMING_TYPE']] || '#d00'
        }
      ]
    })
}

//FIXME: storybook of this component is broken
const MapHeaderContainer = ({
  showEmptyPrograms = false,
  showHeaderControls = true,
  showMarkers = true,
  programData = [],
  countryData = [],
  ...props
}) => {
  const [selectedYear, setSelectedYear] = useState('All')
  const [selectedCountry, setSelectedCountry] = useState('All')
  const [selectedProgramType, setSelectedProgramType] = useState('All')

  const countryOptions = useMemo(
    () => getCountryOptions(countryData, showEmptyPrograms, selectedYear),
    [countryData, showEmptyPrograms, selectedYear]
  )

  const programOptions = useMemo(
    () => getProgramOptions(programData, selectedCountry, selectedYear),
    [selectedCountry, programData, selectedYear]
  )

  const yearOptions = useMemo(() => {
    return getYearOptions(programData)
  }, [programData])

  const markerCoordinates = useMemo(() => {
    return getMarkerCoordinates(
      programData,
      selectedCountry,
      selectedProgramType
    )
  }, [selectedCountry, selectedProgramType, programData])

  const onSelectedYearChange = useCallback((evt) => {
    setSelectedYear(evt)
    setSelectedCountry('All')
  }, [])

  const onSelectedCountryChange = useCallback((evt) => {
    setSelectedCountry(evt)
    setSelectedProgramType('All')
  }, [])

  // TODO: The calculated stats based on filter will be provided by the API hard-coding for now
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
        selectedYear={selectedYear}
        onSelectedYearChange={onSelectedYearChange}
        yearOptions={yearOptions}
        selectedCountry={selectedCountry}
        onSelectedCountryChange={onSelectedCountryChange}
        countryOptions={countryOptions}
        selectedProgramType={selectedProgramType}
        onSelectedProgramTypeChange={setSelectedProgramType}
        programOptions={programOptions}
        mapStatistics={mapStatistics}
      />
    </>
  )
}

export default MapHeaderContainer
export { getCountryOptions, getProgramOptions, getMarkerCoordinates }

MapHeaderContainer.displayName = 'MapHeaderContainer'
