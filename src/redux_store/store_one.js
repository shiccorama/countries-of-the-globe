// npm install @reduxjs/toolkit
// npm install redux
// npm install react-redux


import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../features/countries/countriesSlice"

export const store_one =  configureStore({
  reducer: {
    country: countriesReducer
  },
})
