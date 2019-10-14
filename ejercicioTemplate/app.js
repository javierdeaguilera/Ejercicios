"use strict"

console.log("hola");
alert("Hola, me llamo Javier");

alert("alert2");

// * esto es un comentario
// * Multi
// * li
// * console.log("hola")
// * ne
// * a

// * variables

let valor1 = 1;
let valor2 = 5;

let suma = valor1 + valor2

var name ="pepe";

if (true) {
    const name2 = "María";
    if (true){
        console.log(name);
        valor2 = 10;
    }
}

console.log(name);

//===================================================================================

// HOISTING

let middleName = "Lo que sea";
const lastName = "Rodríguez";

let adressType

const COLOR_WHITE = "#ffffff";
const secondsToLoad = 2;

const name = "holi"
const name = 'holi'
const name = `holi`

console.log("mi nombre es " + name + "\n" + "siguiente línea");

console.log(`mi nombre es ${1 + 2}`);

//===================================================================================

// NUMBERS

let num = 4.5;

let sum = 2 + 3;

const INFINITY = Infinity;

const INFINITY = NaN
let result = 2 / "pepe";

//===================================================================================

//BOOLEANOS

let verdadero = true;       //1, 2, 3 " "
let falso = false;          // 0 "" (string vacío)

let operacion = 2 < 4;
console.log(operacion)

if (operacion){
    console.log("Message");
}

//===================================================================================

//NULL

let name = null;            // No tiene valor, pero existe.

//===================================================================================

//UNDEFINED

let lastName = undefined;   // No tiene valor y no existe

//===================================================================================

//ARRAY

let dogList = [];

let persons = [{name : "Pepe"}, {name : "Pepe"},{name : "Pepe"}]

let id = Symbol ("loquesea") //los id son únicos

//===================================================================================

//TYPES CONVERTIONS
//toString

let valorBoolean = false;
let newValor = String(valorBoolean);
typeof newValor;

//===================================================================================

//NUMBER

console.log("2" * "2");

let num = "12";

let newNum = Number(num); // 12

//===================================================================================

//falsy

undefined
null
""
0

Number(undefined)   // NaN
Number(null)        // 0
Number(false)       // 0
Number(true)        // 1
Number("")          // 0
Number("a")         // NaN
Number("  1  ")     // 1

Boolean(1)          // true
Boolean(0)          // false
Boolean("hola")     // true
Boolean("")         // false
Boolean("0")        // true
Boolean(" ")        // true
Boolean(NaN)        // false

//===================================================================================

//OPERATORS

let num = 2
num = -num
+true = 1
+"" = 0
let skates = "2"
let longBoards = "4"

let sum = skates + longBoards = 24
let sum = +skates + +longBoards = 6

let ab, cd, ff

ab = cd = ff = 2 + 3;    // se asigna el valor de 2 + 3 a las tres variables.

let num1 = 2;
let num2 = 2;

let num3 = 2 - (num1 = num2 + 1); // 1º la operación del paréntesis y dentro del () primero la suma.

** // exponente

2 ** 2 // 2 elevado a 2

4 ** (1 / 2) // raiz cuadradad
Math.sqrt(4) // lo mismo

let contador = 1            //

contador++                  // recoge el valor antiguo
++contador                  // recoge el valor actualizado

let newContador = contador++    // 1
let newContador = ++contador    // 2

contador += 1               //
contador = contador + 1     //

contador--                  //

contador -= 1               //

--contador                  //

let res = 2;
res *= 2 + 1;

console.log(res);   // = 6

let loqs = (1 + 1, 2 + 2)   // = 4  --->   Cuando algo está entre comas, se asignará sólo el último valor, desechando el primero.

//===================================================================================

//COMPARACIONES

=       // asignación
==      // compara si los valores son iguales.
===     // compara si los valores y los tipos son iguales
<=
>=

if (2 === 2){
}    //

console.log("2" > 1);              // true
console.log("01" == 1);            // true
console.log("01" === 1);           // false
console.log(null == undefined);    // true
console.log(null === undefined);   // false
console.log(null > 0);             // false
console.log(null < 0);             // false
console.log(null == 0);            // false
console.log(null >= 0);            // true

console.log(undefined > 0);        // false
console.log(undefined < 0);        // false
console.log(undefined = 0);        // false

// prompt, console.log, alert, confirm,

let isAdmin = confirm("¿Eres admin?");

let age = +prompt("¿Cuántos años tienes?");
if (isFinite (age) && age){}        // booleano: nos dice si es verdadero o falso que age es un número

alert("Esto es una alerta");

//===================================================================================

// CONDICIONES

if (2 == 2){

} else if (3 == 3){

} else{

}

if (2 == 2){
}

// condicion ternaria

true ? alert("esto es un true") : alert("esto es false");

let user = {
    role : "Admin"
};
let isAdmin = user.role === "Admin" ? "Admin" : "User";

let age = 42
let isAdult = (age < 18) ? "Demasiado joven" : "Adulto";

//===================================================================================

// OPERADORES LÓGICOS

// OR " || "  ------> Basta que haya un true, el resultado es true

alert(true || true)         // true
alert(true || false)        // true
alert(false || true)        // true
alert(false || false)       // false

// AND " && "  ------> Basta que haya un false, el resultado es false

alert(true &&  true)        // true
alert(true && false)        // false
alert(false && true)        // false
alert(false && false)       // false

// La precedencia del && prevalece sobre la del ||

// NOT " ! "  ---->  Indica el valor contrario de la misma variable.

let isTall = true;
isTall = !isTall

let isRed = 0;
isRed = !isRed

alert(!"Hola")          //  false
alert(!!"Hola")         //  true
alert(boolean ("Hola")) //  true

//===================================================================================

// BUCLES

while (true){
    console.log("Hola");
}                           // bucle infinito

let flag = false;
while (true){
    console.log("Hola");
    flag = true;
    if (flag == trtue){
        break;
    }
}

let cont = 0;
while (cont <= 3){
    console.log(cont);
    cont++;
}

let cont2 = 1;
while(cont2){
    console.log(cont2);
    cont2++;
    if (cont2==3){
        break;
    }
}

let cont3 = 5
while (cont3)̣{
    console.log (cont3);
    cont3--;
}

do {
    console.log("Hola");
}while (false)

let array = [
    1,2,3,4,5
];

for (let index = 0; index < array.length; index++) {
    element = array[index];
}

for( ; ; ){       // bucle infinito
}

let array = [
    {name: "Pepe", isAdmin: true},
    {name: "Julia", isAdmin: false},
    {name: "Sancho", isAdmin: true},
    {name: "Paco", isAdmin: false},
    {name: "Abel", isAdmin: true},
];

// Cambiar el nombre a los users que nos sean admins a "default" y saltarse a las admins usando "continue"

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (array[i].isAdmin) continue;
    array[i].name = "default";
}
console.log(array)

// Vamos a recorrer un tablero (array) de hundir la flota de un 3 x 3.
// En cada casilla pedimos un valor (prompt): 1= ponemos un barco, 0 = no metemos nada (agua).
// Si no ponemos nada en la casilla, las iteraciones se paran.

// Pista

for (let index = 0; index < array.length; index++) {
    for (let index = 0; index < array.length; index++) {
        if (condition) {
        }
    }
}

// Cómo chequear si un resultado es un string, un null o un string vacío.

let result = prompt ("Ejemplo");
console.log ("el resultado es --->",result);
console.log(typeof result);
""
isFinite()

//===================================================================================

// SWITCH

// Sustituye a muchos else if


let groceryItem = "papaya";

switch (groceryItem) {
  case "tomato":
    console.log("Tomatoes are $0.49");
    break;
  case "lime":
    console.log("Limes are $1.49");
    break;
  case "papaya":
    console.log("Papayas are $1.29");
    break;
  default:
    console.log("Invalid item");
    break;
}

// Prints 'Papayas are $1.29'

//===================================================================================

//FUNCIONES DRY

function getPepe(){
    console.log("Soy Pepe");
}

getPepe()

function sum(num1,num2){
    suma = num1 + num2;
    return suma;
}
// Si en una función no hay un "return", se retorna un "undifined"

let num = 10
sum(6, 30)
sum(num, 4)

//==================================================================================

// FUNCIONES DECLARATIVAS

name("Loquesea") // se puede poner antes de la función o al final.

function name (object){
    console.log(object);
}

//==================================================================================

// FUNCIONES EXPRESIVAS

// Las funciones se guardan en una variable (no hace hoisting). Son anónimas.

const name2 = function(object){
console.log(object);
}

name2("Loquesea") // sólo se puede poner después de la función, o sea cuando el código llega a la variable.

//==================================================================================

// CALLBACKS

// Los Callbacks en JavaScript son como su propio nombre, en inglés, indica, llamadas de vuelta, quiere decir que cuando invoco una función pasándole como parámetro otra función (el callback) esta función parámetro se ejecuta cuando la función principal ha terminado de ejecutarse.

function checkAge(age, accept, decline){
    if (age <= 18){
        decline();
    } else{
        accept();
    }
}

function accept(){
    console.log("Todo ok");
}

function decline(){
    console.log("No puedes");
}

checkAge(16, accept, decline)

//==================================================================================

// ARROW FUNCTION

const sum = function(num1, num2){
    return num1 + num2;
}

const suma = (num1, num2) => num1 + num2;

// Estas dos expresiones son iguales. La flecha "=>"" hace la función y retorna el resultado.

//==================================================================================

// DEBUGGER

const cube = num => {
  let x = 20;
  let y = 60;
  debugger;
  x = 50;
  let res = x + y;
  console.log("Lo que sea", res);
  return num ** 3;
};

cube(3);

//==================================================================================

//OBJETOS

let obj = {}

let person = {
    name: "Pepe",
    eyeColor: "Brown",
    eyes: true,
    canRun: false,
    age: 23,
    address: {
        street: "calle Nicaragua"
        number: 8,
    }
}

// Las propiedadaes pueden ser string o Symbol (x) (valor único).

let obj = {
    name: "Alex",
    oranges: 23,
    apples: 234
};

let frutas = prompt ("mete apples o oranges"); // asumimos que se meten apples o oranges.
let [frutas] // si se meten apples el resultado será 234, si se meten orenges, el resultado será 23.

// ejemplo

function getUser(){
    let user = getUserFromDB();

    return{
        users:
        obj2:{
            dato1:"loquesea"
        }
    }
}

// otro ejemplo

let casa = {
    puertas: 2,
    ventanas: 20
};
{
if (casa.tejado){
}

//===================================================================================

//FUNCIONES DENTRO DE UN OBJETO

let person3 = {

}

// Como llamar a una función:

function saludar(){
    console.log("Hola");
}

saludar()

// Otra alternativa

(function saludar(){
    console.log("Hola");
})()

// FUNCIONES CONSTRUCTORA

// Para crear un objeto (ej. uan persona con nombre y apellidos):

function Person(name, lastName, country = "Spain") {
  this.name = name;
  this.lastName = lastName;
  this.country = country;
  this.fullName = function() {
    return this.name + " " + this.lastName;
  };
}

let person1 = new Person("Murillo", "Ferreira");
let person2 = new Person("Pepe", "Rodírguez");
let person3 = new Person("Javier", "de Aguilera");

console.log(person3.fullName());

//===================================================================================

// CLASS

// Un template para generar objetos.

function Acumulador(valorInicial) {
    this.valorInicial = valorInicial,
    this.introduce = function() {
      let res = +prompt("introduce un número");
      this.valorInicial += res;
      return this;
      };
  }
  
  let acumulador = new Acumulador(33);
  acumulador.introduce();
  console.log(acumulador.valorInicial);

// La función de arriba se puede expresar de la siguiente manera mediante la variante "class":

class Acumulador2{
    constructor(valorInicial){
        this.valorInicial= valorInicial
    }
    introduce(){
        let res = +prompt("introduce un número");
        this.valorInicial += res;
        return this;
    }
}

// Otro ejemplo
class Coche {
    constructor(modelo, color, potencia = 100) {
      this.modelo = modelo;
      this.color = color;
      this.potencia = potencia;
    }
    setModelo(modelo) {
      this.modelo = modelo;
    }
  
    sameModel(coche2) {
      return this.modelo === coche2.modelo;
    }
  
    static sameColor(coche1, coche2) {
      return coche1.color === coche2.color;
    }
  }
  
  let c1 = new Coche("OPEL", "Blanco", 90);
  let c2 = new Coche("Carro", "Gris", 90);
  let c3 = new Coche("", "Blanco", 90);
  c1.sameModel(c2);
  Coche.sameColor(c1, c2);
  
  c1.setModelo("Ferrari");
  
// Otro ejemplo

class Animal {
    constructor(eyes = 2, mouth) {
      this.eyes = eyes;
      this.mouth = mouth;
    }
  
    jump() {
      console.log("Animal saltando");
    }
  }
  
  class Dolphin extends Animal {
    constructor(name, weight, long, color) {
      super();
      this.name = name;
      this.weight = weight;
      this.long = long;
      this.color = color;
    }
  
    getName() {
      return this._name;
    }
  
    setName() {}
  
    jump() {
      console.log("Dolphin saltando...");
    }
  
    static reproduction(d1, d2) {
      return d1.color === d2.color ? "Mini Dolphin!" : false;
    }
  }
  
  let d1 = new Dolphin("Juanito", 199, 200, "red");
  let d2 = new Dolphin("Juanita", 199, 200, "red");
  
  d1.jump();
  Dolphin.reproduction(d1, d2);
  
//===================================================================================

// ERRORES

try{
    // código que queremos probar
}catch(err){
    // si hay un error va a entrar utomaticamente dentro del catch.
    console.error(ReferenceError);
}

// Ejemplo:

try{
    const ford1 = new Ford(3, "Ford Fiesta");
    const coche1 = new Coche(true);
    const furgoneta1 = new Furgoneta("red", false);
}catch(err){
    
    console.error("app.js y me da un error", err);
}

// Este el mensajes que aperecería: 

error ={
    name: "ReferenceError"
    message: "jasdfasdf is not defined"
    stack:"error at ..."
}

//===================================================================================

//ASINCRONIA

// Con esta función sales el "Hola" a los 3 segundos

setTimeout(function(){
    // código
    console.log("Hola");
}, timeout= 3000); // timeout --> ms

// Con esta función sale el "Adios" a los 5 segundos y no para nunca.

setInterval(() =>{
    console.log("Adios");
}, 5000);

// Con esta función sales el "Hola" después de 3 segundos y le suma el nombre "name".

let obj = {
  name: "Javier",
  hola: function() {
    setTimeout(() => {
      console.log("Hola" + " " + this.name);
    }, 3000);
  }
};

obj.hola();

//===================================================================================

// TIPOS

// NUMEROS

Math.ceil ()    // Te da como resultado el número redondeado para arriba.
Math.floor()    // Te da como resultado el número redondeado para abajo.
Math.round()    // Te da como resultado el número redondeado al entero más cercano.
Math.trunc()    // Te da como resultado el número sin los decimales.

// Corta el número de decimales en la posición que quieras (en este ejemplo en la 2)

let num = 3.141592;
num = num.toFixed(2)
console.log(num);

// Resultado = 3,14

//===================================================================================

// STRINGS

let cadena = "Volando voy, volando vengo";

for (let i=0; i< cadena.length; i++){
    console.log(cadena[i]);
}

//===================================================================================

// ARRAYS PART I

let names = ["Pepe", "Rafa", "María"]

names[1]

names.length

names.push("Jacobo")    // Añade "Jacobo" en el array

let nuevoNames = names.pop("María") // Quita María.

names.unshift("Bernando", "Constantino") // Añade los nuevos nombre al principio.

console.log(names);

for (let name of names){
    console.log(name);
}
names.splice(0,3)   // Borra a partir de la posición 0 y borra los tres siguientes datos.

names.map()         // 
names.filter()      // 
names.reduce()      // 

//===================================================================================

// DESTRUCTURING

// 

let arrayNormal = ["Abel", "Pepe", "María", "Javier"];

let [name1, name2] = arrayNormal;

let name1 = arrayNormal[0];
let name2 = arrayNormal[1];

console.log(name1);

//===================================================================================

// FECHAS

let fecha1 = new Date("parametro");

// parámetro = puede mostrarse en milisegundos con un número. Si queremos mostrar la fecha de hoy se introduce "now".

let ahora = Date.now();


// Librerías de fechas: 
//  // moment js, npm js, 

// ASINCRONIAS

// Para trabajar con ASINCRONIAS podemos utilizar las "promesas":

let promesa = new Promise (function(resolve, reject){
    setTimeout(() =>{
        resolve("Los datos me han llegado correctamente");
    }, 3000);
});

promise.then(resultado => console.log(resultado));

// Método mnoderno:

async function example(){
    return Promise.resolve("Todo ha ido bien");
}
example().then(data => console.log(data));

let data = await example();

//===================================================================================

// JSON

// Cómo pasar un objet a json

let obj = {
    name: "Pepe"
    age:40
};

let json = JSON.stringify(obj);

console.log(typeof json);

// Cómo pasar un json a un objeto

let newObj = JSON.parse(json);

//===================================================================================


