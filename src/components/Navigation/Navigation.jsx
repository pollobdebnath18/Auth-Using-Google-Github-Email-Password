import React from "react";
import { NavLink } from "react-router";
import "../../App.css";

const Navigation = () => {
  return (
    <div>
      <div className="navbar bg-gray-600">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl ml-5 ">Auth</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" text-xl">
            <NavLink to="/">Home</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="login-register flex gap-5 mr-10 text-xl">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </div>
        </div>
      </div>
      {/* <div className="navigation ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div> */}
    </div>
  );
};

export default Navigation;
