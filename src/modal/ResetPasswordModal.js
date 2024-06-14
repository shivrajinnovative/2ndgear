import React, { useState } from 'react';
import resetPass from './assets/images/resetPassword.png';

export default function ResetPasswordModal() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [confirmError, setConfirmError] = useState('');

  const validatePassword = (password) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number.";
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return "Password must contain at least one special character.";
    }
    return '';
  };

const handlePasswordChange = (e) => {
    const password = e.target.value;
    setNewPassword(password);
    const validationError = validatePassword(password);
    setError(validationError);      
};

const handleConfirmPasswordChange = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
    if (confirmPassword !== newPassword) {
      setConfirmError("Passwords do not match.");
    } else {
      setConfirmError('');
    }
};

const handleResetPassword = () => {
    if (!error && !confirmError && newPassword && confirmPassword) {
      console.log("Password reset successful.");
    } else {
      console.log("Please fix the errors before proceeding.");
    }
};

return (
    <div className="modal fade resetPassword" id="resetPasswordModal" aria-hidden="true" aria-labelledby="resetPasswordModalLabel" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="row py-5">
              <div className="col-lg-6 center ">
                <img src={resetPass} className='img-fluid px-lg-5' alt="Reset Password" />
              </div>
              <div className="col-lg-6 pt-5 pt-lg-0 center poppins">
                <div className='col-8'>
                  <h5 className='py-3 text-center'>Reset Your Password</h5>
                  <form className='my-3' onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                      <label htmlFor="newPassword" className="form-label">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="newPassword"
                        value={newPassword}
                        onChange={handlePasswordChange}
                      />
                      {error && <small className="text-danger">{error}</small>}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                      {confirmError && <small className="text-danger">{confirmError}</small>}
                    </div>
                    <button
                      type="button"
                      onClick={handleResetPassword}
                      className='d-block mx-auto btn bg-primary text-white mt-3 px-5'
                      disabled={!!error || !!confirmError || !newPassword || !confirmPassword}
                    >
                      Reset My Password
                    </button>
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
