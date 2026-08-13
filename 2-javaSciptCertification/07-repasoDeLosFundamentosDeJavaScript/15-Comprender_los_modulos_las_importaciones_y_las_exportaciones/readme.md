# Comprender los módulos, las importaciones y las exportaciones

En este articulo, exploraremos cómo funcionan los módulos en JavaScript, así como las importaciones y exportaciones de funciones, objetos y variables entre diferentes archivos. Los módulos permiten organizar el código en partes reutilizables y mantener un código más limpio y mantenible.

---

## Tema 1: ¿Qué es un módulo en JavaScript y cómo puedes importar y exportar módulos en tu programa?

En JavaScript, un módulo es una unidad de código independiente que encapsula funciones, clases o variables relacionadas.

Piensa en un módulo como un bloque de construcción para tu aplicación, muy similar a un capítulo de un libro. Cada módulo se enfoca en una funcionalidad específica, lo que hace que tu código sea más organizado, fácil de mantener y reutilizable. Los módulos ayudan a evitar conflictos de nombres y te permiten estructurar tu aplicación en partes separadas e interconectadas.

El concepto de módulos en JavaScript ha evolucionado con el tiempo, pero el enfoque más utilizado y compatible es el sistema de módulos ES6 (ECMAScript 2015). Este sistema ofrece una forma estandarizada de definir y utilizar módulos en diferentes entornos de JavaScript.

Para crear un módulo, escribes tu código de JavaScript en un archivo independiente. Cualquier variable, función o clase que desees que esté disponible para otras partes de tu aplicación debe exportarse explícitamente. Puedes hacerlo utilizando la palabra clave `export`.

Por ejemplo, supongamos que tienes un archivo llamado `math.js` con algunas funciones matemáticas:

- **Example code**

  ```js
  export function add(a, b) {
      return a + b;
  }
  
  export function subtract(a, b) {
      return a - b;
  }
  
  const PI = 3.14159;
  export { PI };
  ```

En este ejemplo, estamos exportando dos funciones (`add` y `subtract`) y una constante (`PI`). Puedes exportar tantos elementos como necesites desde un solo módulo.

Para usar estos elementos exportados en otra parte de tu aplicación, debes importarlos. Esto se hace utilizando la palabra clave `import`.

Supongamos que quieres usar estas funciones matemáticas en un archivo llamado `app.js`:

- **Example code**

  ```js
  import { add, subtract, PI } from './math.js';

  console.log(add(5, 3));        // Outputs: 8
  console.log(subtract(10, 4));  // Outputs: 6
  console.log(PI);               // Outputs: 3.14159
  ```

Aquí estamos importando las funciones y la constante específicas que necesitamos del módulo `math.js`. La parte `'./math.js'` le indica a JavaScript dónde encontrar el archivo del módulo en relación con el archivo actual.

A veces, es posible que quieras importar todo lo que exporta un módulo. Puedes hacerlo utilizando la sintaxis del asterisco (`*`):

- **Example code**

  ```js
  import * as Math from './math.js';

  console.log(Math.add(5, 3));        // Outputs: 8
  console.log(Math.subtract(10, 4));  // Outputs: 6
  console.log(Math.PI);               // Outputs: 3.14159
  ```

En este caso, todas las exportaciones de `math.js` se importan como propiedades de un objeto llamado `Math`.

Otro patrón común es tener una exportación por defecto en un módulo. Esto se suele utilizar cuando un módulo exporta principalmente una sola función. Solo se puede tener una exportación por defecto por módulo.

Así es como se ve:

- **Example code**

  ```js
  // In math.js
  export default function multiply(a, b) {
      return a * b;
  }
  
  // In app.js
  import multiply from './math.js';
  
  console.log(multiply(4, 5));  // Outputs: 20
  ```

Ten en cuenta que, al importar una exportación predeterminada, no es necesario usar llaves y puedes darle el nombre que quieras a la importación.

Es importante señalar que, para usar módulos ES6 en el navegador, debes especificar el `type` como `module` en tu etiqueta `script`:

- **Example code**

  ```js
  <script type="module" src="app.js"></script>
  ```

Los módulos ofrecen una forma eficaz de organizar y estructurar tu código JavaScript. Te permiten dividir tu aplicación en partes más pequeñas y manejables, fomentan la reutilización del código y ayudan a mantener una separación clara de responsabilidades. A medida que desarrolles aplicaciones más grandes, descubrirás que los módulos se convierten en una herramienta esencial en tu conjunto de herramientas de desarrollo de JavaScript.

---

## Cuestionario 1

1. **¿Qué palabra clave se utiliza para que otros módulos puedan acceder a funciones, variables o clases?**

    - [ ] a) `import`
    - [x] b) `export` //correcto
    - [ ] c) `module`
    - [ ] d) `requiere`

2. **¿Cómo se importa una exportación predeterminada desde un módulo?**

    - [ ] a) `import { default } from './module.js';`
    - [ ] b) `import default from './module.js';`
    - [ ] c) `import * as default from './module.js';`
    - [x] d) `import anyName from './module.js';` //correcto

3. **¿Cuál es el propósito de usar módulos en JavaScript?**

    - [ ] a) Para que el código se ejecute más rápido.
    - [ ] b) Para reducir el tamaño de los archivos de la aplicación.
    - [x] c) Para organizar el código en partes manejables y reutilizables. //correcto
    - [ ] d) Para cifrar partes confidenciales del código.

[☝️](#comprender-los-módulos-las-importaciones-y-las-exportaciones)

---
