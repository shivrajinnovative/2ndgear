import React, { useEffect, useState } from 'react'
import otpImage from './assets/images/otp.png';
import { useFormSubmit } from '../utils/useFormSubmit';
import { useCsrfToken } from '../utils/useCsrfToken';
import { useDispatch } from 'react-redux';
import { setRegistrationTokens } from '../store/slices/registerSlice';


export default function EnterMobileNumber() {
    const cookieValue = useCsrfToken();
    const dispatch=useDispatch()
    const [errorr,setError]=useState("")

    const initialFormData = {
        mobile_no: "",
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
            dispatch(setRegistrationTokens({hashedtoken:responseData.token,hashtoverify:responseData.htvo}))
            document.getElementById("forgotPasswordModalbtn").click();
        }
        if(responseData && responseData.flag==='2'){
            setError(responseData.emsg)
          }
      
      }, [responseData]);
      


  return (
    <div className="modal fade" id="enterMobileNumber" aria-hidden="true" aria-labelledby="OtpModalLabel" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="row">
                
              <div className="col-lg-6 p-lg-5 ">
                <img src={otpImage} className='img-fluid p-lg-5' alt="OTP" />
              </div>
              <div className="col-lg-6 pt-5 pt-lg-0 text-center  center poppins">
                <form   onSubmit={(e) => handleSubmit(e, cookieValue, "user-forgot-password")}>
                <span className='d-block text-center'>{error || errorr}</span>

                <div className="mb-3">
                      <label htmlFor="mobile_no" className="form-label">
                       Enter Registerd Mobile Number
                      </label>
                      <input
                        required
                        type="tel"
                        pattern="[0-9]{10}"
                        title="Please enter a 10-digit mobile number"
                        id="mobile_no"
                        name="mobile_no"
                        value={formData.mobile_no}
                        onChange={handleChange}
                        className="form-control"
                        placeholder='10-digit mobile number'
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn text-white d-block mx-auto bg-primary my-3 px-5"
                      disabled={loading}
                    >
                      {loading && "Sending..."}
                      {!loading && error && "Try Again"}
                      {!loading && !error && !submitted && "Submit"}
                      {!loading && !error && submitted && "Wait.. to redirect.."}
                    </button>
                </form>
              </div>
              <span
                        className="d-none"
                        id="forgotPasswordModalbtn"
                        data-bs-target="#forgotPasswordModal"
                        data-bs-toggle="modal"
                        role="button"
                      >
                      
                      </span>

            </div>
          </div>
        </div>
      </div>
  </div>
  )
}
