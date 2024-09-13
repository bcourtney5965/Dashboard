'use client'
import React from 'react'
import { Button } from "@/components/ui/button"

function DashboardLayout() {
  return (
    <>
      <Button>Button</Button>
      <div
        data-testid="dashboard-layout"
        className="bg-blue-500 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:grid-rows-4 lg:gap-2 lg:p-2"
        >
        <section className="lg:col-span-3 lg:row-span-1 lg:grid-area-[income-rate]">
          <h2>Income:</h2>
        </section>
        <section className="lg:col-span-3 lg:row-span-1 lg:grid-area-[passive-inc]">
          <h2>Passive Income:</h2>
        </section>
        <section className="lg:col-span-6 lg:row-span-2 lg:grid-area-[net-worth]">
          <h2>Net Worth</h2>
        </section>
        <section className="lg:col-span-3 lg:row-span-1 lg:grid-area-[marginal-tax]">
          <h2>Marginal Tax Rate:</h2>
        </section>
        <section className="lg:col-span-3 lg:row-span-1 lg:grid-area-[cap-gains-tax]">
          <h2>Capital Gains Tax Rate:</h2>
        </section>
        <section className="lg:col-span-4 lg:row-span-2 lg:grid-area-[investments]">
          <h1>Investments</h1>
        </section>
        <section className="lg:col-span-4 lg:row-span-2 lg:grid-area-[passive-income]">
          <h1>Passive Income</h1>
        </section>
        <section className="lg:col-span-4 lg:row-span-2 lg:grid-area-[income]">
          <h1>Income</h1>
        </section>
      </div>
    </>
  )
}

export default DashboardLayout
