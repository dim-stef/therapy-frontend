import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const getTherapists = createAsyncThunk(
  'therapists/getTherapists',
  async ()=>{
    const url = process.env.REACT_APP_API_URL + '/v1/therapists/';
    try{
      let response = await axios.get(url);
      return response.data;
    }catch(e){

    }
  }
)

export const therapistsSlice = createSlice({
  name:'therapists',
  initialState: {
    therapists:[],
    loading:false,
  },
  extraReducers: {
    [getTherapists.fulfilled]: (state, action)=>{
      state.therapists = action.payload;
      state.loading = false;
    },
    [getTherapists.pending]: (state, action)=>{
      state.loading = true;
    },
    [getTherapists.rejected]: (state,action) =>{
      state.loading = false;
    }
  }
})