import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {unwrapResult} from '@reduxjs/toolkit';
import {login} from '../authentication/authenticationSlice';
import './login.css';

const Login = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(
      login({
        email: values.email,
        password: values.password,
      }),
    )
      .then(unwrapResult)
      .then((result) => {
        if (result.non_field_errors) {
          //setErrors(result.non_field_errors);
        }
        console.log('Rer', result);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{paddingTop:70, width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
      
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        style={{}}
        onFinish={onFinish}
      >
        <h1 style={{fontWeight:'bold'}}>Login</h1>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item style={{display:'flex', flexFlow:'column'}}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <div style={{marginTop:10}}>
            <span>or </span>
            <Link to="/register">register now!</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
