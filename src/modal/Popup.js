import React from 'react'

export default function Popup() {
  return (
    <div className="modal fade popup" id="pop" aria-hidden="true" aria-labelledby="pop" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">

          <div className="modal-body">
            <div className="row py-5">
              <div className="col-6 center text-center flex-column border-end">
                <p>Not a member yet?</p>

                <button
              data-bs-target="#registerModal"
              data-bs-toggle="modal"
              className="btn bg-primary text-white p-2 px-4"
            >
              Sign Up
            </button>

              </div>
              <div className="col-6 pt-5 pt-lg-0 center flex-column poppins">
                
                  <p>Login as..</p>
                  <button
              data-bs-target="#loginModal"
              data-bs-toggle="modal"
              className="btn bg-primary  m-2 text-white p-2 px-4"
            >
              Log In 
            </button>  
            <p className='text-center m-0'> - OR -</p>
            <a href=""
              className="btn bg-primary text-white p-2 m-2 px-4"
            >
              Seller
            </a>
                </div>
            </div>
          </div>
           <div className="row">
            <div className="col-6">
                

         

            </div>
           </div>
          </div>
        </div>
      </div>
  </div>
  )
}
