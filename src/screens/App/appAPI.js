export function fetchStockTickerReport(stockTicker) {
  return new Promise((resolve, reject) =>
    window
      .fetch(`http://127.0.0.1:3000/v1/stock_report/${stockTicker}`)
      .then((response) => {
        response.ok ? resolve(response.json()) : reject(response.statusText)
      })
      .catch(reject)
  );
}
