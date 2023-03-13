import './Navigation.style.scss';

import { ReactComponent as UserLogo } from '../../assets/user.svg';

import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";

import { UserContext } from '../../Context/user.context';

const Navigation = () =>{
    const { user } = useContext(UserContext);
    
    return(
      <Fragment>
        <div className='nav-container'>
                <ul>
                    <li><Link className="nav-link" to="/">Home</Link></li>
                    <li><Link className="nav-link" to="/Mozi">Mozi</Link></li>
                    <li><Link className="nav-link" to="/Vetítés">Vetítés</Link></li>
                </ul>
                <ul>
                  <li>
                  {user.id ? <Link className='nav-link-user-login' to="/Options"><span className='logo'><UserLogo className='logo' /><label>{user.name}</label></span></Link> : <Link className='nav-link-user-login' to="/Auth"><span className='logo'><UserLogo className='logo' /></span></Link>}
                  </li>
                </ul>
        </div>
        <Outlet />
      </Fragment>
    )
  }
  
  export default Navigation;