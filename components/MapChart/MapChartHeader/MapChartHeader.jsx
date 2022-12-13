import React, { useCallback, useMemo, useState } from 'react'
import styles from './MapChartHeader.module.scss'
import MapChartCountries from '../MapChartCountry/MapChartCountry'
import DropDown from '../../Dropdown/Dropdown'
import { MapStatisticsBlock } from './MapStatistics'
import '../../../node_modules/mapbox-gl/dist/mapbox-gl.css'

const MapHeaderControlBar = ({ children }) => {
  return <div className={styles['map-header__control-bar']}>{children}</div>
}

const MapLegend = ({
  text,
  selectedYear,
  yearOptions,
  updateSelection,
  yearDropdownLabel
}) => {
  return (
    <div className={styles['map-header-container__map-legend']}>
      <span>{text}</span>
      <DropDown
        dropdownLabel={yearDropdownLabel}
        options={yearOptions}
        isDark={true}
        updateSelection={updateSelection}
        value={selectedYear}
      />
    </div>
  )
}

const getMapStatistics = (
  countryData,
  selectedYear,
  selectedCountry,
  selectedProgramType,
  labels
) => {
  let stats = []

  const filteredStats = countryData.filter((country) => {
    if (selectedCountry === 'All') {
      return (
        country.YEAR === selectedYear &&
        country.LEVEL === 'ALL' &&
        country.PROGRAM_TYPE === selectedProgramType
      )
    }
    return (
      country.YEAR === selectedYear &&
      (country.COUNTRYCODE === selectedCountry || selectedCountry === 'All') &&
      country.PROGRAM_TYPE === selectedProgramType
    )
  })

  if (filteredStats[0]?.PEOPLE_REACHED) {
    stats.push({
      title: labels.people,
      statistic: filteredStats[0].PEOPLE_REACHED,
      tooltip: labels.reach_tooltip
    })
  }
  if (filteredStats[0]?.INVESTMENT) {
    stats.push({
      title: labels.invested,
      statistic: filteredStats[0].INVESTMENT,
      tooltip: labels.investment_tooltip
    })
  }
  if (filteredStats[0]?.PROGRAM_COUNT) {
    stats.push({
      title: labels.programs,
      statistic: filteredStats[0].PROGRAM_COUNT,
      tooltip: labels.programs_tooltip
    })
  }

  return stats
}

//FIXME: after refactor this now shows an option "ALL"
const getCountryOptions = (countryData, showEmptyPrograms, selectedYear) => {
  const data = countryData
    .filter(
      (country) =>
        // country.level === 'countries' ||
        showEmptyPrograms ||
        (showEmptyPrograms === false && country?.programs?.length > 0) ||
        selectedYear === country['YEAR']
    )
    .reduce(
      (acc, { COUNTRY: label, COUNTRYCODE: value, programs }) => {
        if (!label) return acc
        return [...acc, { label, value, programs }]
      },
      [{ value: 'All', label: 'All' }]
    )
  return [...new Map(data.map((i) => [i['label'], i])).values()]
}

const getProgramOptions = (programData, selectedCountry, selectedYear) => {
  return programData
    ?.filter((n) => {
      return (
        (n.COUNTRYCODE === selectedCountry || selectedCountry === 'All') &&
        selectedYear === n['YEAR']
      )
    })
    .reduce(
      (acc, { PROGRAM_TYPE }) => {
        return acc.find((n) => n.value === PROGRAM_TYPE) !== undefined
          ? acc
          : [...acc, { label: PROGRAM_TYPE, value: PROGRAM_TYPE }]
      },
      [{ value: 'All', label: 'All' }]
    )
}

const getYearOptions = (programData) => {
  const years = programData
    .map((program) => program['YEAR'])
    .filter((year) => year !== undefined)
    .sort((a, b) => b - a)
  const uniqueYears = [...new Set([...years])]
  return uniqueYears.map((year) => ({ value: year, label: year }))
}

//FIXME This data should come from snowflake but is not available a day before go-live
// there are several programs with more than a single program type, which is currently
// a different row in the table. We are simply using the first color that comes in
// for simplicity, but it feels like there is more work to be done here
const getMarkerColor = (programType) => {
  const PROGRAM_TYPE_FILL_COLOR = {
    'sub-prog-CEFC': '#E7600C',
    'sub-prog-SHIP': '#46BB95',
    'sub-prog-MCD': '#9054A1',
    'sub-prog-CR': '#006661',
    'sub-prog-LCD': '#FDD25F'
  }
  return PROGRAM_TYPE_FILL_COLOR[programType]
}

const getMarkerCoordinates = (
  programData,
  selectedYear,
  selectedCountry,
  selectedProgramType
) => {
  return programData
    .filter(
      ({ COUNTRYCODE, PROGRAM_TYPE, YEAR }) =>
        YEAR === selectedYear &&
        (COUNTRYCODE === selectedCountry || selectedCountry === 'All') &&
        (PROGRAM_TYPE === selectedProgramType || selectedProgramType === 'All')
    )
    .map((mapData) => {
      return [
        mapData['CENTRAL_LONG'],
        mapData['CENTRAL_LAT'],
        {
          ...mapData,
          fill: getMarkerColor(mapData.SUB_PROGRAMMING_TYPE_CODE)
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
  touchZoomRotate: false,
  initialViewState: {
    zoom: 1
  },
  minZoom: 1,
  maxZoom: 5
}

function MapChartHeader({
  showHeaderControls = true,
  countryData,
  programData,
  showMarkers = true,
  showEmptyPrograms = false,
  isDark = true,
  padding = 40,
  labels,
  children,
  ...props
}) {
  const [selectedYear, setSelectedYear] = useState()
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
    const options = getYearOptions(programData)
    setSelectedYear(options[0]?.value || '2021') // always set most current year selected

    return options
  }, [programData])

  const markerCoordinates = useMemo(() => {
    return getMarkerCoordinates(
      programData,
      selectedYear,
      selectedCountry,
      selectedProgramType
    )
  }, [selectedYear, selectedCountry, selectedProgramType, programData])

  const mapStatistics = useMemo(() => {
    return getMapStatistics(
      // programData,
      countryData,
      selectedYear,
      selectedCountry,
      selectedProgramType,
      labels
    )
  }, [
    programData,
    countryData,
    selectedYear,
    selectedCountry,
    selectedProgramType,
    labels
  ])

  const onSelectedYearChange = useCallback((evt) => {
    setSelectedYear(evt)
    setSelectedCountry('All')
  }, [])

  const onSelectedCountryChange = useCallback((evt) => {
    setSelectedCountry(evt)
    setSelectedProgramType('All')
  }, [])

  const onSelectedProgramChange = useCallback((evt) => {
    setSelectedProgramType(evt)
  }, [])

  return (
    <div className={styles['map-header-container']}>
      <div className={styles['map-container']}>
        <div className={styles['map-container__map']}>
          <MapChartCountries
            {...props}
            color={isDark ? 'dark' : 'light'}
            countryCode={selectedCountry || 'All'}
            markerCoordinates={showMarkers ? markerCoordinates : []}
            mapOptions={MAP_OPTIONS}
          >
            {children}
          </MapChartCountries>
        </div>
        <div className={styles[`map-container__controls-container`]}>
          <div className={styles[`map-container__controls`]} style={{ opacity: showHeaderControls ? 1 : 0}}>
            <MapLegend
              text={labels.legend}
              selectedYear={selectedYear}
              yearDropdownLabel={labels.year}
              yearOptions={yearOptions}
              updateSelection={onSelectedYearChange}
            />
          </div>
          <div className={styles[`map-container__controls`]} style={{ opacity: showHeaderControls ? 1 : 0, display: 'block'}}>
          <MapHeaderControlBar>
            <div className={styles['map-header__control-bar--first']}>
              <DropDown
                isDark={true}
                dropdownLabel={labels.country}
                options={countryOptions}
                value={selectedCountry}
                updateSelection={onSelectedCountryChange}
              />
            </div>
            <div className={styles['map-header__control-bar__col--1']}>
              <DropDown
                isDark={true}
                dropdownLabel={labels.program}
                options={programOptions}
                value={selectedProgramType}
                updateSelection={onSelectedProgramChange}
              />
            </div>
            {mapStatistics?.map(({ title, statistic, tooltip }, index) => (
              <MapStatisticsBlock
                key={title}
                title={title}
                statistic={statistic}
                tooltip={tooltip}
                isLead={index === 0}
              />
            ))}
          </MapHeaderControlBar>
          </div> 
        </div>
      </div>

        
    </div>
  )
}

export default MapChartHeader
