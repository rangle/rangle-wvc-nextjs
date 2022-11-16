import React, { forwardRef } from 'react'
import { Map } from 'react-map-gl'
import './MapChart.scss'

const MapChartGL = forwardRef(
  ({ interactive = true, id, children, ...props }, ref) => {
    return (
      <>
        <Map
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
