import React from 'react'
import './Dropdown.scss'

interface Option {
  value: string
  label: string
}

export interface DropdownProps {
  dropdownLabel: string
  id: string
  isDark: boolean
  options: Option[]
  updateSelection: (value: string) => void
}

const Dropdown = ({
  dropdownLabel,
  id,
  isDark,
  options,
  updateSelection
}: DropdownProps) => {
  return (
    <div className={`select-dropdown${isDark ? '--darkTheme' : ''}`}>
      <div>
        <label htmlFor={id} className='select-dropdown__label'>
          {dropdownLabel}
        </label>
      </div>
      <div>
        <select
          className='select-dropdown__select'
          id={id}
          onChange={(e) => {
            return updateSelection(e.target.value)
          }}
        >
          {options.map((option) => {
            return (
              <option className='select-dropdown__option' value={option.value} key={option.label}>
                {option.label}
              </option>
            )
          })}
          )
        </select>
      </div>
    </div>
  )
}

export default Dropdown
