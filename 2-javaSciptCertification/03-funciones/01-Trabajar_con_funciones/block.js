// const str = "I am learning JavaScript.";
// str.indexOf("Javascript");

// console.log(str);

// <=====  =====>

// let sentence = "JavaScript is awesome!";
// let position = sentence.indexOf("awesome!");
// console.log(position); // 14

// let sentence = "JavaScript is awesome!";
// let position = sentence.indexOf("fantastic");
// console.log(position); // -1

// let sentence = "JavaScript is awesome, and JavaScript is powerful!";
// let position = sentence.indexOf("JavaScript", 10);
// console.log(position); // 27

// console.log("freeCodeCamp".indexOf("F")); // -1

// <=====  =====>

// let text = "JavaScript is awesome!";
// let result = text.slice(0, 9);

// console.log(result);

// let sentence = "Learning JavaScript is fun!";
// let extracted = sentence.slice(9, -5);

// console.log(extracted);

// <=====  =====>

// let phrase = "JavaScript is Fun!";
// console.log(phrase.toLowerCase());


// <=====  =====>

// let phrase = "freeCodeCamp is awesome!";
// let updatedPhrase = phrase.replace("freecodecamp", "fCC");

// console.log(updatedPhrase);

// let phrase = "Good morning, morning people!";
// let updatedPhrase = phrase.replace("morning", "evening");

// console.log(updatedPhrase);


// <=====  =====>

// let points = 5; points *= 3;

// console.log(points);

// <=====  =====>

// let a = 5;  // Binary: 101
// let b = 3;  // Binary: 011
// console.log(a & b);

// let x = 8;  // Binary: 1000
// console.log(x << 2);


// <=====  =====>

// console.log(isNaN("123"));

// <=====  =====>

// let num = 5.678;
// console.log(num.toFixed(1));

// let num1 = 12.345;
// let num2 = 67.891;

// console.log((num1 + num2).toFixed(2));

// console.log(0 / 0);
// console.log(isNaN());
// console.log(isNaN("Matt"));
// console.log(isNaN(7));
// console.log(NaN(undefined));

// let num = 5;
// console.log(++num);

// console.log(5 == '5');

// console.log(undefined > 0);
// console.log(5 === 2 + 3 || 4 == 2);

// if (1) {
//   console.log("True!");
// }


// const a = 2;
// if (1 == "1") {
//   let b = 3;
//   console.log(a + b);
// }
// console.log(b);

// let vehicle = "car";

// switch (vehicle) {
//   case "bike":
//     console.log("Bikes are two-wheelers.");
//     break;
//   case "car":
//     console.log("Some cars are 4x4.");
//   case "truck":
//     console.log("Trucks can carry heavy loads.");
//     break;
//   default:
//     console.log("Unknown vehicle.");
// }


// let x = 5;
// if (x > 1 && x < 10) {
//   console.log("x is between 1 and 10");
// } else {
//   console.log("x is not between 1 and 10");
// }


// function mystery(a, b = 3) {
//   return a * b;
// }
// console.log(mystery(4));


// function sum(num1, num2) {
//   return num1 + num2
// }


/*
<===== funciones flecha  =====>
*/

// sintaxis habitual de las funciones
// function greetings(name) {
//   console.log("Hello, " + name + "!");
// }


// refactorizar el ejemplo anterior para utilizar la sintaxis de las funciones flecha
// const greetings = (name) => {
//   console.log("Hello, " + name + "!");
// };


// Si tu lista de parámetros solo contiene un parámetro, puedes eliminar los paréntesis de la siguiente manera:
// const greetings = name => {
//   console.log("Hello, " + name + "!");
// };


// Si tu función flecha no tiene parámetros, debes usar los paréntesis de esta manera:
// const greetings = () => {
//   console.log("Hello");
// };


// Pero si el cuerpo de tu función solo contiene una línea de código, puedes eliminar las llaves de esta manera:
// const greetings = name => console.log("Hello, " + name + "!");


// Es importante señalar que eliminar los paréntesis y las llaves en la sintaxis de las funciones normales no funcionará. Si intentas hacer algo como esto, obtendrás errores:
// This will produce syntax errors 
// function greetings name console.log("Hello, " + name + "!");


// Otro concepto clave es la instrucción return. A continuación se muestra un ejemplo del uso de la sintaxis de funciones flecha para calcular el área:
// const calculateArea = (width, height) => {
//   const area = width * height;
//   return area;
// };

// console.log(calculateArea(5, 3)); // 15


// Pero podríamos simplificar un poco nuestro código y devolver el resultado del cálculo directamente:
// const calculateArea = (width, height) => {
//   return width * height;
// }; 

// console.log(calculateArea(5, 3)); // 15


// Si intentaras eliminar las llaves y colocar el cálculo en la misma línea, aparecería el siguiente mensaje de error: Uncaught SyntaxError: Unexpected token 'return':
// const calculateArea = (width, height) => return width * height;


// Cuando elimines esa instrucción return, el error desaparecerá y la función seguirá devolviendo el resultado del cálculo de forma implícita.
// const calculateArea = (width, height) => width * height;

// console.log(calculateArea(5, 3)); // 15

// let multiply = (a, b = 1) => a * b;

// console.log(multiply(5));
// console.log(multiply(5, 2));

// <==================>


/*
<===== ámbitos global, local y de bloque =====>
*/

// A continuación, se muestra un ejemplo de una variable global:
// let globalVar = "I'm a global variable";

// function printGlobalVar() {
//     console.log(globalVar);
// }

// printGlobalVar(); // "I'm a global variable"


// let x = 10;

// function printX() {
//     let x = 20;
//     console.log(x);
// }

// printX();
// console.log(x);


// if (true) {
//     let blockVar = "Hello";
// }
// console.log(blockVar);


// <====================>