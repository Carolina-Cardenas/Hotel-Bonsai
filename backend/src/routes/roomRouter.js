import express from "express";
import {
  getAllRooms,
  saveRoom,
  updateRoom,
  deleteRoom,
  getRoom,
} from "../controllers/roomController.js";

const router = express.Router();
router.get("/rooms", getAllRooms);
router.get("/rooms/:id", getRoom);
router.post("/rooms", saveRoom);
router.put("/rooms/:id", updateRoom);
router.delete("/rooms/:id", deleteRoom);

export default router;
