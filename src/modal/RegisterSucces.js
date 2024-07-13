import React from 'react'

export default function RegisterSucces() {
  return (
    <div
    className="modal fade forgotPassword"
    id="registerSuccess"
    aria-hidden="true"
    aria-labelledby="registerSuccess"
    tabIndex="-1"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body p-3 p-mb-5">
                <h2 className='text-center display-3 text-success mt-3 mt-md-5'> </h2>
               <h5 className='text-center mb-3 mb-md-5'></h5> 
        </div>
      </div>
    </div>
    <button data-bs-target="#loginModal" data-bs-toggle="modal" className="d-none" id="loginTarget"></button>
  </div>
)
}
