export const template = () => ` <div class="container">
  <section id="p0">
    <h2>1 - el primer juego de arcade salió en 1971. ¿Cómo se llamaba?</h2>
    <label>
      <input class="entrada" type="radio" value="1" name="p0" />Pong</label
    >
    <label>
      <input class="entrada" type="radio" value="2" name="p0" />Computer Space</label
    >
    <label>
      <input class="entrada" type="radio" value="3" name="p0" />Galaxian</label
    >
  </section>
  <section id="p1">
    <h2>2 - ¿Cuál de estos videojuegos está ampliamente considerado como el más vendido de todos los tiempos?</h2>
    <label>
      <input class="entrada" type="radio" value="1" name="p1" />Minecraft</label
    >
    <label>
      <input class="entrada" type="radio" value="2" name="p1" />Super Mario Bros.</label
    >
    <label>
      <input class="entrada" type="radio" value="3" name="p1" />Grand Theft Auto</label
    >
  </section>
  <section id="p2">
    <h2>3 - La consola de videojuegos más vendida de todos los tiempos es PlayStation 2 de Sony. También fue la primera consola de juegos dotada de...</h2>
    <label>
      <input class="entrada" type="radio" value="1" name="p2" />Conexión a internet</label
    >
    <label>
      <input class="entrada" type="radio" value="2" name="p2" />Controles inalámbricos</label
    >
    <label>
      <input class="entrada" type="radio" value="3" name="p2" />Un reproductor de DVD incorporado</label
    >
  </section>
  <section id="p3">
    <h2>4 - Dejando de lado su prohibición en Alemania por su uso de iconografía nazi, Wolfenstein 3D es famoso por fundar, ¿qué género de videojuegos?</h2>
    <label>
      <input
        class="entrada"
        type="radio"
        value="1"
        name="p3"
      />Beat'em up</label
    >
    <label>
      <input class="entrada" type="radio" value="2" name="p3" />Shooter de disparo en primera persona</label
    >
    <label>
      <input class="entrada" type="radio" value="3" name="p3" />Battle royale</label
    >
  </section>
  <section id="p4">
    <h2>5 - A cualquiera que haya jugado Tetris se le habrá quedado grabada en la cabeza la melodía, aunque solo sea una vez. ¿En qué está basado el tema de la canción?</h2>
    <label>
      <input class="entrada" type="radio" value="1" name="p4" />Una canción folclórica rusa</label
    >
    <label>
      <input class="entrada" type="radio" value="2" name="p4" />Una canción de juerga alemana</label
    >
    <label>
      <input class="entrada" type="radio" value="3" name="p4" />Una canción de amor francesa</label
    >
  </section>
  <section id="p5">
  <h2>5 - ¿Los juegos de smartphone cuentan como videojuegos? Por supuesto que sí. ¿Cuál es el juego de celular que más veces se ha descargado de todos los tiempos?</h2>
  <label>
    <input class="entrada" type="radio" value="1" name="p5" />Pokemon Go</label
  >
  <label>
    <input class="entrada" type="radio" value="2" name="p5" />Angry Birds</label
  >
  <label>
    <input class="entrada" type="radio" value="3" name="p5" />Candy Crush</label
  >
</section>
  <button id="bCorregir">CORREGIR</button>
  <h2>Cantidades acertadas: <span id="resultado"></span></h2>
</div>`;
