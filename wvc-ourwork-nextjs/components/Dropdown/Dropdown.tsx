import React from 'react'
import styles from './Dropdown.module.scss'

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
  hideLabel?: boolean;
}

const Dropdown = ({
  dropdownLabel,
  id,
  isDark,
  options,
  updateSelection,
  hideLabel
}: DropdownProps) => {
  return (
    <div className={styles[`select-dropdown${isDark ? '--darkTheme' : ''}`]}>
      <div>
        <label htmlFor={id} className={`${styles['select-dropdown__label']} ${hideLabel ? 'visually-hidden' : ''}`}>
          {dropdownLabel}
        </label>
      </div>
      <div>
        <select
          className={styles['select-dropdown__select']}
          id={id}
          onChange={(e) => {
            return updateSelection(e.target.value)
          }}
        >
          {options.map((option) => {
            return (
              <option className={styles['select-dropdown__option']} value={option.value} key={option.label}>
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
