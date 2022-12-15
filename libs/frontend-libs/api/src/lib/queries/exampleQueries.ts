import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

export const getServiceStatus = () => api.get('api').then((res) => res.data);
