import PointBox from '../pointBox/PointBox';
import {QuestionOutlined, WechatOutlined, ScheduleOutlined } from '@ant-design/icons';
import './pointBoxList.css';

function PointBoxList(){
  let items = [
    {
      icon: <QuestionOutlined style={{fontSize:46}}/>,
      title: "Αναζήτησε τον Θεραπευτή σου",
      subtext: "Η εμπιστευτική μας αναζήτηση θα σε φέρει σε επαφή με πιστοποιημένους θεραπευτές.",
    },
    {
      icon: <WechatOutlined style={{fontSize:46}}/>,
      title: "Βρες τον Θεραπευτή σου σήμερα",
      subtext: "Επικοινώνησε με τον θεραπευτή σου μέσω της ιστοσελίδας μας ή του (προσεχώς) mobile app μας.",
    },
    {
      icon: <ScheduleOutlined style={{fontSize:46}}/>,
      title: "Προγραμμάτισε τις Συνεδρίες σου",
      subtext: "Κλείσε άμεσα την 1η συνεδρία με τον θεραπευτή της επιλογής σου.",
    },
  ]

  return(
    <div className="pointBoxList">
      {items.map(item=>{
        return(
          <PointBox title={item.title} subtext={item.subtext}>{item.icon}</PointBox>
        )
      })}
    </div>
  )
}

export default PointBoxList;
