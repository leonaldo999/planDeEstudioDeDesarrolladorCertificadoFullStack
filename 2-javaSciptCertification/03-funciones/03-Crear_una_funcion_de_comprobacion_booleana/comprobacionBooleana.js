const booWho = (arg) => {
  return typeof arg === "boolean";
}

console.log(booWho(true));     // true
console.log(booWho(false));    // true
console.log(booWho([1, 2, 3])); // false
console.log(booWho([].slice));        // false
console.log(booWho({ "a": 1 }));   // false
console.log(booWho("true"));       // false
console.log(booWho("false"));       // false

/* 
Explicación:

- typeof (arg === 'boolean') verifica si el tipo del argumento es exactamente un booleano primitivo (true o false).
*/