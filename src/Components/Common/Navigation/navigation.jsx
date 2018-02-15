import React from "react";
import "./navigation.css";

import { NavLink } from "react-router-dom";


const Navigation = (props) => {
  return(
    <ul>

      <li><NavLink exact to="/" activeClassName="active">Login</NavLink></li>
      <li><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
      <li><NavLink to="/notes" activeClassName="active">Notes</NavLink></li>

    </ul>
  )
}

export default Navigation;