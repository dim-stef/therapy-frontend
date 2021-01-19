import {configureStore} from '@reduxjs/toolkit';
import {authenticationSlice} from './features/authentication/authenticationSlice';
import {therapistsSlice} from './features/therapists/therapistsSlice';
import {sessionSlice} from './features/sessions/sessionSlice';
import {landingPageDataSlice} from './features/langingPageData/landingPageDataSlice';

export default configureStore({
  reducer:{
    authentication: authenticationSlice.reducer,
    therapists: therapistsSlice.reducer,
    sessions: sessionSlice.reducer,
    landingPageData: landingPageDataSlice.reducer
  }
})