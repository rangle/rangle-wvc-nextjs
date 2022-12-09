import React, { useEffect, useMemo } from 'react'
import { Marker } from 'react-map-gl'
import Pin from './Pin'
import { fetcher } from './fetcher'
import useSWRImmutable from 'swr/immutable'

function useMapMarkers(markerCoordinates, setPopupInfo) {
  return useMemo(
    () =>
      markerCoordinates?.map(([long, lat, options], index) => (
        <Marker
          key={`marker-${index}`}
          longitude={long}
          latitude={lat}
          anchor='top'
          onClick={(evt) => {
            if (!options) {
              return
            }
            evt.originalEvent.stopPropagation()
            setPopupInfo(() => ({
              evt,
              markerInfo: options,
              longitude: long,
              latitude: lat
            }))
          }}
        >
          <Pin fill={options?.fill} />
        </Marker>
      )),
    [markerCoordinates, setPopupInfo]
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

// Update bounding box based on map markers
function useFitBounds(
  mapRef,
  boundingBox,
  padding,
  duration,
  isMapLoaded,
  countryCode
) {
  useEffect(() => {
    if (isMapLoaded && boundingBox) {
      const { minLng, minLat, maxLng, maxLat } = boundingBox
      const fitMap = (opts) => {
        mapRef?.current.fitBounds(
          [
            [minLng, minLat],
            [maxLng, maxLat]
          ],
          {
            padding: padding,
            duration: duration,
            animate: true,
            essential: true,
            ...opts
          }
        )
      }
      if (countryCode === 'All') {
        fitMap({ zoom: 1 })
      } else {
        fitMap()
      }
    } else if (isMapLoaded) {
      mapRef?.current.setZoom(1)
    }
  }, [boundingBox, isMapLoaded, padding, duration, countryCode, mapRef])
}
export { useFetchGeoJson, useFitBounds, useMapMarkers }
