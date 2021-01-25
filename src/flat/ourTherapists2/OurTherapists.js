import {useSelector} from 'react-redux';
import ActionButton from '../actionButton/ActionButton';
import Wave from '../illustrations/Wave';

function OurTherapists(){
  const {data} = useSelector((state)=>state.landingPageData);
  const membersData = data.find(d=>d.slice_type=='member');

  return(
    <div className="landing-item-container" style={{flexFlow:'column'}}>
      <div style={{position: 'relative'}}>
      <div className="header-placeholder" 
      style={{backgroundImage: `url(${membersData.primary.placeholder.url})`}}></div>
        <h1 style={{fontWeight:'bold'}}>
        {membersData.primary.title[0].text}</h1>
      </div>
      <p>{membersData.primary.details[0].text}</p>
      <div style={{display:'flex', flexFlow:'row wrap', 
      justifyContent:'center', marginTop:30}}>
        {membersData.items.map(therapist=>{
          return(
            <div style={{display: 'flex', flexFlow: 'column', justifyContent:'center',
            alignItems:'center', margin: '0 30px'}}>
              <img src={therapist.image.url} style={{maxWidth: 200}}/>
              <h3 style={{fontWeight:'bold',
              marginTop:20}}>{therapist.name[0].text}</h3>
              <p style={{marginTop:0}}>{therapist.specialty[0].text}</p>
            </div>
          )
        })}
      </div>
      <div style={{width: '100%', marginTop: 40}}>
        <ActionButton text={membersData.primary.action_text[0].text}/>
      </div>
      <Wave style={{position: 'absolute', bottom: -195, transform:'rotate(180deg)', zIndex:1, fill:'#fff'}}/>

    </div>
  )
}

export default OurTherapists;
