const { CreaturesModel } = require("../models/data.model");
const creatures = require("../../utils/jsonFiles/2-creatures.json");
const { insertManyData, getAllData } = require("../../utils/controllerUtil");

const insertManyCreatures = async (req, res, next) => {
  return await insertManyData(CreaturesModel, creatures, res);
};

const getAllCreatures = async (req, res, next) => {
  return await getAllData(CreaturesModel, res);
};

module.exports = { insertManyCreatures, getAllCreatures };
