import axios from "axios";

export const getData = () => {
  axios
    .get("https://rickandmortyapi.com/api/character/?page=1")
    .then((res) => console.log(res.data.results))
    .catch((error) => console.log(error));
};
