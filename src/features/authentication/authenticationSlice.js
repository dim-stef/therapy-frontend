import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

async function getTokens(credentials){
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
    return data;
  } catch (e) {}
}

export const login = createAsyncThunk(
  'authentication/login',
  async (credentials) => {
    let data = await getTokens(credentials);
    localStorage.setItem('token', data.access)
    localStorage.setItem('refresh', data.refresh)
    return data;
  },
);

export const register = createAsyncThunk(
  'authentication/register',
  async (credentials) => {
    const url = process.env.REACT_APP_DOMAIN + '/rest-auth/registration/'
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        bio: credentials.bio,
        is_therapist: credentials.is_therapist,
        password1: credentials.password1,
        password2: credentials.password2,
      })
    });
    let data = await response.json();
    //console.log("data",data);
    let tokens = {};
    if(response.status==200 || response.status==201){
      tokens = await getTokens({email:credentials.email, password:credentials.password1});
      localStorage.setItem('token', tokens.access)
      localStorage.setItem('refresh', tokens.refresh)
    }

    let payload = {
      access: tokens?.access,
      refresh: tokens?.refresh,
      data: data
    }
    return payload;
  }
)

export const getUserData = createAsyncThunk(
  'authentication/getUserData',
  async () => {
    let userData = {};
    let userToken;

    try {
      userToken = localStorage.getItem('token');
      console.log(userToken, localStorage);
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

        //let stripeDataUrl = 'https://api.stripe.com/v1/accounts'; 
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
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action.payload,'payload');
      if(action.payload.access){
        state.token = action.payload.access
        state.refresh = action.payload.refresh;
      }
    },
    [register.pending]: (state, action) => {
      console.log(action.payload,'payload');
      state.loading = true;
    },
    [register.rejected]: (state, action) => {
      console.log(action.payload,'payload');
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