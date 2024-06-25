import React, { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import ForgotPasswordModal from './ForgotPasswordModal';
import ResetPasswordModal from './ResetPasswordModal';
import './assets/Modals.css'
import MobileVerificationModal from './MobileVerificationModal';
import EnterMobileNumber from './EnterMobileNumber';
import Popup from './Popup';

export default function AuthModals() {
    return (
        <>
        <Popup/>
          <LoginModal/>
          <EnterMobileNumber/>
          <ForgotPasswordModal/>
          <ResetPasswordModal/>
          <RegisterModal/> {/* registraion */}
          <MobileVerificationModal/> {/* mobile verification for registration */}
        </>
      );
}

