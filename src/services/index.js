import Config from 'react-native-config';
import axios from 'axios';

const instance = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
});

export const handleError = ({message, data, status}) => {
  return Promise.reject({message, data, status});
};

instance.interceptors.request.use((config) => {
  console.log(config);
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  ({message, response: {data, status}}) => {
    return handleError({message, data, status});
  },
);

export default instance;
