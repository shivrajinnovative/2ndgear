import React from 'react'
import innovative from './innovative.svg'
export default function Copyright() {
  return (
    <div className='container'>
        <div className="row">
            <p className="col-lg-6 my-2 text-center">
            Copyright © 2023-24. 2ndgear. All Rights Reserved.
            </p>
            <p className="col-lg-6 my-2 text-center">
            Design & Developed by <img src={innovative} />  Innovative Web Solutions
            </p>
        </div>
       
       
    </div>
  )
}
