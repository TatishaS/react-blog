import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5656',
  headers: {
    Authorization: window.localStorage.getItem('token'),
  },
});
