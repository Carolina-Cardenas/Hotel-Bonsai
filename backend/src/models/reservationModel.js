import mongoose from "mongoose";

// Definición del esquema de Mongoose
const ReservationSchema =
  new mongoose.Schema( 
  {
    phone: {
      type: String,
      required: true,
      maxlength: 15,
      trim: true, // Elimina espacios en blanco adicionales
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
