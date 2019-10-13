// EJERCICIO 1

// /* 

// Crear un programa que compruebe si un número es múltiplo de 2 o de 7.
// En caso de que esto sea cierto, devuelve un mensaje por consola que diga:
// "El número es múltiplo de 2" o "El número es multiplo de 7".
// En caso contrario devuelve un mensaje que diga:
// "El número no es múltiplo ni de 2 ni de 7"

// */

const num2 = 42

if (num2 % 2 === 0 && num2 % 7 === 0) {
  console.log(`El ${num2} es multiplo de 2 y de 7`)
}

else if (num2 % 7 === 0) {
  console.log(`El ${num2} es multiplo de 7`)
}

else if (num2 % 2 === 0) {
  let randomNumber = Math.floor(Math.random() * 6)
  console.log(`El ${num2} es multiplo de 2`)
}

else {
  console.log(`El ${num2} no es multiplo de 2 ni de 7`)
}

//======================================================

// EJERCICIO 2

// Imprimir por pantalla

/*

*
* *
* * *
* * * *

*/

function crearPiramide(filas) {
  for (let i = 0; i < filas; i++) {     // Recorro las filas
    let piso = ''                       // Por cada fila (piso) creo un string vacío.
    for (let j = 0; j < i + 1; j++) {   // Imprimo número de asteriscos por fila en cada repetición
      piso += ' * '                     // Añade a piso un "*" en la variable "piso".
    }
    console.log(piso)                   // Imprime el contenido de la variable piso en cada repetición,
  }
}

crearPiramide(4);

//======================================================

// EJERCICIO 3

/*
- Se generará un número aleatorio que almacenaremos en una varialble. Este será el código de desactivación de la bomba.
- Se dará al usuario 5 intentos para encontrar el código de desactivación.
- Para ello crearemos una varialbe a la que se le asignará el valor que el usuario introduzca en el prompt (devuelve un string).
- Compararemos si ese valor y el código de desactivación coinciden.
- Si coinciden saldrá un mensaje "La bomba ha sido desactivada"
- Si no coinciden, se le dará otra oportunida al usuario.
- Al cabo de cinco intentos fallidos, saldrá el mensaje "La bomba ha estallado"
*/

/* 
Math.floor(Math.random ())
Math.round ()
Math.floor ()
Math.ceil ()
*/

let randomNumber = Math.floor(Math.random() * 6)

function deactivateBomb(password) {
  for (let i = 0; i < 5; i++) {
    let userNumber = +prompt('Tienes cinco intentos para desactivas la bomba. Introduce una contraseña numérica de un dígito: ')
    if (userNumber === password) {
      return true
    }
  }
  return false
}

if (deactivateBomb(randomNumber) === true) {    // El "true" no es necesario ponerlo, porque ya está implícito en la función.
  console.log('La bomba ha sido desactivada')
}

else {
  console.log('¡BOOOOM!')
}

// Otra manera más sencilla

let secretNumber = Math.floor(Math.random() * 5)

function deactivateBomb(password) {
  for (let i = 0; i < 5; i++) {
    let number = +prompt('introduce un número del 1 al 5')
    if (number === password) {
      return 'La bomba ha sido desactivada'
    }
  }
  return '¡¡¡BOOOM!!!'
}
console.log(deactivateBomb(secretNumber))

//======================================================

// EJERCICIO 4

/*
Dado el siguiente array:
const patientZero = [true, false, false, false, true, false, false, false, true]

Los 'true' son gente con virus, y los 'false', gente sana.
Hay que conseguir un nuevo array en el que los true contagien a los false de al lado.
*/


const patientZero = [true, false, false, false, true, false, false, false, true]
const infectedPeople = [...patientZero]

function contagiar(patientsArray) {
  const infectedPeople = [...patientsArray]
  for (let i = 0; i < patientsArray.length; i++) {
    if (patientsArray[i]) {
      if (i < patientsArray.length - 1) {
        infectedPeople[i + 1] = true
      }
      if (i > 0) {
        infectedPeople[i - 1] = true
      }
    }
  }
  return infectedPeople
}

console.log(patientZero)
console.log(contagiar(patientZero))

//======================================================

// EJERCICIO 5

// Hacer una calculadora:

/*
Pasar dos numeros.
num1
num2

option ----> tipo de operación:
    0 - suma
    1 - resta
    2 - multiplica
    3 - divide
    4 - potencia

Si no se introduce ninguno de estos número que salga un mensaje que lo indique.

*/

//  1º calculadora con el método "SWITCH"

let num1 = 5
let num2 = 3
let opcion = 6
let result = 0

switch (opcion) {
  case 0:
    result = num1 + num2
    break
  case 1:
    result = num1 - num2
    break
  case 2:
    result = num1 * num2
    break
  case 3:
    result = num1 / num2
    break
  case 4:
    result = num1 ** num2
    break
  default:
    result = 'No has introducido un numero del 0 al 4'
}

console.log(result)

//  2º calculadora con el método "IF"

let num1 = 5
let num2 = 3
let opcion = 2
let result = 0

if (opcion === 0) {
  result = num1 + num2
} else if (opcion === 1) {
  result = num1 - num2
} else if (opcion === 2) {
  result = num1 * num2
} else if (opcion === 3) {
  result = num1 / num2
} else if (opcion === 4) {
  result = num1 ** num2
} else {
  result = 'No has introducido un numero del 0 al 4'
}

console.log(result)

//  3º calculadora con una FUNCION (1er caso = 1 parámetro)

let num1 = 5
let num2 = 3
let opcion = 6

function calculate(x) {
  if (x === 0) {
    return num1 + num2
  } else if (x === 1) {
    return num1 - num2
  } else if (x === 2) {
    return num1 * num2
  } else if (x === 3) {
    return num1 / num2
  } else if (x === 4) {
    return num1 ** num2
  } else {
    return 'No has introducido un numero del 0 al 4'
  }
}

console.log(calculate(opcion))

//  3º calculadora con una FUNCION (2º caso = tres parámetros)

let num1 = 5
let num2 = 3
let opcion = 1

function calculate(election, a, b) {
  if (election === 0) {
    return a + b
  } else if (election === 1) {
    return a - b
  } else if (election === 2) {
    return a * b
  } else if (election === 3) {
    return a / b
  } else if (election === 4) {
    return a ** b
  } else {
    return 'No has introducido un numero del 0 al 4'
  }
}

console.log(calculate(opcion, num1, num2))

//======================================================

// EJERCICIO 6

// Imprimir por pantalla

/*
            *
          * * *
        * * * * *
      * * * * * * *
    * * * * * * * * *
*/

// function crearPiramide ()
/* primer for imprime los espacios
el segundo imprime los asteriscos*/

/*
Para 5 filas:

1ª fila: 4 espacios, 1 *
2ª fila: 3 espacios, 3 *
3ª fila: 2 espacios, 5 *
4ª fila: 1 espacios, 7 *
5ª fila: 0 espacios, 9 *

espacios   = nº de fila - 1
asteriscos = nº de asteriscos + 2
*/

let filas = 5

// Modo explicado:

for (let numFilas = 0; numFilas < filas; numFilas++) {
  let linea = ""
  for (let espacios = 0; espacios < filas - numFilas - 1; espacios++) {
    linea = linea + " "
  }
  for (let asterisco = 0; asterisco < (numFilas * 2) + 1; asterisco++) {
    linea = linea + "*"
  }
  console.log(linea)
}

// Modo normal

for (let i = 0; i < filas; i++) {
  let linea = ""
  for (let j = 0; j < filas - i - 1; j++) {
    linea = linea + " "
  }
  for (let k = 0; k < (i * 2) + 1; k++) {
    linea = linea + "*"
  }
  console.log(linea)
}

//======================================================

// EJERCICIO 7

// Ordenar el array numDesordenado

const numDesordenado = [5, 3, 2, 6, 8, 1]

for (let i = 0; i < numDesordenado.length; i++) {

  for (let j = 0; j < numDesordenado.length; j++) {

    let currentIndexValue = numDesordenado[j] // 5

    if (numDesordenado[j] > numDesordenado[j + 1]) {

      numDesordenado[j] = numDesordenado[j + 1]

      numDesordenado[j + 1] = currentIndexValue
    }
  }
}

console.log(numDesordenado)

//======================================================

// EJERCICIO 8

