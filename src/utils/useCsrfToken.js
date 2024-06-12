// utils/useCsrfToken.js
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useCsrfToken = () => {
  const { data: csrfToken, isLoading, isError } = useQuery({
    queryKey: 'csrfToken',
    queryFn: async () => {
      try {
        const response = await axios('https://2gear.in/staging/sanctum/csrf-cookie');
        console.log(response)
        if (!response.ok) {
          throw new Error('Failed to fetch CSRF token');
        }
        // Assuming your backend sets the CSRF token in a cookie named XSRF-TOKEN
        // const csrfTokenFromCookie = document.cookie
        //   .split('; ')
        //   .find(row => row.startsWith('XSRF-TOKEN='))
        //   .split('=')[1];
        return { csrfToken: "csrfTokenFromCookie" };
      } catch (error) {
        throw new Error(`Error fetching CSRF token: ${error.message}`);
      }
    },
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return { csrfToken, isLoading, isError };
};
