import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  forwardRef,
  useRef
} from 'react'
import MapChart from './MapChart'
import Pin from './Pin'
import { Source, Layer, useMap, Marker } from 'react-map-gl'
import bbox from '@turf/bbox'
import pointsWithinPolygon from '@turf/points-within-polygon'
import { faker } from '@faker-js/faker'
import { point, points } from '@turf/helpers'
import { randomPoint } from '@turf/random'
import { coordAll } from "@turf/meta"
const countryLayerStyle = {
  id: 'countryLayer',
  type: 'line',
  paint: {
    'line-width': 2,
    'line-color': '#FF6B00'
  }
}
//console.log({ point, pointsWithinPolygon })
// coordinated markers
// highlights
// integrate into hero
const MapChartCountries = ({
  countryCode,
  duration = 1000,
  padding = 40,
  ...props
}) => {
  const mapRef = useRef()
  const [allData, setAllData] = useState({})
  const [countryData, setCountryData] = useState()
  const [isMapLoaded, setIsMapLoaded] = useState(false)

  const centroid = useMemo(() => {
    if (allData[countryCode]) {
      //console.log(allData[countryCode]?.features[0]?.properties.centroid)
      return allData[countryCode]?.features[0]?.properties?.centroid
    }
  }, [allData, countryCode])

  const boundingBox = useMemo(() => {
    if (allData[countryCode]) {
      const [minLng, minLat, maxLng, maxLat] = bbox(allData[countryCode])

      return { minLng, minLat, maxLng, maxLat }
    }
  }, [allData, isMapLoaded, countryCode])

  const markersX = useMemo(() => {
    //console.log({ centroid })
    if (centroid) {
      // const { minLng, minLat, maxLng, maxLat } = boundingBox
      const max = Math.floor(Math.random() * 20) + 5
      const mark = []
      let cordinates = []
      for (let x = 0; x < max; x++) {
        //let latitude = faker.address.latitude(maxLat, minLat, 4)
        //let longitude = faker.address.longitude(maxLng, minLng, 4)
      //  console.log(centroid)
        const [longitude, latitude] = faker.address.nearbyGPSCoordinate(
          centroid,
          500
        )
        //console.log(point([latitude, longitude]))
        cordinates.push([latitude, longitude])
        mark.push({ latitude, longitude })
      }
      //  console.log({cordinates, points: points(cordinates)})
      return mark
    } else {
      return []
    }
  }, [centroid])

  const markers = useMemo(() => {
    if (allData[countryCode]) {
      const max = Math.floor(Math.random() * 20) + 25
      const mark = []
      const coordinates = []
      let c = allData[countryCode]?.features[0]?.properties.centroid
      for (let x = 0; x < max; x++) {
        //let latitude = faker.address.latitude(maxLat, minLat, 4)
        //let longitude = faker.address.longitude(maxLng, minLng, 4)

        const [latitude, longitude] = faker.address.nearbyGPSCoordinate(
          centroid,
          300
        )
        //  console.log(point([latitude, longitude]))
        mark.push({ latitude, longitude })
        coordinates.push([longitude, latitude])
      }
      let randomPoints = randomPoint(max,{bbox:allData[countryCode].features[0].properties.bbox});
      
      let zzz = pointsWithinPolygon(randomPoints, allData[countryCode])
      console.log({ zzz: coordAll(zzz)});
      return coordAll(zzz)
    } else {
      return []
    }
  }, [allData, countryCode])
  const mapMarkers = useMemo(() => {
    let x = markers?.map((marker, index) => {
       // console.log(marker)
      return (
        <Marker
          key={`marker-${index}`}
          longitude={marker[0]}
          latitude={marker[1]}
          anchor='bottom'
        >
          <Pin />
        </Marker>
      )
    })
    console.log({ x })
    return x;
  }, [markers])
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

  useEffect(() => {
    if (
      countryCode &&
      countryCode.length === 3 &&
      allData[countryCode] === undefined
    ) {
      fetch(
        `https://inmagik.github.io/world-countries/countries/${countryCode}.geojson`
      )
        .then((res) => res.json())
        .then((json) =>
          setAllData((value) => ({ ...value, [countryCode]: json }))
        )
    }
  }, [countryCode])

  return (
    <MapChart
      {...props}
      id='countryMap'
      interactive={true}
      onLoad={() => setIsMapLoaded(true)}
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

export default MapChartCountries
