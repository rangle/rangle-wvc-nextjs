import React, { forwardRef } from 'react'
import { Map } from 'react-map-gl'

const MapChartGL = forwardRef(
  ({ interactive = true, id, children, color = 'light', ...props }, ref) => {
    return (
      <>
        <Map
          interactive={interactive}
          mapStyle={`mapbox://styles/mapbox/${color}-v10`}
          id={id}
          {...props}
          ref={ref}
          zoom={props.zoomLevel ? props.zoomLevel : 4}
        >
          {children}
        </Map>
      </>
    )
  }
)

MapChartGL.displayName = 'MapChartGL'

export default MapChartGL
