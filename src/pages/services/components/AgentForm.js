// AgentForm.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCsrfToken } from "../../../utils/useCsrfToken";
import { useFormSubmit } from "../../../utils/useFormSubmit";
import { useDynamicQuery } from "../../../utils/apiUtils";

axios.defaults.withCredentials = true;

export default function AgentForm() {
  const [states, setStates] = useState([]);
  const initialFormData = { name: "", mobile_no: "", email: "", state: "", profile: "", message: "" };
  const cookieValue = useCsrfToken();
  const { formData, handleChange, handleSubmit, loading, error, submitted } = useFormSubmit(initialFormData);


  const { data, isLoading } = useDynamicQuery(['state-list'],'get-states-list')
  
  useEffect(() => {
    if(data){
      setStates(data.statesData)
    }
  }, [data]);

  return (
    <form onSubmit={(e) => handleSubmit(e, cookieValue, 'submit-service-enquiry-form')} className="agentForm">
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
        {loading && <div>Sending...</div>}
        {!loading && error && "Try Again"}
        {!loading && !error && !submitted && "Contact 2ndgear"}
        {!loading && !error && submitted && "Submitted"}
      </button>
    </form>
  );
}
