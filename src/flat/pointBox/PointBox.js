import { Typography } from 'antd';
import "./pointBox.css";

const { Paragraph } = Typography;

export default function PointBox({children, title, subtext}){
  return(
    <div className="pointBox">
      {children}
      <Paragraph style={{marginTop:20, marginBottom:10,fontWeight:'bold', fontSize:17}}>{title}</Paragraph>
      <Paragraph style={{fontSize:'0.9em'}}>{subtext}</Paragraph>

    </div>
  )
}