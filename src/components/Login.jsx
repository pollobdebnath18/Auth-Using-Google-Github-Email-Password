import React, { useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  //Login with Email/Password
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    if (!email || !password) {
      return;
    }

    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        setLoading(false);
        // If user Logged in then Show alert message
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          text: `Welcome back, ${result.user.displayName || "user"}`,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);

        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Login Failed",
          text: error.message,
          timer: 1500,
        });
      });
  };

  

  //login with Google
  const handleLoginWithGoogle = () => {
    console.log("clicked Google ");

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  //Login with Github
  const handleLoginWithGithub = () => {
    console.log("clicked github");

    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="flex justify-center mt-2">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login now </h1>
            <form onSubmit={handleLogIn} className="fieldset">
              <label className="label">Email</label>
              <input
                required
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />{" "}
              <br />
              <label className="label">Password</label>
              <input
                required
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-success mt-4">Login</button>
              <p className="mt-3 text-center text-sm">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-600 font-semibold hover-underlined"
                >
                  Sign Up
                </Link>
              </p>
            </form>
            <div className="divider">OR</div>
            <div className="flex gap-10">
              <button
                className="btn btn-active btn-primary"
                onClick={handleLoginWithGoogle}
              >
                Login With Google
              </button>
              <button
                className="btn btn-active btn-primary"
                onClick={handleLoginWithGithub}
              >
                Login With Github
              </button>
            </div>
            {/* {loading ? "Logged In...." : "Login"} */}
            {user && (
              <div className="mt-5 p-5  flex flex-col items-center gap-3">
                <img
                  src={user.photoURL}
                  alt="profile"
                  width={100}
                  height={100}
                />
                {/* User Info */}
                <h3>Name: {user.displayName}</h3>
                <h2>Email: {user.email}</h2>
                <h3>Last Sign In: {user.metadata.lastSignInTime}</h3>
                <h3>Account Created: {user.metadata.creationTime}</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
