const { CreaturesModel } = require("../models/data.model");
const creatures = require("../../utils/jsonFiles/2-creatures.json");

const insertManyCreatures = async (req, res, next) => {
  try {
    const cleanedCreatures = creatures.map((creature) => {
      return {
        name: creature.name.replace(/\"/g, "").trim(),
        img: creature.img.trim(),
        detail: creature.detail.trim(),
      };
    });
    await CreaturesModel.insertMany(cleanedCreatures);
    return res.status(201).json("All creatures uploaded to the database");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const getAllCreatures = async (req, res, next) => {
  try {
    const allCreatures = await CreaturesModel.find();
    return res.status(200).json(allCreatures);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { insertManyCreatures, getAllCreatures };
