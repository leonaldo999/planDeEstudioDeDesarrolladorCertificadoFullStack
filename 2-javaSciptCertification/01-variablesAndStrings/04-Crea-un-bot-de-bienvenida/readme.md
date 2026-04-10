# Crea un bot de bienvenida

En este taller aprenderás a trabajar con los conceptos básicos de JavaScript creando un bot de bienvenida.

---

## Paso 1

En este primer paso, querrás mostrar un mensaje en la consola desde el bot de bienvenida.

Recuerda que en lecciones anteriores aprendiste sobre `console.log()` y las cadenas de caracteres.

Aquí tienes un resumen de cómo usar `console.log()` con cadenas de caracteres:

- **Example Code**
  
  ```js
  console.log("Hello, World!");
  ```

> > Añade una instrucción `console.log()` que muestre la cadena `"Hi there!"` en la consola. ¡No te olvides de poner comillas alrededor del mensaje!

- **Code**
  
  ```js
  console.log("Hi there!");
  ```

---

## Paso 2

Ahora deberías ver el primer mensaje del bot en la consola.

Es hora de añadir un segundo mensaje del bot.

> > Añade otra instrucción `console.log` para mostrar el mensaje `"I am excited to talk to you."` en la consola.

- **Code**
  
  ```js
  console.log("I am excited to talk to you.");
  ```

---

## Paso 3

En las lecciones anteriores, aprendiste sobre la palabra clave `let` y cómo declarar variables en JavaScript.

A continuación te recordamos cómo declarar una variable utilizando la palabra clave `let`:

- **Example Code**
  
  ```js
  let greeting;
  ```

> > Utiliza la palabra clave `let` para declarar una variable llamada `bot`.
---
>[!NOTE]
> Aquí estás utilizando `let` porque, más adelante en el taller, cambiarás el valor de la variable `bot`.

- **Code**
  
  ```js
  let bot;
  ```

---

## Paso 4

Ahora es el momento de asignar un valor a tu variable `bot`.

En lecciones anteriores, aprendiste a asignar valores a variables de esta manera:

- **Example Code**
  
  ```js
  variableName = "Here is the value";
  ```

Recuerda que lo que aparece a la derecha del operador de asignación `=` es el valor que estás asignando a la variable que se encuentra a la izquierda.

> > Asigna la cadena `"teacherBot"` a la variable `bot`.

- **Code**
  
  ```js
  bot = "teacherBot";
  ```

---

## Paso 5

Ahora es el momento de inicializar la variable `botLocation`.

Cuando necesites declarar variables con varias palabras, puedes utilizar la convención de nomenclatura «camelCase».

Al usar `camelCase`, la primera palabra se escribe íntegramente en minúsculas y la primera letra de cada palabra siguiente se escribe en mayúscula.

Aquí tienes un ejemplo:

- **Example Code**
  
  ```js
  let thisIsCamelCase = "Alice the camel is actually a horse.";
  ```

> > Declara y asigna la cadena `"the universe"` a la variable `botLocation` en la misma línea utilizando la palabra clave `let`.

- **Code**
  
  ```js
  let botLocation = "the universe";
  ```

---

## Paso 6

Ahora es el momento de añadir otro mensaje del bot.

> > Añade otra instrucción de `consola` al código que registre el mensaje `"Allow me to introduce myself."`.

- **Code**
  
  ```js
  console.log("Allow me to introduce myself.");
  ```

---

## Paso 7

Anteriormente, creaste las variables `bot` y `botLocation`. Ahora las utilizarás para mostrar nuevos mensajes en la consola.

En lecciones anteriores, aprendiste a trabajar con la concatenación de cadenas utilizando el operador `+` para unir cadenas de esta manera:

- **Example Code**
  
  ```js
  let firstName = "John";

  console.log("Hello, my name is " + firstName + ".");
  // result: "Hello, my name is John."
  ```

Recuerda que debes tener en cuenta los espacios al concatenar cadenas con variables.

> > Crea una variable llamada `botIntroduction`.
>
> > A continuación, utiliza la concatenación de cadenas con el operador `+` para unir la cadena `"My name is "` seguida de la variable `bot` y de un punto (`.`).
>
> > Asigna este valor a la variable `botIntroduction`.
>
> >Después, muestra el valor de la variable `botIntroduction` en la consola.

- **Code**
  
  ```js
  let botIntroduction = "My name is " + bot + ".";
  console.log(botIntroduction);
  ```

---

## Paso 8

El siguiente mensaje del bot se referirá a la ubicación del bot.

> > Crea una variable llamada `botLocationSentence`.
>
> > A continuación, utiliza la concatenación de cadenas con el operador `+` para unir la cadena `"I live in "` con la variable botLocation, seguida de un punto (.).
>
> > Asigna este valor a la variable `botLocationSentence`.
>
> > Después, registra el valor de `botLocationSentence` en la consola.

- **Code**
  
  ```js
  let botLocationSentence = "I live in " + botLocation + ".";
  console.log(botLocationSentence);
  ```

---

## Paso 9

En las lecciones anteriores, aprendiste a reasignar valores a variables de esta manera:

- **Example Code**
  
  ```js
  let name = "John";
  console.log(name); // "John"
  
  name = "Jane";
  console.log(name); // "Jane"
  ```

> > Utiliza la reasignación para asignar la cadena `"professorBot"` a la variable `bot`.

- **Code**
  
  ```js
  bot = "professorBot";
  ```

---

## Paso 10

Ahora es el momento de ver el nuevo valor del `bot`.

> > Empieza creando una nueva variable llamada `nicknameIntroduction`.
>
> > Utiliza la concatenación de cadenas para unir la cadena `"My nickname is "` con la variable del `bot`, seguida de un punto (`.`).
>
> > Asigna la cadena resultante a la variable `nicknameIntroduction`.
>
> > A continuación, registra el valor de `nicknameIntroduction` en la consola.

- **Code**
  
  ```js
  let nicknameIntroduction = "My nickname is " + bot + ".";
  console.log(nicknameIntroduction);
  ```

---

## Paso 11

Parece que el bot quiere cambiar su apodo.

> > Mediante la reasignación, asigna la cadena `"awesomeTeacherBot"` a la variable `bot`.

- **Code**
  
  ```js
  bot = "awesomeTeacherBot";
  ```

---

## Paso 12

Para ver el nuevo apodo del bot, tendrás que enviar un nuevo mensaje a la consola.

> > Crea una nueva variable llamada `newNicknameGreeting`.
>
> > Luego, usa la concatenación de cadenas para unir la cadena `"I love my nickname but I wish people would call me "` con la variable del `bot` seguida de un punto.
>
> > Asigna el resultado a la variable `newNicknameGreeting`.
>
> > A continuación, registra el valor de `newNicknameGreeting` en la consola.

- **Code**
  
  ```js
  let newNicknameGreeting = "I love my nickname but I wish people would call me " + bot + ".";
  console.log(newNicknameGreeting);
  ```

---

## Paso 13

Los últimos mensajes del bot se centrarán en su tema favorito.

> Empieza por crear una nueva variable llamada `favoriteSubject` y asígnale la cadena `"Computer Science"`.

- **Code**
  
  ```js
  let favoriteSubject = "Computer Science";
  ```

---

## Paso 14

> > A continuación, crea una variable llamada `favoriteSubjectSentence`.
>
> > Utiliza la concatenación de cadenas para unir la cadena `"My favorite subject is "` con la variable `favoriteSubject`, seguida de un punto.
>
> > Asigna el resultado a la variable `favoriteSubjectSentence`.
>
> > Después, muestra el valor de `favoriteSubjectSentence` en la consola.

- **Code**
  
  ```js
  let favoriteSubjectSentence = "My favorite subject is " + favoriteSubject + ".";
  console.log(favoriteSubjectSentence);
  ```

---

## Paso 15

> > En el último paso, registrarás en la consola el mensaje del bot: `"Well, it was nice to talk to you. Have a nice day!"`.

- **Code**
  
  ```js
  let favoriteSubjectSentence = "My favorite subject is " + favoriteSubject + ".";
  console.log(favoriteSubjectSentence);
  ```

---

**¡Y con esto, tu bot de bienvenida está listo!**
