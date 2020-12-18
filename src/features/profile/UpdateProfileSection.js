import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Upload, Avatar } from 'antd';
import { UploadOutlined, UserOutlined, InboxOutlined } from '@ant-design/icons';
import {useSelector} from 'react-redux';
import axios from 'axios';

const UpdateProfileSection = () => {
  const {user} = useSelector(state=>state.authentication);
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('vertical');
  const [name, setName] = useState(user.profile.name);
  const [avatar, setAvatar] = useState(user.profile.avatar);

  useEffect(()=>{
    setName(user.profile.name);
    setAvatar(user.profile.avatar)
  },[user.profile.name, user.profile.avatar])
  
  const normFile = (e) => {
    console.log('Upload event:', e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e && e.fileList;
  };

  async function onFinish(values){
    console.log(values);
    const newAvatar = values.avatar?values.avatar[0]:null;
    const newName = values.name;

    let formData = new FormData();
    formData.append('name', newName);
    formData.append('avatar', newAvatar);
    try{
      let url = `${process.env.REACT_APP_API_URL}/v1/user_profiles/${user.profile.id}/`
      let response = await axios.patch(url, formData);
      console.log(response);
    }catch(e){
      console.error(e);
    }
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
          <Form.Item name="avatar" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
            <Upload.Dragger multiple={false} listType="picture" name="avatar" beforeUpload={() => false}>
              <p className="ant-upload-drag-icon">
                {user.profile.avatar?<Avatar src={`${process.env.REACT_APP_DOMAIN}${user.profile.avatar}`} size={50}/>:<UserOutlined />}
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload.</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
        <Form.Item name="name" rules={[{ required: true, message: 'This field cannot be empty' }]} label="Name">
          <Input placeholder="Your name" value={name} onChange={e=>setName(e.target.value)}/>
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UpdateProfileSection;
