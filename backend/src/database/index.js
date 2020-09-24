const mongoose = require("mongoose");

const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(__dirname, "../../.env") });


function dbConnection() {
  mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on("connected", () => {
    console.log("Mongoose connection is open!");
  });

  // catches ctrl+c event
  process.on("SIGINT", () => {
    db.close(() => {
      console.log(
        "Mongoose default connection is disconnected due to application termination"
      );

      process.exit(0);
    });
  });

  return db;
}

module.exports = dbConnection;