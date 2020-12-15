import {useSelector} from 'react-redux';
import { UserOutlined } from '@ant-design/icons';
import {Link, useHistory} from 'react-router-dom';
import './header.css';

function Header(){
  const {token} = useSelector(state=>state.authentication);
  const history = useHistory();

  // if we are on landing page the background is "dark" and the header icons should be white
  const darkBackground = history.location.pathname === '/' && !token;
  console.log(darkBackground)
  function handleClick(){
    history.push(token?'me':'/login');
  }

  return(
    <div className="header">
      <div style={{flex:1}}>

      </div>
      <IconWrapper onClick={handleClick}>
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
