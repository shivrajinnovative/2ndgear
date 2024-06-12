import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useCsrfToken } from './useCsrfToken';

export const postData = async (url, data, csrfToken) => {
  try {
    const response = await axios.post(url, data, {
      headers: {
        'X-XSRF-TOKEN': csrfToken,
      },
    });
    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    throw new Error(`Error posting data: ${error.message}`);
  }
};

export const useDynamicMutation = (apiEndpoint, onSuccess, onError) => {
  const csrfToken = useCsrfToken();

  const mutationFn = async (data) => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/${apiEndpoint}`;
    return await postData(apiUrl, data, csrfToken);
  };

  const mutationConfig = {
    onSuccess,
    onError,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  };

  return useMutation(mutationFn, mutationConfig);
};
