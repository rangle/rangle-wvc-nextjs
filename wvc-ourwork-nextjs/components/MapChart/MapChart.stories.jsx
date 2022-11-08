import { ComponentMeta, ComponentStory } from '@storybook/react'
import MapChart from './MapChart'
import { useState } from 'react'
import ReactTooltip from 'react-tooltip'
export default {
  title: 'Example/MapChart',
  component: MapChart
}

const markers1 = [
  {
    markerOffset: 25,
    name: 'Brasilia',
    coordinates: [-47.8825, -15.7942],
    fill: 'red',
    group: '1-1',
    someStat: 10,
    type: 1,
  },
  {
    markerOffset: 25,
    name: 'Santiago',
    coordinates: [-70.6693, -33.4489],
    fill: 'red',
    group: '1-1',
    someStat: 10,
    type: 1,
  },
  {
    markerOffset: 25,
    name: 'Bogota',
    coordinates: [-74.0721, 4.711],
    fill: 'green',
    group: '1-1',
    someStat: 20,
    type: 2,
  },  {
    markerOffset: -15,
    name: 'Buenos Aires',
    coordinates: [-58.3816, -34.6037],
    fill: 'pink',
    group: '2-2',
    someStat: 25,
    type: 2
    
  },
  {
    markerOffset: -15,
    name: 'Toronto',
    coordinates: [-79, 43],
    fill: 'purple',
    group: '2-2',
    someStat: 35,
    type: 1,
  },
  {
    markerOffset: -15,
    name: 'La Paz',
    coordinates: [-68.1193, -16.4897],
    fill: 'red',
    group: '2-2',
    someStat: 40,
    type: 1
  }
]

const Template = (args) => {
  const [content, setContent] = useState('')
  const [selection, setSelection] = useState('2-2')
  const markers = markers1.filter(n=>{
    if(selection === 'All') { return true };
    return n.group === selection;
  })
  const someStatTotal = markers.reduce((acc,value)=> { return acc += value.someStat},0)
  return (
    <div>
      <ReactTooltip>{content}</ReactTooltip>
      <div style={{display:'block'}}>
       
        <select
          value={selection}
          onChange={(e) => setSelection(e.target.value)}
        >
          <option value='All'>All</option>
          <option value='1-1'>markers 1</option>
          <option value='2-2'>markers 2</option>
        </select> 
        <br/>
        someTotal: {someStatTotal}
        <br />
       
      </div>

      <MapChart
        markers={markers}
        {...args}
        setTooltipContent={(e) => {
          console.log(e)
          setContent(e)
        }}
      />
    </div>
  )
}

export const SimpleMap = Template.bind({})
SimpleMap.args = {}
