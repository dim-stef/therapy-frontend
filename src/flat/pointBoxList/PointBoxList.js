import PointBox from '../pointBox/PointBox';
import {QuestionOutlined, WechatOutlined, ScheduleOutlined } from '@ant-design/icons';
import './pointBoxList.css';

function PointBoxList(){
  let items = [
    {
      icon: <QuestionOutlined style={{fontSize:46}}/>,
      title: "Search for your therapist",
      subtext: "",
    },
    {
      icon: <WechatOutlined style={{fontSize:46}}/>,
      title: "Find your therapist today",
      subtext: "",
    },
    {
      icon: <ScheduleOutlined style={{fontSize:46}}/>,
      title: "Schedule your sessions",
      subtext: "",
    },
  ]

  return(
    <div className="pointBoxList">
      {items.map(item=>{
        return(
          <PointBox title={item.title}>{item.icon}</PointBox>
        )
      })}
    </div>
  )
}

export default PointBoxList;
