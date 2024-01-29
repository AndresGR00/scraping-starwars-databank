const puppeteer = require("puppeteer");

const scrapDroids = async () => {
  const URL = "https://www.starwars.com/databank";
  const droidsArray = [];

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();
  await page.goto(URL);
  await page.waitForSelector(".social-prompt"); //More From Star Wars
  await page.click('li[data-slug="droids"] a');
  await new Promise((resolve) => setTimeout(resolve, 3000)); //Espera tressegundos

  try {
    //Hace click en el botón showMore mientras esté
    const showMore = ".show_more_container a";
    while (await page.$(showMore)) {
      await page.click(showMore);
    }
  } catch (error) {
    const arrayLi = await page.$$(".blocks-list-view.active li");
    for (const li of arrayLi) {
      let name = await li.$eval(
        ".active li .long-title",
        (el) => el.textContent
      );
      let img = await li.$eval(".active li img", (el) => el.src);
      let detail = await li.$eval(".active li .desc", (el) => el.textContent);

      const droid = {
        name,
        img,
        detail,
      };
      droidsArray.push(droid);
    }
    await browser.close();
    return droidsArray;
  }
};

module.exports = scrapDroids;
