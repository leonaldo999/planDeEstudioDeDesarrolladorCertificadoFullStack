# Crear una lista de la compra

_En este taller, seguirás aprendiendo sobre los arrays creando una lista de la compra._

---

## Paso 1

> > Empieza añadiendo un `console.log` que muestre l string `"Grocery shopping list"` en la consola

- **Code**

  ```js
  console.log("Grocery shopping list");
  ```

---

## Paso 2

Para esta lista de la compra, utilizarás un array para representar los artículos que necesitas comprar.

En lecciones anteriores, aprendiste a crear arrays como esta:

- **Example Code**

  ```js
  const fruits = ["apple", "banana", "orange"];
  ```

> > En este paso, crea una variable llamada `shoppingList` y asígnale un array vacío.

- **Code**

  ```js
  console.log("Grocery shopping list");
  /*<=== code ===>*/
  const shoppingList = [];
  /*<=== code ===>*/
  ```

---

## Paso 3

En esta siguiente parte del taller, practicarás cómo añadir productos alimenticios a la lista de la compra.

> > Empieza utilizando `console.log` para registrar el mensaje `"It will be nice to have some fruit to eat."`.

- **Code**

  ```js
  console.log("Grocery shopping list");
  const shoppingList = [];
  /*<=== code ===>*/
  console.log("It will be nice to have some fruit to eat.");
  /*<=== code ===>*/
  ```

---

## Paso 4

En las lecciones anteriores, aprendiste a añadir elementos al final de un array utilizando el método `push` de la siguiente manera:

- **Example Code**

  ```js
  fruits.push("pear");
  ```

> > Utilizando el método `push`, agrega el string `"Apples"` a la array `shoppingList`.

- **Code**

  ```js
  console.log("Grocery shopping list");
  const shoppingList = [];
  console.log("It will be nice to have some fruit to eat.");
  /*<=== code ===>*/
  shoppingList.push("Apples");
  /*<=== code ===>*/
  ```

---

## Paso 5

Para ver la lista de compras actualizada, tendrás que registrar en la consola la lista de compras actual y un mensaje breve.

Dado que este mensaje se utilizará repetidamente a lo largo del taller, lo mejor es crear una función reutilizable.

> > Crea una función llamada `getShoppingListMsg` que tome un array como parámetro y devuelva el string `"Current Shopping List: "` seguida del contenido del array proporcionado.

Puedes usar literales de plantilla o la concatenación de strings con el operador + para combinar el string con el array pasado a la función.

- **Code**

  ```js
  console.log("Grocery shopping list");
  const shoppingList = [];
  console.log("It will be nice to have some fruit to eat.");
  shoppingList.push("Apples");
  /*<=== code ===>*/
  function getShoppingListMsg(arr) {
    return `Current Shopping List: ${arr}`;
  }
  /*<=== code ===>*/
  ```

---

## Paso 6

Ahora es el momento de ver el mensaje registrado en la consola.

> > Agrega un `console.log` y llama a la función `getShoppingListMsg` con el array `shoppingList` como argumento dentro de `console.log` para ver el mensaje registrado en la consola.

- **Code**

  ```js
  console.log("Grocery shopping list");
  const shoppingList = [];
  console.log("It will be nice to have some fruit to eat.");
  shoppingList.push("Apples");
  function getShoppingListMsg(arr) {
    return `Current Shopping List: ${arr}`;
  }
  /*<=== code ===>*/
  console.log(getShoppingListMsg(shoppingList));
  /*<=== code ===>*/
  ```

---

## Paso 7

Ahora es el momento de añadir otra fruta a la lista.

> > Utilizando el mismo método de array que antes, añade el string `"Grapes"` al final de la array `shoppingList`.
>
> > A continuación, añade un `console.log` y llama a la función `getShoppingListMsg` con el array `shoppingList` como argumento dentro de `console.log` para ver la lista actualizada registrada en la consola.

- **Code**

  ```js
  console.log("Grocery shopping list");
  const shoppingList = [];
  console.log("It will be nice to have some fruit to eat.");
  shoppingList.push("Apples");
  function getShoppingListMsg(arr) {
    return `Current Shopping List: ${arr}`;
  }
  console.log(getShoppingListMsg(shoppingList));
  /*<=== code ===>*/
  shoppingList.push("Grapes");
  console.log(getShoppingListMsg(shoppingList));
  /*<=== code ===>*/
  ```

---

## Paso 8

Ahora es el momento de empezar a añadir artículos al principio de la lista de la compra.

> > Empieza añadiendo un `console.log` que muestre el mensaje `"It looks like we need to get some cooking oil."` en la consola.

- **Code**

  ```js
  console.log("Grocery shopping list");
  const shoppingList = [];
  console.log("It will be nice to have some fruit to eat.");
  shoppingList.push("Apples");
  function getShoppingListMsg(arr) {
    return `Current Shopping List: ${arr}`;
  }
  console.log(getShoppingListMsg(shoppingList));
  shoppingList.push("Grapes");
  console.log(getShoppingListMsg(shoppingList));
  /*<=== code ===>*/
  console.log("It looks like we need to get some cooking oil.");
  /*<=== code ===>*/
  ```

---

## Paso 9

En las lecciones anteriores, aprendiste a añadir elementos al principio de un array utilizando el método `unshift()`.

A continuación te recordamos cómo se utiliza el método `unshift()`:

- **Example Code**

  ```js
  array.unshift(item1, item2, ..., itemX);
  ```

> > Utiliza el método `unshift()` para añadir el string `"Vegetable Oil"` al principio del array `shoppingList`.

- **Code**

  ```js
  console.log("Grocery shopping list");
  const shoppingList = [];
  console.log("It will be nice to have some fruit to eat.");
  shoppingList.push("Apples");
  function getShoppingListMsg(arr) {
    return `Current Shopping List: ${arr}`;
  }
  console.log(getShoppingListMsg(shoppingList));
  shoppingList.push("Grapes");
  console.log(getShoppingListMsg(shoppingList));
  console.log("It looks like we need to get some cooking oil.");
  /*<=== code ===>*/
  shoppingList.unshift("Vegetable Oil");
  /*<=== code ===>*/
  ```

---

## Paso 10

> > A continuación, agrega un `console.log` y llama a la función `getShoppingListMsg` pasando el array `shoppingList` como argumento dentro de `console.log` para ver la lista actualizada en la consola.

- **Code**

  ```js
  console.log("Grocery shopping list");
  const shoppingList = [];
  console.log("It will be nice to have some fruit to eat.");
  shoppingList.push("Apples");
  function getShoppingListMsg(arr) {
    return `Current Shopping List: ${arr}`;
  }
  console.log(getShoppingListMsg(shoppingList));
  shoppingList.push("Grapes");
  console.log(getShoppingListMsg(shoppingList));
  console.log("It looks like we need to get some cooking oil.");
  shoppingList.unshift("Vegetable Oil");
  /*<=== code ===>*/
  console.log(getShoppingListMsg(shoppingList));
  /*<=== code ===>*/
  ```

---

## Paso 11

En los pasos anteriores, has visto cómo añadir un elemento al final del array utilizando el método `push`.

Sin embargo, el método `push` admite varios argumentos, por lo que puedes añadir varios elementos al final del array de esta manera:

- **Example Code**

  ```js
  array.push(item1, item2, item3);
  ```

> > En este paso, utiliza el método `push` para agregar los strings `"Popcorn", "Beef Jerky", "Potato Chips"` al array `shoppingList`.

El orden es importante, así que asegúrate de agregar los artículos en el orden en que aparecen en la lista.

- **Code**

  ```js
  console.log("Grocery shopping list");
  const shoppingList = [];
  console.log("It will be nice to have some fruit to eat.");
  shoppingList.push("Apples");
  function getShoppingListMsg(arr) {
    return `Current Shopping List: ${arr}`;
  }
  console.log(getShoppingListMsg(shoppingList));
  shoppingList.push("Grapes");
  console.log(getShoppingListMsg(shoppingList));
  console.log("It looks like we need to get some cooking oil.");
  shoppingList.unshift("Vegetable Oil");
  console.log(getShoppingListMsg(shoppingList));
  /*<=== code ===>*/
  shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips")
  /*<=== code ===>*/
  ```

---

## Paso 12

> > Ahora es el momento de mostrar en la consola el array `shoppingList` actualizado.
>
> > Añade otro `console.log` y llama a la función `getShoppingListMsg` pasando el array `shoppingList` como argumento dentro de `console.log` para ver la lista actualizada en la consola.

- **Code**

  ```js
  console.log("Grocery shopping list");
  const shoppingList = [];
  console.log("It will be nice to have some fruit to eat.");
  shoppingList.push("Apples");
  function getShoppingListMsg(arr) {
    return `Current Shopping List: ${arr}`;
  }
  console.log(getShoppingListMsg(shoppingList));
  shoppingList.push("Grapes");
  console.log(getShoppingListMsg(shoppingList));
  console.log("It looks like we need to get some cooking oil.");
  shoppingList.unshift("Vegetable Oil");
  console.log(getShoppingListMsg(shoppingList));
  shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips")
  /*<=== code ===>*/
  console.log(shoppingList);
  console.log(getShoppingListMsg(shoppingList));
  /*<=== code ===>*/
  ```

---

## Paso 13

En esta siguiente parte del taller, repasarás cómo eliminar elementos del final del array.

> > Empieza añadiendo un `console.log` que muestre el mensaje `"This looks like too much junk food."`.

- **Code**

  ```js
  console.log("Grocery shopping list");
  const shoppingList = [];
  console.log("It will be nice to have some fruit to eat.");
  shoppingList.push("Apples");
  function getShoppingListMsg(arr) {
    return `Current Shopping List: ${arr}`;
  }
  console.log(getShoppingListMsg(shoppingList));
  shoppingList.push("Grapes");
  console.log(getShoppingListMsg(shoppingList));
  console.log("It looks like we need to get some cooking oil.");
  shoppingList.unshift("Vegetable Oil");
  console.log(getShoppingListMsg(shoppingList));
  shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips")
  console.log(shoppingList);
  console.log(getShoppingListMsg(shoppingList));
  /*<=== code ===>*/
  console.log("This looks like too much junk food.");
  /*<=== code ===>*/
  ```

---

## Paso 14

En las lecciones anteriores, aprendiste a eliminar elementos del final de un array utilizando el método `pop`.

A continuación te recordamos cómo se utiliza el método `pop`:

- **Example Code**

  ```js
  let array = [1, 2, 3, 4, 5];
  array.pop();
  
  // [1, 2, 3, 4]
  console.log(array); 
  ```

> > Utiliza el método `pop` para eliminar el último elemento del array `shoppingList`.

- **Code**

  ```js
  console.log("Grocery shopping list");
  const shoppingList = [];
  console.log("It will be nice to have some fruit to eat.");
  shoppingList.push("Apples");
  function getShoppingListMsg(arr) {
    return `Current Shopping List: ${arr}`;
  }
  console.log(getShoppingListMsg(shoppingList));
  shoppingList.push("Grapes");
  console.log(getShoppingListMsg(shoppingList));
  console.log("It looks like we need to get some cooking oil.");
  shoppingList.unshift("Vegetable Oil");
  console.log(getShoppingListMsg(shoppingList));
  shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips")
  console.log(shoppingList);
  console.log(getShoppingListMsg(shoppingList));
  console.log("This looks like too much junk food.");
  /*<=== code ===>*/
  shoppingList.pop();
  /*<=== code ===>*/
  ```

---

## Paso 15

> > Ahora es el momento de mostrar en la consola el array `shoppingList` actualizado.
>
> > Añade un `console.log` y llama a la función `getShoppingListMsg` pasando el array `shoppingList` como argumento dentro de `console.log` para ver la lista actualizada en la consola.

- **Code**

  ```js
  console.log("Grocery shopping list");
  const shoppingList = [];
  console.log("It will be nice to have some fruit to eat.");
  shoppingList.push("Apples");
  function getShoppingListMsg(arr) {
    return `Current Shopping List: ${arr}`;
  }
  console.log(getShoppingListMsg(shoppingList));
  shoppingList.push("Grapes");
  console.log(getShoppingListMsg(shoppingList));
  console.log("It looks like we need to get some cooking oil.");
  shoppingList.unshift("Vegetable Oil");
  console.log(getShoppingListMsg(shoppingList));
  shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips")
  console.log(shoppingList);
  console.log(getShoppingListMsg(shoppingList));
  console.log("This looks like too much junk food.");
  shoppingList.pop();
  /*<=== code ===>*/
  console.log(getShoppingListMsg(shoppingList));
  /*<=== code ===>*/
  ```

---

## Paso 16

Ahora es el momento de añadir más artículos al principio de la lista de la compra.

> > Empieza añadiendo una instrucción console.log que registre el mensaje `"It might be nice to get a dessert."`.
>
> > Debajo de esa instrucción `console`, utiliza el método de array correcto para añadir el string `"Chocolate Cake"` al principio del array `shoppingList`.
>
> > Por último, añade un `console.log` y llama a la función `getShoppingListMsg` con el array `shoppingList` como argumento dentro de `console.log` para ver la lista actualizada registrada en la consola.

- **Code**

  ```js
  console.log("Grocery shopping list");
  const shoppingList = [];
  console.log("It will be nice to have some fruit to eat.");
  shoppingList.push("Apples");
  function getShoppingListMsg(arr) {
    return `Current Shopping List: ${arr}`;
  }
  console.log(getShoppingListMsg(shoppingList));
  shoppingList.push("Grapes");
  console.log(getShoppingListMsg(shoppingList));
  console.log("It looks like we need to get some cooking oil.");
  shoppingList.unshift("Vegetable Oil");
  console.log(getShoppingListMsg(shoppingList));
  shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips")
  console.log(shoppingList);
  console.log(getShoppingListMsg(shoppingList));
  console.log("This looks like too much junk food.");
  shoppingList.pop();
  console.log(getShoppingListMsg(shoppingList));
  /*<=== code ===>*/
  console.log("It might be nice to get a dessert.");
  shoppingList.unshift("Chocolate Cake");
  console.log(getShoppingListMsg(shoppingList));
  /*<=== code ===>*/
  ```

---

## Paso 17

En esta última parte del taller, repasarás cómo eliminar un elemento del principio de un array.

> > Empieza añadiendo un `console.log` que muestre el mensaje `"On second thought, maybe we should be more health conscious."`.

- **Code**

  ```js
  console.log("Grocery shopping list");
  const shoppingList = [];
  console.log("It will be nice to have some fruit to eat.");
  shoppingList.push("Apples");
  function getShoppingListMsg(arr) {
    return `Current Shopping List: ${arr}`;
  }
  console.log(getShoppingListMsg(shoppingList));
  shoppingList.push("Grapes");
  console.log(getShoppingListMsg(shoppingList));
  console.log("It looks like we need to get some cooking oil.");
  shoppingList.unshift("Vegetable Oil");
  console.log(getShoppingListMsg(shoppingList));
  shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips")
  console.log(shoppingList);
  console.log(getShoppingListMsg(shoppingList));
  console.log("This looks like too much junk food.");
  shoppingList.pop();
  console.log(getShoppingListMsg(shoppingList));
  console.log("It might be nice to get a dessert.");
  shoppingList.unshift("Chocolate Cake");
  console.log(getShoppingListMsg(shoppingList));
  /*<=== code ===>*/
  console.log("On second thought, maybe we should be more health conscious.");
  /*<=== code ===>*/
  ```

---

## Paso 18

En lecciones anteriores, aprendiste a eliminar un elemento del principio del array utilizando el método `shift`.

A continuación te recordamos cómo se utiliza el método `shift`:

- **Example Code**

  ```js
  const array = [1, 2, 3, 4, 5];
  array.shift();
  
  // Result: [2, 3, 4, 5]
  console.log(array); 
  ```

> > Utiliza el método `shift` para eliminar el primer elemento del array `shoppingList`.

- **Code**

  ```js
  console.log("Grocery shopping list");
  const shoppingList = [];
  console.log("It will be nice to have some fruit to eat.");
  shoppingList.push("Apples");
  function getShoppingListMsg(arr) {
    return `Current Shopping List: ${arr}`;
  }
  console.log(getShoppingListMsg(shoppingList));
  shoppingList.push("Grapes");
  console.log(getShoppingListMsg(shoppingList));
  console.log("It looks like we need to get some cooking oil.");
  shoppingList.unshift("Vegetable Oil");
  console.log(getShoppingListMsg(shoppingList));
  shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips")
  console.log(shoppingList);
  console.log(getShoppingListMsg(shoppingList));
  console.log("This looks like too much junk food.");
  shoppingList.pop();
  console.log(getShoppingListMsg(shoppingList));
  console.log("It might be nice to get a dessert.");
  shoppingList.unshift("Chocolate Cake");
  console.log(getShoppingListMsg(shoppingList));
  console.log("On second thought, maybe we should be more health conscious.");
  /*<=== code ===>*/
  shoppingList.shift();
  /*<=== code ===>*/
  ```

---

## Paso 19

El último cambio que hay que hacer en la lista de la compra es actualizar el primer elemento de la lista.

En lecciones anteriores, aprendiste a actualizar un elemento utilizando la notación entre corchetes y el índice del elemento que deseas actualizar.

A continuación te recordamos cómo actualizar un elemento en un array:

- **Example Code**

  ```js
  const array = [1, 2, 3, 4, 5];

  array[0] = 10;
  // Result: [10, 2, 3, 4, 5]
  console.log(array); 
  ```

> > Actualiza el primer elemento del array `shoppingList` para que diga `"Canola Oil"`.

- **Code**

  ```js
  console.log("Grocery shopping list");
  const shoppingList = [];
  console.log("It will be nice to have some fruit to eat.");
  shoppingList.push("Apples");
  function getShoppingListMsg(arr) {
    return `Current Shopping List: ${arr}`;
  }
  console.log(getShoppingListMsg(shoppingList));
  shoppingList.push("Grapes");
  console.log(getShoppingListMsg(shoppingList));
  console.log("It looks like we need to get some cooking oil.");
  shoppingList.unshift("Vegetable Oil");
  console.log(getShoppingListMsg(shoppingList));
  shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips")
  console.log(shoppingList);
  console.log(getShoppingListMsg(shoppingList));
  console.log("This looks like too much junk food.");
  shoppingList.pop();
  console.log(getShoppingListMsg(shoppingList));
  console.log("It might be nice to get a dessert.");
  shoppingList.unshift("Chocolate Cake");
  console.log(getShoppingListMsg(shoppingList));
  console.log("On second thought, maybe we should be more health conscious.");
  shoppingList.shift();
  /*<=== code ===>*/
  shoppingList[0] = ["Canola Oil"];
  /*<=== code ===>*/
  ```

---

## Paso 20

En este último paso del taller, muestra la lista de la compra final en la consola.

> > Para ello, llama a la función `getShoppingListMsg` pasando la matriz `shoppingList` como argumento dentro de `console.log`.

- **Code**

  ```js
  console.log("Grocery shopping list");
  const shoppingList = [];
  console.log("It will be nice to have some fruit to eat.");
  shoppingList.push("Apples");
  function getShoppingListMsg(arr) {
    return `Current Shopping List: ${arr}`;
  }
  console.log(getShoppingListMsg(shoppingList));
  shoppingList.push("Grapes");
  console.log(getShoppingListMsg(shoppingList));
  console.log("It looks like we need to get some cooking oil.");
  shoppingList.unshift("Vegetable Oil");
  console.log(getShoppingListMsg(shoppingList));
  shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips")
  console.log(shoppingList);
  console.log(getShoppingListMsg(shoppingList));
  console.log("This looks like too much junk food.");
  shoppingList.pop();
  console.log(getShoppingListMsg(shoppingList));
  console.log("It might be nice to get a dessert.");
  shoppingList.unshift("Chocolate Cake");
  console.log(getShoppingListMsg(shoppingList));
  console.log("On second thought, maybe we should be more health conscious.");
  shoppingList.shift();
  shoppingList[0] = ["Canola Oil"];
  /*<=== code ===>*/
  console.log(getShoppingListMsg(shoppingList));
  /*<=== code ===>*/
  ```

---

**¡Y con este último paso, tu lista de la compra está lista!**
