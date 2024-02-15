const scrapFunction = require("../scrapeFunction");

const scrapOrganizations = async () => {
  return await scrapFunction("organizations");
};

module.exports = scrapOrganizations;
