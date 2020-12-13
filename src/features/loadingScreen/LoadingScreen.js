import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

function LoadingScreen(){
  return(
    <div style={{height:'100vh', width:'100vw', display:'flex', 
    justifyContent:'center', alignItems:'center'}}>
      <LoadingOutlined style={{ fontSize: 24 }} spin />
    </div>
  )
}

export default LoadingScreen;
