const { LocationModel } = require("../models/data.model");
const locations = require("../../utils/jsonFiles/4-locations.json");

const insertManyLocations = async (req, res, next) => {
  try {
    const cleanedLocations = locations.map((location) => {
      return {
        name: location.name.replace(/\"/g, "").trim(),
        img: location.img.trim(),
        detail: location.detail.trim(),
      };
    });
    await LocationModel.insertMany(cleanedLocations);
    return res.status(201).json("All locations uploaded to the database");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const getAllLocations = async (req, res, next) => {
  try {
    const allLocations = await LocationModel.find();
    return res.status(200).json(allLocations);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { insertManyLocations, getAllLocations };
