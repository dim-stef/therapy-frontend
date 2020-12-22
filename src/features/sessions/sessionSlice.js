import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const getMySessions = createAsyncThunk(
  'sessions/getMySessions',
  async () =>{
    const url = `${process.env.REACT_APP_API_URL}/v1/my_sessions/`
    try{
      let response = await axios.get(url);
      return response.data;
    }catch(e){
      console.error(e);
    }
  }
)

export const sessionSlice = createSlice({
  name:'sessions',
  initialState: {
    mySessions: [],
    loading:false,
  },
  extraReducers: {
    [getMySessions.fulfilled]: (state, action)=>{
      state.mySessions = action.payload;
      state.loading = false;
    },
    [getMySessions.pending]: (state, action)=>{
      state.loading = true;
    },
    [getMySessions.rejected]: (state,action) =>{
      state.loading = false;
    },
  }
})