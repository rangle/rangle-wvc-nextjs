import React, { useState, useMemo, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Source, Layer, Popup } from 'react-map-gl'
import bbox from '@turf/bbox'
import { multiPoint } from '@turf/helpers'

import MapChart from '../MapChart'
import { useFetchGeoJson, useFitBounds, useMapMarkers } from '../mapHooks'
import styles from './MapChartCountry.module.scss'

const countryLayerStyle = {
  id: 'countryLayer',
  type: 'line',
  paint: {
    'line-width': 1,
    'line-color': '#FF6B00'
  }
}

const MapPopupTitle = ({ markerInfo }) => {
  return (
    <h5 className={`${styles['map-popup__title']}`}>
      {markerInfo?.card_url?.length > 0 ? (
        <Link href={markerInfo?.card_url} passHref legacyBehavior>
          <a className={styles['map-popup__link']}>
            {markerInfo?.name} - {markerInfo?.card_url}
          </a>
        </Link>
      ) : (
        `${markerInfo?.name}`
      )}
    </h5>
  )
}
const MapPopup = ({ popupInfo, ...props }) => {
  const { markerInfo } = popupInfo
  return (
    <Popup {...props}>
      <div className={styles['map-popup__content']}>
        <MapPopupTitle markerInfo={markerInfo} />

        <p className={`${styles['map-popup__labels']} `}>
          {`${markerInfo?.card_value_1}`}
        </p>
      </div>
    </Popup>
  )
}

const MapChartCountries = ({
  countryCode,
  duration = 1000,
  padding = 200,
  markerCoordinates = [],
  onCountryDataLoaded = (evt) => {},
  ...props
}) => {
  const mapRef = useRef()
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const { geoJson: countryData, error } = useFetchGeoJson(countryCode)
  const [popupInfo, setPopupInfo] = useState()
  const mapMarkers = useMapMarkers(markerCoordinates, setPopupInfo)
  useEffect(() => {
    setPopupInfo('')
  }, [markerCoordinates])

  useEffect(() => {
    onCountryDataLoaded({ countryData, countryCode })
  }, [countryData, countryCode])

  const boundingBox = useMemo(() => {
    if (countryData) {
      const [minLng, minLat, maxLng, maxLat] = bbox(countryData)

      return { minLng, minLat, maxLng, maxLat }
    } else if (!countryData && markerCoordinates?.length > 0) {
      const points = multiPoint(markerCoordinates)
      const [minLng, minLat, maxLng, maxLat] = bbox(points)

      return { minLng, minLat, maxLng, maxLat }
    }
  }, [countryData, isMapLoaded, countryCode, markerCoordinates])

  useFitBounds(mapRef, boundingBox, padding, duration, isMapLoaded)

  return (
    <MapChart
      {...props}
      id='countryMap'
      onLoad={() => setIsMapLoaded(true)}
      ref={mapRef}
    >
      {mapMarkers}
      {popupInfo && (
        <MapPopup
          popupInfo={popupInfo}
          longitude={Number(popupInfo.longitude)}
          latitude={Number(popupInfo.latitude)}
          onClose={() => setPopupInfo(null)}
          className={styles['map-popup']}
        />
      )}
      {countryData && (
        <Source id={`data-country`} type='geojson' data={countryData}>
          <Layer {...countryLayerStyle} />
        </Source>
      )}
    </MapChart>
  )
}
MapChartCountries.displayName = 'MapChartCountries'
export default MapChartCountries
