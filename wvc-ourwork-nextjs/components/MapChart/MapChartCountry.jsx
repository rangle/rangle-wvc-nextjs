import React, { useEffect, useState, useCallback, useMemo } from 'react'
import MapChart from './MapChart'
import { Source, Layer, useMap } from 'react-map-gl'
import bbox from '@turf/bbox'
const countryLayerStyle = {
  id: 'countryLayer',
  type: 'line',
  paint: {
    'line-width': 2,
    'line-color': '#0080ef'
  }
}
function MapChartCountries({ countryCode, duration = 1000, ...props }) {
  const { countryMap } = useMap()
  const [allData, setAllData] = useState()
  const [countryData, setCountryData] = useState()

  const boundingBox = useMemo(() => {
    if (allData) {
      const [minLng, minLat, maxLng, maxLat] = bbox(allData)
      return { minLng, minLat, maxLng, maxLat }
    }
  }, [allData])

  useEffect(() => {
    if (countryMap && boundingBox) {
      console.log(boundingBox,duration)
      const { minLng, minLat, maxLng, maxLat } = boundingBox
      countryMap.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat]
        ],
        { padding: 40, duration: duration }
      )
    }
  }, [boundingBox,countryMap])

  useEffect(() => {
    if (countryCode && countryCode.length === 3 && countryMap) {
      console.log('useEffect yo')
      fetch(
        `https://inmagik.github.io/world-countries/countries/${countryCode}.geojson`
      )
        .then((res) => res.json())
        .then((json) => setAllData(json))
    }
  }, [countryCode, countryMap])

  return (
    <MapChart {...props} id='countryMap' interactive={false}>
      {allData && (
        <Source id={`data-country`} type='geojson' data={allData}>
          <Layer {...countryLayerStyle} />
        </Source>
      )}
    </MapChart>
  )
}

export default MapChartCountries
