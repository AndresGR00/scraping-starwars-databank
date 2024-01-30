const { MoreModel } = require("../models/data.model");
const more = require("../../utils/jsonFiles/9-more.json");

const insertManyMore = async (req, res, next) => {
  try {
    const cleanedMore = more.map((more) => {
      return {
        name: more.name.replace(/\"/g, "").trim(),
        img: more.img.trim(),
        detail: more.detail.trim(),
      };
    });
    await MoreModel.insertMany(cleanedMore);
    return res.status(201).json("All more uploaded to the database");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const getAllMore = async (req, res, next) => {
  try {
    const allMore = await MoreModel.find();
    return res.status(200).json(allMore);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { insertManyMore, getAllMore };
