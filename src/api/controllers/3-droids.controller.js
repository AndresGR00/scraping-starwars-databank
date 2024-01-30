const { DroidsModel } = require("../models/data.model");
const droids = require("../../utils/jsonFiles/3-droids.json");

const insertManyDroids = async (req, res, next) => {
  try {
    const cleanedDroids = droids.map((droid) => {
      return {
        name: droid.name.replace(/\"/g, "").trim(),
        img: droid.img.trim(),
        detail: droid.detail.trim(),
      };
    });
    await DroidsModel.insertMany(cleanedDroids);
    return res.status(201).json("All droids uploaded to the database");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const getAllDroids = async (req, res, next) => {
  try {
    const allDroids = await DroidsModel.find();
    return res.status(200).json(allDroids);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { insertManyDroids, getAllDroids };
