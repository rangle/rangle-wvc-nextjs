import React, { useEffect, useState, useCallback, useMemo } from 'react'
import MapChart from './MapChart'
import { Source, Layer, useMap } from 'react-map-gl'
const countryLayerStyle = {
  id: 'countryLayer',
  type: 'line',
  paint: {
    'line-width': 2,
    'line-color': '#0080ef'
  }
}
function MapChartCountries({ countryCode, ...props }) {
  const { countryMap } = useMap()
  const [allData, setAllData] = useState()
  const [countryData, setCountryData] = useState()

  const boundingBox = useMemo(() => {
    return allData?.features[0].properties.bbox
  }, [allData])

  useEffect(() => {
    if (countryMap) {
        console.log(boundingBox)
    /*  countryMap.fitBounds(
        [
          [boundingBox[0], boundingBox[2]],
          [boundingBox[1], boundingBox[3]]
        ],
        { padding: 40, duration: 1000 }
      )*/
    }
  }, [boundingBox])
  useEffect(() => {
    if (countryCode && countryCode.length === 3) {
      fetch(
        `https://inmagik.github.io/world-countries/countries/${countryCode}.geojson`
      )
        .then((res) => res.json())
        .then((json) => setAllData(json))
    }
  }, [countryCode])
  console.log({ countryMap })
  return (
    <MapChart {...props} id='countryMap'>
      {allData && (
        <Source id={`data-country`} type='geojson' data={allData}>
          <Layer {...countryLayerStyle} />
        </Source>
      )}
    </MapChart>
  )
}

export default MapChartCountries
