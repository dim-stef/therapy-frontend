import {useSelector} from 'react-redux';
import ActionButton from '../actionButton/ActionButton';
import './subscribeNewsletter.css'

function NewsLetter(){
  const {data} = useSelector((state)=>state.landingPageData);
  const subscribeData = data.find(d=>d.slice_type=='subscribe');
  return(
    <div className="landing-item-container" style={{backgroundColor: '#f5f7fb', padding:200}}>
      <div style={{backgroundImage: `url(${subscribeData.primary.image.url})`, position:'absolute',
      top:0,left:0,width:'100%',height:'100%'}}>

      </div>
      <div style={{display:'flex', flexFlow:'column', zIndex:1}}>
        <div style={{position: 'relative'}}>
          <div className="subscribe-placeholder" style={{width:'100%', display:'flex', justifyContent:'center',
          alignItems:'center', position: 'absolute', top: -70, zIndex:-1}}>
            <img style={{width:'50%'}} src={subscribeData.primary.placeholder.url}/>
          </div>
          <h1 style={{color: 'white'}}>{subscribeData.primary.title[0].text}</h1>
        </div>
        <p style={{color: 'white'}}>{subscribeData.primary.details[0].text}</p>
        <div style={{width: '80%', maxWidth:800, display: 'flex', 
        justifyContent:'center', alignItems:'center',marginTop:40, position: 'relative',
        alignSelf: 'center'}}>
          <input className="sub-input" placeholder="Enter your email address"/>
          <ActionButton text="Subscribe" style={{position:'absolute', right:5}}/>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter;
