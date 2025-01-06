import Reservation from "../models/reservationModel.js";

const formatDate = (date) => {
  return new Date(date).toISOString().split("T")[0];
};

const formatReservationDates = (reservation) => {
  if (!reservation) return null;
  return {
    ...reservation.toObject(),
    checkInDate: formatDate(reservation.checkInDate),
    checkOutDate: formatDate(reservation.checkOutDate),
  };
};

export const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();

    const formattedReservations = reservations.map((reservation) =>
      formatReservationDates(reservation)
    );

    res.json(formattedReservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }

    const formattedReservation = formatReservationDates(reservation);
    res.json(formattedReservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const saveReservation = async (req, res) => {
  console.log("Datos recibidos:", req.body);
  try {
    const reservationData = {
      ...req.body,
      checkInDate: new Date(req.body.checkInDate).toISOString().split("T")[0],
      checkOutDate: new Date(req.body.checkOutDate).toISOString().split("T")[0],
    };
    const reservation = new Reservation(reservationData);
    await reservation.save();

    const formattedReservation = formatReservationDates(reservation);
    res.json(formattedReservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateReservation = async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (updateData.checkInDate) {
      updateData.checkInDate = new Date(updateData.checkInDate)
        .toISOString()
        .split("T")[0];
    }
    if (updateData.checkOutDate) {
      updateData.checkOutDate = new Date(updateData.checkOutDate)
        .toISOString()
        .split("T")[0];
    }
    const updatedReservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
      }
    );
    if (!updatedReservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }
    const formattedReservation = formatReservationDates(updatedReservation);
    res.json(formattedReservation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteReservation = async (req, res) => {
  try {
    const deletedReservation = await Reservation.findByIdAndDelete(
      req.params.id
    );
    if (!deletedReservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }
    res.json({ message: "Reservation deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
