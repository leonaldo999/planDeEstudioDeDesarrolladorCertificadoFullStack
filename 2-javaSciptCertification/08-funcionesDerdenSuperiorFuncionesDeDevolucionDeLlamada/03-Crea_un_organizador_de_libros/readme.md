# Crea un organizador de libros

En este desafío, crearás un organizador de libros que pueda filtrar y ordenar libros según su año de publicación. Utilizarás funciones de orden superior y funciones de devolución de llamada para lograr esto.

---

## Historias de usuario

1. Debes tener un array de objetos llamado `books`, en el que cada objeto del array debe tener una cadena titulada `title`, otra cadena titulada `authorName` y un número titulado `releaseYear`.

2. Tu array `books` debe tener un mínimo de tres objetos.

3. Debes tener una función de llamada de retorno llamada `sortByYear` que acepte dos libros como parámetros para ordenar el array.

4. La función `sortByYear` debe devolver `-1` si el `releaseYear` del primer libro es menor que el del segundo libro.

5. La función `sortByYear` debe devolver `1` si el `releaseYear` del primer libro es mayor que el del segundo libro.

6. La función `sortByYear` debe devolver `0` si ambos valores de `releaseYear` son iguales.

7. Debes filtrar del array `books` aquellos escritos después de un año determinado, como 1950, y guardar el array filtrado en un nuevo array llamado `filteredBooks`.

8. Debes ordenar los libros del array `filteredBooks` según su `releaseYear` en orden ascendente. En una lección anterior aprendiste que el método `sort()` ordena el array in situ. Esto significa que el array `filteredBooks` se modificará.

---

## Solución

```js
const books = [
  { title: "To Kill a Mockingbird", authorName: "Harper Lee", releaseYear: 1960 },
  { title: "1984", authorName: "George Orwell", releaseYear: 1949 },
  { title: "The Great Gatsby", authorName: "F. Scott Fitzgerald", releaseYear: 1925 },
  { title: "The Catcher in the Rye", authorName: "J.D. Salinger", releaseYear: 1951 },
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

console.log("\nOrganizador de libros:\n");
const filteredBooks = books.filter(book => book.releaseYear > 1950);
filteredBooks.sort(sortByYear);

console.log(filteredBooks);
```
