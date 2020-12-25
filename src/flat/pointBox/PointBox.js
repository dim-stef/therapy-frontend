import { Typography } from 'antd';
import "./pointBox.css";

const { Paragraph } = Typography;

export default function PointBox({children, title}){
  return(
    <div className="pointBox">
      {children}
      <Paragraph style={{marginTop:20, marginBottom:10,fontWeight:'bold', fontSize:17}}>{title}</Paragraph>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>

    </div>
  )
}