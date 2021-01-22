function BoxItem({title, details, icon}){
  return(
    <div className="secondPointBoxItem">
      <img src={icon} className="landing-image" style={{height:80, width:80}}/>
      <h1>{title}</h1>
      <p>{details}</p>
    </div>
  )
}

export default BoxItem;