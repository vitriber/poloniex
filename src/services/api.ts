import axios from 'axios';

const api = axios.create({
  baseURL: 'https://poloniex.com/public',
});

export default api;
