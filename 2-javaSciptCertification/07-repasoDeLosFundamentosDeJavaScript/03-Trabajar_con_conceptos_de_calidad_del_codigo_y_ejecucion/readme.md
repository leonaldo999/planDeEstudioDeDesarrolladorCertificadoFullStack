# Trabajar con conceptos de calidad del código y ejecución

En esta sección, exploraremos conceptos clave relacionados con la calidad del código y la ejecución en JavaScript. Estos conceptos son fundamentales para escribir código limpio, eficiente y mantenible.

---

## Tema 1: ¿Qué son los linters y los formateadores, y cómo pueden ayudarte a mantener la consistencia del código?

En el mundo del desarrollo de software, es importante mantener un código limpio, consistente y libre de errores. Aquí es donde entran en juego los _linters_ y los formateadores. Estas herramientas son esenciales para que los desarrolladores garanticen la calidad y la consistencia del código en todos los proyectos y equipos.

Comencemos con los _linters_. Un linter es una herramienta de análisis estático de código que señala errores de programación, bugs, errores de estilo y construcciones sospechosas. El término `lint` proviene de una utilidad de _Unix_ que examina el código fuente del lenguaje _C_.

Hoy en día existen _linters_ para la mayoría de los lenguajes de programación, incluido JavaScript. Los _linters_ ayudan de varias maneras. En primer lugar, detectan errores potenciales antes de la ejecución. Por ejemplo, un _linter_ podría señalar el uso de una variable no definida o una función que se invoca con un número incorrecto de argumentos. También hacen cumplir los estándares de codificación y las mejores prácticas. Esto puede incluir reglas sobre la sangría, el uso de punto y coma o la longitud máxima permitida de una línea. Por último, ayudan a mantener la coherencia en todo el código, especialmente cuando varios desarrolladores trabajan en el mismo proyecto.

Un _linter_ popular para JavaScript es `ESLint`. A continuación, se muestra un ejemplo sencillo de lo que `ESLint` podría señalar:

- **Example code**

  ```js
  function doSomething(x) {
    return x + z
  }
  ```

En este código, la variable `z` no está declarada, por lo que `ESLint` señalaría el error _`z` no está definida_. Además, a la última instrucción le falta un punto y coma, lo que `ESLint` también podría señalar en el editor de código.

Por otro lado, los formateadores son herramientas que formatean automáticamente tu código para que cumpla con una guía de estilo específica. Si bien los linters a menudo pueden corregir automáticamente algunos problemas, los formateadores están diseñados específicamente para reescribir tu código a fin de que se ajuste a un estilo predeterminado.

Los formateadores garantizan un estilo de código consistente en todo un proyecto o equipo, independientemente de las preferencias individuales de los desarrolladores. También ahorran tiempo y energía mental que, de otra manera, se dedicaría al formateo manual. Por último, pueden hacer que las revisiones de código sean más eficientes al eliminar las discusiones sobre el estilo del código.

Un formateador popular para JavaScript es `Prettier`. A continuación, se muestra un ejemplo de cómo `Prettier` podría formatear el código. Aquí está el código antes del formateo:

- **Example code**

  ```js
  function longFunction(
    argument1, 
    argument2,
    argument3
  ) {return argument1 + argument2 + argument3;}
  ```

Y luego, con un formato más atractivo:

- **Example code**

  ```js
  function longFunction(argument1, argument2, argument3) {
    return argument1 + argument2 + argument3;
  }
  ```

Tanto los _linters_ como los formateadores pueden integrarse en tu flujo de trabajo de desarrollo de diversas maneras. Pueden incluirse en tu proceso de compilación o agregarse como complementos a tu editor de texto o IDE, proporcionando retroalimentación en tiempo real mientras programas. El uso conjunto de _linters_ y formateadores puede mejorar significativamente la calidad y la consistencia del código. Por ejemplo, podrías usar `ESLint` para detectar posibles errores y hacer cumplir ciertas prácticas de programación, y luego usar `Prettier` para encargarse de todas las tareas de formateo.

Muchos equipos de desarrollo configuran estas herramientas como parte de la configuración de sus proyectos, a menudo con hooks de pre-commit que ejecutan el linter y el formateador antes de permitir que se envíe el código. Esto garantiza que todo el código en el repositorio cumpla con los estándares de calidad y estilo del equipo.

En resumen, los _linters_ y los formateadores son herramientas poderosas que ayudan a mantener la calidad del código, detectar posibles errores a tiempo y garantizar la coherencia en todas las bases de código. Al automatizar estos aspectos de la revisión de código, permiten a los desarrolladores enfocarse más en resolver problemas y menos en debatir sobre el estilo del código.

---

## Cuestionario 1

1. **¿Cuál es el objetivo principal de un linter?**

    - [ ] a) Formatear el código automáticamente.
    - [ ] b) Compilar el código.
    - [x] c) Señalar posibles errores y problemas de estilo. //correcto
    - [ ] d) Ejecutar pruebas unitarias.

2. **¿Cuál de las siguientes opciones es una ventaja de usar un formateador de código?**

    - [ ] a) Detecta errores en tiempo de ejecución.
    - [x] b) Garantiza un estilo de código consistente en todo el proyecto. //correcto
    - [ ] c) Mejora el rendimiento del código.
    - [ ] d) Agrega nuevas funciones al código base.

3. **¿En qué etapa del proceso de desarrollo podrías integrar un linter?**

    - [ ] a) Solo durante la configuración inicial del proyecto.

    - [ ] b) Solo durante la revisión final del código.

    - [x] c) Como parte del proceso de compilación, mediante un complemento para tu editor de texto o IDE, un hook de pre-commit antes de que el código se pueda enviar al repositorio, etc. //correcto

    - [ ] d) Después de que el código se haya implementado en producción.-+

[☝️](#trabajar-con-conceptos-de-calidad-del-código-y-ejecución)

---

## Tema 2: ¿Qué es la administración de memoria y cómo funciona en JavaScript?

La administración de memoria es un concepto esencial en la programación, pero puede resultar un poco confuso para los principiantes; así que vamos a explicarlo en términos sencillos.

Cuando ejecutas un programa, incluido el código JavaScript en un navegador web, este necesita memoria para almacenar toda la información con la que trabaja. Esto incluye variables, funciones, objetos; básicamente, todo lo que tu código crea y utiliza. La gestión de memoria es el proceso de controlar esta memoria, asignarla cuando sea necesario y liberarla cuando ya no se necesite. En algunos lenguajes de programación, los desarrolladores tienen que gestionar la memoria manualmente. Deben indicarle explícitamente a la computadora cuándo asignar memoria para nuevos elementos y cuándo liberar la memoria que ya no se necesita. Esto puede ser muy útil, pero también complicado, ya que olvidarse de liberar memoria puede provocar fugas de memoria.

JavaScript, sin embargo, utiliza una gestión automática de la memoria. Esto significa que JavaScript (más específicamente, el motor de JavaScript de tu navegador web) se encarga de la asignación y desasignación de memoria por ti. No tienes que liberar memoria explícitamente en tu código. A este proceso automático se le suele llamar recolección de basura.

Así es como funciona, en términos sencillos. La primera asignación ocurre cuando creas una variable, un objeto o una función en tu código JavaScript; la memoria se asigna automáticamente para almacenarlos. Luego, utilizas esta memoria asignada cuando trabajas con esas variables, objetos o funciones en tu código.

El motor de JavaScript cuenta con métodos ingeniosos para determinar cuándo algo en la memoria ya no es necesario. Por lo general, si tu programa ya no tiene forma de acceder a un dato o utilizarlo, se considera que ya no es necesario. Periódicamente, el recolector de basura se ejecuta, identifica la memoria que ya no se necesita y la libera, dejándola disponible para su uso futuro. Este proceso ocurre automáticamente, lo cual es genial porque significa que no tienes que preocuparte por administrar la memoria tú mismo.

Sin embargo, sigue siendo importante entender este concepto porque, a veces, puedes mantener accidentalmente referencias a elementos que ya no necesitas, lo que impide que el recolector de basura libere esa memoria. Por ejemplo:

- **Example code**

  ```js
  function createLargeArray() {
    let largeArray = new Array(1000000);
    return function() {
      console.log(largeArray.length);
    };
  }
  
  let printArrayLength = createLargeArray();
  printArrayLength();
  ```

En este código, incluso después de que `createLargeArray` termine de ejecutarse, `largeArray` no puede ser eliminado por el recolector de basura porque la función devuelta todavía tiene acceso a él. Esto es un cierre, y aunque los cierres son útiles, a veces pueden provocar un mayor uso de memoria de lo que cabría esperar. Aprenderás más sobre los cierres en lecciones futuras.

Como principiante, no necesitas preocuparte demasiado por las complejidades de la administración de memoria. La recolección automática de basura de JavaScript se encarga de casi todo por ti. Sin embargo, a medida que avances en tu aprendizaje de JavaScript, comprender estos conceptos te ayudará a escribir código más eficiente, especialmente para aplicaciones más grandes o cuando trabajes con recursos limitados.

Recuerda que las buenas prácticas de programación, como evitar las variables globales siempre que sea posible y estar atento a lo que encierran tus funciones, pueden ayudar al motor de JavaScript a administrar la memoria de manera más eficiente.

---

## Cuestionario 2

1. **En JavaScript, ¿quién es el principal responsable de administrar la memoria?**

    - [ ] a)  El desarrollador.
    - [x] b)  El motor de JavaScript. //correcto
    - [ ] c)  El sistema operativo.
    - [ ] d)  El navegador web.

2. **¿Cómo se llama el proceso mediante el cual JavaScript libera automáticamente la memoria que ya no se necesita?**

    - [ ] a) Asignación de memoria.
    - [x] b) Recolección de basura. //correcto
    - [ ] c) Fragmentación de memoria.
    - [ ] d) Desbordamiento de pila.

3. **¿Cuál de las siguientes opciones es una posible desventaja de la gestión automática de memoria de JavaScript?**

    - [ ] a)  Requiere escribir más código. //correcto
    - [x] b)  A veces puede mantener asignada memoria que ya no se necesita.
    - [ ] c)  Hace que el programa se ejecute más lento.
    - [ ] d)  Requiere la desasignación manual de memoria.

[☝️](#trabajar-con-conceptos-de-calidad-del-código-y-ejecución)

---

## Tema 3: ¿Qué son los cierres y cómo funcionan?

Los cierres son una de las características más poderosas y, a menudo, menos comprendidas de JavaScript. En esencia, un cierre es una función que tiene acceso a las variables de su ámbito léxico externo, incluso después de que la función externa haya finalizado. Esto puede parecer complejo, pero es un concepto fundamental que permite muchos patrones de programación avanzados en JavaScript.

Para entender los cierres, comencemos con un ejemplo:

- **Example code**

  ```js
  function outerFunction(x) {
      let y = 10;
      function innerFunction(){
          console.log(x + y);
      }
      return innerFunction;
  }
  
  let closure = outerFunction(5);
  console.log(closure()); // 15
  ```

En este ejemplo, `outerFunction` toma un parámetro `x` y define una variable local `y`. A continuación, define una función interna `innerFunction` que utiliza tanto `x` como `y`. Finalmente, devuelve `innerFunction`. Cuando llamamos a `outerFunction(5)`, esta devuelve `innerFunction`, a la que asignamos a la variable `closure`. Cuando más tarde llamamos a `closure()`, esta sigue teniendo acceso a `x` e `y` de `outerFunction`, aunque `outerFunction` ya haya terminado de ejecutarse. Esta es la esencia de un cierre.

La función interna mantiene una referencia a su entorno léxico externo, conservando el acceso a las variables de ese entorno incluso después de que la función externa haya finalizado.

Los cierres son particularmente útiles para crear variables y funciones privadas. Considera este ejemplo:

- **Example code**

  ```js
  function createCounter() {
      let count = 0;
      return function () {
          count++;
          return count;
      };
  }
  
  let counter = createCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2
  ```

En este caso, `createCounter` devuelve una función que incrementa y devuelve una variable llamada `count`. No se puede acceder directamente a la variable `count` desde fuera de `createCounter`, pero la función devuelta (nuestro cierre) sí tiene acceso a ella. Cada vez que llamamos a `counter()`, esta incrementa y devuelve el valor de `count`.

Los cierres también pueden capturar múltiples variables de su ámbito externo. Por ejemplo:

- **Example code**

  ```js
  function multiply(x) {
      return function (y) {
          return x * y;
      };
  }
  
  let double = multiply(2);
  console.log(double(5)); // 10
  ```

Aquí, la función interna captura el parámetro `x` de la función `multiply`. Cuando creamos la función `double` al llamar a `multiply(2)`, esta devuelve una función que siempre multiplica su argumento por `2`.

Un aspecto importante que hay que tener en cuenta sobre los cierres es que capturan variables por referencia, no por valor. Esto significa que, si el valor de una variable capturada cambia, el cierre verá el nuevo valor. Por ejemplo:

- **Example code**

  ```js
  function createIncrementer() {
      let count = 0;
      return function () {
          count++;
          console.log(count);
      };
  }
  
  let increment = createIncrementer();
  increment(); // 1
  increment(); // 2
  ```

Cada vez que llamamos a `increment`, esta funciona con la misma variable `count`, no con una copia de su valor inicial. Los cierres son una herramienta poderosa en JavaScript. A medida que sigas trabajando con JavaScript, descubrirás que comprender y utilizar los cierres de manera efectiva puede mejorar enormemente tu capacidad para escribir código limpio, eficiente y potente.

---

## Cuestionario 3

1. **¿Cuál será el resultado del siguiente código?**

    ```js
    function outer(x) {
        return function(y) {
            return x + y;
        };
    }
    
    let add5 = outer(5);
    console.log(add5(3));
    ```

    - [ ] a)  `5`
    - [ ] b)  `3`
    - [x] c)  `8` //correcto
    - [ ] d)  `undefined`

2. **¿Qué concepto ilustra el siguiente código?**

    ```js
    function createGreeter(greeting) {
        return function(name) {
            console.log(greeting + ", " + name);
        };
    }
    
    let sayHello = createGreeter("Hello");
    sayHello("Alice");
    ```

    - [ ] a) Elevación.
    - [x] b) Cierre. //correcto
    - [ ] c) Recursión.
    - [ ] d) Herencia por prototipos.

3. **¿Cuál será el resultado del siguiente código?**

    ```js
    function counter() {
        let count = 0;
        return function() {
            count++;
            return count;
        };
    }
    
    let increment = counter();
    console.log(increment());
    console.log(increment());
    console.log(increment());
    ```

    - [ ] a)
            1
            1
            1
    - [x] b) //correcto
            1
            2
            3
    - [ ] c)
            0
            1
            2
    - [ ] d)
            undefined
            undefined
            undefined

[☝️](#trabajar-con-conceptos-de-calidad-del-código-y-ejecución)

---
