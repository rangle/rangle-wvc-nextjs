import React, { useState, useMemo, useRef, useEffect } from 'react'
import CtaLink from '../../CtaLink/CtaLink'
import { Source, Layer, Popup } from 'react-map-gl'
import bbox from '@turf/bbox'
import { multiPoint } from '@turf/helpers'
import '../../../node_modules/mapbox-gl/dist/mapbox-gl.css'

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
      {markerInfo?.CARD_URL?.length > 0 ? (
        <CtaLink
          className={styles['map-popup__link']}
          url={markerInfo['CARD_URL']}
        >
          {markerInfo['NAME']}
        </CtaLink>
      ) : (
        `${markerInfo['NAME']}`
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
          {`${markerInfo.SUB_PROGRAMMING_TYPE}`}
        </p>
      </div>
    </Popup>
  )
}

const MapChartCountries = ({
  countryCode,
  duration = 1000,
  padding = 100,
  markerCoordinates = [],
  onCountryDataLoaded = (evt) => {},
  mapOptions = {},
  ...props
}) => {
  const mapRef = useRef()
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const { geoJson, error: geoDataError } = useFetchGeoJson(countryCode)
  const [popupInfo, setPopupInfo] = useState()
  const mapMarkers = useMapMarkers(markerCoordinates, setPopupInfo)

  if (geoDataError) {
    console.error('Something went wrong retrieving the geodata')
  }

  useEffect(() => {
    onCountryDataLoaded({ countryData: geoJson, countryCode })
  }, [geoJson, countryCode])

  const boundingBox = useMemo(() => {
    if (geoJson) {
      const [minLng, minLat, maxLng, maxLat] = bbox(geoJson)

      return { minLng, minLat, maxLng, maxLat }
    } else if (!geoJson && markerCoordinates?.length > 0) {
      const points = multiPoint(markerCoordinates)
      const [minLng, minLat, maxLng, maxLat] = bbox(points)

      return { minLng, minLat, maxLng, maxLat }
    }
  }, [geoJson, isMapLoaded, countryCode, markerCoordinates])

  useFitBounds(mapRef, boundingBox, padding, duration, isMapLoaded, countryCode)

  useEffect(() => {
    setPopupInfo(null)
  }, [markerCoordinates])

  return (
    <MapChart
      {...props}
      id='countryMap'
      onLoad={() => setIsMapLoaded(true)}
      ref={mapRef}
      {...mapOptions}
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
      {geoJson && (
        <Source id={`data-country`} type='geojson' data={geoJson}>
          <Layer {...countryLayerStyle} />
        </Source>
      )}
    </MapChart>
  )
}
MapChartCountries.displayName = 'MapChartCountries'
export default MapChartCountries
