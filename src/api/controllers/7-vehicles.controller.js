const { VehiclesModel } = require("../models/data.model");
const vehicles = require("../../utils/jsonFiles/7-vehicles.json");
const { insertManyData, getAllData } = require("../../utils/controllerUtil");

const insertManyVehicles = async (req, res, next) => {
  return await insertManyData(VehiclesModel, vehicles, res);
};

const getAllVehicles = async (req, res, next) => {
  return await getAllData(VehiclesModel, res);
};

module.exports = { insertManyVehicles, getAllVehicles };
