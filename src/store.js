import {configureStore} from '@reduxjs/toolkit';
import {authenticationSlice} from './features/authentication/authenticationSlice';

export default configureStore({
  reducer:{
    authentication: authenticationSlice.reducer,
  }
})