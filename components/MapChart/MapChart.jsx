import React, { forwardRef } from 'react'
import { Map } from 'react-map-gl'

const MapChartGL = forwardRef(
  ({ id, children, color = 'light', ...props }, ref) => {
    return (
      <>
        <Map
          mapStyle={`mapbox://styles/mapbox/${color}-v10`}
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
