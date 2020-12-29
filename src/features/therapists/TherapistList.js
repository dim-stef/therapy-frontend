import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import {getTherapists} from './therapistsSlice';
import TherapistCard from '../therapistCard/TherapistCard';


function TherapistList(){
  const dispatch = useDispatch();
  const {therapists, loading} = useSelector(state=>state.therapists);

  useEffect(()=>{
    dispatch(getTherapists());
  },[dispatch])

  return(
    <div style={{display:'flex', justifyContent:'center', flexFlow:'row wrap'}}>
      {loading?
      <LoadingOutlined style={{ fontSize: 24 }} spin />:
      therapists.map(therapist=>{
        return <Therapist therapist={therapist}/>
      })}
    </div>
  )
}


function Therapist({therapist}){
  return(
    <div style={{margin:10}}>
      <TherapistCard therapist={therapist}/>
    </div>
  )
}

export default TherapistList;
