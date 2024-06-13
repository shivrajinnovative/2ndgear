import React, { useState } from "react";
import logo from "./../../assets/logo.png";
import line from "./assets/line.svg";
import google from "./assets/google.svg";

import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

export default function LoginModal() {
    const [number,setNumber]=useState('')
    const [error,setError]=useState('')
  const handleLoginSuccess = (response) => {
    console.log("Login Success:", response);
  };

  const handleLoginFailure = (error) => {
    console.log("Login Failed:", error);
  };
  return (
    <div
      className="modal fade signIn"
      id="loginModal"
      aria-hidden="true"
      aria-labelledby="loginModalLabel"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-6 center">
                <div className="text-center">
                  <img src={logo} alt="logo" className="img-fluid my-3" />
                  <p className="m-0 text-white ">A Whole New</p>
                  <h2 className="text-yellow">World of Plants</h2>
                </div>
              </div>
              <div className="col-lg-6 py-4 ">
                <div className="mx-4">
                  <p className="signInHeading py-3">
                    Sign in to 
                    <span className="text-primary fw-600">
                       &nbsp;Continue.......
                    </span>
                  </p>
                  <div className="mx-2">
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Mobile Number
                      </label>
                      <input type="number" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Password
                      </label>
                      <input type="password" className="form-control" />
                    </div>
                    <p className="text-end">
                      <span
                        className="text-primary"
                        type="button"
                        data-bs-target="#forgotPasswordModal"
                        data-bs-toggle="modal"
                      >
                        Forgot Password
                      </span>
                    </p>
                    <button className="btn text-white d-block mx-auto bg-primary my-3 px-5">
                      Sign in
                    </button>
                    <div className="px-sm-5 d-flex justify-content-center">
                      <img src={line} alt="line" className="col-2" />
                      <span className="signOption col-6 text-center">
                        OR YOU CAN SIGNIN VIA
                      </span>
                      <img src={line} alt="line" className="col-2" />
                    </div>
                    <div className="px-5 m-4 mx-5">
                      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
                        <GoogleLogin
                          onSuccess={handleLoginSuccess}
                          onError={handleLoginFailure}
                        />
                      </GoogleOAuthProvider>
                    </div>
                    <p className="text-center">
                      New to 2ndgear ?
                      <span className="text-primary"> Signup </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
