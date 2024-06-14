import React, { useState, useRef, useEffect } from 'react';
import otpImage from './assets/images/otp.png';

export default function ForgotPasswordModal() {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const inputsRef = useRef([]);

  useEffect(() => {
    inputsRef.current = inputsRef.current.slice(0, otp.length);
  }, [otp]);

  const handleChange = (element, index) => {
    const value = element.value;
    if (/^[0-9]$/.test(value) || value === '') {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        if (value !== '' && index < 5) {
          setTimeout(() => {
            inputsRef.current[index + 1].focus();
          }, 10);
        }
        return newOtp;
      });
    }
  };

  const handleFocus = (index) => {
    const firstEmptyIndex = otp.findIndex(value => value === '');
    if (firstEmptyIndex !== -1 && firstEmptyIndex !== index) {
      inputsRef.current[firstEmptyIndex].focus();
    } else {
      inputsRef.current[index].select();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (index > 0) {
        e.preventDefault();
        setOtp((prevOtp) => {
          const newOtp = [...prevOtp];
          newOtp[index - 1] = '';
          inputsRef.current[index - 1].focus();
          return newOtp;
        });
      } else {
        setOtp((prevOtp) => {
          const newOtp = [...prevOtp];
          newOtp[0] = '';
          return newOtp;
        });
      }
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  return (
    <div className="modal fade forgotPassword" id="forgotPasswordModal" aria-hidden="true" aria-labelledby="forgotPasswordModalLabel" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="row">
                
              <div className="col-lg-6 p-lg-5 ">
                <img src={otpImage} className='img-fluid p-lg-5' alt="OTP" />
              </div>
              <div className="col-lg-6 pt-5 pt-lg-0 text-center  center poppins">
                <div>
                  <h5 className='py-3'>Forgot your Password</h5>
                  <p>Enter OTP</p>
                  <form className='my-3' onSubmit={handleSubmit}>
                    {otp.map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={otp[index]}
                        onChange={(e) => handleChange(e.target, index)}
                        onFocus={() => handleFocus(index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        ref={el => inputsRef.current[index] = el}
                        style={{
                          width: '2rem',
                          height: '2rem',
                          margin: '0 0.5rem',
                          fontSize: '1.5rem',
                          textAlign: 'center',
                          border: '1px solid #ced4da',

                        }}
                      />
                    ))}
                    <p className='mt-3'>Didn't Receive code? <span className='text-danger' type="button">  Resend</span></p>
                    <button type="submit"   data-bs-target="#resetPasswordModal"
                        data-bs-toggle="modal" className='d-block mx-auto btn bg-primary text-white mt-3 px-5 '>Verify Account</button>
                  </form>
                  <p  data-bs-target="#loginModal"
                        data-bs-toggle="modal" type="button" >Back to Log in</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
