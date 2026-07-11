# Construye un generador de pirámides

En esta sección, crearás una función que genere una pirámide de caracteres en forma de cadena. La pirámide puede tener su vértice apuntando hacia arriba o hacia abajo, dependiendo de un argumento booleano.

## Historias de usuario

1. Debes tener una función con un nombre `pyramid` que tome tres argumentos.

2. El primer argumento debe ser una cadena que represente el carácter del patrón que se repetirá en su pirámide.

3. El segundo argumento debe ser un número entero que represente la cantidad de filas en la pirámide.

4. El tercer argumento debe ser un valor booleano.

5. La función `pyramid` debe devolver una cadena en la que el carácter del patrón se repita y se disponga para formar una pirámide con el vértice apuntando hacia arriba cuando el tercer argumento sea `false`.

6. Cuando el tercer argumento es que `true` la pirámide debe tener el vértice apuntando hacia abajo.

7. La fila del vértice debe tener un solo carácter de patrón, y cada una de las demás filas debe tener dos caracteres de patrón más que la anterior.

8. Cada fila debe comenzar con un número de espacios suficiente para colocar el carácter central de cada fila en la misma columna, y no debe haber espacios al final de cada fila.

9. La pirámide debe comenzar y terminar con un salto de línea.

**Por ejemplo, al llamar `pyramid("o", 4, false)` debería obtener esta salida:**

```js
   o
  ooo
 ooooo
ooooooo
```

---

## Solicion

```js
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
    /*
    Caso normal
    i
    0
    1
    2
    3
    4
    5
    Entonces
    level
    0
    1
    2
    3
    4
    5
    */
    if (inverted) {
      level = rows - i - 1;
    } else {
      level = i;
    }

    // Espacios
    /*
    Por ejemplo:
    rows = 6
    Si
    level = 0
    obtienes
    5 espacios
    Si
    level = 5
    obtienes
    0 espacios
    */
    let spaces = " ".repeat(rows - level - 1);
    // Bloques
    /*
    Por ejemplo:
    level
    0 -> 1
    1 -> 3
    2 -> 5
    3 -> 7
    4 -> 9
    */
    let blocks = pattern.repeat(2 * level + 1);
    // Construir la línea
    /*
    Por ejemplo
    "   " + "LLL"
    produce
    "   LLL"
    */
    let line = spaces + blocks;

    // Agregarla al resultado
    result += line + "\n";
  }

  return result;
}

console.log(pyramid("L", 6, false));
console.log("\n");
console.log(pyramid("x", 9, true));

```
