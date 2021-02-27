import {useState, useEffect} from 'react';
import {Input, Button, Form} from 'antd';
import axios from 'axios';

function ForgotPassword(){
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function resetPassword(){
    try{
      let body = {
        email: email
      }
      setLoading(true);
      let response = await axios.post(`${process.env.REACT_APP_DOMAIN}/rest-auth/password/reset/`, body);
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

      
        <h1>Forgot password</h1>
        <p>Βάλε το email του λογαριασμού σου και θα σου στείλουμε ενα link για να κάνεις reset password</p>
        <Form.Item>
          <Input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
        </Form.Item>
        <Form.Item>
          <Button loading={loading} type="primary" onClick={resetPassword}>Reset password</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ForgotPassword;
