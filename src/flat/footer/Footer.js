import {FieldTimeOutlined, PhoneOutlined, 
  InfoCircleOutlined, FacebookFilled, TwitterCircleFilled,
  YoutubeFilled} from '@ant-design/icons';
import {useSelector} from 'react-redux';
import './footer.css';

function Footer(){
  const {data} = useSelector((state)=>state.landingPageData);
  const footerData = data.find(d=>d.slice_type=='footer');

  function handleFbClick(){

  }

  return(
    <footer style={{minHeight:300, backgroundImage: `url(${footerData.primary.image.url})`,
    width:'100%', backgroundPosition:'center', backgroundSize:'cover', paddingTop:150}}>
      <div className="footer-items-container">
        <div className="footer-col">
          <div className="footer-col-title">
            <FieldTimeOutlined style={{fontSize:18, marginBottom:3}}/>
            <span style={{marginLeft:5}}>Ώρες Λειτουργίας</span>
          </div>
          
          <span>Δευτέρα – Παρασκευή : Όλο το 24ωρο</span>
          <span>Σάββατο : Όλο το 24ωρο</span>
          <span>Κυριακή : Όλο το 24ωρο</span>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">
            <PhoneOutlined style={{fontSize:18, marginBottom:3}}/>
            <span style={{marginLeft:5}}>Επικοινωνία</span>
          </div>
          <span>Email: <b>info@drempathy.com</b></span>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">
            <InfoCircleOutlined style={{fontSize:18, marginBottom:3}}/>
            <span style={{marginLeft:5}}>Ποιοι Είμαστε</span>
          </div>
          <span>Η DrEmpathy είναι μια Online Πλατφόρμα παροχής υπηρεσιών Ψυχοθεραπείας.</span>
        </div>
      </div>
      <div className="footerer">
        <span>Copyright © 2020 DrEmpathy. Powered by DrEmpathy.</span>
        <div>
          <FacebookFilled style={{cursor:'pointer', margin:'0 5px'}} onClick={handleFbClick}/>
          <TwitterCircleFilled style={{cursor:'pointer', margin:'0 5px'}} onClick={handleFbClick}/>
          <YoutubeFilled style={{cursor:'pointer', margin:'0 5px'}} onClick={handleFbClick}/>
        </div>
       
      </div>
    </footer>
  )
}

export default Footer;
