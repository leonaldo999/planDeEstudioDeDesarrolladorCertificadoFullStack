<!-- Teoría -->
# Trabajar con JSON

En esta sección, aprenderás a trabajar con JSON (JavaScript Object Notation), un formato de texto ligero para el intercambio de datos. JSON es fácil de leer y escribir para los humanos, y fácil de analizar y generar para las máquinas.

---

## Tema 1: ¿Qué es `JSON` y cómo se accede a los valores utilizando la notación de corchetes y puntos?

¿Qué es **JSON** y cómo se accede a los valores utilizando la notación de corchetes y puntos?

**JSON** son las siglas de *JavaScript Object Notation*. Es un formato de datos ligero y basado en texto que se utiliza habitualmente para intercambiar datos entre un servidor y una aplicación web.

Una de las razones por las que **JSON** es tan popular en el desarrollo web es porque es legible tanto para las máquinas como para los humanos.

Dado que **JSON** es independiente del lenguaje, puedes enviar fácilmente datos **JSON** desde una aplicación Java a una aplicación Python, o desde una aplicación JavaScript a una aplicación C#.

**JSON** admite muchos tipos de datos, incluyendo **objects**, **arrays**, **strings**, **booleans**, **null**, y **numbers**.

Aquí tienes un ejemplo de un objeto **JSON**:

- **Example code**

  ```js
  {
    "name": "Alice",
    "age": 30,
    "isStudent": false,
    "list of courses": ["Mathematics", "Physics", "Computer Science"]
  }
  ```

Como puedes ver, **JSON** utiliza pares clave-valor para almacenar información, y cada par va separado por una coma. Cada clave debe ir entre comillas dobles; de lo contrario, aparecerá un error.

Para acceder a los datos de un objeto **JSON**, puedes utilizar la notación de puntos o la notación entre corchetes. En este ejemplo, utilizamos la notación de puntos para acceder a la edad del objeto **JSON**:

- **Example code**

  ```js
  import data from "./example.json" with { type: "json" };
  
  console.log(data.age);
  ```

En este ejemplo concreto se utiliza lo que se conoce como una instrucción `import`, que importa el objeto **JSON** a este archivo para que podamos acceder a él. Aprenderás más sobre la instrucción `import` en una lección futura.

También puedes utilizar la notación entre corchetes para acceder a la información de los objetos **JSON**. A continuación se muestra un ejemplo de cómo acceder al array `list of courses`:

- **Example code**

  ```js
  import data from "./example.json" with { type: "json" };

  console.log(data["list of courses"]);
  ```

El uso de la notación entre corchetes resulta especialmente útil en este caso, ya que la clave contiene varias palabras separadas por espacios. Si intentáramos usar la notación con punto, se produciría un error.

En resumen, **JSON** es un formato versátil que puede almacenar muchos tipos de datos, incluyendo arrays y objetos anidados. Mediante el uso de la notación con punto o la notación entre corchetes, puedes acceder fácilmente a los valores almacenados dentro de un objeto **JSON**.

---

## Cuestionario 1

1. **¿Cuál de las siguientes afirmaciones sobre JSON es cierta?**

    - [ ] a) JSON solo se utiliza en JavaScript.
    - [x] b) JSON es un formato de datos ligero que se utiliza para el intercambio de datos entre servidores y aplicaciones web. //correcto
    - [ ] c) JSON no admite arrays.
    - [ ] d) JSON debe incluir funciones.

2. **¿Cómo se puede acceder al valor de la clave `name` en el siguiente objeto JSON utilizando la notación de puntos?**

    ```JSON
    {
      "name": "Alice",
      "age": 30
    } 
    ```

    - [ ] a) `data("name")`
    - [ ] b) `data["name"]`
    - [x] c) `data.name` //correcto
    - [ ] d) `data.name[]`

3. **¿Cuál de las siguientes claves te obligaría a usar la notación entre corchetes para acceder a su valor?**

    ```JSON
    {
      "first name": "Alice",
      "age": 30
    } 
    ```

    - [ ] a) `"age"`
    - [x] b) `"first name"` //correcto
    - [ ] c) Las dos opciones anteriores.
    - [ ] d) Ninguna de las anteriores.

[☝️](#trabajar-con-json)

---

## Tema 2: ¿Cómo funcionan `JSON.parse()` y `JSON.stringify()`?

En JavaScript existen dos potentes métodos para manejar datos **JSON**: `JSON.parse()` y `JSON.stringify()`. Estos métodos se utilizan habitualmente para convertir strings **JSON** en objects JavaScript y viceversa.

`JSON.stringify()` se utiliza para convertir un object JavaScript en un string **JSON**. Esto resulta útil cuando se desea almacenar o transmitir datos en un formato que se pueda compartir o transferir fácilmente entre sistemas.

A continuación se explica cómo se puede utilizar el método `JSON.stringify()`:

- **Example code**

  ```js
  const user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  const jsonString = JSON.stringify(user);
  console.log(jsonString);
  ```

El método `JSON.stringify()` también admite un parámetro opcional denominado replacer, que puede ser una función o un array. A continuación se muestra un ejemplo del uso de un array como parámetro opcional replacer:

- **Example code**

  ```js
  const developerObj = {
    firstName: "Jessica",
    isAwesome: true,
    isMusician: true,
    country: "USA",
  };
  
  // result: {"firstName":"Jessica","country":"USA"}
  console.log(JSON.stringify(developerObj, ["firstName", "country"]));
  ```

En este ejemplo, tenemos un objeto `developerObj` con cuatro propiedades. Al utilizar el método `JSON.stringify()`, podemos pasar un array como segundo parámetro y especificar qué propiedades queremos convertir a string. El resultado será un objeto convertido a string que contenga únicamente las propiedades `firstName` y `country`.

Otro parámetro opcional del método `JSON.stringify()` es el parámetro `spacer`. Este permite controlar el espaciado del resultado convertido a string:

- **Example code**

  ```js
  const developerObj = {
    firstName: "Jessica",
    isAwesome: true,
    isMusician: true,
    country: "USA",
  };
  
  console.log(JSON.stringify(developerObj, null, 2));
  
  /* result
  {
    "firstName": "Jessica",
    "isAwesome": true,
    "isMusician": true,
    "country": "USA"
  }
  */
  ```

La mayoría de las veces no utilizarás ninguno de estos parámetros opcionales del método `JSON.stringify()`, pero es útil conocerlos.

Otro método que utilizarás mucho en tu programación es el método `JSON.parse()`. `JSON.parse()` convierte un string **JSON** de nuevo en un objeto JavaScript. Esto resulta útil cuando recuperas datos **JSON** de un servidor web o de `localStorage` y necesitas manipular los datos en tu aplicación. Aprenderás más sobre `localStorage` en una lección futura.

Aquí tienes un ejemplo de cómo trabajar con el método `JSON.parse()`:

- **Example code**

  ```js
  const jsonString = '{"name":"John","age":30,"isAdmin":true}';
  const userObject = JSON.parse(jsonString);
  console.log(userObject);
  
  // Result:
  // { name: 'John', age: 30, isAdmin: true }
  ```

Esto te permite trabajar con los datos en tu programa como si se tratara de un object JavaScript normal, lo que facilita su manipulación y uso.

En los próximos módulos, seguiremos aprendiendo más sobre cómo trabajar con **JSON** y los métodos `JSON.parse()` y `JSON.stringify()`.

---

## Cuestionario 2

1. **¿Qué hace `JSON.stringify()`?**

    - [ ] a) Convierte un string JSON en un object JavaScript.
    - [x] b) Convierte un object JavaScript en un string JSON //correcto.
    - [ ] c) Envía datos a un servidor web.
    - [ ] d) Convierte un array en un string.

2. **¿Qué hace `JSON.parse()`**

    - [ ] a) Convierte un object JavaScript en un string JSON.
    - [ ] b) Almacena datos en el almacenamiento local.
    - [x] c) Convierte un string JSON en un object JavaScript. //correcto
    - [ ] d) Envía datos a través de la red.

3. **Dada el siguiente string JSON, ¿cómo lo convertirías de nuevo en un objeto JavaScript y accederías al valor `age`?**

    ```js
    const jsonString = '{"name":"Alice","age":25}';
    ```

    - [ ] a) `jsonString.name`
    - [ ] b) `JSON.stringify(jsonString).age`
    - [x] c) `JSON.parse(jsonString).age` //correcto
    - [ ] d) `jsonString[1]`

[☝️](#trabajar-con-json)

---
