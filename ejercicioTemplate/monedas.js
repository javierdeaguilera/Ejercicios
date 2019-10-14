"use strict";

// *2. Dada una cantidad, de máximo 888.88 Euros, hacer un programa que calcule cuál es el número mínimo de billetes / monedas de curso legal que equivalen a dicha cantidad*

// O das monedas, pódese facer solo con "if / else if" porque a cantidade que puxen foron 888.88, vamos, que se sumas todos os diferentes billetes + monedas pois da iso

let importe = 888.88;

// indicamos todas las monedas posibles
const monedas = [
  500,
  200,
  100,
  50,
  20,
  10,
  5,
  2,
  1,
  0.5,
  0.2,
  0.1,
  0.05,
  0.02,
  0.01
];

function cambiarMonedas(monedas) {
  let cambio = [];
  if (){

  }
}

// // creamos un array con la misma cantidad de monedas
// // Este array contendra las monedas a devolver
// const cambio = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// // Recorremos todas las monedas
// for (let i = 0; i < monedas.length; i++) {
//   // Si el importe actual, es superior a la moneda
//   if (importe >= monedas[i]) {
//     // obtenemos cantidad de monedas
//     cambio[i] = parseInt(importe / monedas[i]);
//     // actualizamos el valor del importe que nos queda por didivir
//     importe = (importe - cambio[i] * monedas[i]).toFixed(2);
//   }
// }

// // Bucle para mostrar el resultado
// for (let i = 0; i < monedas.length; i++) {
//   if (cambio[i] > 0) {
//     if (monedas[i] >= 5)
//       console.log(
//         "Hay: " + cambio[i] + " billetes de: " + monedas[i] + " euros"
//       );
//     else
//       console.log(
//         "Hay: " + cambio[i] + " monedas de: " + monedas[i] + " euros"
//       );
//   }
// }