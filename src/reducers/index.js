import { combineReducers } from "@reduxjs/toolkit";

import searchSlice from "../slices/searchSlice"


const rootReducer = combineReducers({
    searchSlice: searchSlice
})

export default rootReducer