import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cart/cartSlice'
import productSlice from '../features/products/productSlice'
import searchSlice from '../features/search/searchSlice'

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice,
        search: searchSlice
    }
})
