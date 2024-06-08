import { useState } from 'react'
import StockReport from './components/StockReport'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStockTicker, selectReport } from './appSlice'
import './index.css'

function App() {
  const [searchStockTicker, setSearchStockTicker] = useState('')
  const dispatch = useDispatch()
  const stockReportData = useSelector(selectReport)

  const handleInputChange = (event) => {
    setSearchStockTicker(event.target.value.toUpperCase())
  }

  const handleSearch = () => {
    if (searchStockTicker !== '') {
      dispatch(fetchStockTicker(searchStockTicker))
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
      <StockReport data={stockReportData} />
    </div>
  )
}

export default App
