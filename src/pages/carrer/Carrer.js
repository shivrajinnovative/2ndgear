import React from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import background from "./../services/assets/background.png";
import meal from "./meal.svg";
import care from "./care.svg";
import env from "./env.svg";
import CareerForm from "./components/CareerForm";

const WhyWork = ({ image, heading, children }) => {
  return (
    <div className="col-md-6 col-lg-4 p-4 px-lg-5">
      <div className="d-flex align-items-start">
        <img src={image} alt={image} className="mx-3" />
        <div>
          <h5>{heading}</h5>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};

export default function Carrer() {
  return (
    <div className="pt-4 bg-secondary poppins buyerSpecific">
      <Breadcrumb page="Career" image={background} />
      {/* <div className="container py-5">
        <p className="py-3">
          We are trying to find communities of people who buy and sell the heavy
          equipments. We are best at bringing buyers, sellers, and renters
          together, and arming them with the intel they need to do the deal. We
          have created virtual market for contractors, Construction companies,
          farmers, municipalities and equipments manufacturers, and owners.
          Heavy equipments is an online platform that helps businesses find
          their required heavy equipments like dumpers, cement mixer etc. to buy
          or on rent. Also its a great platform to list the equipment for rent
          and connect with related community.
        </p>
        <h3 className="text-center text-primary fw-600 my-4 headingEffect">
          Why Work with us?
        </h3>
        <div className="row">
          <WhyWork image={meal} heading="Catered Meals">
            HIFLY Projects is a full service regional electrical, power line,
            and communications contractor headquartered in HYDERABAD, TELANGANA.
          </WhyWork>
          <WhyWork image={care} heading="Health Care">
            HIFLY Projects is a full service regional electrical, power line,
            and communications contractor headquartered in HYDERABAD, TELANGANA.
          </WhyWork>
          <WhyWork image={env} heading="Flexible Environment">
            HIFLY Projects is a full service regional electrical, power line,
            and communications contractor headquartered in HYDERABAD, TELANGANA.
          </WhyWork>
        </div>
      </div> */}
     <CareerForm/>
    </div>
  );
}
