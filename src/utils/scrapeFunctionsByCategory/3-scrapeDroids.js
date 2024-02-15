const scrapFunction = require("../scrapeFunction");

const scrapDroids = async () => {
  return await scrapFunction("droids");
};

module.exports = scrapDroids;
