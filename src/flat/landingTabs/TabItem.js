import Brain from '../illustrations/Brain';

function TabItem({title, details, image}){
  return(
    <div style={{display: 'flex', flexFlow: 'row wrap', marginTop: 50}}>
      <div className="landing-item-half-box">
        <img src={image} className="landing-image" style={{maxWidth: 300}}/>
      </div>
      <div className="landing-item-half-box" style={{textAlign: 'start'}}>
        <h1 style={{fontWeight: 'bold'}}>
          {title}
        </h1>
        <h3>
          {details}
        </h3>
      </div>
    </div>
  )
}

export default TabItem;
