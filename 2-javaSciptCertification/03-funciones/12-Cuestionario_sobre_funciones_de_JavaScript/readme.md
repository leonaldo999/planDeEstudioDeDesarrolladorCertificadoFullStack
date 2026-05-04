# Cuestionario sobre funciones de JavaScript

Para aprobar el cuestionario, debes responder correctamente al menos 18 de las 20 preguntas siguientes.

1. **¿Cuál de las siguientes opciones es la forma correcta de declarar una función en JavaScript?**

    - [x] a)  // ❎
           ```js
           function greet() {
             console.log("Hello there!");
           }
           ```
    - [ ] b)
           ```js
           func greet() {
             console.log("Hello there!");
           }
           ```
    - [ ] c)
           ```js
           defineFunction greet() {
             console.log("Hello there!");
           }
           ```
    - [ ] d)
           ```js
           def greet() {
             console.log("Hello there!");
           }
           ```

2. **¿Qué sucede cuando se llama (o se ejecuta) una función?**

    - [ ] a) Se generará un `TypeError` y el programa se bloqueará.
    - [ ] b) El código dentro de la función se ejecutará y siempre se devolverá `null`.
    - [x] c) El código dentro de la función se ejecutará y se devolverá un valor. // ❎
    - [ ] d) No sucederá nada cuando se llame a una función.

3. **¿Cuál de las siguientes opciones es la forma correcta de llamar a una función?**
  
    - [ ] a)
           ```js
           exampleFunction;
           ```
    - [ ] b)
           ```js
           exampleFunction>>;
           ```
    - [x] c) // ❎
           ```js
           exampleFunction();
           ```
    - [ ] d)
           ```js
           ()exampleFunction();
           ```

4. **¿Cuál es la función de la palabra clave `return`?**
  
    - [x] a) La palabra clave `return` devuelve un valor desde la función. // ❎
    - [ ] b) La palabra clave `return` no tiene ninguna función en las funciones.
    - [ ] c) La palabra clave `return` ejecutará la función.
    - [ ] d) La palabra clave `return` generará un error de tipo.

5. **¿Cuál de las siguientes es una expresión de función válida?**

    - [ ] a)
           ```js
           getSum: function(x, y) {
               return x + y;
           };
           ```
    - [x] b)  // ❎
           ```js
           const getSum = function(x, y) {
               return x + y;
           };
           ```
    - [ ] c)
           ```js
           function = getSum(x, y) {
               return x + y;
           };
           ```
    - [ ] d)
           ```js
           expression function getSum(x, y) {
               return x + y;
           };
           ```

6. **¿Qué son los argumentos de una función?**
  
    - [x] a) Valores reales que se pasan a una función cuando se invoca. // ❎
    - [ ] b) Valores de marcador de posición que se utilizan dentro de la función.
    - [ ] c) Valores que representan la ausencia de un valor.
    - [ ] d) Valores especiales que actúan de manera similar a las funciones anónimas.

7. **¿Qué son los parámetros de una función?**
  
    - [ ] a) Los valores que se pasan a una función cuando se invoca.
    - [ ] b) Los valores de punto flotante que se utilizan dentro de la función.
    - [ ] c) Los valores que representan la ausencia intencionada de un valor.
    - [x] d) Los valores que se enumeran dentro de la definición de la función. // ❎

8. **¿Qué se registrará en la consola?**

    ```js
    const calculateTotal = (amount, taxRate = 0.05) => {
      return amount + (amount * taxRate);
    };
    
    console.log(calculateTotal(100));
    ```

    - [x] a) `105` // ❎
    - [ ] b) `1`
    - [ ] c) `undefined`
    - [ ] d) `10`

9. **¿Cuál de las siguientes opciones es la sintaxis correcta para una función flecha?**

    - [ ] a)
           ```js
           const sum >=> (num1, num2) => num1 + num2
           ```
    - [ ] b)
          ```js
          const sum === (num1, num2) === num1 + num2
          ```
    - [ ] c)
          ```js
          const sum <<>> (num1, num2) => num1 + num2
          ```
    - [x] d)  // ❎
          ```js
          const sum = (num1, num2) => num1 + num2
          ```

10. **¿Cuál será el resultado del siguiente código?**

    ```js
    function greet() {
      const developer = "Jessica";
      console.log("Hello there!");
    }
    
    console.log(developer);
    ```

    - [ ] a) La cadena `"Hello there!"` se registrará en la consola.
    - [x] b) Aparecerá un error de referencia porque `developer` no está definido globalmente. // ❎
    - [ ] c) La cadena `"¡Hello!"` se registrará en la consola.
    - [ ] d) No pasará nada y el código se ejecutará con normalidad.

11. **¿Cuándo se pueden omitir los paréntesis que rodean la lista de parámetros de una función flecha?**

    - [ ] a) Solo debes omitir los paréntesis cuando trabajes con varios parámetros.
    - [x] b) Solo debes omitir los paréntesis cuando tengas un solo parámetro. // ❎
    - [ ] c) Siempre debes omitir los paréntesis que rodean la lista de parámetros.
    - [ ] d) Nunca debes omitir los paréntesis en una función flecha.

12. **¿Cuándo se pueden omitir las llaves y la palabra clave `return` en una función flecha?**

    - [ ] a) Siempre debes omitir las llaves y la palabra clave `return`.
    - [x] b) Cuando el cuerpo de la función consta de una sola expresión. // ❎
    - [ ] c) Nunca debes omitir las llaves y la palabra clave `return`.
    - [ ] d) Cuando el cuerpo de la función tiene varias líneas de código.

13. **¿Qué valor devolverá la siguiente función?**

    ```js
    function exampleFunction() {
      return "Hello";
      return "World!";
    };
    ```

    - [ ] a) `"World!"`
    - [ ] b) `undefined`
    - [ ] c) `"Hello World!"`
    - [x] d) `"Hello"` // ❎

14. **¿Cuál de las siguientes opciones es la forma correcta de utilizar los parámetros por defecto?**

    - [x] a)  // ❎
           ```js
           function sum(num1, num2 = 12) {
             return num1 + num2
           }
           ```
    - [ ] b)
          ```js
          function sum(num1, num2 <<>> 12) {
            return num1 + num2
          }
          ```
    - [ ] c)
          ```js
          function sum(num1, num2 >> 12) {
            return num1 + num2
          }
          ```
    - [ ] d)
          ```js
          function sum(num1, num2 === 12) {
            return num1 + num2
          }
          ```

15. **¿Cuál será el resultado del siguiente código?**

    ```js
    const developer = "Jessica";
    
    function greet() {
      console.log("Hello, " + developer)
    }
    
    greet();
    ```

    - [ ] a) Aparecerá un mensaje de error en la consola.
    - [ ] b) No aparecerá nada en la consola.
    - [ ] c) La cadena `"Hello, developer"` se registrará en la consola.
    - [x] d) La cadena `"Hello, Jessica"` se registrará en la consola. // ❎

16. **¿Qué pasa si intentas eliminar las llaves de una función normal?**

    - [ ] a) El programa se bloqueará y no volverá a iniciarse.
    - [ ] b) No pasará nada.
    - [x] c) Aparecerá un error de sintaxis. // ❎
    - [ ] d) Aparecerá un cuadro de alerta en la página con un mensaje de error.

17. **¿Cuál será el resultado del siguiente código?**

    ```js
    const sum = (num1, num2) => num1 + num2
    console.log(sum(0, 0) + 10);
    ```

    - [ ] a) No se registrará nada en la consola.
    - [x] b) Se registrará el número 10 en la consola. // ❎
    - [ ] c) Aparecerá un mensaje de error en la consola.
    - [ ] d) Se registrará el número 0 en la consola.

18. **¿Cuál será el resultado del siguiente código?**

    ```js
    const exampleFunction = (param1, param2) => param1 + param2;
    console.log(exampleFunction(3, "Something"));
    ```

    - [ ] a) `3 + "Something"`
    - [ ] b) `undefined`
    - [x] c) `"3Something"` // ❎
    - [ ] d) `null`

19. **¿Cuál será el resultado del siguiente código?**

    ```js
    const sum = (num1, num2) => num1 + num2
    console.log(sum(0, 0) + num2);
    ```

    - [ ] a) Se mostrará `undefined` en la consola.
    - [x] b) Un mensaje de error indicando que `num2` no está definido. // ❎
    - [ ] c) Un mensaje de error indicando que `num1` no está definido.
    - [ ] d) Se mostrará el número 0 en la consola

20. **¿Cuál será el resultado del siguiente código?**

    ```js
    const divideTwoNumbers = (num1, num2) => num1 / num2;
    console.log(divideTwoNumbers(3, 0));
    ```

    - [ ] a) `0`
    - [ ] b) `Error`
    - [x] c) `Infinity` // ❎
    - [ ] d) `null`
