const express = require("express");
const routes = require("./router/reuterLike");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173", // Cambia esto si tu frontend está en otro puerto o dominio
  })
);

// Routes
app.use("/api", routes);

// Manejo de errores global (opcional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Error interno del servidor" });
});

module.exports = app;
