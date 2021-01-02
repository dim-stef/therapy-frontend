import { Carousel } from 'antd';
import Quote from '../quote/Quote';
import quotes from './quotes.json';
import './quotes.css';

function Quotes(){
  return(
    <div style={{width:'100%'}}>
      <Carousel autoplay>
        {quotes.map(quote=>{
          return(
            <Quote quote={quote}/>
          )
        })}
      </Carousel>
    </div>
  )
  
}

export default Quotes;
