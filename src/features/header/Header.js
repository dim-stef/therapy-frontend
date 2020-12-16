import {useSelector} from 'react-redux';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import {Link, useHistory} from 'react-router-dom';
import './header.css';

function Header(){
  const {token} = useSelector(state=>state.authentication);
  const history = useHistory();

  // if we are on landing page the background is "dark" and the header icons should be white
  const darkBackground = history.location.pathname === '/' && !token;

  function handleProfileClick(){
    history.push(token?'me':'/login');
  }

  function handleHomeClick(){
    history.push('/');
  }

  return(
    <div className="header">
      <div style={{flex:1, display:'flex'}}>
        <IconWrapper onClick={handleHomeClick}>
          <HomeOutlined style={{fontSize: 24, color:darkBackground?'white':'black'}}/>
        </IconWrapper>
      </div>
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
