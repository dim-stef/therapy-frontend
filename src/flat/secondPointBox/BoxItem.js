function BoxItem({title, details, icon}){
  return(
    <div className="secondPointBoxItem">
      <img src={icon} className="landing-image" style={{height:80, width:80}}/>
      <h3 style={{fontWeight: 'bold',marginTop:10}}>{title}</h3>
      <p>{details}</p>
    </div>
  )
}

export default BoxItem;
