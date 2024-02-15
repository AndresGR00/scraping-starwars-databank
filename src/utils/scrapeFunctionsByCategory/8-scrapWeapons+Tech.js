const scrapFunction = require("../scrapeFunction");

const scrapWeapons = async () => {
  return await scrapFunction("weapons+tech");
};

module.exports = scrapWeapons;
