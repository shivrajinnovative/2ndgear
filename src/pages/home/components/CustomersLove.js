import React from "react";
import dateTime from "./../assets/icons/ourjourney/dateTime.svg";
import person from "./../assets/icons/ourjourney/persons.svg";
import plants from "./../assets/icons/ourjourney/plants.svg";
import industry from "./../assets/icons/ourjourney/industry.svg";

const Component = ({ image, heading, textColor, children }) => {
  return (
    <div className="col-sm-6 col-lg-3 px-1 my-4 px-sm-5">
      <div className="d-flex">
        <img src={image} alt={image} />
        <h1 className={`poppins fw-600 mx-2 ${textColor}`}>{heading}</h1>
      </div>
      <p className="poppins fw-500 mt-3">{children}</p>
    </div>
  );
};

export default function CustomersLove() {
  return (
    <div className="bg-secondary customerLove py-5">
      <div className="container">
        <h1 className="poppins fw-500 py-5 text-center">
          Our Journey so far..
        </h1>
        <div className="d-flex flex-wrap">
          <Component image={dateTime} heading="100+" textColor={"text-yellow"}>
            Years of Experiences in Plants Business
          </Component>
          <Component image={person} heading="200+" textColor={"text-primary"}>
            Satisfied Clients around the world
          </Component>
          <Component image={plants} heading="50+" textColor={"text-yellow"}>
            50+ Plants Available
          </Component>
          <Component image={industry} heading="30+" textColor={"text-primary"}>
            Industry Leading in Market Insights{" "}
          </Component>
        </div>
      </div>
    </div>
  );
}
