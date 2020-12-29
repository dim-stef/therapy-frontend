import React from 'react';
import {useState, useEffect} from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux';
import Session from './Session';
import {getMySessions} from './sessionSlice';
import axios from 'axios';

function MySessions(){
  const dispatch = useDispatch();
  const {mySessions, loading} = useSelector(state=>state.sessions);

  useEffect(()=>{
    dispatch(getMySessions());
  },[dispatch])

  return(
    <div className="App-container">
      <div style={{margin:'0 10px'}}>
        <h1 style={{textAlign:'start'}}>My sessions</h1>
        {loading?<LoadingOutlined style={{ fontSize: 24 }} spin />:
        mySessions.map(session=>{
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
