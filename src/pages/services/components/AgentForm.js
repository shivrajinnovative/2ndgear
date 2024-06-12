import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';

axios.defaults.withCredentials = true;

export default function AgentForm() {
  const [states, setStates] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    mobile_no: "",
    email: "",
    state: "",
    profile: "",
    message: "",
  });
  const [cookieValue, setCookieValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/submit-service-enquiry-form`, formData, {
        headers: {
          "X-XSRF-TOKEN": cookieValue 
        }
      });
      if(response.data.flag === "1") {
        setFormData({
          name: "",
          mobile_no: "",
          email: "",
          state: "",
          profile: "",
          message: "",
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
        const response = await axios.get("https://2gear.in/staging/sanctum/csrf-cookie",{ withCredentials: true });
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

    const getStates = async () => {
      const response = await axios(`${process.env.REACT_APP_API_URL}/get-states-list`);
      setStates(response.data.statesData);
    };
    getStates();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="agentForm">
      {error && <div>Error in form submission. Please try again later.</div>}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="mobile_no"
        placeholder="Mobile Number"
        pattern="[0-9]{10}"
        title="Please enter a 10-digit mobile number"
        value={formData.mobile_no}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <select
        name="state"
        value={formData.state}
        onChange={handleChange}
        required
      >
                <option value="" disabled>- Select State -</option> 
        {states?.map((city, index) => {
          return (
            <option value={city.hashed} key={index}>
              {city.name}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        name="profile"
        placeholder="Profile"
        value={formData.profile}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        rows="4"
        required
      />
      <button
        className="btn bg-primary rounded-pill text-white p-2 px-4 mt-3"
        type="submit"
      >
        {loading && <div>Loading...</div>}
        {!loading && error && "Try Again"}
        {!loading && !error && !submitted && "Contact 2ndgear"}
        {!loading && !error && submitted && "Submitted"}
      </button>
    </form>
  );
}
