//! -------------------- importaciones
import fs from "fs";
import inquirer from "inquirer";
import puppeteer from "puppeteer";

//! -------------------- funcion que hace el scrapping

const scrapping = async (keyWord) => {
  const BASE_URL = "https://www.game.es/";

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

  // hacemos un click al input
  await page.click("#searchinput");

  // vamos a meter a ese input el valor de una palabra que nos va a la libreria puppeter
  await page.type("#searchinput", keyWord);
  await page.keyboard.press("Enter");

  await page.waitForTimeout(6000);

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

  const gameProducts = await page.$$eval("div.search-item", (nodes) =>
    nodes.map((n) => ({
      title: n.querySelector("a.cm-txt")?.innerText,
      image: n.querySelector(".img-responsive")?.src,
      price: n.querySelector("div.buy--price")?.innerText,
      type: n.querySelector("span.cm-txt")?.innerText,
    }))
  );

  // la posicion ultima del gameproducts es vacia ---------> pop()
  gameProducts.pop();

  const gameString = JSON.stringify(gameProducts);

  fs.writeFile(
    `${keyWord.replace(" ", "").toLowerCase()}.json`,
    gameString,
    () => console.log("archivo escrito ...😎")
  );

  await browser.close();
};

//! -------------------- hacer las preguntas con inquirer

inquirer
  .prompt([
    {
      name: "busqueda",
      message: "Que quieres buscar? ",
    },
  ])
  .then((answers) => {
    let keyword = answers.busqueda;
    scrapping(keyword);
  });
