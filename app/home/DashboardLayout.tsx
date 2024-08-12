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

// .item1 {
//   grid-area: income-rate;
// }

// .item2 {
//   grid-area: passive-inc;
// }

// .item3 {
//   grid-area: net-worth;
// }

// .item4 {
//   grid-area: marginal-tax;
// }

// .item5 {
//   grid-area: cap-gains-tax;
// }

// .item6 {
//   grid-area: investments;
// }

// .item7 {
//   grid-area: passive-income;
// }

// .item8 {
//   grid-area: income;
// }

// .grid-container {
//   display: grid;
//   grid-template:
//     'income-rate income-rate passive-inc passive-inc net-worth net-worth net-worth net-worth net-worth net-worth net-worth net-worth'
//     'marginal-tax marginal-tax cap-gains-tax cap-gains-tax net-worth net-worth net-worth net-worth net-worth net-worth net-worth net-worth'
//     'investments investments investments investments passive-income passive-income passive-income passive-income income income income income';
//   grid-gap: 10px;
//   background-color: #2196F3;
//   padding: 10px;
// }

// <div class="grid-container">
//   <div class="item1">1</div>
//   <div class="item2">2</div>
//   <div class="item3">3</div>
//   <div class="item4">4</div>
//   <div class="item5">5</div>
//   <div class="item6">6</div>
//   <div class="item7">7</div>
//   <div class="item8">8</div>
// </div>

export default DashboardLayout
