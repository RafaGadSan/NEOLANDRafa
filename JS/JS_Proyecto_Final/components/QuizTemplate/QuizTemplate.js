export const template = () => ` 
  <div class="container">
    <section id="p0">
      <h2>1 - ¿Cuál es la capital de Italia?</h2>
      <label>
        <input
            class="entrada"
            id="00"
          type="radio"
          value="1"
          name="p0"
          
        />Turín</label
      >
      <label>
        <input
            class="entrada"
            id="01"
          type="radio"
          value="2"
          name="p0"
          
        />Nápoles</label
      >
      <label>
        <input
            class="entrada"
            id="02"
          type="radio"
          value="3"
          name="p0"
          
        />Roma</label
      >
    </section>
    <section id="p1">
      <h2>2 - ¿Cuál es la capital de Noruega?</h2>
      <label>
        <input
            class="entrada"
            id="10"
          type="radio"
          value="1"
          name="p1"
          
        />Oslo</label
      >
      <label>
        <input
            class="entrada"
            id="11"
          type="radio"
          value="2"
          name="p1"
          
        />Bucarest</label
      >
      <label>
        <input
            class="entrada"
            id="12"
          type="radio"
          value="3"
          name="p1"
          
        />Madrid</label
      >
    </section>
    <section id="p2">
      <h2>3 - ¿Cuál es la capital de Perú?</h2>
      <label>
        <input
            class="entrada"
            id="20" type="radio" value="1" name="p2"  />La
        Paz</label
      >
      <label>
        <input
            class="entrada"
            id="21"
          type="radio"
          value="2"
          name="p2"
          
        />Ciudad de Perú</label
      >
      <label>
        <input
            class="entrada"
            id="22"
          type="radio"
          value="3"
          name="p2"
          
        />Lima</label
      >
    </section>
    <section id="p3">
      <h2>4 - ¿Cuál es la capital de Suecia?</h2>
      <label>
        <input
            class="entrada"
            id="30"
          type="radio"
          value="1"
          name="p3"
          
        />Gotemburgo</label
      >
      <label>
        <input
            class="entrada"
            id="31"
          type="radio"
          value="2"
          name="p3"
          
        />Estocolmo</label
      >
      <label>
        <input
            class="entrada"
            id="32"
          type="radio"
          value="3"
          name="p3"
          
        />Lima</label
      >
    </section>
    <section id="p4">
      <h2>5 - ¿Cuál es la capital de Canadá?</h2>
      <label>
        <input
            class="entrada"
            id="40"
          type="radio"
          value="1"
          name="p4"
          
        />Candberra</label
      >
      <label>
        <input
            class="entrada"
            id="41"
          type="radio"
          value="2"
          name="p4"
          
        />Toronto</label
      >
      <label>
        <input
            class="entrada"
            id="42"
          type="radio"
          value="3"
          name="p4"
          
        />Ottawa</label
      >
    </section>
    <section id="p5">
      <h2>6 - ¿Cuál es la capital de Suecia?</h2>
      <label>
        <input
            class="entrada"
            id="50"
          type="radio"
          value="1"
          name="p5"
          
        />Gotemburgo</label
      >
      <label>
        <input
            class="entrada"
            id="51"
          type="radio"
          value="2"
          name="p5"
          
        />Estocolmo</label
      >
      <label>
        <input
            class="entrada"
            id="52"
          type="radio"
          value="3"
          name="p5"
          
        />Lima</label
      >
    </section>
    <button id="bCorregir">CORREGIR</button>
    <h2>Cantidades acertadas: <span id="resultado"></span></h2>
  </div>`;
