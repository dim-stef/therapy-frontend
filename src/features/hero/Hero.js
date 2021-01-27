import {useSelector} from 'react-redux';
import VideoCall from '../../flat/illustrations/VideoCall';
import ActionButton from '../../flat/actionButton/ActionButton';
import './hero.css'

function Hero(){
  const {data} = useSelector((state)=>state.landingPageData);
  const heroData = data.find(d=>d.slice_type=='hero_section');

  // too bored to calculate image height, just override it a bit

  return(
    <div className="hero-container">
      <div style={{backgroundImage: `url(${heroData.primary.background_image.url})`, position:'absolute', top: -60, left:0,
      width:'100%', height:`calc(100% + 60px)`}}>

      </div>
      <div className="hero-text">
        <h1 style={{marginBottom:0, fontSize:'4rem', wordBreak: 'break-all',
        fontWeight: 'bolder', color:'white', textAlign:'start'}}>{heroData.primary.title[0].text}</h1>
        <p style={{textAlign:'left', fontSize:'1.2em', color:'white'}}>{heroData.primary.details[0].text}</p>
        <ActionButton text={heroData.primary.action_text[0].text}/>
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <img src={heroData.primary.image.url} className="hero-illustration"/>
      </div>
    </div>
  )
}

export default Hero;
