import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cart-slice'

export const Store = configureStore({
  reducer: {
    cart:cartSlice
  },
})