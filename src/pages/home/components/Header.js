import React from 'react'
import searchIcon from '../assets/icons/search (1).svg'
import mapPin from '../assets/icons/map-pin.svg'


export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="heading poppins">
        <h1 className='fw-700'>We are <span>India's</span> Leading Asset Marketplace</h1>
        <div className="inputBox d-flex justify-content-between">
            <div className="selectOptions center">
              <img src={mapPin} alt="map-Pin" />
            <select>
                <option value="Mumbai">Mumbai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Mumbai">Mumbai</option>
            </select>
            </div>
            <input type="text" />
            <button className=" center">
                <img src={searchIcon} alt="search" />
            </button>
        </div>
        {/* 
        <div className='d-flex justify-content-end headingFooter'>
            <span>Navi Mumbai</span>
            <span>Gujrat</span>
            <span>Himachal</span>

        </div>
         */}
        </div>
      </div>
    </header>
  )
}
