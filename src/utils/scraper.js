const puppeteer = require('puppeteer');
const fs = require("fs");

const URL = 'https://www.starwars.com/databank';

const droidsArray = [];

const scrapDroids = async () => {
    const browser = await puppeteer.launch({headless: false, defaultViewport: null, args: ["--start-maximized"]});
    const page = await browser.newPage();
    await page.goto(URL);
    await page.waitForSelector('.social-prompt'); //More From Star Wars
    await page.click('li[data-title="Droids"] a');

    const elements = await page.$$('li.building-block-config a');

    for (const element of elements) {
        await element.click();  // No hace click
        await page.waitForNavigation();
    
        // Extrae la información del título, descripción e imagen aquí
        const titulo = await page.$eval('span.long-title', el => el.textContent);
        const descripcion = await page.$eval('.desc', el => el.textContent);
        const imagen = await page.$eval('li.building-block-config img', el => el.getAttribute('src'));
    
        const droid = {
            titulo,
            descripcion,
            imagen
        }
        droidsArray.push(droid)
    
        // Vuelve atrás para el siguiente elemento li
        await page.goBack();
      }
    write(droidsArray)
    await browser.close()
}

const write = (droidsArray) => {
    fs.writeFile("droids.json", JSON.stringify(droidsArray), () => {
      console.log("Archivo escrito");
    });
  };

scrapDroids()

