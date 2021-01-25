import {useSelector} from 'react-redux';
import Wave from '../illustrations/Wave';

function Partners(){
  const {data} = useSelector((state)=>state.landingPageData);
  const partnerData = data.find(d=>d.slice_type=='partners');
  return(
    <div className="landing-item-container">
      <div style={{display:'flex', flexFlow:'column', zIndex:1}}>
        <div style={{position: 'relative'}}>
          <div style={{width:'100%', display:'flex', justifyContent:'center',
          alignItems:'center', position: 'absolute', top: -40, zIndex:-1}}>
            <img style={{width:'50%'}} src={partnerData.primary.placeholder.url}/>
          </div>
          <h1>{partnerData.primary.title[0].text}</h1>
          <p>{partnerData.primary.details[0].text}</p>
        </div>
      </div>
      <div style={{width:'100%', display:'flex', flexFlow:'row wrap',
      justifyContent:'center',alignItems:'center', marginTop:50}}>
        {partnerData.items.map(partner=>(
          <img src={partner.image.url} style={{filter: 'grayscale(1)',
          margin:'0 20px', maxHeight:50}}/>
        ))}
      </div>
    </div>
  )
}

export default Partners;
