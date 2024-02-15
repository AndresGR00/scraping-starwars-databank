const { OrganizationsModel } = require("../models/data.model");
const organizations = require("../../utils/jsonFiles/5-organizations.json");
const { insertManyData, getAllData } = require("../../utils/controllerUtil");

const insertManyOrganizations = async (req, res, next) => {
  return await insertManyData(OrganizationsModel, organizations, res);
};

const getAllOrganizations = async (req, res, next) => {
  return await getAllData(OrganizationsModel, res);
};

module.exports = { insertManyOrganizations, getAllOrganizations };
