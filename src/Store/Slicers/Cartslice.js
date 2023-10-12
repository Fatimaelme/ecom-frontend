import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const cartslice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtocart: (state, action) =>{
        state.cart = [...state.cart, action.payload]
    },
    removefromcart: (state, action) =>{
        state.cart = state.cart.filter(e=> e._id != action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addtocart, removefromcart } = cartslice.actions

export default cartslice.reducer