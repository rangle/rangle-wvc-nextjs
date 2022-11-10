import React, { memo } from 'react'
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from 'react-simple-maps'

const geoUrl1 =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json'

const geoUrl2 =
  'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json'
const geoUrl3 =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json'
import * as x from './country.json'
const MARKERS_INIT = [
  {
    markerOffset: -15,
    name: 'Buenos Aires',
    coordinates: [-58.3816, -34.6037]
  },
  {
    markerOffset: -15,
    name: 'Toronto',
    coordinates: [-79, 43],
    fill: 'purple'
  },
  {
    markerOffset: -15,
    name: 'La Paz',
    coordinates: [-68.1193, -16.4897],
    fill: 'red'
  },
  {
    markerOffset: 25,
    name: 'Brasilia',
    coordinates: [-47.8825, -15.7942],
    fill: 'red'
  },
  {
    markerOffset: 25,
    name: 'Santiago',
    coordinates: [-70.6693, -33.4489],
    fill: 'red'
  },
  {
    markerOffset: 25,
    name: 'Bogota',
    coordinates: [-74.0721, 4.711],
    fill: 'green'
  }
]
const width = 800
const height = 600
const MapChart = ({ setTooltipContent, markers = MARKERS_INIT }) => {
  return (
    <div data-tip=''>
      <ComposableMap projection='geoMercator' width={width} height={height}>
        <ZoomableGroup
          center={[-90, 0]}
          zoom={3}
          filterZoomEvent={() => {
            return true
          }}
        >
          <Geographies geography={geoUrl1}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill='#D6D6DA'
                  stroke='#FFFFFF'
                  strokeWidth={0.5}
                  onMouseEnter={() => {
                    const name = geo.properties.name !== undefined ? geo.properties.name : ''
                    setTooltipContent(`${name}`)
                  }}
                  onMouseLeave={() => {
                    setTooltipContent('')
                  }}
                  style={{
                    default: {
                      fill: '#D6D6DA',
                      outline: 'none'
                    },
                    hover: {
                      fill: '#F53',
                      outline: 'none'
                    },
                    pressed: {
                      fill: '#E42',
                      outline: 'none'
                    }
                  }}
                />
              ))
            }
          </Geographies>
          <Marker coordinates={[-101, 53]} fill='black'>
            <text textAnchor='middle' fill='black'>
              Canada
            </text>
          </Marker>
          <Marker coordinates={[-102, 38]} fill='black'>
            <text textAnchor='middle' fill='black'>
              USA
            </text>
          </Marker>
          <Marker coordinates={[-103, 25]} fill='black'>
            <text textAnchor='middle' fill='black'>
              Mexico
            </text>
          </Marker>
          {markers.map(
            ({ name, coordinates, markerOffset, fill, someStat, type }) => (
              <Marker
                key={name}
                coordinates={coordinates}
                style={{
                  default: { fill: `${fill}` },
                  hover: { fill: 'red' },
                  pressed: { fill: '#02A' }
                }}
              >
                {type === 1 ? (
                  <circle
                    r={10}
                    stroke='#fff'
                    strokeWidth={2}
                    onMouseEnter={() => {
                      setTooltipContent(`${name} - ${someStat}`)
                    }}
                    onMouseLeave={() => {
                      setTooltipContent('')
                    }}
                  />
                ) : (
                  <rect
                    width='15'
                    height='15'
                    style={{
                      fill: 'blue',
                      stroke: 'pink',
                      strokeWidth: 5,
                      fillOpacity: 0.8,
                      strokeOpacity: 0.9
                    }}
                    onMouseEnter={() => {
                      setTooltipContent(`${name} - ${someStat}`)
                    }}
                    onMouseLeave={() => {
                      setTooltipContent('')
                    }}
                  />
                )}
              </Marker>
            )
          )}

          <Annotation
            subject={[2.3522, 48.8566]}
            dx={-90}
            dy={-30}
            connectorProps={{
              stroke: '#FF5533',
              strokeWidth: 3,
              strokeLinecap: 'round'
            }}
          >
            <text
              x='-8'
              textAnchor='end'
              alignmentBaseline='middle'
              fill='#F53'
            >
              {'Paris'}
            </text>
          </Annotation>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  )
}

export default MapChart
