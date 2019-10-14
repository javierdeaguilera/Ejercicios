// "use strict";

// EJERCICIOS EXTRA

// Cómo chequear si un resultado es un string, un null o un string vacío.

// let result = prompt("Ejemplo");
// console.log("el resultado es --->", result);
// console.log(typeof result);
// ("");
// isFinite();

// ======================================================================

// How to reverse a string in JavaScript.

// function reverseString(str) {
//   var newString = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }
// reverseString("hello");

// ======================================================================

// let total = 5;
// function calcularValores() {
//   total = total * 2;
// }
// for (let f = 0; f < 10; f++) {
//   calcularValores();
// }
// console.log("El total es: " + total);
// // "El total es: 5120"

// ======================================================================

// let num = 9;
// if (num < 10) {
//   console.log("El número es menor que 10");
// }

// ======================================================================

// let miVariable = 21;
// if (miVariable < 10) {
//   console.log("El número es menor que 10");
// } else {
//   console.log("El numero es igual o mayor que 10");
// }

// ======================================================================

// let mivariable = 15;
// switch (mivariable) {
//   case 5:
//     console.log("El número es cinco");
//     break;
//   case 8:
//     console.log("El número es ocho");
//     break;
//   case 10:
//     console.log("El número es diez");
//     break;
//   default:
//     console.log("El número es " + mivariable);
// }

// ======================================================================

// let total = 0;
// for (let f = 0; f < 5; f++) {
//   total += 10;
// }
// console.log("El total es: " + total); // "El total es: 50"

// ======================================================================

// class Perro {
//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     console.log(this.name);
//   }

//   bark() {
//     console.log("Guau guau!");
//   }
// }

// let perro1 = new Perro("Zeus");
// perro1.getName();
// perro1.bark();

// ======================================================================

// Pide la edad y si es mayor de 18 años indica que ya puede conducir.

// let edad = prompt("Introduce tu edad");

// if (Number(edad) == edad) {
//   if (edad > 18) {
//     console.log("Puedes conducir");
//   }
// } else {
//   console.log("Introduce un número válido");
// }

// Otra manera de hacerlo:

// let edad = prompt("Introduce tu edad");

// if (edad >= 18) {
//   console.log("Puedes conducir");
// } else {
//   console.log("No puedes conducir");
// }

// ======================================================================

// Pide una nota (número). Muestra la calificación según la nota:

// 0-3: Muy deficiente
// 3-5: Insuficiente
// 5-6: Suficiente
// 6-7: Bien
// 7-9: Notable
// 9-10: Sobresaliente

// let nota = prompt("¿Qué nota has sacado?");

// let nota = prompt("¿Cuál ha sido tu nota?");

// if (Number(nota) == nota) {
//   if (nota > 0 && nota <= 10) {
//     if (nota < 3) {
//       alert("Muy deficiente");
//     } else if (nota < 5) {
//       alert("Insuficiente");
//     } else if (nota < 6) {
//       alert("Suficiente");
//     } else if (nota < 7) {
//       alert("Bien");
//     } else if (nota < 9) {
//       alert("Notable");
//     } else if (nota <= 10) {
//       alert("Sobresaliente");
//     } else if (nota > 10) {
//       alert("Nota erronea");
//     }
//   } else {
//     if (nota != undefined) {
//       alert("Introduce un número válido");
//     }
//   }
// }

// ======================================================================

// var contador = 0;
// while (contador < 100) {
//   contador++;
// }
// console.log("El valor es: " + contador);

// ======================================================================

// Tres maneras distintas de representar una función:

// 1ª

// function suma(num1, num2) {
//   let suma = num1 + num2;
//   return suma;
// }

// 2ª

// const suma = function(num1, num2) {
//   return num1 + num2;
// };

// 3 ª

// const suma = (num1, num2) => num1 + num2;

// console.log(suma(9, 8)); // Resultado = 17

// ======================================================================

// Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

//  //DECLARAMOS UNA VARIABLE DONDE VAMOS A CONCATENAR LAS CADENAS
//  let resultado = "";
//  //BUCLE DO WHILE PARA INTRODUCIR VARIAS CADENAS
//  do {
//     //PEDIMOS LA CADENA POR TECLADO
//     let cadena = prompt("Introduce una cadena");
//     //SI LA VARIABLE RESULTADO ESTÁ VACÍA
//     if (resultado == "") {
//         //CONCATENAMOS SIN UTILIZAR GUIÓN
//         resultado = resultado + cadena;
//     }
//     //SINÓ
//     else {
//         //CONCATENAMOS CON GUIÓN
//         resultado = resultado + "-" + cadena;
//     }
//     //MIENTRAS SE PULSE ACEPTAR EN EL MENSAJE EMERGENTE CONFIRM
// } while (confirm("Desea seguir?"));
//  //SI SE PULSÓ CANCELAR IMPRIMIMOS EL RESULTADO
//  document.write(resultado);

// ======================================================================

// ¿Cuál es el resultado de este código?

// let sum = 0;
// for (i = 4; i < 8; i++) {
//   if (i == 6) {
//     continue;
//   }
//   sum += i;
// }
// console.log(sum);

// si usamos "continue" el resultado es: 16

// valor de i = 4; verdadero, entonces sum = 0 + 4 = 4;
// valor de i = 5; verdadero, entonces sum = 0 + 5 = 5;
// valor de i = 6; verdadero, pero se ignora y continuamos.
// valor de i = 7; verdadero, entonces sum = 0 + 7 = 7;
// valor de i = 8; falso, se interrumpel el bucle.
// el valor total de sum es 4 + 5 + 7 = 16;

// si usamos "break" el resultado es 9;

// valor de i = 4; verdadero, entonces sum = 0 + 4 = 4;
// valor de i = 5; verdadero, entonces sum = 0 + 5 = 5;
// valor de i = 6 el bucle se interrumple.
// el valor total de sum es 4 + 5 = 9;

// ======================================================================

// let total = 0;
// for (f = 0; f < 5; f++) {
//   total += 10;
// }
// console.log("El total es: " + total);

// "El total es: 50"

// valor de f = 0; verdadero, entonces total es 0 + 10 = 10;
// valor de f = 1; verdadero, entonces total es 0 + 10 = 10;
// valor de f = 2; verdadero, entonces total es 0 + 10 = 10;
// valor de f = 3; verdadero, entonces total es 0 + 10 = 10;
// valor de f = 4; verdadero, entonces total es 0 + 10 = 10;
// valor de f = 5; falso, se interrumpe el bucle.
// El valor total de la función es 10 + 10 + 10 + 10 + 10 = 50;

// ======================================================================

// let contador = 90;
// while (contador < 100) {
//   contador++;
// }
// console.log("El valor es: " + contador);

// "El valor es: 100"

// La instrucción entre llaves se ejecuta mientras el valor de la variable contador sea menor que 100. Esto significa que el bucle se ejecutará 100 veces (cuando el valor de contador es 99, la instrucción se ejecuta una vez más y, por lo tanto, el valor final de la variable es 100).

// let contador1 = 150;
// do {
//   contador1++;
// } while (contador1 < 100);
// console.log("El valor es: " + contador1);

// "El valor es: 151"

// el valor inicial de la variable contador es mayor de 99, pero debido a que usamos el bucle do while, la instrucción entre llaves se ejecuta una vez y, por lo tanto, el valor final de contador es 151 (150 + 1 = 151).

// ======================================================================

// let counter = 10;
// setInterval(function() {
//   console.log(counter);
//   counter--;
//   if (counter === 0) {
//     console.log("HAPPY NEW YEAR!!");
//   }
// }, 1000);

// let counter = 10;
// let newYearCountdown = setInterval(function(){
//   console.log(counter);
//   counter--
//   if (counter === 0) {
//     console.log("HAPPY NEW YEAR!!");
//     clearInterval(newYearCountdown);
//   }
// }, 1000);

// ======================================================================
