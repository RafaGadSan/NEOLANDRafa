import "./Footer.css";
const template = () => `<h3>With Love Neoland</h3>`;
export const printTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
};
