import React, { useState } from "react";


export default function AgentForm() {
    const [formData, setFormData] = useState({
      name: "",
      mobileNumber: "",
      email: "",
      location: "",
      typeOfAgent: "",
      aboutYourself: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log("Form Data:", formData);
    };
  
    return (
      <form onSubmit={handleSubmit} className="agentForm">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />
        <input
          type="text"
          name="typeOfAgent"
          placeholder="Type Of Agent"
          value={formData.typeOfAgent}
          onChange={handleChange}
        />
        <textarea
          name="aboutYourself"
          placeholder="Tell Us About Yourself"
          value={formData.aboutYourself}
          onChange={handleChange}
          rows="4"
        />
        <button
          className="btn bg-primary rounded-pill text-white p-2 px-4 mt-3"
          type="submit"
        >
          Contact 2ndgear
        </button>
      </form>
    );
  }
  