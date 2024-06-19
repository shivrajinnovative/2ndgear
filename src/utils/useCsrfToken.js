// useCsrfToken.js
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.withCredentials = true;

export const useCsrfToken = () => {
  const [cookieValue, setCookieValue] = useState('');

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get("https://2gear.in/staging/sanctum/csrf-cookie", { withCredentials: true });
        if (response.status === 204) {
          const token = Cookies.get("XSRF-TOKEN");
          setCookieValue(token);
        } else {
          console.error("Failed to fetch XSRF token.");
        }
      } catch (error) {
        console.error("Error fetching XSRF token:", error);
      }
    };
    fetchCsrfToken();
  }, []);

  return cookieValue;
};
