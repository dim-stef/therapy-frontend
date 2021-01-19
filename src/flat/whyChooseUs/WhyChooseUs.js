import { Typography } from 'antd';
import {FieldTimeOutlined, WechatOutlined, LineChartOutlined, UserOutlined } from '@ant-design/icons';
import ChooseUsItem from '../chooseUsItem/ChooseUsItem';
const { Title } = Typography;

function WhyChooseUs(){
  let items = [
    {
      icon: <FieldTimeOutlined style={{fontSize:70}}/>,
      title: "Online therapy is fast",
      subtext: "Χρησιμοποιούμε αυστηρά κριτήρια για να επιλέξουμε εξειδικευμένους και άρτια καταρτισμένους συνεργάτες, ούτως ώστε να εξασφαλίσουμε το ύψιστο επίπεδο υπηρεσιών",
    },
    {
      icon: <WechatOutlined style={{fontSize:70}}/>,
      title: "Private and fast communication",
      subtext: "Online ή δια ζώσης θεραπεία; Σου δίνουμε την δυνατότητα να επιλέξεις ανάλογα με τις ανάγκες σου",
    },
    {
      icon: <UserOutlined style={{fontSize:70}}/>,
      title: "Always available no matter where you are",
      subtext: "Η καινοτόμος πρωτοβουλία της DrEmpathy σε φέρνει σε άμεση επαφή με συνανθρώπους σου που αισθάνονται το ίδιο με σένα (προσεχώς)",
    },
    {
      icon: <LineChartOutlined style={{fontSize:70}}/>,
      title: "Always available no matter where you are",
      subtext: "Παρακολούθησε την συναισθηματική πρόοδο που επιτυγχάνεις μέσα από τις υπηρεσίες μας, μέσω του πρωτοποριακού εργαλείου 'DrEmpathy mood tracker' (προσεχώς)",
    },
  ]


  return(
    <div style={{width:'100%', display:'flex', flexFlow:'column', 
    justifyContent:'center', alignItems:'center', marginTop:70}}>
      <Title style={{fontWeight:'bold'}}>Γιατί να επιλέξετε την DrEmpathy</Title>
      {items.map(item=>{
        return(
          <ChooseUsItem title={item.title} subtext={item.subtext}>{item.icon}</ChooseUsItem>
        )
      })}
    </div>
  )
}

export default WhyChooseUs;
