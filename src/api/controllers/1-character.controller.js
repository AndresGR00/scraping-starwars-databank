const CharacterModel = require("../models/data.model");
const characters = require("../../utils/jsonFiles/1-characters.json");

const insertManyCharacters = async (req, res, next) => {
  try {
    const characters = req.body;
    const cleanedCharacter = characters.map((character) => {
      return {
        name: character.name.replace('/"', "").trim(),
        img: character.img.trim(),
        detail: character.detail.trim(),
      };
    });
    await CharacterModel.insertMany(cleanedCharacter);
    return res.status(201).json("All characters uploaded to the database");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const getAllCharacters = async (req, res, next) => {
  try {
    const allCharacters = await CharacterModel.find();
    return res.status(200).json(allCharacters);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { insertManyCharacters, getAllCharacters };
