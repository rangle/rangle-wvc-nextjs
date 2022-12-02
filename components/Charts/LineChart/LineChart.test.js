import { LineChart } from './LineChart'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn()
  }))

describe('LineChart', () => {
  it('renders a line chart', () => {
    const args = {
      colors: ['rgb(231, 96, 12)'],
      labels: ['2019', '2020', '2021'],
      data: [50000, 76000, 170000],
      withAxes: true,
      yStepSize: 25000
    }

    render(<LineChart {...args} />)
    expect(screen.getByTestId('line-chart')).toBeInTheDocument()
  })
})
