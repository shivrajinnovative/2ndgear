import React from "react";
import axios from "axios";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import background from "./../services/assets/background.png";
import image1 from "./image1.png";
import mapPin from "./../home/assets/icons/map-pin.svg";
import { useCsrfToken } from "../../utils/useCsrfToken";
import { useFormSubmit } from "../../utils/useFormSubmit";
axios.defaults.withCredentials = true;

export default function Help() {
  const initialFormData = { name: "", mobile_no: "", email: "", message: "" };
  const cookieValue = useCsrfToken();
  const { formData, handleChange, handleSubmit, loading, error, submitted } = useFormSubmit(initialFormData);

  return (
    <div className="pt-5 bg-secondary poppins buyerSpecific">
      <Breadcrumb page="Help" image={background} />
      <div className="container">
        <div className="row pt-3">
          <div className="col-lg-6">
            <div className="card col-md-9 my-5 p-3 p-md-5">
              <h4 className="text-primary fw-500 py-2">Let's Talk</h4>
              <p>
                To request a quote or want to meet up for coffee. Contact us
                directly or fill out the form and we will get back to you.
              </p>
              <form onSubmit={(e) => handleSubmit(e, cookieValue,'submit-contactus-enquiry-form')}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="mobile_no" className="form-label">
                    Mobile Number <span>*</span>
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="mobile_nohelp"
                    name="mobile_no"
                    placeholder="Mobile number"
                    pattern="[0-9]{10}"
                    title="Please enter a 10-digit mobile number"
                    value={formData.mobile_no}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailhelp"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
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
                    name="message"
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
                  {loading && <div>Sending...</div>}
                  {!loading && error && "Try Again"}
                  {!loading && !error && !submitted && "Submit Request"}
                  {!loading && !error && submitted && "Submitted"}
                </button>
              </form>
              {error && <div className="mt-3 text-danger">{error && "Error in form submission. Please try again later."}</div>}
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
