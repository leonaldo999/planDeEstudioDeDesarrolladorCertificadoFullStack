<!-- Clase -->
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

[☝️](#trabajar-con-json )

---
