import { BarChart } from './BarChart'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn()
  }))

describe('BarChart', () => {
  it('renders a bar chart', () => {
    const args = {
      colors: ['rgb(231, 96, 12)'],
      labels: ['2019', '2020', '2021'],
      data: [50000, 76000, 170000],
      withAxes: true,
      yStepSize: 25000
    }

    render(<BarChart {...args} />)

    expect(screen.getByTestId('bar-chart')).toBeInTheDocument()
  })
})
