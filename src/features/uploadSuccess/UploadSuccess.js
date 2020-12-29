import {useHistory} from 'react-router-dom';
import { Button } from 'antd';

function UploadSuccess(){
  const history = useHistory();

  function handleClick(){
    history.push('/');
  }

  return(
    <div className="App-container">
      <h1>Upload succeeded!</h1>
      <h2>Your documents have been uploaded and will be notified when they are verified.</h2>
      <Button type="primary" onClick={handleClick}>Take me back home</Button>
    </div>
  )
}

export default UploadSuccess;
