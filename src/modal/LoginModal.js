import React, { useEffect, useState } from "react";
import logo from "./../assets/logo.png";
import { useFormSubmit } from "../utils/useFormSubmit";
import { useCsrfToken } from "../utils/useCsrfToken";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../store/slices/authSlice";
import { Bounce, toast } from "react-toastify";

// aA1@3456
// aA1@3456
// aA1@3456
// aA1@3456
// 12345678aA!

export default function LoginModal() {
  const cookieValue = useCsrfToken();
  const login = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const initialFormData = {
    mobile_no: "",
    password: "",
    loginas: "buyer",
  };

  const {
    formData,
    handleChange,
    handleSubmit,
    loading,
    error,
    submitted,
    responseData,
  } = useFormSubmit(initialFormData);

  useEffect(() => {
    if (responseData && responseData.flag === "1") {
      toast.success('Login Successfully!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      dispatch(setLogin());
      localStorage.setItem("token", responseData.userData.token);
      localStorage.setItem("name", responseData.userData.name);
      <Navigate to="/" />;
      document.getElementById("closeModalBtn").click();
    }
  }, [responseData]);

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
                  <p className="m-0 text-white">A Whole New</p>
                  <h2 className="text-yellow">World of Plants</h2>
                </div>
              </div>
              <div className="col-lg-6 py-4">
                <div className="mx-4">
                  <p className="signInHeading py-3">
                    Sign in to
                    <span className="text-primary fw-600">
                      &nbsp;Continue.......
                    </span>
                  </p>
                  {login && <span>Logged in successfully!</span>}
                  <form
                    className="mx-2"
                    onSubmit={(e) => handleSubmit(e, cookieValue, "login")}
                  >
                    {error && <span className="text-danger">{error}</span>}
                    {responseData && (
                      <span className="text-danger">{responseData.emsg}</span>
                    )}
                    <div className="mb-3">
                      <label htmlFor="mobile_no" className="form-label">
                        Mobile Number
                      </label>
                      <input
                        required
                        type="tel"
                        pattern="[0-9]{10}"
                        title="Please enter a 10-digit mobile number"
                        id="mobile_no1"
                        name="mobile_no"
                        value={formData.mobile_no}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        required
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <p className="text-end">
                      <span
                        className="text-primary"
                        data-bs-target="#enterMobileNumber"
                        data-bs-toggle="modal"
                        role="button"
                      >
                        Forgot Password
                      </span>
                    </p>
                    <button
                      type="submit"
                      className="btn text-white d-block mx-auto bg-primary my-3 px-5"
                      disabled={loading}
                    >
                      {loading && "Verifying..."}
                      {!loading && error && "Try Again"}
                      {!loading && !error && !submitted && "Sign in"}
                      {!loading && !error && submitted && "Signed in"}
                    </button>
                    <button
                      type="button"
                      className="d-none"
                      id="closeModalBtn"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>

                    <p className="text-center">
                      New to 2ndgear?
                      <span
                        className="text-primary"
                        data-bs-target="#registerModal"
                        data-bs-toggle="modal"
                        role="button"
                      >
                        &nbsp; Signup{" "}
                      </span>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
