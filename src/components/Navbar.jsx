import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
const Navbar = () => (
  <div id="nav-container">
    <div id="nav">
      {/* https://elevatetrust.ai/ */}
      <Link to="/" className="nav-logo-container">
        <img src={logo} className="navbar-logo" />
      </Link>
      <div className="documentation-button">
        <Link to="/documentation" className="documentation-container">
          <button className="documentation-button">API</button>
        </Link>
      </div>
    </div>
    <hr className="nav-line" />
  </div>
);

export default Navbar;
