import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Skeleton, Tag, Card, Avatar, Typography } from 'antd';
import {CardElement, useStripe, Elements , useElements} from '@stripe/react-stripe-js';
import DatetimePicker from '../datetimePicker/DatetimePicker';
import axios from 'axios';
import './therapistCard.css';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function TherapistCard2({therapist}){
  const stripe = useStripe();
  const history = useHistory();
  const [color, ] = useState(getRandomColor())
  async function handleClick(event){
    console.log(therapist);

    const response = await fetch(process.env.REACT_APP_API_URL +
      `/v1/create_checkout_session/${therapist.profile.stripe_id}/`, {method: 'POST'});

    console.log(response);
    const session = await response.json();
    const result = await stripe.redirectToCheckout({sessionId:session.sessionId});
    if(result.error){
      console.error(result.error.message)
    }
  }

  console.log(process.env.REACT_APP_DOMAIN + therapist.avatar)
  console.log(therapist);
  return(
    <Card
      style={{ width: 300, marginTop: 16 }}
      actions={[
        <div>
          <DatetimePicker therapist={therapist} onOk={handleClick}/>
        </div>,
      ]}
    >
      <Skeleton loading={false} avatar active>
        <Card.Meta
          avatar={
            therapist.profile.avatar?
            <Avatar src={process.env.REACT_APP_DOMAIN + therapist.profile.avatar}></Avatar>:
            <Avatar size="large" style={{backgroundColor:color}}>{therapist.profile.name.substring(0,2).toUpperCase()}</Avatar>
          }
          title={therapist.profile.name}
          description={therapist.bio.substring(0,70)}
        >
        </Card.Meta>
      </Skeleton>
    </Card>
  )
}


function TherapistCard({therapist}){
  const stripe = useStripe();
  const history = useHistory();
  const [color, ] = useState(getRandomColor())
  async function handleClick(event){
    console.log(therapist);

    const response = await fetch(process.env.REACT_APP_API_URL +
      `/v1/create_checkout_session/${therapist.profile.stripe_id}/`, {method: 'POST'});

    console.log(response);
    const session = await response.json();
    const result = await stripe.redirectToCheckout({sessionId:session.sessionId});
    if(result.error){
      console.error(result.error.message)
    }
  }

  return(
    <div className="card" style={{width: 300, marginTop: 16}}>
      <div style={{display:'flex', flexFlow:'row', alignItems:'center'}}>
        {therapist.profile.avatar?
          <Avatar size="large" src={process.env.REACT_APP_DOMAIN + therapist.profile.avatar}></Avatar>:
          <Avatar size="large" style={{backgroundColor:color}}>{therapist.profile.name.substring(0,2).toUpperCase()}</Avatar>}
          <Typography.Paragraph style={{marginBottom:0, marginLeft:10, fontWeight:'bold', fontSize:'1rem'}}>{therapist.profile.name}</Typography.Paragraph>
      </div>
      {therapist.specialties.length > 0 ? (
        <div style={{marginTop:10, display:'flex', flexFlow:'row wrap'}}>
            {therapist.specialties.map(sp=>{
              return(
                <Tag style={{marginTop:3}}>{sp}</Tag>
              )
            })}
        </div>
      ):
      null}
      
      <div style={{margin:'20px 0px'}}>
        <Typography.Paragraph style={{marginBottom:0, textAlign:'start', fontWeight:'bold'}}>Βιογραφία</Typography.Paragraph>
        <Typography.Paragraph style={{textAlign:'start'}} ellipsis={{ rows: 4, expandable: true, symbol: 'more' }}>
          {therapist.bio}
        </Typography.Paragraph>
      </div>
      <div style={{marginTop:20}}>
        <DatetimePicker therapist={therapist} />
      </div>
    </div>
  )
}

export default TherapistCard;
