import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk(
  'authentication/login',
  async (credentials) => {
    const url = process.env.REACT_APP_API_URL + '/token/';
    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      let data = await response.json();
      localStorage.setItem('token', data.access)
      localStorage.setItem('refresh', data.refresh)
      return data;
    } catch (e) {}
  },
);

export const getUserData = createAsyncThunk(
  'authentication/getUserData',
  async () => {
    let userData = {};
    let userToken;

    try {
      userToken = localStorage.getItem('token');
      userData.token = userToken;
      axios.defaults.withCredentials = true;
      axios.interceptors.request.use(function (config) {
        const token = userToken;

        if (token) {
          config.headers.Authorization = 'Bearer ' + token;
        }

        return config;
      });
      if (userToken) {
        userData.token = userToken;
        let results = await axios.get(process.env.REACT_APP_API_URL + '/v1/user/me/');
        userData.user = results.data[0];
      }
    } catch (e) {
      userData.token = null;
      userData.user = null;
    }
    return userData;
  },
);

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    token: null,
    refresh: null,
    user: null,
    loading: false,
    checkingForToken: true,
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.token = action.payload.access;
      state.loading = false;

      if (action.payload.access) {
        state.token = action.payload.access;
        state.refresh = action.payload.refresh;
      }
    },
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
    },
    [getUserData.fulfilled]: (state, action) => {
      state.checkingForToken = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    [getUserData.pending]: (state, action) => {
      state.checkingForToken = true;
    },
    [getUserData.rejected]: (state, action) => {
      state.checkingForToken = false;
      state.token = null;
      state.user = null;
    },
  }
})