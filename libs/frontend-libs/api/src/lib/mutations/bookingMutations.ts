import axios from 'axios';
import { IBooking } from '../interfaces/IBooking';

const api = axios.create({
  baseURL: 'http://localhost:3333/api/',
});

export const borrowedBook = async (bookingDto: IBooking) => {
  const { data } = await api.post('booking', bookingDto);
  return data;
};
