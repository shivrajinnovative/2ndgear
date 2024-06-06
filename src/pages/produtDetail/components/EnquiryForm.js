import React, { useState } from "react";
import axios from "axios";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    state: "",
    buyRent: "buy",
    message: "",
  });

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
    //   const response = await axios.post("", formData);
      console.log("Form submitted successfully:",formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="card m-2 py-3 px-4 rounded enquiryForm">
        <h3 className="poppins fw-500 text-center text-primary">
          Make An Enquiry
        </h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="w-100 my-2 p-2"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="mobileNumber"
          className="w-100 my-2 p-2"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="w-100 my-2 p-2"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="state"
          className="w-100 my-2 p-2"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
        />
        <select
          name="buyRent"
          className="w-100 my-2 p-2"
          value={formData.buyRent}
          onChange={handleChange}
        >
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
        </select>
        <textarea
          name="message"
          className="w-100 my-2 p-2"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />

        <button
          className="btn bg-primary rounded-pill text-white p-2 px-4 mt-3"
          type="submit"
        >
          Get Seller Details
        </button>
      </form>
    </div>
  );
}
