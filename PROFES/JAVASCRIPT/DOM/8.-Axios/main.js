import { getData } from "./src/services/ApiServices";
import "./style.css";

getData();

document.querySelector("#app").innerHTML = `
  <div>
    
  </div>
`;
