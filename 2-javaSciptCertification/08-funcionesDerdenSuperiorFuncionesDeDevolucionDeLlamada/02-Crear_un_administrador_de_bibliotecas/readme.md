# Crear un administrador de bibliotecas

En las lecciones anteriores, aprendiste a trabajar con funciones de orden superior como `map`, `filter` y `reduce`.

En este taller, crearás una aplicación para administrar bibliotecas que te dará la oportunidad de practicar el uso de diferentes funciones de orden superior.

---

## Paso 1

> > Para empezar, crea una variable llamada `library` y asígnale un array vacío.

- **Code**

  ```js
  /*code*/
  const library = [];
  /*code*/
  ```

---

## Paso 2

> > Dentro del array `library`, crea un objeto con las siguientes propiedades y valores:

---

| Propiedad | Valor |
| --- | --- |
| `title` | `"Your Next Five Moves: Master the Art of Business Strategy"` |
| `author` | `"Patrick Bet-David and Greg Dinkin"` |
| `about` | `"A book on how to plan ahead"` |
| `pages` | `320` |

---

- **Code**

  ```js
  const library = [
    /*code*/
    {
      title: "Your Next Five Moves: Master the Art of Business Strategy",
      author: "Patrick Bet-David and Greg Dinkin",
      about: "A book on how to plan ahead",
      pages: 320
    }
    /*code*/
  ];
  ```

---

## Paso 3

> > Crea otro objeto dentro del array `library` con las siguientes propiedades y valores:

---

| Propiedad | Valor |
| --- | --- |
| `title` | `"Atomic Habits"` |
| `author` | `"James Clear"` |
| `about` | `"A practical book about discarding bad habits and building good ones"` |
| `pages` | `320` |

---

- **Code**

  ```js
  const library = [
    {
      title: "Your Next Five Moves: Master the Art of Business Strategy",
      author: "Patrick Bet-David and Greg Dinkin",
      about: "A book on how to plan ahead",
      pages: 320
    },
    /*code*/
    {
      title: "Atomic Habits",
      author: "James Clear",
      about: "A practical book about discarding bad habits and building good ones",
      pages: 320,
    }
    /*code*/
  ];
  ```

---

## Paso 4

**El resto de los objetos que representan los libros ya se han completado por ti.**

---

- **Code Los objetos**

  ```js
  const library = [
    {
      title: 'Your Next Five Moves: Master the Art of Business Strategy',
      author: 'Patrick Bet-David and Greg Dinkin',
      about: 'A book on how to plan ahead',
      pages: 320,
    },
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      about: 'A practical book about discarding bad habits and building good ones',
      pages: 320,
    },
    {
      title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
      author: 'Patrick Bet-David',
      about:
        "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
      pages: 304,
    },
    {
      title: 'The Embedded Entrepreneur',
      author: 'Arvid Kahl',
      about: 'A book focusing on how to build an audience-driven business',
      pages: 308,
    },
    {
      title: 'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
      author: 'Jon Gordon',
      about: 'A book about effective ways to lead a coffee bean lifestyle',
      pages: 256,
    },
    {
      title: 'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
      author: 'Jeff DeGraff and Staney DeGraff',
      about: 'A book on how to develop creativity and  innovation skills',
      pages: 168,
    },
    {
      title: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki and Sharon Lechter',
      about: 'A book about financial literacy, financial independence, and building wealth. ',
      pages: 336,
    },
    {
      title: 'Zero to Sold',
      author: 'Arvid Kahl',
      about: 'A book on how to bootstrap a business',
      pages: 500,
    },
  ];
  ```

---

Ahora sería un buen momento para empezar a trabajar en la visualización de la información de los libros en la consola. En los siguientes pasos, aprenderás a utilizar el método `map()` para lograr este objetivo.

> > Comienza registrando el mensaje `"Books in the Library:\n"` en la consola. Aquí se agrega el carácter de nueva línea para crear un salto de línea entre este mensaje y la lista de libros.

- **Code**

  ```js
  const library = [
    /* Los objetos */
  ];
    /*code*/
    console.log("Books in the Library:\n");
    /*code*/
  ```

---

## Paso 5

> > A continuación, crea una función llamada `getBookInformation` con un parámetro. Este parámetro representará el array de libros cuando se llame a la función. Podrías llamar al parámetro `catalog`.

- **Code**

  ```js
  const library = [
    /* Los objetos */
  ];
    console.log("Books in the Library:\n");
    /*code*/
    function getBookInformation(catalog) {}
    /*code*/
  ```

---

## Paso 6

En lecciones anteriores, aprendiste sobre el método `map()`, que crea un nuevo array al aplicar una función determinada a cada elemento del array original.

Aquí tienes un ejemplo:

- **Example Code**

  ```js
  const developers = [
    { name: "Alice", city: "New York", title: "Front-End Developer" },
    { name: "Bob", city: "San Francisco", title: "Back-End Developer" }
  ];
  
  console.log(developers.map(dev => dev.name));
  // ["Alice", "Bob"]
  ```

---

En este ejemplo, `dev` representa cada objeto del array `developers`. Luego, se usa la notación de punto para obtener el `name` del objeto. Por último, el resultado será un nuevo array de nombres.

> > Dentro de la función `getBookInformation`, usa el método `map()` en el parámetro `catalog` para _return_ un nuevo array que contenga únicamente los títulos de los libros. Consulta el ejemplo si necesitas ayuda.

- **Code**

  ```js
  const library = [
    /* Los objetos */
  ];
    console.log("Books in the Library:\n");
    function getBookInformation(catalog) {
      /*code*/
      return catalog.map(book => book.title);
      /*code*/
    }
  ```

---

## Paso 7

Ahora es momento de ver cómo se verá el resultado en la consola.

> > Debajo de tu función `getBookInformation`, agrega un `console.log()` y pásale una llamada a la función `getBookInformation()` con `library` como argumento.

_Si lo hiciste correctamente, deberías ver una lista de títulos de libros en la consola._

- **Code**

  ```js
  const library = [
    /* Los objetos */
  ];
  console.log("Books in the Library:\n");
  function getBookInformation(catalog) {
    return catalog.map(book => book.title);
  }
  /*code*/
  console.log(getBookInformation(library));
  /*code*/
  ```

---

## Paso 8

La lista de títulos de libros está bien, pero sería bueno mostrar el `title` y el `author` de cada libro de esta manera:

- **Example Code**

  ```js
  [ 
    "Your Next Five Moves: Master the Art of Business Strategy by Patrick Bet-David and Greg Dinkin",
    "Atomic Habits by James Clear",
    "Choose Your Enemies Wisely: Business Planning for the Audacious Few by Patrick Bet-David",
    ...
  ]
  ```

---

> > Actualiza el uso del método `map()` para que devuelva, en su lugar, una lista de cadenas con este formato: `TITLE by AUTHOR`.

_Para lograr este resultado, deberás utilizar literales de plantilla o la concatenación de cadenas con el operador `+`._

- **Code**

  ```js
  const library = [
    /* Los objetos */
  ];
  console.log("Books in the Library:\n");
  function getBookInformation(catalog) {
    /*code*/
    return catalog.map(book => book.title + " by " + book.author);
    /*code*/
  }
  console.log(getBookInformation(library));
  ```

---

## Paso 9

Aunque el array de resultados funciona, el resultado final deseado debería ser una cadena que enumere todos los libros con su título y autor.

Aquí es donde entra en juego el método `join()`. En lecciones anteriores, aprendiste que el método `join()` se utiliza para devolver una nueva cadena que contiene todos los elementos del array concatenados en una sola cadena, con un separador específico entre cada elemento.

A continuación, un repaso:

- **Example Code**

  ```js
  const developers = ["Naomi", "Tom", "Jessica"];

  const teamList = developers.join("\n");
  console.log(teamList); 
  // Naomi
  // Tom
  // Jessica
  ```

---

En este caso, el separador es `\n`, que representa el carácter de salto de línea.

> > Combina el método `join()` con un `\n` como separador y el método `map()`. Ahora deberías ver una cadena en la consola en lugar del array de resultados.

- **Code**

  ```js
  const library = [
    /* Los objetos */
  ];
  console.log("Books in the Library:\n");
  function getBookInformation(catalog) {
    /*code*/
   return catalog.map(book => `${book.title} by ${book.author}`).join("\n");
    /*code*/
  }
  console.log(getBookInformation(library));
  ```

---

## Paso 10

En la siguiente parte del taller, te enfocarás en mostrar una lista de resúmenes de libros en la consola.

> > Comienza registrando el mensaje `"\nList of book summaries:\n"` en la consola.

- **Code**

  ```js
  const library = [
    /* Los objetos */
  ];
  console.log("Books in the Library:\n");
  function getBookInformation(catalog) {
   return catalog.map(book => `${book.title} by ${book.author}`).join("\n");
  }
  console.log(getBookInformation(library));
  /*code*/
  console.log("\nList of book summaries:\n");
  /*code*/
  ```

---

## Paso 11

Para obtener una lista de resúmenes de libros, puedes usar la propiedad `about` de cada libro.

> > Crea una función `getBookSummaries` con un solo parámetro, que acepte un array con objetos de libro.
>
> > La función `getBookSummaries` debe devolver un array de cadenas que representen el resumen de cada libro.

- **Code**

  ```js
  const library = [
    /* Los objetos */
  ];
  console.log("Books in the Library:\n");
  function getBookInformation(catalog) {
   return catalog.map(book => `${book.title} by ${book.author}`).join("\n");
  }
  console.log(getBookInformation(library));
  console.log("\nList of book summaries:\n");
  /*code*/
  function getBookSummaries(catalog) {
    return catalog.map((book) => book.about);
  }
  /*code*/
  ```

---

## Paso 12

Al igual que en un paso anterior, el resultado deseado se vería mejor como una cadena en lugar de un array.

Encadena el método `join()` a tu método `map()` existente y pasa `"\n"` como separador al método `join()`.

Luego, debajo de tu función `getBookSummaries`, agrega un `console.log()`. La instrucción del `console` debe llamar a la función `getBookSummaries` con `library` como argumento.

Ahora, deberías ver una cadena como resultado en la consola.

- **Code**

  ```js
  const library = [
    /* Los objetos */
  ];
  console.log("Books in the Library:\n");
  function getBookInformation(catalog) {
   return catalog.map(book => `${book.title} by ${book.author}`).join("\n");
  }
  console.log(getBookInformation(library));
  console.log("\nList of book summaries:\n");
  /*code*/
  function getBookSummaries(catalog) {
    return catalog.map((book) => book.about).join("\n");
  }
  console.log(getBookSummaries(library));
  /*code*/
  ```

---

## Paso 13

_En esta siguiente parte del taller, aprenderás a mostrar una lista de libros por autor._

> > Comienza registrando el mensaje `"\nList of books by Arvid Kahl:\n"` en la consola.

- **Code**

  ```js
  const library = [
    /* Los objetos */
  ];
  console.log("Books in the Library:\n");
  function getBookInformation(catalog) {
   return catalog.map(book => `${book.title} by ${book.author}`).join("\n");
  }
  console.log(getBookInformation(library));
  console.log("\nList of book summaries:\n");
  function getBookSummaries(catalog) {
    return catalog.map((book) => book.about).join("\n");
  }
  console.log(getBookSummaries(library));
  /*code*/
  console.log("\nList of books by Arvid Kahl:\n");
  /*code*/
  ```

---

## Paso 14

En lecciones anteriores, aprendiste a utilizar el método `filter()`, que sirve para devolver un nuevo array con los resultados filtrados.

Aquí tienes un ejemplo:

- **Example Code**

  ```js
  const developers = [
    { name: "Alice", city: "New York", age: 30 },
    { name: "Bob", city: "San Francisco", age: 25 },
    { name: "Charlie", city: "New York", age: 35 },
    { name: "Diana", city: "Chicago", age: 28 }
  ];
  
  const newYorkCityDevelopers = developers.filter(dev => dev.city === "New York");
  
  console.log(newYorkCityDevelopers);
  /*
  [
    { name: "Alice", city: "New York", age: 30 },
    { name: "Charlie", city: "New York", age: 35 }
  ]
  */
  ```

---

> > Crea una función `getBooksByAuthor` con dos parámetros: un array con objetos de libro y una cadena con el nombre del autor.
>
> > La función debe devolver un array que contenga los libros de un autor en particular.

- **Code**

  ```js
  const library = [
    /* Los objetos */
  ];
  console.log("Books in the Library:\n");
  function getBookInformation(catalog) {
   return catalog.map(book => `${book.title} by ${book.author}`).join("\n");
  }
  console.log(getBookInformation(library));
  console.log("\nList of book summaries:\n");
  function getBookSummaries(catalog) {
    return catalog.map((book) => book.about).join("\n");
  }
  console.log(getBookSummaries(library));
  console.log("\nList of books by Arvid Kahl:\n");
  /*code*/
  function getBooksByAuthor(catalog, author) {
    return catalog.filter((book) => book.author === author);
  }
  /*code*/
  ```

---

## Paso 15

Ahora es el momento de probar tu función.

> > Agrega un `console.log()` debajo de tu función `getBooksByAuthor()`.
>
> > Dentro del `console.log()`, llama a la función `getBooksByAuthor()` con `library` y `"Arvid Kahl"` como argumentos.

Ahora deberías ver todos los libros de ese autor en particular en la consola.

- **Code**

  ```js
  const library = [
    /* Los objetos */
  ];
  console.log("Books in the Library:\n");
  function getBookInformation(catalog) {
   return catalog.map(book => `${book.title} by ${book.author}`).join("\n");
  }
  console.log(getBookInformation(library));
  console.log("\nList of book summaries:\n");
  function getBookSummaries(catalog) {
    return catalog.map((book) => book.about).join("\n");
  }
  console.log(getBookSummaries(library));
  console.log("\nList of books by Arvid Kahl:\n");
  function getBooksByAuthor(catalog, author) {
    return catalog.filter((book) => book.author === author);
  }
  /*code*/
  console.log(getBooksByAuthor(library, "Arvid Kahl"));
  /*code*/
  ```

---

## Paso 16

Sería bueno probar nuestra función `getBooksByAuthor` con otro autor.

Empieza por registrar el mensaje `"\nList of books by James Clear:\n"` en la consola.

Debajo de ese `console.log()`, agrega otro `console.log()`. Dentro de ese `console.log()`, llama a la función `getBooksByAuthor()` con `library` y `"James Clear"` como argumentos.

Ahora, deberías ver todos los libros de ese autor en particular en la consola.

- **Code**

  ```js
  const library = [
    /* Los objetos */
  ];
  console.log("Books in the Library:\n");
  function getBookInformation(catalog) {
   return catalog.map(book => `${book.title} by ${book.author}`).join("\n");
  }
  console.log(getBookInformation(library));
  console.log("\nList of book summaries:\n");
  function getBookSummaries(catalog) {
    return catalog.map((book) => book.about).join("\n");
  }
  console.log(getBookSummaries(library));
  console.log("\nList of books by Arvid Kahl:\n");
  function getBooksByAuthor(catalog, author) {
    return catalog.filter((book) => book.author === author);
  }
  console.log(getBooksByAuthor(library, "Arvid Kahl"));
  /*code*/
  console.log("\nList of books by James Clear:\n");
  console.log(getBooksByAuthor(library, "James Clear"));
  /*code*/
  ```

---

## Paso 17

En la última parte del taller, aprenderás a obtener el número total de páginas de todos los libros de la biblioteca.

> > Comienza por escribir en la consola el mensaje `"\nTotal number of pages for all library books:\n"`.

- **Code**

  ```js
  const library = [
    /* Los objetos */
  ];
  console.log("Books in the Library:\n");
  function getBookInformation(catalog) {
   return catalog.map(book => `${book.title} by ${book.author}`).join("\n");
  }
  console.log(getBookInformation(library));
  console.log("\nList of book summaries:\n");
  function getBookSummaries(catalog) {
    return catalog.map((book) => book.about).join("\n");
  }
  console.log(getBookSummaries(library));
  console.log("\nList of books by Arvid Kahl:\n");
  function getBooksByAuthor(catalog, author) {
    return catalog.filter((book) => book.author === author);
  }
  console.log(getBooksByAuthor(library, "Arvid Kahl"));
  console.log("\nList of books by James Clear:\n");
  console.log(getBooksByAuthor(library, "James Clear"));
  /*code*/
  console.log("\nTotal number of pages for all library books:\n");
  /*code*/
  ```

---

## Paso 18

En el último paso del taller, repasarás cómo trabajar con el método `reduce()`. Este método se utiliza para procesar un array y condensarlo en un solo valor.

Aquí tienes un ejemplo:

- **Example Code**

  ```js
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  
  console.log(sum); // 15
  ```

---

En el siguiente ejemplo, la función reductora toma `acc` (que comienza en 0, tal como lo especifica el segundo argumento de `reduce`) y le suma cada número. Esto devolverá una suma de `15`.

> > Crea una función `getTotalPages` con un solo parámetro, que acepte un array con objetos de tipo libro. La función debe devolver el número `total` de páginas de los `libros` del array que se le pase a la función.
>
> > Por último, agrega un `console.log(getTotalPages(library))` debajo de tu función `getTotalPages` para ver el resultado.

- **Code**

  ```js
  const library = [
    /* Los objetos */
  ];
  console.log("Books in the Library:\n");
  function getBookInformation(catalog) {
   return catalog.map(book => `${book.title} by ${book.author}`).join("\n");
  }
  console.log(getBookInformation(library));
  console.log("\nList of book summaries:\n");
  function getBookSummaries(catalog) {
    return catalog.map((book) => book.about).join("\n");
  }
  console.log(getBookSummaries(library));
  console.log("\nList of books by Arvid Kahl:\n");
  function getBooksByAuthor(catalog, author) {
    return catalog.filter((book) => book.author === author);
  }
  console.log(getBooksByAuthor(library, "Arvid Kahl"));
  console.log("\nList of books by James Clear:\n");
  console.log(getBooksByAuthor(library, "James Clear"));
  console.log("\nTotal number of pages for all library books:\n");
  /*code*/
  function getTotalPages(catalog) {
    return catalog.reduce((total, book) => total + book.pages, 0);
  }
  console.log(getTotalPages(library))
  /*code*/
  ```

---

**¡Con esto, tu taller sobre el administrador de bibliotecas ha terminado!**
