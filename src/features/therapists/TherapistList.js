import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getTherapists} from './therapistsSlice';
import TherapistCard from '../therapistCard/TherapistCard';

function TherapistList(){
  const dispatch = useDispatch();
  const {therapists} = useSelector(state=>state.therapists);

  useEffect(()=>{
    dispatch(getTherapists());
  },[dispatch])

  return(
    <div style={{display:'flex', justifyContent:'center', flexFlow:'row wrap'}}>
      {therapists.map(therapist=>{
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
