import React from "react";
import "./assets/AllProducts.css";
import dummy from "./assets/images/dummy.png";
import location from "./assets/icons/location.svg";
import refresh from "./assets/icons/refresh.svg";
export default function AllProducts() {
  let products = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <section className="bg-secondary pt-5 mt-5">
      <div className="container pt-5 ">
        <h1 className="poppins fw-300">
          New Plants <span className="text-primary fw-700">(200)</span>{" "}
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
            </div>
          </div>
          <div className="col-lg-9">
            <div className="howWorks col-md-5 text-center py-4 text-white">
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
                    <div className="col-md-6 col-lg-4 mb-3">
                      <div className="card p-3 rounded-4">
                        <img src={dummy} alt={dummy} />
                        <h5 className="poppins fw-500 mt-3">
                          Cp 30 Batching Plant
                        </h5>
                        <div
                          className="d-flex justify-content-between py-1"
                          style={{ "font-size": "17px" }}
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
