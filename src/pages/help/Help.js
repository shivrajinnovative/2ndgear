import React, { useState } from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import background from "./../services/assets/background.png";
import image1 from "./image1.png";
import mapPin from "./../home/assets/icons/map-pin.svg";

export default function Help() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    location: '',
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
      <Breadcrumb page="Help" image={background} />
      <div className="container">
        <div className="row pt-3">
          <div className="col-lg-6">
            <div className="card col-md-9 my-5 p-3 p-md-5">
              <h4 className="text-primary fw-600 py-2">Let's Talk</h4>
              <p>
                To request a quote or want to meet up for coffee. Contact us
                directly or fill out the form and we will get back to you.
              </p>
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
                  <label htmlFor="location" className="form-label">
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    placeholder="Location"
                    value={formData.location}
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
                  className="btn bg-primary w-100 text-white p-2 px-4 mt-3"
                  type="submit"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 center">
            <img src={image1} alt="Help" className="img-fluid" />
          </div>
          <div className="d-flex align-items-start my-3">
            <img src={mapPin} alt="Map Pin" className="px-2" />
            <div>
              <h4 className="text-primary"> Register Office</h4>
              <p>
                Railway Station, Kalamboli, Panvel, Mumbai, Navi Mumbai,
                Maharashtra 410106
              </p>
            </div>
          </div>
          <div className="mb-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.6571237298263!2d73.11188577502635!3d19.03482473216135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9bee32e7e0b%3A0x403f92187a2bca87!2sKalamboli!5e0!3m2!1sen!2sin!4v1718092353489!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
