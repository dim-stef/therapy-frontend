import {useState} from 'react';
import { Form, Input, Button, Upload, Avatar, Image } from 'antd';
import { UploadOutlined, IdcardOutlined } from '@ant-design/icons';
import {Link, useHistory} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import axios from 'axios';

function GetVerified(){
  const history = useHistory();
  let { id } = useParams();
  const {user} = useSelector(state=>state.authentication);
  if(!user.profile.is_therapist){
    //history.push('/');
  }
  const [formLayout, setFormLayout] = useState('vertical');
  const [form] = Form.useForm();
  const [uploading, setUploading] = useState(false);
  const [idBack, setIdBack] = useState(null);
  const [idFront, setIdFront] = useState(null);
  const [license, setLicense] = useState(null);
  const [doy, setDoy] = useState('');
  const [afm, setAfm] = useState('');
  const [iban, setIban] = useState('');
  const [loading, setLoading] = useState(false);

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

  async function handleUpload(values){
    console.log(values, license);
    const formData = new FormData();
    if(license){
      formData.append('license', values.license.file);
    }
    if(idBack){
      formData.append('id_back', values.id_back.file);
    }
    if(idFront){
      formData.append('id_front', values.id_front.file);
    }
    
    formData.append('afm', values.afm);
    formData.append('doy', values.doy);
    formData.append('iban', values.iban);

    setUploading(true);
    const url = `${process.env.REACT_APP_API_URL}/v1/update_therapist_profile/${user.therapist.id}/`;
    try{
      let response = await axios.patch(url, formData);
      console.log(response)
      setUploading(false);
      if(response.status==200){
        history.push('/upload_success');
      }
    }catch(e){
      setUploading(false);
      console.error(e);
    }
  }


  console.log(license);
  return(
    <div className="profile-container">
      <h1>Χρειαζόμαστε λίγα ακόμα πράγματα</h1>
      <Form
      {...formItemLayout}
      form={form}
      layout={formLayout}
      style={{display:'flex', flexFlow:'column', alignItems:'flex-start'}}
      onFinish={handleUpload}
      initialValues={{ layout: formLayout }}
      >
        <FileUploader2 name="license" file={license} 
        setFile={setLicense} title="Πάτα για να ανεβάσεις την άδεια σου"/>

        <FileUploader2 name="id_front" file={idFront} 
        setFile={setIdFront} title="Πάτα για να ανεβάσεις την ταυτότητα σου (μπροστά)"/>

        <FileUploader2 name="id_back" file={idBack} 
        setFile={setIdBack} title="Πάτα για να ανεβάσεις την ταυτότητα σου (πίσω)"/>
        
        <Form.Item name="afm" rules={[{ required: true, message: 'This field cannot be empty' }]} 
          label="ΑΦΜ">
          <Input placeholder="Το ΑΦΜ σου" value={afm} onChange={e=>setAfm(e.target.value)}/>
        </Form.Item>
        <Form.Item name="doy" rules={[{ required: true, message: 'This field cannot be empty' }]} 
          label="ΔΟΥ">
          <Input placeholder="Το ΔΟΥ σου" value={doy} onChange={e=>setDoy(e.target.value)}/>
        </Form.Item>
        <Form.Item name="iban" rules={[{ required: true, message: 'This field cannot be empty' }]} 
          label="IBAN">
          <Input placeholder="Το IBAN σου" value={afm} onChange={e=>setIban(e.target.value)}/>
        </Form.Item>
       <Form.Item {...buttonItemLayout}> 
          <Button
            type="primary"
            disabled={!license}
            htmlType="submit"
            loading={uploading}
            style={{ marginTop: 16 }}
          >
            {uploading ? 'Uploading' : 'Start Upload'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

function FileUploader2({file, setFile, title, name}){
  function handleRemove(){
    setFile(null);
  }

  function beforeUpload(_file){
    setFile(_file);
    return false;
  }

  console.log(file);

  
  return(
    <Form.Item>
      <Form.Item name={name} rules={[{ required: true, message: 'This field cannot be empty' }]} noStyle>
        <Upload.Dragger style={{height:150}} handleRemove={handleRemove}
        listType="picture" name={name} beforeUpload={beforeUpload} fileList={file?[file]:null}>
          <p className="ant-upload-drag-icon">
            {file?<Image
              width={200}
              src={`${URL.createObjectURL(file)}`}
            />:<IdcardOutlined />}
          </p>
          <p className="ant-upload-text">{title}</p>
        </Upload.Dragger>
      </Form.Item>
    </Form.Item>
  )
}
export default GetVerified;
