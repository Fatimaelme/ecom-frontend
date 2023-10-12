import { configureStore } from '@reduxjs/toolkit'
import cartreducer from './Slicers/Cartslice'

export const store = configureStore({
  reducer: {
    cart: cartreducer
  },
})