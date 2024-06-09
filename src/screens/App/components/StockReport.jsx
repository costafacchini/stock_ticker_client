import './index.css'

const moneyFormat = (value) => {
  const USDollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
  return USDollar.format(value)
}

const numberFormat = (value) => {
  const Number = new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2 })
  return Number.format(value)
}

function StockReport({ data }) {
  return (
    <div className="report-container">
      <table>
        <thead>
          <tr>
            <th className="report-container-header report-container-cell">Item</th>
            <th className="report-container-header report-container-cell">Minimum</th>
            <th className="report-container-header report-container-cell">Maximum</th>
            <th className="report-container-header report-container-cell">Average</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item, index) => (
            <tr key={index}>
              <td className="report-container-cell">{item.label}</td>
              <td className="report-container-cell">{item.format_to_money ? moneyFormat(item.maximum) : numberFormat(item.maximum)}</td>
              <td className="report-container-cell">{item.format_to_money ? moneyFormat(item.minimum) : numberFormat(item.minimum)}</td>
              <td className="report-container-cell">{item.format_to_money ? moneyFormat(item.average) : numberFormat(item.average)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StockReport
