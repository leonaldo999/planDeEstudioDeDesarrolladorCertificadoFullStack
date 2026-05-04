# Repaso de las funciones de JavaScript

En esta sección, repasaremos los conceptos básicos que hemos aprendido sobre las funciones en JavaScript, y cómo se pueden utilizar para crear herramientas útiles.

---

## Tema 1: Funciones de JavaScript

- Las funciones son bloques de código reutilizables que realizan una tarea específica.

- Las funciones se pueden definir utilizando la palabra clave `function`, seguida de un nombre, una lista de parámetros y un bloque de código que realiza la tarea.

- **Example code**

  ```js
  function addNumbers(x, y, z) {
    return x + y + z;
  }
  
  console.log(addNumbers(5, 3, 8)); // Output: 16
  ```

- Los argumentos son valores que se pasan a una función cuando se la invoca.

- Una invocación de función es el proceso de ejecutar una función en un programa especificando el nombre de la función seguido de paréntesis, incluyendo opcionalmente argumentos dentro de los paréntesis.

- Cuando una función termina su ejecución, siempre devuelve un valor.

- Por defecto, el valor de retorno de una función es `undefined`.

- La palabra clave `return` se utiliza para especificar el valor que se devolverá desde la función y finaliza la ejecución de la función.

- Los parámetros por defecto permiten que las funciones tengan valores predefinidos que se utilizarán si no se proporciona un argumento al llamar a la función. Esto hace que las funciones sean más flexibles y evita errores en los casos en que se omitan ciertos argumentos.

- **Example code**

  ```js
  const calculateTotal = (amount, taxRate = 0.05) => {
    return amount + (amount * taxRate);
  };
  
  console.log(calculateTotal(100)); // Output: 105
  ```

- Las funciones anónimas son funciones sin nombre que se pueden asignar a variables. Al asignarlas a variables, puedes reutilizarlas en cualquier lugar donde se pueda acceder a la variable.

- **Example code**

  ```js
  const multiplyNumbers = function(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
  };
  
  console.log(multiplyNumbers(4, 5)); // Output: 20
  ```

---

## Tema 2: Funciones de flecha

- Las funciones de flecha son una forma más concisa de escribir funciones en JavaScript.

- **Example code**

  ```js
  const calculateArea = (length, width) => {
    const area = length * width;
    return `The area of the rectangle is ${area} square units.`;
  };
  
  console.log(calculateArea(5, 10)); // Output: "The area of the rectangle is 50 square units."
  ```

- Al definir una función flecha, no es necesario utilizar la palabra clave `function`.

- Si se utiliza un solo parámetro, se pueden omitir los paréntesis que rodean la lista de parámetros.

- **Example code**

  ```js
  const cube = x => {
    return x * x * x;
  };
  
  console.log(cube(3)); // Output: 27
  ```

- Si el cuerpo de la función consta de una sola expresión, puedes omitir las llaves y la palabra clave `return`.

- **Example code**

  ```js
  const square = number => number * number;
  
  console.log(square(5)); // Output: 25
  ```

---

## Tema 3: Ámbito en programación

- Ámbito global: es el ámbito más externo en JavaScript. Se puede acceder a las variables declaradas en el ámbito global desde cualquier parte del código y se denominan variables globales.

- Ámbito local: se refiere a las variables declaradas dentro de una función. Solo se puede acceder a estas variables dentro de la función en la que se declaran y se denominan variables locales.

- Ámbito de bloque: un bloque es un conjunto de sentencias entre llaves `{}`, como en las sentencias `if` o los bucles.

- El ámbito de bloque con `let` y `const` proporciona un control aún más preciso sobre la accesibilidad de las variables, lo que ayuda a prevenir errores y hace que tu código sea más predecible.

- **Example code**

  ```js
  let globalApp = "Sistema Activo"; // Ámbito Global

  const runProcess = () => {
    let localStatus = "Procesando..."; // Ámbito Local
    
    if (true) {
      const blockKey = 9921; // Ámbito de Bloque
    }
  };
  ```

---
