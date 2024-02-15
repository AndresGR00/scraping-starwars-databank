const scrapFunction = require("../scrapeFunction");

const scrapVehicles = async () => {
  return await scrapFunction("vehicles");
};

module.exports = scrapVehicles;
