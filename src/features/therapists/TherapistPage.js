import {useState, useEffect} from 'react';
import {
  useParams
} from "react-router-dom";
import {useSelector} from 'react-redux';
import { Skeleton, Tag, Divider, Avatar, Typography, Rate } from 'antd';
import {CardElement, useStripe, Elements , useElements} from '@stripe/react-stripe-js';
import axios from 'axios';
import DatetimePicker from '../datetimePicker/DatetimePicker';

import './therapistStyles.css';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function TherapistPage({props}){
  let { id } = useParams();
  const [therapist, setTherapist] = useState(null);
  const [color, ] = useState(getRandomColor());
  const {user} = useSelector(state=>state.authentication);

  async function getTherapist(){
    try{
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/v1/therapists/${id}/`)
      setTherapist(response.data);
    }catch(e){
      console.error(e);
    }
  }

  async function handleRatingChange(number){
    try{
      
      if(number==0){
        let response = await axios.delete(`${process.env.REACT_APP_API_URL}/v1/reviews/${therapist.review.id}/`);
      }else{
        let body = {
          therapist: therapist.id,
          stars: number,
        }
        
        // we check here if the user has already reviewed the therapist
        if(therapist.review){
          let response = await axios.patch(`${process.env.REACT_APP_API_URL}/v1/reviews/${therapist.review.id}/`, body)
        }else{
          let response = await axios.post(`${process.env.REACT_APP_API_URL}/v1/reviews/`, body);
        }
      }

      // get therapist again with the review changes
      getTherapist()
    }catch(e){

    }
  }

  useEffect(()=>{
    getTherapist();
  },[])

  if(therapist){
    return(
      <div className="App-container">
        <div className="therapist" style={{width:800,maxWidth:'90%', margin: '0 auto', display:'flex',flexFlow:'column'}}>
          <div style={{width:'100%',flexFlow:'row wrap'}}>
            <div style={{minWidth:200, display:'flex', flexFlow: 'row wrap'}}>
              {therapist.profile.avatar?
              <Avatar size={100} src={process.env.REACT_APP_DOMAIN + therapist.profile.avatar}></Avatar>:
              <Avatar size={100} style={{backgroundColor:color}}>{therapist.profile.name.substring(0,2).toUpperCase()}</Avatar>}
              <div style={{display:'flex', flexFlow:'column', marginLeft:30, alignItems: 'baseline', flex:1}}>
                <Typography.Paragraph style={{marginBottom:0, fontWeight:'bold', fontSize:'1.3rem'}}>{therapist.profile.name}</Typography.Paragraph>
                <Typography.Text style={{fontSize:'0.8rem', color:'#5d5d5d', fontWeight:'bold'}}>{therapist.address}</Typography.Text>
              </div>
              <div style={{display:'flex', flexFlow:'column'}}>
                <div style={{display:'flex', flexFlow:'row wrap', alignItems:'center'}}>
                  <span>Εκτιμώμενος χρόνος επιβεβαίωσης</span>
                  <div style={{width:45, height:30, backgroundColor:'#ff572238', marginLeft:10, display:'flex',
                  justifyContent:'center', alignItems:'center', borderRadius:3}}>
                    <span style={{color:'orangered', fontWeight:'bold'}}>15'</span>
                  </div>
                </div>
                <div style={{marginTop: 30, width: '100%'}}>
                  <DatetimePicker therapist={therapist}/>
                </div>
              </div>
            </div>
            
          </div>
          <Divider />
          <div style={{display:'flex', flexFlow:'column'}}>
            <div style={{display:'flex', flexFlow:'row wrap'}}>
              <span style={{marginRight:10, fontWeight:'bold'}}>Απλή συνεδρία:</span>
              <Typography.Text>{therapist.credit}€</Typography.Text>
            </div>
            <div style={{display:'flex', flexFlow:'row wrap', marginTop: 30}}>
              <span style={{marginRight:10, fontWeight:'bold'}}>Εξειδίκευση: </span>
              {therapist.specialties.map(specialty=>{
                return(
                  <Tag>{specialty}</Tag>
                )
              })}
            </div>
          </div>
          <Divider />
          <Typography.Paragraph style={{textAlign:'left', marginTop:20}}>{therapist.bio}</Typography.Paragraph>
          {user?<Rate allowClear onChange={handleRatingChange} defaultValue={therapist.review?therapist.review.stars:0}/>:null}
        </div>
      </div>
    )
  }else{
    return null;
  }
}

export default TherapistPage;
