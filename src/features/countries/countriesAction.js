import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// show all countries async function
export const showAllCountries = createAsyncThunk("countries/showAll", async(_, thunkAPI) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/all`);
    // console.log(response.data)
    return response.data;

  } catch(error) {
    const message = (error.response && error.response.data) || error.message;

    // this function (rejectWithValue) will send the error message as a payload to our page to be displayed.
    return thunkAPI.rejectWithValue(message);
  }

});

// search country by using cioc code :

export const searchByCode = createAsyncThunk("countries/searchByCode", async(code, thunkAPI) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
    return response.data;
  } catch (error) {
    const message = (error.response && error.response.data) || error.message;
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  } finally {
    console.log(thunkAPI);
  }
})

// search country by using region :

export const searchByRegion = createAsyncThunk("countries/searchByRegion", async(region, thunkAPI) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
    return response.data;
  } catch (error) {
    const message = (error.response && error.response.data) || error.message;
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  } finally {
    console.log(thunkAPI);
  }
})
