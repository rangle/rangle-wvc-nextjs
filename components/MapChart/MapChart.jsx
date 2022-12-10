import React, { forwardRef } from 'react'
import { AttributionControl, Map } from 'react-map-gl'

const MapChartGL = forwardRef(
  (
    { id, children, color = 'light', ...props },
    ref,
    attributionPosition = 'top-right'
  ) => {
    return (
      <>
        <Map
          {...props}
          mapStyle={`mapbox://styles/mapbox/${color}-v10`}
          logoPosition='top-left'
          id={id}
          ref={ref}
          attributionControl={false}
          renderWorldCopies={true}
        >
          <AttributionControl position={attributionPosition} />
          {children}
        </Map>
      </>
    )
  }
)

MapChartGL.displayName = 'MapChartGL'

export default MapChartGL
