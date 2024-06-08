import './index.css'

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
              <td className="report-container-cell">{item.maximum}</td>
              <td className="report-container-cell">{item.minimum}</td>
              <td className="report-container-cell">{item.average}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StockReport
