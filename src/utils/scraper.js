const fs = require("fs");
const scrapDroids = require("./scrapeFunctions/3-scrapeDroids");
const scrapSpecies = require("./scrapeFunctions/6-scrapeSpecies");

const scraper = async () => {
  const droidsArray = await scrapDroids();
  write(droidsArray, './src/utils/jsonFiles/3-droids.json');

  const speciesArray = await scrapSpecies();
  write(speciesArray, './src/utils/jsonFiles/6-species.json')
}

const write = (array, ruta) => {
  fs.writeFile(ruta, JSON.stringify(array), () => {
    console.log("Archivo escrito");
  });
};

scraper();

