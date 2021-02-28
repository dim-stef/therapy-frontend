import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Skeleton, Tag, Rate, Avatar, Typography } from 'antd';
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

function TherapistCard({therapist}){
  const history = useHistory();
  const [color, ] = useState(getRandomColor())

  function handleTherapistClick(){
    console.log(therapist);
    history.push(`/therapists/${therapist.id}`)
  }

  return(
    <div className="card" style={{width: 300, marginTop: 16, cursor:'pointer'}} onClick={handleTherapistClick}>
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
      {/* <div style={{marginTop:20}}>
        <DatetimePicker therapist={therapist} />
      </div> */}
      <div style={{marginTop:20}}>
        <Rate defaultValue={Math.ceil(therapist.reviews.average_rating)} disabled/>
      </div>
    </div>
  )
}

export default TherapistCard;
