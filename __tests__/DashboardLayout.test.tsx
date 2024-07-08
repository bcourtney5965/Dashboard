import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import DashboardLayout from '../app/home/DashboardLayout'

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
})
