import { Typography } from 'antd';
import './chooseUsItem.css';

const { Paragraph } = Typography;

function ChooseUsItem({children, title, subtext}){
  return(
    <div className="chooseUsItem">
      
      <div style={{display:'flex', flexFlow:'column', width:'60%',textAlign:'start'}}>
        <Paragraph style={{marginTop:20, marginBottom:10,
        fontWeight:'bold', fontSize:18 }}>{title}</Paragraph>
        <Paragraph style={{flexBasis:'20%', fontSize:'0.9em'}}>{subtext}</Paragraph>
      </div>
      {children}
    </div>
  )
}

export default ChooseUsItem;