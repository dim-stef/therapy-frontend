import {Link} from 'react-router-dom';
import './becomePartner.css';

function BecomePartner(){
  return(
    <Link to="/register_therapist" className="become-partner">
      <p className="become-partner-text">Γίνε συνεργάτης</p>
    </Link>
  )
}

export default BecomePartner;
