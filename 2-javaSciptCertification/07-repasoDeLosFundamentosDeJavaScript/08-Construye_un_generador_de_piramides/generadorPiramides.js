// Construye un generador de pirámides

/*
pattern  -> el carácter que usarás
rows     -> número de filas
inverted -> true o false
*/
function pyramid(pattern, rows, inverted) {
  // Voy a ir construyendo una cadena poco a poco.
  let result = "\n";

  // "Voy a crear una fila por cada iteración."
  for (let i = 0; i < rows; i++) {

    let level;

    // Caso invertido
    if (inverted) {
      level = rows - i - 1;
    } else {
      level = i;
    }

    // Espacios
    let spaces = " ".repeat(rows - level - 1);
    // Bloques
    let blocks = pattern.repeat(2 * level + 1);
    // Construir la línea
    let line = spaces + blocks;

    // Agregarla al resultado
    result += line + "\n";
  }

  return result;
}

console.log(pyramid("L", 6, false));
console.log(pyramid("x", 9, true));
