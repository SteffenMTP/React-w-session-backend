import {NavLink} from "react-router-dom";
import { useContext } from 'react';
import Logout from '../components/Logout.jsx';

import { LoginContext } from '../context/LoginContext.js';

const Navbar = () => {

  const { adminUser } = useContext(LoginContext)

  return (

    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="contact">Contact</NavLink></li>
        <li><NavLink to="products">Products</NavLink></li>
        {/* bør kun vises hvis man IKKE er logget ind */}
        {
          !adminUser &&
          <li><NavLink to="/login">Login</NavLink></li>
        }
        {/* bør kun vies hvis man er logget ind */}
        {
          adminUser &&
          <>
            <li><NavLink to="/admin">ADMIN</NavLink></li>
            <li><Logout /></li>
          </>
        }
      </ul>
    </nav>
  )
}

export default Navbar;