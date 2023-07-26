export const template = () => `<div class="todo">
  <h1>Whac a Mole</h1>
  <h2 id="score">0</h2>
  <!-- 3x3 -->
  <div id="board"></div>
  <button id="reset" onclick="setGame()">RESET</button>
</div>`;
