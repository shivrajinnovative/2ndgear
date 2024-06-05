import React from "react";
import dateTime from "./../assets/icons/dateTime.svg";
import person from "./../assets/icons/persons.svg";
import plants from "./../assets/icons/plants.svg";
import web from "./../assets/icons/web.svg";

export default function CustomersLove() {
  return (
    <div className="bg-secondary customerLove py-5">
      <div className="container">
        <h1 className="poppins fw-500 py-5 text-center">
          8 Out of 10 Customer Loves <span>Second Gear</span>
        </h1>
        <div className="d-flex flex-wrap">
          <div className="col-sm-6 col-md-3 px-2 my-4 px-5">
            <div className="d-flex">
              <img src={dateTime} alt="" />
              <h1 className="poppins fw-600 mx-2 text-yellow">10+</h1>
            </div>
            <p className="poppins fw-500 mt-3">
              Years of Experiences in Plants Business
            </p>
          </div>
          <div className="col-sm-6 col-md-3 px-2  my-4 px-5">
            <div className="d-flex">
              <img src={person} alt="" />
              <h1 className="poppins fw-600 mx-2  text-primary">6k</h1>
            </div>
            <p className="poppins fw-500 mt-3">
            Satisfied Clients around the world
            </p>
          </div>
          <div className="col-sm-6 col-md-3 px-2  my-4 px-5 ">
            <div className="d-flex">
              <img src={plants} alt="" />
              <h1 className="poppins fw-600  mx-2  text-yellow">50+</h1>
            </div>
            <p className="poppins fw-500 mt-3">
            50+ Plants Available
            </p>
          </div>
          <div className="col-sm-6 col-md-3 px-2  my-4 px-5">
            <div className="d-flex">
              <img src={web} alt="" />
              <h1 className="poppins fw-600  mx-2 text-primary">4.3</h1>
            </div>
            <p className="poppins fw-500 mt-3">
            4.3 Rating on Web
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
