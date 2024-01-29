const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    img: { type: String, trim: true, required: true },
    detail: { type: String, trim: true, required: true },
  },
  { timestamps: true }
);

const CharacterModel = mongoose.model("Character", dataSchema, "characters");
const CreaturesModel = mongoose.model("Creature", dataSchema, "creatures");
const DroidsModel = mongoose.model("Droid", dataSchema, "droids");
const LocationModel = mongoose.model("Location", dataSchema, "locations");
const OrganizationsModel = mongoose.model("Organization",dataSchema,"organizations");
const SpeciesModel = mongoose.model("Specie", dataSchema, "species");
const VehiclesModel = mongoose.model("Vehicle", dataSchema, "vehicles");
const WeaponsModel = mongoose.model("Weapon", dataSchema, "weapons");
const MoreModel = mongoose.model("More", dataSchema, "more");

module.exports = {
  CharacterModel,
  CreaturesModel,
  DroidsModel,
  LocationModel,
  OrganizationsModel,
  SpeciesModel,
  VehiclesModel,
  WeaponsModel,
  MoreModel,
};
