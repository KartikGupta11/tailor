import React from "react";
import logo from "../Login/LOGO.png";
import "../Dashboard/dashboard.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="dashboard">
      <nav className="navbar bg">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <img src={logo} alt="logo" className="logo_head" />
          </span>
        </div>
      </nav>

      {/* dashboard navigation */}
      <div className="navigation">
        <div className="first_navigation">Hello Sneha!</div>
        <div className="second_navigation">
          <ul className="link">
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>

            <li>
              <NavLink to="/report/totalorders"> Report</NavLink>
            </li>

            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
