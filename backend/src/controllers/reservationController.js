import Reservation from "../models/reservationModel.js";

export const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//crear nuevo usuario
// app.post("/reservation",
export const saveReservation = async (req, res) => {
  console.log("Datos recibidos:", req.body);
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateReservation = async (req, res) => {
  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedReservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }
    res.json(updatedReservation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteReservation = async (req, res) => {
  try {
    const deletedReservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!deletedReservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }
    res.json({ message: "Reservation deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
