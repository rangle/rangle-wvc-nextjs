import React, { forwardRef } from 'react'
import { Map } from 'react-map-gl'

const MapChartGL = forwardRef(
  ({ id, children, color = 'light', ...props }, ref) => {
    return (
      <>
        <Map
          {...props}
          mapStyle={`mapbox://styles/mapbox/${color}-v10`}
          id={id}
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
