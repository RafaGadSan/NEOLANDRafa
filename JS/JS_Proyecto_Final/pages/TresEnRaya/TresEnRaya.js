var mapa = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var jugador = 1;
var njugadores = 0;
var eleccion = 0;
var esquinas = [0, 2, 6, 8];
function resetear() {
  document.getElementById("opcion1").removeAttribute("hidden", "hidden");
  document.getElementById("opcion2").setAttribute("hidden", "hidden");
  document.getElementById("pregunta").setAttribute("hidden", "hidden");
  document.getElementById("mensaje").setAttribute("hidden", "hidden");
  document.getElementById("mensaje").textContent = "Haz tu primer movimiento";
  jugador = 1;
  njugadores = 0;
  eleccion = 0;
  mapa = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  dibujar();
  document.getElementById("tablero").setAttribute("hidden", "hidden");
}
function jugadores(num) {
  njugadores = num;
  if (num == 1) {
    document.getElementById("opcion2").removeAttribute("hidden", "hidden");
  } else jugando(1);
  document.getElementById("opcion1").setAttribute("hidden", "hidden");
}
function jugando(turno) {
  eleccion = turno;
  document.getElementById("tablero").removeAttribute("hidden", "hidden");
  document.getElementById("opcion2").setAttribute("hidden", "hidden");
  document.getElementById("mensaje").removeAttribute("hidden", "hidden");
  jugar();
}
function final() {
  var espacios = 0;
  for (var i = 0; i < mapa.length; i++) {
    if (mapa[i] == 0) espacios++;
  }
  for (var a = 0; a < 8; a += 3) {
    if (mapa[a] == mapa[a + 1] && mapa[a + 1] == mapa[a + 2] && mapa[a] > 0)
      return mapa[a];
  }
  for (var b = 0; b < 3; b++) {
    if (mapa[b] == mapa[b + 3] && mapa[b + 3] == mapa[b + 6] && mapa[b] > 0)
      return mapa[b];
  }
  if (mapa[0] == mapa[4] && mapa[4] == mapa[8] && mapa[0] > 0) return mapa[0];
  if (mapa[2] == mapa[4] && mapa[4] == mapa[6] && mapa[2] > 0) return mapa[2];
  if (espacios == 9) return 9;
  if (espacios == 0) return 0;
}

function dibujar() {
  for (var i = 0; i < 9; i++) {
    if (mapa[i] == 0) {
      document.getElementById("celda" + i).textContent = "";
    } else if (mapa[i] == 1) {
      document.getElementById("celda" + i).textContent = "X";
      document.getElementById("celda" + i).style.color = "yellow";
    } else {
      document.getElementById("celda" + i).textContent = "O";
      document.getElementById("celda" + i).style.color = "red";
    }
  }
}
function fcelda(celda) {
  if (njugadores == 1) {
    if (eleccion == jugador)
      document.getElementById("mensaje").textContent = "Juego yo";
    else document.getElementById("mensaje").textContent = "Juegas tú";
  } else {
    if (jugador == 1)
      document.getElementById("mensaje").textContent = "Turno del jugador 2";
    else document.getElementById("mensaje").textContent = "Turno del jugador 1";
  }

  if (mapa[celda] != 0) {
    document.getElementById("mensaje").textContent =
      "Esa celda ya está ocupada";
  } else if (jugador == 1) {
    mapa[celda] = 1;
    jugador = 2;
  } else {
    mapa[celda] = 2;
    jugador = 1;
  }
  //console.log (mapa);
  dibujar();
  switch (final()) {
    case 0:
      document.getElementById("mensaje").textContent =
        "Empate, no hay movimientos";
      pregunta();
      break;
    case 1:
      console.log(njugadores, eleccion);
      if (njugadores == 1) {
        if (eleccion == 1)
          document.getElementById("mensaje").textContent = "Has ganado!!!";
        else document.getElementById("mensaje").textContent = "Ordenador gana";
      } else document.getElementById("mensaje").textContent = "Gana Jugador 1";
      pregunta();
      break;
    case 2:
      //console.log(njugadores, eleccion);
      if (njugadores == 1) {
        if (eleccion == 2)
          document.getElementById("mensaje").textContent = "Has ganado!!!";
        else document.getElementById("mensaje").textContent = "Ordenador gana";
      } else document.getElementById("mensaje").textContent = "Gana Jugador 2";
      pregunta();
      break;
    default:
      if (njugadores == 1 && jugador != eleccion) {
        jugar();
      }
  }
}
function jugar() {
  if (eleccion == 2) {
    // casos en los que empieza el ordenador
    if (jugador != eleccion) {
      if (final() == 9) {
        fcelda(8);
      } else {
        if (!jugadaganadora(1)) {
          if (!jugadaganadora(2)) {
            if (
              esigual(mapa, [0, 2, 0, 0, 0, 0, 0, 0, 1]) ||
              esigual(mapa, [0, 0, 0, 2, 0, 0, 0, 0, 1]) ||
              esigual(mapa, [0, 0, 0, 0, 0, 2, 0, 0, 1])
            )
              fcelda(6);
            else if (esigual(mapa, [0, 0, 0, 0, 0, 0, 0, 2, 1])) fcelda(2);
            else if (
              esigual(mapa, [2, 0, 0, 0, 0, 0, 0, 0, 1]) ||
              esigual(mapa, [0, 0, 2, 0, 0, 0, 0, 0, 1])
            )
              fcelda(6);
            else if (esigual(mapa, [0, 0, 0, 0, 0, 0, 2, 0, 1])) fcelda(2);
            else if (mapa[4] == 0) {
              if (mapa[8] == 1 && (mapa[6] == 1 || mapa[2] == 1)) fcelda(4);
            } else if (esigual(mapa, [0, 0, 0, 0, 2, 0, 0, 0, 1])) fcelda(0);
            else if (esigual(mapa, [1, 0, 2, 0, 2, 0, 0, 0, 1])) fcelda(6);
            else if (esigual(mapa, [1, 0, 0, 0, 2, 0, 2, 0, 1])) fcelda(2);
            else {
              fcelda(mapa.indexOf(0));
            }
          }
        }
      }
    }
  } else if (jugador == 2) {
    if (!jugadaganadora(2)) {
      if (!jugadaganadora(1)) {
        if (mapa[4] == 0) fcelda(4);
        else if (esigual(mapa, [0, 0, 0, 0, 1, 0, 0, 0, 0])) fcelda(8);
        else if (
          (mapa[0] == 1 || mapa[2] == 1 || mapa[6] == 1 || mapa[8] == 1) &&
          mapa[1] == 0
        )
          fcelda(1);
        else if (
          (mapa[0] == 1 || mapa[2] == 1 || mapa[6] == 1 || mapa[8] == 1) &&
          mapa[3] == 0
        )
          fcelda(3);
        else if (
          esigual(mapa, [0, 1, 0, 0, 2, 0, 0, 1, 0]) ||
          esigual(mapa, [0, 0, 0, 1, 2, 1, 0, 0, 0])
        )
          fcelda(2);
        else {
          fcelda(mapa.indexOf(0));
        }
      }
    }
  }
}
function jugadaganadora(num) {
  var finalizado = false;
  var trio = [0, 0, 0];

  for (var a = 0; a < 8; a += 3) {
    trio[0] = mapa[a];
    trio[1] = mapa[a + 1];
    trio[2] = mapa[a + 2];
    var primera = trio.indexOf(num);
    var ultima = trio.lastIndexOf(num);
    var cero = trio.indexOf(0);
    if (primera != ultima && cero != -1) {
      fcelda(a + cero);
      return true;
    }
  }
  for (var b = 0; b < 3; b++) {
    trio[0] = mapa[b];
    trio[1] = mapa[b + 3];
    trio[2] = mapa[b + 6];
    var primeraa = trio.indexOf(num);
    var ultimaa = trio.lastIndexOf(num);
    var ceroa = trio.indexOf(0);
    if (primeraa != ultimaa && ceroa != -1) {
      fcelda(b + ceroa * 3);
      return true;
    }
  }
  trio[0] = mapa[0];
  trio[1] = mapa[4];
  trio[2] = mapa[8];
  var cerof = trio.indexOf(0);
  if (trio.indexOf(num) != trio.lastIndexOf(num) && cerof != -1) {
    fcelda(cerof * 4);
    return true;
  }
  trio[0] = mapa[2];
  trio[1] = mapa[4];
  trio[2] = mapa[6];
  cerof = trio.indexOf(0);
  if (trio.indexOf(num) != trio.lastIndexOf(num) && cerof != -1) {
    fcelda(2 * cerof + 2);
    return true;
  }
}

function esigual(a1, a2) {
  igual = true;
  for (var i = 0; i < a1.length; i++) {
    if (a1[i] != a2[i]) igual = false;
  }
  return igual;
}
function pregunta() {
  document.getElementById("final").innerHTML =
    '<button id="pregunta" type="button" onclick="resetear()" class="btn btn-warning">Volver a jugar</button>';
}
