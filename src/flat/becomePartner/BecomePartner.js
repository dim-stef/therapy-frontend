import {Link} from 'react-router-dom';
import './becomePartner.css';

function BecomePartner(){
  //TODO FIX ME REDIRECTS
  return(
    <Link to="/pre_register" className="become-partner">
      <p className="become-partner-text">Γίνε συνεργάτης</p>
    </Link>
  )
}

export default BecomePartner;
