export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)

  // function ready() {
  //   alert('DOM is ready');

  //   // la imagen aún no está cargada (a menos que se haya almacenado en caché), por lo que el tamaño es 0x0
  //   alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
  // }

  // ready()

  // window.onload = function () { // también puede usar window.addEventListener('load', (event) => {
  //   alert('Página cargada');

  //   // la imagen es cargada al mismo tiempo
  //   alert(`Tamaño de la pantalla : ${window.innerWidth}`);
  // };
}
