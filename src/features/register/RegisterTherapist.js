import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Form, Input, Button, Checkbox, Select } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, PhoneOutlined, 
  HomeOutlined,MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {unwrapResult} from '@reduxjs/toolkit';
import {register} from '../authentication/authenticationSlice';
import './register.css';

const RegisterTherapist = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {token} = useSelector(state=>state.authentication);

  if(token){
    history.push(`/verification/${token}`);
  }

  const [result, setResult] = useState(null);

  const onFinish = (values) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        bio: values.bio,
        office_number: values.office_number,
        phone_number:values.phone_number,
        address: values.address,
        specialisation: values.specialisation,
        is_therapist:true,
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
        console.log('Rer', res);
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
        <h1 style={{fontWeight:'bold'}}>Δημιούργησε συνεργατικό λογαριασμό</h1>
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
        <Form.Item
          name="phone_number"
          rules={[{ required: true, message: 'Please enter your phone number' }]}
        >
          <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Τηλέφωνο" />
        </Form.Item>
        <Form.Item
          name="office_number"
          rules={[{ required: true, message: 'Please enter your office number' }]}
        >
          <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Τηλέφωνο γραφείου" />
        </Form.Item>
        <Form.Item
          name="address"
          rules={[{ required: true, message: 'Please enter your office address' }]}
        >
          <Input prefix={<HomeOutlined className="site-form-item-icon" />} placeholder="Διεύθυνση" />
        </Form.Item>
        <Form.Item name="specialisation" style={{textAlign:'start'}} 
        extra='Καταχώρησε τις ειδικότητες σου χωρισμένες με κόμμα. Πχ "Κατάθλιψη, παιδιά "'
        rules={[{ required: true, message: 'Please enter your specialisation' }]}
        >
          <Input placeholder="Ειδικότητες" />
          
        </Form.Item>
        <Form.Item name="bio">
          <Input.TextArea
            /*onChange={onChange}*/
            placeholder="Λίγα λόγια για σένα"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : 
                Promise.reject('You have to accepts the terms and conditions in order to create an account'),
            },
          ]}
        >
          <Checkbox>
            Έχω διαβάσει τους <a href="#">όρους και προϋποθέσεις</a>
          </Checkbox>
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
          {/*<div>
            <Link className="login-form-forgot">
              Forgot password
            </Link>
          </div> */}
          
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterTherapist;
