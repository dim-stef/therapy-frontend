import React from 'react';
import {useSelector} from 'react-redux';
import BoxItem from './BoxItem';
import './secondPointBox.css';

function SecondPointBox({data}){
  const secondPointData = data.find(d=>d.slice_type=='benefit_section');

  return(
    <div className="landing-item-container benefit-section" style={{backgroundColor:'#f5f7fb'}}>
      <div className="landing-item-half-box" 
      style={{display:'flex',flexFlow:'column',alignItems:'flex-start', textAlign:'start'}}>
        <div style={{position: 'relative'}}>
          <div className="header-placeholder" 
          style={{backgroundImage: `url(${secondPointData.primary.placeholder.url})`}}></div>
          <h1>{secondPointData.primary.title[0].text}</h1>
        </div>
        
        <div style={{width: '100%', display:'flex', flexFlow:'row wrap'}}>
          {secondPointData.items.map((item,i)=>{
            return(
              <React.Fragment key={i}>
                <BoxItem title={item.title[0].text} details={item.details[0].text} 
                  icon={item.icon.url}
                />
              </React.Fragment>
            )
          })}        
        </div>
      </div>
      <div className="landing-item-half-box">
        <img src={secondPointData.primary.image.url} className="landing-image"/>
      </div>
    </div>
  )
}

export default SecondPointBox;
