import axios from "axios";
import { useQuery } from "@tanstack/react-query";

axios.defaults.withCredentials = true;

// Function to handle fetching data via POST method
export const fetchPostData = async (url, postData) => {
  try {
    const response = await axios.post(url, postData);
    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};

// Custom hook for handling dynamic POST queries
export const useDynamicPostQuery = () => {
  const executeQuery = async (apiEndpoint, postData) => {
   
    const apiUrl = `${process.env.REACT_APP_API_URL}/${apiEndpoint} `;
    return await fetchPostData(apiUrl, postData);
  };
  return useQuery({
    queryKey: ["dynamicPostQuery"],
    queryFn: executeQuery ,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });
};
