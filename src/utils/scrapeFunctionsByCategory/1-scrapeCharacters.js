const scrapFunction = require("../scrapeFunction");

const scrapCharacters = async () => {
  return await scrapFunction("characters");
};

module.exports = scrapCharacters;
