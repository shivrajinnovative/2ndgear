import React from 'react'
import listTick from './../assets/icons/listTick.svg'

export default function Section({service}) {
    const {heading,para,image,list}=service
    return (
    <section className='serviceSection'>
        <h2 className="d-flex poppins fw-600 align-items-center ">
    <mark className="px-3 text-primary">{heading}</mark>
    <hr />
  </h2>
    <div className='p-3'>
    {Array.isArray(para) ? (
                para.map((msg, index) => <p key={index}>{msg}</p>)
            ) : (
                <p>{para}</p>
            )}
            <div className="row">
            {
                list?.map((item,index)=>{
                    return(
                        <p className="col-md-6" key={index}> 
                            <img src={listTick} alt={listTick}  className='mx-2'/>
                            {item}
                        </p>
                    )
                })
            }
            </div>
    </div>

  <img src={image} className='col-10 my-3 col-md-8 d-block mx-auto' alt={image} />
    </section>
  )
}
