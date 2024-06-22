import React, { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import ForgotPasswordModal from './ForgotPasswordModal';
import OtpModal from './OtpModal';
import ResetPasswordModal from './ResetPasswordModal';
import './assets/Modals.css'
import MobileVerificationModal from './MobileVerificationModal';
import EnterMobileNumber from './EnterMobileNumber';

export default function AuthModals() {
    return (
        <>
          <LoginModal/>
          <EnterMobileNumber/>
          <ForgotPasswordModal/>
          <ResetPasswordModal/>
          <RegisterModal/> {/* registraion */}
          <MobileVerificationModal/> {/* mobile verification for registration */}
        </>
      );
}

