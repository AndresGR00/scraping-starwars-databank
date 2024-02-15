const scrapFunction = require("../scrapeFunction");

const scrapLocations = async () => {
  return await scrapFunction("locations");
};

module.exports = scrapLocations;
