import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/api/',
});

export const getQuotes = () => api.get('quotes').then((res) => res.data);

export const getQuote = (id: number) => {
  if (!id) {
    return;
  }

  return api.get(`quotes/${id}`).then((res) => res.data);
};
