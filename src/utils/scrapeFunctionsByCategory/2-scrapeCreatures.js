const scrapFunction = require("../scrapeFunction");

const scrapCreatures = async () => {
  return await scrapFunction("creatures");
};

module.exports = scrapCreatures;
