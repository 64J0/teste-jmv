const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");

const database = require("./database");
const AppError = require("./errors/AppError");

const app = express();
app.use(cors({}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(hpp());

// Máximo de 100 requisições a cada 15 minutos
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

database();
require("./models/User");

const indexRoutes = require("./routes/indexRoutes");
app.use(indexRoutes);

// CUSTOM ERROR HANDLER
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .send({ status: "error", message: err.message });
  }

  console.error(err);

  return res
    .status(500)
    .send({
      status: "error",
      message: "Internal server error."
    });
});

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});