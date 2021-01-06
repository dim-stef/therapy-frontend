import {Typography} from 'antd';
import faq from './faq.json';
import './faq.css';

function Faq(){
  return(
    <div style={{display:'flex', flexFlow:'column', 
    justifyContent:'center', alignItems:'center', marginTop:10}}>
      <Typography.Title style={{fontWeight:'bold'}}>
      Συχνές ερωτήσεις για την DrEmpathy</Typography.Title>
      <div className="faq-container">
        {faq.map(f=>{
          return(
            <div className="faq-item">
              <p style={{fontWeight:'bold', textAlign:'start', color:'#248bde'}}>
              {f.question}</p>
              <p style={{textAlign:'start', color:'#656565'}}>{f.answer}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Faq;
