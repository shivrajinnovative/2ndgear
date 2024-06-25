import React, { useEffect } from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import background from "./../services/assets/background.png";
import image1 from "./image1.png";
import './buyerSpecific.css';
import { useCsrfToken } from "../../utils/useCsrfToken";
import { useFormSubmit } from "../../utils/useFormSubmit";
import { Bounce, toast } from "react-toastify";

export default function BuyerSpecific() {
  const initialFormData = {
    name: "",
    mobile_no: "",
    email: "",
    requirement: ""
  };

  const cookieValue = useCsrfToken();
  const { formData, handleChange, handleSubmit, loading, error, submitted } = useFormSubmit(initialFormData);

  
  useEffect(() => {
    if(submitted){
      toast.success('Form Submitted Successfully!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
  }, [submitted]);

  return (
    <div className="pt-4 bg-secondary poppins buyerSpecific">
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
              <form onSubmit={(e) => handleSubmit(e, cookieValue,'submit-bsr-enquiry-form')}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name"
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
                    name="requirement"
                    rows="3"
                    placeholder="Enter your message"
                    value={formData.requirement}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  className="btn bg-primary text-white p-2 px-4 mt-3"
                  type="submit"
                >
                  {loading && <div>Sending...</div>}
                  {!loading && error && "Try Again"}
                  {!loading && !error && !submitted && "Submit Requirement"}
                  {!loading && !error && submitted && "Submitted"}
                </button>
              </form>
              {error && <div className="mt-3 text-danger">Error in form submission. Please try again later.</div>}
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
