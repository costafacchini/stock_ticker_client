import { useState } from 'react'
import './index.css'

function App() {
  const [searchStockTicker, setSearchStockTicker] = useState('')
  const [data, setData] = useState([])

  const handleInputChange = (event) => {
    setSearchStockTicker(event.target.value.toUpperCase())
  }

  const fetchStockTickerReport = async () => {
    const response = await window.fetch(`http://127.0.0.1:3000/v1/stock_report/${searchStockTicker}`)
    return await response.json()
  }

  const handleSearch = () => {
    if (searchStockTicker !== '') {
      fetchStockTickerReport().then(data => {
        setData(data.report)
      })
    }
  }

  return (
    <div className="app-container">
      <div className="search-container">
        <label>Enter a Stock Ticker</label>
        <input
          className="search-input"
          type="text"
          value={searchStockTicker}
          onChange={handleInputChange}
          placeholder="Enter Ticker Symbol..."
          />
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
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
    </div>
  )
}

export default App
