import { useState } from 'react'
import StockReport from './components/StockReport'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStockTicker, selectReport, selectError } from './appSlice'
import './index.css'

function App() {
  const [searchStockTicker, setSearchStockTicker] = useState('')
  const dispatch = useDispatch()
  const stockReportData = useSelector(selectReport)
  const error = useSelector(selectError)

  const handleInputChange = (event) => {
    setSearchStockTicker(event.target.value)
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
      {error && <div className="error">{error}</div>}
      <StockReport data={stockReportData} />
    </div>
  )
}

export default App
