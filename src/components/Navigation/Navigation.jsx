import React from "react";
import { NavLink } from "react-router";
import "../../App.css";

const Navigation = () => {
  return (
    <div className="navigation ">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};

export default Navigation;
