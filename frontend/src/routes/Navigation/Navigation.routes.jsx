import './Navigation.style.scss';

import { ReactComponent as UserLogo } from '../../assets/user.svg';

import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";

const Navigation = () =>{
    return(
      <Fragment>
        <div className='nav-container'>
                <ul>
                    <li><Link className="nav-link" to="/">Home</Link></li>
                    <li><Link className="nav-link" to="/Mozi">Mozi</Link></li>
                    <li><Link className="nav-link" to="/Vetítés">Vetítés</Link></li>
                </ul>
                <ul>
                  <li><Link className='nav-link-user-login' to="/Login"><span className='logo'><UserLogo className='logo' /></span></Link></li>
                </ul>
        </div>
        <Outlet />
      </Fragment>
    )
  }
  
  export default Navigation;



  //usercontext, UserDropdown