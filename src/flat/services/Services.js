import React from 'react';
import {useSelector} from 'react-redux';
import ServiceItem from './ServiceItem';

function Services(){
  const {data} = useSelector((state)=>state.landingPageData);
  const serviceItems = data.find(d=>d.slice_type=='provided_services');

  return(
    <div className="landing-item-container" style={{backgroundColor: '#f5f7fb'}}>
      <div style={{display:'flex', flexFlow:'column'}}>
        <h1>Lorem ipsum</h1>
        <p>A team of expert doctors that are leading our clinic! Meet our staff and visit us for your next problem!</p>
        <div style={{display: 'flex', flexFlow:'row wrap', justifyContent:'space-evenly', width:'100%',marginTop:60}}>
          {serviceItems.items.map((item, i)=>(
            <React.Fragment key={i}>
              <ServiceItem title={item.title[0].text} details={item.details[0].text} image={item.image.url}/>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services;
