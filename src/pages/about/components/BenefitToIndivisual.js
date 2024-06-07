import React from 'react'
import panindia from './../assets/panindia.svg'
export default function BenefitToIndivisual() {
  return (
    <div className='py-5'>
        <div className="container">
            <div className="benifiteHeading mx-auto bg-primary text-white text-center px-3">   
            <h4 className='poppins fw-400  py-2' >Benefit to Individual & Corporate</h4>
            </div>
            <div className="row">
                <div className="col-6 col-lg-3 center flex-column p-lg-5 text-center">
                        <img src={panindia} alt={panindia} />
                        <p>Access to <span className='fw-600'>PAN INDIA</span> platform for Selling, Buying, Renting</p>
                </div>
               
                <div className="col-6 col-lg-3 center flex-column p-lg-5 text-center">
                        <img src={panindia} alt={panindia} />
                        <p>Access to <span className='fw-600'>PAN INDIA</span> platform for Selling, Buying, Renting</p>
                </div>
               
                <div className="col-6 col-lg-3 center flex-column p-lg-5 text-center">
                        <img src={panindia} alt={panindia} />
                        <p>Access to <span className='fw-600'>PAN INDIA</span> platform for Selling, Buying, Renting</p>
                </div>
               
                <div className="col-6 col-lg-3 center flex-column p-lg-5 text-center">
                        <img src={panindia} alt={panindia} />
                        <p>Access to <span className='fw-600'>PAN INDIA</span> platform for Selling, Buying, Renting</p>
                </div>
               
            </div>
        </div>
    </div>
  )
}
