# Crear un catálogo de la biblioteca del patrimonio

En este taller, crearás un sistema de catálogo para una biblioteca patrimonial. Analizarás datos brutos de libros, buscarás y agruparás entradas, validarás la calidad de los datos y exportarás los resultados a diferentes formatos.

## Paso 1

Cada ficha del catálogo se almacena como un solo string con el formato `"Title | Author | Year | Location"`, con los campos separados por el carácter de barra vertical (`|`).

Utilizarás un array de estos strings a lo largo del taller para crear y probar tus funciones del catálogo.
> > Crea un array llamada `rawCatalogCards` y agrégale los siguientes dos strings:

- **Example Code**

  ```js
  "From a Buick 8 | King, Stephen | 2002 | Shelf K7",
  "The Shining | King, Stephen | 1977 | Shelf K1"
  ```

---

- **Code**

  ```js
  const rawCatalogCards = [
    "From a Buick 8 | King, Stephen | 2002 | Shelf K7",
    "The Shining | King, Stephen | 1977 | Shelf K1"
  ];
  ```

---

## Paso 2

Se han añadido el resto de las fichas del catálogo. Fíjate en las tres entradas que aparecen al final y que tienen campos vacíos; te ocuparás de ellas en un paso posterior.

> > La función `parseCard` toma un string de texto sin formato del catálogo y devuelve un objeto estructurado con cuatro propiedades: `title`, `author`, `year` y `location`.
> > Por ahora, crea una función llamada `parseCard` con un parámetro llamado `rawString`.

- **Code**

  ```js
  const rawCatalogCards = [
    "From a Buick 8 | King, Stephen | 2002 | Shelf K7",
    "The Shining | King, Stephen | 1977 | Shelf K1"
    "The Stand | King, Stephen | 1978 | Shelf K2",
    "It | King, Stephen | 1986 | Shelf K3",
    "Misery | King, Stephen | 1987 | Shelf K4",
    "Do Androids Dream of Electric Sheep? | Dick, Philip K. | 1968 | Shelf D5",
    "I, Robot | Asimov, Isaac | 1950 | Shelf A8",
    "Foundation | Asimov, Isaac | 1951 | Shelf A9",
    "Dune | Herbert, Frank | 1965 | Shelf H3",
    "Neuromancer | Gibson, William | 1984 | Shelf G8",
    "Snow Crash | Stephenson, Neal | 1992 | Shelf S6",
    "The Martian | Weir, Andy | 2011 | Shelf W5",
    "Ender's Game | Card, Orson Scott | 1985 | Shelf C2",
    "The Hitchhiker's Guide to the Galaxy | Adams, Douglas | 1979 | Shelf A1",
    "Ready Player One | Cline, Ernest | 2011 | Shelf C7",
    "The Dark Tower: The Gunslinger | King, Stephen | 1982 | Shelf K5",
    // edge cases: missing data
    "Unknown Title |  | 1975 | Shelf X1",
    "Mysterious Manuscript | Unknown Author |  | Shelf Z9",
    "Ancient Scroll | Anonymous | 850 | ",
  ];
  /* code */
  function parseCard(rawString) {}
  /* code */
  ```

---

## Paso 3

La función `parseCard` tomará un string de catálogo sin procesar y devolverá un objeto estructurado. Antes de desarrollar la función, configura una forma de ver su salida mientras trabajas.

> > Llama a `parseCard` con `rawCatalogCards[2]` como argumento, asigna el resultado a una variable llamada `cardResult` y registra `cardResult` en la consola.

Por ahora, `parseCard` no tiene cuerpo, por lo que devuelve `undefined`. A medida que añadas código a la función en los siguientes pasos, el resultado registrado te mostrará exactamente lo que la función está devolviendo en cada etapa.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {}
  /* code */
  const cardResult = parseCard(rawCatalogCards[2]);
  console.log(cardResult);
  /* code */
  ```

---

## Paso 4

El primer paso para analizar una `card` del catálogo es separar los cuatro campos. El método `.split()` divide un string en un array de substrings cada vez que encuentra el separador que se le indique.

*Por ejemplo*:

- **Example Code**

  ```js
  "The Shining | King, Stephen | 1977 | Shelf K1".split("|")
  // ["The Shining ", " King, Stephen ", " 1977 ", " Shelf K1"]
  ```

---

> > Dentro de `parseCard`, llama a `.split("|")` sobre `rawString` y devuelve el resultado. Tras este paso, la consola debería mostrar un array de cuatro strings.
---
> [!NOTE]
> Es posible que observes espacios en blanco adicionales alrededor de los valores. Los eliminarás en el siguiente paso.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    /* code */
    const parts = rawString.split("|");
    return parts;
    /* code */
  }
  const cardResult = parseCard(rawCatalogCards[2]);
  console.log(cardResult);
  ```

---

## Paso 5

Como puedes ver en la salida de la consola, tras la división, cada parte sigue teniendo espacios en blanco adicionales al principio y/o al final. Para limpiar cada elemento, debes procesarlos uno por uno.

Este es un caso de uso perfecto para un bucle `for`, que repite un bloque de código una vez por cada elemento de una estructura iterable, como una matriz:

- **Example Code**

  ```js
  for (let i = 0; i < array.length; i++) {
    // code to run on each iteration
  }
  ```

---

`i` comienza en `0` (el primer índice), el bucle continúa mientras `i` sea menor que la longitud del array, y `i++` incrementa `i` en uno después de cada iteración.

> > Dentro de `parseCard`, declara un array vacío llamada `trimmedParts`. A continuación, agrega un bucle `for` que recorra `parts`. Deja el cuerpo del bucle vacío por ahora, ya que lo completarás en el siguiente paso.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    /* code */
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {}
    /* code */
    return parts;
  }
  const cardResult = parseCard(rawCatalogCards[2]);
  console.log(cardResult);
  /* terminal */
  [ 'The Stand ', ' King, Stephen ', ' 1978 ', ' Shelf K2' ]
  /* terminal */
  ```

---

## Paso 6

El método `.trim()` elimina los espacios en blanco de ambos extremos de un string. Por ejemplo, `" hello ".trim()` devuelve `"hello"`.

> > Dentro del cuerpo del bucle, añade `parts[i].trim()` a `trimmedParts`. A continuación, actualiza la instrucción de `return` existente para que devuelva `trimmedParts` en lugar de `parts`.

Tras este paso, la salida registrada debería mostrar valores limpios sin espacios adicionales.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      /* code */
      trimmedParts.push(parts[i].trim());
    }
    return trimmedParts;
    /* code */
  }
  const cardResult = parseCard(rawCatalogCards[2]);
  console.log(cardResult);
  /* Salida */
  [ 'The Stand', 'King, Stephen', '1978', 'Shelf K2' ]
  /* Salida */
  ```

---

## Paso 7

Ahora que las partes están limpias, puedes transformarlas en un objeto estructurado. En JavaScript, los objetos utilizan llaves con pares `"clave: valor"`. Por ejemplo, `{ title: "Dune", year: 1965 }`.

> > Declare cuatro variables: `title`, `author`, `year` y `location`. Asigne a cada una de ellas el elemento correspondiente de `trimmedParts`. Luego, actualice la instrucción de `return` para que devuelva un objeto con esas cuatro propiedades.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    /* code */
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    return {
      title: title,
      author: author,
      year: year,
      location: location
    };
    /* code */
  }
  const cardResult = parseCard(rawCatalogCards[2]);
  console.log(cardResult);
  /* Salida */
  {
    title: 'The Stand',
    author: 'King, Stephen',
    year: '1978',
    location: 'Shelf K2'
  }
  /* Salida */
  ```

---

## Paso 8

Algunas fichas del catálogo tienen campos que faltan. Por ejemplo, la entrada 16 tiene el campo autor en blanco, por lo que `parseCard` devuelve actualmente un string vacío para ese campo.

El operador `||` proporciona una alternativa: `a || b` se evalúa como a cuando `a` es verdadero, y como `b` en caso contrario. Dado que un string vacío es falso, `"" || "Ùnknown"` se evalúa como `"Ùnknown"`.

> > Actualiza el `title`, el `author` y la `location` en la instrucción return para utilizar `|| "Ùnknown"` como alternativa. Deja el `year` para el siguiente paso.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    /* code */
    return {
      title: title || "Unknown",
      author: author || "Unknown",
      year: year,
      location: location || "Unknown"
    };
    /* code */
  }
  const cardResult = parseCard(rawCatalogCards[2]);
  console.log(cardResult);
  /* Salida */
  {
    title: 'The Stand',
    author: 'King, Stephen',
    year: '1978',
    location: 'Shelf K2'
  }
  /* Salida */
  ```

---

## Paso 9

El campo `year` se recibe como un string, pero lo necesitas como un número para un cálculo posterior. Usa `parseInt()` para convertirlo.

El año también puede estar en blanco, por lo que necesitas una alternativa. La condición del operador `condition ? valueIfTrue : valueIfFalse` devuelve uno de dos valores según una condición.

> > Actualiza la propiedad `year` en la instrucción `return` de la siguiente manera:

- **Example Code**

  ```js
  year: year ? parseInt(year) : "Unknown"
  ```

---

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    return {
      title: title || "Unknown",
      author: author || "Unknown",
    /* code */
      year ? parseInt(year) : "Unknown",
    /* code */
      location: location || "Unknown"
    };
  }
  const cardResult = parseCard(rawCatalogCards[2]);
  console.log(cardResult);
  /* Salida */
  {
    title: 'The Stand',
    author: 'King, Stephen',
    year: '1978',
    location: 'Shelf K2'
  }
  /* Salida */
  ```

---

## Paso 10

La función `parseCard` se ha probado y funciona correctamente. La variable `cardResult` ya no es necesaria.

> > Empieza por eliminar la línea `const cardResult` y la línea `console.log(cardResult)`. A continuación, crea una función llamada `parseCatalog` que tome `rawCards` como parámetro. Por ahora, declara un array vacío llamada `catalog` dentro de la función y retornala.
>
> > Debajo de la función, llama a `parseCatalog(rawCatalogCards)`, asigna el resultado a la variable llamada `catalog` y registra `catalog.length`.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    return {
      title: title || "Unknown",
      author: author || "Unknown",
      year ? parseInt(year) : "Unknown",
      location: location || "Unknown"
    };
  }
  /* code */
  function parseCatalog(rawCards) {
    const catalog = [];
    return catalog;
  }
  const catalog = parseCatalog(rawCatalogCards);
  console.log(catalog.length);
  /* code */
  /* Salida */
  0
  /* Salida */
  ```

---

## Paso 11

> > Actualmente, la función `parseCatalog` devuelve un array vacío. Para llenarlo, agrega un bucle `for` dentro de la función que recorra `rawCards`. Dentro del bucle, llama a `parseCard` para cada elemento e incorpora el resultado a `catalog`.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    return {
      title: title || "Unknown",
      author: author || "Unknown",
      year ? parseInt(year) : "Unknown",
      location: location || "Unknown"
    };
  }
  function parseCatalog(rawCards) {
    const catalog = [];
    /* code */
    for (let i = 0; i < rawCards.length; i++) {
      catalog.push(parseCard(rawCards[i]));
    }
    /* code */
    return catalog;
  }
  const catalog = parseCatalog(rawCatalogCards);
  console.log(catalog.length);
  /* Salida */
  19
  /* Salida */
  ```

---

## Paso 12

Una vez analizado el catálogo, puedes realizar búsquedas por campo. La función `findByAuthor` filtrará las entradas cuyo autor contenga el término de búsqueda.

> > Crea una función llamada `findByAuthor` que tome `catalog` y `author` como parámetros. En su interior, declara una variable llamada `searchTerm` y asígnale la versión en minúsculas de `author` para permitir la coincidencia sin distinción de mayúsculas y minúsculas más adelante.
>
> > Declara también una variable llamada `results` y asígnale un array vacío para almacenar los resultados de la búsqueda.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    return {
      title: title || "Unknown",
      author: author || "Unknown",
      year ? parseInt(year) : "Unknown",
      location: location || "Unknown"
    };
  }
  function parseCatalog(rawCards) {
    const catalog = [];
    for (let i = 0; i < rawCards.length; i++) {
      catalog.push(parseCard(rawCards[i]));
    }
    return catalog;
  }
  const catalog = parseCatalog(rawCatalogCards);
  /* code */
  function findByAuthor(catalog, author) {
    const searchTerm = author.toLowerCase();
    const results = [];
  }
  /* code */
  /* Salida */
  ...
  /* Salida */
  ```

---

## Paso 13

Para encontrar autores coincidentes, revisa cada entrada del catálogo una por una.

> > Agrega un bucle `for` vacío dentro de la función `findByAuthor` para recorrer el `catálogo`. Agregarás el cuerpo del bucle en el siguiente paso.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    return {
      title: title || "Unknown",
      author: author || "Unknown",
      year ? parseInt(year) : "Unknown",
      location: location || "Unknown"
    };
  }
  function parseCatalog(rawCards) {
    const catalog = [];
    for (let i = 0; i < rawCards.length; i++) {
      catalog.push(parseCard(rawCards[i]));
    }
    return catalog;
  }
  const catalog = parseCatalog(rawCatalogCards);
  function findByAuthor(catalog, author) {
    const searchTerm = author.toLowerCase();
    const results = [];
    /* code */
    for (let i = 0; i < catalog.length; i++) {
      
    }
    /* code */
  }
  /* Salida */
  ...
  /* Salida */
  ```

---

## Paso 14

> > Dentro del bucle, comprueba si el autor de la entrada actual (convertido a minúsculas) incluye `searchTerm`. El método `.includes()` devuelve `true` si un string contiene otro string como substring. Si la condición es verdadera, añade la entrada a `results`. Al finalizar el bucle, devuelve `results`.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    return {
      title: title || "Unknown",
      author: author || "Unknown",
      year ? parseInt(year) : "Unknown",
      location: location || "Unknown"
    };
  }
  function parseCatalog(rawCards) {
    const catalog = [];
    for (let i = 0; i < rawCards.length; i++) {
      catalog.push(parseCard(rawCards[i]));
    }
    return catalog;
  }
  const catalog = parseCatalog(rawCatalogCards);
  function findByAuthor(catalog, author) {
    const searchTerm = author.toLowerCase();
    const results = [];
    for (let i = 0; i < catalog.length; i++) {
    /* code */
      if (catalog[i].author.toLowerCase().includes(searchTerm)) {
        results.push(catalog[i]);
      }
    }
    return results
    /* code */
  }
  /* Salida */
  ...
  /* Salida */
  ```

---

## Paso 15

Es hora de comprobar que la búsqueda funciona. *Stephen King* tiene seis libros en el catálogo.

> > Llama a `findByAuthor(catalog, "king")` y asigna el resultado a una variable llamada `kingBooks`. Registra `kingBooks.length` para confirmar el recuento.
>
> > Luego, usa un bucle `for` para registrar cada resultado. Usa un literal de plantilla para incluir el título y el año, como `${kingBooks[i].title} (${kingBooks[i].year})`.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    return {
      title: title || "Unknown",
      author: author || "Unknown",
      year ? parseInt(year) : "Unknown",
      location: location || "Unknown"
    };
  }
  function parseCatalog(rawCards) {
    const catalog = [];
    for (let i = 0; i < rawCards.length; i++) {
      catalog.push(parseCard(rawCards[i]));
    }
    return catalog;
  }
  const catalog = parseCatalog(rawCatalogCards);
  function findByAuthor(catalog, author) {
    const searchTerm = author.toLowerCase();
    const results = [];
    for (let i = 0; i < catalog.length; i++) {
      if (catalog[i].author.toLowerCase().includes(searchTerm)) {
        results.push(catalog[i]);
      }
    }
    return results
  }
  /* code */
  const kingBooks = findByAuthor(catalog, "king");
  console.log(kingBooks.length);
  for (let i = 0; i < kingBooks.length; i++) {
    console.log(`${kingBooks[i].title} (${kingBooks[i].year})`);
  }
  /* code */
  /* Salida */
  6
  From a Buick 8 (2002)
  The Shining (1977)
  The Stand (1978)
  It (1986)
  Misery (1987)
  The Dark Tower: The Gunslinger (1982)
  /* Salida */
  ```

---

## Paso 16

El código de prueba de `kingBooks` confirmó que `findByAuthor` funciona correctamente. Antes de pasar a `groupByDecade`, limpia la salida de la consola eliminando esos elementos.

> > Elimina la línea `const kingBooks = ...`, `console.log(kingBooks.length)` y el bucle `for` que muestra los títulos de los libros y los años.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    return {
      title: title || "Unknown",
      author: author || "Unknown",
      year ? parseInt(year) : "Unknown",
      location: location || "Unknown"
    };
  }
  function parseCatalog(rawCards) {
    const catalog = [];
    for (let i = 0; i < rawCards.length; i++) {
      catalog.push(parseCard(rawCards[i]));
    }
    return catalog;
  }
  const catalog = parseCatalog(rawCatalogCards);
  function findByAuthor(catalog, author) {
    const searchTerm = author.toLowerCase();
    const results = [];
    for (let i = 0; i < catalog.length; i++) {
      if (catalog[i].author.toLowerCase().includes(searchTerm)) {
        results.push(catalog[i]);
      }
    }
    return results
  }
  /* code */
  Se eliminan las líneas de prueba de kingBooks
  /* code */
  /* Salida */
  ...
  /* Salida */
  ```

---

## Paso 17

Ahora crearás la función `groupByDecade`, que organiza el catálogo por décadas. Cada clave será un string como `"1970s"` y cada valor, un array de libros de ese período.

> > Crea una función llamada `groupByDecade` que tome `catalog` como parámetro. En su interior, declara `const grouped = {}`. Agrega un bucle `for` para recorrer `catalog` y, dentro del bucle, declara `const book = catalog[i]`.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    return {
      title: title || "Unknown",
      author: author || "Unknown",
      year ? parseInt(year) : "Unknown",
      location: location || "Unknown"
    };
  }
  function parseCatalog(rawCards) {
    const catalog = [];
    for (let i = 0; i < rawCards.length; i++) {
      catalog.push(parseCard(rawCards[i]));
    }
    return catalog;
  }
  const catalog = parseCatalog(rawCatalogCards);
  function findByAuthor(catalog, author) {
    const searchTerm = author.toLowerCase();
    const results = [];
    for (let i = 0; i < catalog.length; i++) {
      if (catalog[i].author.toLowerCase().includes(searchTerm)) {
        results.push(catalog[i]);
      }
    }
    return results
  }
  /* code */
  function groupByDecade(catalog) {
    const grouped = {};
    for (let i = 0; i < catalog.length; i++) {
      const book = catalog[i];
    }
  }
  /* code */
  /* Salida */
  ...
  /* Salida */
  ```

---

## Paso 18

Algunos libros tienen `"Unknown"` como año. Vamos a ocuparnos primero de ese caso especial.

> > Dentro del bucle, comprueba si `book.year` es igual a el string `"Unknown"`. A continuación, comprueba si `grouped["Unknown"]` aún no existe e inicialízalo como un array vacío. Añade `book` a `grouped["Unknown"]`.
>
> > Por último, utiliza `continue` para saltarte el resto del cuerpo del bucle. La instrucción `continue` salta directamente a la siguiente iteración.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    return {
      title: title || "Unknown",
      author: author || "Unknown",
      year ? parseInt(year) : "Unknown",
      location: location || "Unknown"
    };
  }
  function parseCatalog(rawCards) {
    const catalog = [];
    for (let i = 0; i < rawCards.length; i++) {
      catalog.push(parseCard(rawCards[i]));
    }
    return catalog;
  }
  const catalog = parseCatalog(rawCatalogCards);
  function findByAuthor(catalog, author) {
    const searchTerm = author.toLowerCase();
    const results = [];
    for (let i = 0; i < catalog.length; i++) {
      if (catalog[i].author.toLowerCase().includes(searchTerm)) {
        results.push(catalog[i]);
      }
    }
    return results
  }
  function groupByDecade(catalog) {
    const grouped = {};
    for (let i = 0; i < catalog.length; i++) {
      const book = catalog[i];
      /* code */
      if (book.year === "Unknown") {
        if (!grouped["Unknown"]) {
          grouped["Unknown"] = [];
        }
        grouped["Unknown"].push(book);
        continue;
      }
      /* code */
    }
  }
  /* Salida */
  ...
  /* Salida */
  ```

---

## Paso 19

> > Tras la comprobación de `"Unknown"`, añade la lógica de agrupación por décadas para los libros con años numéricos. Declara `const decade = Math.floor(book.year / 10) * 10`. Por ejemplo, `Math.floor(1977 / 10)` da `197`; multiplicado por `10` da `1970`.
>
> > Luego, declare `const decadeKey = ${decade}s` para generar un string como `1970s`.
>
> > Utilice la notación entre corchetes para agrupar el libro: verifique si `grouped[decadeKey]` aún no existe e inicialícelo como un array vacío, luego agregue el `book` a ella. Aquí se requiere la notación entre corchetes porque la clave se almacena en una variable.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    return {
      title: title || "Unknown",
      author: author || "Unknown",
      year ? parseInt(year) : "Unknown",
      location: location || "Unknown"
    };
  }
  function parseCatalog(rawCards) {
    const catalog = [];
    for (let i = 0; i < rawCards.length; i++) {
      catalog.push(parseCard(rawCards[i]));
    }
    return catalog;
  }
  const catalog = parseCatalog(rawCatalogCards);
  function findByAuthor(catalog, author) {
    const searchTerm = author.toLowerCase();
    const results = [];
    for (let i = 0; i < catalog.length; i++) {
      if (catalog[i].author.toLowerCase().includes(searchTerm)) {
        results.push(catalog[i]);
      }
    }
    return results
  }
  function groupByDecade(catalog) {
    const grouped = {};
    for (let i = 0; i < catalog.length; i++) {
      const book = catalog[i];
      if (book.year === "Unknown") {
        if (!grouped["Unknown"]) {
          grouped["Unknown"] = [];
        }
        grouped["Unknown"].push(book);
        continue;
      }
    /* code */
    const decade = Math.floor(book.year / 10) * 10;
    const decadeKey = `${decade}s`;
    if (!grouped[decadeKey]) {
      grouped[decadeKey] = [];
    }
    grouped[decadeKey].push(book);
    /* code */
    }
  }
  /* Salida */
  ...
  /* Salida */
  ```

---

## Paso 20

> > El bucle ha finalizado. Devuelve el objeto `grouped` desde la función.
>
> > A continuación, debajo de la función, llama a `groupByDecade(catalog)` y asigna el resultado a una variable llamada `byDecade`. Registra `byDecade` para inspeccionar el resultado agrupado; deberías ver un objeto con claves como `"1950s"`, `"1960s"`, `"1970s"`, etc., cada uno de los cuales apunta a un array de libros de esa década.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    return {
      title: title || "Unknown",
      author: author || "Unknown",
      year ? parseInt(year) : "Unknown",
      location: location || "Unknown"
    };
  }
  function parseCatalog(rawCards) {
    const catalog = [];
    for (let i = 0; i < rawCards.length; i++) {
      catalog.push(parseCard(rawCards[i]));
    }
    return catalog;
  }
  const catalog = parseCatalog(rawCatalogCards);
  function findByAuthor(catalog, author) {
    const searchTerm = author.toLowerCase();
    const results = [];
    for (let i = 0; i < catalog.length; i++) {
      if (catalog[i].author.toLowerCase().includes(searchTerm)) {
        results.push(catalog[i]);
      }
    }
    return results
  }
  function groupByDecade(catalog) {
    const grouped = {};
    for (let i = 0; i < catalog.length; i++) {
      const book = catalog[i];
      if (book.year === "Unknown") {
        if (!grouped["Unknown"]) {
          grouped["Unknown"] = [];
        }
        grouped["Unknown"].push(book);
        continue;
      }
    const decade = Math.floor(book.year / 10) * 10;
    const decadeKey = `${decade}s`;
    if (!grouped[decadeKey]) {
      grouped[decadeKey] = [];
    }
    grouped[decadeKey].push(book);
    }
    /* code */
      return grouped;
  }
  const byDecade = groupByDecade(catalog);
  console.log(byDecade);
  /* code */
  /* Salida */
  {
    '2000s': [
      {...}
    ],
    '1970s': [
      {...}
    ],
    '1980s': [
      {...}
    ],
    '1960s': [
      {...}
    ],
    '1950s': [
      {...}
    ],
    '1990s': [
      {...}
    ],
    '2010s': [
      {...}
    ],
    Unknown: [
      {...}
    ],
    '850s': [
      {...}
    ]
  }
  /* Salida */
  ```

---

## Paso 21

> > El registro `byDecade` ya ha cumplido su función. Elimina `console.log(byDecade)` de tu código.
>
> > A continuación, para facilitar la lectura de las entradas del catálogo, crea una función llamada `renderEntry` que tome `entry` como parámetro. Deja el cuerpo de la función vacío por ahora. Debajo de la función, registra `renderEntry(catalog[0])`.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    return {
      title: title || "Unknown",
      author: author || "Unknown",
      year ? parseInt(year) : "Unknown",
      location: location || "Unknown"
    };
  }
  function parseCatalog(rawCards) {
    const catalog = [];
    for (let i = 0; i < rawCards.length; i++) {
      catalog.push(parseCard(rawCards[i]));
    }
    return catalog;
  }
  const catalog = parseCatalog(rawCatalogCards);
  function findByAuthor(catalog, author) {
    const searchTerm = author.toLowerCase();
    const results = [];
    for (let i = 0; i < catalog.length; i++) {
      if (catalog[i].author.toLowerCase().includes(searchTerm)) {
        results.push(catalog[i]);
      }
    }
    return results
  }
  function groupByDecade(catalog) {
    const grouped = {};
    for (let i = 0; i < catalog.length; i++) {
      const book = catalog[i];
      if (book.year === "Unknown") {
        if (!grouped["Unknown"]) {
          grouped["Unknown"] = [];
        }
        grouped["Unknown"].push(book);
        continue;
      }
    const decade = Math.floor(book.year / 10) * 10;
    const decadeKey = `${decade}s`;
    if (!grouped[decadeKey]) {
      grouped[decadeKey] = [];
    }
    grouped[decadeKey].push(book);
    }
      return grouped;
  }
  const byDecade = groupByDecade(catalog);
  /* code */
  function renderEntry(entry) {
    
  }
  console.log(renderEntry(catalog[0]));
  /* code */
  /* Salida */
  undefined
  /* Salida */
  ```

---

## Paso 22

> > Ahora completa `renderEntry`. Declara una constante de reserva para cada campo: `const title = entry.title || "Unknown"`, y aplica el mismo patrón para `author`, `year` y `location`.
>
> > Devuelve un literal de plantilla de varias líneas que formatee la entrada como una ficha de biblioteca. Usa `"-".repeat(25)` para el borde superior e inferior, e incluye líneas etiquetadas para `Title`, `Author`, `Year`, y `Location`. Por ejemplo, una línea etiquetada para el título se vería así: `Title: ${title}`.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    return {
      title: title || "Unknown",
      author: author || "Unknown",
      year ? parseInt(year) : "Unknown",
      location: location || "Unknown"
    };
  }
  function parseCatalog(rawCards) {
    const catalog = [];
    for (let i = 0; i < rawCards.length; i++) {
      catalog.push(parseCard(rawCards[i]));
    }
    return catalog;
  }
  const catalog = parseCatalog(rawCatalogCards);
  function findByAuthor(catalog, author) {
    const searchTerm = author.toLowerCase();
    const results = [];
    for (let i = 0; i < catalog.length; i++) {
      if (catalog[i].author.toLowerCase().includes(searchTerm)) {
        results.push(catalog[i]);
      }
    }
    return results
  }
  function groupByDecade(catalog) {
    const grouped = {};
    for (let i = 0; i < catalog.length; i++) {
      const book = catalog[i];
      if (book.year === "Unknown") {
        if (!grouped["Unknown"]) {
          grouped["Unknown"] = [];
        }
        grouped["Unknown"].push(book);
        continue;
      }
    const decade = Math.floor(book.year / 10) * 10;
    const decadeKey = `${decade}s`;
    if (!grouped[decadeKey]) {
      grouped[decadeKey] = [];
    }
    grouped[decadeKey].push(book);
    }
      return grouped;
  }
  const byDecade = groupByDecade(catalog);
  function renderEntry(entry) {
    /* code */
    const title = entry.title || "Unknown"
    const author = entry.author || "Unknown"
    const year = entry.year || "Unknown"
    const location = entry.location || "Unknown"
    return ` ${"-".repeat(25)}
    Title: ${title}
    Author: ${author}
    Year: ${year}
    Location: ${location}
    ${"-".repeat(25)}`;
    /* code */
  }
  console.log(renderEntry(catalog[0]));
  /* Salida */
  -------------------------
  Title: From a Buick 8
  Author: King, Stephen
  Year: 2002
  Location: Shelf K7
  -------------------------
  /* Salida */
  ```

---

## Paso 23

Antes de dar por válidos los datos analizados, empieza por validar los campos obligatorios.

> > Crea una función llamada `validateEntry` que tome `entry` como parámetro. Declara `let isValid = true`.
>
> > Añade una comprobación de validación para el campo `title`: establece `isValid = false` si falta el `title`, si el valor es falso o si es igual a `"Unknown"`.
>
> > Devuelve `isValid`. En los siguientes pasos añadirás comprobaciones para los demás campos.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    return {
      title: title || "Unknown",
      author: author || "Unknown",
      year ? parseInt(year) : "Unknown",
      location: location || "Unknown"
    };
  }
  function parseCatalog(rawCards) {
    const catalog = [];
    for (let i = 0; i < rawCards.length; i++) {
      catalog.push(parseCard(rawCards[i]));
    }
    return catalog;
  }
  const catalog = parseCatalog(rawCatalogCards);
  function findByAuthor(catalog, author) {
    const searchTerm = author.toLowerCase();
    const results = [];
    for (let i = 0; i < catalog.length; i++) {
      if (catalog[i].author.toLowerCase().includes(searchTerm)) {
        results.push(catalog[i]);
      }
    }
    return results
  }
  function groupByDecade(catalog) {
    const grouped = {};
    for (let i = 0; i < catalog.length; i++) {
      const book = catalog[i];
      if (book.year === "Unknown") {
        if (!grouped["Unknown"]) {
          grouped["Unknown"] = [];
        }
        grouped["Unknown"].push(book);
        continue;
      }
    const decade = Math.floor(book.year / 10) * 10;
    const decadeKey = `${decade}s`;
    if (!grouped[decadeKey]) {
      grouped[decadeKey] = [];
    }
    grouped[decadeKey].push(book);
    }
      return grouped;
  }
  const byDecade = groupByDecade(catalog);
  function renderEntry(entry) {
    const title = entry.title || "Unknown"
    const author = entry.author || "Unknown"
    const year = entry.year || "Unknown"
    Author: ${author}
    const location = entry.location || "Unknown"
    return ` ${"-".repeat(25)}
    Title: ${title}
    Year: ${year}
    Location: ${location}
    ${"-".repeat(25)}`;
  }
  console.log(renderEntry(catalog[0]));
  /* code */
  function validateEntry(entry) {
    let isValid = true
    if (!("title" in entry) || !entry.title || entry.title === "Unknown") {
      isValid = false;
    }
    return isValid;
  }
  /* code */
  /* Salida */
  -------------------------
  Title: From a Buick 8
  Author: King, Stephen
  Year: 2002
  Location: Shelf K7
  -------------------------
  /* Salida */
  ```

---

## Paso 24

> > El mismo patrón se aplica a los otros tres campos. Agrega verificaciones equivalentes para el `author`, el `year` y la `location`.

Ten en cuenta que `isValid` acumula los resultados de las cuatro verificaciones: si algún campo falla, el valor pasa a ser `false` y permanece `false` incluso si las verificaciones restantes se superan. Esto significa que la función siempre revisa todos los campos en lugar de detenerse ante el primer problema.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    return {
      title: title || "Unknown",
      author: author || "Unknown",
      year ? parseInt(year) : "Unknown",
      location: location || "Unknown"
    };
  }
  function parseCatalog(rawCards) {
    const catalog = [];
    for (let i = 0; i < rawCards.length; i++) {
      catalog.push(parseCard(rawCards[i]));
    }
    return catalog;
  }
  const catalog = parseCatalog(rawCatalogCards);
  function findByAuthor(catalog, author) {
    const searchTerm = author.toLowerCase();
    const results = [];
    for (let i = 0; i < catalog.length; i++) {
      if (catalog[i].author.toLowerCase().includes(searchTerm)) {
        results.push(catalog[i]);
      }
    }
    return results
  }
  function groupByDecade(catalog) {
    const grouped = {};
    for (let i = 0; i < catalog.length; i++) {
      const book = catalog[i];
      if (book.year === "Unknown") {
        if (!grouped["Unknown"]) {
          grouped["Unknown"] = [];
        }
        grouped["Unknown"].push(book);
        continue;
      }
    const decade = Math.floor(book.year / 10) * 10;
    const decadeKey = `${decade}s`;
    if (!grouped[decadeKey]) {
      grouped[decadeKey] = [];
    }
    grouped[decadeKey].push(book);
    }
      return grouped;
  }
  const byDecade = groupByDecade(catalog);
  function renderEntry(entry) {
    const title = entry.title || "Unknown"
    const author = entry.author || "Unknown"
    const year = entry.year || "Unknown"
    Author: ${author}
    const location = entry.location || "Unknown"
    return ` ${"-".repeat(25)}
    Title: ${title}
    Year: ${year}
    Location: ${location}
    ${"-".repeat(25)}`;
  }
  console.log(renderEntry(catalog[0]));
  function validateEntry(entry) {
    let isValid = true
    if (!("title" in entry) || !entry.title || entry.title === "Unknown") {
      isValid = false;
    }
    /* code */
    if (!("author" in entry) || !entry.author || entry.author === "Unknown") {
      isValid = false;
    }
    if (!("year" in entry) || !entry.year || entry.year === "Unknown") {
      isValid = false;
    }
    if (!("location" in entry) || !entry.location || entry.location === "Unknown") {
      isValid = false;
    }
    /* code */
    return isValid;
  }
  /* Salida */
  -------------------------
  Title: From a Buick 8
  Author: King, Stephen
  Year: 2002
  Location: Shelf K7
  -------------------------
  /* Salida */
  ```

---

## Paso 25

> > Es hora de ver cómo el validador detecta un problema real. `catalog[0]` es `"From a Buick 8"`, de Stephen King, que tiene los cuatro campos rellenados. `catalog[16]` es `"Unknown Title"`, que tiene el campo de autor en blanco.
>
> > Registra `validateEntry(catalog[0])` y `validateEntry(catalog[16])`. El primero debería devolver `true`; el segundo debería devolver `false`.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    return {
      title: title || "Unknown",
      author: author || "Unknown",
      year ? parseInt(year) : "Unknown",
      location: location || "Unknown"
    };
  }
  function parseCatalog(rawCards) {
    const catalog = [];
    for (let i = 0; i < rawCards.length; i++) {
      catalog.push(parseCard(rawCards[i]));
    }
    return catalog;
  }
  const catalog = parseCatalog(rawCatalogCards);
  function findByAuthor(catalog, author) {
    const searchTerm = author.toLowerCase();
    const results = [];
    for (let i = 0; i < catalog.length; i++) {
      if (catalog[i].author.toLowerCase().includes(searchTerm)) {
        results.push(catalog[i]);
      }
    }
    return results
  }
  function groupByDecade(catalog) {
    const grouped = {};
    for (let i = 0; i < catalog.length; i++) {
      const book = catalog[i];
      if (book.year === "Unknown") {
        if (!grouped["Unknown"]) {
          grouped["Unknown"] = [];
        }
        grouped["Unknown"].push(book);
        continue;
      }
    const decade = Math.floor(book.year / 10) * 10;
    const decadeKey = `${decade}s`;
    if (!grouped[decadeKey]) {
      grouped[decadeKey] = [];
    }
    grouped[decadeKey].push(book);
    }
      return grouped;
  }
  const byDecade = groupByDecade(catalog);
  function renderEntry(entry) {
    const title = entry.title || "Unknown"
    const author = entry.author || "Unknown"
    const year = entry.year || "Unknown"
    Author: ${author}
    const location = entry.location || "Unknown"
    return ` ${"-".repeat(25)}
    Title: ${title}
    Year: ${year}
    Location: ${location}
    ${"-".repeat(25)}`;
  }
  console.log(renderEntry(catalog[0]));
  function validateEntry(entry) {
    let isValid = true
    if (!("title" in entry) || !entry.title || entry.title === "Unknown") {
      isValid = false;
    }
    if (!("author" in entry) || !entry.author || entry.author === "Unknown") {
      isValid = false;
    }
    if (!("year" in entry) || !entry.year || entry.year === "Unknown") {
      isValid = false;
    }
    if (!("location" in entry) || !entry.location || entry.location === "Unknown") {
      isValid = false;
    }
    return isValid;
  }
  /* code */
  console.log(validateEntry(catalog[0]));
  console.log(validateEntry(catalog[16]));
  /* code */
  /* Salida */
  -------------------------
  Title: From a Buick 8
  Author: King, Stephen
  Year: 2002
  Location: Shelf K7
  -------------------------
  true
  false
  /* Salida */
  ```

---

## Paso 26

*JSON (JavaScript Object Notation)* es un formato estándar para compartir datos entre sistemas. `JSON.stringify` convierte un valor de JavaScript en un string con formato JSON.

> > Empieza por eliminar las dos llamadas a `console.log` de `validateEntry`, ya que solo eran necesarias para las pruebas. A continuación, crea una función llamada `exportToJSON` que tome `catalog` como parámetro. Devuelve `JSON.stringify(catalog, null, 2)`. El primer argumento son los datos que se van a convertir. El segundo argumento (`null`) significa que no hay filtrado personalizado. El tercero (`2`) añade una sangría de dos espacios, lo que hace que la salida sea legible.
>
> > Debajo de la función, registra `exportToJSON(catalog.slice(0, 2))` para obtener una vista previa de la salida JSON de las dos primeras entradas.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    return {
      title: title || "Unknown",
      author: author || "Unknown",
      year ? parseInt(year) : "Unknown",
      location: location || "Unknown"
    };
  }
  function parseCatalog(rawCards) {
    const catalog = [];
    for (let i = 0; i < rawCards.length; i++) {
      catalog.push(parseCard(rawCards[i]));
    }
    return catalog;
  }
  const catalog = parseCatalog(rawCatalogCards);
  function findByAuthor(catalog, author) {
    const searchTerm = author.toLowerCase();
    const results = [];
    for (let i = 0; i < catalog.length; i++) {
      if (catalog[i].author.toLowerCase().includes(searchTerm)) {
        results.push(catalog[i]);
      }
    }
    return results
  }
  function groupByDecade(catalog) {
    const grouped = {};
    for (let i = 0; i < catalog.length; i++) {
      const book = catalog[i];
      if (book.year === "Unknown") {
        if (!grouped["Unknown"]) {
          grouped["Unknown"] = [];
        }
        grouped["Unknown"].push(book);
        continue;
      }
    const decade = Math.floor(book.year / 10) * 10;
    const decadeKey = `${decade}s`;
    if (!grouped[decadeKey]) {
      grouped[decadeKey] = [];
    }
    grouped[decadeKey].push(book);
    }
      return grouped;
  }
  const byDecade = groupByDecade(catalog);
  function renderEntry(entry) {
    const title = entry.title || "Unknown"
    const author = entry.author || "Unknown"
    const year = entry.year || "Unknown"
    Author: ${author}
    const location = entry.location || "Unknown"
    return ` ${"-".repeat(25)}
    Title: ${title}
    Year: ${year}
    Location: ${location}
    ${"-".repeat(25)}`;
  }
  console.log(renderEntry(catalog[0]));
  function validateEntry(entry) {
    let isValid = true
    if (!("title" in entry) || !entry.title || entry.title === "Unknown") {
      isValid = false;
    }
    if (!("author" in entry) || !entry.author || entry.author === "Unknown") {
      isValid = false;
    }
    if (!("year" in entry) || !entry.year || entry.year === "Unknown") {
      isValid = false;
    }
    if (!("location" in entry) || !entry.location || entry.location === "Unknown") {
      isValid = false;
    }
    return isValid;
  }
  /* code */
  function exportToJSON(catalog) {
  return JSON.stringify(catalog, null, 2);
  }
  console.log(exportToJSON(catalog.slice(0, 2)));
  /* code */
  /* Salida */
  -------------------------
  Title: From a Buick 8
  Author: King, Stephen
  Year: 2002
  Location: Shelf K7
  -------------------------
  [
    {
      "title": "From a Buick 8",
      "author": "King, Stephen",
      "year": 2002,
      "location": "Shelf K7"
    },
    {
      "title": "The Shining",
      "author": "King, Stephen",
      "year": 1977,
      "location": "Shelf K1"
    }
  ]
  /* Salida */
  ```

---

## Paso 27

El formato CSV (valores separados por comas) se utiliza para hojas de cálculo y la importación de datos. Cada línea representa una entrada con campos separados por comas.

> > Empieza por eliminar la llamada `console.log(exportToJSON(...))`, ya que solo era necesaria para realizar pruebas. A continuación, crea una función llamada `exportToCSV` que tome `catalog` como parámetro. En su interior, declara `const header = "Title,Author,Year,Location"` y `const rows = []`.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    return {
      title: title || "Unknown",
      author: author || "Unknown",
      year ? parseInt(year) : "Unknown",
      location: location || "Unknown"
    };
  }
  function parseCatalog(rawCards) {
    const catalog = [];
    for (let i = 0; i < rawCards.length; i++) {
      catalog.push(parseCard(rawCards[i]));
    }
    return catalog;
  }
  const catalog = parseCatalog(rawCatalogCards);
  function findByAuthor(catalog, author) {
    const searchTerm = author.toLowerCase();
    const results = [];
    for (let i = 0; i < catalog.length; i++) {
      if (catalog[i].author.toLowerCase().includes(searchTerm)) {
        results.push(catalog[i]);
      }
    }
    return results
  }
  function groupByDecade(catalog) {
    const grouped = {};
    for (let i = 0; i < catalog.length; i++) {
      const book = catalog[i];
      if (book.year === "Unknown") {
        if (!grouped["Unknown"]) {
          grouped["Unknown"] = [];
        }
        grouped["Unknown"].push(book);
        continue;
      }
    const decade = Math.floor(book.year / 10) * 10;
    const decadeKey = `${decade}s`;
    if (!grouped[decadeKey]) {
      grouped[decadeKey] = [];
    }
    grouped[decadeKey].push(book);
    }
      return grouped;
  }
  const byDecade = groupByDecade(catalog);
  function renderEntry(entry) {
    const title = entry.title || "Unknown"
    const author = entry.author || "Unknown"
    const year = entry.year || "Unknown"
    Author: ${author}
    const location = entry.location || "Unknown"
    return ` ${"-".repeat(25)}
    Title: ${title}
    Year: ${year}
    Location: ${location}
    ${"-".repeat(25)}`;
  }
  console.log(renderEntry(catalog[0]));
  function validateEntry(entry) {
    let isValid = true
    if (!("title" in entry) || !entry.title || entry.title === "Unknown") {
      isValid = false;
    }
    if (!("author" in entry) || !entry.author || entry.author === "Unknown") {
      isValid = false;
    }
    if (!("year" in entry) || !entry.year || entry.year === "Unknown") {
      isValid = false;
    }
    if (!("location" in entry) || !entry.location || entry.location === "Unknown") {
      isValid = false;
    }
    return isValid;
  }
  function exportToJSON(catalog) {
  return JSON.stringify(catalog, null, 2);
  }
  /* code */
  function exportToCSV(catalog) {
    const header = "Title,Author,Year,Location";
    const rows = [];
  }
  /* code */
  /* Salida */
  -------------------------
  Title: From a Buick 8
  Author: King, Stephen
  Year: 2002
  Location: Shelf K7
  -------------------------
  /* Salida */
  ```

---

## Paso 28

> > Añade un bucle `for` sobre `catalog`. Dentro del bucle, declara `const entry = catalog[i]`. Crea un string de fila con los cuatro campos separados por comas e insértala en `rows`.
>
> > Los campos de tipo string deben incluir comillas dobles literales en la salida (por ejemplo, `"King, Stephen"`), para que las comas dentro de los valores no alteren el formato CSV. Dado que `year` es un número, no las necesita.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    return {
      title: title || "Unknown",
      author: author || "Unknown",
      year ? parseInt(year) : "Unknown",
      location: location || "Unknown"
    };
  }
  function parseCatalog(rawCards) {
    const catalog = [];
    for (let i = 0; i < rawCards.length; i++) {
      catalog.push(parseCard(rawCards[i]));
    }
    return catalog;
  }
  const catalog = parseCatalog(rawCatalogCards);
  function findByAuthor(catalog, author) {
    const searchTerm = author.toLowerCase();
    const results = [];
    for (let i = 0; i < catalog.length; i++) {
      if (catalog[i].author.toLowerCase().includes(searchTerm)) {
        results.push(catalog[i]);
      }
    }
    return results
  }
  function groupByDecade(catalog) {
    const grouped = {};
    for (let i = 0; i < catalog.length; i++) {
      const book = catalog[i];
      if (book.year === "Unknown") {
        if (!grouped["Unknown"]) {
          grouped["Unknown"] = [];
        }
        grouped["Unknown"].push(book);
        continue;
      }
    const decade = Math.floor(book.year / 10) * 10;
    const decadeKey = `${decade}s`;
    if (!grouped[decadeKey]) {
      grouped[decadeKey] = [];
    }
    grouped[decadeKey].push(book);
    }
      return grouped;
  }
  const byDecade = groupByDecade(catalog);
  function renderEntry(entry) {
    const title = entry.title || "Unknown"
    const author = entry.author || "Unknown"
    const year = entry.year || "Unknown"
    Author: ${author}
    const location = entry.location || "Unknown"
    return ` ${"-".repeat(25)}
    Title: ${title}
    Year: ${year}
    Location: ${location}
    ${"-".repeat(25)}`;
  }
  console.log(renderEntry(catalog[0]));
  function validateEntry(entry) {
    let isValid = true
    if (!("title" in entry) || !entry.title || entry.title === "Unknown") {
      isValid = false;
    }
    if (!("author" in entry) || !entry.author || entry.author === "Unknown") {
      isValid = false;
    }
    if (!("year" in entry) || !entry.year || entry.year === "Unknown") {
      isValid = false;
    }
    if (!("location" in entry) || !entry.location || entry.location === "Unknown") {
      isValid = false;
    }
    return isValid;
  }
  function exportToJSON(catalog) {
  return JSON.stringify(catalog, null, 2);
  }
  function exportToCSV(catalog) {
    const header = "Title,Author,Year,Location";
    const rows = [];
    /* code */
    for (let i = 0; i < catalog.length; i++) {
    const entry = catalog[i];
    rows.push(`"${entry.title}","${entry.author}",${entry.year},"${entry.location}"`);
    }
    /* code */
  }
  /* Salida */
  -------------------------
  Title: From a Buick 8
  Author: King, Stephen
  Year: 2002
  Location: Shelf K7
  -------------------------
  /* Salida */
  ```

---

## Paso 29

Ahora combina todas las filas en un solo strintg CSV que puedas exportar o compartir.

> > Después del primer bucle, declara `let csv = header`. Agrega otro bucle `for` para añadir cada fila a `csv` con un salto de línea: `csv = csv + "\n" + rows[i]`. Devuelve `csv`. A continuación, debajo de la función, registra `exportToCSV(catalog)` para obtener una vista previa del resultado formateado.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    return {
      title: title || "Unknown",
      author: author || "Unknown",
      year ? parseInt(year) : "Unknown",
      location: location || "Unknown"
    };
  }
  function parseCatalog(rawCards) {
    const catalog = [];
    for (let i = 0; i < rawCards.length; i++) {
      catalog.push(parseCard(rawCards[i]));
    }
    return catalog;
  }
  const catalog = parseCatalog(rawCatalogCards);
  function findByAuthor(catalog, author) {
    const searchTerm = author.toLowerCase();
    const results = [];
    for (let i = 0; i < catalog.length; i++) {
      if (catalog[i].author.toLowerCase().includes(searchTerm)) {
        results.push(catalog[i]);
      }
    }
    return results
  }
  function groupByDecade(catalog) {
    const grouped = {};
    for (let i = 0; i < catalog.length; i++) {
      const book = catalog[i];
      if (book.year === "Unknown") {
        if (!grouped["Unknown"]) {
          grouped["Unknown"] = [];
        }
        grouped["Unknown"].push(book);
        continue;
      }
    const decade = Math.floor(book.year / 10) * 10;
    const decadeKey = `${decade}s`;
    if (!grouped[decadeKey]) {
      grouped[decadeKey] = [];
    }
    grouped[decadeKey].push(book);
    }
      return grouped;
  }
  const byDecade = groupByDecade(catalog);
  function renderEntry(entry) {
    const title = entry.title || "Unknown"
    const author = entry.author || "Unknown"
    const year = entry.year || "Unknown"
    Author: ${author}
    const location = entry.location || "Unknown"
    return ` ${"-".repeat(25)}
    Title: ${title}
    Year: ${year}
    Location: ${location}
    ${"-".repeat(25)}`;
  }
  console.log(renderEntry(catalog[0]));
  function validateEntry(entry) {
    let isValid = true
    if (!("title" in entry) || !entry.title || entry.title === "Unknown") {
      isValid = false;
    }
    if (!("author" in entry) || !entry.author || entry.author === "Unknown") {
      isValid = false;
    }
    if (!("year" in entry) || !entry.year || entry.year === "Unknown") {
      isValid = false;
    }
    if (!("location" in entry) || !entry.location || entry.location === "Unknown") {
      isValid = false;
    }
    return isValid;
  }
  function exportToJSON(catalog) {
  return JSON.stringify(catalog, null, 2);
  }
  function exportToCSV(catalog) {
    const header = "Title,Author,Year,Location";
    const rows = [];
    for (let i = 0; i < catalog.length; i++) {
    const entry = catalog[i];
    rows.push(`"${entry.title}","${entry.author}",${entry.year},"${entry.location}"`);
    }
    /* code */
    let csv = header;
    for (let i = 0; i < rows.length; i++) {
      csv = csv + "\n" + rows[i];
    }
      return csv;
  }
  console.log(exportToCSV(catalog));
  /* code */
  /* Salida */
  -------------------------
  Title: From a Buick 8
  Author: King, Stephen
  Year: 2002
  Location: Shelf K7
  -------------------------
  Title,Author,Year,Location
  "From a Buick 8","King, Stephen",2002,"Shelf K7"
  "The Shining","King, Stephen",1977,"Shelf K1"
  "The Stand","King, Stephen",1978,"Shelf K2"
  "It","King, Stephen",1986,"Shelf K3"
  "Misery","King, Stephen",1987,"Shelf K4"
  "Do Androids Dream of Electric Sheep?","Dick, Philip K.",1968,"Shelf D5"
  "I, Robot","Asimov, Isaac",1950,"Shelf A8"
  "Foundation","Asimov, Isaac",1951,"Shelf A9"
  "Dune","Herbert, Frank",1965,"Shelf H3"
  "Neuromancer","Gibson, William",1984,"Shelf G8"
  "Snow Crash","Stephenson, Neal",1992,"Shelf S6"
  "The Martian","Weir, Andy",2011,"Shelf W5"
  "Ender's Game","Card, Orson Scott",1985,"Shelf C2"
  "The Hitchhiker's Guide to the Galaxy","Adams, Douglas",1979,"Shelf A1"
  "Ready Player One","Cline, Ernest",2011,"Shelf C7"
  "The Dark Tower: The Gunslinger","King, Stephen",1982,"Shelf K5"
  "Unknown Title","Unknown",1975,"Shelf X1"
  "Mysterious Manuscript","Unknown Author",Unknown,"Shelf Z9"
  "Ancient Scroll","Anonymous",850,"Unknown"
  /* Salida */
  ```

---

## Paso 30

> > Terminemos con un resumen. Registra en la consola `catalog.length` y `Object.keys(byDecade).length` para ver el total de libros y los grupos por década.
>
> > Declara `let oldestYear = Infinity` y `let newestYear = 0`. Utiliza un bucle `for` sobre `catalog`: para cada entrada en la que el año no sea `Unknown`, actualiza `oldestYear` si el año es anterior y `newestYear` si es posterior. Registra ambos valores en la consola.

- **Code**

  ```js
  const rawCatalogCards = [...];
  function parseCard(rawString) {
    const parts = rawString.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];
    return {
      title: title || "Unknown",
      author: author || "Unknown",
      year ? parseInt(year) : "Unknown",
      location: location || "Unknown"
    };
  }
  function parseCatalog(rawCards) {
    const catalog = [];
    for (let i = 0; i < rawCards.length; i++) {
      catalog.push(parseCard(rawCards[i]));
    }
    return catalog;
  }
  const catalog = parseCatalog(rawCatalogCards);
  function findByAuthor(catalog, author) {
    const searchTerm = author.toLowerCase();
    const results = [];
    for (let i = 0; i < catalog.length; i++) {
      if (catalog[i].author.toLowerCase().includes(searchTerm)) {
        results.push(catalog[i]);
      }
    }
    return results
  }
  function groupByDecade(catalog) {
    const grouped = {};
    for (let i = 0; i < catalog.length; i++) {
      const book = catalog[i];
      if (book.year === "Unknown") {
        if (!grouped["Unknown"]) {
          grouped["Unknown"] = [];
        }
        grouped["Unknown"].push(book);
        continue;
      }
    const decade = Math.floor(book.year / 10) * 10;
    const decadeKey = `${decade}s`;
    if (!grouped[decadeKey]) {
      grouped[decadeKey] = [];
    }
    grouped[decadeKey].push(book);
    }
      return grouped;
  }
  const byDecade = groupByDecade(catalog);
  function renderEntry(entry) {
    const title = entry.title || "Unknown"
    const author = entry.author || "Unknown"
    const year = entry.year || "Unknown"
    Author: ${author}
    const location = entry.location || "Unknown"
    return ` ${"-".repeat(25)}
    Title: ${title}
    Year: ${year}
    Location: ${location}
    ${"-".repeat(25)}`;
  }
  console.log(renderEntry(catalog[0]));
  function validateEntry(entry) {
    let isValid = true
    if (!("title" in entry) || !entry.title || entry.title === "Unknown") {
      isValid = false;
    }
    if (!("author" in entry) || !entry.author || entry.author === "Unknown") {
      isValid = false;
    }
    if (!("year" in entry) || !entry.year || entry.year === "Unknown") {
      isValid = false;
    }
    if (!("location" in entry) || !entry.location || entry.location === "Unknown") {
      isValid = false;
    }
    return isValid;
  }
  function exportToJSON(catalog) {
  return JSON.stringify(catalog, null, 2);
  }
  function exportToCSV(catalog) {
    const header = "Title,Author,Year,Location";
    const rows = [];
    for (let i = 0; i < catalog.length; i++) {
    const entry = catalog[i];
    rows.push(`"${entry.title}","${entry.author}",${entry.year},"${entry.location}"`);
    }
    let csv = header;
    for (let i = 0; i < rows.length; i++) {
      csv = csv + "\n" + rows[i];
    }
      return csv;
  }
  console.log(exportToCSV(catalog));
  /* code */
  console.log(catalog.length);
  console.log(Object.keys(byDecade).length);
  let oldestYear = Infinity;
  let newestYear = 0;
  for (let i = 0; i < catalog.length; i++) {
    const entry = catalog[i];
    if (entry.year !== "Unknown") {
      if (entry.year < oldestYear) {
        oldestYear = entry.year;
      }
      if (entry.year > newestYear) {
        newestYear = entry.year;
      }
    }
  }
  console.log(oldestYear);
  console.log(newestYear);
  /* code */
  /* Salida */
  -------------------------
  Title: From a Buick 8
  Author: King, Stephen
  Year: 2002
  Location: Shelf K7
  -------------------------
  Title,Author,Year,Location
  "From a Buick 8","King, Stephen",2002,"Shelf K7"
  "The Shining","King, Stephen",1977,"Shelf K1"
  "The Stand","King, Stephen",1978,"Shelf K2"
  "It","King, Stephen",1986,"Shelf K3"
  "Misery","King, Stephen",1987,"Shelf K4"
  "Do Androids Dream of Electric Sheep?","Dick, Philip K.",1968,"Shelf D5"
  "I, Robot","Asimov, Isaac",1950,"Shelf A8"
  "Foundation","Asimov, Isaac",1951,"Shelf A9"
  "Dune","Herbert, Frank",1965,"Shelf H3"
  "Neuromancer","Gibson, William",1984,"Shelf G8"
  "Snow Crash","Stephenson, Neal",1992,"Shelf S6"
  "The Martian","Weir, Andy",2011,"Shelf W5"
  "Ender's Game","Card, Orson Scott",1985,"Shelf C2"
  "The Hitchhiker's Guide to the Galaxy","Adams, Douglas",1979,"Shelf A1"
  "Ready Player One","Cline, Ernest",2011,"Shelf C7"
  "The Dark Tower: The Gunslinger","King, Stephen",1982,"Shelf K5"
  "Unknown Title","Unknown",1975,"Shelf X1"
  "Mysterious Manuscript","Unknown Author",Unknown,"Shelf Z9"
  "Ancient Scroll","Anonymous",850,"Unknown"
  19
  9
  850
  2011
  /* Salida */
  ```

---

**¡Has completado el taller del Catálogo de la Biblioteca Heritage!**
