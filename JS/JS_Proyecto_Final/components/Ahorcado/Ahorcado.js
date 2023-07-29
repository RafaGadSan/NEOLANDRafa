export const template = () => ` <div class="container">
  <div id="izquierda" class="izquierda"> 
    <img 
      class="ahorcadoimage"
      id="imageahorcado" 
    />
    <span id="intentos"></span>
  </div>
  <div id="derecha" class="derecha" >
    <span class="ahorcadoMensajes" id="mensajes"></span>
    <span class="ahorcadoPalabra" id="palabra"></span>
    <input class="entradaLetra" id="entradaLetra" type="text" maxlength="1" minlength="1" name="p0"/>
    <button id="enviarLetra">Enviar letra</button>
  </div>
</div>`;
