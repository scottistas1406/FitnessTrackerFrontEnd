import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/navbar.css';



const Navbar = ({ token }) => {
  console.log('nav', token); // Access the token prop

  return (
    <nav className="navbar">
      <p>Witness the Fitness</p>
      <span>
        <ul className="navbar-list">
          <li className="navbar-item">
            <NavLink to="/" activeclassname="active-link">
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/routines" activeclassname="active-link">
              Routines
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/activities" activeclassname="active-link">
              Activities
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/register" activeclassname="active-link">
              Register
            </NavLink>
          </li>
          
          <li className="navbar-item">
            <NavLink to="/login" activeclassname="active-link">
              Login
            </NavLink>
          </li>
          {token && (
            <li className="navbar-item">
              <NavLink to="/myroutines" activeclassname="active-link">
                My Routines
              </NavLink>
            </li>
          )}
        </ul>
      </span>
    </nav>
  );
};
//etstetsetsetetssttesteetsttestestestestsetest
export default Navbar;

