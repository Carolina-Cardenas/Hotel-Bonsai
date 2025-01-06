const express = require("express");
const pool = require("../db");

const router = express.Router();

router.post("/reservation", async (req, res) => {
  const { phone, guests, specialRequests, checkInDate, checkOutDate } =
    req.body;

  if (!phone || !guests || !checkInDate || !checkOutDate) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const result = await pool.query(
      `INSERT INTO reservations (phone, guests, special_requests, check_in_date, check_out_date)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [phone, guests, specialRequests, checkInDate, checkOutDate]
    );

    res.status(201).json({
      message: "Reservation created successfully",
      data: result.rows[0],
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/reservations", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM reservations");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
