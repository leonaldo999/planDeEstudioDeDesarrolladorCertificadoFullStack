# Comprender la claridad del código

## Navegación

- [Comprender la claridad del código](#comprender-la-claridad-del-código)
  - [Navegación](#navegación)
  - [Tema 1: ¿Cuál es la función de los puntos y comas en JavaScript y en la programación en general?](#tema-1-cuál-es-la-función-de-los-puntos-y-comas-en-javascript-y-en-la-programación-en-general)
  - [Cuestionario 1](#cuestionario-1)
  - [Tema 2: ¿Qué son los comentarios en JavaScript y cuándo se deben usar?](#tema-2-qué-son-los-comentarios-en-javascript-y-cuándo-se-deben-usar)
  - [Cuestionario 2](#cuestionario-2)

---

En esta Sección, aprenderás a escribir código claro y legible. Esto es importante porque el código que escribes no solo lo leerás tú, sino también otros desarrolladores que puedan trabajar en el mismo proyecto en el futuro. Un código claro facilita la colaboración y el mantenimiento del proyecto a largo plazo.

---

## Tema 1: ¿Cuál es la función de los puntos y comas en JavaScript y en la programación en general?

En JavaScript, y en muchos otros lenguajes de programación, los puntos y comas ayudan a delimitar las sentencias y mejoran la legibilidad del código.

En JavaScript, se utiliza un punto y coma (`;`) para indicar el final de una instrucción.

Al igual que un punto (`.`) marca el final de una oración en español, un punto y coma indica el final de una línea de código ejecutable. Esto permite al motor de JavaScript distinguir entre comandos separados.

Por ejemplo:

- **Example code**

  ```js
  let variableOne = 5;  // Declare a variable and assign a value
  let variableTwo = 10; // Declare another variable and assign a value
  ```

En este código, los puntos y comas al final de cada línea marcan el final de cada instrucción. Sin ellos, el motor de JavaScript podría tener dificultades para interpretar dónde termina una instrucción y dónde comienza otra.

Los puntos y comas se utilizan principalmente para marcar el final de una instrucción. Esto ayuda al motor de JavaScript a distinguir las instrucciones individuales, lo cual es importante para una ejecución correcta.

- **Example code**

  ```js
  let a = 1;   // Statement ends here
  let b = 2;   // Another statement starts here
  ```

Aunque JavaScript cuenta con la función de inserción automática de punto y coma (ASI), que puede añadir puntos y comas automáticamente, incluirlos de forma explícita mejora la claridad del código y ayuda a evitar errores que puedan surgir debido a un comportamiento inesperado de la ASI.

Los puntos y comas se utilizan en muchos lenguajes de programación, como C, C++ y Java.

Los puntos y comas marcan el final de las sentencias o instrucciones, lo que ayuda al compilador o al intérprete a analizar el código correctamente. Un compilador traduce el código de un lenguaje de programación de alto nivel a código legible por la máquina, lo que crea un archivo ejecutable.

Al delimitar claramente las sentencias, los puntos y comas contribuyen a la legibilidad y al mantenimiento del código. Los puntos y comas ayudan a prevenir ambigüedades en la ejecución del código y garantizan que las sentencias terminen correctamente.

Los puntos y comas son una parte fundamental de JavaScript y de muchos otros lenguajes de programación.

Marcan el final de las sentencias, mejoran la legibilidad del código y ayudan a evitar errores relacionados con la inserción automática de puntos y comas.

Al comprender y utilizar los puntos y comas correctamente, puedes escribir código más confiable y fácil de mantener.

---

## Cuestionario 1

1. **¿Cuál es la función principal del punto y coma en JavaScript?**

    - [ ] a) Separar variables.
    - [x] b) Marcar el final de una instrucción. //correcto
    - [ ] c) Crear comentarios.
    - [ ] d) Indicar el inicio de una función.

2. **¿Qué puede pasar si se omiten los puntos y comas en el código JavaScript?**

    - [ ] a) El código no se ejecutará en absoluto.
    - [ ] b) El motor de JavaScript siempre añadirá los puntos y comas correctamente.
    - [x] c) Puede provocar un comportamiento inesperado debido a la inserción automática de puntos y comas. //correcto
    - [ ] d) Corregirá automáticamente los errores de sintaxis.

3. **¿Por qué es recomendable usar puntos y comas de forma explícita, aunque JavaScript cuente con la función de inserción automática de puntos y comas?**

    - [ ] a) Para aumentar la velocidad de ejecución del código.
    - [x] b) Para mejorar la legibilidad del código y evitar errores sutiles. //correcto
    - [ ] c) Para añadir comentarios al código.
    - [ ] d) Para cambiar la forma en que se declaran las variables.

[☝️](#comprender-la-claridad-del-código)

---

## Tema 2: ¿Qué son los comentarios en JavaScript y cuándo se deben usar?

Los comentarios en programación se utilizan para proporcionar contexto adicional al código o para dejar notas para uno mismo y para otros.

Los comentarios son líneas o bloques de texto que el motor de JavaScript ignora cuando se ejecuta el código. Su única finalidad es facilitar la lectura del código, ya sea para ti o para otra persona.

JavaScript ofrece dos formas de añadir comentarios a tu código: comentarios de una sola línea y comentarios de varias líneas.

Los comentarios de una sola línea se crean utilizando dos barras inclinadas (`//`). Aquí tienes un ejemplo:

- **Example code**

  ```js
  // I am a single line comment in JavaScript
  ```

Este tipo de comentario es ideal para explicaciones breves o aclaraciones.

Aquí tienes un ejemplo real extraído de los archivos de proyectos del plan de estudios de freeCodeCamp:

- **Example code**

  ```js
  // This is to allow English to build without having to download the i18n files.
  // It fails when trying to resolve the i18n-curriculum path if they don't exist.
  const curriculumLocale = process.env.CURRICULUM_LOCALE ?? 'english';
  const I18N_CURRICULUM_DIR = path.resolve(
    __dirname,
    curriculumLocale === 'english' ? '.' : 'i18n-curriculum/curriculum'
  );
  ```

No te preocupes por intentar entender qué hace realmente el código, ya que es más avanzado de lo que has aprendido hasta ahora. En su lugar, concéntrate en el comentario que dejó el desarrollador. Este comentario ofrece un contexto importante sobre por qué existe este código.

Los comentarios como este son importantes para quienes trabajan en equipo por dos razones:

- Los demás desarrolladores que trabajan en el proyecto entenderán el propósito de este código.

- Ayuda a evitar cambios o eliminaciones innecesarias sin consultar al equipo, lo que podría provocar errores o problemas.

Otro tipo de comentario son los comentarios de varias líneas. Esta es la sintaxis básica:

- **Example code**

  ```js
  /*
   I am a multiline comment.
   This is helpful for longer explanations.
  */
  ```

Los comentarios de varias líneas son útiles cuando necesitas escribir descripciones, explicaciones o notas más largas en tu código.

Echemos otro vistazo a los archivos de proyectos del plan de estudios de freeCodeCamp para ver cómo se pueden utilizar los comentarios de varias líneas en la práctica.

- **Example code**

  ```js
  /* Since there can be more than one way to complete a certification (using the
  legacy curriculum or the new one, for instance), we need a certification
  field to track which certification this belongs to. */
  const dupeCertifications = [
    {
      certification: 'responsive-web-design',
      dupe: '2022/responsive-web-design'
    }
  ];
  const hasDupe = dupeCertifications.find(
    cert => cert.dupe === meta.superBlock
  );
  ```

Al igual que antes, ignora todo el código JavaScript, ya que utiliza conceptos que aún no se han enseñado. En su lugar, concéntrate en el comentario que dejó el desarrollador.

Un desarrollador del equipo, o incluso un nuevo colaborador que trabaje en el proyecto, puede entender por qué está aquí este fragmento de código y tener el contexto completo antes de trabajar en esta parte del proyecto.

Aunque los comentarios son útiles en programación, es importante evitar el exceso de comentarios. No es necesario comentar cada línea de código, especialmente si el código es sencillo y se explica por sí mismo.

Aquí hay un ejemplo del uso de comentarios para explicar lo obvio:

- **Example code**

  ```js
  // This code uses the const keyword to create a new variable called price.
  // We are assigning the number 10 to the price variable.
  const price = 10;
  ```

En esta situación, no es necesario añadir comentarios aquí, ya que el código se explica por sí mismo. El objetivo es mejorar la legibilidad, no saturar el código con explicaciones innecesarias.

Si quieres añadir comentarios a tus proyectos personales mientras aprendes a programar, no hay problema. Pero una vez que empieces a trabajar en proyectos reales con otros desarrolladores, es importante no usar comentarios en código que se explique por sí mismo.

También es importante no usar comentarios para justificar código confuso, demasiado complicado o mal escrito. En esas situaciones, lo mejor es refactorizar, o cambiar, tu código para que otros desarrolladores entiendan mejor lo que está pasando.

Los comentarios son herramientas poderosas para documentar tu código y facilitar su comprensión. Debes usar comentarios para proporcionar contexto o dejar notas para ti mismo y para otros.

---

## Cuestionario 2

1. **¿Cuál de las siguientes opciones crea correctamente un comentario de una sola línea en JavaScript?**

    - [ ] a) `<!-- This is a comment -->`
    - [ ] b) `/* This is a comment */`
    - [x] c) `// This is a comment` //correcto
    - [ ] d) `# This is a comment`

2. **¿Cuándo se utiliza un comentario de varias líneas en lugar de uno de una sola línea?**

    - [ ] a) Cuando necesitas desactivar temporalmente una línea de código.
    - [ ] b) Cuando quieres escribir una breve explicación sobre una variable.
    - [x] c) Cuando necesitas explicar una sección extensa de código o proporcionar información detallada. //correcto
    - [ ] d) Cuando escribes comentarios HTML.

3. **¿Cuál de las siguientes opciones es una buena práctica al usar comentarios en tu código?**

    - [ ] a) Comentar cada línea de código.
    - [x] b) Usar comentarios para proporcionar contexto y dejar notas para ti mismo y para otros desarrolladores. //correcto
    - [ ] c) Usar comentarios para explicar incluso el código más sencillo.
    - [ ] d) Evitar por completo los comentarios para mantener el código limpio.

[☝️](#comprender-la-claridad-del-código)

---
