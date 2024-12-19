const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const { Pool } = require("pg");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configurar la conexión a PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Ruta para la reserva
app.post("/reservations", async (req, res) => {
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

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
