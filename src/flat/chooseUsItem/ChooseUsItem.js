import { Typography } from 'antd';
import './chooseUsItem.css';

const { Paragraph } = Typography;

function ChooseUsItem({children, title, subtext}){
  return(
    <div className="chooseUsItem">
      <div style={{display:'flex', flexFlow:'column', width:'60%',textAlign:'start'}}>
        <Paragraph style={{flexBasis:'20%', fontSize:'0.9em', margin:'20px 0'}}>{subtext}</Paragraph>
      </div>
      {children}
    </div>
  )
}

export default ChooseUsItem;