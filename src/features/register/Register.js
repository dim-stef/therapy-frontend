import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {unwrapResult} from '@reduxjs/toolkit';
import {register} from '../authentication/authenticationSlice';
import './register.css';

function Register(){
  const history = useHistory();
  const dispatch = useDispatch();
  const {token} = useSelector(state=>state.authentication);

  // redirect to home if user is already logged in
  if(token){
    history.push('/');
  }

  const [result, setResult] = useState(null);
  const onFinish = (values) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        is_therapist:false,
        password1: values.password1,
        password2: values.password2
      }),
    )
      .then(unwrapResult)
      .then((res) => {
        setResult(res.data);
        if (res.data.non_field_errors) {
          //setErrors(result.non_field_errors);
        }
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleCreateTherapistAccount = ()=>{
    history.push('/register_therapist');
  }

  return (
    <div style={{paddingTop:70, width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
      
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        style={{}}
        onFinish={onFinish}
      >
        <h1 style={{fontWeight:'bold'}}>Δημιούργησε λογαργιασμό</h1>
        <Form.Item>
          <Typography.Text strong>Είσαι ψυχολόγος?</Typography.Text>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleCreateTherapistAccount}>
            Φτίαξε συνεργατικό λογαργιασμό
          </Button>
        </Form.Item>
        <Form.Item>
          <Typography.Text strong>Η</Typography.Text>
        </Form.Item>
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Όνομα" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please enter your email' }]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password1"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="password2"
          dependencies={['password1']}
          rules={[
            {
              required: true,
              message: 'Please enter your password again',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password1') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('The two passwords that you entered do not match');
              },
            }),
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password ξανά"
          />
        </Form.Item>
        <div>
          {result?.password1?result.password1.map(r=>{
            return <div className="ant-form-item-explain ant-form-item-explain-error">{r}</div>
          }):null}
          {result?.email?result.email.map(r=>{
            return <div className="ant-form-item-explain ant-form-item-explain-error">{r}</div>
          }):null}
        </div>
        <Form.Item style={{display:'flex', flexFlow:'column'}}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Εγγραφή
          </Button>
          <div style={{marginTop:10}}>
            <Link to="/login">Έχεις ήδη λογαριασμό?</Link>
          </div>
          {/*
          <div>
            <Link className="login-form-forgot">
              Forgot password
            </Link>
          </div> */}
          
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
