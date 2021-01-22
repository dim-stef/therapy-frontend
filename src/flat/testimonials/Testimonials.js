import { Carousel } from 'antd';
import {useSelector} from 'react-redux';
import './testimonials.css';

function Testimonials(){
  const {data} = useSelector((state)=>state.landingPageData);
  const reviews = data.find(d=>d.slice_type=='reviews')
  return(
    <div className="landing-item-container" style={{backgroundColor: '#f5f7fb'}}>
      <div className="landing-item-half-box" style={{textAlign:'start'}}>
        <h1 style={{fontSize: '3.2rem'}}>
          {reviews.primary.title[0].text}
        </h1>
        <p>{reviews.primary.details[0].text}</p>
      </div>
      <div className="landing-item-half-box">
        <Carousel>
          {reviews.items.map(item=>(
            <div className="testimonial-box">
              <h1>{item.testimonial_title[0].text}</h1>
              <p>{item.testimonial_details[0].text}</p>
              <div style={{display:'flex', flexFlow:'row', justifyContent:'center'}}>
                <img src={item.icon.url} style={{objectFit:'cover', height:60, width:60, borderRadius:'50%'}}/>
                <div style={{display:'flex', flexFlow:'column', alignItems:'flex-start', justifyContent:'center'}}>
                  <b>{item.doctor_name[0].text}</b>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Testimonials;
