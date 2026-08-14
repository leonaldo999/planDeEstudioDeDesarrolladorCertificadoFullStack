# Repaso de las funciones de orden superior en JavaScript

En esta lección, repasaremos las funciones de orden superior en JavaScript, centrándonos en las funciones de devolución de llamada y el método `forEach`.

---

## Tema 1: Funciones de devolución de llamada y el método `forEach`

- **Definición**: En JavaScript, una función de devolución de llamada es una función que se pasa como argumento a otra función y se ejecuta una vez que la función principal ha finalizado su ejecución.

- **Método `forEach()`**: Este método se utiliza para recorrer cada elemento de un array y realizar una operación en cada uno de ellos. La función de devolución de llamada en `forEach` puede tomar hasta tres argumentos: el elemento actual, el índice del elemento actual y el array sobre el que se invocó `forEach`.

  - **Example code**

    ```js
    const numbers = [1, 2, 3, 4, 5];

    // Result: 2 4 6 8 10
    numbers.forEach((number) => {
      console.log(number * 2);
    });
    ```

---

## Tema 2: Funciones de orden superior

- **Definición**: Una función de orden superior toma una o más funciones como argumentos y devuelve una función o un valor como resultado.

  - **Example code**

    ```js
    function operateOnArray(arr, operation) {
      const result = [];
      for (let i = 0; i < arr.length; i++) {
        result.push(operation(arr[i]));
      }
      return result;
    }
    
    function double(x) {
      return x * 2;
    }
    
    const numbers = [1, 2, 3, 4, 5];
    const doubledNumbers = operateOnArray(numbers, double);
    console.log(doubledNumbers); // [2, 4, 6, 8, 10]
    ```

---

- **Método `map()`**: Este método se utiliza para crear un nuevo array aplicando una función determinada a cada elemento del array original. La función de llamada de retorno puede aceptar hasta tres argumentos: el elemento actual, el índice del elemento actual y el array sobre el que se invocó el método `map`.

  - **Example code**

    ```js
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map((num) => num * 2);
    
    console.log(numbers); // [1, 2, 3, 4, 5]
    console.log(doubled); // [2, 4, 6, 8, 10]
    ```

---

- **Método `filter()`**: Este método se utiliza para crear un nuevo array con los elementos que cumplen una condición específica, lo que lo hace útil para extraer elementos de manera selectiva según ciertos criterios. Al igual que el método `map`, la función de llamada de retorno del método `filter` acepta los mismos tres argumentos: el elemento actual que se está procesando, el índice y el array.

  - **Example code**

    ```js
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNumbers = numbers.filter((num) => num % 2 === 0);
    
    console.log(evenNumbers); // [2, 4, 6, 8, 10]
    ```

---

- **Método `reduce()`**: Este método se utiliza para procesar un array y condensarlo en un solo valor. Este valor único puede ser un número, una cadena, un objeto o incluso otro array. El método `reduce()` funciona aplicando una función a cada elemento del array, en orden, y pasando el resultado de cada cálculo al siguiente. A esta función se le suele llamar _función reductora_. La función reductora toma dos parámetros principales: un acumulador y el valor actual. El acumulador es donde se almacena el resultado acumulado de las operaciones, y el valor actual es el elemento del array que se está procesando.

  - **Example code**

    ```js
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    
    console.log(sum); // 15
    ```

---

## Tema 3: Encadenamiento de métodos

- **Definición**: El encadenamiento de métodos es una técnica de programación que permite llamar a varios métodos sobre el mismo objeto en una sola línea de código. Esta técnica puede hacer que tu código sea más legible y conciso, especialmente al realizar una serie de operaciones sobre el mismo objeto.

  - **Example code**

    ```js
    const result = "  Hello, World!  "
      .trim()
      .toLowerCase()
      .replace("world", "JavaScript");
    
    console.log(result); // "hello, JavaScript!"
    ```

---

## Tema 4: Cómo trabajar con el método `sort`

- **Definición**: El método `sort` se utiliza para ordenar los elementos de un array y devolver una referencia al array ordenado. En este caso no se realiza ninguna copia, ya que los elementos se ordenan en su lugar.

  - **Example code**

    ```js
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    
    console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]
    ```

---

- Si necesitas ordenar números, deberás pasar una función de comparación. El método `sort` convierte los elementos en cadenas y luego compara sus secuencias de valores de unidades de código UTF-16. Las unidades de código UTF-16 son los valores numéricos que representan los caracteres de la cadena. Algunos ejemplos de unidades de código UTF-16 son los números 65, 66 y 67, que representan los caracteres "A", "B" y "C", respectivamente. Por lo tanto, el número 200 aparece antes que el número 3 en un array, ya que la cadena "200" viene antes que la cadena "3" al comparar sus unidades de código UTF-16.

  - **Example code**

    ```js
    const numbers = [414, 200, 5, 10, 3];

    numbers.sort((a, b) => a - b);
    
    console.log(numbers); // [3, 5, 10, 200, 414]
    ```

---

- Los parámetros `a` y `b` son los dos elementos que se comparan. La función de comparación debe devolver un valor negativo si `a` debe ir antes que `b`, un valor positivo si `a` debe ir después de `b` y cero si `a` y `b` son iguales.

---

## Tema 5: Cómo trabajar con los métodos `every` y `some`

- **Método `every()`**: Este método comprueba si todos los elementos de un array pasan una prueba implementada por una función proporcionada. El método `every()` devuelve `true` si la función proporcionada devuelve `true` para todos los elementos del array. Si algún elemento no pasa la prueba, el método devuelve inmediatamente `false` y deja de revisar los elementos restantes.

  - **Example code**

    ```js
    const numbers = [2, 4, 6, 8, 10];
    const hasAllEvenNumbers = numbers.every((num) => num % 2 === 0);
    
    console.log(hasAllEvenNumbers); // true
    ```

---

- **Método `some()`**: Este método verifica si al menos un elemento cumple con la condición. El método `some()` devuelve `true` tan pronto como encuentra un elemento que cumple con la condición. Si ningún elemento cumple con la condición, devuelve `false`.

  - **Example code**

    ```js
    const numbers = [1, 3, 5, 7, 8, 9];
    const hasSomeEvenNumbers = numbers.some((num) => num % 2 === 0);
    
    console.log(hasSomeEvenNumbers); // true
    ```

---
