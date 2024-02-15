const { LocationModel } = require("../models/data.model");
const locations = require("../../utils/jsonFiles/4-locations.json");
const { insertManyData, getAllData } = require("../../utils/controllerUtil");

const insertManyLocations = async (req, res, next) => {
  return await insertManyData(LocationModel, locations, res);
};

const getAllLocations = async (req, res, next) => {
  return await getAllData(LocationModel, res);
};

module.exports = { insertManyLocations, getAllLocations };
