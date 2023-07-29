export const template = () => ` <div class="container">
  <div id="izquierda" style="box-sizing: border-box; width: 25% !important;">
    <img
      class="ahorcadoimage"
      id="imageahorcado" 
    />
    <span id="intentos"></span>
  </div>
  <div id="derecha" >
    <span class="ahorcadoMensajes" id="mensajes"></span>
    <span class="ahorcadoPalabra" id="palabra"></span>
    <input class="entradaLetra" id="entradaLetra" type="text" maxlength="1" minlength="1" name="p0"/>
    <button id="enviarLetra">Enviar letra o validar palabra</button>
  </div>
</div>`;
