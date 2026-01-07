import React, { useState } from "react";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //Sign up using Email & Password
  const handleWithEmailAndPassword = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    // Password Validation
    if (password.length < 6) {
      setErrorMessage("Password must be 6 digit ");
      return;
    }

    setSuccess(false);
    setErrorMessage("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        //updateProfile displayName in firebase
        updateProfile(result.user, {
          displayName: name,
        })
          .then(() => {
            console.log("Profile Updated with name", name);
          })
          .catch((err) => {
            console.log(err);
          });
        console.log("User Registered", result.user);
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="flex justify-center mt-2">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl font-bold">Register now </h1>
          <form onSubmit={handleWithEmailAndPassword} className="fieldset">
            <label className="label">Name</label>
            <input name="name" className="input" placeholder="Name" required />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-success mt-4">Register</button>
          </form>
          {success && (
            <p className="text-green-600 mt-2">
              Congratulations Registration Successfully
            </p>
          )}
          {errorMessage && (
            <p className="text-red-600 mt-2">{errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
