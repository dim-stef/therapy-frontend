import { Button, Typography, Divider } from 'antd';
import {useSelector} from 'react-redux';
import './profile.css';

function Profile(){
  const {user} = useSelector(state=>state.authentication);
  return(
    <div className="App-container">
      <div className="profile-container">
        <h1>Hi, {user.profile.name}</h1>
        {user.therapist?<TherapistSection/>:null}
      </div>
    </div>
  )
}

function TherapistSection(){
  const {user} = useSelector(state=>state.authentication);

  return(
    <div>
      <h2 style={{fontWeight:'bold'}}>Payment method</h2>
      <div style={{display:'flex', flexFlow:'column', alignItems:'flex-start'}}>
        <Typography.Paragraph style={{textAlign:'start'}}>To get paid you need to create a stripe account. 
        You can later login to stripe to manage your payments.</Typography.Paragraph>
        <Button type="primary">Setup payment method</Button>
      </div>
    </div>
  )
}

export default Profile;
