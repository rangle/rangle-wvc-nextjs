import React from 'react'
import { useTab, useTabList, useTabPanel } from 'react-aria'
import { useTabListState } from 'react-stately'

import './Tabs.scss'

function Tabs(props) {
  props = { keyboardActivation: 'manual', ...props }
  let state = useTabListState(props)
  let ref = React.useRef()
  let { tabListProps } = useTabList(props, state, ref)

  return (
    <div
      className={`tabs-container tabs-container--${props.orientation || ''} ${
        props.isDarkMode ? 'tabs-container--dark' : ''
      }`}
    >
      <div {...tabListProps} ref={ref}>
        {[...state.collection].map((item) => (
          <Tab
            key={item.key}
            item={item}
            state={state}
            orientation={props.orientation}
          />
        ))}
      </div>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </div>
  )
}

function Tab({ item, state }) {
  let { key, rendered } = item
  let ref = React.useRef()
  let { tabProps, isSelected, isDisabled } = useTab({ key }, state, ref)
  return (
    <div {...tabProps} ref={ref}>
      {rendered}
    </div>
  )
}

function TabPanel({ state, ...props }) {
  let ref = React.useRef()
  let { tabPanelProps } = useTabPanel(props, state, ref)
  return (
    <div {...tabPanelProps} ref={ref} className='tab-panel-container'>
      {state.selectedItem?.props.children}
    </div>
  )
}
export { Tabs, TabPanel }
export default Tabs
