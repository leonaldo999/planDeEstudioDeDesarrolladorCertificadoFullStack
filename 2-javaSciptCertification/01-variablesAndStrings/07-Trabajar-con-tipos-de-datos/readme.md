# Trabajar con tipos de datos

En esta sección, aprenderás a trabajar con diferentes tipos de datos en JavaScript, como cadenas de texto (strings), números, booleanos, objetos y arrays. También aprenderás a realizar operaciones básicas con estos tipos de datos y cómo manipularlos para crear programas más complejos.

---

## Tema 1: ¿Qué es el tipado dinámico en JavaScript y en qué se diferencia de los lenguajes de tipado estático?

JavaScript es un lenguaje de tipado dinámico, lo que significa que no es necesario especificar el tipo de datos de una variable al declararla. En su lugar, el tipo se determina en función del valor que se le asigna a la variable mientras el programa se está ejecutando. Esto permite cambiar el tipo de una variable a lo largo del programa.

Veamos un ejemplo:

- **Example code**

  ```js
  let example = "Hello";
  example = 42;
  ```

En este ejemplo, tenemos una variable llamada `example` con el tipo de datos `string`. Sin embargo, luego le asignamos un valor `numérico`.

La flexibilidad del tipado dinámico hace que JavaScript sea más tolerante y fácil de manejar para la creación rápida de scripts, pero también puede generar errores que pueden ser más difíciles de detectar, especialmente a medida que el programa se vuelve más grande.

En lenguajes de tipado estático como C# o C++, debes declarar el tipo de datos de una variable al crearla, y ese tipo no puede cambiar.

Por ejemplo, si declaras una variable como `entero`, solo puedes asignarle valores enteros. Si intentas asignarle un tipo diferente, el programa generará un error.

Aquí hay un ejemplo en lenguaje C#:

- **Example code**

  ```js
  int data = 42; // data must always be an integer
  data = "Hello"; // This would cause an error in C#
  ```

La diferencia entre el tipado dinámico y el tipado estático radica en la flexibilidad frente a la seguridad del código. Los lenguajes de tipado dinámico ofrecen flexibilidad, pero a costa de posibles errores en tiempo de ejecución.

Los lenguajes de tipado estático imponen reglas más estrictas que pueden evitar ciertos errores, pero requieren más declaraciones previas y ofrecen menos flexibilidad a la hora de cambiar los tipos.

A continuación se muestra otro ejemplo de cómo crear una variable con un tipo establecido como `number` y luego cambiarlo para que sea de `string`:

- **Example code**

  ```js
  let data = 100;  // Initially a number
  data = "New data";  // Dynamically changes to a string
  ```

En un lenguaje de tipado estático, este tipo de cambio no estaría permitido, ya que el tipo de datos sería fijo.

En conclusión, el tipado dinámico de JavaScript permite que las variables cambien de tipo libremente, lo que ofrece flexibilidad, pero puede provocar errores inesperados durante la ejecución.

Los lenguajes de tipado estático, como Java, exigen especificar los tipos de las variables desde el principio, lo que ayuda a detectar errores antes de que se ejecute el programa, pero ofrece menos flexibilidad.

---

## Cuestionario 1

1. **¿Cuál de las siguientes opciones describe mejor el tipado dinámico en JavaScript?**

    - [ ] a) Debes declarar el tipo de la variable antes de asignarle un valor.
    - [ ] b) El tipo de datos de una variable se determina cuando se le asigna un valor.
    - [x] c) Las variables solo pueden contener un tipo de datos. //correcto
    - [ ] d) JavaScript no permite cambiar el tipo de las variables una vez declaradas.

2. **¿Cuál es la diferencia clave entre los lenguajes de tipado dinámico y los de tipado estático?**

    - [ ] a) Los lenguajes de tipado dinámico exigen declarar los tipos de las variables antes de asignarles valores.
    - [ ] b) Los lenguajes de tipado estático permiten cambiar los tipos de las variables en tiempo de ejecución.
    - [x] c) Los lenguajes de tipado estático imponen un tipo fijo para las variables. //correcto
    - [ ] d) Los lenguajes de tipado dinámico no permiten la reasignación de variables.

3. **En JavaScript, ¿qué sucede si declaras una variable y luego le asignas un valor de un tipo diferente?**

    - [ ] a) JavaScript generará un error en tiempo de compilación.
    - [x] b) La variable cambiará al nuevo tipo sin generar ningún error. //correcto
    - [ ] c) La variable conservará su tipo original e ignorará el nuevo valor.
    - [ ] d) El programa se bloqueará.

[☝️](#trabajar-con-tipos-de-datos)

---

## Tema 2: ¿Cómo funciona el operador `typeof` y qué es el error de `typeof null` en JavaScript?

El operador `typeof` en JavaScript es una herramienta sencilla pero potente que permite conocer el tipo de datos de una variable o un valor. Siempre devuelve una cadena que indica el tipo.

Veamos algunos ejemplos:

- **Example code**

  ```js
  let num = 42;
  console.log(typeof num); // "number"
  ```

En este primer ejemplo, hemos creado una variable llamada `num` y le hemos asignado el número 42. Cuando utilices el operador `typeof` con la variable llamada `num`, este devolverá la cadena `number`.

Aquí tienes otro ejemplo del uso del operador `typeof` con la variable llamada `isUserLoggedIn`:

- **Example code**

  ```js
  let isUserLoggedIn = true;
  console.log(typeof isUserLoggedIn); // "boolean"
  ```

Cuando utilizas el operador `typeof` con la variable `isUserLoggedIn`, este devolverá una cadena `boolean`, ya que a la variable se le asignó el valor booleano `true`.

El uso del operador `typeof` puede resultar especialmente útil cuando estás depurando o tratando de entender con qué tipo de datos estás trabajando en tu código.

Sin embargo, hay una peculiaridad bien conocida en JavaScript cuando se trata de `null`.

Veamos un ejemplo:

- **Example code**

  ```js
  let exampleVariable = null;
  console.log(typeof exampleVariable); // "object"
  ```

En este ejemplo, tenemos una variable llamada `exampleVariable` a la que le hemos asignado el valor `null`. Sin embargo, cuando utilizamos el operador `typeof`, este devuelve la cadena `object`.

Esto se considera generalmente un error en JavaScript, que se remonta a sus inicios. La razón de este comportamiento tiene su origen en la forma en que se diseñó originalmente JavaScript.

Cuando se implementó el lenguaje por primera vez, valores como `null` se representaban como un tipo especial de objeto, lo que daba lugar a este resultado inesperado.

Desafortunadamente, esto se ha convertido en parte del lenguaje y, aunque resulte confuso, es algo que debes tener en cuenta.

---

## Cuestionario 2

1. **¿Qué devuelve el operador `typeof` cuando se aplica a una cadena en JavaScript?**

    - [x] a) `"string"` //correcto
    - [ ] b) `"text"`
    - [ ] c) `"character"`
    - [ ] d) `"object"`

2. **¿Por qué se considera un error que `typeof null` devuelva null en JavaScript?**

    - [ ] a) Devuelve `"null"` en lugar de `"undefined"`.
    - [x] b) Devuelve `"object"` en lugar de `"null"`. //correcto
    - [ ] c) No funciona con `"null"`.
    - [ ] d) Devuelve un error.

3. **¿Qué devuelve el operador `typeof` cuando se aplica a un número en JavaScript?**

    - [x] a) `"number"` //correcto
    - [ ] b) `"integer"`
    - [ ] c) `"numeric"`
    - [ ] d) `"float"`

[☝️](#trabajar-con-tipos-de-datos)

---
