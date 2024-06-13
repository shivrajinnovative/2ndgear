import React, { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import ForgotPasswordModal from './ForgotPasswordModal';
import OtpModal from './OtpModal';
import ResetPasswordModal from './ResetPasswordModal';
import './assets/Modals.css'

export default function AuthModals() {
    return (
        <>
          <LoginModal/>
          <ForgotPasswordModal/>
          <ResetPasswordModal/>
          <RegisterModal/>
          <OtpModal/>
        </>
      );
}

