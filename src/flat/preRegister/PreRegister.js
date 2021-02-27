import {Typography, Avatar, Button} from 'antd';
import {useHistory} from 'react-router-dom';

function PreRegister(){
  const history = useHistory();

  function onClick(){
    history.push('/register_therapist');
  }

  return(
    <div className="App-container">
      <div style={{display:'flex', flexFlow:'column', alignItems:'flex-start', maxWidth:600}}>
        <div style={{display:'flex', flexFlow:'row wrap'}}>
          <Typography.Paragraph style={{textAlign:'start', maxWidth:400, margin:10}}>
          Maecenas efficitur lacus et orci condimentum tincidunt. 
          Phasellus ut enim non massa cursus dignissim et eu magna. 
          Aenean finibus euismod diam, ut tempus nunc suscipit et. Aenean at sagittis diam.
          </Typography.Paragraph>
          <div style={{margin:10}}>

            <Avatar src="https://randomuser.me/api/portraits/men/29.jpg" 
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}></Avatar>
          </div>
        </div>
        <Button type="primary" style={{margin:10}} onClick={onClick}>Δημιούργησε επαγγελματικό λογαριασμό</Button>
      </div>
    </div>
  )
}

export default PreRegister;
