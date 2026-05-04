// Función de comprobación booleana

// Paso 1: Declaramos una función flecha llamada booWho que toma un argumento 'arg'
const booWho = (arg) => {
  // Paso 2: Dentro de la función, usamos el operador typeof para verificar si el tipo de 'arg' es "boolean"
  // Paso 3: Retornamos true si es booleano, false si no lo es
  return typeof arg === "boolean";
}

// Paso 4: Probamos la función con diferentes valores para ver cómo funciona
// Paso 5: Llamamos a booWho con true, que es un booleano, debería retornar true
console.log(booWho(true));     // true
// Paso 6: Llamamos a booWho con false, que es un booleano, debería retornar true
console.log(booWho(false));    // true
// Paso 7: Llamamos a booWho con un array [1, 2, 3], que no es booleano, debería retornar false
console.log(booWho([1, 2, 3])); // false
// Paso 8: Llamamos a booWho con [].slice, que es una función, no booleano, debería retornar false
console.log(booWho([].slice));        // false
// Paso 9: Llamamos a booWho con un objeto { "a": 1 }, no booleano, debería retornar false
console.log(booWho({ "a": 1 }));   // false
// Paso 10: Llamamos a booWho con la cadena "true", no booleano, debería retornar false
console.log(booWho("true"));       // false
// Paso 11: Llamamos a booWho con la cadena "false", no booleano, debería retornar false
console.log(booWho("false"));       // false