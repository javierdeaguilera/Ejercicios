"use strict";

//EJERCICIOS

// let grados1 = 23;
// let grados2 = 30;
// let incremento = grados2 - grados1;
// alert("La temperatura subió: " + incremento + " oC");

//======================================================================

// un programa que te pida tu nombre por prompt y una alerta si el nombre
// es "Admin"   -->   "Hello master"
// es "User"    -->   "Hello User"
// es otra cosa -->   "I don't know you"

// if - else
// ternaria

//======================================================================

// let user = "";
// user = prompt("Introduce tu nombre:")
//   .trim()              // quita los espacios que se hayan introducido
//   .toLowerCase();      // convierte las mayúsculas en minúsculas
// usando la condición if - else

// if (user == "admin") {
//   alert("Hello Master");
// } else if (user == "user") {
//   alert("Hello User");
// } else {
//   alert("I don't know you");
// }

// usando la condición ternaria

// user === "Admin"
//   ? alert("Hello master")
//   : user === "User"
//   ? alert("Hello User")
//   : alert("I don't know you");

// usando ("o" = ||) la condición ternaria

// let user2 = "";
// user2 = prompt("Introduce tu nombre:")
//   .trim()                 // quita los espacios que se hayan introducido
//   .toLowerCase();         // convierte las mayúsculas en minúsculas

// if (user2 === "admin" || user2 === "user") {
//   alert(`hello ${user2}`);
// } else {
//   alert("I don't know you");
// }

//======================================================================

// Si un número está entre 18 y 28, incluidos, participantType = "Junior"
// Si es mayor   --->   participantType ="Senior"
// Si no         --->   participantType ="Null"
// Si es Junior o Senior, preguntar cuántos años lleva programando y mostrarlo: "Soy un Junio/Senior y llevo X años programando"

// let num = +prompt("¿Cual es tu edad?", 0);
// let participantType = "";
// let yearsPrograming = 0;

// let isNumber = isFinite(num);
// // if (!"isNumber) return "Error";

// if (isNumber) {
//   if (num >= 18 && num <= 28) {
//     participantType = "Junior";
//     yearsPrograming = +prompt("¿Cuántos años llevas programando?");
//   } else if (num > 28) {
//     participantType = "Senior";
//     yearsPrograming = +prompt("¿Cuántos años llevas programando?");
//   } else {
//     participantType = null;
//   }
//   if (participantType) {
//     alert(
//       `Eres un ${participantType} y llevas ${yearsPrograming} años programando`
//     );
//   } else {
//     console.log("ERROR EL TYPE ES NULO");
//   }
// }

//======================================================================

// Hacer un programa que te pida un número y luego otro número.
// Luego que te pida la operación que quieres hacer (suma, resta, multiplicación o división)
// En base a lo que seleccione hacer la operación.

// let num1 = +prompt("Escribe un número", 0);
// let num2 = +prompt("Escribe otro número", 0);
// let operacion = prompt(
//   "¿Qué operación quieres hacer: suma, resta, multiplicación o división?"
// );
// let resultado = 0;

// if (isFinite(num1) && isFinite(num2)) {
//   if (operacion == "suma") {
//     resultado = num1 + num2;
//   } else if (operacion == "resta") {
//     resultado = num1 - num2;
//   } else if (operacion == "multiplicación") {
//     resultado = num1 * num2;
//   } else if (operacion == "división") {
//     resultado = num1 / num2;
//   } else {
//     resultado = "operacion invalida";
//   }
// } else resultado = "Dame números";

// alert(resultado);

//======================================================================

// Cambiar el nombre a los users que nos sean admins a "default" y saltarse a las admins usando "continue"

// let user = [
//   { name: "Pepe", isAdmin: true },
//   { name: "Julia", isAdmin: false },
//   { name: "Sancho", isAdmin: true },
//   { name: "Paco", isAdmin: false },
//   { name: "Abel", isAdmin: true }
// ];

// for (let i = 0; i < user.length; i++) {
//   const element = user[i];
//   if (user[i].isAdmin) continue;
//   user[i].name = "default";
// }
// console.log(user);

//======================================================================

// Vamos a recorrer un tablero (array) de hundir la flota de un 3 x 3.
// En cada casilla pedimos un valor (prompt): 1= ponemos un barco; 0 = no metemos nada (agua); si no ponemos nada en la casilla, las iteraciones se paran.

// Pista

// for (let index = 0; index < array.length; index++) {
//   for (let index = 0; index < array.length; index++) {

//       if (condition) {

//       }
//   }
// }

// Tablero: for (let index = 0; index < index < 3; index++) {
//   for (let index2 = 0; index2 < 3; index2++) {
//     if ((index = 1)) continue;
//     index2 = 0;
//     break Name;
//   }
// }

//========================================================================

// Cuál es el último valor que alerta este bloque.

// let i = 4;
//  while(i) {
//    alert(i--)
//  }

// El resultado es 1, porque el 0 es "false", por lo que el último número sería el 1.

//=========================================================================

// let i = 0
// while (++i < 3) alert (i)

// El resultado es 1 y 2. Ya que ++i toma el valor nuevo, o sea el ya sumado, esto es, el primero será 1.

//=========================================================================

// let x = 0
// while (x++ < 3) alert (x)

// // El resultado es 1, 2 y 3. Ya que x++ toma como primer valor el antiguo ("0"), pero muestra la suma, o sea que el primero será el 1.

//=========================================================================

// Teniendo x = cualquier número positivo, hacer un código que muestre los número primos de x.

// 1º: validar todo y hacer prompt (opcional)
// 2º Recorre x (i)
// 3º Comprobar si i si es divisible entre si mismo y 1
// 4º Si 3ª se cumnple, mostrar
// 5º Si no se cumple,

// let num = +prompt("Introducer un número");

// numPrimo: for (let i = 2; i <= num; i++) {
//   // 2,3,4,5,6,7,8,9,10
//   for (let j = 2; j < i; j++) {
//     // si i = 5; j valdría 2,3,4
//     if (i % j == 0) continue numPrimo;
//   }
//   console.log(i);
// }

//=========================================================================

// Un prompt que te pregunte la edad:
// Si tienes < 18 años, console.log ("Eres un niño").
// Si tienes > 18 años, console.log ("Puedes votar").

// let age = prompt("¿Cuántos años tienes?");

// let key = age;

// switch (age) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   ...
//     console.log("Eres un niño");
//     break;
//   default:
//     console.log("Puedes votar");
//     break;
// }

//==========================================================================

// //Paser el siguiente código a switch:

// let browser = prompt("Dime un browser");

// // if (browser == "Vivaldi") {
// //   console.log("El mejor browser del mundo");
// // }
// // if (browser == "IE") {
// //   console.log(eeeeeeeewwwwwwww);
// // }
// // if (browser == "Chrome" || browser == "Mozilla") {
// //   console.log("Están bien");
// // }

// switch (browser) {
//   case "Vivaldi":
//     alert("El mejor del mundo");
//     break;
//   case "IE":
//     alert("eeeeeeeewwwwwwww");
//     break;
//   case "Chrome":
//   case "Mozilla":
//     alert("Están bien");
// }

//==========================================================================

// Una función que retorne true si soy mayor de edad o una alerta de confirmación de si mis padres me dieron permiso.

// Opción A

// function checkAge() {
//   if (age >= 18) return true;
//   return confirm("¿Te han dado permiso tus padres?");
// }

// Opción B

// function checkAge() {
//   if (age >= 18) {
//     return true;
//   } else {
//     confirm("¿Te han dado permiso tus padres?");
//   }
// }

// Opción C

// function checkAge() {
// return age >= 18 ? true : confirm("¿Te han dado permiso tus padres?");
// }

// Opción D

// function checkAge() {
// return age >= 18 || confirm("¿Te han dado permiso tus padres?");
// }

//==========================================================================

// Crear una función que acepte dos parametros X y N y devuelva el resultad de X levado a N.
// (elevar (2,3))  8 ---> 2 * 2 * 2

// function elevate(x, n) {
//   let result = x;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

// let opera = elevate(5, 2);
// console.log(opera);

//==========================================================================

// Una función que calcule el cambio de moneda de euro a dolar
// Recibe euro, devuelve dolares.

// let num = +prompt("¿Cuánto quieres cambiar?", 0);

// function change(eur) {
//   return eur * 1.25; // 1.25 es el valor de un euro en dolares.
// }
// let result = change(num); // num es el número de euros que queremos cambiar
// console.log(result);

//==========================================================================

// Una función que reciba un nombre de cualquier forma tipo ---> "  rUbEn  "
// y te lo devuelva con buen formato ---> "Rubén"

// let name = "  rUbEn  ";

// function correctFormat(name) {
//   name = name.trim().toLowerCase();
//   return name.charAt(0).toUpperCase() + name.slice(1);
// }

// console.log(correctFormat(name));

//==========================================================================

// Una función que recibe un string cualquiera y te dice si es palíndromo o no.

// function esPalindromo(name) {}

//==========================================================================

// Copiar del gitlab de Rubén.

// function isEven(num){
//   let resultado =
//   if (num % 2 = 0){
//     reture true
//   }
//   return false
// }

// function test(num){
//   return isEven(num)
// }

// test (3)

//==========================================================================

// Poner en una sola línea una function que nos de un número elevado al cubo.

// const cubo = num => num ** 3;

//==========================================================================

// Crear un objeto con varias propiedadades.

// let car = {
//   ruedas: 4,
//   volante: 1,
//   color: "rojo",
//   anda: true,
//   test: "loquesea"
// };

// // console.log(Object.keys(car));

// // Crear una función que se le pasa al objeto creado y busca la propiedad y la elimina.

// function borrarTest(obj, propiedadABorrar) {
//   console.log(obj);
//   for (const key in obj) {
//     if (key === propiedadABorrar) delete obj[key];
//   }
// };
// let propiedadABorrar = "loquesea";
// borrarTest(car);

//==========================================================================

// let apples = {
//   red: 10,
//   green: 23,
//   golden: 72,
//   yellow: 2
// };

// // Escribir una función que me de el total de manzanas.

// function getTotalApples(params) {
//   let total = 0;
//   for (let key in params) {
//     total += params[key];
//   }
//   return total;
// }
// let res = getTotalApples(apples);
// console.log(res);

//==========================================================================

// Crear una función que multiplique por 3 todas las propiedades numéricas del objeto.

// let person = {
//   kg: 80,
//   size: 180,
//   name: "Juan"
// };

// function multiplicarx3(objeto) {
//   for (const key in objeto) {
//     if (typeof objeto[key] === "number") {
//       objeto[key] *= 3;
//     }
//   }
// }
// multiplicarx3(person);
// console.log(person);

//==========================================================================

// Crear un objeto personaje que tenga un contador de vida y que tenga dos métodos  --> increaseLife que incrementa la vida en 50 puntos y decreaseLife que la baja en 50.
// Tiene que tener otra función que muestre la vida total.

// let personaje = {
//   vida: 0,
//   increaseLife: function() {
//     this.vida += 50;
//     return this;
//   },
//   decreaseLife: function() {
//     this.vida -= 50;
//     return this;
//   },
//   showLife: function() {
//     console.log(this.vida);
//     return this;
//   }
// };

// personaje
//   .increaseLife()
//   .increaseLife()
//   .increaseLife()
//   .decreaseLife()
//   .showLife();

// console.log(personaje.vida);

//==========================================================================

// Crear una función constructora que:
// cree un objeto acumulador usando la función constructora Acumulador con un valor inicial.
// Ese objeto debe tener un método "introduce" que te salta un prompt y te lo suma en el acumulador.

// function Acumulador(valorInicial) {
//   this.valorInicial = valorInicial,
//   this.introduce = function() {
//     let res = +prompt("introduce un número");
//     this.valorInicial += res;
//     return this;
//     };
// }

// let acumulador = new Acumulador(33);
// acumulador.introduce();
// console.log(acumulador.valorInicial);

//==========================================================================

// Crear una clase Delfín. El delfín que tenga un nombre, un peso, longitud, color y los métodos "saltar" que imprima por consola saltando...
// y un método general de reproducción que al pasarle dos delfines con el mimso color nos da un true (mini dolphin).

// class Delfin {
//   constructor(nombre, peso, longitud, color) {
//     this.nombre = nombre;
//     this.peso = peso;
//     this.longitud = longitud;
//     this.color = color;
//   }
//   saltar() {
//     console.log("Saltando");
//   }
//   static reproduccion(d1, d2) {
//     return d1.color === d2.color ? "Mini Dolphin" : false;
//   }
// }

// let d1 = new Delfin("Flipper", 120, 2, "gris");
// let d2 = new Delfin("Nina", 100, 1, "rosa");
// let d3 = new Delfin("Rubén", 110, 2, "azul");

// d1.saltar();
// Delfin.reproduccion(d1, d2);

//==========================================================================

// Hacer una clase coche que extienda de vehículo.
// Hacer una clase furgoneta que extienda de vehículo.
// Hacer una clase FOrd que extienda de coche.

// Vehículo tiene unas propiedades por defecto: puertas 5, peso 3.000 kg.
// Furgoneta sustituye el peso a 5.000 kg.
// Coche sustituye el peso a 3500 kg. y añade un campo "radio" (true/false).
// Furgoneta además añade extra un "color" y un tipo que puede ser "especial" o no (true / false).
// Ford modifica las puertas a 3 y añade un tipo que es Ford Fiesta.

// class Vehículo {
//   constructor(puertas = 5, peso = 3000) {
//     this.puertas = puertas;
//     this.peso = peso;
//   }
// }

// class Furgoneta extends Vehículo {
//   constructor(color, especial, peso = 5000) {
//     super();
//     this.color = color;
//     this.especial = especial;
//     this.peso = peso;
//   }
// }

// class Coche extends Vehículo {
//   constructor(radio = true, peso = 3500) {
//     super();
//     this.radio = radio;
//     this.peso = peso;
//   }
// }

// class Ford extends Coche {
//   constructor(puertas, tipo = "Ford") {
//     super();
//     this.tipo = tipo;
//     this.puertas = puertas;
//   }
// }

// const ford1 = new Ford(3, "Ford Fiesta");
// const coche1 = new Coche(true);
// const furgoneta1 = new Furgoneta("red", false);

// console.log(furgoneta1);
// console.log(coche1);
// console.log(ford1);

//==========================================================================

//ASINCRONIA

// Con esta función sales el "Hola" a los 3 segundos

// setTimeout(function() {
//   // código
//   console.log("Hola");
// }, 2000); // timeout --> ms

//==========================================================================

// Con esta función sale el "Adios" a los 5 segundos y no para nunca.

// setInterval(() => {
//   console.log("Adios");
// }, 5000);

//==========================================================================

// Con esta función sales el "Hola" después de 3 segundos y le suma el nombre "name".

// let obj = {
//   name: "Javier",
//   hola: function() {
//     setTimeout(() => {
//       console.log("Hola" + " " + this.name);
//     }, 3000);
//   }
// };

// obj.hola();

//==========================================================================

// Cortar el número de decimales a la posición 4.

// let num = 3.141592;
// num = num.toFixed(4);
// console.log(num);

//==========================================================================

// Separar cada letra de un string.

// Primer método

// let cadena = "Volando voy, volando vengo";

// for (let i = 0; i < cadena.length; i++) {
//   console.log(cadena[i]);
// }

// // Segudo método

// for (let letra of cadena) {
//   console.log(letra);
// }

//==========================================================================

// Ejemplos de ARRAYS

// let names = ["Pepe", "Rafa", "Tito", "María"];

// names[1];

// names.length;

// names.push("Jacobo"); // Añade "Jacobo" en el array

// let nuevoNames = names.pop("María"); // Quita María.

// names.unshift("Bernando", "Constantino"); // Añade los nuevos nombre al principio.

// console.log(names);

// for (let name of names) {
//   console.log(name);
// }

//==========================================================================

// Una función que en un array "names" borre sólo los pares.

// let names = ["Pepe", "Rafa", "Tito", "María", "Javier", "Rubén", "Carolina"];

// function borraPares(names) {
//   for (let i = 1; i < names.length; i++) {
//     names.splice(i, 1);
//   }
// }

// borraPares(names);
// console.log(names);

//==========================================================================

// Quiero poner un 2 al final de todos los strings.

// let names1 = ["Pepe", "Rafa", "Tito", "María", "Javier", "Rubén", "Carolina"];

// let names2 = names1.map(name => {
//   return name + "2";
// });

// console.log(names2);

//==========================================================================

// Una función que al passarle una array de users los haga de type --> admin.

// let people = [
//   { name: "Pepe", location: "La Coruña", type: "user" },
//   { name: "Andrea", location: "Madrid", type: "user" },
//   { name: "María", location: "Málaga", type: "user" },
//   { name: "Alex", location: "Barcelona", type: "user" }
// ];

// function makeAdmin(users) {
//     let newPeople = people.map(function(person){
//     let newType = {}
//     })
// }

// let res = makeAdmin(people);
// console.log(res);

// Una función que al pasarle un aarray de users nos los filtre por la localización que le pasemos.

// Comprobar en git.lab //

// function filterByLocation(people, location) {
//   return people.filter(user => {
//     if (location == user.location) return true;
//     return false;
//   });
// }

// let res = filterByLocation(people, "Madrid");
// console.log(res);

//==========================================================================

// Para trabajar con ASINCRONIAS podemos utilizar las "promesas":
// "promise" puede ser cualquier nombre.

// let promise = new Promise(function(resolve, reject) {
//   setTimeOut(() => {
//     resolve("Los datos me han llegado correctamente");
//   }, 3000);
// });

// promise.then(resultado => console.log(resultado));

//==========================================================================

// Para trabajar con ASINCRONIAS podemos utilizar las "promesas":
// "promise" puede ser cualquier nombre.

// let promise = new Promise(function(resolve, reject) {
//   let array = ["Javier", "María", "Luisa", "Juan"];
//   if (array.includes("Pepe")) {
//     resolve("Tienes a Pepe");
//   }
//   reject(new Error("No tienes a Pepe"));
// });

// promise
//   .then(resultado => console.log(resultado))
//   .catch(err => console.log(err));

//==========================================================================

// Hacer una función que pase los datos de mi gitHub

// async function githubExample(
//   url = "https://api.github.com/users/javierdeaguilera"
// ) {
//   try {
//     let res = await fetch(url);
//     let user = await res.json();
//     console.log(user);
//   } catch (e) {
//     console.log(e);
//   }
// }

// githubExample();

//==========================================================================

// Una función que tenga un setTimeOut de 2 segundos que devuelva una respuesta al pasarle una url y llamar a un api público (que es una url).

// let data = pedirDatos("https://randomuser.com/api/");

// setTimeout(fetch("https://randomuser.com/api/"){
//     then (res => )
// }, timeout= 2000);

// console.log(data);

//==========================================================================

// Escribir una función testNum que le pasas un parámetro y retorna una Promise que comprueba que el valor sea mauyor que 10, si no, la rechaza.

//==========================================================================

// Escribir dos funciones que usen Promises que puedas encadenar. La primera función

