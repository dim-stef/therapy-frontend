import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function SessionApproval(){
  let { id } = useParams();
  async function getSession(){
    try{
      const url = `${process.env.REACT_APP_API_URL}/v1/my_sessions/${id}/`
      let response = await axios.get(url);
      console.log(response);
    }catch(e){
      console.error(e);
    }
  }

  useEffect(()=>{
    getSession();
  },[])

  return(
    <div>

    </div>
  )
}

export default SessionApproval;
