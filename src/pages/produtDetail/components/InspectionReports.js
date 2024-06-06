import React from 'react'
import pdf from './../../../assets/icons/pdf.svg'
export default function InspectionReports() {
  return (
    <div className='d-flex p-5'>
        <div className='px-2' >
            <img src={pdf} alt={pdf} className='w-100' height='100px' />
            <span className='poppins fw-500 d-block text-center'>Reports</span>
        </div>
        <div className='px-2' >
            <img src={pdf} alt={pdf} className='w-100' height='100px' />
            <span className='poppins fw-500 d-block text-center'>Reports</span>
        </div>
        
        
    </div>
  )
}
