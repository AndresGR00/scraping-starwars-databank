require("dotenv").config({ path: "./src/utils/.env" });
const express = require("express");
const { connectDB } = require("./src/config/db");
const characterRouter = require("./src/api/routes/1-character.router");

const app = express();
app.use(express.json());
app.disable("x-powered-by");

const PORT = 3000;

connectDB();

app.use("/api/V1/characters", characterRouter);

app.use("*", (req, res, next) => {
  return res.status(404).json("Not found");
});

app.listen(PORT, () => {
  console.log("Server started in http://localhost:3000/");
});
