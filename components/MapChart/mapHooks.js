import Reat, { useEffect, useState, useMemo } from 'react'
import { Marker } from 'react-map-gl'
import Pin from './Pin'
import { fetcher } from './fetcher'
import useSWRImmutable from 'swr/immutable'

function useMapMarkers(markerCoordinates, setPopupInfo) {
  return useMemo(
    () =>
      markerCoordinates?.map((marker, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={marker[0]}
          latitude={marker[1]}
          anchor='top'
          onClick={(evt) => {
            // currently the marker is an array of [long,lat, optional popupInfo object]
            // might change this to be more
            // { long: 22, lat: 33, options: { }}
            // but for now, if there is no popup info - just return;
            if (!marker[2]) {
              return
            }
            evt.originalEvent.stopPropagation()
            setPopupInfo(() => ({
              evt,
              markerInfo: marker[2],
              longitude: marker[0],
              latitude: marker[1]
            }))
          }}
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

// Update bounding box based on map markers
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
