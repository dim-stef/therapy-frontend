import {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Layout from './features/layout/Layout';
import {useSelector, useDispatch} from 'react-redux';
import LandingPageScreen from './screens/LandingPageScreen';
import RegisterScreen from './screens/RegisterScreen';
import RegisterTherapistScreen from './screens/RegisterTherapistScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoadingScreen from './screens/LoadingScreen';
import PurchaseSuccessScreen from './screens/PurchaseSuccessScreen';
import StripeLinkSuccessScreen from './screens/StripeLinkSuccessScreen';
import StripeRefreshUrlScreen from './screens/StripeRefreshUrlScreen';
import SessionApprovalScreen from './screens/SessionApprovalScreen';
import MySessionsScreen from './screens/MySessionsScreen';
import GetVerifiedScreen from './screens/GetVerifiedScreen';
import UploadSuccessScreen from './screens/UploadSuccessScreen';
import BlogListScreen from './screens/BlogListScreen';
import BlogPostScreen from './screens/BlogPostScreen';
import {getUserData} from './features/authentication/authenticationSlice';
import 'react-toastify/dist/ReactToastify.css';
import logo from './logo.svg';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const {user, token, checkingForToken} = useSelector(state=>state.authentication);

  useEffect(()=>{
    dispatch(getUserData())
  },[token, dispatch])
  
  console.log(user,token)
  if(checkingForToken){
    return(
      <LoadingScreen/>
    )
  }
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <LandingPageScreen />
            </Route>
            <Route path="/therapists">
              <HomeScreen/>
            </Route>
            <Route path="/me/:initial?">
              <ProfileScreen />
            </Route>
            <Route path="/users/oauth/callback">
              <StripeLinkSuccessScreen />
            </Route>
            <Route path="/reauth">
              <StripeRefreshUrlScreen />
            </Route>
            <Route path="/success">
              <PurchaseSuccessScreen />
            </Route>
            <Route path="/my_sessions">
              <MySessionsScreen />
            </Route>
            <Route path="/blog/:uid">
              <BlogPostScreen />
            </Route>
            <Route path="/blogs">
              <BlogListScreen />
            </Route>
            <Route path="/session/:id">
              <SessionApprovalScreen />
            </Route>
            <Route path="/register">
              <RegisterScreen />
            </Route>
            <Route path="/register_therapist">
              <RegisterTherapistScreen />
            </Route>
            <Route path="/verification/:id">
              <GetVerifiedScreen/>
            </Route>
            <Route path="/upload_success">
              <UploadSuccessScreen/>
            </Route>
            <Route path="/login">
              <LoginScreen />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
