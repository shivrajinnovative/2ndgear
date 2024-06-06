import React from 'react'

export default function EnquiryForm() {

    const formFields=[
        {
            placeholder:"Name"
        },
        {
            placeholder:"Whatsapp Mobile Number",
            type:"number"
        },
        {
            placeholder:"Email",
            type:"email"
        },
        {
            placeholder:"Select State"
        },
        {
            placeholder:"Select Profile"
        },
    ]

  return (
    <div className='card m-2 py-3 px-4 rounded enquiryForm'>
        <form>
            <h3 className='poppins fw-500 text-center text-primary'>Make An Enquiry</h3>
            {
                formFields.map((field,index)=>{
                    return (
                        <input type={field.type?field.type:"text"} className='w-100 my-2 p-2' placeholder={field.placeholder} />
                    )
                })
                }
                <div className='d-flex align-items-center my-2'>
                    <input type="checkbox" name="tc" id="tc" />
                    <label htmlFor="tc" className='px-2 poppins fw-400'>I agree to t & C Apply</label>
                </div>
            <button className='btn bg-primary rounded-pill text-white p-2 px-4 mt-3'>Get Seller Details</button>
        </form>
    </div>
  )
}
