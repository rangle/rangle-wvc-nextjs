import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import MapHeaderContainer, {
//   getCountryOptions,
//   getProgramOptions,
//   getMarkerCoordinates
// } from './MapHeaderContainer'

import countryData from './country_mock_data.json'
import mapData from '../../../public/data/countries.json'
describe('Map Header Container Utility Functions', () => {
  describe('getCountryOptions', () => {
    it('should return array with value as country code and label as country name', () => {
      let result = getCountryOptions(countryData, false)
      expect(result).toContainEqual(
        expect.objectContaining({ value: 'All', label: 'All' })
      )

      expect(result).toContainEqual(
        expect.objectContaining({ value: 'BGD', label: 'Bangladesh' })
      )
    })
  })
  it('should only return countries with active programs if showEmptyPrograms is false', () => {
    let result = getCountryOptions(countryData, false)

    expect(result).toContainEqual(
      expect.objectContaining({ value: 'BGD', label: 'Bangladesh' })
    )
    expect(result).not.toContainEqual(
      expect.objectContaining({ value: 'BGD', label: 'Bolivia', programs: [] })
    )
  })
  it('should only return countries even if no programs are contained in the data if showEmptyPrograms is true', () => {
    let result = getCountryOptions(countryData, true)

    expect(result).toContainEqual(
      expect.objectContaining({ value: 'BGD', label: 'Bangladesh' })
    )
    expect(result).toContainEqual(
      expect.objectContaining({ value: 'BOL', label: 'Bolivia', programs: [] })
    )
  })
  describe('getProgramOptions', () => {
    const PROGRAM_DATA = [
      {
        country: 'Kenya',
        programming_type: 'Development',
        ivs_program_code: 'DEV-1'
      },
      {
        country: 'Kenya',
        programming_type: 'Development',
        ivs_program_code: 'DEV-2'
      },
      {
        country: 'Kenya',
        programming_type: 'Type 2',
        ivs_program_code: 'TYPE2-1'
      },
      {
        country: 'Kenya',
        programming_type: 'Type 2',
        ivs_program_code: 'TYPE2-2'
      },
      {
        country: 'Bangladesh',
        programming_type: 'Development',
        ivs_program_code: 'DEV-1'
      }
    ]
    it('should only return programs for the selected country', () => {
      let kenResult = getProgramOptions(PROGRAM_DATA, 'KEN')
      const expectedKenResult = [
        { value: 'All', label: 'All' },
        { label: 'Development', value: 'Development' },
        { label: 'Type 2', value: 'Type 2' }
      ]

      let bgdResult = getProgramOptions(PROGRAM_DATA, 'BGD')
      const expectedBdgResult = [
        { value: 'All', label: 'All' },
        { label: 'Development', value: 'Development' }
      ]
      expect(bgdResult).toEqual(expect.arrayContaining(expectedBdgResult))
    })
  })
})
