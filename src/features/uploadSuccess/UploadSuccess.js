import {useHistory} from 'react-router-dom';
import { Button } from 'antd';

function UploadSuccess(){
  const history = useHistory();

  function handleClick(){
    history.push('/me/initial');
  }

  return(
    <div className="App-container">
      <h1>Upload succeeded!</h1>
      <h3 style={{maxWidth:800}}>Your documents have been uploaded and will be notified when they are verified. In the meantime 
      proceed to finish setting up your account.</h3>
      <Button type="primary" onClick={handleClick}>Take me to my profile page</Button>
    </div>
  )
}

export default UploadSuccess;
