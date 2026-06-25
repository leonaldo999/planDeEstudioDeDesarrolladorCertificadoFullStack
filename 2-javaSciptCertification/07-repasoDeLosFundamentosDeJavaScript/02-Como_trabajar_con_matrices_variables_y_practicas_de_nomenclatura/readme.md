# Cómo trabajar con matrices, variables y prácticas de nomenclatura

En esta sección, aprenderás a trabajar con matrices, variables y prácticas de nomenclatura en JavaScript. Las matrices son estructuras de datos que pueden almacenar múltiples valores en una sola variable. Las variables son contenedores para almacenar datos y las prácticas de nomenclatura ayudan a mantener tu código organizado y fácil de entender.

---

## Tema 1: ¿Cuáles son algunas prácticas comunes para nombrar variables y funciones?

Nombrar variables y funciones es un aspecto importante para escribir código limpio, legible y fácil de mantener. Las buenas prácticas de nomenclatura hacen que tu código se documente por sí mismo, lo que reduce la necesidad de comentarios extensos y facilita que otros desarrolladores —incluido tu yo futuro— entiendan tu código.

Comencemos con las convenciones generales de nomenclatura en JavaScript. En lecciones anteriores aprendiste a usar el estilo _camel case_ para los nombres de variables. Para las variables booleanas, es una práctica común usar prefijos como `is`, `has` o `can`. Esto le indica de inmediato al lector que la variable es booleana:

- **Example code**

  ```js
  let isLoading = true;
  let hasPermission = false;
  let canEdit = true;
  ```

En el caso de las funciones, el nombre debe indicar claramente qué hace la función. A menudo resulta útil comenzar con un verbo:

- **Example code**

  ```js
  function getUserData(){
    /* ... */
  }
  
  function calculateTotal(){
    /* ... */
  }
  
  function validateInput(){
    /* ... */
  }
  ```

Para las funciones que devuelven un valor booleano —a menudo denominadas «predicados»—, puedes usar los mismos prefijos `is`, `has` o `can`:

- **Example code**

  ```js
  function isValidEmail(email) {
    /* ... */
  }
  
  function hasRequiredFields(form) {
    /* ... */
  }
  ```

Cuando tienes funciones que recuperan datos, es común empezar con la palabra `get`:

- **Example code**

  ```js
  function getProductDetails(productId) {
    /* ... */
  }
  
  function getUserProfile(userId) {
    /* ... */
  }
  ```

Cuando tienes funciones que establecen datos, es común empezar con la palabra `set`:

- **Example code**

  ```js
  function setUserPreferences(preferences) {
    /* ... */
  }
  
  function setPageTitle(title) {
    /* ... */
  }
  ```

En el caso de las funciones de manejadores de eventos, puedes anteponerles `handle` o añadirles `handler` al final:

- **Example code**

  ```js
  function handleClick(){
    /* ... */
  }
  
  function onSubmit(){
    /* ... */
  }
  
  function keyPressHandler(){
    /* ... */
  }
  ```

Un manejador de eventos es una acción que ocurre después de que se ha producido un evento, como al hacer clic en un botón. Aprenderás sobre esto en lecciones futuras.

Al nombrar variables de iteración y bucles, es común usar letras únicas como `i`, `j` o `k`, pero para bucles anidados o iteraciones más complejas, puede ser útil usar nombres más descriptivos:

- **Example code**

  ```js
  for (let i = 0; i < array.length; i++) {
    /* ... */
  }
  
  for (let studentIndex = 0; studentIndex < students.length; studentIndex++) {
    /* ... */
  }
  ```

Para los nombres de las matrices, considera usar sustantivos en plural para indicar que la variable contiene varios elementos:

- **Example code**

  ```js
  const colors = ['red', 'green', 'blue'];
  const userNames = ['Alice', 'Bob', 'Charlie'];
  ```

Recuerda que el objetivo es que tu código sea lo más claro posible por sí mismo. Una buena regla general es que, si necesitas agregar un comentario para explicar qué hace una variable o una función, tal vez debas considerar cambiarle el nombre por algo más descriptivo.

Por último, mantén la coherencia con tu código o con tu equipo. Si tu equipo ha establecido convenciones de nomenclatura, respétalas. La coherencia hace que el código sea más legible y fácil de mantener para todos los involucrados.

---

## Cuestionario 1

1. **¿Cuál de las siguientes opciones es un buen nombre para una variable booleana que verifica si un usuario ha iniciado sesión?**

    - [ ] a) `user_logged`
    - [ ] b) `checkLogin`
    - [x] c) `isLoggedIn` //correcto
    - [ ] d) `login`

2. **¿Cuál es una buena convención de nomenclatura para una función que recupera información de productos?**

    - [ ] a) `productInformation`
    - [x] b) `getProductInfo` //correcto
    - [ ] c) `retrieveProduct`
    - [ ] d) `prod_info`

3. **¿Cuál de las siguientes opciones debes seguir si estás trabajando en un código ya establecido y/o con un equipo?**

    - [ ] a) Usa la función de buscar y reemplazar de tu editor de texto para actualizar cualquier nombre de función o variable que encuentres y que pueda mejorarse, incluso si no está relacionado con la tarea en la que estás trabajando.

    - [x] b) Sigue las convenciones de nomenclatura para variables y funciones que ya se hayan establecido. //correcto

    - [ ] c) Crear tus propias convenciones de nomenclatura para cualquier código nuevo que escribas.

    - [ ] d) Utilizar estrictamente las convenciones de nomenclatura que se tratan en esta lección.

[☝️](#cómo-trabajar-con-matrices-variables-y-prácticas-de-nomenclatura)

---

## Tema 2: ¿Cómo se obtiene la longitud de un array y cómo se puede crear un array vacío de longitud fija?

En lecciones anteriores ya conociste la propiedad `length` esta propiedad devuelve el número de elementos que contiene un array. Así que aquí tienes un breve recordatorio de cómo funciona:

- **Example code**

  ```js
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.length); // 3
  ```

Es posible tener matrices con celdas vacías. Las celdas vacías se definen como aquellas que no contienen nada. Esto es diferente a una matriz cuyo valor sea `undefined`. Este tipo de matrices se conocen como matrices dispersas. A continuación, un ejemplo:

- **Example code**

  ```js
  const sparseArray = [1, , , 4];
  console.log(sparseArray.length); // 4
  ```

En este caso, aunque solo tengamos dos elementos definidos, el `1` y el `4`, la longitud es `4` porque el índice más alto (`3`) más `1` nos da una longitud de `4`.

Ahora veamos cómo crear un array vacío de longitud fija. Hay varias formas de hacerlo en JavaScript, pero un método común es usar el constructor `Array()` con un argumento numérico. El constructor `Array()` se puede usar con la palabra clave `new` para crear un nuevo array. Aquí hay un ejemplo:

- **Example code**

  ```js
  const emptyArray = new Array(5);
  console.log(emptyArray.length); // 5
  console.log(emptyArray); // [ , , , , ]
  ```

En este ejemplo, creamos un nuevo array utilizando `Array(5)`. Esto crea un array disperso de longitud `5` en el que todas las posiciones están vacías.

Otra forma de crear un array vacío de longitud fija es utilizar el método `Array.from()` con un argumento de longitud. A diferencia de new `Array(n)`, este método crea un array de la longitud especificada en el que todos los elementos existen y tienen un valor `undefined`:

- **Example code**

  ```js
  const fixedLengthArray = Array.from({ length: 5 });
  console.log(fixedLengthArray.length); // 5
  console.log(fixedLengthArray); // [undefined, undefined, undefined, undefined, undefined]
  ```

Si quieres crear un array de una longitud específica y llenarlo con un valor por defecto, puedes usar el método `Array.fill()`:

- **Example code**

  ```js
  const filledArray = new Array(3).fill(0);
  console.log(filledArray); // [0, 0, 0]
  ```

Esto crea un array de longitud tres y llena todos los elementos con el valor `0`. Nota: al llenar con objetos, todas las posiciones hacen referencia al mismo objeto; si necesitas copias independientes, utiliza una función de retorno o `Array.from()` en su lugar.

Entender cómo obtener la longitud de un array y crear arrays de longitud fija es importante para muchas tareas de programación, especialmente cuando necesitas inicializar arrays para algoritmos o estructuras de datos específicos.

---

## Cuestionario 2

1. **¿Cuál será el resultado del siguiente código?**

    ```js
    let arr = [1, 2, 3, , 5];
    console.log(arr.length);
    ```

    - [x] a)  `4`
    - [x] b)  `5` //correcto
    - [ ] c)  `3`
    - [ ] d)  Esto generará un error.

2. **¿Cuál de las siguientes opciones es una forma de crear un array disperso?**

    - [ ] a) `new Array(5)` //correcto
    - [x] b) `Array.from({ length: 5 })`
    - [ ] c) `new Array(5).fill(undefined)`
    - [ ] d) `[1, 2, 3, 4, 5]`

3. **¿Cuál será el resultado del siguiente código?**

    ```js
    let arr = new Array(3).fill(1);
    console.log(arr);
    ```

    - [ ] a)  `[1, 1, 1]` //correcto
    - [x] b)  `[3]`
    - [ ] c)  `[undefined, undefined, undefined]`
    - [ ] d)  `[<3 empty items>]`

[☝️](#cómo-trabajar-con-matrices-variables-y-prácticas-de-nomenclatura)

---
