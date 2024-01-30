const { WeaponsModel } = require("../models/data.model");
const weapons = require("../../utils/jsonFiles/8-weapons.json");

const insertManyWeapons = async (req, res, next) => {
  try {
    const cleanedWeapons = weapons.map((weapon) => {
      return {
        name: weapon.name.replace(/\"/g, "").trim(),
        img: weapon.img.trim(),
        detail: weapon.detail.trim(),
      };
    });
    await WeaponsModel.insertMany(cleanedWeapons);
    return res.status(201).json("All weapons uploaded to the database");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const getAllWeapons = async (req, res, next) => {
  try {
    const allWeapons = await WeaponsModel.find();
    return res.status(200).json(allWeapons);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { insertManyWeapons, getAllWeapons };
