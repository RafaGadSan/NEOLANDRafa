import "./Spinner.css";

const template = () =>
  `<div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;

export const PrintTemplateSpinner = () => {
  document.getElementById("spinner").innerHTML = template();
};
