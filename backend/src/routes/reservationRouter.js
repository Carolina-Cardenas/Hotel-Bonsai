import express from "express";
import {
  getAllReservations,
  saveReservation,
  updateReservation,
  deleteReservation,
  getReservation,
} from "../controllers/reservationController.js";

const router = express.Router();
router.get("/reservations", getAllReservations);
router.get("/reservations/:id", getReservation);
router.post("/reservations", saveReservation);
router.put("/reservations/:id", updateReservation);
router.delete("/reservations/:id", deleteReservation);

export default router;
