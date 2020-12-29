import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import { UserOutlined, HomeOutlined, CalendarOutlined } from '@ant-design/icons';
import {Link, useHistory} from 'react-router-dom';
import './header.css';

function Header(){
  const [scroll, setScroll] = useState(0);
  const {token} = useSelector(state=>state.authentication);
  const history = useHistory();

  // if we are on landing page the background is "dark" and the header icons should be white
  let darkBackground = false;
  darkBackground = (history.location.pathname === '/' && !token) || scroll > 0;

  if(history.location.pathname === '/' && !token){
    if(scroll>0){
      darkBackground = false;
    }else{
      darkBackground = true;
    }
  }

  function handleProfileClick(){
    history.push(token?'/me':'/login');
  }

  function handleHomeClick(){
    history.push('/');
  }

  function handleSessionClick(){
    history.push('/my_sessions');
  }

  function scrollListener(e){
    setScroll(window.scrollY)
  }

  useEffect(()=>{
    window.addEventListener('scroll', scrollListener);
    
    return () =>{
      window.removeEventListener('scroll', scrollListener);
    }
  },[])

  return(
    <div className={`header ${darkBackground?'header-dark':'header-light'}`}>
      <div style={{flex:1, display:'flex'}}>
      <IconWrapper onClick={handleHomeClick}>
        <HomeOutlined style={{fontSize: 24, color:darkBackground?'white':'black'}}/>
      </IconWrapper>
        
      </div>
      {token?
      <IconWrapper onClick={handleSessionClick}>
        <CalendarOutlined style={{fontSize: 24, color:darkBackground?'white':'black'}}/>
      </IconWrapper>
      :null}
      <IconWrapper onClick={handleProfileClick}>
        <UserOutlined style={{fontSize: 24, color:darkBackground?'white':'black'}}/>
      </IconWrapper>
    </div>
  )
}

function IconWrapper({children, onClick}){
  return(
    <div onClick={onClick} role="button" style={{height:'100%', padding:10, display:'flex', 
    justifyContent:'center', alignItems:'center', cursor:'pointer'}}>
      {children}
    </div>
  )
}

export default Header;
