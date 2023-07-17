//!Un ejemplo con Then Catch para mí mismo.

const pruebaThenCatch = () => {
  for (let i = 0; i < 10; i++) {
    console.log(i);
    i == 9 && (i = "j");
  }
};
