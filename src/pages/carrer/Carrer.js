import React from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import background from "./../services/assets/background.png";
import meal from "./meal.svg";
import care from "./care.svg";
import env from "./env.svg";

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
    <div className="pt-5 bg-secondary poppins buyerSpecific">
      <Breadcrumb page="Career" image={background} />
      <div className="container py-5">
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
      </div>
      <div style={{ backgroundColor: "#EEEDFF" }} className="py-5">
        <div className="container px-lg-5">
          <h3 className="text-center text-primary fw-600 headingEffect">
            Get in Touch
          </h3>
          <div className="row col-md-9 mx-auto">
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="mobile"
                  placeholder="Your Mobile"
                />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="location" className="form-label">
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    placeholder="Your Location"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="noticePeriod" className="form-label">
                    Notice Period
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="noticePeriod"
                    placeholder="Your Notice Period"
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label htmlFor="resume" className="form-label">
                    Upload Resume
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                  />
                </div>

                <div className="col-md-6 ">
                  <button
                    type="submit"
                    className="btn bg-primary mt-4 w-100 text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
