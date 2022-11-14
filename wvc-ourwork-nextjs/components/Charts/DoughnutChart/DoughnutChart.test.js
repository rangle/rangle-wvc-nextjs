import { DoughnutChart } from './DoughnutChart'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn()
  }))

describe('DoughnutChart', () => {
  it('renders a doughnut chart', () => {
    const args = {
      colours: ['rgb(231, 96, 12)'],
      labels: ['2019', '2020', '2021'],
      data: [50000, 76000, 170000],
      withAxes: true,
      yStepSize: 25000
    }

    render(<DoughnutChart {...args} />)
    expect(screen.getByTestId('doughnut-chart')).toBeInTheDocument()
  })
})
