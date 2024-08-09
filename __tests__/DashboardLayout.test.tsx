import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import DashboardLayout from '../app/home/DashboardLayout'

// Mock window.matchMedia
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: query === '(max-width: 600px)', // Simulate mobile viewport
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
})

describe('DashboardLayout', () => {
  it('returns a function', () => {
    expect(DashboardLayout).toBeInstanceOf(Function)
  })

  it('renders without crashing', () => {
    render(<DashboardLayout />)
    expect(screen.getByTestId('dashboard-layout')).toBeInTheDocument()
  })

  it('renders all sections', () => {
    render(<DashboardLayout />)

    const income = screen.getByRole('heading', {
      name: 'Income:',
      level: 2,
    })
    expect(income).toBeInTheDocument()

    const passiveIncome = screen.getByText('Passive Income:')
    expect(passiveIncome).toBeInTheDocument()

    const netWorth = screen.getByText('Net Worth')
    expect(netWorth).toBeInTheDocument()

    const marginalTaxRate = screen.getByText('Marginal Tax Rate:')
    expect(marginalTaxRate).toBeInTheDocument()

    const capitalGainsTaxRate = screen.getByText('Capital Gains Tax Rate:')
    expect(capitalGainsTaxRate).toBeInTheDocument()

    const investmentsSection = screen.getByRole('heading', {
      name: 'Investments',
      level: 1,
    })
    expect(investmentsSection).toBeInTheDocument()

    const passiveIncomeSection = screen.getByRole('heading', {
      name: 'Passive Income',
      level: 1,
    })
    expect(passiveIncomeSection).toBeInTheDocument()

    const incomeSection = screen.getByRole('heading', {
      name: 'Income',
      level: 1,
    })
    expect(incomeSection).toBeInTheDocument()
  })

  it('renders 1 column on small screens', () => {
    const {getByTestId} = render(<DashboardLayout />)
    const layoutElement = getByTestId('dashboard-layout')
    expect(layoutElement).toHaveClass('grid-cols-1')
  })
})
