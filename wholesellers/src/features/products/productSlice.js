import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: []
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts: (state, action) => {
            state.products.push(action.payload);
        }
    }
})
export const { addProducts } = productSlice.actions;
export default productSlice.reducer