# Crea una aplicación de verificación lógica

En este taller, aprenderás a trabajar con sentencias condicionales y operadores de comparación.

## Paso 1

>> Empieza declarando una variable llamada `truthyOrFalsy` y asígnale el valor booleano `true`.

- **Code**
  
  ```js
  const truthyOrFalsy = true;
  ```

---

## Paso 2

Como aprendiste en una lección anterior, los booleanos son un tipo de datos que solo admite los valores `true` y `false`.

Un valor `true` es aquel que se evalúa como verdadero en un contexto booleano. Algunos ejemplos de valores "verdaderos" son:

- Strings de caracteres no vacías
- Números distintos de cero
- El valor booleano `true`

Y otros valores que conocerás más adelante.

Puedes usar la función `Boolean()` para verificar si un valor es verdadero. Por ejemplo, `Boolean("Hello World!")` devolverá `true` porque `"Hello World!"` es verdadero.

>> Ahora, llama a `Boolean(truthyOrFalsy)` y registra el resultado en la consola.

- **Code**
  
  ```js
  console.log(Boolean(truthyOrFalsy));
  ```

---

## Paso 3

>> Cambia la asignación de `truthyOrFalsy` estableciendo su valor en `"freeCodeCamp"`. Seguirás viendo que se registra `true` en la consola, ya que un string no vacía es un valor verdadero.

- **Code**
  
  ```js
  // === Code ===
  const truthyOrFalsy = "freeCodeCamp";
  // === Code ===

  console.log(Boolean(truthyOrFalsy));
  ```

---

## Paso 4

Los valores "falsy" son aquellos que se evalúan como `false` en un contexto booleano. Algunos ejemplos de valores "falsy" son:

- `""` (string vacía)
- `0`
- `false`
- `null`
- `undefined`
- `NaN`

Te encontrarás con todos ellos a lo largo de este curso.

>> Por ahora, cambia la asignación de `truthyOrFalsy` estableciendo su valor en un string vacía. Después de eso, verás que se registra `false` en la consola.

- **Code**
  
  ```js
  // === Code ===
  const truthyOrFalsy = "";
  // === Code ===

  console.log(Boolean(truthyOrFalsy));
  ```

---

## Paso 5

>> Ahora que ya sabes qué son los valores "`true`" y "`false`", elimina tanto la declaración de la variable como la instrucción `console.log` de tu código.

- **Code**
  
  ```js
  // === Code ===
  Se elimina codigo
  // === Code ===
  ```

---

## Paso 6

>> Declara una variable llamada `hasDeveloperJob` y asígnale el valor booleano `true`.

- **Code**
  
  ```js
  // === Code ===
  const hasDeveloperJob = true;
  // === Code ===
  ```

---

## Paso 7

Una instrucción condicional se utiliza para ejecutar código en función de una condición. Se compone de la palabra clave `if`, seguida de una condición entre paréntesis y un cuerpo entre llaves. A continuación se muestra un ejemplo de una instrucción `if`:

- **Example Code**
  
  ```js
  if (condition) {
    console.log("condition is truthy");
  }
  ```

Cuando la `condition` es un valor verdadero (un string no vacío, un número distinto de cero, `true`, etc.), se ejecuta el código que se encuentra dentro del cuerpo de la instrucción `if`.

>> Debajo de tu variable, crea una instrucción `if` que utilice `hasDeveloperJob` como condición. Dentro del cuerpo de la instrucción `if`, escribe en la consola: `"Timmy is employed as a developer."`.

- **Code**
  
  ```js
  const hasDeveloperJob = true;
  // === Code ===
  if (hasDeveloperJob) {
    console.log("Timmy is employed as a developer.");
  }
  // === Code ===
  ```

---

## Paso 8

>> Declara otra variable llamada `isTimmyAGamer` y asígnale el valor booleano `false`.

- **Code**
  
  ```js
  // === Code ===
  const isTimmyAGamer = false;
  // === Code ===
  ```

---

## Paso 9

>> Ahora crea otra instrucción `if` que utilice `isTimmyAGamer` como condición. Dentro del cuerpo de la instrucción `if`, escribe en la consola: `"Timmy loves to play World of Warcraft."`.

Ten en cuenta que no verás nada en la consola, ya que la condición de tu nueva instrucción `if` es `false`.

- **Code**
  
  ```js
  const isTimmyAGamer = false;
  // === Code ===
  if (isTimmyAGamer) {
    console.log("Timmy loves to play World of Warcraft.");
  }
  // === Code ===
  ```

---

## Paso 10

>> Declara otra variable llamada `timmyAge` y asígnale el valor `18`.

- **Code**
  
  ```js
  // === Code ===
  const timmyAge = 18;
  // === Code ===
  ```

---

## Paso 11

>> Los operadores de comparación te permiten comparar valores y escribir sentencias condicionales más complejas.

- **Example Code**
  
  ```js
  if (today == birthday) {
    console.log("Happy Birthday!");
  }
  ```

Por ejemplo, el código anterior muestra el mensaje `"Happy Birthday!"` en la consola solo cuando los valores de las variables `today` y `birthday` son iguales.

>> Crea una tercera instrucción `if`. Para su condición, utiliza el operador `>=` para comprobar si `timmyAge` es mayor o igual a `16`.
>
>> Dentro del cuerpo de tu nueva instrucción `if`, muestra el mensaje `"Timmy is old enough to drive."` en la consola.

- **Code**
  
  ```js
  const timmyAge = 18;
  // === Code ===
  if (timmyAge >= 16) {
    console.log("Timmy is old enough to drive.");
  }
  // === Code ===
  ```

---

## Paso 12

>> Una instrucción condicional puede incluir una cláusula `else`, que ejecuta el código cuando la condición `if` es falsa. A continuación se muestra un ejemplo de una instrucción `if...else`:

- **Example Code**
  
  ```js
  if (condition) {
    console.log("condition is truthy");
  } else {
    console.log("condition is falsy");
  }
  ```

>> Añade una cláusula `else` a la instrucción `if` existente. Dentro del cuerpo de la cláusula `else`, escribe en la consola: `"Timmy is not old enough to drive."`.

- **Code**
  
  ```js
  const timmyAge = 18;
  if (timmyAge >= 16) {
    console.log("Timmy is old enough to drive.");
  // === Code ===
  } else {
  console.log("Timmy is not old enough to drive.");
  }
  // === Code ===
  ```

---

## Paso 13

>> Por último, cambia la declaración de `timmyAge` y asignale un valor inferior a `15`. A continuación, verás que se registra en la consola el mensaje `"Timmy is not old enough to drive."`.

- **Code**
  
  ```js
  // === Code ===
  const timmyAge = 15;
  // === Code ===
  if (timmyAge >= 16) {
    console.log("Timmy is old enough to drive.");
  } else {
  console.log("Timmy is not old enough to drive.");
  }
  ```

---
