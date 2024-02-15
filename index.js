require("dotenv").config({ path: "./src/utils/.env" });
const express = require("express");
const { connectDB } = require("./src/config/db");

const app = express();
app.use(express.json());
app.disable("x-powered-by");

const PORT = 3000;

connectDB();

const apiRouter = express.Router();
const routers = [
  { path: "characters", router: require("./src/api/routes/1-characters.router") },
  { path: "creatures", router: require("./src/api/routes/2-creatures.router") },
  { path: "droids", router: require("./src/api/routes/3-droids.router") },
  { path: "locations", router: require("./src/api/routes/4-locations.router") },
  { path: "organizations", router: require("./src/api/routes/5-organizations.router") },
  { path: "species", router: require("./src/api/routes/6-species.router") },
  { path: "vehicles", router: require("./src/api/routes/7-vehicles.router") },
  { path: "weapons", router: require("./src/api/routes/8-weapons.router") },
  { path: "more", router: require("./src/api/routes/9-more.router") },
];

routers.forEach(({ path, router }) => {
  apiRouter.use(`/api/V1/${path}`, router);
});

app.use(apiRouter);

app.use("*", (req, res, next) => {
  return res.status(404).json("Not found");
});

app.listen(PORT, () => {
  console.log("Server started in http://localhost:3000/");
});
