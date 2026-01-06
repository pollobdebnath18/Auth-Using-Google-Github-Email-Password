import React from "react";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Register = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  //Login with Google
  const handleSignInGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //Login with Github
  const handleSignInGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex justify-center mt-7">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <form className="fieldset">
            <label className="label">Name</label>
            <input type="email" className="input" placeholder="Name" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </form>
          <div className="divider">OR</div>
          <div className="flex gap-10">
            <button
              className="btn btn-active btn-primary"
              onClick={handleSignInGoogle}
            >
              Login With Google
            </button>
            <button
              className="btn btn-active btn-primary"
              onClick={handleSignInGithub}
            >
              Login With Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
