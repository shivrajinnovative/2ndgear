import React, { useEffect, useState } from "react";
import "./assets/AllProducts.css";
import dummy from "./assets/images/dummy.png";
import location from "../../assets/icons/location.svg";
import refresh from "./assets/icons/refresh.svg";
import downArrow from './assets/icons/downArrow.svg'
import axios from "axios";
export default function AllProducts() {
const [states,setStates]=useState([])
  let products = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

useEffect(()=>{

  const getStates=async()=>{
    const response=await axios('https://2gear.in/staging/api/get-states-list')
    setStates(response.data.statesData)
  
  }
getStates()

},[])

  return (
    <section className="bg-secondary pt-5 mt-5">
      <div className="container pt-3 ">
        <h1 className="poppins py-3 fw-300">
           Plants <span className="text-primary fw-700">(200)</span>
        </h1>

        <div className="row">
          <div className="col-lg-3">
            <div className="refinedBy card p-3">
              <div className="d-flex justify-content-between poppins fw-400">
                <p>Refind by</p>
                <a>Clear all</a>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="px-3 py-1 poppins fw-400"
              />





<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Equipment Current State
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      {
          states.map((state,index)=>{
            return (
              <div key={index}>{state.name}</div>
            )
          })
        }
     
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Equipment YOM
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Equipment Price
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"></div>
    </div>
  </div>
</div>






     
              
            </div>
          </div>
          <div className="col-lg-9">
            <div className="howWorks col-md-5 mx-auto my-5 m-lg-0 text-center py-4 text-white">
              <h4 className="poppins fw-600">How Secondgear® Works?</h4>
              <hr className="mx-5" />
              <p>
                You won’t just Love our Plants, <br /> you’ll Love the way you
                Buy them.
              </p>
            </div>
            <div className="d-flex justify-content-between bg-white my-3 p-2 border-rounded">
              <h4 className="poppins fw-400">All Plants</h4>
              <select className="poppins fw-400 px-2">
                <option value="">Sort By: </option>
                <option value="">hight to low </option>
                <option value=""> low to height </option>
              </select>
            </div>
            <div className="productsListing">
              <div className="row">
                {products.map((product, index) => {
                  return (
                    <div className="col-md-6 col-lg-4 mb-3" key={index}>
                      <div className="card p-3 rounded-4">
                        <img src={dummy} alt={dummy} />
                        <h5 className="poppins fw-500 mt-3">
                          Cp 30 Batching Plant
                        </h5>
                        <div
                          className="d-flex justify-content-between py-1"
                          style={{ "fontSize": "17px" }}
                        >
                          <span>Cp 30</span>
                          <span>2012</span>
                        </div>
                        <p className="poppins fw-400 border-top border-bottom">
                          Concrete Batching Plant | Schwing Stetter
                        </p>

                        <p className="m-0 poppins fw-400">
                          <img src={location} alt={location} /> Panchgani,
                          Maharashtra
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="center my-5">
                <button className="btn bg-primary rounded-pill text-white px-4 poppins fw-400">
                  {" "}
                  <img src={refresh} alt={refresh} /> Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
