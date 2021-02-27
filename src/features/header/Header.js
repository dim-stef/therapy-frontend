import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import { Drawer } from 'antd';
import { UserOutlined, HomeOutlined, CalendarOutlined, MenuOutlined } from '@ant-design/icons';
import {Link, useHistory, useLocation} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './header.css';

function Header(){
  const [scroll, setScroll] = useState(0);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const {token} = useSelector(state=>state.authentication);
  const history = useHistory();
  const location = useLocation()
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  // if we are on landing page the background is "dark" and the header icons should be white
  let darkBackground = false;
  let transparentHeader = false;
  darkBackground = (history.location.pathname === '/' && !token) || scroll > 0;

  if(history.location.pathname === '/'){
    if(scroll>0){
      darkBackground = false;
      transparentHeader = false;
    }else{
      darkBackground = true;
      transparentHeader = true;
    }
  }

  function handleProfileClick(){
    history.push(token?'/me':'/pre_login');
    onClose()
  }

  function handleBlogClick(){
    history.push('/blogs');
    onClose()
  }

  function handleHomeClick(){
    history.push('/');
    onClose()
  }

  function handleSessionClick(){
    history.push('/my_sessions');
    onClose()
  }

  function handleForTherapistsClick(){
    history.push('/pre_register');
    onClose()
  }

  function handleTherapistClick(){
    history.push('/therapists');
    onClose()
  }
  
  function scrollListener(e){
    setScroll(window.scrollY)
  }

  function onClose(){
    setDrawerVisible(false);
  }
  useEffect(()=>{
    window.addEventListener('scroll', scrollListener);
    
    return () =>{
      window.removeEventListener('scroll', scrollListener);
    }
  },[])

  return(
    
    <div className={`header ${darkBackground?'header-dark':'header-light'}`} 
    style={{backgroundColor:transparentHeader?'transparent':null}}>
      <div style={{flex:1, display:'flex'}}>
        <IconWrapper onClick={handleHomeClick} darkBackground={darkBackground}>
          <HomeOutlined style={{fontSize: 24, color:darkBackground?'white':'black'}}/>
        </IconWrapper>
        
      </div>

      {isMobile?(
        <>
        <IconWrapper darkBackground={darkBackground} onClick={()=>setDrawerVisible(true)}>
          <MenuOutlined style={{fontSize: 24, color:darkBackground?'white':'black'}}/>
        </IconWrapper>
        <Drawer
          title={'Drempathy'}
          placement='left'
          closable={true}
          onClose={onClose}
          visible={drawerVisible}
          key='left'
        >
          <IconDrawerWrapper onClick={handleBlogClick} darkBackground={darkBackground}>
          <p style={{margin: 0, fontWeight:'bold'}}>Blog</p>
          </IconDrawerWrapper>
          {token?
            <IconDrawerWrapper onClick={handleSessionClick} darkBackground={darkBackground}>
              <p style={{margin: 0, fontWeight:'bold'}}>Συνεδρίες</p>
            </IconDrawerWrapper>
            :null}
          {token?
            <IconDrawerWrapper onClick={handleTherapistClick} darkBackground={darkBackground}>
              <p style={{margin: 0, fontWeight:'bold'}}>Θεραπευτές</p>
            </IconDrawerWrapper>
            :null}
          <IconDrawerWrapper onClick={handleProfileClick} darkBackground={darkBackground}>
            <p style={{margin: 0, fontWeight:'bold'}}>{token?'Το προφίλ μου':'Συνδέσου'}</p>
          </IconDrawerWrapper>
          {!token?
            <IconDrawerWrapper onClick={handleForTherapistsClick} darkBackground={darkBackground}>
            <p style={{margin: 0, fontWeight:'bold'}}>Για επαγγελματίες</p>
          </IconDrawerWrapper>:null}
        </Drawer>
        </>
        ):(
        <>
        <IconWrapper onClick={handleBlogClick} darkBackground={darkBackground}>
          {/*<UserOutlined style={{fontSize: 24, color:darkBackground?'white':'black'}}/>*/}
          <p style={{margin: 0, fontWeight:'bold'}}>Blog</p>
        </IconWrapper>
        {token?
          <IconWrapper onClick={handleSessionClick} darkBackground={darkBackground}>
            {/*<CalendarOutlined style={{fontSize: 24, color:darkBackground?'white':'black'}}/>*/}
            <p style={{margin: 0, fontWeight:'bold'}}>Συνεδρίες</p>
          </IconWrapper>
          :null}
        {token?
          <IconWrapper onClick={handleTherapistClick} darkBackground={darkBackground}>
            <p style={{margin: 0, fontWeight:'bold'}}>Θεραπευτές</p>
          </IconWrapper>
          :null}
        <IconWrapper onClick={handleProfileClick} darkBackground={darkBackground}>
          {/*<UserOutlined style={{fontSize: 24, color:darkBackground?'white':'black'}}/>*/}
          <p style={{margin: 0, fontWeight:'bold'}}>{token?'Το προφίλ μου':'Συνδέσου'}</p>
        </IconWrapper>
        {!token?
          <IconWrapper onClick={handleForTherapistsClick} darkBackground={darkBackground}>
            {/*<CalendarOutlined style={{fontSize: 24, color:darkBackground?'white':'black'}}/>*/}
            <p style={{margin: 0, fontWeight:'bold'}}>Για επαγγελματίες</p>
          </IconWrapper>:null}
        </>
      )}
    </div>
    
  )
}

function IconWrapper({children, darkBackground, onClick}){
  return(
    <div onClick={onClick} role="button" style={{height:'100%', padding:10, display:'flex', 
    justifyContent:'center', alignItems:'center', cursor:'pointer', color:darkBackground?'white':'black'}}>
      {children}
    </div>
  )
}

function IconDrawerWrapper({children, darkBackground, onClick}){
  return(
    <div onClick={onClick} role="button" style={{cursor:'pointer', margin:10, color:'black', fontSize:'1.2rem'}}>
      {children}
    </div>
  )
}
export default Header;
