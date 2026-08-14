# Cuestionario sobre funciones de orden superior en JavaScript

---

Para aprobar el cuestionario, debes responder correctamente al menos 18 de las 20 preguntas siguientes.

---

1. **¿Cuál de las siguientes afirmaciones sobre las funciones de orden superior en JavaScript NO es cierta?**

    - [ ] a) Las funciones de orden superior, como `map`, `filter` y `reduce`, son herramientas poderosas para la manipulación de matrices, pero no son exclusivas de la programación funcional.
    - [ ] b) Las funciones de orden superior pueden mejorar considerablemente la legibilidad y la facilidad de mantenimiento del código al permitir el uso de técnicas de programación funcional.
    - [x] c) Todas las funciones en JavaScript, incluidas aquellas que no toman ni devuelven otras funciones, pueden clasificarse como funciones de orden superior. // ❎
    - [ ] d) Las funciones de orden superior pueden añadir complejidad a la comprensión del código, pero también pueden conducir a soluciones más expresivas y concisas.

2. **¿Qué es una función de fábrica en el contexto de las funciones de orden superior?**

    - [ ] a) Una función que crea nuevas variables.
    - [ ] b) Una función que solo trabaja con cadenas de texto.
    - [x] c) Una función que devuelve una nueva función basada en parámetros específicos. // ❎
    - [ ] d) Una función que genera automáticamente comentarios de código.

3. **Después de ejecutar el código, ¿cuál será el valor de `forEachRes` y `mapRes`?**

    ```js
    const numbers = [1, 1, 1, 1, 1];
    let sum = 0;
    const forEachRes = numbers.forEach(num => {
      return (sum += num);
    });
    const mapRes = numbers.map(num => {
      return (sum += num);
    });
    ```

    - [ ] a) `forEachRes` es `5` y `mapRes` es `[1,2,3,4,5]`
    - [ ] b) `forEachRes` es `0` y `mapRes` es `[1,2,3,4,5]`
    - [x] c) `forEachRes` es `undefined` y `mapRes` es `[6,7,8,9,10]` // ❎
    - [ ] d) `forEachRes` es `undefined` y `mapRes` es `[1,2,3,4,5]`

4. **¿Cuál es el resultado de este código?**

    ```js
    [, undefined, 'a', 'b', { 20: 5 }].sort();
    ```

    - [ ] a) Elementos no compatibles para ordenar un array, por lo que se produce un error.
    - [ ] b) No se proporcionó la función de llamada de retorno, por lo que se produce un error.
    - [x] c) `[{ '20': 5 }, 'a', 'b', undefined, empty]` // ❎
    - [ ] d) `[empty, 'a', 'b', undefined, { '20': 5 }]`

5. **¿Cuál de las siguientes opciones describe una función de devolución de llamada en JavaScript?**

    - [ ] a) Una función que se invoca en un contexto específico.
    - [x] b) Una función que se pasa como argumento a otra función, para que sea ejecutada por la lógica de esa función. // ❎
    - [ ] c) Una función que devuelve otra función.
    - [ ] d) Una función que se invoca inmediatamente después de su declaración.

6. **¿Cuál es el resultado de aplicar `reduce()` a un array?**

    - [ ] a) Un array en el que todos los elementos se han procesado mediante la función de llamada de retorno especificada.
    - [ ] b) Un array de valores booleanos.
    - [x] c) Varía según el valor inicial del acumulador y la función de llamada de retorno. // ❎
    - [ ] d) Un valor booleano que indica si algún elemento cumple una condición.

7. **¿Cómo se comporta el método `sort()` si no se proporciona ninguna función de comparación en la ordenación numérica?**

    - [x] a) Ordena el array como cadenas basándose en unidades de código UTF-16. // ❎
    - [ ] b) Llena los espacios vacíos con valores nulos.
    - [ ] c) Devuelve un array de caracteres especiales.
    - [ ] d) Ordena el array en orden inverso.

8. **¿Cuál es el propósito del método `some()` en JavaScript?**

    - [ ] a) Para recorrer un array sin generar un resultado.
    - [ ] b) Para crear un nuevo array con los resultados de una función aplicada a cada elemento.
    - [ ] c) Para reducir un array a un solo valor basándose en una función de devolución de llamada.
    - [x] d) Para determinar si algún elemento de un array cumple con una condición específica. // ❎

9. **¿Cuál de las siguientes opciones es un ejemplo válido de encadenamiento de métodos?**

    - [ ] a)
           ```js
            Math.random();
           ```
    - [ ] b)
           ```js
            console.log('Hello');
           ```
    - [ ] c)
           ```js
            array.push(1).pop();
           ```
    - [x] d) // ❎
           ```js
            str.toLowerCase().trim().replace(' ', '_');
           ```

10. **¿Cuál es el resultado del siguiente código?**

    ```js
    let numbers = [2, 4, 8, 10];

    numbers.forEach(function(number) {
        console.log(number % 2);
    });
    ```

    - [x] a) `0 0 0 0` // ❎
    - [ ] b) `2 4 8 10`
    - [ ] c) `1 2 4 5`
    - [ ] d) `null null null null`

11. **¿Cuál de las siguientes opciones es una ventaja del encadenamiento de métodos?**

    - [x] a) Elimina la necesidad de variables temporales, pero puede aumentar el uso de memoria en algunos casos. // ❎
    - [ ] b) Optimiza de manera inherente el rendimiento al reducir el tiempo de ejecución de las funciones.
    - [ ] c) Permite que el manejo de errores y la depuración sean más sencillos.
    - [ ] d) Fomenta una sintaxis simplificada y un código más legible al permitir múltiples operaciones en una sola expresión.

12. **¿Cómo se puede ordenar un array de objetos según una propiedad específica utilizando el método `sort`?**

    - [ ] a) Utiliza el método `reverse` después de ordenar.
    - [x] b) Utiliza una función de comparación que compare los valores de la propiedad. // ❎
    - [ ] c) El método `sort` no puede ordenar objetos.
    - [ ] d) Convierte los objetos en cadenas y ordénalos.

13. **En el encadenamiento de métodos, ¿cuál es una práctica común para mejorar la claridad y facilitar la depuración?**

    - [ ] a) Utiliza menos métodos en la cadena.
    - [ ] b) Evita encadenar métodos que solo devuelvan valores primitivos.
    - [ ] c) Utiliza únicamente métodos integrados.
    - [x] d) Divide las cadenas largas en varios pasos. // ❎

14. **¿Cuál es una posible desventaja de usar el encadenamiento de métodos en exceso en tu código?**

    - [ ] a) Impide el uso de comentarios.
    - [x] b) Puede hacer que el código sea más difícil de depurar. // ❎
    - [ ] c) Hace que el código se ejecute más lento.
    - [ ] d) Aumenta el tamaño del archivo.

15. **¿Qué método usarías para determinar si todos los elementos de un array son cadenas?**

    - [x] a) `every()` // ❎
    - [ ] b) `some()`
    - [ ] c) `filter()`
    - [ ] d) `everyInstance()`

16. **¿Cuál será el valor de `originalArray` después de ejecutar el siguiente código?**

    ```js
    const originalArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const filteredArray = originalArray.filter(item => item.id > 1);
    filteredArray[0].id = 4;
    ```

    - [ ] a) `[{ id: 1 }, { id: 2 }, { id: 3 }]`
    - [ ] b) `[{ id: 1 }]`
    - [x] c) `[{ id: 1 }, { id: 4 }, { id: 3 }]` // ❎
    - [ ] d) `[{ id: 4 }, { id: 2 }, { id: 3 }]`

17. **¿Cuál será el valor de `shortWords` después de ejecutar el siguiente código?**

    ```js
    const words = ['apple', 'banana', 'pear', 'kiwi'];
    const shortWords = words.filter(word => word.length <= 5);
    ```

    - [ ] a) `['pear', 'kiwi']`
    - [ ] b) `['apple', 'pear', 'kiwi']` // ❎
    - [x] c) `[]`
    - [ ] d) `['apple', 'banana']`

18. **¿Cuál es el propósito de proporcionar un valor inicial como argumento al método `reduce()`?**

    - [ ] a) Para especificar el tipo de retorno de la función.
    - [ ] b) Para establecer la longitud del array.
    - [ ] c) Para limitar el número de iteraciones.
    - [x] d) Para definir el valor inicial del acumulador. // ❎

19. **¿Se puede usar el método `map` con objetos que no sean matrices?**

    - [ ] a) Depende de la versión de JavaScript.
    - [x] b) No, está diseñado específicamente para matrices. // ❎
    - [ ] c) Sí, se puede usar con cualquier objeto.
    - [ ] d) Sí, pero solo con objetos que tengan propiedades numéricas.

20. **¿Cuál es el propósito principal del método `map` en JavaScript?**

    - [ ] a) Ordenar un array y devolver un nuevo array manteniendo el orden original.
    - [x] b) Crear un nuevo array que contenga los resultados de llamar a una función proporcionada sobre cada elemento del array inicial. // ❎
    - [ ] c) Filtrar elementos de un array y eliminar o agregar elementos según una condición.
    - [ ] d) Encontrar un elemento específico en un array y devolver su índice junto con el elemento.

---
