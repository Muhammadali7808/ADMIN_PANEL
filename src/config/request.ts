import axios from "axios";
import Cookies from 'js-cookie'

export const request = axios.create({ baseURL: "http://localhost:8000" });

request.interceptors.request.use((config) => {
  if(config.url !== '/api/admin-login/'){
   config.headers.Authorization = `Token ${Cookies.get('Token')}`;
  }
  return config;
},
  (config)=> {
    return Promise.reject(config);
  }
);