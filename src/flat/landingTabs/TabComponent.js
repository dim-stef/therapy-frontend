import Brain from '../illustrations/Brain';

function TabComponent({title, icon}){
  return(
    <div className="custom-tab-component">
      <img src={icon} style={{width:70, height: 70}}/>
      <p style={{fontWeight:'bold', marginTop: 20, color: '#208BBF',
      fontSize: '1.1rem'}}>{title}</p>
    </div>
  )
}

export default TabComponent;
