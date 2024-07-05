import '@testing-library/jest-dom'
// import {render, screen} from '@testing-library/react'
import DashboardLayout from '../app/home/DashboardLayout'

describe('DashboardLayout', () => {
  it('returns a function', () => {
    expect(DashboardLayout).toBeInstanceOf(Function)
  })
  // it('renders a heading', () => {
  //   render(<Page />)

  //   const heading = screen.getByRole('heading', {level: 1})

  //   expect(heading).toBeInTheDocument()
  // })
})
