const { SpeciesModel } = require("../models/data.model");
const species = require("../../utils/jsonFiles/6-species.json");

const insertManySpecies = async (req, res, next) => {
  try {
    const cleanedSpecies = species.map((specie) => {
      return {
        name: specie.name.replace(/\"/g, "").trim(),
        img: specie.img.trim(),
        detail: specie.detail.trim(),
      };
    });
    await SpeciesModel.insertMany(cleanedSpecies);
    return res.status(201).json("All species uploaded to the database");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const getAllSpecies = async (req, res, next) => {
  try {
    const allSpecies = await SpeciesModel.find();
    return res.status(200).json(allSpecies);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { insertManySpecies, getAllSpecies };
