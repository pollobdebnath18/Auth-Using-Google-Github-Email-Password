import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import {  signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase.config'


const Navigation = () => {
  const [user, setUser] = useState(null);

  // Listen for auth changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  // Handle Sign Out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <div className="navbar bg-gray-600">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl ml-5">Auth</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="text-xl flex gap-10">
            <NavLink to="/">Home</NavLink>
          </ul>
        </div>

        <div className="navbar-end mr-10 text-xl">
          {user ? (
            // Show only Sign Out if user is logged in
            <button
              className="btn btn-sm btn-error"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          ) : (
            // Show Login + Register if no user
            <div className="flex gap-5">
              <NavLink to="/login" className="btn btn-sm btn-primary">
                Login
              </NavLink>
              <NavLink to="/register" className="btn btn-sm btn-secondary">
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
