import { useState } from "react";
import axios from "axios";

export const useFormSubmit = (initialData) => {
  const [formData, setFormData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e, cookieValue, apiUrl) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/${apiUrl}`, formData, {
        headers: {
          "X-XSRF-TOKEN": cookieValue 
        }
      });
      if(response.data.flag === "1") {
        setFormData(initialData);
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

  return { formData, handleChange, handleSubmit, loading, error, submitted };
};
