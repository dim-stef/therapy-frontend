import {useSelector} from 'react-redux';

function FirstPoint(){
  const {data} = useSelector((state)=>state.landingPageData);
  const firstPointData = data.find(d=>d.slice_type=='aboutsection');

  console.log(firstPointData);
  return(
    <div className="landing-item-container">
      <div className="landing-item-half-box">
        <img src={firstPointData.primary.image.url} className="landing-image"/>
      </div>
      <div className="landing-item-half-box" 
      style={{display:'flex',flexFlow:'column',alignItems:'flex-start', textAlign:'start'}}>
        <h1 style={{fontSize:'3.2rem'}}>{firstPointData.primary.title[0].text}</h1>
        <p>{firstPointData.primary.details[0].text}</p>
      </div>
    </div>
  )
}

export default FirstPoint;
