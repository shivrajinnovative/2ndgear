import axios from "axios";
import { useQuery } from "@tanstack/react-query";
axios.defaults.withCredentials = true;

export const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};

export const useDynamicQuery = (queryKey, apiEndpoint) => {
  const queryFn = async () => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/${apiEndpoint}`;
    return await fetchData(apiUrl);
  };

  return useQuery({
    queryKey,
    queryFn,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnMount: false, 
    refetchOnWindowFocus: false, 
    staleTime: Infinity, 
    cacheTime: Infinity, 
  });
};
