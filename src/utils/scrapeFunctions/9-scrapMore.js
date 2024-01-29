const puppeteer = require("puppeteer");

const scrapMore = async () => {
  const URL = "https://www.starwars.com/databank";
  const moreArray = [];

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();
  await page.goto(URL);
  await page.waitForSelector(".social-prompt"); //More From Star Wars
  await page.click('li[data-slug="more"] a');
  await new Promise((resolve) => setTimeout(resolve, 3000)); //Espera tres segundos

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

      const more = {
        name,
        img,
        detail,
      };
      moreArray.push(more);
    }
    await browser.close();
    return moreArray;
  }
};

module.exports = scrapMore;