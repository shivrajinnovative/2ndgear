import React, { useState, useRef, useEffect } from "react";
import mobile from "./assets/images/mobile.png";
import axios from "axios";
import { useSelector } from "react-redux";
import { Bounce, toast } from "react-toastify";

export default function MobileVerificationModal() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const inputsRef = useRef([]);
  const tokens = useSelector((state) => state.register);
  useEffect(() => {
    inputsRef.current = inputsRef.current.slice(0, otp.length);
  }, [otp]);

  const handleChange = (element, index) => {
    const value = element.value;
    if (/^[0-9]$/.test(value) || value === "") {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        if (value !== "" && index < 5) {
          setTimeout(() => {
            inputsRef.current[index + 1].focus();
          }, 10);
        }
        return newOtp;
      });
    }
  };

  const handleFocus = (index) => {
    const firstEmptyIndex = otp.findIndex((value) => value === "");
    if (firstEmptyIndex !== -1 && firstEmptyIndex !== index) {
      inputsRef.current[firstEmptyIndex].focus();
    } else {
      inputsRef.current[index].select();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (index > 0) {
        e.preventDefault();
        setOtp((prevOtp) => {
          const newOtp = [...prevOtp];
          newOtp[index - 1] = "";
          inputsRef.current[index - 1].focus();
          return newOtp;
        });
      } else {
        setOtp((prevOtp) => {
          const newOtp = [...prevOtp];
          newOtp[0] = "";
          return newOtp;
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let OTP = otp.join("");
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/user-otp-verification`,
      { otp_code: OTP, ...tokens }
    );
    if (data.flag === "1") {
      setError("");

      toast.success("Registration Done Successfully Now Login !", {
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
      const modalTrigger = document.getElementById("loginTarget");
      if (modalTrigger) {
        modalTrigger.click();
      }
    }
    if (data.flag === "2") {
      setError(data.emsg);
    }
  };

  return (
    <div
      className="modal fade forgotPassword"
      id="mobileVerificationModal"
      aria-hidden="true"
      aria-labelledby="mobileVerificationModalLabel"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-6 p-lg-5 ">
                <img src={mobile} className="img-fluid p-lg-5" alt="mobile" />
              </div>
              <div className="col-lg-6 pt-5 pt-lg-0 text-center  center poppins">
                <div>
                  <h5 className="py-3">Mobile Phone Verification</h5>
                  <p>Enter OTP</p>
                  <form className="my-3" onSubmit={handleSubmit}>
                    <span className="d-block text-center">{error}</span>
                    {otp.map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={otp[index]}
                        onChange={(e) => handleChange(e.target, index)}
                        onFocus={() => handleFocus(index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        ref={(el) => (inputsRef.current[index] = el)}
                        style={{
                          width: "2rem",
                          height: "2rem",
                          margin: "0 0.5rem",
                          fontSize: "1.5rem",
                          textAlign: "center",
                          border: "1px solid #ced4da",
                        }}
                      />
                    ))}
                    <button
                      type="submit"
                      className="d-block mx-auto btn bg-primary text-white mt-3 px-5 "
                    >
                      Verify Account
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        data-bs-target="#loginModal"
        data-bs-toggle="modal"
        className="d-none"
        id="loginTarget"
      ></button>
    </div>
  );
}
