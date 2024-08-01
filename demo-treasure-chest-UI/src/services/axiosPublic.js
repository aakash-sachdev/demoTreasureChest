import axios from 'axios';

const axiosPublicInstance = axios.create({
  baseURL: 'http://localhost:8080',
});

export default axiosPublicInstance;