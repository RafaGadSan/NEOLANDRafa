window.addEventListener("scroll", (ev) => console.log(ev));

const createBtn = document.createElement("button");
const themeBtn = document.createElement("button");
const searchBar = document.querySelector("#searchBar");

createBtn.innerText = "Crear elemento";
themeBtn.innerText = "Cambiar tema";

const createBox = () => {
  const box = document.createElement("div");
  box.classList.add("box");
  document.body.appendChild(box);
};

const changeTheme = () => {
  document.body.classList.toggle("dark");
};

createBtn.addEventListener("click", () => createBox());
themeBtn.addEventListener("click", changeTheme);

document.body.appendChild(createBtn);
document.body.appendChild(themeBtn);

//searchBar.addEventListener("keyup", () => console.log(searchBar.value));
//searchBar.addEventListener("change", (e) => console.log(e.target.value));
searchBar.addEventListener("input", (e) => console.log(e.target.value));
