# Prueba de Math en JavaScript

Para aprobar el cuestionario, debes responder correctamente al menos 18 de las 20 preguntas siguientes.

1. **¿Qué significa NaN?**

   - [ ] a) `Null and Number`
   - [ ] b) `Not a Null`
   - [ ] c) `Numeric and Number`
   - [x] d) `Not a Number` // ❎

2. **¿Cuál de las siguientes opciones NO es un operador aritmético en JavaScript?**

   - [ ] a) `-`
   - [x] b) `??` // ❎
   - [ ] c) `+`
   - [ ] d) `*`

3. **¿Qué pasa si intentas dividir entre cero en JavaScript?**
  
   - [ ] a) JavaScript generará un error.
   - [x] b) JavaScript devolverá `Infinity`. // ❎
   - [ ] c) No pasará nada.
   - [ ] d) JavaScript devolverá 0.

4. **¿Cuál de las siguientes opciones es el uso correcto del operador de elevación a una potencia?**
  
   - [x] a) `2**3` // ❎
   - [ ] b) `2#3`
   - [ ] c) `2*3`
   - [ ] d) `2%3`

5. **¿Qué operador se debe utilizar para decrementar una variable en JavaScript?**

   - [ ] a) `++`
   - [ ] b) `**`
   - [x] c) `--` // ❎
   - [ ] d) `//`

6. **¿Cuál de las siguientes opciones NO es un operador bit a bit?**
  
   - [x] a) `>` // ❎
   - [ ] b) `&`
   - [ ] c) `|`
   - [ ] d) `^`

7. **¿Cuál de las siguientes opciones es el operador compuesto correcto para calcular el resto?**
  
   - [x] a) `%=` // ❎
   - [ ] b) `\=`
   - [ ] c) `//+`
   - [ ] d) `%%=`

8. **¿Cuál es la diferencia entre los operadores `==` y `===`?**

   - [ ] a) El operador `==` solo se puede usar con tipos primitivos, mientras que el operador `===` solo se usa para objetos.
   - [ ] b) No hay ninguna diferencia. El resultado de la comparación siempre será el mismo.
   - [x] c) El operador `==` solo compara valores, mientras que el operador `===` compara valores y tipos. // ❎
   - [ ] d) El operador `==` se usa para comprobar si el tipo de datos es el mismo, mientras que el operador `===` se usa para comprobar si los valores son iguales.

9. **¿Para qué se utiliza el operador unario más (`+`)?**

   - [ ] a) Se utiliza para invertir la representación binaria de un número.
   - [ ] b) Se utiliza para obtener el resto de una operación.
   - [ ] c) Se utiliza para decrementar un valor en uno.
   - [x] d) Se utiliza para convertir su operando en un número. // ❎

10. **¿Cuál de los siguientes métodos matemáticos redondea un valor al entero más cercano?**

    - [ ] a) `Math.trunc()`
    - [ ] b) `Math.min()`
    - [ ] c) `Math.max()`
    - [x] d) `Math.round()` // ❎

11. **¿Qué hace el método `Math.sqrt()`?**

    - [x] a) Este método devuelve la raíz cuadrada de un número. // ❎
    - [ ] b) Este método devuelve el cubo de un número.
    - [ ] c) Este método devuelve un número aleatorio en formato de punto flotante.
    - [ ] d) Este método devuelve el valor absoluto de un número.

12. **¿Cuál de las siguientes opciones NO es un método válido del objeto Math?**

    - [x] a) `Math.extend()` // ❎
    - [ ] b) `Math.pow()`
    - [ ] c) `Math.ceil()`
    - [ ] d) `Math.abs()`

13. **¿Cuál de las siguientes opciones devolverá `false`?**

    - [ ] a) `isNaN()`
    - [ ] b) `isNaN("Matt")`
    - [x] c) `isNaN(7)` // ❎
    - [ ] d) `NaN(undefined)`

14. **¿Qué hace el método `parseFloat()`?**

    - [x] a) Analiza un argumento de string y devuelve un número de punto flotante. // ❎
    - [ ] b) Analiza un argumento de string y devuelve un entero.
    - [ ] c) Analiza un argumento de string y realiza una operación bit a bit sobre él.
    - [ ] d) Analiza un argumento de string y devuelve false.

15. **¿Qué se registrará en la consola?**

    ```js
    let num = 5;
    console.log(++num);
    ```

    - [ ] a) `null`
    - [ ] b) `5`
    - [x] c) `6` // ❎
    - [ ] d) `error`

16. **¿Cuál sería el resultado del siguiente código?**

    ```js
    console.log(5 == '5');
    ```

    - [x] a) `true` // ❎
    - [ ] b) `undefined`
    - [ ] c) `false`
    - [ ] d) `null`

17. **¿Qué es la precedencia de los operadores?**

    - [ ] a) La precedencia de los operadores se utiliza para incrementar el valor en uno.
    - [x] b) La precedencia de los operadores determina el orden en que se evalúan las operaciones en una expresión. // ❎
    - [ ] c) La precedencia de los operadores se utiliza para comprobar si el valor de la izquierda es menor que el de la derecha.
    - [ ] d) La precedencia de los operadores se utiliza para elevar una variable a la potencia del número especificado y reasignar el resultado a la variable.

18. **¿Cuál de las siguientes opciones NO es un operador de comparación?**

    - [ ] a) `>=`
    - [x] b) `!>` // ❎
    - [ ] c) `>`
    - [ ] d) `<`

19. **¿Qué hace el operador de negación unario (`-`)?**

    - [ ] a) Aumenta el valor en uno.
    - [ ] b) Invierte el valor booleano de su operando.
    - [x] c) Niega el operando. // ❎
    - [ ] d) Disminuye el valor en uno.

20. **¿Cuál de las siguientes opciones es un ejemplo del uso del operador de coalescencia nula?**

    - [ ] a)
          ```js
          const userSettings = {
            theme: null,
            volume: 0,
            notifications: false,
          };
          userSettings.theme ** 'light';
          ```
    - [x] b) // ❎
          ```js
          const userSettings = {
            theme: null,
            volume: 0,
            notifications: false,
          };
          userSettings.theme ?? 'light';
          ```
    - [ ] c)
          ```js
          const userSettings = {
            theme: null,
            volume: 0,
            notifications: false,
          };
          userSettings.theme () 'light';
          ```
    - [ ] d)
          ```js
          const userSettings = {
            theme: null,
            volume: 0,
            notifications: false,
          };
          userSettings.theme \\ 'light';
          ```

---
