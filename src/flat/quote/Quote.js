import './quote.css';

function Quote({quote}){
  return(
    <div className="quote-container">
      <p className="quote-description">
      {quote.description}</p>
      <p style={{fontWeight:'bold', color:'#248bde'}}> - {quote.from}</p>
    </div>
  )
}

export default Quote;
