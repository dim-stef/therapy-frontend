import './ourTherapistItem.css';

function OurTherapistItem({therapist}){
  return(
    <div className="our-therapist-item-container">
      <img src={therapist.image} alt="therapist" 
      style={{borderRadius:'50%', objectFit:'cover', height:200, width: 200}}/>
      <p style={{fontWeight:'bold', color:'#248bde',marginTop:10,
      marginBottom:0, fontSize:'1rem'}}>{therapist.name}</p>
      <span style={{fontWeight:'bold', color:'#545454'}}>Ψυχολόγος</span>
      <q style={{marginTop:20, fontStyle:'italic', color:'#484848'}}>
      {therapist.description}</q>
      <div style={{flexFlow:'row wrap'}}>
        {/*Add social media buttons here*/}
      </div>
    </div>
  )
}

export default OurTherapistItem;
