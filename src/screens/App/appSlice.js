import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchStockTickerReport } from './appAPI'

const initialState = {
  report: [],
  error: null,
  status: 'idle',
}

export const fetchStockTicker = createAsyncThunk(
  'app/fetchStockTickerReport',
  async (stockTicker) => {
    const response = await fetchStockTickerReport(stockTicker);
    return response;
  }
);

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockTicker.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchStockTicker.fulfilled, (state, action) => {
        state.status = 'idle'
        state.report = action.payload.report;
        state.error = null
      })
      .addCase(fetchStockTicker.rejected, (state, action) => {
        state.status = 'idle'
        state.error = action.error.message
        state.report = [];
      })
  },
})

export const selectReport = (state) => state.app.report
export const selectError = (state) => state.app.error

export default appSlice.reducer
