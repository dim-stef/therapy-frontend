import { CheckCircleTwoTone } from '@ant-design/icons';
import { Button } from 'antd';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function StripeLinkSuccess(){
  const history = useHistory();

  function handleBackToHomeClick(){
    history.push('/');
  }

  return(
    <div className="App-container" style={{marginTop:50}}>
      <CheckCircleTwoTone style={{fontSize:50}} twoToneColor="#52c41a"/>
      <h1 style={{marginTop:20}}>Congratulations, you can now accept payments!</h1>
      <Button style={{marginTop:30}} type="primary" onClick={handleBackToHomeClick}>Back to home</Button>
    </div>
  )
}

export default StripeLinkSuccess;
