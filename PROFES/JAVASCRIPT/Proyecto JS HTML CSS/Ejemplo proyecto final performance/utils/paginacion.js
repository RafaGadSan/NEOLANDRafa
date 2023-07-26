import { CardsPokemons } from "../components";

export const Paginacion = (data, numberElement) => {
  const longitud = data.length;
  const numberDigitOfPage = longitud / numberElement;
  document.getElementById("paginacion").innerHTML = "";
  if (numberDigitOfPage > 1) {
    for (let i = 0; i < numberDigitOfPage; i++) {
      const buttonNumber = document.createElement("button");
      buttonNumber.setAttribute("class", `${i + 1} buttonPaginacion`);
      buttonNumber.innerHTML = i + 1;
      document.getElementById("paginacion").appendChild(buttonNumber);
      addListeners(buttonNumber, data, numberElement, i, numberDigitOfPage);
    }
    const allButton = document.querySelectorAll(".buttonPaginacion");
    allButton.forEach((pag) => {
      pag.style.border = "solid 3px #0000006d ";
    });
    allButton[0].style.border = "solid 3px #15a00e7d";
    allButton[0].style.color = " #083905ff";
  }

  CardsPokemons(data.slice(0, numberElement));
};

const addListeners = (
  buttonNumber,
  data,
  numberElement,
  i,
  numberDigitOfPage
) => {
  buttonNumber.addEventListener("click", () => {
    console.log("entro");
    const allButtonPag = document.querySelectorAll(".buttonPaginacion");

    allButtonPag.forEach((pag) => {
      pag.style.border = "solid 3px #0000006d ";
    });

    buttonNumber.style.border = "solid 3px #15a00e7d ";
    buttonNumber.style.color = " #093f06ff";

    const end = (i + 1) * numberElement;
    const start = end - numberElement < 0 ? 0 : end - numberElement;
    CardsPokemons(data.slice(start, end));
  });
};
