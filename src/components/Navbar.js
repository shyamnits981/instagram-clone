import React from 'react';
import { Link } from 'react-router-dom';

const NavBar=()=>{

    return(

        <nav>
        <div className="nav-wrapper white">
          <Link to="/" className="brand-logo left"><img src='/insta-clone.png' alt="logo"/></Link>
          <ul id="nav-mobile" className="right">
            <li><Link to="signIn">Signin</Link></li>
            <li><Link to="signup">Signup</Link></li>
            <li><Link to="profile">Profile</Link></li>
            <li><Link to="createpost"><img src='/cam.png' alt='camera' /></Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar;
