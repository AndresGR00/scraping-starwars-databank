const { VehiclesModel } = require("../models/data.model");
const vehicles = require("../../utils/jsonFiles/7-vehicles.json");

const insertManyVehicles = async (req, res, next) => {
  try {
    const cleanedVehicles = vehicles.map((vehicle) => {
      return {
        name: vehicle.name.replace(/\"/g, "").trim(),
        img: vehicle.img.trim(),
        detail: vehicle.detail.trim(),
      };
    });
    await VehiclesModel.insertMany(cleanedVehicles);
    return res.status(201).json("All vehicles uploaded to the database");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const getAllVehicles = async (req, res, next) => {
  try {
    const allVehicles = await VehiclesModel.find();
    return res.status(200).json(allVehicles);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { insertManyVehicles, getAllVehicles };
