import React, { useState } from "react";
import threeLine from "./../assets/images/background/threeLine.png";
import tick from './../assets/icons/sellAndBuy/tick.svg'
import circle from './../assets/icons/sellAndBuy/circle.svg'



let Component = ({ number, children }) => {
  return (
    <div className="bsComponent center p-3 my-4">
      <h1>{number}</h1>
      <p className="fw-500">{children}</p>
    </div>
  );
};

export default function SellAndBuy() {
  const [check,setCheck]=useState(true)
  return (
    <div className="container-fluid py-5 text-primary sellAndBuy">
      <div className="container">
        <div className=" d-flex pt-5 mt-3 flex-wrap justify-content-evenly">
          <Component number="01">
            We Buy The Plant from Seller's Location
          </Component>
          <Component number="02">We Refurbish the Plant</Component>
          <Component number="03">
            We sell the Plant to the Buyer Location
          </Component>
        </div>
        <img
          src={threeLine}
          alt={threeLine}
          className="col-7 mx-auto d-none d-md-block"
        />
        <button className="btn bg-primary mx-auto d-block rounded-pill px-4 fw-500 my-3">
          RIGHT VALUE
        </button>
      </div>


    <div className="buySellBtn d-flex poppins ">
      <div className={`px-4 py-1 fw-400 ${check?'bg-yellow':''}`} onClick={()=>setCheck(true)} > <img src={check?tick:circle} alt="icon" className="mx-1" /> Buy</div>
      <div className={`px-4 py-1 fw-400 ${!check?'bg-yellow':''}`} onClick={()=>setCheck(false)} > <img src={!check?tick:circle} alt="icon" className="mx-1" /> Sell</div>
    </div>


    </div>
  );
}
