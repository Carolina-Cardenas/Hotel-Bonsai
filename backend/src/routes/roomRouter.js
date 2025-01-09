import express from "express";
import {
  getAllRooms,
  saveRoom,
  updateRoom,
  deleteRoom,
  getRoom,
} from "../controllers/roomController.js";

const router = express.Router();

/**
 * @swagger
 * /rooms:
 *   get:
 *     summary: Returns the list of all rooms
 *     tags: [Rooms]
 *     responses:
 *       200:
 *         description: The list of the rooms
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.get("/rooms", getAllRooms);
/**
 * @swagger
 * /rooms/{id}:
 *   get:
 *     summary: Get a room by ID
 *     tags: [Rooms]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The room id
 *     responses:
 *       200:
 *         description: The room description by id
 *         content:
 *           application/json:
 *
 *       404:
 *         description: The room was not found
 *       500:
 *         description: Some server error
 */
router.get("/rooms/:id", getRoom);
/**
 * @swagger
 * /rooms:
 *   post:
 *     summary: Creates a new room
 *     tags: [Rooms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *
 *     responses:
 *       201:
 *         description: The room was successfully created
 *         content:
 *           application/json:
 *
 *       500:
 *         description: Some server error
 */
router.post("/rooms", saveRoom);
/**
 * @swagger
 * /rooms/{id}:
 *   put:
 *     summary: Updates a room
 *     tags: [Rooms]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The room id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *     responses:
 *       200:
 *         description: The room was successfully updated
 *         content:
 *           application/json:
 *
 *       404:
 *         description: The room was not found
 *       500:
 *         description: Some server error
 */

router.put("/rooms/:id", updateRoom);
/**
 * @swagger
 * /rooms/{id}:
 *   delete:
 *     summary: Deletes a room
 *     tags: [Rooms]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The room id
 *     responses:
 *       204:
 *         description: The room was deleted successfully
 *       404:
 *         description: The room was not found
 *       500:
 *         description: Some server error
 */
router.delete("/rooms/:id", deleteRoom);

export default router;
