import React, { useCallback, useMemo, useState } from 'react'
import MapChartHeader from './MapChartHeader'

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
  const data = countryData
    .filter(
      (country) =>
        showEmptyPrograms ||
        (showEmptyPrograms === false && country?.programs?.length > 0) ||
        selectedYear === 'All' ||
        selectedYear === country['YEAR']
    )
    .reduce(
      (acc, { COUNTRY: label, programs }) => {
        if (!label) return acc
        return [...acc, { label: label, value: label, programs }]
      },
      [{ value: 'All', label: 'All' }]
    )
  return [...new Map(data.map((i) => [i['label'], i])).values()]
}

const getProgramOptions = (programData, selectedCountry, selectedYear) => {
  return programData
    ?.filter(
      (n) =>
        (n.COUNTRY === selectedCountry || selectedCountry === 'All') &&
        (selectedYear === n['YEAR'] || selectedYear === 'All')
    )
    .reduce(
      (acc, { PROGRAM_TYPE }) => {
        return acc.find((n) => n.value === PROGRAM_TYPE) !== undefined
          ? acc
          : [...acc, { label: PROGRAM_TYPE, value: PROGRAM_TYPE }]
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
  selectedYear,
  selectedCountry,
  selectedProgramType
) => {
  return programData
    .filter(
      ({ COUNTRY, PROGRAM_TYPE, YEAR }) =>
        (YEAR === selectedYear || selectedYear === 'All') &&
        (COUNTRY === selectedCountry || selectedCountry === 'All') &&
        (PROGRAM_TYPE === selectedProgramType || selectedProgramType === 'All')
    )
    .map((mapData) => {
      return [
        mapData['CENTRAL_LONG'],
        mapData['CENTRAL_LAT'],
        {
          ...mapData,
          fill: PROGRAMMING_TYPE_FILL_COLOR[mapData['PROGRAM_TYPE']] || '#d00'
        }
      ]
    })
}

const MAP_OPTIONS = {
  boxZoom: false,
  doubleClickZoom: false,
  dragRotate: false,
  dragPan: false,
  keyboard: false,
  scrollZoom: false,
  touchPitch: false,
  touchZoomRotate: false
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
      selectedYear,
      selectedCountry,
      selectedProgramType
    )
  }, [selectedYear, selectedCountry, selectedProgramType, programData])

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
        mapOptions={MAP_OPTIONS}
      />
    </>
  )
}

export default MapHeaderContainer
export { getCountryOptions, getProgramOptions, getMarkerCoordinates }

MapHeaderContainer.displayName = 'MapHeaderContainer'
