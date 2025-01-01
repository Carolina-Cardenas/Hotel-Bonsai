const pool = require("./db");
require("dotenv").config({ path: "../.env" });
const testConnection = async () => {
  try {
    console.log("DB_NAME:", process.env.DB_NAME);
    console.log("DB_USER:", process.env.DB_USER);

    const res = await pool.query("SELECT current_database()");
    const client = await pool.connect();
    const host = client.host;
    const port = client.port;

    console.log(
      "Conexión exitosa a la base de datos:",
      res.rows[0].current_database
    );
    console.log(`Dirección de la base de datos: ${host}:${port}`);
    client.release();
  } catch (err) {
    console.error("Error al conectar a la base de datos:", err.message);
  } finally {
    pool.end();
  }
};

testConnection();
