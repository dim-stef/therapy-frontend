import { UserOutlined } from '@ant-design/icons';
import {Link, useHistory} from 'react-router-dom';
import './header.css';

function Header(){
  const history = useHistory();

  function handleClick(){
    history.push('/login');
  }

  return(
    <div className="header">
      <div style={{flex:1}}>

      </div>
      <IconWrapper onClick={handleClick}>
        <UserOutlined style={{fontSize: 24, color:'white'}}/>
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
