import {Link} from 'react-router-dom';
import './becomeMember.css';

function BecomeMember(){
  return(
    <Link to="/register" className="become-member">
      <p className="become-member-text">Κλείσε την 1η σου συνεδρία</p>
    </Link>
  )
}

export default BecomeMember;
