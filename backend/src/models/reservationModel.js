import mongoose from "mongoose";

// Definición del esquema de Mongoose
const ReservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 50,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 50,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    maxlength: 50,
    trim: true,
  },
  roomNumber: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    maxlength: 15,
    trim: true,
  },
  guests: {
    type: Number,
    required: true,
    min: 1,
  },
  specialRequests: {
    type: String,
    default: null,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Creación del modelo con el esquema definido
const Reservation = mongoose.model("Reservation", ReservationSchema);

export default Reservation;
