require("dotenv").config({ path: "./src/utils/.env" });
const express = require("express");
const { connectDB } = require("./src/config/db");

//Import routers
const characterRouter = require("./src/api/routes/1-characters.router");
const creatureRouter = require("./src/api/routes/2-creatures.router");
const droidRouter = require("./src/api/routes/3-droids.router");
const locationRouter = require("./src/api/routes/4-locations.router");
const organizationRouter = require("./src/api/routes/5-organizations.router");
const specieRouter = require("./src/api/routes/6-species.router");
const vehicleRouter = require("./src/api/routes/7-vehicles.router");
const weaponRouter = require("./src/api/routes/8-weapons.router");
const moreRouter = require("./src/api/routes/9-more.router");

const app = express();
app.use(express.json());
app.disable("x-powered-by");

const PORT = 3000;

connectDB();

//Routes
app.use("/api/V1/characters", characterRouter);
app.use("/api/V1/creatures", creatureRouter);
app.use("/api/V1/droids", droidRouter);
app.use("/api/V1/locations", locationRouter);
app.use("/api/V1/organizations", organizationRouter);
app.use("/api/V1/species", specieRouter);
app.use("/api/V1/vehicles", vehicleRouter);
app.use("/api/V1/weapons", weaponRouter);
app.use("/api/V1/more", moreRouter);


app.use("*", (req, res, next) => {
  return res.status(404).json("Not found");
});

app.listen(PORT, () => {
  console.log("Server started in http://localhost:3000/");
});
