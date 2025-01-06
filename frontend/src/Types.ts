
export interface Reservation {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  roomNumber: number;
  phone: string;
  guests: number;
  specialRequests?: string;
  checkInDate: string;
  checkOutDate: string;
}