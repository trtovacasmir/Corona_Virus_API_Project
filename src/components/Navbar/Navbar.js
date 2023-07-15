import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import COVID from "./COVID-19.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="corona-background"></div>
      <img src={COVID} alt="Covid-logo" className="logo" />
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/covid" exact activeClassName="active">
            Covid Stats
          </NavLink>
        </li>
        <li>
          <NavLink to="/country" exact activeClassName="active">
            Country Stats
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact activeClassName="active">
            About Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
