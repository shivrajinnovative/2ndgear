import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import background from "./../services/assets/background.png";
import image1 from "./image1.png";
import './buyerSpecific.css';

axios.defaults.withCredentials = true;

export default function BuyerSpecific() {
  const [formData, setFormData] = useState({
    name: "",
    mobile_no: "",
    email: "",
    message: ""
  });

  const [cookieValue, setCookieValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/submit-bsr-enquiry-form`, formData, {
        headers: {
          "X-XSRF-TOKEN": cookieValue 
        }
      });
      if(response.data.flag === "1") {
        setFormData({
          name: "",
          mobile_no: "",
          email: "",
          message: ""
        });
        setSubmitted(true);
      } else {
        setError("An error occurred while submitting the form.");
      }
      setLoading(false);
      setError(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(error.message || "An error occurred while submitting the form.");
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://2gear.in/staging/sanctum/csrf-cookie", { withCredentials: true });
        if (response.status === 204) {
          const ckk = Cookies.get("XSRF-TOKEN");
          setCookieValue(ckk);
        } else {
          console.error("Failed to fetch XSRF token.");
        }
      } catch (error) {
        console.error("Error fetching XSRF token:", error);
      }
    };
    fetchData();
  }, []);

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
                  <label htmlFor="name" className="form-label">
                    Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
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
                    id="mobile_no"
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
                    id="email"
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
                  {loading && <div>Loading...</div>}
                  {!loading && error && "Try Again"}
                  {!loading && !error && !submitted && "Submit Requirement"}
                  {!loading && !error && submitted && "Submitted"}
                </button>
              </form>
              {error && <div className="mt-3 text-danger">{error && 'Error in form submission. Please try again later.'}</div>}
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
