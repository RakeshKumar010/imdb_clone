import { configureStore } from '@reduxjs/toolkit'
import hideNavSlice from './hideNavSlice'
import ratingSlice from './ratingSlice'

export const Store = configureStore({
  reducer: {
    hideNav:hideNavSlice,
    rating:ratingSlice
  },
})