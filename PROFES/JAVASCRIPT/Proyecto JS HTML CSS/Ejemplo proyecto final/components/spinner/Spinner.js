import "./Spinner.css";

const template = () => `
<div class="lds-spinner">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
`;

export const printTemplateSpinner = () =>
  (document.getElementById("spinner").innerHTML = template());
