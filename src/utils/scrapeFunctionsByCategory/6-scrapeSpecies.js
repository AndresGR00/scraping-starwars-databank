const scrapFunction = require("../scrapeFunction");

const scrapSpecies = async () => {
  return await scrapFunction("species");
};

module.exports = scrapSpecies;
