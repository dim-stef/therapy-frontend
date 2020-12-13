import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {unwrapResult} from '@reduxjs/toolkit';
//import {register} from '../authentication/authenticationSlice';
import './register.css';

function register(){

}
const Register = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(
      register({
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
        <h1 style={{fontWeight:'bold'}}>Register</h1>
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
          <span>or</span>
        </Form.Item>
        <Form.Item>
          
          <Button type="default">
            Create a therapist account
          </Button>
        </Form.Item>
        
        <Form.Item style={{display:'flex', flexFlow:'column'}}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button>
          <div style={{marginTop:10}}>
            <Link to="/login">Already have an account?</Link>
          </div>
          <div>
            <Link className="login-form-forgot">
              Forgot password
            </Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
