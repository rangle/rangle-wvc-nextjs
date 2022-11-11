import Reat, { useEffect, useState, useMemo } from 'react'
import { Marker } from 'react-map-gl'
import Pin from './Pin'

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
          <Pin />
        </Marker>
      )),
    [markerCoordinates]
  )
}
function useFetchGeoJson(countryCode) {
  const [countryData, setCountryData] = useState({})
  const [error, setError] = useState(undefined)
  useEffect(() => {
    if (
      countryCode &&
      countryCode.length === 3 &&
      countryData[countryCode] === undefined
    ) {
      setError(() => undefined)
      fetch(
        `https://inmagik.github.io/world-countries/countries/${countryCode}.geojson`
      )
        .then((res) => res.json())
        .then((json) => {
          setCountryData((value) => ({ ...value, [countryCode]: json }))
          return json
        })
        .catch((err) => {
          setError(() => ({ message: 'Could not load data', error: err }))
        })
    }
  }, [countryCode])

  return [countryData, error]
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
    }
  }, [boundingBox, isMapLoaded, padding, duration])
}
export { useFetchGeoJson, useFitBounds, useMapMarkers }
