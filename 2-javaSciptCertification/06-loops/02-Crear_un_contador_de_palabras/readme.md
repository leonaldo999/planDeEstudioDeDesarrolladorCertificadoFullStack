# Crear un contador de palabras

En este taller, practicarás el uso de los bucles `for...of` creando una función que cuente cuántas veces aparece un string en un array de strings.

---

## Paso 1

Antes de escribir esa función, crearás una más sencilla que muestre cada carácter de un string en la consola.

> > Empieza por definir una función vacía llamada `printCharacters` con el parámetro `str`.

- **Code**

  ```js
  function printCharacters(str) {
    
  }
  ```

---

## Paso 2

Ahora es el momento de escribir tu primer bucle `for...of`. En las lecciones anteriores, aprendiste que puedes usar un bucle `for...of` para recorrer los valores de un objeto iterable (por ejemplo, strings o arrays).

Aquí tienes un ejemplo de un bucle `for...of`:

- **Example Code**

  ```js
  for (const num of [1, 2, 3]) {
    // code block to be executed
  }
  ```

> > Añade un bucle `for...of` con un bloque de código vacío dentro de tu función. Debería recorrer todos los caracteres del argumento `str`.

- **Code**

  ```js
  function printCharacters(str) {
    /* code */
    for (const char of str) {
      
    }
    /* code */
  }
  ```

---

## Paso 3

> > Ahora, dentro del bucle, muestra el contenido de la variable `char` en la consola.

- **Code**

  ```js
  function printCharacters(str) {
    for (const char of str) {
      /* code */
      console.log(char);
      /* code */
    }
  }
  ```

---

## Paso 4

> > Para ver cómo se comporta el bucle dentro de `printCharacters`, llámalo con el argumento `"hello"`.

- **Code**

  ```js
  function printCharacters(str) {
    for (const char of str) {
      console.log(char);
    }
  }

  /* code */
  printCharacters("hello");
  /* code */
  ```

---

## Paso 5

En los siguientes pasos, crearás una función que cuente cuántas veces aparece un string en una lista de strings.

> > Para empezar, define una función vacía llamada `getMatchedWordCount` con los parámetros `sentence` y `match`, en ese orden.

- **Code**

  ```js
  function printCharacters(str) {
    for (const char of str) {
      console.log(char);
    }
  }
  printCharacters("hello");

  /* code */
  function getMatchedWordCount(sentence, match) {
    
  }
  /* code */
  ```

---

## Paso 6

Dado que la función `getMatchedWordCount` debe devolver un recuento numérico, empezarás por definir una variable contadora.

> > Crea una variable llamada `count` utilizando la palabra clave `let`, inicialízala con el valor `0` y añade una instrucción `return` que devuelva la variable `count`.

- **Code**

  ```js
  function printCharacters(str) {
    for (const char of str) {
      console.log(char);
    }
  }
  printCharacters("hello");

  function getMatchedWordCount(sentence, match) {
    /* code */
    let count = 0;
    return count
    /* code */
  }
  ```

---

## Paso 7

> > Para ver el resultado de tu función `getMatchedWordCount` en su estado actual, agrega una instrucción `console.log` debajo de ella. Dentro de `console.log()`, llama a la función con el argumento `["I", "really", "really", "really", "like", "to", "code"]` para el parámetro de `sentence` y `"really"` para el parámetro `match`.

- **Code**

  ```js
  function printCharacters(str) {
    for (const char of str) {
      console.log(char);
    }
  }
  printCharacters("hello");

  function getMatchedWordCount(sentence, match) {
    let count = 0;
    return count
  }

  /* code */
  console.log(getMatchedWordCount(["I", "really", "really", "really", "like", "to", "code"], "really"));
  /* code */
  ```

---

## Paso 8

Genial, tu función devuelve un `0`, pero todavía no cuenta nada.

> > Para solucionar esto, dentro de `getMatchedWordCount`, crea un bucle `for...of` con un bloque de código vacío que recorra cada palabra de `sentence`.

- **Code**

  ```js
  function printCharacters(str) {
    for (const char of str) {
      console.log(char);
    }
  }
  printCharacters("hello");

  function getMatchedWordCount(sentence, match) {
    let count = 0;
    /* code */
    for (const word of sentence) {
      
    }
    /* code */
    return count
  }

  console.log(getMatchedWordCount(["I", "really", "really", "really", "like", "to", "code"], "really"));
  ```

---

## Paso 9

>> Ahora, dentro del bucle, registra el siguiente literal de plantilla en la consola: `Checking "${word}" against "${match}" | Running count: ${count}`.

- **Code**

  ```js
  function printCharacters(str) {
    for (const char of str) {
      console.log(char);
    }
  }
  printCharacters("hello");

  function getMatchedWordCount(sentence, match) {
    let count = 0;
    for (const word of sentence) {
      /* code */
      console.log(`Checking "${word}" against "${match}" | Running count: ${count}`);
      /* code */
    }
    return count
  }

  console.log(getMatchedWordCount(["I", "really", "really", "really", "like", "to", "code"], "really"));
  ```

---

## Paso 10

Ahora es el momento de añadir al bucle la lógica que incremente `count` de forma adecuada.

> > Dentro del bucle, utiliza una instrucción condicional para incrementar `count` en `1` si la variable `word` es igual a la variable `match`. De lo contrario, deja el valor de `count` sin cambios.

- **Code**

  ```js
  function printCharacters(str) {
    for (const char of str) {
      console.log(char);
    }
  }
  printCharacters("hello");

  function getMatchedWordCount(sentence, match) {
    let count = 0;

    for (const word of sentence) {
      /* code */
      if (word === match) {
        count += 1;
      }
      /* code */
      console.log(`Checking "${word}" against "${match}" | Running count: ${count}`);
    }
    return count
  }

  console.log(getMatchedWordCount(["I", "really", "really", "really", "like", "to", "code"], "really"));
  ```

---

## Paso 11

¡Ya terminaste de trabajar en tu función `getMatchedWordCount`!

Ahora vas a probarla con diferentes datos para ver cómo se comporta.

Agrega una nueva instrucción `console.log` debajo de la existente que llame a `getMatchedWordCount` con estos parámetros:

- sentence: `["Do", "not", "fear", "the", "dandy", "lion"]`
- match: `"dandy"`

- **Code**

  ```js
  function printCharacters(str) {
    for (const char of str) {
      console.log(char);
    }
  }
  printCharacters("hello");

  function getMatchedWordCount(sentence, match) {
    let count = 0;

    for (const word of sentence) {
      if (word === match) {
        count += 1;
      }
      console.log(`Checking "${word}" against "${match}" | Running count: ${count}`);
    }
    return count
  }

  console.log(getMatchedWordCount(["I", "really", "really", "really", "like", "to", "code"], "really"));
  
  /* code */
  console.log(getMatchedWordCount(["Do", "not", "fear", "the", "dandy", "lion"], "dandy"));
  /* code */
  ```

---

**¡Felicidades! Has completado este taller.**
