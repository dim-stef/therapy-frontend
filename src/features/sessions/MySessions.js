import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { Space } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import Session from './Session';
import {getMySessions} from './sessionSlice';
import axios from 'axios';

function MySessions(){
  const dispatch = useDispatch();
  const {mySessions} = useSelector(state=>state.sessions);

  console.log(mySessions);

  useEffect(()=>{
    dispatch(getMySessions());
  },[dispatch])

  return(
    <div className="App-container">
      <div style={{margin:'0 10px'}}>
        {mySessions.map(session=>{
          return(
            <React.Fragment key={session.surrogate}>     
              <Session session={session}/>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default MySessions;
