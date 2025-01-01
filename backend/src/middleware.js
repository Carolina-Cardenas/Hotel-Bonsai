const cors = require("cors");
const bodyParser = require("body-parser");

// Función para registrar los middlewares
const setupMiddleware = (app) => {
  app.use(cors()); // Habilita CORS
  app.use(bodyParser.json()); // Parseo del cuerpo de las solicitudes en formato JSON
};

module.exports = setupMiddleware;
