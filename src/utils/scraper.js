const fs = require("fs");
const scrapCharacters = require("./scrapeFunctions/1-scrapeCharacters");
const scrapCreatures = require("./scrapeFunctions/2-scrapeCreatures");
const scrapDroids = require("./scrapeFunctions/3-scrapeDroids");
const scrapLocations = require("./scrapeFunctions/4-scrapLocations");
const scrapOrganizations = require("./scrapeFunctions/5-scrapOrganizations");
const scrapSpecies = require("./scrapeFunctions/6-scrapeSpecies");
const scrapVehicles = require("./scrapeFunctions/7-scrapVehicles");
const scrapWeapons = require("./scrapeFunctions/8-scrapWeapons+Tech");
const scrapMore = require("./scrapeFunctions/9-scrapMore");

const scraper = async () => {
  //1.Characters
  /* const charactersArray = await scrapCharacters();
  write(charactersArray, "./src/utils/jsonFiles/1-characters.json"); */

  //2.Creatures
  const creaturesArray = await scrapCreatures();
  write(creaturesArray, "./src/utils/jsonFiles/2-creatures.json");

  //3.Droids
  const droidsArray = await scrapDroids();
  write(droidsArray, "./src/utils/jsonFiles/3-droids.json");

  //4.Locations
  const locationsArray = await scrapLocations();
  write(locationsArray, "./src/utils/jsonFiles/4-locations.json");

  //5.Organizations
  const organizationsArray = await scrapOrganizations();
  write(organizationsArray, "./src/utils/jsonFiles/5-organizations.json");

  //6.Species
  const speciesArray = await scrapSpecies();
  write(speciesArray, "./src/utils/jsonFiles/6-species.json");

  //7.Vehicles
  const vehiclesArray = await scrapVehicles();
  write(vehiclesArray, "./src/utils/jsonFiles/7-vehicles.json");

  //8.Weapons+Tech
  const weaponsArray = await scrapWeapons();
  write(weaponsArray, "./src/utils/jsonFiles/8-weapons.json");

  //9.More
  const moreArray = await scrapMore();
  write(moreArray, "./src/utils/jsonFiles/9-more.json");
};

const write = (array, ruta) => {
  fs.writeFile(ruta, JSON.stringify(array), () => {
    console.log("Archivo escrito");
  });
};

scraper();
