import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Upload, Avatar } from 'antd';
import { UploadOutlined, UserOutlined, InboxOutlined } from '@ant-design/icons';
import {useSelector, useDispatch} from 'react-redux';
import {getUserData} from '../authentication/authenticationSlice';
import axios from 'axios';

const UpdateProfileSection = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(state=>state.authentication);
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('vertical');
  const [loading, setLoading] = useState(false);

  // initial values for the form
  const [name, setName] = useState(user.profile.name);
  const [avatar, setAvatar] = useState(null);

  useEffect(()=>{
    setName(user.profile.name);
  },[user.profile.name])

  async function onFinish(values){
    console.log(values);
    const newAvatar = values.avatar?values.avatar:null;
    const newName = values.name;

    let formData = new FormData();
    formData.append('name', newName);
    if(newAvatar){
      formData.append('avatar', newAvatar.file);
    }
    
    try{
      let url = `${process.env.REACT_APP_API_URL}/v1/update_user_profile/${user.profile.id}/`
      setLoading(true);
      let response = await axios.patch(url, formData);
      setLoading(false);
      dispatch(getUserData());
      console.log(response);
    }catch(e){
      setLoading(false);
      console.error(e);
    }
  }

  function handleRemove(){
    setAvatar(null);
  }

  function beforeUpload(_file){
    setAvatar(_file);
    return false;
  }
  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;

  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: { span: 14, offset: 4 },
        }
      : null;

  return (
    <>
      <Form
        {...formItemLayout}
        style={{display:'flex', flexFlow:'column', alignItems:'flex-start'}}
        layout={formLayout}
        form={form}
        onFinish={onFinish}
        initialValues={{ layout: formLayout }}
      >
        <Form.Item label="Profile picture">
          <Form.Item name="avatar" noStyle>
            <Upload.Dragger handleRemove={handleRemove}
            listType="picture" name="avatar" beforeUpload={beforeUpload} fileList={avatar?[avatar]:null}>
              <p className="ant-upload-drag-icon">
                {user.profile.avatar?<Avatar src={`${process.env.REACT_APP_DOMAIN}${user.profile.avatar}`} size={50}/>:<UserOutlined />}
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
        <Form.Item name="name" initialValue={name} rules={[{ required: true, message: 'This field cannot be empty' }]} 
          label="Name">
          <Input placeholder="Your name" value={name} onChange={e=>setName(e.target.value)}/>
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" loading={loading} htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UpdateProfileSection;
