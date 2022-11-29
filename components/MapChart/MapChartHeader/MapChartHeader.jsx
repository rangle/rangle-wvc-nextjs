import React from 'react'
import styles from './MapChartHeader.module.scss'
import MapChartCountries from '../MapChartCountry/MapChartCountry'
import DropDown from '../../Dropdown/Dropdown'
import { MapStatistics } from './MapStatistics'

const MapHeaderControlBar = ({ children }) => {
  return <div className={styles['map-header__control-bar']}>{children}</div>
}

const MapLegend = ({ text }) => {
  return (
    <div className={styles['map-header-container__map-legend']}>
      <span>{text}</span>
    </div>
  )
}

function MapChartHeader({
  showHeaderControls = true,
  showMarkers = true,
  selectedCountry = 'All',
  selectedProgramType = 'All',
  onCountryDataLoaded = (evt) => {},
  countryOptions = [],
  programOptions = [],
  onSelectedCountryChange = (evt) => {},
  onSelectedProgramTypeChange = (evt) => {},
  markerCoordinates = [],
  showEmptyPrograms = false,
  isDark = true,
  mapStatistics,
  legendText,
  countryDropdownLabel,
  programDropdownLabel,
  children,
  ...props
}) {
  const mapViewState = {
    initialViewState: {
      zoom: 1
    },
    minZoom: 1,
    maxZoom: 8
  }

  return (
    <div className={styles['map-header-container']}>
      <div className={styles['map-container']}>
        <MapChartCountries
          {...props}
          {...mapViewState}
          color={isDark ? 'dark' : 'light'}
          countryCode={selectedCountry}
          onCountryDataLoaded={onCountryDataLoaded}
          markerCoordinates={showMarkers ? markerCoordinates : []}
        >
          {children}
        </MapChartCountries>
        {showHeaderControls && <MapLegend text={legendText} />}
      </div>

      {showHeaderControls && (
        <MapHeaderControlBar>
          <div className={styles['map-header__control-bar--first']}>
            <DropDown
              isDark={true}
              dropdownLabel={countryDropdownLabel}
              options={countryOptions}
              value={selectedCountry}
              updateSelection={onSelectedCountryChange}
            />
          </div>
          <div className={styles['map-header__control-bar__col--1']}>
            <DropDown
              isDark={true}
              dropdownLabel={programDropdownLabel}
              options={programOptions}
              updateSelection={onSelectedProgramTypeChange}
              value={selectedProgramType}
            />
          </div>
          <div className={styles['map-header__control-bar__col--3']}>
            <MapStatistics mapStatistics={mapStatistics} />
          </div>
        </MapHeaderControlBar>
      )}
    </div>
  )
}

export default MapChartHeader
