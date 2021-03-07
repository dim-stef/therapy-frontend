import Prismic from '@prismicio/client'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {client, apiEndpoint, accessToken} from '../prismic/prismicHelpers';

export const getLandingPageData = createAsyncThunk(
  'landingPageData/getLandingPageData',
  async () => {
    const response = await client.query(
      Prismic.Predicates.at('document.type', 'homepage') 
    )
    console.log(response);
    return response;
  }
)

export const getLandingPageDataDoctors = createAsyncThunk(
  'landingPageData/getLandingPageDataDoctors',
  async () => {
    const response = await client.query(
      Prismic.Predicates.at('document.type', 'homepage') 
    )
    console.log(response);
    return response;
  }
)

export const landingPageDataSlice = createSlice({
  name: 'landingPageData',
  initialState: {
    data: null,
    dataDoctors: null,
    loading: true,
    loadingDoctors: true,
  },
  extraReducers: {
    [getLandingPageData.fulfilled]: (state, action) => {
      state.data = action.payload.results.find(r=>r.tags.includes('Home')).data.body;
      state.loading = false;
    },
    [getLandingPageData.rejected]: (state, action) => {
      state.loading = false;
    },
    [getLandingPageData.pending]: (state, action) => {
      state.loading = true;
    },
    [getLandingPageDataDoctors.fulfilled]: (state, action) => {
      state.dataDoctors = action.payload.results.find(r=>r.tags.includes('Doctors')).data.body;
      state.loadingDoctors = false;
    },
    [getLandingPageDataDoctors.rejected]: (state, action) => {
      state.loadingDoctors = false;
    },
    [getLandingPageDataDoctors.pending]: (state, action) => {
      state.loadingDoctors = true;
    }
  }
})