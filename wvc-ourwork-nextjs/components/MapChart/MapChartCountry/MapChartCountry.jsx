import React, { useState, useMemo, useRef, useEffect } from 'react'
import { Source, Layer } from 'react-map-gl'
import bbox from '@turf/bbox'
import { multiPoint } from '@turf/helpers'
import MapChart from '../MapChart'
import { useFetchGeoJson, useFitBounds, useMapMarkers } from '../mapHooks'

const countryLayerStyle = {
  id: 'countryLayer',
  type: 'line',
  paint: {
    'line-width': 1,
    'line-color': '#FF6B00'
  }
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
  const mapMarkers = useMapMarkers(markerCoordinates)

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
