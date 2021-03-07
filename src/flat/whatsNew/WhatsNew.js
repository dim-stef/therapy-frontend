import {useSelector} from 'react-redux';
import BlogList from '../../features/blog/BlogList';
import ActionButton from '../actionButton/ActionButton';
import Wave from '../illustrations/Wave';

function WhatsNew({data}){
  const whatsNewData = data.find(d=>d.slice_type=='whats_new');
  return(
    <div className="landing-item-container news-section">
      <Wave style={{position: 'absolute', top: -195, zIndex:1, fill:'#fff'}}/>

      <div style={{display:'flex', flexFlow:'column', zIndex:1}}>
        <div style={{position: 'relative'}}>
          <div className="news-placeholder" style={{width:'100%', display:'flex', justifyContent:'center',
          alignItems:'center', position: 'absolute', top: -70, zIndex:-1}}>
            <img style={{width:'50%'}} src={whatsNewData.primary.placeholder.url}/>
          </div>
          <h1>{whatsNewData.primary.title[0].text}</h1>
          <p>{whatsNewData.primary.details[0].text}</p>
        </div>
      </div>
      <BlogList small/>
    </div>
  )
}

export default WhatsNew;
