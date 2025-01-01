import express from "express";
import {
  getAllReservations,
  saveReservation,
  updateReservation,
  deleteReservation,
} from "../controllers/reservationController.js";

const router = express.Router();
router.get("/reservations", getAllReservations);
router.post("/reservations", saveReservation);
router.put("/reservations/:id", updateReservation);
router.delete("/reservations/:id", deleteReservation);

export default router;
