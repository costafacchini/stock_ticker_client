import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../screens/App/appSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
})
