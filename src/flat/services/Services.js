import React from 'react';
import {useSelector} from 'react-redux';
import ServiceItem from './ServiceItem';
import ActionButton from '../actionButton/ActionButton';

function Services(){
  const {data} = useSelector((state)=>state.landingPageData);
  const serviceItems = data.find(d=>d.slice_type=='provided_services');
  return(
    <div className="landing-item-container" style={{backgroundColor: '#f5f7fb'}}>
      <div style={{backgroundImage: `url(${serviceItems.primary.background_image.url})`, position:'absolute',
      top:0,left:0,width:'100%',height:'100%'}}>

      </div>
      <div style={{display:'flex', flexFlow:'column', zIndex:1}}>
        <div style={{position: 'relative'}}>
          <div style={{width:'100%', display:'flex', justifyContent:'center',
          alignItems:'center', position: 'absolute', top: -70, zIndex:-1}}>
            <img style={{width:'50%'}} src={serviceItems.primary.placeholder.url}/>
          </div>
          <h1 style={{color: 'white'}}>{serviceItems.primary.title[0].text}</h1>
        </div>
        <p style={{color: 'white'}}>{serviceItems.primary.details[0].text}</p>
        <div style={{display: 'flex', flexFlow:'row wrap', justifyContent:'space-evenly', width:'100%',marginTop:60}}>
          {serviceItems.items.map((item, i)=>(
            <React.Fragment key={i}>
              <ServiceItem title={item.title[0].text} details={item.details[0].text} image={item.image.url}/>
            </React.Fragment>
          ))}
        </div>
        <div style={{width: '100%', display: 'flex', justifyContent:'center', alignItems:'center',marginTop:40}}>
          <ActionButton text={serviceItems.primary.action_text[0].text}/>
        </div>
      </div>
    </div>
  )
}

export default Services;
