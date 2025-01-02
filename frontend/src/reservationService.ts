import axios from 'axios';
const BASE_URL = '/api/reservations';


export interface Reservation {
  phone: string;
  guests: number;
  specialRequests?: string;
  checkInDate: string;
  checkOutDate: string;
}

export const fetchReservations = async (): Promise<Reservation[]> => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const createReservation = async (reservation: Reservation): Promise<Reservation> => {
  const response = await axios.post(BASE_URL, reservation);
  return response.data;
};

export const updateReservation = async (id: string, reservation: Partial<Reservation>): Promise<Reservation> => {
  const response = await axios.put(`${BASE_URL}/${id}`, reservation);
  return response.data;
};

export const deleteReservation = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
};
