import {useSelector} from 'react-redux';
import Wave from '../illustrations/Wave';
import ActionButton from '../actionButton/ActionButton';

function FirstPoint(){
  const {data} = useSelector((state)=>state.landingPageData);
  const firstPointData = data.find(d=>d.slice_type=='aboutsection');

  console.log(firstPointData);
  return(
    <div className="landing-item-container about-section">
      <Wave style={{position: 'absolute', top: -195, zIndex:1, fill:'#fff'}}/>
      <div className="landing-item-half-box">
        <img src={firstPointData.primary.image.url} className="landing-image"/>
      </div>
      <div className="landing-item-half-box" 
      style={{display:'flex',flexFlow:'column',alignItems:'flex-start', textAlign:'start'}}>
        <div style={{position: 'relative'}}>
          <div className="header-placeholder"
          style={{backgroundImage:`url(${firstPointData.primary.placeholder.url})`}}></div>
          <h1>{firstPointData.primary.title[0].text}</h1>
        </div>
        <p>{firstPointData.primary.details[0].text}</p>
        <ActionButton text={firstPointData.primary.action_text[0].text}/>
      </div>
      <Wave style={{position: 'absolute', bottom: -195, transform:'rotate(180deg)', zIndex:1, fill:'#fff'}}/>
    </div>
  )
}

export default FirstPoint;
