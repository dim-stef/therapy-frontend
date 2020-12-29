import { Button, Space, Typography } from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {useStripe} from '@stripe/react-stripe-js';
import {getMySessions} from './sessionSlice';
import axios from 'axios';
import moment from 'moment';

function Session({session}){
  const {user} = useSelector(state=>state.authentication);

  return(
    <div>
      {user.therapist?.id==session.therapist.id?
      <EvaluateSession session={session}/>:<ProceedToPayment session={session}/>}
    </div>
  )
}

function EvaluateSession({session}){
  const dispatch = useDispatch();
  const {user} = useSelector(state=>state.authentication);

  async function updateStatus(type="AC"){
    try{
      const url = `${process.env.REACT_APP_API_URL}/v1/my_sessions/${session.surrogate}/`
      let formData = new FormData();
      formData.append('status', type);
      let response = await axios.patch(url, formData);
      dispatch(getMySessions());
      console.log(response.data);
    }catch(e){
      console.error(e);
    }
  }

  function handleAcceptClick(){
    updateStatus('AC')
  }

  function handleDeclineClick(){
    updateStatus('RJ')
  }

  return(
    <div style={{display:'flex', flexFlow:'column', alignItems:'flex-start'}}>
      <p style={{margin:0, marginTop:20, textAlign:'start'}}><b>{session.user.name}</b> has requested a session at 
      <b> {moment(new Date(session.start_date)).format("dddd, MMMM Do YYYY, h:mm:ss a")}</b></p>
      <Space style={{display:'flex', flexFlow:'row wrap', 
      justifyContent:'center', alignItems:'center', marginTop:10}}>
        {session.status=='AC'?<Button disabled>Waiting for payment</Button>:null}
        {session.status=='RJ'?<Button disabled>Declined</Button>:null}
        {session.status=='PD'?
          <>
          <Button type="primary" onClick={handleAcceptClick}>Accept</Button>
          <Button onClick={handleDeclineClick}>Decline</Button>
          </>
        :session.status=='PC'?<Button disabled>Payment completed</Button>:null}
        
      </Space>
    </div>
  )
}

function ProceedToPayment({session}){
  const stripe = useStripe();

  async function handlePayment(event){
    const therapist = session.therapist;
    console.log(therapist);

    const response = await fetch(process.env.REACT_APP_API_URL +
      `/v1/create_checkout_session/${therapist.profile.stripe_id}/${session.surrogate}/`, {method: 'POST'});

    console.log(response);
    const checkoutSession = await response.json();
    const result = await stripe.redirectToCheckout({sessionId:checkoutSession.sessionId});
    if(result.error){
      console.error(result.error.message)
    }
  }

  let feedbackText = '';
  if(session.status=='AC'){
    feedbackText = 'has been accepted.';
  }else if(session.status=='RJ'){
    feedbackText = 'has been rejected.';
  }else if(session.status=='PD'){
    feedbackText = 'is pending.';
  }else if(session.status=='PC'){
    feedbackText = 'has been completed. Your therapist will contact you with details on your email.';
  }

  return(
    <div style={{display:'flex', flexFlow:'column', alignItems:'flex-start'}}>
      <p style={{margin:0, marginTop:20, maxWidth:600, textAlign:'start'}}>Your session on
      <b> {moment(new Date(session.start_date)).format("dddd, MMMM Do YYYY, h:mm:ss a")}</b> {feedbackText}</p>
      {session.status=='AC'?<Button type="primary" onClick={handlePayment}>Proceed to payment</Button>:null}
      {session.status=='RJ'?<Button disabled>Your request was declined</Button>:null}
      {session.status=='PD'?<Button disabled>Waiting for therapists response</Button>:null}
      {session.status=='PC'?<Button disabled>Payment completed</Button>:null}
    </div>
  )
}

export default Session;
