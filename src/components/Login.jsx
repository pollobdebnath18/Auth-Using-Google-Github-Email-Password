import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center mt-7">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <form className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" /> <br />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <div className="divider">OR</div>
          <div className="flex gap-10">
            <button className="btn btn-active btn-primary">
              Login With Google
            </button>
            <button className="btn btn-active btn-primary">
              Login With Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
