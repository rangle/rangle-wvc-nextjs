import React, { forwardRef } from 'react'
import { Map, Source, Layer } from 'react-map-gl'
import './MapChart.scss'

// TODO - move to env and refresh token
const TOKEN =
  'pk.eyJ1IjoiZS1zY2h1bHR6IiwiYSI6ImNsYTJ2MGYzdjA2Yzkzb3BhY2FlaGM1dDEifQ.HBoblCqe9VRjFOfUNacejg'

const MapChartGL = forwardRef(
  ({ interactive = true, id, children, ...props }, ref) => {
    return (
      <>
        <Map
          mapboxAccessToken={TOKEN}
          interactive={interactive}
          mapStyle='mapbox://styles/mapbox/dark-v10'
          id={id}
          {...props}
          ref={ref}
        >
          {children}
        </Map>
      </>
    )
  }
)

MapChartGL.displayName = 'MapChartGL'

export default MapChartGL
