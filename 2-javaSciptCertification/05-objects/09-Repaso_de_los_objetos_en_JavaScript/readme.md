# Repaso de los objetos en JavaScript

En esta sección, repasaremos los conceptos básicos sobre los objetos en JavaScript, incluyendo su definición, cómo acceder a sus propiedades y algunos métodos útiles para trabajar con ellos.

---

## Tema 1: Conceptos básicos sobre los objetos

- **Definición**: Un objeto es una estructura de datos compuesta por propiedades. Una propiedad consta de una clave y un valor. Para acceder a los datos de un objeto, se puede utilizar la notación de puntos o la notación entre corchetes.

- **Example code**

  ```js
  const person = {
    name: "Alice",
    age: 30,
    city: "New York"
  };
  
  console.log(person.name);  // Alice
  console.log(person["name"]); // Alice
  ```

  Para establecer una propiedad de un objeto existente, puedes utilizar tanto la notación de puntos como la notación entre corchetes junto con el operador de asignación.

- **Example code**

  ```js
  const person = {
    name: "Alice",
    age: 30
  };
  
  person.job = "Engineer"
  person["hobby"] = "Knitting"
  console.log(person);  // {name: 'Alice', age: 30, job: 'Engineer', hobby: 'Knitting'}
  ```

---

## Tema 2: Eliminación de propiedades de un objeto

- **Operador `delete`**: Este operador se utiliza para eliminar una propiedad de un objeto.

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

---

## Tema 3: Comprobar si un objeto tiene una propiedad

- **Método `hasOwnProperty()`**: Este método devuelve un valor booleano que indica si el objeto tiene la propiedad especificada como una de sus propias propiedades.

- **Example code**

  ```js
  const person = {
    name: "Alice",
    age: 30
  };
  
  console.log(person.hasOwnProperty("name")); // true
  console.log(person.hasOwnProperty("job")); // false
  ```

- **Método `Object.hasOwn()`**: Esta es la forma moderna y recomendada de comprobar si un objeto tiene una propiedad propia (no heredada). La sintaxis es `Object.hasOwn(objeto, nombreDePropiedad)`. Devuelve `true` si la propiedad existe en el objeto y `false` si no existe, independientemente del valor de la propiedad. Esto lo hace más seguro que `hasOwnProperty()` y más confiable que `if (obj.prop)` cuando los valores pueden ser `0`, `false`, `null` o `undefined`.

- **Example code**

  ```js
  const person = {
    name: "Alice",
    age: 30
  };
  
  console.log(Object.hasOwn(person, "name")); // true
  console.log(Object.hasOwn(person, "job")); // false
  ```

  A continuación se muestra un ejemplo más detallado que ilustra por qué `Object.hasOwn()` es más confiable que comprobar el valor directamente:

- **Example code**

  ```js
  const settings = {
    darkMode: false,
    fontSize: 0,
    language: null
  };
  
  // Object.hasOwn() correctly sees these properties exist
  console.log(Object.hasOwn(settings, "darkMode")); // true (value is false, but exists)
  console.log(Object.hasOwn(settings, "fontSize")); // true (value is 0, but exists)
  console.log(Object.hasOwn(settings, "theme"));    // false (property was never added)
  
  // Using if() directly is unsafe for falsy values!
  if (settings.darkMode) {
    console.log("Dark mode on"); // Does NOT print — misleading!
  }
  
  // Object.hasOwn() is the safe way
  if (Object.hasOwn(settings, "darkMode")) {
    console.log("darkMode exists, value is:", settings.darkMode); // darkMode exists, value is: false
  }
  ```

- **Operador `in`**: Este operador devolverá true si la propiedad existe en el objeto.

- **Example code**

  ```js
  const person = {
    name: "Bob",
    age: 25
  };
  
  console.log("name" in person);  // true
  ```

---

## Tema 4: Acceso a propiedades de objetos anidados

- **Acceso a datos**: Para acceder a las propiedades de objetos anidados se utiliza la notación de puntos o la notación entre corchetes, de forma muy similar a como se accede a las propiedades de objetos simples. Sin embargo, será necesario encadenar estos accesores para profundizar en la estructura anidada.

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

---

## Tema 5: Tipos de datos primitivos y no primitivos

- **Tipos de datos primitivos**: Estos tipos de datos incluyen números, cadenas, valores booleanos, `null`, `undefined` y símbolos. Se denominan «primitivos» porque representan valores únicos y no son objetos. Los valores primitivos son inmutables, lo que significa que, una vez creados, su valor no se puede modificar.

- **Tipos de datos no primitivos**: en JavaScript, estos son objetos, que incluyen objetos regulares, matrices y funciones. A diferencia de los primitivos, los tipos no primitivos pueden contener múltiples valores como propiedades o elementos.

- **Example code**

  ```js
  // Primitivos: Inmutables y guardados por valor
  let name = "Alice";
  name.toUpperCase(); 
  console.log(name); // "Alice" (El valor original no cambia)
  
  // No Primitivos: Mutables y guardados por referencia
  const person = { name: "Alice" };
  person.age = 30; // Añade múltiples valores dinámicamente
  console.log(person); // { name: "Alice", age: 30 }
  ```

---

## Tema 6: Métodos de objeto

- **Definición**: Los métodos de objeto son funciones asociadas a un objeto. Se definen como propiedades de un objeto y pueden acceder a los datos del objeto y manipularlos. La palabra clave `this` dentro del método hace referencia al propio objeto, lo que permite acceder a sus propiedades.

- **Example code**

  ```js
  const person = {
    name: "Bob",
    age: 30,
    sayHello: function() {
      return "Hello, my name is " + this.name;
    }
  };
  
  console.log(person.sayHello()); // "Hello, my name is Bob"
  ```

---

## Tema 7: Constructor de objetos

- **Definición**: En JavaScript, un constructor es un tipo especial de función que se utiliza para crear e inicializar objetos. Se invoca con la palabra clave `new` y permite inicializar propiedades y métodos en el objeto recién creado. El constructor `Object()` crea un nuevo objeto vacío.

- **Example code**

  ```js
  new Object()
  ```

---

## Tema 8: Uso del operador de encadenamiento opcional (`?.`)

- **Definición**: Este operador te permite acceder de forma segura a las propiedades de un objeto o llamar a métodos sin tener que preocuparte de si existen o no.

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
  
  console.log(user.profile?.address?.street); // "123 Main St"
  console.log(user.profile?.phone?.number);   // undefined
  ```

---

## Tema 9: Descomposición de objetos

- **Definición**: La descomposición de objetos permite extraer valores de los objetos y asignarlos a variables de una manera más concisa y legible.

- **Example code**

  ```js
  const person = { name: "Alice", age: 30, city: "New York" };
  
  const { name, age } = person;
  
  console.log(name); // Alice
  console.log(age);  // 30
  ```

---

## Tema 10: Trabajar con JSON

- **Definición**: JSON son las siglas de JavaScript Object Notation _(JavaScript Object Notation)_. Se trata de un formato de datos ligero y basado en texto que se utiliza habitualmente para intercambiar datos entre un servidor y una aplicación web.

- **Example code**

  ```js
  {
    "name": "Alice",
    "age": 30,
    "isStudent": false,
    "list of courses": ["Mathematics", "Physics", "Computer Science"]
  }
  ```

- `JSON.stringify()`: Este método se utiliza para convertir un objeto de JavaScript en un string JSON. Resulta útil cuando se desea almacenar o transmitir datos en un formato que se pueda compartir o transferir fácilmente entre sistemas.

- **Example code**

  ```js
  const user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  const jsonString = JSON.stringify(user);
  console.log(jsonString); // '{"name":"John","age":30,"isAdmin":true}'
  ```

- JSON.parse(): Este método convierte un string JSON de nuevo en un objeto JavaScript. Esto resulta útil cuando recuperas datos JSON de un servidor web o de localStorage y necesitas manipularlos en tu aplicación.

- **Example code**

  ```js
  const jsonString = '{"name":"John","age":30,"isAdmin":true}';
  const userObject = JSON.parse(jsonString);
  
  // result: { name: 'John', age: 30, isAdmin: true }
  console.log(userObject);
  ```

---
