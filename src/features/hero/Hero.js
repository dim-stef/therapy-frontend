import VideoCall from '../../flat/illustrations/VideoCall';
import './hero.css'

function Hero(){
  return(
    <div className="hero-container">
      <div className="hero-text">
        <img src="https://www.drempathy.com/wp-content/uploads/2020/09/drempathy-logo-png.png" alt="Logo"/>
        <h1 style={{color:'white', fontWeight:'bold', fontSize:'3em'}}>DrEmpathy</h1>
        <p style={{textAlign:'left', fontSize:'1.2em', color:'white'}}>Live therapy. You talk. We listen.</p>
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <VideoCall className="hero-illustration"/>
      </div>
    </div>
  )
}

export default Hero;
