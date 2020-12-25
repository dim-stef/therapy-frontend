import './hero.css'

function Hero(){
  return(
    <div className="hero-container">
      <div className="hero-text">
        <h1 style={{color:'white', fontWeight:'bold', fontSize:'3em'}}>DrEmpathy</h1>
        <p style={{textAlign:'left', fontSize:'1.2em', color:'white'}}>Live therapy. You talk. We listen.</p>
        </div>
    </div>
  )
}

export default Hero;
