const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const theRoutes = require("./routes/furnitureRoutes");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/admin", theRoutes);
app.options("*", cors());

const APORT = process.env.MYPORT || 5000;
const DADATABASE = process.env.MYDATABASE;

mongoose
  .connect(DADATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false
  })
  .then(console.log("Database is working!"));

app.listen(APORT, () => {
  console.log(`Listening on port ${APORT}`);
});
