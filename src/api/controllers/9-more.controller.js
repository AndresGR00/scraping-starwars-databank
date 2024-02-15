const { MoreModel } = require("../models/data.model");
const more = require("../../utils/jsonFiles/9-more.json");
const { insertManyData, getAllData } = require("../../utils/controllerUtil");

const insertManyMore = async (req, res, next) => {
  return await insertManyData(MoreModel, more, res);
};

const getAllMore = async (req, res, next) => {
  return await getAllData(MoreModel, res);
};

module.exports = { insertManyMore, getAllMore };
