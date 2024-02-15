const { SpeciesModel } = require("../models/data.model");
const species = require("../../utils/jsonFiles/6-species.json");
const { insertManyData, getAllData } = require("../../utils/controllerUtil");

const insertManySpecies = async (req, res, next) => {
  return await insertManyData(SpeciesModel, species, res);
};

const getAllSpecies = async (req, res, next) => {
  return await getAllData(SpeciesModel, res);
};

module.exports = { insertManySpecies, getAllSpecies };
