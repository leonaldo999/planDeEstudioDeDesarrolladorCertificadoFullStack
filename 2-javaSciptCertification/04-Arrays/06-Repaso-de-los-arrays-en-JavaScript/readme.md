# Repaso de los arrays en JavaScript

En esta sección, repasaremos los conceptos básicos de las arrays en JavaScript, incluyendo su definición, cómo se crean y manipulan, y algunos métodos comunes que se utilizan para trabajar con ellas.

---

## Tema 1: Conceptos básicos de las arrays en JavaScript

- **Definición**: Un array en JavaScript es una colección ordenada de valores, cada uno de los cuales se identifica mediante un índice numérico. Los valores de un array en JavaScript pueden ser de diferentes tipos de datos, incluyendo números, strings, valores booleanos, objetos e incluso otros arrays. Los arrays son contiguos en la memoria, lo que significa que todos los elementos se almacenan en un único bloque continuo de ubicaciones de memoria, lo que permite una indexación eficiente y un acceso rápido a los elementos mediante su índice.

- **Example code**

  ```js
  const developers = ["Jessica", "Naomi", "Tom"];
  ```

- **Acceso a los elementos de los arrays**: Para acceder a los elementos de un array, debes hacer referencia al array seguido de su número de índice entre corchetes. Los arrays de JavaScript tienen una indexación basada en cero, lo que significa que el primer elemento se encuentra en el índice 0, el segundo en el índice 1, y así sucesivamente. Si intentas acceder a un índice que no existe en el array, JavaScript devolverá `undefined`.

- **Example code**

  ```js
  const developers = ["Jessica", "Naomi", "Tom"];
  console.log(developers[0]) // "Jessica"
  console.log(developers[1]) // "Naomi"
  
  console.log(developers[10]) // undefined
  ```

- **Propiedad `length`**: Esta propiedad se utiliza para devolver el número de elementos de un array.

- **Example code**

  ```js
  const developers = ["Jessica", "Naomi", "Tom"];
  console.log(developers.length) // 3
  ```

- **Actualización de elementos en un array**: Para actualizar un elemento de un array, se utiliza el operador de asignación (`=`) para asignar un nuevo valor al elemento situado en un índice específico.

- **Example code**

  ```js
  const fruits = ['apple', 'banana', 'cherry'];
  fruits[1] = 'blueberry';
  
  console.log(fruits); // ['apple', 'blueberry', 'cherry']
  ```

---

## Tema 2: Arrays bidimensionales

- **Definición**: Un array bidimensional es, en esencia, un array de arrays. Se utiliza para representar datos que tienen una estructura natural en forma de cuadrícula, como un tablero de ajedrez, una hoja de cálculo o los píxeles de una imagen. Para acceder a un elemento de un array bidimensional, se necesitan dos índices: uno para la fila y otro para la columna.

- **Example code**

  ```js
  const chessboard = [
      ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
      ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
      ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
  ];
  
  console.log(chessboard[0][3]); // "Q"
  ```

---

## Tema 3: Descomposición de arrays

- **Definición**: La descomposición de arrays es una característica de JavaScript que permite extraer valores de arrays y asignarlos a variables de una manera más concisa y legible. Ofrece una sintaxis práctica para descomponer los elementos de un array en variables distintas.

- **Example code**

  ```js
  const fruits = ["apple", "banana", "orange"];

  const [first, second, third] = fruits;
  
  console.log(first); // "apple"
  console.log(second); // "banana"
  console.log(third); // "orange"
  ```

- **Sintaxis `rest`**: Esto te permite capturar los elementos restantes de un array que no se han desestructurado en un nuevo array.

- **Example code**

  ```js
  const fruits = ["apple", "banana", "orange", "mango", "kiwi"];
  const [first, second, ...rest] = fruits;
  
  console.log(first); // "apple"
  console.log(second); // "banana"
  console.log(rest); // ["orange", "mango", "kiwi"]
  ```

---

## Tema 4: Métodos comunes de los arrays

- **Método `push()`**: Este método se utiliza para añadir elementos al final del array y devuelve la nueva longitud.

- **Example code**

  ```js
  const desserts = ["cake", "cookies", "pie"];
  desserts.push("ice cream");
  
  console.log(desserts); // ["cake", "cookies", "pie", "ice cream"];
  ```

- **Método `pop()`**: Este método se utiliza para eliminar el último elemento de un array y devuelve dicho elemento. Si el array está vacío, el valor devuelto será indefinido.

- **Example code**

  ```js
  const desserts = ["cake", "cookies", "pie"];
  desserts.pop();
  
  console.log(desserts); // ["cake", "cookies"];
  ```

- **Método `shift()`**: Este método se utiliza para eliminar el primer elemento de un array y devolver dicho elemento. Si el array está vacío, el valor devuelto será undefined.

- **Example code**

  ```js
  const desserts = ["cake", "cookies", "pie"];
  desserts.shift();
  
  console.log(desserts); // ["cookies", "pie"];
  ```

- **Método `unshift()`**: Este método se utiliza para añadir elementos al principio del array y devuelve la nueva longitud.

- **Example code**

  ```js
  const desserts = ["cake", "cookies", "pie"];
  desserts.unshift("ice cream");
  
  console.log(desserts); // ["ice cream", "cake", "cookies", "pie"];
  ```

- **Método `indexOf()`**: Este método es útil para encontrar el primer índice de un elemento específico dentro de un array. Si no se encuentra el elemento, devolverá `-1`.

- **Example code**

  ```js
  const fruits = ["apple", "banana", "orange", "banana"];
  const index = fruits.indexOf("banana");
  
  console.log(index); // 1
  console.log(fruits.indexOf("not found")); // -1
  ```

- **Método `splice()`**: Este método se utiliza para añadir o eliminar elementos desde cualquier posición en un array. El valor de retorno del método `splice()` será un array con los elementos eliminados del array. Si no se elimina nada, se devolverá un array vacío. Este método altera el array original, modificándolo in situ en lugar de crear un nuevo array. El primer argumento especifica el índice en el que comenzar a modificar el array. El segundo argumento es el número de elementos que deseas eliminar. Los siguientes argumentos son los elementos que deseas agregar.

- **Example code**

  ```js
  const colors = ["red", "green", "blue"];
  colors.splice(1, 0, "yellow", "purple");
  
  console.log(colors); // ["red", "yellow", "purple", "green", "blue"]
  ```

- **Método `includes()`**: Este método se utiliza para comprobar si una matriz contiene un valor específico. Este método devuelve `true` si la matriz contiene el elemento especificado y `false` en caso contrario.

- **Example code**

  ```js
  const programmingLanguages = ["JavaScript", "Python", "C++"];
  
  console.log(programmingLanguages.includes("Python")); // true
  console.log(programmingLanguages.includes("Perl")); // false
  ```

- **Método `concat()`**: Este método crea un nuevo array al fusionar dos o más matrices.

- **Example code**

  ```js
  const programmingLanguages = ["JavaScript", "Python", "C++"];
  const newList = programmingLanguages.concat("Perl");
  
  console.log(newList); // ["JavaScript", "Python", "C++", "Perl"]
  ```

- Método `slice()`: Este método devuelve un nuevo array que contiene una copia superficial de una parte del array original, especificada por los índices de inicio y fin. El nuevo array contiene referencias a los mismos elementos que el array original (no duplicados). Esto significa que, si los elementos son primitivos (como números o strings), se copian los valores; pero si los elementos son objetos o arrays, se copian las referencias, no los objetos en sí.

- **Example code**

  ```js
  const programmingLanguages = ["JavaScript", "Python", "C++"];
  const newList = programmingLanguages.slice(1);
  
  console.log(newList); // ["Python", "C++"]
  ```

- **Sintaxis de expansión**: La sintaxis de expansión se utiliza para crear copias superficiales de un array.

- **Example code**

  ```js
  const originalArray = [1, 2, 3];
  const shallowCopiedArray = [...originalArray];
  
  shallowCopiedArray.push(4);
  
  console.log(originalArray); // [1, 2, 3]
  console.log(shallowCopiedArray); // [1, 2, 3, 4]
  ```

- **Método `reverse()`**: Este método invierte un array sin modificarlo.

- **Example code**

  ```js
  const desserts = ["cake", "cookies", "pie"];
  console.log(desserts.reverse()); // ["pie", "cookies", "cake"]
  ```

- **Método `join()`**: Este método concatena todos los elementos de un array en una sola cadena, separando cada elemento con un separador especificado. Si no se proporciona ningún separador, o si se utiliza una cadena vacía (`""`), los elementos se unirán sin ningún separador.

- **Example code**

  ```js
  const reversedArray = ["o", "l", "l", "e", "h"];
  const reversedString = reversedArray.join("");
  
  console.log(reversedString); // "olleh"
  ```

---
