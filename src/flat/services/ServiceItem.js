import Brain from '../illustrations/Brain';

function ServiceItem({title, details, image}){
  return(
    <div style={{minWidth: 200, maxWidth:300, padding: 30, 
    display:'flex', flexFlow:'column', justifyContent:'center', alignItems:'center', backgroundColor:'white',
    borderRadius: 25, margin: 20}}>
      <img src={image} style={{width: 100}}/>
      <h1 style={{fontSize: '1.8rem'}}>{title}</h1>
      <p>{details}</p>
    </div>
  )
}

export default ServiceItem;
