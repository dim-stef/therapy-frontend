import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {unwrapResult} from '@reduxjs/toolkit';
//import {register} from '../authentication/authenticationSlice';
import './register.css';

function register(){

}
const RegisterTherapist = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(
      register({
        email: values.email,
        password1: values.password1,
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
          name="name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please enter your email' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password1"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password1"
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
            placeholder="Password again"
          />
        </Form.Item>
        <Form.Item name="bio">
          <Input.TextArea
            /*onChange={onChange}*/
            placeholder="Add a short bio"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
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

export default RegisterTherapist;
