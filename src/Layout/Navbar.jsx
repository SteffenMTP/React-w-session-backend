import React from 'react';
import { NavLink, Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import car from '../assets/Logo.png';

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link className="navbar-brand" href="#" to="/">
          <img src={car} alt="logo" width="80" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <NavLink end className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li> */}
            

            {/* Products fra BACKENDAPI */}
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">BackendAPI</span>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/Products">Products</NavLink></li>
                <li><NavLink className="dropdown-item" to="/ProductsAdminCreate">Products Create</NavLink></li>
                <li><NavLink className="dropdown-item" to="/ProductsAdmin">Products Admin</NavLink></li>
              </ul>
            </li>

            <button className='btn btn-primary'>Log in</button>

            {/* ANDET
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/noget">Noget</NavLink>
            </li> */}

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;