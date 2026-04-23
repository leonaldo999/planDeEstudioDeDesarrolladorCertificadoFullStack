# Cuestionario sobre variables y tipos de datos en JavaScript

Para aprobar el cuestionario, debes responder correctamente al menos 18 de las 20 preguntas siguientes.

1. **¿Cuál de las siguientes opciones describe mejor a JavaScript?**

   - [ ] a) Un lenguaje de marcado utilizado para diseñar sitios web.
   - [x] b) Un lenguaje de programación utilizado para el desarrollo web. // ❎
   - [ ] c) Un lenguaje de programación del lado del servidor.
   - [ ] d) Un sistema de gestión de bases de datos.

2. **¿Cuál de las siguientes opciones NO es un tipo de datos de JavaScript?**

   - [ ] a) `Object`
   - [ ] b) `Number`
   - [ ] c) `Undefined`
   - [x] d) `Double` // ❎

3. **¿Cuál de las siguientes NO es una declaración válida de una variable en JavaScript?**
  
   - [ ] a) `const x = 0;`
   - [x] b) `public Int x;` // ❎
   - [ ] c) `let x;`
   - [ ] d) `var x;`

4. **¿Cuál de las siguientes opciones es una convención de nomenclatura habitual para las variables en JavaScript?**
  
   - [x] a) Camel case. // ❎
   - [ ] b) Lightning case.
   - [ ] c) JavaScript case.
   - [ ] d) Giraffe case.

5. **¿Cuál es la diferencia entre las declaraciones de variables `let` y `const` en JavaScript?**

   - [ ] a) `const` se puede reasignar y redeclarar. `let` no se puede reasignar ni redeclarar.
   - [ ] b) `const` se puede reasignar, pero no redeclarar. `let` se puede redeclarar, pero no reasignar.
   - [ ] c) `const` no se puede reasignar ni redeclarar. `let` se puede reasignar y redeclarar.
   - [x] d) `const` no se puede reasignar ni redeclarar. `let` se puede reasignar, pero no redeclarar. // ❎

6. **¿Por qué se considera que las cadenas son inmutables en JavaScript?**
  
   - [ ] a) No se pueden crear cadenas utilizando variables.
   - [ ] b) Las cadenas solo se pueden crear mediante literales.
   - [x] c) Una vez creada una cadena, no se pueden modificar sus caracteres directamente. // ❎
   - [ ] d) Se pueden modificar las cadenas, pero solo a través de variables globales.

7. **¿Cómo se imprime la cadena `Hello, world!` en la consola en JavaScript?**
  
   - [ ] a) `alert("Hello, world");`
   - [x] b) `console.log("Hello, world!");` // ❎
   - [ ] c) `print("Hello, world!")`
   - [ ] d) `System.out.println("Hello, world!");`

8. **¿Qué hace el código siguiente?**

    ```js
    let hello = "Hello";
    hello += " world";
    console.log(hello);
    ```

   - [ ] a) Muestra en la consola el número de caracteres de `Hello world`.
   - [x] b) Combina el valor actual de `hello` con la cadena `" world"`, lo reasigna a `hello` y lo muestra en la consola. // ❎
   - [ ] c) Combina `"Hello"` y `" world"` en una nueva cadena y la muestra, pero el valor de `hello` sigue siendo `"Hello"`.
   - [ ] d) Reasigna `" world"` a la variable `hello` y lo imprime en la consola.

9. **¿Qué carácter de JavaScript se utiliza para marcar el final de una instrucción?**

   - [x] a) `;` // ❎
   - [ ] b) `.`
   - [ ] c) `:`
   - [ ] d) `,`

10. **¿Cuál de las siguientes opciones es una sintaxis válida para un comentario de una sola línea en JavaScript?**

    - [ ] a) `-- This is a single line comment`
    - [ ] b) `/* This is a single line comment */`
    - [x] c) `// This is a single line comment` // ❎
    - [ ] d) `# This is a single line commen`

11. **El tipado dinámico en JavaScript significa que:**

    - [ ] a) Debes declarar el tipo de datos de una variable antes de usarla.
    - [x] b) JavaScript deduce el tipo basándose en el valor asignado a la variable. // ❎
    - [ ] c) JavaScript realiza una comprobación de tipos antes de la ejecución, lo que significa que los errores relacionados con los tipos se generarán antes de que se ejecute el código.
    - [ ] d) No puedes asignar un valor de un tipo de datos a una variable de otro tipo.

12. **¿Cuál de las siguientes opciones muestra el tipo de la variable `x` en la consola?**

    - [ ] a) `console.log(typeOf(x));`
    - [ ] b) `console.log(x.type);`
    - [x] c) `console.log(typeof x);` // ❎
    - [ ] d) `console.log(isNaN(x));`

13. **¿Cuál será el resultado de `console.log(typeof null);`?**

    - [ ] a) `"null"`
    - [ ] b) `"undefined"`
    - [x] c) `"object"` // ❎
    - [ ] d) `"NaN"`

14. **¿Cuál de las siguientes opciones es un comentario de varias líneas válido en JavaScript?**

    - [ ] a)
          ```js
          '''
          This is a
          multi-line
          comment
          '''
          ```
    - [x] b) // ❎
          ```js
          /*
          This is a
          multi-line
          comment
          */
          ```
    - [ ] c)
          ```js
          <!--
          This is a
          multi-line
          comment
          -->
          ```
    - [ ] d)
          ```js
          // This is a
          // multi-line
          // comment
          ```

15. **¿Cuál de las siguientes opciones declara una variable en JavaScript que no se puede modificar?**

    - [ ] a) `let x = 0;`
    - [x] b) `const x = 0;` // ❎
    - [ ] c) `var x = 0;`
    - [ ] d) `final x = 0;`

16. **¿Cuál de las siguientes opciones es un nombre de variable válido en JavaScript?**

    - [ ] a) `!!dogs`
    - [ ] b) `tart@n`
    - [ ] c) `4cats`
    - [x] d) `$number` // ❎

17. **¿Cuál de las siguientes opciones NO es un método válido para concatenar cadenas en JavaScript?**

    - [ ] a) `console.log(string1 + " " + string2);`
    - [ ] b) `console.log("string1 " + string2);`
    - [ ] c) `console.log(string1.concat(" ", string2));`
    - [x] d) `console.log(string1 string2);` // ❎

18. **¿Cuál de los siguientes nombres de variables utiliza correctamente el estilo camel case?**

    - [x] a) `aLongVariableName` // ❎
    - [ ] b) `alongvariableName`
    - [ ] c) `a_long_variable_name`
    - [ ] d) `ALongVariableName`

19. **¿Por qué es recomendable usar puntos y comas de forma explícita, aunque JavaScript cuente con la función de inserción automática de puntos y comas?**

    - [x] a) Para mejorar la legibilidad y la fiabilidad del código. // ❎
    - [ ] b) Para mantener la coherencia con otros lenguajes de programación.
    - [ ] c) Para facilitar la depuración y el seguimiento de errores.
    - [ ] d) Para aumentar la velocidad de ejecución del código.

20. **¿Cuál de las siguientes opciones NO es un tipo de datos de JavaScript?**

    - [x] a) `Float` // ❎
    - [ ] b) `Symbol`
    - [ ] c) `Boolean`
    - [ ] d) `Null`
