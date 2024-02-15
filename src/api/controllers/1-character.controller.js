const { CharacterModel } = require("../models/data.model");
const characters = require("../../utils/jsonFiles/1-characters.json");
const { insertManyData, getAllData } = require("../../utils/controllerUtil");

const insertManyCharacters = async (req, res, next) => {
  return await insertManyData(CharacterModel, characters, res);
};

const getAllCharacters = async (req, res, next) => {
  return await getAllData(CharacterModel, res);
};

module.exports = { insertManyCharacters, getAllCharacters };
