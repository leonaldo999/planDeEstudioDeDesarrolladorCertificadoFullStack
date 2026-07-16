# Cuestionario sobre bucles en JavaScript

---

Para aprobar el cuestionario, debes responder correctamente al menos 18 de las 20 preguntas siguientes.

---

1. **¿Cuál de las siguientes opciones describe mejor la iteración?**

    - [ ] a) Es el proceso de enviar señales entre componentes para establecer una conexión.
    - [ ] b) Es una técnica para almacenar datos en ubicaciones consecutivas de la memoria.
    - [ ] c) Es el proceso de escribir código repetidamente hasta que funcione correctamente.
    - [x] d) Es el proceso de repetir un conjunto de instrucciones varias veces. // ❎

2. **¿Qué técnica se utiliza para las iteraciones en programación?**

    - [ ] a) Condicionales
    - [ ] b) Recursión
    - [x] c) Bucles // ❎
    - [ ] d) Compilación

3. **¿Cuál de los siguientes es un objeto iterable?**

    - [ ] a) Undefined
    - [ ] b) Boolean
    - [x] c) String // ❎
    - [ ] d) Number

4. **¿Cuál de las siguientes opciones no es un tipo de bucle que admite JavaScript?**

    - [ ] a) Bucle `for`
    - [ ] b) Bucle `if...else` // ❎
    - [x] c) Bucle `while`
    - [ ] d) Bucle `for...in`

5. **¿Cuál es el orden correcto para declarar un bucle `for`?**

    - [x] a) // ❎
           ```js
            for (initialization; condition; increment/decrement) {
              statement;
            }
           ```
    - [ ] b)
           ```js
            for (increment/decrement; condition; initialization) {
              statement;
            }
           ```
    - [ ] c)
           ```js
            for (initialization; increment/decrement; condition) {
              statement;
            }
           ```
    - [ ] d)
           ```js
            for (condition; increment/decrement; initialization) {
              statement;
            }
           ```

6. **¿Qué bucle ejecuta el bloque de código una vez, antes de verificar si la condición es verdadera, y seguirá ejecutándose mientras la condición siga siendo verdadera?**

    - [ ] a) Bucle `while`
    - [x] b) Bucle `do...while` // ❎
    - [ ] c) Bucle `for...in`
    - [ ] d) Bucle `for...of`

7. **¿Cuál de las siguientes opciones recorrerá los valores de un objeto iterable?**

    - [ ] a) Bucle `do...while`
    - [x] b) Bucle `for...of` // ❎
    - [ ] c) Bucle `for`
    - [ ] d) Bucle `for...in`

8. **¿Cuál de las siguientes opciones define mejor un bucle infinito?**

    - [ ] a) Un bucle que se detiene automáticamente después de un número fijo de iteraciones.
    - [ ] b) Un bucle que se ejecuta una vez y luego se detiene.
    - [ ] c) Un bucle que se ejecuta hasta que la condición se vuelve falsa.
    - [x] d) Un bucle cuya condición de terminación nunca se cumple o no existe. // ❎

9. **¿Cuántas veces se ejecutará el siguiente bucle?**

    ```js
    for (let i = 2; i < 10; i+=2) {  
      console.log(i);  
    }
    ```

    - [ ] a) `9`
    - [ ] b) `10`
    - [x] c) `4` // ❎
    - [ ] d) `5`

10. **¿Qué bucle es el mejor para iterar sobre objetos?**

    - [ ] a) Bucle `for...of`
    - [ ] b) Bucle `for`
    - [ ] c) Bucle `do...while`
    - [x] d) Bucle `for...in` // ❎

11. **¿Cuál es la diferencia entre el bucle `for...in` y el bucle `for...of`?**

    - [ ] a) Los bucles `for...in` crean nuevas propiedades, mientras que los bucles `for...of` modifican propiedades existentes.
    - [ ] b) Los bucles `for...in` solo se pueden usar con cadenas, mientras que los bucles `for...of` se pueden usar tanto con cadenas como con números.
    - [ ] d) El bucle `for...in` recorre los valores de las propiedades, mientras que el bucle `for...of` recorre los nombres de las propiedades (claves).
    - [x] c} El bucle `for...in` recorre los nombres de las propiedades (claves), mientras que el bucle `for...of` recorre los valores de las propiedades. // ❎

12. **¿Cuál de estas opciones provocaría un bucle infinito?**

    - [ ] a) La lógica de incremento/decremento.
    - [ ] b) Una condición de bucle que eventualmente devuelve falso.
    - [x] c) Una condición de bucle que siempre devuelve verdadero. // ❎
    - [ ] d) La inicialización de una variable.

13. **¿Qué instrucción se puede usar para salir del ciclo por completo?**

    - [ ] a) La instrucción `continue`.
    - [ ] b) La instrucción `label`.
    - [x] c) La instrucción `break`. // ❎
    - [ ] d) La instrucción `skip`.

14. **¿Qué instrucción se puede usar para saltarse la iteración actual y pasar a la siguiente?**

    - [ ] a) La instrucción `break`.
    - [x] b) La instrucción `continue`. // ❎
    - [ ] c) La instrucción `return`.
    - [ ] d) La instrucción `label`.

15. **¿Qué se muestra en la consola con el siguiente código?**

    ```js
    for (let i = 0; i < 25; i += 2) {
      if (i % 5 === 0) {
        continue;
      }
      if (i % 13 === 0) {
        break;
      }
      console.log(i);
    }
    ```

    - [ ] a) `0, 2, 4, 6, 8, 12, 14, 16, 18, 22, 24`
    - [ ] b) `2, 4, 6, 8, 12`
    - [ ] c) `0, 2, 4, 6, 8, 12`
    - [x] d) `2, 4, 6, 8, 12, 14, 16, 18, 22, 24` // ❎

16. **¿Qué mostraría en la consola el siguiente código?**

    ```js
    for (let i = 1; i < 6; i++) {
      if (i === 4) break;
      console.log(i);
    }
    ```

    - [ ] a) `1, 2, 3, 4, 5, 6`
    - [ ] b) `1, 2, 3, 4`
    - [ ] c) `1, 2, 3, 4, 5`
    - [x] d) `1, 2, 3` // ❎

17. **¿Qué se mostrará en la consola con el código que aparece a continuación?**

    ```js
    const shoppingList = { tomatoes: 4, apples: 10 };
    for (const item in shoppingList) {
      console.log(item);
    }
    ```

    - [ ] a) `tomatoes - 4`, `apples - 10`
    - [x] b) `tomatoes`, `apples` // ❎
    - [ ] c) `4`, `10`
    - [ ] d) `tomatoes:4`, `aplles:10`

18. **¿Cuál será la salida en la consola del código que aparece a continuación?**

    ```js
    for (let i = 2; i <= 13; i++) {
      if (i % 2 === 0) continue;
      console.log(i);
    }
    ```

    - [x] a) `3, 5, 7, 9, 11, 13` // ❎
    - [ ] b) `2, 4, 6, 8, 10, 12`
    - [ ] c) `1, 3, 5, 7, 9, 11`
    - [ ] d) `1, 3, 5, 7, 9, 11, 13`

19. **¿Qué se mostraría en la consola con el código que aparece a continuación?**

    ```js
    const fruits = ["Mango", "Pineapple", "Oranges"];
    for (const fruit of fruits) {
      console.log(fruit);
    }
    ```

    - [ ] a) `Pineapple`, `Oranges`, `Mango`
    - [ ] b) `0`, `1`, `2`
    - [ ] c) `Oranges`, `Pineapple`, `Mango`
    - [x] d) `Mango`, `Pineapple`, `Oranges` // ❎

20. **¿Cuántas veces mostrará el código siguiente la cadena `en el bucle`?**

    ```js
    let x = 0
    while (x < 5) {
      console.log("in the loop");
    }
    ```

    - [ ] a) 3 veces
    - [ ] b) 5 veces
    - [x] c) un sinnúmero de veces // ❎
    - [ ] d) 4 veces
