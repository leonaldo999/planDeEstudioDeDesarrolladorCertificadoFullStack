# Cuestionario sobre arrays en JavaScript

Para aprobar el cuestionario, debes responder correctamente al menos 18 de las 20 preguntas siguientes.

1. **¿Cuál será el resultado del siguiente código?**

    ```js
    const numbers = [1, 2, 3];
    console.log(numbers[10]);
    ```

    - [ ] a) `null`
    - [x] b) `undefined` // ❎
    - [ ] c) `[1, 2, 3]`
    - [ ] d) `10`

2. **¿Cuál de las siguientes opciones es la forma correcta de acceder al string `"Jessica"` desde el array `developers`?**

    - [ ] a)
           ```js
            const developers = ["Jessica", "Naomi", "Tom"];
            developers[-1]
           ```
    - [ ] b)
           ```js
            const developers = ["Jessica", "Naomi", "Tom"];
            developers[2]
           ```
    - [x] c) // ❎
           ```js
            const developers = ["Jessica", "Naomi", "Tom"];
            developers[0]
           ```
    - [ ] d)
           ```js
            const developers = ["Jessica", "Naomi", "Tom"];
            developers[1]
           ```

3. **¿Qué valor se le asignará a la variable de `index`?**

    ```js
    const numbers = [10, 20, 30, 40];
    const index = numbers.indexOf(20);
    console.log(index);
    ```

    - [x] a) `1` // ❎
    - [ ] b) `2`
    - [ ] c) `3`
    - [ ] d) `-1`

4. **¿Para qué sirve la sintaxis rest?**
  
    - [ ] a) Se utiliza para dividir una string en un array de substrings.
    - [ ] b) Se utiliza para añadir elementos al final del array y devuelve la nueva longitud.
    - [x] c) Captura los elementos restantes de un array en un nuevo array. // ❎
    - [ ] d) Se utiliza para añadir o eliminar elementos desde cualquier posición de un array.

5. **¿Qué es la desestructuración de arrays?**

    - [ ] a) Se utiliza para comprobar si un array contiene un valor específico.
    - [ ] b) Se utiliza para concatenar todos los elementos de un array en un solo string.
    - [x] c) Se utiliza para extraer valores de arrays y asignarlos a variables de una forma más concisa y legible. // ❎
    - [ ] d) Se utiliza para eliminar el último elemento de un array y devolverá ese elemento eliminado.

6. **¿Qué valor se le asignará a la variable `arr2`?**

    ```js
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5];
    console.log(arr2);
    ```

    - [ ] a) `[1, 2, [3, 4, 5]]`
    - [ ] b) `[1, 2, 3]`
    - [ ] c) `[4, 5, 1, 2, 3]`
    - [x] d) `[1, 2, 3, 4, 5]` // ❎

7. **¿Qué mostrará este código en la consola?**

    ```js
    const colors = ["red", "blue", "green", "yellow"];
    colors.splice(1, 2, "purple");
    console.log(colors);
    ```

    - [ ] a) `["red", "blue", "green", "yellow"]`
    - [x] b) `["red", "purple", "yellow"]` // ❎
    - [ ] c) `["red", "yellow"]`
    - [ ] d) `["red", "blue", "yellow"]`

8. **¿Qué valor se asignará a la variable `slicedArr`?**

    ```js
    const arr = ["apple", "banana", "cherry", "date"];
    const slicedArr = arr.slice(1, 3);
    console.log(slicedArr);
    ```

    - [ ] a) `["apple", "banana"]`
    - [ ] b) `["apple", "cherry"]`
    - [ ] c) `["cherry", "date"]`
    - [x] d) `["banana", "cherry"]` // ❎

9. **¿Qué método devuelve el primer índice de un elemento dado en un array?**

    - [x] a) `indexOf()` // ❎
    - [ ] b) `searchIndex()`
    - [ ] c) `lastIndexOf()`
    - [ ] d) `findIndex()`

10. **¿Qué método se utiliza para eliminar el primer elemento de un array y devolver dicho elemento eliminado?**

    - [x] a) `shift()` // ❎
    - [ ] b) `pop()`
    - [ ] c) `slice()`
    - [ ] d) `splice()`

11. **¿Qué hace el método `concat()`?**

    - [x] a) Combina dos arrays en una nueva. // ❎
    - [ ] b) Elimina un elemento del array.
    - [ ] c) Une los elementos del array en un string.
    - [ ] d) Añade un elemento al principio de un array.

12. **¿Cuál será el resultado de este código?**

    ```js
    const fruits = ["apple", "banana", "cherry", "apple", "orange"];

    fruits.splice(0, 1);
    
    console.log(fruits);
    ```

    - [ ] a) `["apple", "banana", "cherry", "apple", "orange"]`
    - [ ] b) `["apple", "banana", "cherry"]`
    - [ ] c) `["cherry", 'apple']`
    - [x] d) `["banana", "cherry", "apple", "orange"]` // ❎

13. **¿Para qué sirve el método `includes()`?**

    - [ ] a) Se utiliza para concatenar todos los elementos de un array en un solo string.
    - [x] b) Se utiliza para comprobar si un array contiene un valor específico. // ❎
    - [ ] c) Se utiliza para añadir o eliminar elementos desde cualquier posición de un array.
    - [ ] d) Se utiliza para dividir un string en un array de substrings.

14. **¿Cuál de los siguientes métodos se utiliza para invertir un array in situ?**

    - [ ] a) `reversing()`
    - [x] b) `reverse()` // ❎
    - [ ] c) `reversed()`
    - [ ] d) `reverseArr()`

15. **¿Qué es un array bidimensional?**

    - [ ] a) Un array de longitud fija.
    - [x] b) Un array de arrays. // ❎
    - [ ] c) Un array que solo contiene literales de objetos.
    - [ ] d) Un array de números de punto flotante.

16. **¿Cuál de las siguientes afirmaciones es cierta con respecto al método `indexOf()` en las arrays?**

    - [ ] a) Requiere que el array esté ordenado.
    - [ ] b) Lanza un error si no se encuentra el elemento.
    - [x] c) Devuelve `-1` si no se encuentra el elemento. // ❎
    - [ ] d) Siempre devuelve la última aparición del elemento.

17. **¿Cuál de las siguientes opciones NO es un método de array?**

    - [ ] a) `pop()`
    - [x] b) `trim()` // ❎
    - [ ] c) `includes()`
    - [ ] d) `push()`

18. **¿Cuál será el resultado del siguiente código?**

    ```js
    const arr = ["o", "l", "l", "e", "h"];
    console.log(arr.join(""));
    ```

    - [ ] a) `"hello"`
    - [ ] b) `["o", "l", "l", "e", "h"]`
    - [ ] c) `undefined`
    - [x] d) `"olleh"` // ❎

19. **¿Cuál será el resultado de aplicar el método `shift()` a un array vacío?**

    - [ ] a) `null`
    - [ ] b) `[]`
    - [ ] c) `TypeError`
    - [x] d) `undefined` // ❎

20. **¿Qué método devolverá un nuevo array sin modificar el array original?**

    - [x] a) `slice()` // ❎
    - [ ] b) `pop()`
    - [ ] c) `shift()`
    - [ ] d) `push()`
