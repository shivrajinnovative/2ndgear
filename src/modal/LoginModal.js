import React from "react";
import logo from "./../assets/logo.png";


export default function LoginModal() {

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
                   
                    <p className="text-center">
                      New to 2ndgear ?
                      <span className="text-primary"  data-bs-target="#registerModal"
                        data-bs-toggle="modal" type='button'>&nbsp; Signup </span>
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
