import { ChartContainer } from './ChartContainer'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn()
  }))

describe('ChartContainer', () => {
  const args = {
    chartType: 'bar',
    controlTitle: 'Chart title',
    controlOptionsProp: [
      {
        title: 'People Reached / Line',
        chartType: 'line'
      },
      {
        title: 'Reading Comprehension / Bar',
        chartType: 'bar'
      },
      {
        title: 'People Reached / Doughnut',
        chartType: 'doughnut'
      },
      {
        title: 'Reading Comprehension / StackedBar',
        chartType: 'stackedBar'
      }
    ]
  }

  it('renders a bar chart if chartType is set to "bar"', () => {
    render(<ChartContainer {...args} />)
    expect(screen.getByTestId('bar-chart')).toBeInTheDocument()
  })

  it('renders an option on the dropdown correctly', () => {
    render(<ChartContainer {...args} />)
    expect(
      screen.getByRole('option', { name: 'People Reached / Doughnut' })
    ).toBeInTheDocument()
  })

  it('selects the correct chart from the dropdown', () => {
    render(<ChartContainer {...args} />)
    userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'People Reached / Line' })
    )
    expect(
      screen.getByRole('option', { name: 'People Reached / Line' }).selected
    ).toBe(true)
  })
})
