import React, { useState } from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import background from "./../services/assets/background.png";
import image1 from "./image1.png";
import './buyerSpecific.css';

export default function BuyerSpecific() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // You can add your form submission logic here
  };

  return (
    <div className="pt-5 bg-secondary poppins buyerSpecific">
      <Breadcrumb page="Buyer Specific requirements" image={background} />
      <div className="container">
        <div className="row pt-3">
          <div className="col-lg-6">
            <h4 className="text-primary fw-600 py-4">
              Buyer Specific Requirements
            </h4>
            <p>
              To request a quote or want to meet up for coffee. Contact us
              directly or fill out the form and we will get back to you.
            </p>
            <div className="card col-md-8 my-5 p-3 p-md-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
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
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobileNumber" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="mobileNumber"
                    placeholder="Enter your mobile number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  className="btn bg-primary text-white p-2 px-4 mt-3"
                  type="submit"
                >
                  Submit Requirement
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 center">
            <img src={image1} alt="Buyer Specific" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}
