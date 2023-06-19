import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink exact to="/" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/routines" activeClassName="active-link">
            Routines
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/activities" activeClassName="active-link">
            Activities
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/register" activeClassName="active-link">
            Register
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/login" activeClassName="active-link">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
