import React from 'react'

function DashboardLayout() {
  return (
    <div data-testid="dashboard-layout" className={'grid grid-cols-1 gap-4'}>
      <section>
        <h2>Income:</h2>
      </section>
      <section>
        <h2>Passive Income:</h2>
      </section>
      <section>
        <h2>Net Worth</h2>
      </section>
      <section>
        <h2>Marginal Tax Rate:</h2>
      </section>
      <section>
        <h2>Capital Gains Tax Rate:</h2>
      </section>
      <section>
        <h1>Investments</h1>
      </section>
      <section>
        <h1>Passive Income</h1>
      </section>
      <section>
        <h1>Income</h1>
      </section>
    </div>
  )
}

export default DashboardLayout
