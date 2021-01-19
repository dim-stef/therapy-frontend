import Brain from '../illustrations/Brain';

function TabComponent({title, icon}){
  return(
    <div className="custom-tab-component">
      <img src={icon} style={{width:40, height: 40}}/>
      <p style={{fontWeight:'bold', marginTop: 20}}>{title}</p>
    </div>
  )
}

export default TabComponent;
