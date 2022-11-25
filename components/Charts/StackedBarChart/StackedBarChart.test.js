import { StackedBarChart } from './StackedBarChart'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn()
  }))

describe('StackedBarChart', () => {
  it('renders a stacked bar chart', () => {
    const args = {
      yStepSize: 25000,
      ariaLabel: 'Bar chart People Reached',
      colours: [
        'rgb(153, 153, 153)',
        'rgb(102, 102, 102)',
        'rgb(255, 136, 51)',
        'rgb(231, 96, 12)'
      ],
      labels: ['2019', '2020', '2020'],
      data: [
        [27000, 27000, 30000],
        [30000, 30000, 40000],
        [40000, 50000, 60000],
        [37000, 40000, 45000]
      ],
      legends: ['Men', 'Women', 'Boys', 'Girls'],
      withAxes: true
    }

    render(<StackedBarChart {...args} />)
    expect(screen.getByTestId('stacked-bar-chart')).toBeInTheDocument()
  })
})
