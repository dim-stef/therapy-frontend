import { Typography } from 'antd';
import {FieldTimeOutlined, WechatOutlined, CheckOutlined } from '@ant-design/icons';
import ChooseUsItem from '../chooseUsItem/ChooseUsItem';
const { Title } = Typography;

function WhyChooseUs(){
  let items = [
    {
      icon: <FieldTimeOutlined style={{fontSize:70}}/>,
      title: "Online therapy is fast",
      subtext: "",
    },
    {
      icon: <WechatOutlined style={{fontSize:70}}/>,
      title: "Private and fast communication",
      subtext: "",
    },
    {
      icon: <CheckOutlined style={{fontSize:70}}/>,
      title: "Always available no matter where you are",
      subtext: "",
    },
  ]

  return(
    <div style={{width:'100%', justifyContent:'center', alignItems:'center',
    marginTop:70}}>
      <Title style={{fontWeight:'bold'}}>Why choose us</Title>
      {items.map(item=>{
        return(
          <ChooseUsItem title={item.title}>{item.icon}</ChooseUsItem>
        )
      })}
    </div>
  )
}

export default WhyChooseUs;
