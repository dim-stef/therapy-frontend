import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Button, Typography, Divider, Tabs } from 'antd';
import {useSelector} from 'react-redux';
import UpdateProfileSection from './UpdateProfileSection';
import AvailabilitySection from './AvailabilitySection';
import axios from 'axios';
import './profile.css';


function Profile(){
  const {user} = useSelector(state=>state.authentication);

  function callback(key) {
    //console.log(key);
  }

  return(
    <div className="App-container">
      <div className="profile-container" style={{display:'block'}}>
        <div>
          <h1 style={{textAlign:'start'}}>Hi, {user.profile.name}</h1>
          {user.therapist?<TherapistSection/>:null}
        </div>
        
        {user.therapist?
        <div style={{display:'flex', flexFlow:'column', alignItems:'flex-start',marginTop:20}}>
          <h2 style={{fontWeight:'bold'}}>Your availability</h2>
          <Typography.Paragraph style={{textAlign:'start'}}>Select the hours you can accept sessions for each day.</Typography.Paragraph>
          <AvailabilitySection therapist={user.therapist}/>
        </div>:null}

        <div style={{display:'flex', flexFlow:'column', alignItems:'flex-start',marginTop:20}}>
          <h2 style={{fontWeight:'bold'}}>Your profile</h2>
          <UpdateProfileSection/>
        </div>   
      </div>
    </div>
  )
}

function TherapistSection(){
  const {user} = useSelector(state=>state.authentication);
  const [loading, setLoading] = useState(false);
  const [loginUrl, setLoginUrl] = useState(null);
  const [chargesEnabled, setChargesEnables] = useState(user.profile.charges_enabled);

  async function getStripeLoginLink(){
    try{
      setLoading(true)
      let url = process.env.REACT_APP_API_URL + '/v1/get_stripe_login/';
      let response = await axios.post(url);
      setLoginUrl(response.data.url);
      setLoading(false);
    }catch(e){
      setLoading(false);
    }
  }

  function handleLoginClick(){
    window.location.href = loginUrl;
  }

  function handleSetupStripeClick(){
    window.location.href = user.profile.stripe_account_link;
  }

  useEffect(()=>{
    if(user.profile.charges_enabled){
      getStripeLoginLink()
    }
  },[user.profile.charges_enabled])

  return(
    <div className="profile-row-container">
      
      <h2 style={{fontWeight:'bold'}}>Payment method</h2>
      <div style={{display:'flex', flexFlow:'column', alignItems:'flex-start'}}>
        <Typography.Paragraph style={{textAlign:'start'}}>{chargesEnabled?'Go to your dashboard to check your balance.':
        `To get paid you need to create a stripe account. You can later login to stripe to manage your payments.`}</Typography.Paragraph>
        <Button type="primary" loading={loading} onClick={chargesEnabled?handleLoginClick:handleSetupStripeClick}>
        {chargesEnabled?'View your dashboard':'Setup payment method'}</Button>
      </div>
    </div>
  )
}

export default Profile;
