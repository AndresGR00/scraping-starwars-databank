const { OrganizationsModel } = require("../models/data.model");
const organizations = require("../../utils/jsonFiles/5-organizations.json");

const insertManyOrganizations = async (req, res, next) => {
  try {
    const cleanedOrganizations = organizations.map((organization) => {
      return {
        name: organization.name.replace(/\"/g, "").trim(),
        img: organization.img.trim(),
        detail: organization.detail.trim(),
      };
    });
    await OrganizationsModel.insertMany(cleanedOrganizations);
    return res.status(201).json("All organizations uploaded to the database");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const getAllOrganizations = async (req, res, next) => {
  try {
    const allOrganizations = await OrganizationsModel.find();
    return res.status(200).json(allOrganizations);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { insertManyOrganizations, getAllOrganizations };
