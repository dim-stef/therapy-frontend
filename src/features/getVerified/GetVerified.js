import {useState} from 'react';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import axios from 'axios';

function GetVerified(){
  let { id } = useParams();
  const {user} = useSelector(state=>state.authentication);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);

  async function handleUpload(){
    const formData = new FormData();
    formData.append('license', file);
    setUploading(true);
    const url = `${process.env.REACT_APP_API_URL}/v1/update_therapist_profile/${user.therapist.id}/`;
    try{
      let response = await axios.patch(url, formData);
      console.log(response)
      setUploading(false);
    }catch(e){
      setUploading(false);
      console.error(e);
    }
  }

  function handleRemove(){
    setFile(null);
  }

  function beforeUpload(_file){
    setFile(_file);
    return false;
  }
  return(
    <div>
      <h1>Upload your license to get verified</h1>
      <Upload name="license" action={handleUpload} fileList={file?[file]:[]} 
      beforeUpload={beforeUpload} onRemove={handleRemove}>
        <Button icon={<UploadOutlined />}>Click to upload license</Button>
      </Upload>
      <Button
        type="primary"
        onClick={handleUpload}
        disabled={!file}
        loading={uploading}
        style={{ marginTop: 16 }}
      >
        {uploading ? 'Uploading' : 'Start Upload'}
      </Button>
    </div>
  )
}

export default GetVerified;
