import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: process.env.API_URI
});

instance.interceptors.request.use(function (config: AxiosRequestConfig) {
  return config;
});

export default instance;