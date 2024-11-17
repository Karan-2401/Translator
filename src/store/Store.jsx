import { configureStore } from '@reduxjs/toolkit'
import langReducer from '../store/Slices/langSlice'
import langReducer2 from '../store/Slices/langSlice2'

export const Store = configureStore({
  reducer: {
    lang:langReducer,
    lang2:langReducer2,
  },
})