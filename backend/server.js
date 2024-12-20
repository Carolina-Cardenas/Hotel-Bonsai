const express = require("express");
const dotenv = require("dotenv");
const setupMiddleware = require("./middleware");
const reservationRoutes = require("./routes/reservations");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Aplicar middlewares
setupMiddleware(app);

// Configurar rutas
app.use("/reservations", reservationRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
