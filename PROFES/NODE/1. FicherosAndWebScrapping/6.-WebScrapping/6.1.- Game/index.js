//! -------------------- importaciones
import fs from "fs";
import puppeteer from "puppeteer";

//! -------------------- funcion que hace el scrapping

const scrapping = async () => {
  const BASE_URL = "https://www.game.es/buscar/pokemon";

  // CREAMOS EL BROWSER -- el navegador maximizado
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

  // abrimos una pagina en el navegador

  const page = await browser.newPage();

  // le metemos la url para que navegue

  await page.goto(BASE_URL);

  // VAMOS A DECIRLE QUE SE ESPERE UNOS SEGUNDOS
  await page.waitForTimeout(6000); ///  ----> esperamos 4 segundos

  //! ---------------- vamos a hacer varias veces scroll

  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);
  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);
  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);
  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);

  //! vamos a esperar que los elementos esten disponibles

  await page.waitForSelector(".search-item");

  //! ------- capturamos los elementos en pantallla

  const title = await page.$$eval("a.cm-txt", (nodes) =>
    nodes.map((n) => n.innerText)
  );

  const images = await page.$$eval(".img-responsive", (nodes) =>
    nodes.map((n) => n.src)
  );

  const prices = await page.$$eval("div.buy--price", (nodes) =>
    nodes.map((n) => n.innerText)
  );

  // como son array paralelos podemos construir un array de objetos con los tres elementos caracteriticos del srapping
  const gameProducts = title.map((item, index) => ({
    title: title[index],
    image: images[index],
    price: prices[index],
  }));

  // la posicion ultima del gameproducts es vacia ---------> pop()
  gameProducts.pop();

  const gameString = JSON.stringify(gameProducts);

  fs.writeFile("pokemon.json", gameString, () =>
    console.log("archivo escrito ...😎")
  );

  await browser.close();
};

//! -------------------- llamar a la funcion

scrapping();
