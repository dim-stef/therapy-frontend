import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Input, Button, Form} from 'antd';
import axios from 'axios';

function ResetPassword(){
  const {uid, token} = useParams();
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [loading, setLoading] = useState(false);

  async function resetPassword(){
    try{
      let body = {
        new_password1: password1,
        new_password2: password2,
        uid: uid,
        token: token,
      }
      setLoading(true);
      let response = await axios.post(`${process.env.REACT_APP_DOMAIN}/rest-auth/password/reset/confirm/`, body);
      setLoading(false);
    }catch(e){
      console.error(e);
      setLoading(false);
    }
  }

  return(
    <div className="App-container">
      <Form
        name="forgot-password"
      >
        <h1>Reset password</h1>
        <p>Βάλε τον νέο σου κωδικό</p>
        <Form.Item>
          <Input placeholder="Password" type="password" onChange={e=>setPassword1(e.target.value)}/>
        </Form.Item>
        <Form.Item>
          <Input placeholder="Password again" type="password" onChange={e=>setPassword2(e.target.value)}/>
        </Form.Item>
        <Form.Item>
          <Button loading={loading} type="primary" onClick={resetPassword}>Reset password</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ResetPassword;
