import React from 'react'
import panindia from './../assets/panindia.svg'
import click from './../assets/click.svg'
import management from './../assets/management.svg'
import user from './../assets/user-engagement.svg'



const ContentBox=({image,children})=>{
        return (
          <div className="col-md-6 col-lg-3 flex-column p-lg-2 px-lg-5 text-center">
            <img src={image} alt={image} className='my-3' />
            {children}
          </div>
        )
}

export default function BenefitToIndivisual() {
        
  return (
    <div className='py-5 benefitToindivisual'>
        <div className="container">
            <div className="benifiteHeading mx-auto bg-primary text-white text-center px-3">   
            <h4 className='poppins fw-400  py-2' >Benefit to Individual & Corporate</h4>
            </div>
            <div className="row">
                <ContentBox image={panindia}>
                        <p className=''> Access to <span className='fw-600'>PAN INDIA</span> platform for Selling, Buying, Renting</p>
                </ContentBox>
               
                <ContentBox image={click}>
                                <p><span className='fw-600'>Easy</span> Listing</p>
                </ContentBox>
               
                <ContentBox image={management}>
                <p>Access to <span className='fw-600'>125K</span> End Users</p>
                </ContentBox>
               
                <ContentBox image={user}>
                <p>Access to <span className='fw-600'>550K</span>  Monthly Visitors</p>
                </ContentBox>
               
            </div>
        </div>
    </div>
  )
}
