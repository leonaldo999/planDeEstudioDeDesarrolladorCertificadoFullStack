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
// Cuestionario sobre funciones de JavaScript


// const calculateTotal = (amount, taxRate = 0.05) => {
//   return amount + (amount * taxRate);
// };

// console.log(calculateTotal(100));


// function greet() {
//   const developer = "Jessica";
//   console.log("Hello there!");
// }

// console.log(developer);


// function exampleFunction() {
//   return "Hello";
//   return "World!";
// };

// console.log(exampleFunction());


// const developer = "Jessica";

// function greet() {
//   console.log("Hello, " + developer)
// }

// greet();


// const sum = (num1, num2) => num1 + num2
// console.log(sum(0, 0) + 10);

// const exampleFunction = (param1, param2) => param1 + param2;
// console.log(exampleFunction(3, "Something"));

// const sum = (num1, num2) => num1 + num2
// console.log(sum(0, 0) + num2);

// const divideTwoNumbers = (num1, num2) => num1 / num2;
// console.log(divideTwoNumbers(3, 0));


// <====================>

// ¿Cuáles son las características principales de los Arrays en JavaScript?

// let fruits = ["apple", "banana", "orange"];

// let colors = ["red", "green", "blue"];
// console.log(colors.length);

// let fruits = ["apple", "banana", "orange"];
// console.log(fruits[0]); // "apple"
// console.log(fruits[2]); // "orange"

// let fruits = ["apple", "banana", "orange"];
// console.log(fruits.length); // 3

// const fruits = ["apple", "banana", "cherry"];
// console.log(fruits[1]); // "banana"

// let fruits = ["apple", "banana", "cherry"];
// console.log(fruits[3]); // undefined

// let fruits = ["apple", "banana", "cherry"];
// fruits[1] = "blueberry";
// console.log(fruits); // ["apple", "blueberry", "cherry"]

// let fruits = ["apple", "banana", "cherry"];
// fruits[3] = "date";
// console.log(fruits); // ["apple", "banana", "cherry", "date"]

// const fruits = ["apple", "banana"];
// const newLength = fruits.push("orange");
// console.log(newLength); // 3
// console.log(fruits); // ["apple", "banana", "orange"]

// let numbers = [2, 3];
// let newLength = numbers.unshift(1);
// console.log(numbers);    // [1, 2, 3]
// console.log(newLength); // 3

// let colors = ["red", "green", "blue"];
// let firstColor = colors.shift();
// console.log(colors);     // ["green", "blue"]
// console.log(firstColor); // "red"

// const fruits = ["apple", "banana"];
// const newLength = fruits.push("orange");
// console.log(newLength); // 3
// console.log(fruits); // ["apple", "banana", "orange"]

// const fruits = ["apple", "banana"];
// fruits = ["This", "will", "not", "work"];
// console.log(fruits); // Uncaught TypeError: Assignment to constant variable.

// let fruits = ["apple", "banana", "orange"];

// let lastFruit = fruits.pop();
// console.log(fruits);    // ["apple", "banana"]
// console.log(lastFruit); // "orange"

// let numbers = [2, 3];
// let newLength = numbers.unshift(1);
// console.log(numbers);    // [1, 2, 3]
// console.log(newLength); // 3

/*
Por último, el método shift() elimina el primer elemento de un array y devuelve ese elemento. Es similar a pop(), pero actúa al principio del array en lugar de al final. Así es como funciona:
*/
// Initialize an array with elements "a", "b", "c", "d"
// let arr = ["a", "b", "c", "d"];
// Remove and return the first element ("a"), arr becomes ["b", "c", "d"]
// let first = arr.shift();
// Remove and return the last element ("d"), arr becomes ["b", "c"]
// let last = arr.pop();
// Log the removed first element, last element, and the modified array
// console.log(first, last, arr);


// <====================>

// ¿Cuál es la diferencia entre los arrays unidimensionales y los bidimensionales?

// Un array unidimensional
// let fruits = ["apple", "banana", "cherry", "date"];
// console.log(fruits[2]); // "cherry"

// los arrays bidimensionales
// let chessboard = [
//   ["R", "N", "B", "Q", "K", "B", "N", "R"],
//   ["P", "P", "P", "P", "P", "P", "P", "P"],
//   [" ", " ", " ", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " ", " "],
//   [" ", " ", " ", " ", " ", " ", " ", " "],
//   ["p", "p", "p", "p", "p", "p", "p", "p"],
//   ["r", "n", "b", "q", "k", "b", "n", "r"]
// ];

// console.log(chessboard[0][3]); // "Q"
// console.log(chessboard[1][7]); // "p"

// <====================>
// Desestructuración de arrays y cómo funciona

// let fruits = ["apple", "banana", "orange"];
// let [first, second, third] = fruits;
// console.log(first);  // "apple"
// console.log(second); // "banana"
// console.log(third);  // "orange"


// const fruits = ["apple", "banana", "orange"];
// const first = fruits[0];
// const second = fruits[1];
// const third = fruits[2];
// console.log(first); // "apple"
// console.log(second); // "banana"
// console.log(third); // "orange"


// let colors = ["red", "green", "blue", "yellow"];
// let [firstColor, , thirdColor] = colors;
// console.log(firstColor); // "red"
// console.log(thirdColor); // "blue"


// let numbers = [1, 2];
// let [a, b, c = 3] = numbers;
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3


// let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
// let [first, second, ...rest] = fruits;
// console.log(first);  // "apple"
// console.log(second); // "banana"
// console.log(rest);   // ["orange", "mango", "kiwi"]


// let numbers = [1, 2, 3, 4, 5];
// let [a, , b, ...rest] = numbers;
// console.log(a, b, rest);

// let colors = ["red", "green", "blue"];
// let [primary, secondary, tertiary, quaternary = "yellow"] = colors;
// console.log(quaternary);


// let fruits = ["apple", "banana", "orange", "grape"];
// let [first, ...rest, last] = fruits;
// console.log(first, rest, last);


// <====================>
// Strings y arrays para invertir un string

// let str = "hello";
// let charArray = str.split("");
// console.log(charArray); // ["h", "e", "l", "l", "o"]


// let charArray = ["h", "e", "l", "l", "o"];
// charArray.reverse();
// console.log(charArray); // ["o", "l", "l", "e", "h"]


// let reversedArray = ["o", "l", "l", "e", "h"];
// let reversedString = reversedArray.join("");
// console.log(reversedString); // "olleh"


// let str = "coding";
// let reversed = str.split("").reverse().join("");
// console.log(reversed);


// let word = "hello";
// let chars = word.split("");
// chars.reverse();
// console.log(chars.join("-"));

// <====================>