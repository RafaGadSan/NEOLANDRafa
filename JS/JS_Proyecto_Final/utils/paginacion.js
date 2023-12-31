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
      pag.style.border = "solid 0.125rem #121212 ";
      pag.style.borderRadius = "0.25rem ";
      pag.style.fontSize = "large";
      pag.style.boxShadow = "0.25rem 0.25rem #121212;";
      pag.style.backgroundColor = "#ffff55";
    });
    allButton[0].style.border = "solid 3px #0079b6";
    allButton[0].style.color = " #083905ff";
  }

  CardsPokemons(data.slice(0, numberElement));
};

const addListeners = (buttonNumber, data, numberElement, i) => {
  buttonNumber.addEventListener("click", () => {
    const allButtonPag = document.querySelectorAll(".buttonPaginacion");

    allButtonPag.forEach((pag) => {
      pag.style.border = "solid 0.125rem #121212 ";
      pag.style.borderRadius = "0.25rem ";
      pag.style.fontSize = "large";
      pag.style.boxShadow = "0.25rem 0.25rem #121212;";
    });

    buttonNumber.style.border = "solid 3px #0079b6";
    buttonNumber.style.color = " #083905ff";

    const end = (i + 1) * numberElement;
    const start = end - numberElement < 0 ? 0 : end - numberElement;
    CardsPokemons(data.slice(start, end));
  });
};
