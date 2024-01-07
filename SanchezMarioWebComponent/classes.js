export class Persona {
  constructor(idni, inom, icognoms, ialçada, ipes) {
    this.dni = idni;
    this.nom = inom;
    this.cognoms = icognoms;
    this.alçada = ialçada;
    this.pes = ipes;
  }
}

Persona.prototype.renderRow = function (camps) {
  return camps.map((camp) => (this[camp]) ? `<td>${this[camp]}</td>` : "<td></td>").join(" ");
};

export class Competidor extends Persona {
  constructor(idni, inom, icognoms, ialçada, ipes, iequip, iranking) {
    super(idni, inom, icognoms, ialçada, ipes);
    this.equip = iequip;
    this.ranking = iranking;
  }
}

export class Administrador extends Persona {
  constructor(idni, inom, icognoms, ialçada, ipes, inum, illoc) {
    super(idni, inom, icognoms, ialçada, ipes);
    this.num = inum;
    this.lloc = illoc;
  }
}
