const express = require("express");
const cors = require("cors");
const db = require("./database/db");

const controllers = require("./controllers");
const verifyToken = require("./middlewares/verifyToken");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/user", verifyToken, controllers.getUserById);
app.post("/register", controllers.register);
app.post("/login", controllers.login);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`SERVER FUNCIONANDO EN EL PUERTO ${PORT}`);
  db();
});
const Usuario = require('./model/usuario'); // Reemplaza la ruta con la ubicación de tu modelo

// Consultar todos los usuarios
Usuario.find({}, (err, usuarios) => {
  if (err) {
    console.error('Error al consultar usuarios:', err);
  } else {
    console.log('Usuarios encontrados:', usuarios);
  }
});
module.exports = app;