import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchQuery: '',
    categoryName: ''
}

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: initialState,
    reducers: {
        setSearchQuery(state, action) {
            state.searchQuery = action.payload
        },
        setCategoryName(state, action) {
            state.categoryName = action.payload
        },
    }
})

export const { setSearchQuery, setCategoryName } = searchSlice.actions;

export default searchSlice.reducer;
