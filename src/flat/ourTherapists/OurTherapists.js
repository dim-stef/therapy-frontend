import {Typography} from 'antd';
import OurTherapistsItem from '../ourTherapistItem/OurTherapistItem'
import therapists from './therapists.json';

function OurTherapists(){
  console.log(therapists);
  return(
    <div className="landing-item-container">
      <Typography.Title style={{fontWeight:'bold', marginTop:30}}>
      Οι Θεραπευτές μας</Typography.Title>
      <div style={{display:'flex', flexFlow:'row wrap', 
      justifyContent:'center', marginTop:30}}>
        {therapists.map(therapist=>{
          return(
            <OurTherapistsItem therapist={therapist}/>
          )
        })}
      </div>
    </div>
  )
}

export default OurTherapists;
