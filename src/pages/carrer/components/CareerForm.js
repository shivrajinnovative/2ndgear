import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';

const CareerForm = () => {
  // State
  const [formData, setFormData] = useState({
    first_name: '',
    email_id: '',
    mobile_no: '',
    state: '',
    resume: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [states, setStates] = useState([]);
  const [csrfToken, setCsrfToken] = useState('');

  // Fetch CSRF token
  useEffect(() => {
    // Simulated CSRF token fetch, replace with your actual implementation
    const fetchCsrfToken = async () => {
      const response = await axios.get(`https://2gear.in/staging/sanctum/csrf-cookie`);
      setCsrfToken(response.data.csrfToken);
    };

    fetchCsrfToken();
  }, []);

  // Fetch states data
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/get-states-list`);
        setStates(response.data.statesData);
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    };

    fetchStates();
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file upload change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      resume: file,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formDataToSend = new FormData();
      formDataToSend.append('first_name', formData.first_name);
      formDataToSend.append('email_id', formData.email_id);
      formDataToSend.append('mobile_no', formData.mobile_no);
      formDataToSend.append('state', formData.state);
      formDataToSend.append('resume', formData.resume);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/submit-careers-enquiry-form`,
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'X-XSRF-TOKEN': csrfToken,
          },
        }
      );
      
      if (response.data.flag === '1') {
        setFormData({
          first_name: '',
          email_id: '',
          mobile_no: '',
          state: '',
          resume: null,
        });
        setSubmitted(true);
        
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
    
      } else {
        setError('An error occurred while submitting the form.');
      }

      setResponseData(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error.message || 'An error occurred while submitting the form.');
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#EEEDFF' }} className="py-5">
      <form className="container px-lg-5" onSubmit={handleSubmit}>
        <h3 className="text-center text-primary fw-600 headingEffect">Get in Touch</h3>
        {error && (
          <span className="border-0 center">Error in form submission. Please try again later.</span>
        )}
        {responseData && (
                      <span className="text-danger">{responseData.emsg}</span>
                    )}
        <div className="row col-md-9 mx-auto">
          <div className="mb-3 col-md-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="first_name"
              placeholder="Your Name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          {/* Email input */}
          <div className="mb-3 col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email_id"
              placeholder="Your Email"
              value={formData.email_id}
              onChange={handleChange}
              required
            />
          </div>
          {/* Mobile input */}
          <div className="mb-3 col-md-4">
            <label htmlFor="mobile" className="form-label">
              Mobile
            </label>
            <input
              type="tel"
              className="form-control"
              id="mobile"
              name="mobile_no"
              placeholder="Your Mobile"
              value={formData.mobile_no}
              onChange={handleChange}
              required
            />
          </div>
          {/* Location input */}
          <div className="mb-3 col-md-4">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <select
              className="form-control"
              id="location"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">Select State</option>
              {states.map((state, index) => (
                <option key={index} value={state.hashed}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          {/* Resume upload input */}
          <div className="mb-3 col-md-4">
            <label htmlFor="resume" className="form-label">
              Upload Resume
            </label>
            <input
              type="file"
              className="form-control"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
            />
          </div>
        </div>
        {/* Submit button */}
        <button
          type="submit"
          className="btn bg-primary mt-4 px-5 mx-auto d-block text-white"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default CareerForm;
