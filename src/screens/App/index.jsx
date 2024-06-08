import { useState } from 'react'
import StockReport from './components/StockReport'
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
      <StockReport data={data} />
    </div>
  )
}

export default App
