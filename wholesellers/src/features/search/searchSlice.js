import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    searchArr: ['Good ', 'You ', 'Tried ', 'Search', 'Functionality', 'Developed', 'By', 'Prachanda Rana'],
    searchValue: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchResult: (state, action) => {
            state.searchValue = action.payload;
            // state.searchArr.push(action.payload)
        }
    }
})
export const { setSearchResult } = searchSlice.actions;
export default searchSlice.reducer