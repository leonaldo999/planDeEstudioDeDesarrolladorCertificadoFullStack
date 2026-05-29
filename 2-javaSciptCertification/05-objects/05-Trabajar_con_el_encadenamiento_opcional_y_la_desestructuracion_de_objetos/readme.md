<!-- Teoría -->
# Trabajar con el encadenamiento opcional y la desestructuración de objetos

En esta sección, aprenderás a trabajar con el encadenamiento opcional y la desestructuración de objetos en JavaScript. Estas son características útiles que te permiten acceder a propiedades de objetos anidados de manera segura y extraer valores de objetos de forma más concisa.

---

## Tema 1: ¿Qué es el operador de encadenamiento opcional y cómo funciona?

El operador de encadenamiento opcional (`?.`) es una herramienta útil en JavaScript que permite acceder de forma segura a las propiedades de un objeto o llamar a métodos sin preocuparse de si existen o no. Es como una red de seguridad para trabajar con objetos a los que les puedan faltar partes.

- **Example code**

  ```js
  const person = {
    name: "Alice",
    age: 30
  };
  
  console.log(person.name); // "Alice"
  console.log(person.job); // undefined
  ```

En este ejemplo, `person.name` existe, por lo que se muestra `Alice`. Sin embargo, `person.job` no existe, por lo que nos devuelve `undefined`.

Ahora, supongamos que queremos acceder a una propiedad de un objeto que podría no existir:

- **Example code**

  ```js
  const person = {
    name: "Alice",
    age: 30
  };
  
  console.log(person.address.street); // This will throw an error!
  ```

Este ejemplo generará un error `Uncaught TypeError`. Dado que `person.address` es `underfined`, no podemos acceder a la propiedad `street`. Aquí es donde resulta útil el operador de encadenamiento opcional. A continuación se muestra un ejemplo del uso del operador de encadenamiento opcional:

- **Example code**

  ```js
  const user = {
    name: "John",
    profile: {
      email: "john@example.com",
      address: {
        street: "123 Main St",
        city: "Somewhere"
      }
    }
  };
  
  console.log(user?.profile?.address?.street); // "123 Main St"
  console.log(user?.profile?.phone?.number);   // undefined
  ```

Al utilizar el operador de encadenamiento opcional, le indicamos a JavaScript que solo continúe con la operación si el objeto (o el valor que precede al `?.`) existe y no es `null` ni `underfiend`.

Si el valor que precede al `?.` es `null` o `underfiend`, JavaScript devuelve `undefined` en lugar de intentar continuar con la operación y generar un error.

Recuerda que el operador de encadenamiento opcional resulta más útil cuando no estás seguro de si existe una propiedad o un método. Ayuda a evitar errores y hace que tu código sea más robusto.

---

## Cuestionario 1

1. **¿Para qué sirve el operador de encadenamiento opcional (`?.`) en JavaScript**

    - [ ] a) Asigna un valor por defecto cuando falta una propiedad.
    - [ ] b) Evita que aparezcan valores undefined en los objetos.
    - [x] c) Permite acceder de forma segura a propiedades anidadas y devuelve undefined en lugar de generar un error si falta un valor. //correcto
    - [ ] d) Obliga a JavaScript a evaluar las propiedades que faltan, aunque no existan.

1. **¿Cuál será el resultado del siguiente código?**

    ```js
    const person = {
      name: "Alice",
      age: 30
    };
    
    console.log(person.address.street);
    ```

    - [ ] a) `undefined`
    - [ ] b) `street`
    - [ ] c) `{}`
    - [x] d) Se produce un TypeError porque person.address no está definido. //correcto

1. **¿Cuál será el resultado del siguiente código?**

    ```JSON
    const user = {
      name: "John",
      profile: {
        email: "john@example.com",
        "home address": {
          street: "123 Main St",
          city: "Somewhere"
        }
      }
    };
    
    console.log(user?.profile?.address?.street);
    ```

    - [x] a) `undefined` //correcto
    - [ ] b) `"123 Main St"`
    - [ ] c) `null`
    - [ ] d) Se produce un `TypeError`.

[☝️](#trabajar-con-el-encadenamiento-opcional-y-la-desestructuración-de-objetos)

---

## Tema 2: ¿¿Qué es la desestructuración de objetos y cómo funciona?

La desestructuración de objetos es una potente característica de JavaScript que te permite extraer valores de objetos y asignarlos a variables de una manera más concisa y legible.

Forma parte de la especificación ES6 (ECMAScript 2015) y se ha convertido en una herramienta esencial para muchos desarrolladores de JavaScript.

La desestructuración puede simplificar tu código, especialmente cuando trabajas con objetos complejos o cuando necesitas extraer varios valores a la vez.

En esencia, la desestructuración de objetos consiste en descomponer los valores de los objetos en variables distintas. En lugar de acceder a las propiedades del objeto una por una, puedes extraer varias propiedades en una sola instrucción. Esto puede hacer que tu código sea más limpio y eficiente.

Comencemos con un ejemplo para ilustrar cómo funciona la desestructuración de objetos:

- **Example code**

  ```js
  const person = { name: "Alice", age: 30, city: "New York" };
  
  const { name, age } = person;
  
  console.log(name); // Alice
  console.log(age);  // 30
  ```

En este ejemplo, extraemos las propiedades `name` y `age` del objeto `person` y las asignamos a variables con los mismos nombres.

Una de las ventajas más potentes de la desestructuración de objetos es que permite asignar los valores extraídos a variables con nombres diferentes. Esto resulta especialmente útil cuando se trabaja con objetos cuyos nombres de propiedades podrían entrar en conflicto con variables ya existentes o cuando se desea utilizar un nombre diferente:

- **Example code**

  ```js
  let person = { name: "Alice", age: 30, city: "New York" };

  let { name: personName, age: personAge } = person;
  
  console.log(personName); // Alice
  console.log(personAge); //  30
  ```

En este caso, estamos extrayendo la propiedad `name` y asignándola a una variable llamada `personName`, y hacemos lo mismo con `age` y `personAge`.

La desestructuración de objetos también te permite establecer valores por defecto. Si una propiedad no existe en el objeto que estás desestructurando, puedes especificar un valor alternativo:

- **Example code**

  ```js
  let person = { name: "Alice", age: 30, city: "New York" };
  let { name, age, country = "Unknown" } = person;
  
  console.log(country); // Unknown
  ```

En este caso, dado que la propiedad `country` no existe en nuestro objeto `person`, se le asigna el valor predeterminado `Unknown`.

Otro caso habitual es la desestructuración de objetos anidados. Puedes desestructurar propiedades anidadas dentro de otros objetos utilizando otro par de llaves:

- **Example code**

  ```js
  const recipe = {
    name: "Chocolate Cake",
    ingredients: {
      flour: "2 cups",
      sugar: "1 cup"
    }
  };
  
  // Extract `flour` from `ingredients`
  const { ingredients: { flour } } = recipe;
  
  console.log(flour); // "2 cups"
  ```

Esto equivale a acceder a la propiedad directamente:

- **Example code**

  ```js
  const flour = recipe.ingredients.flour;
  console.log(flour); // "2 cups"
  ```

Ahora, hablemos de la notación abreviada en la desestructuración de objetos. Cuando creas objetos, especialmente cuando los nombres de las propiedades coinciden con los de las variables, puedes usar una sintaxis abreviada:

- **Example code**

  ```js
  let name = "Bob";
  let age = 25;
  
  let person = { name, age };

  console.log(person); // { name: "Bob", age: 25 }
  ```

El código anterior toma las propiedades que tienen el mismo nombre que nuestras variables y les asigna los valores de esas variables.

Esta notación abreviada resulta especialmente útil cuando se devuelven objetos desde funciones o se crean objetos con múltiples propiedades:

- **Example code**

  ```js
  function createPerson(name, age) {
    return { name, age };
  }
  
  let person = createPerson("Charlie", 35);
  console.log(person); // { name: "Charlie", age: 35 }
  ```

La desestructuración de objetos y la notación abreviada de objetos son características potentes que pueden hacer que tu código sea más conciso y fácil de leer.

Son especialmente útiles cuando se trabaja con estructuras de datos complejas o cuando necesitas pasar varios parámetros a las funciones.

A medida que sigas trabajando con JavaScript, encontrarás muchas situaciones en las que estas técnicas pueden simplificar tu código y hacerlo más expresivo.

---

## Cuestionario 2

1. **¿Cuál es el objetivo principal de la desestructuración de objetos en JavaScript?**

    - [ ] a) Crear nuevos objetos.
    - [x] b) Extraer valores de objetos y asignarlos a variables. //correcto.
    - [ ] c) Combinar varios objetos.
    - [ ] d) Eliminar propiedades de objetos.

2. **¿Cómo se puede asignar un valor predeterminado a una variable al desestructurar un objeto?**

    - [x] a) `{ property = defaultValue } = object` //correcto
    - [ ] b) `{ property: defaultValue } = object`
    - [ ] c) `{ property || defaultValue } = object`
    - [ ] d) `{ property ? defaultValue } = object`

3. **¿Qué hace la notación abreviada `{ name, age }` al crear un objeto?**

    - [ ] a) Crea un objeto con propiedades `undefined`.
    - [ ] b) Crea un objeto con valores `null` para `name` y `age`.
    - [x] c) Crea un objeto con propiedades llamadas `name` y `age`, asignándoles los valores de las variables con los mismos nombres. //correcto
    - [ ] d) Genera un error porque es una sintaxis inválida.

[☝️](#trabajar-con-el-encadenamiento-opcional-y-la-desestructuración-de-objetos)

---
