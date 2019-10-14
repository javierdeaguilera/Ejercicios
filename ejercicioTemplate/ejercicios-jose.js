"use strict";

// *2. Hacer una función que reciba un array de números, y nos diga cuántos números hay de cada, ejemplo:*
// ```// Input [2, 3, 2, 5, 10, 22, 10]
// // Output:
// {
//   count2: 2,
//   count3: 1,
//   count5: 1,
//   count10: 2,
//   count22: 1
// }```

// const numeros = [2, 3, 2, 5, 10, 22, 10];

// const contarNumeros = numeros.reduce(function(contadorNumeros, numero) {
//   if (numero in contadorNumeros) {
//     contadorNumeros[numero]++;
//   } else {
//     contadorNumeros[numero] = 1;
//   }
//   return contadorNumeros;
// }, {});

// console.log(contarNumeros);

//------------------------------------------------------

// const cantidadNumeros = numeros.reduce((contadorNumero, numero) => {
//   contadorNumero[numero] = (contadorNumero[numero] || 0) + 1;
// }, {});

// console.log(cantidadNumeros);

// ======================================================================

// *3. Haz una función que reciba un array de números y devuelva la suma de los números divisibles por 3 y por 5*

// ======================================================================

// *4. Haz una función que reciba una frase y devuelva cuántas vocales tiene*

// ======================================================================

// *5. Haz una función que reciba un array de números y que devuelva el mayor. No utilizar Math.max.*

// ======================================================================

// *6. Escribe una función que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)*

// ======================================================================

// *7. Haz una función que reciba un número y devuelva un string indicando si es par o impar*

// ======================================================================

// *8. Haz una función que reciba los 8 dígitos del DNI y calcule su letra. La fórmula es:*
// 1. Sumar todos los dígitos del DNI
// 2. Obtener el resto de la división entre el número del DNI y el número 23,
// 3. Mirar la letra correspondiente usando el siguiente array. La letra estará en la posición calculada en el paso 2.
// ```const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];```

// ======================================================================

// =====================================================================

// =====================================================================

// (Array<string>.reduce(callbackfn: (anteriorValue: string, currentValue: string, currentIndex: number, array: string[]) => string, initialValue: string): string (+2 sobrecargas);

// arr.reduce(callback[, initialValue]);

// =====================================================================

// =====================================================================

