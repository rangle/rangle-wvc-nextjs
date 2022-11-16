import React, { useState, useCallback, useEffect } from 'react'
import styles from './MapChartHeader.module.scss'
import MapChartCountries from '../MapChartCountry/MapChartCountry'
import DropDown from '../../Dropdown/Dropdown'
import { MapStatistics } from './MapStatistics'

const MapHeaderControlBar = ({ children }) => {
  return <div className={styles['map-header__control-bar']}>{children}</div>
}
function MapChartHeader({
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
  ...props
}) {
  const mapViewState = {
    initialViewState: {
      zoom: 1
    }
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
          markerCoordinates={markerCoordinates}
        />
        <div className={styles['map-header-container__map-legend']}>
          <span>{legendText}</span>
        </div>
      </div>

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
    </div>
  )
}

export default MapChartHeader

