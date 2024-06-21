import React, { useEffect, useState } from "react";
import { useFormSubmit } from "../../../utils/useFormSubmit";
import { useDynamicQuery } from "../../../utils/apiUtils";
import { useCsrfToken } from "../../../utils/useCsrfToken";

export default function EnquiryForm({ hashed ,sentEnquiryTo}) {
  const [states, setStates] = useState([]);
  const cookieValue = useCsrfToken();


  const initialFormData = {
    name: "",
    mobile_no: "",
    email: "",
    state: "",
    buy_or_rent: "buy",
    message: "",
    for: sentEnquiryTo,
    equipment: hashed,
  };
   const { formData, handleChange, handleSubmit, loading, error, submitted ,responseData,setFormData } =
    useFormSubmit(initialFormData);
    const { data } = useDynamicQuery(['states'],'get-states-list')

    useEffect(() => {
      if(data){
        setStates(data.statesData)
      }
    }, [data]);
    useEffect(() => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        for: sentEnquiryTo,
        equipment: hashed,
      }));
    }, [hashed, sentEnquiryTo, setFormData]);
  useEffect(()=>{
    if(responseData){
      console.log(responseData)
    }
  },[responseData])
  return (
    <div className="card m-2 py-3 px-4 rounded enquiryForm">
      <h3 className="poppins fw-500 text-center text-primary">
        Make An Enquiry
      </h3>
      <form onSubmit={(e) => handleSubmit(e, cookieValue, 'submit-equip-enquiry-form')} >
      {error && <span className="border-0 center">Error in form submission. Please try again later.</span>}

        <input
          type="text"
          name="name"
          className="w-100 my-2 p-2"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
required
        />
        <input
          type="number"
          name="mobile_no"
          className="w-100 my-2 p-2"
          placeholder="Mobile Number"
          value={formData.mobile_no}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          className="w-100 my-2 p-2"
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
          className="w-100 my-2 p-2"
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
        <select
          name="buy_or_rent"
          className="w-100 my-2 p-2"
          value={formData.buy_or_rent}
          onChange={handleChange}
          required
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
        {loading && <div>Sending...</div>}
        {!loading && error && "Try Again"}
        {!loading && !error && submitted && "Submitted"}
        {!loading && !error && !submitted && "Get Seller Details"}
          
        </button>
      </form>
    </div>
  );
}
