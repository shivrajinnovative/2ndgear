import React from 'react'
import machineImage from './../assets/images/sellBuyPlant.png'
import rightArrow from './../assets/icons/rightArrow.svg'
export default function SellAndBuy() {
  return (
    <div className='container py-5 text-primary sellAndBuy'>
        <div className="row">
        <div className='col-lg-6 center'>
        <img src={machineImage}  className='img-fluid' alt={machineImage}/>
        </div>
        <div className='col-lg-6 text-primary pt-5'>
            <h1 className='poppins mb-4 fw-600 '><mark className='text-primary px-3'>Selling & Buying Plants?</mark> </h1>
            <p className='poppins fw-400 my-3'>Get up to <b className='fw-700'>₹10,000</b> when you Sell & Buy your <br /> Next Plant from us.</p>
            <button className='p-2 px-4 btn bg-primary text-white poppins fw-400'>Get Plant Price <img src={rightArrow} alt={rightArrow} /> </button>
        </div>
        </div>
    </div>
  )
}
 