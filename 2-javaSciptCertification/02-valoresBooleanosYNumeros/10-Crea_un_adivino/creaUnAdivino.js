// Debes inicializar las cinco variables fortune1, fortune2, fortune3, fortune4 y fortune5 con un valor de string de tu elección.
const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

// Debes seleccionar un número aleatorio entre 1 y 5, ambos inclusive, y asignarlo a la variable randomNumber.
const min = 1;
const max = 5;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

// Debes crear una variable selectedFortune y asignarle la fortuna adecuada según las reglas:
const selectedFortune =
  randomNumber === 1 ? fortune1 :
  randomNumber === 2 ? fortune2 :
  randomNumber === 3 ? fortune3 :
  randomNumber === 4 ? fortune4 :
  fortune5;

// Finalmente, debes imprimir el valor de selectedFortune en la consola.
console.log(selectedFortune);