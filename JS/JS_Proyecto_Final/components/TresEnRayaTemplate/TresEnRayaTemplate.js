export const template =
  () => `<div id="titulo" class="container d-flex align-items-center justify-content-center mt-3 w-100 "><h1 class="display-2">Tres en raya</h1></div>
<div id="cabecera" class="container d-flex align-items-center justify-content-center mt-1">
  
		<div id="opcion1" class="row mt-5">
			<button type="button" onclick="jugadores(1)" class="btn btn-warning m-2">1 jugador</button>
			<button type="button" onclick="jugadores(2)" class="btn btn-warning m-2">2 jugadores</button>
		</div>
		<div id="opcion2" class="row mt-5" hidden="true">
			<button type="button" onclick="jugando(1)"class="btn btn-warning m-2">Quiero X (empiezo yo)</button>
			<button type="button" onclick="jugando(2)"class="btn btn-warning m-2">Quiero O (empieza el ordenador)</button>
		</div>
 </div>
  <div class="container d-flex align-items-center justify-content-center mt-5">

	<div id="tablero" hidden="true">
		<table>
			<tr>
				<td id="celda0" onclick="fcelda(0)"></td>
				<td id="celda1" onclick="fcelda(1)"></td>
				<td id="celda2" onclick="fcelda(2)"></td>
			</tr>
			<tr>
				<td id="celda3" onclick="fcelda(3)"></td>
				<td id="celda4" onclick="fcelda(4)"></td>
				<td id="celda5" onclick="fcelda(5)"></td>
			</tr>
			<tr>
				<td id="celda6" onclick="fcelda(6)"></td>
				<td id="celda7" onclick="fcelda(7)"></td>
				<td id="celda8" onclick="fcelda(8)"></td>
			</tr>
		</table>
	</div>
</div>
<div class="container d-flex flex-column-reverse align-items-center justify-content-center mb-5 mt-2">
	<div id="final"></div>
  <div id="mensaje" hidden="true">Haz tu primer movimiento</div>
</div>
`;
