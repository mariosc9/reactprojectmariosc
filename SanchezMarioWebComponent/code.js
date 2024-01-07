import { Persona, Competidor, Administrador } from "./classes.js";

window.onload = function(){  
// Crear 3 personas
const persona1 = new Persona('11111111A', 'Juan', 'Gómez', 175, 70);
const persona2 = new Persona('22222222B', 'María', 'López', 160, 55);
const persona3 = new Persona('33333333C', 'Carlos', 'Martínez', 180, 80);

// Crear 3 competidores
const competidor1 = new Competidor('44444444D', 'Laura', 'Fernández', 165, 60, 'EquipoA', 3);
const competidor2 = new Competidor('55555555E', 'Pedro', 'Sánchez', 170, 75, 'EquipoB', 5);
const competidor3 = new Competidor('66666666F', 'Ana', 'García', 175, 68, 'EquipoC', 2);

// Crear 3 administradores
const administrador1 = new Administrador('77777777G', 'David', 'Pérez', 160, 65, 101, 'Despacho1');
const administrador2 = new Administrador('88888888H', 'Isabel', 'Ruíz', 165, 70, 102, 'Despacho2');
const administrador3 = new Administrador('99999999I', 'Miguel', 'López', 180, 85, 103, 'Despacho3');


let persones = [persona1, persona2, persona3];
let competidors = [competidor1, competidor2, competidor3];
let administradors = [administrador1, administrador2, administrador3];

}