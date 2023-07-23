import "./Footer.css";
const template = () => `<h3>QUE GANE EL MEJOR</h3>`;
export const PrintTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
};
