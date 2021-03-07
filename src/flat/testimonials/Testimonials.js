import { Carousel } from 'antd';
import {useSelector} from 'react-redux';
import Wave from '../illustrations/Wave';
import ActionButton from '../actionButton/ActionButton';
import './testimonials.css';

function Testimonials({data}){
  const reviews = data.find(d=>d.slice_type=='reviews')
  return(
    <div className="landing-item-container testimonials-section" style={{backgroundColor: '#f5f7fb'}}>
      <Wave style={{position: 'absolute', top: -195, zIndex:1, fill:'#f5f7fb'}}/>
      <div className="landing-item-half-box" style={{textAlign:'start'}}>
        <div style={{position: 'relative'}}>
          <div className="header-placeholder" 
          style={{backgroundImage: `url(${reviews.primary.placeholder.url})`}}></div>
          <h1>
            {reviews.primary.title[0].text}
          </h1>
        </div>
        
        <p>{reviews.primary.details[0].text}</p>
        <ActionButton text={reviews.primary.action_text[0].text}/>
      </div>
      <div className="landing-item-half-box">
        <Carousel autoplay>
          {reviews.items.map(item=>(
            <div className="testimonial-box">
              <h1 style={{fontSize:'1.3rem'}}>{item.testimonial_title[0].text}</h1>
              <p>{item.testimonial_details[0].text}</p>
              <div style={{display:'flex', flexFlow:'row', justifyContent:'center'}}>
                <img src={item.icon.url} style={{objectFit:'cover', height:60, width:60, borderRadius:'50%'}}/>
                <div style={{display:'flex', flexFlow:'column', alignItems:'flex-start', justifyContent:'center', marginLeft: 10}}>
                  <b>{item.doctor_name[0].text}</b>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <Wave style={{position: 'absolute', bottom: -195, zIndex:1, transform: 'rotate(180deg)', fill:'#f5f7fb'}}/>
    </div>
  )
}

export default Testimonials;
