import Reat, { useEffect, useState, useMemo } from 'react'
import { Marker } from 'react-map-gl'
import Pin from './Pin'
import { fetcher } from './fetcher'
import useSWRImmutable from 'swr/immutable'

function useMapMarkers(markerCoordinates) {
  return useMemo(
    () =>
      markerCoordinates?.map((marker, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={marker[0]}
          latitude={marker[1]}
          anchor='bottom'
          
        >
          <Pin fill={marker[2]?.fill} />
        </Marker>
      )),
    [markerCoordinates]
  )
}
function useFetchGeoJson(countryCode) {
  const { data, error } = useSWRImmutable(
    countryCode?.length === 3 && countryCode !== 'All'
      ? `https://inmagik.github.io/world-countries/countries/${countryCode}.geojson`
      : null,
    fetcher
  )

  return {
    geoJson: data,
    isLoading: !error && !data,
    isError: error
  }
}

// Generate dummy markers for a given country
function useFitBounds(mapRef, boundingBox, padding, duration, isMapLoaded) {
  useEffect(() => {
    if (isMapLoaded && boundingBox) {
      const { minLng, minLat, maxLng, maxLat } = boundingBox
      mapRef?.current.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat]
        ],
        { padding: padding, duration: duration }
      )
    } else if (isMapLoaded) {
      mapRef?.current.setZoom(1)
    }
  }, [boundingBox, isMapLoaded, padding, duration])
}
export { useFetchGeoJson, useFitBounds, useMapMarkers }
