import {useSelector} from 'react-redux';
import VideoCall from '../../flat/illustrations/VideoCall';
import './hero.css'

function Hero(){
  const {data} = useSelector((state)=>state.landingPageData);
  const heroData = data.find(d=>d.slice_type=='hero_section');
  return(
    <div className="hero-container">
      <div className="hero-text">
        <h1 style={{marginBottom:0, fontSize:'4rem', 
        fontWeight: 'bolder', color:'white', textAlign:'start'}}>{heroData.primary.title[0].text}</h1>
        <p style={{textAlign:'left', fontSize:'1.2em', color:'white'}}>{heroData.primary.details[0].text}</p>
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <VideoCall className="hero-illustration"/>
      </div>
    </div>
  )
}

export default Hero;
