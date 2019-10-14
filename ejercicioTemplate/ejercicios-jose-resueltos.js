"use strict";

// DIA 1

// 1. Cuál es el valor de la variable _z_?

// const a = 4;
// const b = 2;
// const c = 6;
// const d = 2;

// const z = (a * b) / (c + d);

// El valor es 1

// ======================================================================

// 2. Cuál es el valor de las siguientes expresiones?
// * 2 / 4        :    0,5
// * 2 ** 3        :    8
// * 20 % 6        :    2
// * 3 > 2        :    true
// * 8 - 5 < 4    :    true

// ======================================================================

// 3. Cuál es el valor de la variable _z_?
// javascript
// const x = 1;
// const z = x ? 4 : 5;

// z = 4, pero no estoy muy seguro.
// Entiendo que  1 es true, por lo tanto z es 4, si fuera false, sería 5. ¿Es así?

// =======================================================================

// 4. Escriba un programa que dada la altura en metros de una persona y su edad, obtenga su índice de masa corporal (IMC)  recomendado en base a la siguiente fórmula:
// IMC = (Peso en kilogramos / Altura (en metros) al cuadrado)

// const peso = 93;
// const altura = 1.9;
// const imc = peso / altura ** 2;

// console.log(imc);

// =======================================================================

// 5. Escriba un programa que calcule el área de un rectángulo y su perímetro a partir de la base y la altura (edited)

// const base = 2;
// const altura = 3;
// const area = base * altura;
// const perimetro = base * 2 + altura * 2;

// console.log("El área es", area);
// console.log("El perimetro es", perimetro);

// =======================================================================

// DIA 2

// *1. Dado 3 números, indicar cuál es el mayor*

// const n1 = 9;
// const n2 = 51;
// const n3 = 1;

// if (n1 > n2 && n1 > n3) {
//   console.log(n1);
// } else if (n2 > n1 && n2 > n3) {
//   console.log(n2);
// } else {
//   console.log(n3);
// }

// ======================================================================

// *2. Dada una cantidad, de máximo 888.88 Euros, hacer un programa que calcule cuál es el número mínimo de billetes / monedas de curso legal que equivalen a dicha cantidad*

// let importe = 888.88;

// // indicamos todas las monedas posibles

// const monedas = [
//   500,
//   200,
//   100,
//   50,
//   20,
//   10,
//   5,
//   2,
//   1,
//   0.5,
//   0.2,
//   0.1,
//   0.05,
//   0.02,
//   0.01
// ];

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

// ======================================================================

// *3. Dados dos números, hacer un programa que indique si uno de ellos es múltiplo del otro*

// let n1 = 2;
// let n2 = 14;

// if (n1 % n2 === 0) {
//   console.log(n1 + " es múltiplo de " + n2);
// } else if (n2 % n1 === 0) {
//   console.log(n2 + " es múltiplo de " + n1);
// } else {
//   console.log("Estos números no son múltiplos entre sí");
// }

// ======================================================================

// *4. Cuál es el resultado de z?*
// ```const x = 2;
// let z;

// if (5 !== x) {
//   if (3 == x) {
//     z = -1;
//   } else {
//     z = x;
//   }
// } else {
//   z = 0;
// }```

// z es igual a 2

// ======================================================================

/* *5. Una compañía de agua está implantando un nuevo sistema de cobro. Para cada vivienda se tiene en cuenta:*
 * Los primeros 50 litros son gratis
 * Entre 50 y 200 litros se cobra el libro a 0.1 EUR
 * A partir de 200 litros se cobra el litro a 0.3 EUR
 * El cobro mínimo son 10 EUR. Si los litros de agua a facturar son menor a 10 EUR, entonces la factura final será de 10 EUR.
 **Escribe un programa que calcule el gasto de agua en un mes dado la cantidad de litros gastada** */

// SOLUCION 1

// function calcularFactura(litros) {
//   if ((litros - 50) * 0.1 < 10) {
//     console.log("Paga 10 €");
//   } else {
//     if (litros <= 200) {
//       const facturas1 = (litros - 50) * 0.1;
//       console.log("Pagas " + facturas1);
//     } else {
//       const facturas2 = (litros - 200) * 0.3 + 150 * 0.1;
//       console.log("Pagas " + facturas2 + " €");
//     }
//   }
// }

// const litros = 50;
// calcularFactura(litros);

// SOLUCIÓN 2

// function calcularFactura(litros) {
//     let factura = 0;
//     if ((litros - 50) * 0.1 < 10) {
//       factura = 10;
//     } else if (litros > 50 && litros <= 200) {
//       factura = (litros - 50) * 0.1;
//     } else {
//       factura = (litros - 200) * 0.3 + 150 * 0.1;
//     }
//     return factura;
//   }

//   const litros = 300;
//   let result = calcularFactura(litros);
//   console.log("La factura es de", result, "€");

// ======================================================================

// DIA 3

// *1. Escriba una función que acepte como parámetro un número entero N y calcule 1 + 2 + 3 + ... + N*

// let N = 100;
// let total = 0;

// for (let i = 0; i <= N; i++) {
//   total = total + i;
// }

// console.log(total);

// ======================================================================

// *2. Escriba la función*
// ```/**
//  * Indica si un año es bisiesto: Un año es bisiesto en el calendario Gregoriano, si es divisible entre 4 y no divisible entre 100, y también si es divisible entre 400.
//  * @param {Number} anio
//  * @return {Boolean} esBisiesto
// */
// function esBisiesto(anio);```

// let anio = 2020;

// function esBisiesto(anio) {
//   if ((anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0) {
//     console.log(anio + " es bisiesto");
//   } else {
//     console.log(anio + " no es bisiesto");
//   }
// }
// esBisiesto(anio);

// ======================================================================

// *3. Haz una función que reciba dos parámetros, un número de filas y un número de columnas y dibuje:*
// ```* * * * *
// * * * * *
// * * * * *```

// Versión explicada:

// function crearAsteriscos(filas, columnas) {
//   //Recorro las filas
//   for (let fila = 0; fila < filas; fila++) {
//     //Por cada fila, creo una nueva linea
//     let nuevaLinea = fila;
//     //Recorro las columnas
//     for (let columna = 0; columna < columnas; columna++) {
//       //Por cada columna... a la línea le añado un asterisco
//       nuevaLinea += " * ";
//     }
//     // AL ACABAR las columnas...
//     //Imprime la nueva línea, y pasa a la siguiente fila
//     console.log(nuevaLinea);
//   }
// }
// crearAsteriscos(3, 5);

// Versión corta:

// function crearAsteriscos(filas, columnas) {
//   for (let i = 0; i < filas; i++) {
//     let nuevaLinea = i;
//     for (let j = 0; j < columnas; j++) {
//       nuevaLinea += " * ";
//     }
//     console.log(nuevaLinea);
//   }
// }
// crearAsteriscos(5, 5);

// ======================================================================

// *4. Escribe una función que calcule el factorial de un número. El factorial de un número, si el número es N (5 por ejemplo), sería 5 x 4 x 3 x 2 x 1*

// function calcularFactorial(num) {
//   let resultado = 1;
//   for (let i = 1; i <= num; i++) {
//     resultado = resultado * i;
//   }
//   return resultado;
// }

// let result = calcularFactorial(5);
// console.log(result);

// ======================================================================

// *5. Haz una función que reciba 3 números y los devuelva ordenados en un array*

// function ordenarNumeros(a, b, c) {
//   let resultado = [];
//   if (a <= b && b <= c) {
//     resultado.push(a, b, c);
//   } else if (a <= c && c <= b) {
//     resultado = [a, c, b];
//   } else if (b <= a && a <= c) {
//     resultado = [b, a, c];
//   } else if (b <= c && c <= a) {
//     resultado = [b, c, a];
//   } else if (c <= a && a <= b) {
//     resultado = [c, a, b];
//   } else {
//     resultado = [c, b, a];
//   }
//   return resultado;
// }
// let result = ordenarNumeros(5, 9, 4);
// console.log(result);

// ======================================================================

// *1. Escribe una función que reciba un número y devuelva un array con los valores, ejemplo: Para 2342 devolver [2,3,4,2].*

// function invertir(num) {
//   const numInvertidos = [];
//   let num1 = num.toString().split(""); // '2342'
//   for (let i = 0; i < num1.length; i++) {
//     let num2 = Number(num1[i]);
//     numInvertidos.push(num2);
//   }
//   return numInvertidos;
// }
// console.log(invertir(2342));

// ======================================================================

// ======================================================================

