import './introLines.css';

function IntroLines(){
  let data = [
    {
      q: 'Νιώθεις μοναξιά;',
      a: 'Εδώ θα βρεις κάποιον να σε ακούσει'
    },
    {
      q: 'Σε καταβάλει η καθημερινότητα;',
      a: 'Θα σε βοηθήσουμε να διαχειριστείς καλύτερα την καθημερινότητα σου'
    }
  ] 

  return(
    <div className="intro-line-container">
      {data.map(d=>{
        return(
          <div className="intro-line-item"  style={{backgroundColor:'#3f3d56'}}>
            <div className="intro-line" >
              <p className="intro-line-text">{d.q}</p>
              
            </div>
            <div className="intro-line"style={{backgroundColor:'#0f79ce'}}>
              <p className="intro-line-text">{d.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default IntroLines;
