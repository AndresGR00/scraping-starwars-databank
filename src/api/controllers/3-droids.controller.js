const { DroidsModel } = require("../models/data.model");
const droids = require("../../utils/jsonFiles/3-droids.json");
const { insertManyData, getAllData } = require("../../utils/controllerUtil");

const insertManyDroids = async (req, res, next) => {
  return await insertManyData(DroidsModel, droids, res);
};

const getAllDroids = async (req, res, next) => {
  return await getAllData(DroidsModel, res);
};

module.exports = { insertManyDroids, getAllDroids };
