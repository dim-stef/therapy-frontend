import {useEffect} from 'react';
import axios from 'axios';

function StripeRefreshUrl(){

  async function createStripeAccountLink(){
    try{
      let url = process.env.REACT_APP_API_URL + '/v1/create_stripe_account_link/';
      let response = await axios.post(url);
      window.location.href = response.data.url;

      console.log(response);
    }catch(e){
      console.error(e);
    }
  }

  useEffect(()=>{
    createStripeAccountLink();
  },[])

  return(
    <div className="App-container">
      <h1>Please wait a bit we are redirecting you to stripe</h1>
    </div>
  )  
}

export default StripeRefreshUrl;
