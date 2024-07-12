import {PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getCartFromLS } from '../../utils/getCartFromLS'
import { calcTotalPrice } from '../../utils/calcTotalPrice'
import { initState } from './types'
import { MiniItem } from '../../types'


const {items, totalPrice} = getCartFromLS()

const initialState: initState = {
  items,
  totalPrice,
}

export const cartSlice = createSlice({
  name: 'cart',

  initialState,
  reducers: {
        addItem(state, action: PayloadAction<MiniItem>) {
            
          const findItem = state.items.find(obj => obj.id === action.payload.id)
            if(findItem) {
              findItem.count++
            }
            else {
              state.items.push({
                ...action.payload,
                count: 1
              })
            }
            state.totalPrice = calcTotalPrice(state.items)
        },

        minusItem(state, action: PayloadAction<MiniItem>) {
          const findItem = state.items.find(obj => obj.id === action.payload.id)
            if(findItem && findItem.count > 0) {
              findItem.count--
            }
            state.totalPrice = calcTotalPrice(state.items)

        },

        removeItem(state, action: PayloadAction<MiniItem>) {
         
          state.items = state.items.filter(elem => elem.id !== action.payload.id)
          state.totalPrice = calcTotalPrice(state.items)

      }
    }
})



export const {addItem, removeItem, minusItem} = cartSlice.actions

export default cartSlice.reducer