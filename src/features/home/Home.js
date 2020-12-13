import TherapistCard from '../therapistCard/TherapistCard';

function Home(){
  return(
    <div style={{paddingTop:70}}>

      <h1>Therapists</h1>
      <div style={{display:'flex', justifyContent:'center', 
      alignItems:'center', flexFlow:'row wrap'}}>
        <Therapist style={{margin:10}}/>
        <Therapist/>
        <Therapist/>
        <Therapist/>
        <Therapist/>
        <Therapist/>
      </div>
    </div>
  )
}

function Therapist(){
  return(
    <div style={{margin:10}}>
      <TherapistCard/>
    </div>
  )
}

export default Home;
