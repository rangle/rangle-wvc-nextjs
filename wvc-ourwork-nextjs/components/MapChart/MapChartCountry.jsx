import React, { useState, useMemo, useRef, useEffect } from 'react'
import { Source, Layer } from 'react-map-gl'
import bbox from '@turf/bbox'

import MapChart from './MapChart'
import { useFetchGeoJson, useFitBounds, useMapMarkers } from './MapChatHooks'

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
  padding = 40,
  markerCoordinates = [],
  onCountryChange = (evt) => {},
  ...props
}) => {
  const mapRef = useRef()

  const [isMapLoaded, setIsMapLoaded] = useState(false)

  const [allData, error] = useFetchGeoJson(countryCode)
  const mapMarkers = useMapMarkers(markerCoordinates)

  useEffect(() => {
    onCountryChange({ allData, countryCode })
  }, [allData, countryCode])

  const boundingBox = useMemo(() => {
    if (allData[countryCode]) {
      const [minLng, minLat, maxLng, maxLat] = bbox(allData[countryCode])

      return { minLng, minLat, maxLng, maxLat }
    }
  }, [allData, isMapLoaded, countryCode])

  useFitBounds(mapRef, boundingBox, padding, duration, isMapLoaded)

  return (
    <MapChart
      {...props}
      id='countryMap'
      interactive={true}
      onLoad={() => setIsMapLoaded(true)}
      color='light'
      ref={mapRef}
    >
      {mapMarkers}
      {allData[countryCode] && (
        <Source id={`data-country`} type='geojson' data={allData[countryCode]}>
          <Layer {...countryLayerStyle} />
        </Source>
      )}
    </MapChart>
  )
}
MapChartCountries.displayName = 'MapChartCountries'
export default MapChartCountries
