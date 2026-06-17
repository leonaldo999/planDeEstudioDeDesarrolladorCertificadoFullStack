# Repaso de los bucles en JavaScript

En esta sección, repasaremos los conceptos básicos sobre los bucles en JavaScript, que hemos visto en secciones anteriores. Los bucles son estructuras de control que nos permiten repetir un bloque de código varias veces, lo que es útil para realizar tareas repetitivas sin tener que escribir el mismo código una y otra vez.

## Tema 1: Trabajar con bucles

- **Bucle `for`**: Este tipo de bucle se utiliza para repetir un bloque de código un número determinado de veces. Este bucle se divide en tres partes: la instrucción de inicialización, la condición y la instrucción de incremento/decremento. La instrucción de inicialización se ejecuta antes de que comience el bucle. Normalmente se utiliza para inicializar una variable contadora. La condición se evalúa antes de cada iteración del bucle. Una iteración es una sola pasada por el bucle. Si la condición es `true`, se ejecuta el bloque de código dentro del bucle. Si la condición es `false`, el bucle se detiene y se pasa al siguiente bloque de código. La instrucción de incremento/decremento se ejecuta después de cada iteración del bucle. Por lo general, se utiliza para incrementar o decrementar la variable contadora.

  - **Example code**
  
    ```js
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
    ```

---

- **Bucle `for...of`**: Este tipo de bucle se utiliza cuando necesitas recorrer los valores de un objeto iterable. Algunos ejemplos de objetos iterables son las matrices y las cadenas.

  - **Example code**
  
    ```js
    const numbers = [1, 2, 3, 4, 5];

    for (const num of numbers) {
      console.log(num);
    }
    ```

---

- **Bucle `for...in`**: Este tipo de bucle es ideal cuando necesitas recorrer las propiedades de un objeto. Este bucle recorrerá todas las propiedades enumerables de un objeto, incluidas las propiedades heredadas y las propiedades no numéricas.

  - **Example code**
  
    ```js
    const fruit = {
      name: 'apple',
      color: 'red',
      price: 0.99
    };
    
    for (const prop in fruit) {
      console.log(fruit[prop]);
    }
    ```

---

- **Bucle `while`**: Este tipo de bucle ejecutará un bloque de código mientras la condición sea `true`.

  - **Example code**
  
    ```js
    let i = 5;

    while (i > 0) {
      console.log(i);
      i--;
    }
    ```

---

- **Bucle `do...while`**: Este tipo de bucle ejecutará el bloque de código al menos una vez antes de comprobar la condición.

  - **Example code**
  
    ```js
    let userInput;

    do {
      userInput = prompt("Please enter a number between 1 and 10");
    } while (Number(userInput) < 1 || Number(userInput) > 10);
    
    alert("You entered a valid number!");
    ```

---

## Instrucciones `break` y `continue`

- **Definición**: La instrucción `break` se utiliza para salir de un bucle antes de tiempo, mientras que la instrucción `continue` se utiliza para saltarse la iteración actual de un bucle y pasar a la siguiente.

  - **Example code**
  
    ```js
    // Example of break statement
    for (let i = 0; i < 10; i++) {
      if (i === 5) {
        break;
      }
      console.log(i);
    }
    
    // Output: 0, 1, 2, 3, and 4
    
    // Example of continue statement 
    for (let i = 0; i < 10; i++) {
      if (i === 5) {
        continue;
      }
      console.log(i);
    }
    
    // Output: 0, 1, 2, 3, 4, 6, 7, 8, and 9
    ```

---
