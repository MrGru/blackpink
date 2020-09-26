import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://abc.example',
  timeout: 10000,
});

instance.interceptors.request.use((config) => {
  console.log(config);
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.response) {
      console.log(err.response.status);
      return Promise.reject({});
    }
    if (err.request) {
      console.log(err);
      return Promise.reject({});
    }
    return Promise.reject({});
  },
);

const get = (url, data) => {
  return instance
    .get(url, {
      params: data,
    })
    .then((response) => response.data)
    .catch((error) => error);
};

const post = (url, data) => {
  return instance
    .post(url, data)
    .then((response) => response.data)
    .catch((error) => error);
};

const put = (url, data) => {
  return instance
    .put(url, data)
    .then((response) => response.data)
    .catch((error) => error);
};

const del = (url) => {
  return instance
    .delete(url)
    .then((response) => response.data)
    .catch((error) => error);
};

const api = {
  get,
  post,
  put,
  del,
};

export default api;
