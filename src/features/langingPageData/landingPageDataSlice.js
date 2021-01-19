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

export const landingPageDataSlice = createSlice({
  name: 'landingPageData',
  initialState: {
    data: null,
    loading: true,
  },
  extraReducers: {
    [getLandingPageData.fulfilled]: (state, action) => {
      state.data = action.payload.results[0].data.body;
      state.loading = false;
    },
    [getLandingPageData.rejected]: (state, action) => {
      state.loading = false;
    },
    [getLandingPageData.pending]: (state, action) => {
      state.loading = true;
    }
  }
})