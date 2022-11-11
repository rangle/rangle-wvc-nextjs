import MapChart from './MapChart'
import { useState } from 'react'

export default {
  title: 'Example/MapChart',
  component: MapChart
}

const Template = (args) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '500px',
        height: '500px',
        display: 'block',
        border: '2px solid black',
        overflow: 'hidden'
      }}
    >
      <MapChart />
    </div>
  )
}

export const SimpleMap = Template.bind({})
SimpleMap.args = {}
