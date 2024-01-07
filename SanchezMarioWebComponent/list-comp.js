import { Persona, Competidor, Administrador } from "./classes.js";

// Crear 3 personas
const persona1 = new Persona("11111111A", "Juan", "Gómez", 175, 70);
const persona2 = new Persona("22222222B", "María", "López", 160, 55);
const persona3 = new Persona("33333333C", "Carlos", "Martínez", 180, 80);

// Crear 3 competidores
const competidor1 = new Competidor(
  "44444444D",
  "Laura",
  "Fernández",
  165,
  60,
  "EquipoA",
  3
);
const competidor2 = new Competidor(
  "55555555E",
  "Pedro",
  "Sánchez",
  170,
  75,
  "EquipoB",
  5
);
const competidor3 = new Competidor(
  "66666666F",
  "Ana",
  "García",
  175,
  68,
  "EquipoC",
  2
);

// Crear 3 administradores
const administrador1 = new Administrador(
  "77777777G",
  "David",
  "Pérez",
  160,
  65,
  101,
  "Despacho1"
);
const administrador2 = new Administrador(
  "88888888H",
  "Isabel",
  "Ruíz",
  165,
  70,
  102,
  "Despacho2"
);
const administrador3 = new Administrador(
  "99999999I",
  "Miguel",
  "López",
  180,
  85,
  103,
  "Despacho3"
);

let persones = [persona1, persona2, persona3];
let competidors = [competidor1, competidor2, competidor3];
let administradors = [administrador1, administrador2, administrador3];

(function () {
  const tHtml = `
      <style>
          :host {
              display: block;
              font-family: sans-serif;
              text-align: center;
              --orange: orange; /* Define el color naranja */
              --space: 10px; /* Define el espacio */
          }
          .btn-container {
            border: 2px dashed var(--orange);
            padding: var(--space);
            text-align: center;
          }
      </style>
  
      <h1 id="h1">Títol</h1>

      <h1>Llista</h1>
      <div id="provaLlista"></div>
      <table-comp id='tl'></table-comp>
      <br />

      <div class="btn-container">
        <button id="bt1">Títol</button>
        <button id="bt2">Capçalera</button>
        <button id="bt3">Persona</button>
        <button id="bt4">Competidor</button>
        <button id="bt5">Administrador</button>
        <button id="bt6">Ordenar</button>
        <button id="bt7">Filtrar</button>
        <button id="bt8">Totalitzar</button>
      </div>`;

  class ListComp extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      let contadorPersona = 0;
      let contadorCompetidor = 0;
      let contadorAdministrador = 0;
      let contadorFiltrar = 0;
      let contadorOrdenar = 0;
      let contadorTotalitzar = 0;

      this._shadowRoot = this.attachShadow({ mode: "open" });
      this._shadowRoot.innerHTML = tHtml;

      const but1 = this._shadowRoot.getElementById("bt1");
      but1.onclick = () => {
        let elem = prompt("Nova capçalera");
        if (elem) {
          this.titol = elem;
        }
      };

      const but2 = this._shadowRoot.getElementById("bt2");
      but2.onclick = () => {
        let headerConfig = [
          { name: "dni", header: "NOM" },
          { name: "nom", header: "Nombre" },
          { name: "cognoms", header: "Apellidos" },
          { name: "alçada", header: "Altura" },
          { name: "pes", header: "Peso" },
          { name: "equip", header: "Equipo" },
          { name: "ranking", header: "Posición" },
          { name: "num", header: "Número" },
          { name: "lloc", header: "Lugar" },
        ];
        this.addHeaders(headerConfig);
      };

      const but3 = this._shadowRoot.getElementById("bt3");
      but3.onclick = () => {
        if (contadorPersona == 0) {
          contadorPersona = 1;
          this.addElems(persones);
        }
      };

      /*    let obj = "";
        obj += "Persones:<br>";
        persones.forEach((persona) => (obj += JSON.stringify(persona) + "<br>"));
        this.provamostrarLlista = obj;
    */
      const but4 = this._shadowRoot.getElementById("bt4");
      but4.onclick = () => {
        if (contadorCompetidor == 0) {
          contadorCompetidor = 1;
          this.addComps(competidors);
        }
      };

      const but5 = this._shadowRoot.getElementById("bt5");
      but5.onclick = () => {
        if (contadorAdministrador == 0) {
          contadorAdministrador = 1;
          this.addComps(administradors);
        }
      };

      const but6 = this._shadowRoot.getElementById("bt6");
      but6.onclick = () => {
        if (contadorOrdenar == 0) {
          this.ordenar();
          contadorOrdenar++;
        } else if (contadorOrdenar == 1) {
          this.reiniciar();
          contadorOrdenar--;
        }
      };

      const but7 = this._shadowRoot.getElementById("bt7");
      but7.onclick = () => {
        if (contadorFiltrar == 0) {
          this.filtrar('nom');
          contadorFiltrar++;
        } else if (contadorFiltrar == 1) {
          this.reiniciar();
          this.filtrar();
          contadorFiltrar--;
        }
      };

      const but8 = this._shadowRoot.getElementById("bt8");
      but8.onclick = () => {
        this.totalitzar();
      };
    }

    set titol(tx) {
      let t = this._shadowRoot.getElementById("h1");
      t.innerHTML = tx;
    }

    addHeaders(headerConfig) {
      const ml = this._shadowRoot.getElementById("tl");
      ml.addCfg(headerConfig);
    }
    addElems(elems) {
      const ml = this._shadowRoot.getElementById("tl");
      elems.forEach((elem) => ml.addElem(elem));
    }
    addComps(elems) {
      const ml = this._shadowRoot.getElementById("tl");
      elems.forEach((elem) => ml.addComp(elem));
    }
    addAdmins(elems) {
      const ml = this._shadowRoot.getElementById("tl");
      elems.forEach((elem) => ml.addAdmin(elem));
    }
    totalitzar() {
      const ml = this._shadowRoot.getElementById("tl");
      ml.addTotalitzar('alçada');
    }
    filtrar(nom) {
      const ml = this._shadowRoot.getElementById("tl");
      ml.addFiltrar(nom);
    }
    ordenar() {
      const ml = this._shadowRoot.getElementById("tl");
      ml.addOrder(this.ordenarNom);
    }
    ordenarNom(a, b) {
      return a.nom > b.nom;
    }
    reiniciar() {
      const ml = this._shadowRoot.getElementById("tl");
      ml.reiniciarLlista();
    }
  }

  window.customElements.define("list-comp", ListComp);
})();
