# Trabajar con tipos y objetos

En JavaScript, los tipos de datos se dividen en dos categorías principales: tipos primitivos y objetos. Los tipos primitivos incluyen `string`, `number`, `boolean`, `null`, `undefined`, `symbol` y `bigint`. Los objetos, por otro lado, son colecciones de propiedades y métodos que pueden contener otros objetos o valores primitivos.

---

## Tema 1: ¿Qué es un objeto de cadena y en qué se diferencia de un tipo primitivo de cadena?

En los módulos anteriores, te has acostumbrado a trabajar con literales de cadena como este:

- **Example code**

  ```js
  const greeting = "Hello, World!";
  ```

Pero JavaScript también cuenta con objetos de cadena. Tanto los objetos de cadena como las cadenas primitivas se utilizan para manejar texto, pero su funcionamiento interno es diferente. Un objeto de cadena se crea mediante la función constructora de cadena, que envuelve el valor primitivo en un objeto. A continuación se muestra cómo se crea un objeto de cadena:

- **Example code**

  ```js
  const greetingObject = new String("Hello, World!");

  console.log(typeof greetingObject); // "object"
  ```

Cuando usamos el operador `typeof`, podemos ver que el resultado es de tipo `object` en lugar de tipo `string`. Una de las cosas que tal vez te hayas preguntado es cómo puedes usar propiedades como la propiedad `.length` en cadenas primitivas.

Cuando utilizas la propiedad `length` en una cadena primitiva, JavaScript envuelve temporalmente la cadena primitiva en un objeto de cadena para realizar la operación. Por eso puedes usar la propiedad `length` y los diferentes métodos como `repeat()`, `concat()` y `slice()`. A este tipo de métodos y propiedades se les conoce como métodos de instancia, propiedades de instancia y métodos estáticos. Aprenderás cómo funciona esto en detalle en módulos futuros.

Una diferencia clave entre un objeto de cadena y una cadena primitiva es su relación con la memoria y el rendimiento. Las cadenas primitivas suelen ser más eficientes en cuanto a memoria y más rápidas en comparación con los objetos de cadena. Aunque en tu código trabajarás principalmente con cadenas primitivas, sigue siendo útil comprender cómo funcionan los objetos de cadena.

---

## Cuestionario 1

1. **¿Cuál es la principal diferencia entre una cadena primitiva y un objeto de cadena en JavaScript?**

    - [ ] a) Las cadenas primitivas son objetos, mientras que los objetos de cadena no lo son.
    - [x] b) Las cadenas primitivas son más ligeras y eficientes, mientras que los objetos de cadena ofrecen propiedades y métodos adicionales. //correcto
    - [ ] c) Los objetos de cadena no pueden acceder a métodos como `.toUpperCase()`.
    - [ ] d) Las cadenas primitivas pueden cambiar su valor después de ser creadas.

2. **¿Cuál de las siguientes opciones describe correctamente la propiedad `.length` de una cadena?**

    - [ ] a) Cambia el valor de una cadena.
    - [x] b) Devuelve el número de caracteres de una cadena. //correcto
    - [ ] c) Solo funciona con objetos de cadena.
    - [ ] d) Agrega nuevos caracteres a la cadena.

3. **¿Qué resultado dará el siguiente código?**

    ```js
    let str = "JavaScript";
    let objStr = new String("JavaScript");
    console.log(str.length === objStr.length);
    ```

    - [x] a) `true` //correcto
    - [ ] b) `false`
    - [ ] c) `undefined`
    - [ ] d) Da un error.

[☝️](#trabajar-con-tipos-y-objetos)

---

## Tema 2: ¿Qué es el método `toString()` y cómo funciona?

El método `toString()` es una característica fundamental de JavaScript que convierte un valor en su representación como cadena. Es un método que puedes usar con números, valores booleanos, matrices y objetos. Uno de los usos más comunes de `toString()` es convertir un número en su representación como cadena. Aquí tienes un ejemplo:

- **Example code**

  ```js
  const num = 10;
  console.log(num.toString()); // "10"
  ```

Este método acepta un radix opcional, que es un número entre `2` y `36`. Este radix representa la base, como la base 2 para el sistema binario o la base 8 para el sistema octal. Si no se especifica el radix, el valor predeterminado es la base 10, es decir, el sistema decimal. A continuación se muestra un ejemplo en el que se pasa el valor `2` como argumento al método `toString()`:

- **Example code**

  ```js
  const num = 10;
  console.log(num.toString(2)); // "1010"
  ```

El resultado será `1010`, que es la representación binaria del número decimal `10`.

También puedes usar el método `toString()` para convertir matrices y objetos en cadenas. Las matrices cuentan con una implementación personalizada de `toString()` que convierte cada elemento en una cadena y los une con comas. Aquí tienes un ejemplo:

- **Example code**

  ```js
  const arr = [1, 2, 3];
  console.log(arr.toString()); // "1,2,3"
  ```

En este ejemplo, todos los elementos de la matriz se unen para formar la cadena `1,2,3`.

Cuando se utiliza el método `toString()` con objetos, el resultado no será una versión convertida a cadena de las propiedades del objeto.

- **Example code**

  ```js
  const person = {
    name: "John",
    age: 30,
    isStudent: true
  };
  
  console.log(person.toString()); // "[object Object]"
  ```

En este ejemplo, el resultado será la representación de cadena predeterminada del objeto, que es `[object Object]`. Para obtener una versión convertida a cadena de las propiedades del objeto `person`, tendrás que usar `JSON.stringify()`, sobre el cual aprenderás más en las próximas lecciones.

En conclusión, el método `toString()` se utiliza para convertir valores en cadenas. Comprender cómo funciona con diferentes tipos de datos y cómo personalizarlo para tus propios objetos puede mejorar considerablemente tu capacidad para manipular y mostrar datos en tus aplicaciones de JavaScript.

---

## Cuestionario 2

1. **¿Cuál será el resultado del siguiente código?**

    ```js
    let num = 5.7;
    console.log(num.toString());
    ```

    - [x] a)  `"5"`
    - [x] b)  `"5.7"` //correcto
    - [ ] c)  `5.7`
    - [ ] d)  `Error`

2. **¿Cuál será el resultado del siguiente código?**

    ```js
    let arr = [1, 2, 3, 4, 5];
    console.log(arr.toString());
    ```

    - [ ] a) `"[object Array]"`
    - [x] b) `"1,2,3,4,5"` //correcto
    - [ ] c) `12345`
    - [ ] d) `Error`

3. **¿Cuál será el resultado del siguiente código?**

    ```js
    let obj = { name: "John", age: 30 };
    console.log(obj.toString());
    ```

    - [ ] a)  `"{ name: 'John', age: 30}"`
    - [x] b)  `"[object Object]"` //correcto
    - [ ] c)  `"John30"`
    - [ ] d)  `Error`

[☝️](#trabajar-con-tipos-y-objetos)

---

## Tema 3: ¿Qué es el constructor Number y cómo funciona en la conversión de tipos?

El constructor `Number()` se utiliza para crear un objeto numérico. El objeto numérico contiene algunas propiedades y métodos útiles, como `isNaN` y `toFixed`. A continuación se muestra un ejemplo en el que se utiliza el constructor `Number()` con la palabra clave `new`:

- **Example code**

  ```js
  const myNum = new Number("34");
  console.log(typeof myNum); // "object" 
  ```

En este ejemplo, pasamos un literal de cadena al constructor `Number()` y el tipo de retorno es `object` en lugar de una cadena.

Cuando se invoca el constructor `Number()` como una función sin la palabra clave `new`, el valor de retorno será del tipo numérico primitivo. La mayoría de las veces utilizarás el constructor `Number()` para convertir otros tipos de datos al tipo numérico. A continuación, te mostramos un ejemplo de cómo convertir una cadena en un número:

- **Example code**

  ```js
  const myNum = Number("100");
  console.log(myNum); // 100
  
  console.log(typeof myNum); // number
  ```

Esto resulta útil cuando recibes datos del usuario y necesitas convertir esa cadena en un número para poder realizar cálculos matemáticos.

Si intentas llamar al constructor `Number()` con una cadena vacía, el resultado será el número `0`:

- **Example code**

  ```js
  const num = Number("");
  console.log(num); // 0
  ```

Esto se debe a que JavaScript intentará analizar la cadena y, como no contiene ningún dígito, el resultado será cero.

Si intentas pasar una cadena con caracteres aleatorios, el resultado será `NaN` o "Not a Number".

- **Example code**

  ```js
  const num = Number("random");
  console.log(num); // NaN
  ```

Al trabajar con valores booleanos, `true` devuelve `1` porque `true` se convierte en uno, y `false` devuelve `0` porque `false` se convierte en cero.

- **Example code**

  ```js
  const boolTrue = Number(true);
  const boolFalse = Number(false);
  
  console.log(boolTrue); // 1
  console.log(boolFalse); // 0
  ```

Si pasas un valor `null`, el resultado será `0`, y si pasas `undefined`, el resultado será `NaN`.

- **Example code**

  ```js
  const undefinedNum = Number(undefined);
  const nullNum = Number(null);
  
  console.log(undefinedNum); // NaN
  console.log(nullNum); // 0
  ```

Al trabajar con matrices, hay algunas cosas que debes tener en cuenta.

Una matriz vacía devolverá `0`. Una matriz con un solo número devolverá ese número. Una matriz con varios números devolverá `NaN`. Y una matriz con una o varias cadenas de texto también devolverá `NaN`.

- **Example code**

  ```js
  const emptyArr = Number([]);
  const arrOneNum = Number([7]);
  const arrMultiNum = Number([7, 36, 12]);
  const arrStr = Number(["str1"]);
  const arrMultiStr = Number(["str1", "str2"]);
  
  console.log(emptyArr); // 0
  console.log(arrOneNum); // 7
  console.log(arrMultiNum); // NaN
  console.log(arrStr); // NaN
  console.log(arrMultiStr); // NaN
  ```

Al trabajar con objetos, el resultado siempre es `NaN`.

- **Example code**

  ```js
  const obj1 = Number({});
  const obj2 = Number({2: 2});
  const obj3 = Number({key: "val"});
  const obj4 = Number({key: true});
  
  console.log(obj1); // NaN
  console.log(obj2); // NaN
  console.log(obj3); // NaN
  console.log(obj4); // NaN
  ```

En conclusión, usarás el constructor `Number()` principalmente para la conversión de tipos, más que para crear un número o un objeto numérico.

---

## Cuestionario 3

1. **¿Cuál es el propósito del constructor `Number()` en JavaScript?**

    - [ ] a)  Solo crea cadenas.

    - [x] b)  Convierte otros tipos de datos en números y crea nuevos valores numéricos.  //correcto

    - [ ] c)  Se utiliza para manipular matrices.

    - [ ] d)  Realiza la concatenación de cadenas.

2. **¿Cómo se crea un objeto numérico utilizando el constructor `Number` en JavaScript?**

    - [ ] a) Utilizando el método `Number.toString()`.

    - [x] b) Inicializándolo con la palabra clave new y pasando un número como argumento. //correcto

    - [ ] c) Declarando una variable con la palabra clave `var`.

    - [ ] d) Llamando a `Number.parseInt()` con un valor de cadena.

3. **¿Cuál de las siguientes opciones es una de las formas correctas en que JavaScript maneja los arreglos al convertirlos en números utilizando el constructor `Number`?**

    - [ ] a) Un arreglo vacío devuelve `NaN`.

    - [ ] b) Un arreglo con varios números se convierte en su suma.

    - [x] c) Un arreglo con un solo número se convierte en ese número, mientras que un arreglo vacío devuelve `0`. //correcto

    - [ ] d) Un arreglo con una o más cadenas se convierte en `NaN`.

[☝️](#trabajar-con-tipos-y-objetos)

---
