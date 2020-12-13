import './hero.css'

function Hero(){
  return(
    <div className="hero-container">
      <div className="hero-text">
        <h1 style={{color:'white', fontWeight:'bold', fontSize:'3em'}}>Hero psychology</h1>
        <p style={{textAlign:'left', fontSize:'1.2em', color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Phasellus urna nunc, lacinia a lacinia congue, maximus in ex. 
        Sed libero felis, ultricies ut interdum ac, ornare in massa.</p>
        </div>
    </div>
  )
}

export default Hero;
