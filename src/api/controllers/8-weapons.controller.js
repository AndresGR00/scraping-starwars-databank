const { WeaponsModel } = require("../models/data.model");
const weapons = require("../../utils/jsonFiles/8-weapons.json");
const { insertManyData, getAllData } = require("../../utils/controllerUtil");

const insertManyWeapons = async (req, res, next) => {
  return await insertManyData(WeaponsModel, weapons, res);
};

const getAllWeapons = async (req, res, next) => {
  return await getAllData(WeaponsModel, res);
};

module.exports = { insertManyWeapons, getAllWeapons };
