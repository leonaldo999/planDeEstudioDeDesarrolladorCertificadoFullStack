<!-- Clase -->
# Introducción a los objetos de JavaScript y sus propiedades

En esta sección, aprenderás sobre los objetos de JavaScript y cómo funcionan. Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. El valor de una propiedad puede ser una función, lo que se conoce como un método.

---

## Tema 1: ¿Qué es un objeto en JavaScript y cómo se puede acceder a las propiedades de un objeto?

En JavaScript, un objeto es una estructura de datos fundamental que permite almacenar y organizar datos y funcionalidades relacionados.

Puedes pensar en un objeto como un contenedor que alberga diversos datos, de forma muy similar a como un archivador contiene diferentes carpetas y documentos.

Estos datos se denominan propiedades y constan de un nombre (o clave) y un valor.

- **Example code**

  ```js
  const exampleObject = {
    propertyName: value,
  }
  ```

Los objetos son increíblemente versátiles y constituyen la columna vertebral de JavaScript. De hecho, casi todo en JavaScript es un objeto o puede tratarse como tal. Esto incluye las matrices, las funciones e incluso los tipos de datos primitivos, como las cadenas y los números, cuando se utilizan de determinadas maneras.

Esta naturaleza centrada en los objetos de JavaScript es una de las razones por las que es un lenguaje tan flexible y potente. Veamos cómo se puede crear un objeto:

- **Example code**

  ```js
  const person = {
    name: "Alice",
    age: 30,
    city: "New York"
  };
  ```

En este ejemplo, hemos creado un objeto llamado `person` con tres propiedades: `name`, `age` y `city`. Cada propiedad tiene un nombre y un valor, separados por dos puntos.

Ahora, veamos cómo se puede acceder a estas propiedades. Hay dos formas principales de acceder a las propiedades de un objeto en JavaScript: la notación de puntos y la notación de corchetes.

La notación de puntos es la forma más común y sencilla de acceder a las propiedades de un objeto. Esta es la sintaxis básica de la notación de puntos:

- **Example code**

  ```js
  objectName.propertyName
  ```

Así es como se utilizaría la notación de puntos con nuestro objeto `person`:

- **Example code**

  ```js
  const person = {
    name: "Alice",
    age: 30,
    city: "New York"
  };
  
  console.log(person.name);  // Alice
  console.log(person.age);   // 30
  ```

La notación de puntos es concisa y fácil de leer, lo que la convierte en la opción preferida cuando conoces el nombre exacto de la propiedad a la que deseas acceder y ese nombre es un identificador válido de JavaScript (es decir, no comienza con un número y no contiene caracteres especiales ni espacios).

La notación entre corchetes, por otro lado, te permite acceder a las propiedades de un objeto utilizando un string entre corchetes. Así es como se utiliza la notación entre corchetes:

- **Example code**

  ```js
  const person = {
    name: "Alice",
    age: 30,
    city: "New York"
  };
  
  console.log(person["name"]); // Alice
  console.log(person["age"]); //  30
  ```

La notación entre corchetes es más flexible que la notación con punto, ya que permite utilizar nombres de propiedades que no son identificadores válidos en JavaScript. Por ejemplo, si tuvieras un nombre de propiedad con espacios o que comenzara con un número, tendrías que utilizar la notación entre corchetes:

- **Example code**

  ```js
  const oddObject = {
    "1stProperty": "Hello",
    "property with spaces": "World"
  };
  
  console.log(oddObject["1stProperty"]);  // Hello
  console.log(oddObject["property with spaces"]);  // World
  ```

Otra ventaja de la notación entre corchetes es que permite utilizar variables para acceder a las propiedades de forma dinámica:

- **Example code**

  ```js
  const person = {
    name: "Alice",
    age: 30,
    city: "Wonderland"
  };
  
  let propertyName = "city";
  console.log(person[propertyName]); // Wonderland
  ```

Esta flexibilidad hace que la notación entre corchetes resulte especialmente útil cuando no conoces el nombre exacto de la propiedad en el momento de escribir el código, o cuando trabajas con nombres de propiedades que provienen de la entrada del usuario o de alguna otra fuente dinámica.

Vale la pena señalar que los objetos en JavaScript son increíblemente potentes y versátiles. Pueden contener no solo valores simples como strings y números, sino también arrays u otros objetos.

Comprender los objetos y cómo trabajar con ellos es fundamental en JavaScript, ya que se utilizan ampliamente en todo el lenguaje y en muchas bibliotecas y marcos de trabajo de JavaScript.

A medida que continúes aprendiendo y trabajando con JavaScript, descubrirás que dominar los objetos te abre un mundo de posibilidades para crear aplicaciones complejas y potentes.

---

## Cuestionario 1

1. **¿Qué notación usarías para acceder a una propiedad de un objeto si el nombre de la propiedad contiene espacios?**

    - [ ] a) Notación de puntos
    - [x] b) Notación de corchetes //correcto
    - [ ] c) Tanto la notación de puntos como la de corchetes
    - [ ] d) Ninguna, no es posible tener nombres de propiedades con espacios

2. **¿Cuál es la ventaja de usar la notación entre corchetes en lugar de la notación con punto al acceder a las propiedades de un objeto?**

    - [ ] a) Es más rápido de escribir.
    - [x] b) Permite usar variables como nombres de propiedades. //correcto
    - [ ] c) Es la única forma de acceder a propiedades anidadas.
    - [ ] d) Convierte automáticamente los nombres de las propiedades a mayúsculas.

3. **¿Por qué se dice que la mayoría de las cosas en JavaScript son objetos?**

    - [ ] a) Porque todo en JavaScript tiene propiedades y métodos.
    - [ ] b) Porque JavaScript se diseñó originalmente para la programación orientada a objetos.
    - [ ] c) Porque los objetos son el único tipo de datos en JavaScript.
    - [x] d) Porque incluso los tipos de datos primitivos pueden tratarse como objetos en ciertos contextos. //correcto

[☝️](#introducción-a-los-objetos-de-javascript-y-sus-propiedades)

---

## Tema 2: ¿Cómo se pueden eliminar propiedades de un objeto?

Hay varias formas de eliminar propiedades de un objeto, siendo el operador `delete` el método más sencillo y más utilizado.

Al usar `delete`, se elimina la propiedad seleccionada del objeto. A continuación, se muestra un ejemplo de cómo usar el operador `delete`:

- **Example code**

  ```js
  const person = {
    name: "Alice",
    age: 30,
    job: "Engineer"
  };
  
  delete person.job;
  
  console.log(person.job); // undefined
  ```

En este ejemplo, comenzamos con un objeto `person` que tiene tres propiedades: `name`, `age` y `job`. A continuación, utilizamos el operador `delete` para eliminar la propiedad `job`. Tras la eliminación, el objeto `person` ya no tiene la propiedad `job`.

Otra forma de eliminar propiedades es mediante la asignación desestructurada con parámetros restantes. Este método no elimina realmente la propiedad, sino que crea un nuevo objeto sin las propiedades especificadas:

- **Example code**

  ```js
  const person = {
    name: "Bob",
    age: 25,
    job: "Designer",
    city: "New York"
  };
  
  const { job, city, ...remainingProperties } = person;
  
  // { name: "Bob", age: 25 }
  console.log(remainingProperties);
  ```

En este ejemplo, utilizamos la desestructuración para extraer las propiedades `job` y `city` del objeto `person`, y recopilamos las propiedades restantes en un nuevo objeto llamado `remainingProperties`. De esta forma, se crea un nuevo objeto sin las propiedades `job` y `city`.

Saber cómo eliminar propiedades de los objetos es una habilidad importante en la programación con JavaScript. Te permite manipular objetos de forma dinámica y eliminar datos innecesarios.

---

## Cuestionario 2

1. **¿Cuál será el resultado del siguiente código?**

    ```js
    let obj = {a: 1, b: 2, c: 3};
    delete obj.b;
    console.log(obj);
    ```

    - [x] a) `{a: 1, c: 3}`` //correcto
    - [ ] b) `{a: 1, b: undefined, c: 3}
    - [ ] c) `{a: 1, b: 2, c: 3}`
    - [ ] d) Esto generará un error.

2. **¿Cuál será el resultado del siguiente código?**

    ```js
    let car = {
        brand: "Toyota",
        model: "Corolla",
        year: 2020
    };
    
    delete car.year;
    console.log(car.year);
    ```

    - [ ] a) `2020`
    - [x] b) `undefined` //correcto
    - [ ] c) `null`
    - [ ] d) Esto generará un error.

3. **¿Qué operador se utiliza habitualmente para eliminar propiedades de un objeto en JavaScript?**

    - [ ] a) `remove`
    - [x] b) `delete` //correcto
    - [ ] c) `erase`
    - [ ] d) `clear`

[☝️](#introducción-a-los-objetos-de-javascript-y-sus-propiedades)

---

## Tema 3: ¿Cómo comprobar si un objeto tiene una propiedad?

En JavaScript, hay varias formas de comprobar si un objeto tiene una propiedad específica. Comprender estos métodos es importante para trabajar de manera eficaz con objetos, especialmente cuando se manejan datos de fuentes externas o cuando es necesario asegurarse de que ciertas propiedades existen antes de utilizarlas.

Exploraremos algunos enfoques comunes: el método `hasOwnProperty()`, el método `Object.hasOwn()`, el operador `in` y la comprobación con `undefined`.

Comencemos con el método `hasOwnProperty()`. Este método devuelve un valor booleano que indica si el objeto tiene la propiedad especificada como una propiedad propia. He aquí un ejemplo:

- **Example code**

  ```js
  const person = {
    name: "Alice",
    age: 30
  };
  
  console.log(person.hasOwnProperty("name")); // true
  console.log(person.hasOwnProperty("job")); // false
  ```

En este ejemplo, tenemos un objeto llamado `person` con dos propiedades: `name` y `age`. Para comprobar si `name` es una propiedad del objeto `person`, utilizamos el método `hasOwnProperty()`. Dado que `name` es una propiedad, devolverá `true`. Sin embargo, cuando utilizamos `hasOwnProperty()` para comprobar si `job` es una propiedad, devolverá `false` porque no existe en el objeto.

`Object.hasOwn()` es la forma moderna y recomendada de verificar si un objeto tiene una propiedad propia (no heredada). Piensa en ello como una versión mejorada y más segura de `hasOwnProperty()`. La sintaxis es `Object.hasOwn(objeto, nombreDePropiedad)`: pasas el objeto como primer argumento y el nombre de la propiedad como segundo.

Aquí tienes un ejemplo básico:

- **Example code**

  ```js
  const person = {
    name: "Alice",
    age: 30
  };
  
  console.log(Object.hasOwn(person, "name")); // true
  console.log(Object.hasOwn(person, "job")); // false
  ```

En este ejemplo, `Object.hasOwn(person, "name")` devuelve `true` porque `name` existe directamente en el objeto `person`. `Object.hasOwn(person, "job")` devuelve `false` porque `job` nunca se añadió al objeto.

Es muy importante entender que `Object.hasOwn()` solo comprueba si la propiedad existe; no le importa el valor de la propiedad. Esto significa que sigue devolviendo `true` incluso cuando el valor es `0`, `false`, `null` o `undefined`:

- **Example code**

  ```js
  const user = {
    username: "coder123",
    score: 0,
    isActive: false,
    nickname: null
  };
  
  // Object.hasOwn() correctly reports these all exist
  console.log(Object.hasOwn(user, "score"));    // true  (value is 0, but property exists)
  console.log(Object.hasOwn(user, "isActive")); // true  (value is false, but property exists)
  console.log(Object.hasOwn(user, "nickname")); // true  (value is null, but property exists)
  console.log(Object.hasOwn(user, "email"));   // false (property was never added)
  
  // Danger! Using if() directly gives wrong results for falsy values
  if (user.score) {
    console.log("Has score"); // This will NOT print even though score exists!
  }
  
  // Safe! Object.hasOwn() gives correct result
  if (Object.hasOwn(user, "score")) {
    console.log("Has score:", user.score); // Has score: 0
  }
  ```

Otra forma de comprobar si un objeto tiene una propiedad es usar el operador `in`. Al igual que `hasOwnProperty()`, el operador `in` devolverá `true` si la propiedad existe en el objeto. Así es como se usa:

- **Example code**

  ```js
  const person = {
    name: "Bob",
    age: 25
  };
  console.log("name" in person);  // true
  ```

En este ejemplo, `"name" in person` devuelve `true` porque `name` es una propiedad de person.

El tercer método consiste en comprobar si una propiedad está `undefined`. Este enfoque puede resultar útil, pero tiene algunas limitaciones. He aquí un ejemplo:

- **Example code**

  ```js
  const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
  };
  
  console.log(car.brand !== undefined); // true
  console.log(car.color !== undefined); // false
  ```

En este código, verificamos que `car.brand` y `car.color` no sean `undefined`. Esto funciona porque al acceder a una propiedad inexistente en un objeto se devuelve `undefined`. Sin embargo, este método puede dar falsos negativos si una propiedad tiene explícitamente el valor `undefined`.

En la práctica, la elección entre estos métodos suele depender de los requisitos específicos de tu código. Comprender las diferencias entre ellos te ayudará a tomar la decisión correcta en diferentes situaciones.

---

## Cuestionario 3

1. **¿Cuál será el resultado del siguiente código?**

    ```js
    let obj = {x: 0, y: null};
    console.log(obj.hasOwnProperty("y"));
    ```

    - [x] a) `true` //correcto
    - [ ] b) `false`
    - [ ] c) `null`
    - [ ] d) `undefined`

2. **¿Cuál será el resultado del siguiente código?**

    ```js
    let person = {
        name: "Alice",
        age: 30
    };
    
    console.log("name" in person);
    ```

    - [x] a) `true` //correcto
    - [ ] b) `false`
    - [ ] c) `"Alice"`
    - [ ] d) `undefined`

3. **¿Cuál será el resultado del siguiente código?**

    ```js
    let obj = {a: undefined};
    console.log(obj.a !== undefined);
    ```

    - [ ] a) `true`
    - [x] b) `false` //correcto
    - [ ] c) `undefined`
    - [ ] d) Esto generará un error.

[☝️](#introducción-a-los-objetos-de-javascript-y-sus-propiedades)

---

## Tema 4: ¿Cómo se accede a las propiedades de objetos anidados y arrays dentro de objetos?

Al trabajar con JavaScript, a menudo te encontrarás con estructuras de datos complejas que incluyen objetos anidados y arrays dentro de objetos. Estas estructuras pueden representar datos ricos y jerárquicos, pero también requieren una comprensión clara de cómo acceder y manipular los datos que contienen. Veamos cómo navegar por estas estructuras anidadas de manera eficaz.

Acceder a propiedades de objetos anidados implica usar la notación de puntos o la notación de corchetes, de manera muy similar a como se accede a propiedades de objetos simples. Sin embargo, necesitarás encadenar estos accesores para profundizar en la estructura anidada.

Por ejemplo, consideremos un objeto anidado que representa a una persona con información de contacto:

- **Example code**

  ```js
  const person = {
    name: "Alice",
    age: 30,
    contact: {
      email: "alice@example.com",
      phone: {
        home: "123-456-7890",
        work: "098-765-4321"
      }
    }
  };
  ```

Para acceder al número de teléfono del trabajo de `Alice`, tendrías que encadenar los accesores de propiedad de la siguiente manera:

- **Example code**

  ```js
  const person = {
    name: "Alice",
    age: 30,
    contact: {
      email: "alice@example.com",
      phone: {
        home: "123-456-7890",
        work: "098-765-4321"
      }
    }
  };
  
  console.log(person.contact.phone.work); // "098-765-4321"
  ```

También puedes utilizar la notación entre corchetes, que resulta especialmente útil cuando los nombres de las propiedades incluyen espacios o caracteres especiales, o cuando utilizas variables para acceder a las propiedades:

- **Example code**

  ```js
  const person = {
    name: "Alice",
    age: 30,
    contact: {
      email: "alice@example.com",
      phone: {
        home: "123-456-7890",
        work: "098-765-4321"
      }
    }
  };
  
  console.log(person['contact']['phone']['work']); // "098-765-4321"
  ```

Ahora, veamos cómo podemos acceder a los datos cuando una de las propiedades del objeto tiene el valor de un array. Aquí hay un objeto `person` modificado que incluye un array de direcciones:

- **Example code**

  ```js
  const person = {
    name: "Alice",
    age: 30,
    addresses: [
      { type: "home", street: "123 Main St", city: "Anytown" },
      { type: "work", street: "456 Market St", city: "Workville" }
    ]
  };
  ```

A continuación se muestra un ejemplo de cómo consultar la ciudad donde se encuentra la oficina de `Alice`:

- **Example code**

  ```js
  const person = {
    name: "Alice",
    age: 30,
    addresses: [
      { type: "home", street: "123 Main St", city: "Anytown" },
      { type: "work", street: "456 Market St", city: "Workville" }
    ]
  };
  
  console.log(person.addresses[1].city); // "Workville"
  ```

En este ejemplo, `person.addresses` hace referencia al array de direcciones. Para acceder a la segunda dirección de ese array, utilizamos la notación entre corchetes y el índice `1`. A continuación, utilizamos la notación de puntos para acceder a `city` desde la dirección del objeto.

Entender cómo acceder a las propiedades de objetos y arrays anidados es esencial cuando se trabaja con estructuras de datos complejas. En futuros talleres y prácticas, tendrás la oportunidad de practicar el trabajo con este tipo de estructuras de datos.

---

## Cuestionario 4

1. **¿Cómo se puede acceder al número de teléfono de `work` de este object?**

    ```js
    let person = {
        contact: {
            phone: {
                home: "123-456-7890",
                work: "098-765-4321"
            }
        }
    };
    ```

    - [ ] a) `person.work`
    - [ ] b) `person.contact.work`
    - [x] c) `person.contact.phone.work` //correcto
    - [ ] d) `person[contact][phone][work]`

2. **¿Cuál será el resultado del siguiente código?**

    ```js
    let person = {
        name: "Alice",
        details: {
            age: 25,
            hobbies: ["reading", "swimming"]
        }
    };
    
    console.log(person.details.hobbies[1]);
    ```

    - [ ] a) `reading`
    - [x] b) `swimming` //correcto
    - [ ] c) `undefined`
    - [ ] d) Esto generará un error.

3. **En el siguiente código, ¿qué se registrará en la consola?**

    ```js
    let data = {
        results: [
            { name: "Alice", score: 95 },
            { name: "Bob", score: 80 },
            { name: "Charlie", score: 90 }
        ]
    };
    
    console.log(data.results[1].name);
    ```

    - [ ] a) `Alice`
    - [x] b) `Bob` //correcto
    - [ ] c) `Charlie`
    - [ ] d) `undefined`

[☝️](#introducción-a-los-objetos-de-javascript-y-sus-propiedades)

---

## Tema 5: ¿Cuál es la diferencia entre los tipos de datos primitivos y no primitivos?

En JavaScript, comprender la diferencia entre los tipos de datos primitivos y no primitivos es importante para escribir código eficiente y sin errores.

Estas dos categorías de tipos de datos se comportan de manera diferente en cuanto a cómo se almacenan en la memoria y cómo se manipulan en los programas.

Los tipos de datos primitivos son la forma más simple de datos en JavaScript. Incluyen `number`, `bigint`, `string`, `boolean`, `null`, `undefined` y `symbol`. Estos tipos se denominan primitivos porque representan valores únicos y no son objetos.

Cuando trabajas con tipos de datos primitivos, estás manejando directamente sus valores. Por ejemplo, cuando creas una variable con un valor primitivo, ese valor se almacena directamente en la variable.

Los valores primitivos son inmutables, lo que significa que una vez creados, su valor no se puede cambiar. Sin embargo, puedes reasignar un nuevo valor a la variable. A continuación, te mostramos un ejemplo de cómo trabajar con tipos de datos primitivos:

- **Example code**

  ```js
  let num1 = 5;
  let num2 = num1;
  num1 = 10;
  
  console.log(num2); // 5
  ```

En este ejemplo, estamos asignando un valor primitivo (`5`) de `num1` a `num2`. Esto crea una copia independiente del valor. Como resultado, cualquier cambio que se realice en la variable original (`num1`) no afecta a la copia (`num2`).

Los tipos de datos no primitivos, por otro lado, son más complejos. En JavaScript, estos son `objetos`, que incluyen objetos regulares, `arrays` y `funciones`. A diferencia de los primitivos, los tipos no primitivos pueden contener múltiples valores como propiedades o elementos.

Cuando creas una variable con un valor no primitivo, lo que se almacena en la variable es en realidad una referencia a la ubicación en la memoria donde se almacena el objeto, no el objeto en sí. Esto da lugar a algunas diferencias importantes en el comportamiento. Aquí hay un ejemplo con tipos no primitivos:

- **Example code**

  ```js
  const originalPerson = { name: "John", age: 30 };
  const copiedPerson = originalPerson;
  
  originalPerson.age = 31;
  
  console.log(copiedPerson.age); // 31
  ```

En este ejemplo tenemos un objeto llamado `originalPerson` con dos propiedades: `name` y `age`. A continuación, asignamos el objeto `originalPerson` a una variable llamada `copiedPerson`.

Después, actualizamos el valor de `age` del objeto `originalPerson`. Cuando registramos la propiedad `age` del objeto `copiedPerson`, se muestra el valor actualizado.

¿Pero por qué ocurre esto? Esto sucede porque tanto `originalPerson` como `copiedPerson` hacen referencia al mismo objeto en la memoria.

En JavaScript, cuando asignas un objeto a otra variable, estás copiando la referencia al objeto, no el objeto en sí. Esto se conoce como copia superficial por referencia. Como resultado, cualquier cambio realizado en el objeto a través de una referencia se refleja en todas las referencias a ese objeto.

A medida que sigas trabajando con JavaScript, te encontrarás con muchas situaciones en las que es importante comprender la diferencia entre tipos primitivos y no primitivos. Es un concepto fundamental que subyace a muchos aspectos del lenguaje y es clave para escribir código eficiente y correcto.
