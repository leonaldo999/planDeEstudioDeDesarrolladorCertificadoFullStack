# Cuestionario sobre los fundamentos de JavaScript

---

Para aprobar el cuestionario, debes responder correctamente al menos 18 de las 20 preguntas siguientes.

---

1. **¿Cuál de estas opciones creará un objeto String?**

    - [ ] a)
           ```js
            String({ "Hello World" });
           ```
    - [x] b) // ❎
           ```js
            new String("Hello World");
           ```
    - [ ] c)
           ```js
            String("Hello World");
           ```
    - [ ] d)
           ```js
            "Hello World".toString();
           ```

2. **¿Cómo se puede convertir un objeto String en un string literal?**

    - [x] a) Con el método `.toString()`. // ❎
    - [ ] b) Con el método `.stringify()`.
    - [ ] c) Encerrando el objeto String entre comillas dobles.
    - [ ] d) Con el constructor String().

3. **¿Por qué se pueden usar métodos como `.length`, `.repeat()`, `.concat()` y `.slice()` en una cadena primitiva en JavaScript?**

    - [ ] a) JavaScript convierte temporalmente la cadena primitiva en un array.
    - [x] b) JavaScript envuelve temporalmente la cadena primitiva en un objeto String. // ❎
    - [ ] c) Las cadenas primitivas se almacenan internamente como objetos.
    - [ ] d) Esos métodos existen de forma nativa en las cadenas primitivas.

4. **¿Qué mostrará en la consola el siguiente código?**

    ```js
    let stringArray = [8, 9, 10].toString();
    console.log(stringArray);
    ```

    - [x] a) `"8,9,10"` // ❎
    - [ ] b) `[8,9,10]`
    - [ ] c) `"8", "9", "10"`
    - [ ] d) `["8", "9", "10"]`

5. **¿Cuál de las siguientes opciones devuelve un objeto `Number` a partir de la cadena `"123"`?**

    - [ ] a) `Object("123")`
    - [x] b) `new Number("123")` // ❎
    - [ ] c) `Number("123")`
    - [ ] d) `"123".toNumber()`

6. **¿Qué valores devolverán, respectivamente, `Number(true)` y `Number(false)`?**

    - [ ] a) `NaN` y `NaN`
    - [x] b) `1` y `0` // ❎
    - [ ] c) `true` y `false`
    - [ ] d) `undefined` y `undefined`

7. **¿Qué valores devolverán, respectivamente, `Number(undefined)` y `Number(null)`?**

    - [ ] a) `undefined` y `null`
    - [x] b) `NaN` y `0` // ❎
    - [ ] c) `NaN` y `NaN`
    - [ ] d) `0` y `0`

8. **¿Cuál de las siguientes opciones es el mejor nombre para una variable booleana que verifica si un usuario tiene permiso para hacer algo en tu sitio web?**

    - [ ] a) `getPermission`
    - [ ] b) `permission`
    - [ ] c) `handlePermission`
    - [x] d) `hasPermission` // ❎

9. **¿Cuál de las siguientes opciones es el mejor nombre para una función que se ejecuta cuando un usuario envía un formulario?**

    - [ ] a) `formSubmit`
    - [ ] b) `hasSubmitted`
    - [ ] c) `didSubmit`
    - [x] d) `handleSubmit5` // ❎

10. **¿Qué es un array disperso?**

    - [ ] a) Un array en el que uno o más índices tienen un valor `undefined`.
    - [x] b) Un array en el que a uno o más índices no se les ha asignado un valor. // ❎
    - [ ] c) Un array en el que uno o más índices tienen un valor `null`.
    - [ ] d) Un array en el que uno o más índices tienen como valor un literal de objeto vacío.

11. **¿En cuál de los siguientes ejemplos `arr` NO será una matriz dispersa?**

    - [x] a) // ❎
           ```js
            const arr = Array.from({ length: 5 });
           ```
    - [ ] b)
           ```js
            const arr = [1, 2, 3, , 5];
           ```
    - [ ] c)
           ```js
            const arr = new Array(5);
           ```
    - [ ] d)
           ```js
            const arr = [1, 2, 3];
            arr[4] = 4;
           ```

12. **¿Cuál es el objetivo principal de un linter?**

    - [x] a) Detectar posibles errores y problemas en el código. // ❎
    - [ ] b) Crear documentación para el código.
    - [ ] c) Optimizar el código para mejorar su rendimiento.
    - [ ] d) Formatear el código automáticamente.

13. **¿Cuál es una ventaja de usar un formateador en un código fuente?**

    - [ ] a) Convierten el código a un lenguaje de programación específico.
    - [ ] b) Detectan errores lógicos.
    - [x] c) Garantizan un estilo de código consistente. // ❎
    - [ ] d) Permiten a los desarrolladores compilar el código de manera más eficiente.

14. **En JavaScript, ¿quién o qué suele encargarse de asignar memoria a las variables?**

    - [ ] a) El sistema operativo.
    - [ ] b) El desarrollador.
    - [x] c) El motor de ejecución.  // ❎
    - [ ] d) El servidor.

15. **¿Qué se muestra en la consola con el siguiente código?**

    ```js
    function trackTotal(initialValue) {
      let total = initialValue;
      return function(increment) {
        total += increment;
        return total;
      };
    }
    
    let track = trackTotal(1);
    console.log(track(2));
    console.log(track(3));
    ```

    - [ ] a) `2`
             `5`
    - [ ] b) `5`
             `6`
    - [x] c) `3`
             `6` // ❎
    - [ ] d) `2`
             `3`

16. **¿Qué es el `hoisting` en JavaScript?**

    - [ ] a) El proceso de crear nuevas variables.
    - [ ] b) Mover automáticamente las declaraciones `var` al inicio del bloque.
    - [x] c) El proceso de mover las declaraciones de variables al inicio de su ámbito. // ❎
    - [ ] d) Mover los errores al inicio del código.

17. **¿Por qué se considera una mala práctica usar la palabra clave `var` en JavaScript moderno?**

    - [ ] a) Provocan errores de sintaxis.
    - [ ] b) Son más lentas que `let` y `const`.
    - [x] c) Se puede acceder a ellas fuera de su bloque. // ❎
    - [ ] d) No permiten la verificación de tipos.

18. **¿Cuál es el propósito de los módulos en JavaScript?**

    - [ ] a) Para que el código sea más difícil de entender.
    - [x] b) Para organizar el código en unidades reutilizables. // ❎
    - [ ] c) Para mejorar el rendimiento del código.
    - [ ] d) Para crear nuevos lenguajes de programación.

19. **¿Cómo se agrega un script `app.js` como módulo en un documento HTML?**

    - [x] a) // ❎
           ```html
            <script type="module" src="app.js"></script>
           ```
    - [ ] b)
           ```html
            <script src="app.js" module></script>
           ```
    - [ ] c)
           ```html
            <script src="app.js"></script>
           ```
    - [ ] d)
           ```html
            <script type="module/javascript" src="app.js"></script>
           ```

20. **¿Cuál de los siguientes ejemplos exporta la función `calculateSum` desde el módulo `utils.js` y la importa y utiliza correctamente en el archivo `app.js`?**

    - [ ] a)
           ```js
            // utils.js
            function calculateSum(a, b) {
              return a + b;
            }
            export default calculateSum;
            // app.js
            import * as utils from './utils.js';
            console.log(utils.calculateSum(2, 3));
           ```
    - [ ] b)
           ```js
            // utils.js
            export default function calculateSum(a, b) {
              return a + b;
            }
            // app.js
            import { calculateSum } from './utils.js';
            console.log(calculateSum(2, 3));
           ```
    - [ ] c)
           ```js
            // utils.js
            export function calculateSum(a, b) {
              return a + b;
            }
            // app.js
            import calculateSum from './utils.js';
            console.log(calculateSum(2, 3));
           ```
    - [x] d) // ❎
           ```js
            // utils.js
            export function calculateSum(a, b) {
              return a + b;
            }
            // app.js
            import { calculateSum } from './utils.js';
            console.log(calculateSum(2, 3));
           ```

---
