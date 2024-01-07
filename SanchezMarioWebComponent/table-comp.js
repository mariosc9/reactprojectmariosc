(function () {
  const tHtml = `
  <style>
      :host {
          display: block;
          font-family: sans-serif;
          text-align: center;
      }
      table, th, td {
          border: 1px solid black;
          margin: 0 auto;
      }
  </style>
  <table id="elems"></table>
  <div id="totalitzar">
  </div>
`;

  class TableComp extends HTMLElement {
    constructor() {
      super();
      this._camps = [];
      this._llistaOriginal = [];
      this._llistaOrdenada = [];
      this._llista = [];
      this._competidors = [];
      this._admins = [];
      this._total = null;
    }

    connectedCallback() {
      this._shadowRoot = this.attachShadow({ mode: "open" });
      this._shadowRoot.innerHTML = tHtml;
    }

    _renderList() {
      let ml = this._shadowRoot.getElementById("elems");
      var str = "<tr>";
      this._camps.forEach((elem) => {
        let $item = `<th>${elem.header}</th>`;
        str += $item;
      });
      str += "</tr>";

      let campos = this._camps.map((ele) => ele.name);
      this._llistaOriginal.forEach((elem) => {
        str += `<tr>${elem.renderRow(campos)}</tr>`;
      });

      ml.innerHTML = str;
    }

    addCfg(cfg) {
      this._camps = cfg;
      this._renderList();
    }

    addElem(elem) {
      this._llista.push(elem);
      this._llistaOriginal.push(elem);
      this._renderList();
    }
    addComp(elem) {
      this._llista.push(elem);
      this._llistaOriginal.push(elem);
      this._renderList();
    }
    addAdmin(elem) {
      this._llista.push(elem);
      this._llistaOriginal.push(elem);
      this._renderList();
    }

    addTotalitzar(camp) {
      this._total = camp;

      const totalElement = this._shadowRoot.getElementById("totalitzar");
      let resultat;
      let totalitzarAlçada = this._llistaOriginal.map((ele) => ele[camp]);

      resultat = totalitzarAlçada.reduce((acum, valor) => acum + valor, 0);
      totalElement.innerHTML = `<p>Altura Total: ${resultat}</p>`;
    }

    addFiltrar(nom) {
      if (nom != null) {
        this._llistaOriginal = this._llista.filter((elem) => elem.alçada > 170);
      }
      if (this._total != null) {
        this.addTotalitzar(this._total);
      }
    
      this._renderList();
    }

    addOrder(fparam) {
      this._llistaOrdenada = this._llista.slice().sort(fparam);
      this._llistaOriginal = this._llistaOrdenada;
      this._renderList();
    }
    reiniciarLlista() {

      this._llistaOriginal = this._llista;
      this._renderList();
    }
  }
  window.customElements.define("table-comp", TableComp);
})();
