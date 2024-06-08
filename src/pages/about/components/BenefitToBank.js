import React from 'react'
import india from './../assets/india.svg'
import money from './../assets/save-money.svg'
import ourvision from './../assets/ourvision.svg'
import mission from './../assets/mission.svg'
import values from './../assets/values.svg'


const Component=({image,heading,children})=>{
  return(
    <div className="col-lg-4 d-flex align-items-start px-4">
        <img src={image} alt={image} width="96px" className='px-2 mx-2' />
        <div>
          <h3 className='poppins fw-700'>{heading}</h3>
          <p className='fw-400'>{children}</p>
        </div>
    </div>
  )
}


export default function BenefitToBank() {
  return (
    <div className='py-5 benefiteBank' style={{"background-color":"#EEEDFF"}}>
            <div className="container ">
            <h2 className='text-primary text-center'>Benefit to Banks & NBFCs</h2>
            </div>
      <div className="container-fluid  border-bottom">
        <div className="container">
        <div className="row">
          <div className="col-md-6 center border-right py-4">
            <img src={india} className='mx-2' alt={india} />
            <p >PAN INDIA Coverage</p>
          </div>
          <div className="col-md-6 center">
            <img src={money} className='mx-2' alt={money} />
            <p className='px-5'>Quick disposal opportunity, Save cost, Time & Space</p>
          </div>
        </div>
        </div>
      </div>
      <div className="container">
        <h3 className='py-5 text-primary fw-500'>We welcome all players in the Surplus Ecosystem to use & benefit from the HE Platform.</h3>
        <div className="row missionVisison">
          <Component image={ourvision} heading="Our Vision">
          We aim to empower suitable companies to become the prevailing systems of this business in the world. Our vision is to change the scenario of Surplus market by providing best service in this class by connecting every user, owner and seller.
          </Component>
          <Component image={mission} heading="Our Mission">
          To attain global best practice and become a world class online service provider for Surplus and earn the trust of all stake holders by encouraging ideas, talent and value systems. To make great community of buyer, seller and renter.          </Component>
          <Component image={values} heading="Our Values">
          It's near impossible to always be right when you're innovating. It's easy to get emotionally invested in it, but you need to monitor its impact like a hawk and react if you don't like what you see. And if/when you pull it back, you want to do that communication with transparency and humility. We at 2nd Gear provide you with that.
        </Component>
        </div>
     
      </div>
    </div>
  )
}
