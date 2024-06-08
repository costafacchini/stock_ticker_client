import { useState } from 'react'
import './index.css'

function App() {
  const [searchStockTicker, setSearchStockTicker] = useState('')

  const handleInputChange = (event) => {
    setSearchStockTicker(event.target.value.toUpperCase())
  }

  const handleSearch = () => {
    // fetch to get report data on API
    console.log(searchStockTicker)
  }

  return (
    <div className="container">
      <div>
        <label>Enter a Stock Ticker</label>
        <input
          type="text"
          value={searchStockTicker}
          onChange={handleInputChange}
          placeholder="Digite sua pesquisa..."
          />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  )
}

export default App
