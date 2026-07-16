# Repaso de los fundamentos de JavaScript

En esta sección, repasaremos los conceptos básicos de JavaScript que hemos visto en secciones anteriores. Estos fundamentos son esenciales para comprender cómo funciona el lenguaje y cómo podemos utilizarlo para crear aplicaciones web interactivas.

---

## Tema 1: El constructor String y el método `toString()`

- **Definición**: Un objeto String se utiliza para representar una secuencia de caracteres. Los objetos String se crean mediante la función constructora String, que envuelve el valor primitivo en un objeto.

  - **Example code**

    ```js
    const greetingObject = new String("Hello, world!");
    console.log(typeof greetingObject); // "object"
    ```

---

- **Método `toString()`**: Este método convierte un valor en su representación como cadena. Es un método que puedes usar con números, valores booleanos, matrices y objetos.

  - **Example code**

    ```js
    const num = 10;
    console.log(num.toString()); // "10"
    
    const arr = [1, 2, 3];
    console.log(arr.toString()); // "1,2,3"
    ```

---
  
- Este método acepta un radix opcional, que es un número entre 2 y 36. Este radix representa la base, como la base 2 para el sistema binario o la base 8 para el sistema octal. Si no se especifica el radix, el valor predeterminado es la base 10, es decir, el sistema decimal.

  - **Example code**

    ```js
    const num = 10;
    console.log(num.toString(2)); // "1010"(binary)
    ```

---

## Tema 2: Constructor Number

- **Definición**: El constructor `Number` se utiliza para crear un objeto numérico. El objeto numérico contiene algunas propiedades y métodos útiles, como los métodos `isNaN` y `toFixed`. En la mayoría de los casos, utilizarás el constructor `Number` para convertir otros tipos de datos al tipo de datos numérico.

  - **Example code**

    ```js
    const myNum = new Number("34");
    console.log(typeof myNum); // "object"
    
    const num = Number('100');
    console.log(num); // 100
    
    console.log(typeof num); // number
    ```

---

## Tema 3: Mejores prácticas para nombrar variables y funciones

- `camelCasing`: Por convención, los desarrolladores de JavaScript utilizan el estilo _camel case_ para nombrar variables y funciones. En este estilo, la primera palabra se escribe completamente en minúsculas y las siguientes comienzan con mayúscula. Ejemplo: `isLoading`.

- **Nombres de variables booleanas**: Para las variables booleanas, es una práctica común usar prefijos como "is", "has" o "can".

  - **Example code**

    ```js
    let isLoading = true;
    let hasPermission = false;
    let canEdit = true;
    ```

---

- **Nombres de funciones**: En el caso de las funciones, el nombre debe indicar claramente qué hace la función. Para las funciones que devuelven un valor booleano (a menudo llamadas predicados), puedes usar los mismos prefijos **is**, **has** o **can**. Cuando se trata de funciones que recuperan datos, es común comenzar con la palabra "**get**". Cuando se trata de funciones que establecen datos, es común comenzar con la palabra "**set**". Para las funciones de manejo de eventos, se puede usar el prefijo "**handle**" o el sufijo "**Handler**".

  - **Example code**

    ```js
    function getUserData() { /* ... */ }

    function isValidEmail(email) { /* ... */ }
    
    function getProductDetails(productId) { /* ... */ }
    
    function setUserPreferences(preferences) { /* ... */ }
    
    function handleClick() { /* ... */ }
    ```

---

- Nombres de variables dentro de los bucles: Al nombrar las variables iteradoras en los bucles, es común usar letras únicas como i, j o k.

  - **Example code**

    ```js
    for (let i = 0; i < array.length; i++) { /* ... */ }
    ```

---

## Tema 4: Trabajar con matrices dispersas

- **Definición**: Es posible tener matrices con celdas vacías. Las celdas vacías se definen como aquellas que no contienen nada. Esto es diferente a las celdas de una matriz cuyo valor es undefined. Este tipo de matrices se conocen como matrices dispersas.

  - **Example code**

    ```js
    const sparseArray = [1, , , 4];
    console.log(sparseArray.length); // 4
    ```

---

## Tema 5: Linters y formateadores

- **Linters**: Un linter es una herramienta de análisis estático de código que señala errores de programación, bugs, errores de estilo y construcciones sospechosas. Un ejemplo de linter común sería ESLint.

- **Formateadores**: Los formateadores son herramientas que formatean automáticamente el código para que cumpla con una guía de estilo específica. Un ejemplo de formateador común sería Prettier.

---

## Tema 6: Administración de memoria

- **Definición**: La administración de memoria es el proceso de controlar la memoria, asignarla cuando sea necesario y liberarla cuando ya no se necesite. JavaScript utiliza una administración automática de memoria. Esto significa que JavaScript (más específicamente, el motor de JavaScript de tu navegador web) se encarga de la asignación y liberación de memoria por ti. No es necesario que liberes memoria explícitamente en tu código. A este proceso automático se le suele llamar "_recolección de basura_".

---

## Tema 7: Cierres

- **Definición**: Un cierre es una función que tiene acceso a las variables de su ámbito léxico externo (en el que está contenida), incluso después de que la función externa haya finalizado.

  - **Example code**

    ```js
    function outerFunction(x) {
      let y = 10;
      function innerFunction() {
        console.log(x + y);
      }
      return innerFunction;
    }
    
    let closure = outerFunction(5);
    closure(); // 15
    ```

---

## Tema 8: La palabra clave `var` y el hoisting

- **Definición**: `var` era la forma original de declarar variables antes de 2015. Sin embargo, `var` presentaba algunos problemas relacionados con el ámbito, la redeclaración y otros aspectos. Por eso, en la programación moderna de JavaScript se utilizan `let` y `const` en su lugar.
Redeclaración de variables con `var`: Si intentas redeclarar una variable usando `let`, obtendrás un `SyntaxError`. Sin embargo, con `var`, sí se permite redeclarar una variable.

  - **Example code**

    ```js
    // Uncaught SyntaxError: Identifier 'num' has already been declared 
    let num = 19;
    let num = 18;
    
    var myNum = 5;
    var myNum = 10; // This is allowed and doesn't throw an error
    
    console.log(myNum) // 10
    ```

---

- **`var` y el ámbito**: Las variables declaradas con `var` dentro de un bloque (como una instrucción `if` o un ciclo `for`) siguen siendo accesibles fuera de ese bloque.

  - **Example code**

    ```js
    if (true) {
      var num = 5;
    }
    console.log(num); // 5
    ```

---

- Elevación: Es el comportamiento predeterminado de JavaScript de mover las declaraciones al inicio de sus respectivos ámbitos durante la fase de compilación, antes de que se ejecute el código. Cuando declaras una variable usando la palabra clave `var`, JavaScript eleva la declaración al inicio de su ámbito.

  - **Example code**

    ```js
    console.log(num); // undefined
    var num = 5;
    console.log(num); // 5
    ```

---

- Cuando declaras una función utilizando la sintaxis de declaración de funciones, tanto el nombre como el cuerpo de la función se elevan. Esto significa que puedes llamar a una función antes de haberla declarado en tu código.

  - **Example code**

    ```js
    sayHello(); // "Hello, World!"

    function sayHello() {
      console.log("Hello, World!");
    }
    ```

---

- Las declaraciones de variables realizadas con `let` o `const` se elevan, pero no se inicializan, y no puedes acceder a ellas antes de la declaración real en tu código. A este comportamiento se le suele llamar "zona muerta temporal".

  - **Example code**

    ```js
    console.log(num); // Throws a ReferenceError
    let num = 10;
    ```

---

## Tema 9: Cómo trabajar con importaciones, exportaciones y módulos

- **Módulo**: Es una unidad de código independiente que encapsula funciones, clases o variables relacionadas. Para crear un módulo, debes escribir tu código JavaScript en un archivo aparte.

- **Exportaciones**: Cualquier variable, función o clase que desees que esté disponible para otras partes de tu aplicación debe exportarse explícitamente utilizando la palabra clave `export`. Existen dos tipos de exportación: la exportación con nombre y la exportación por defecto.

- **Importaciones**: Para utilizar los elementos exportados en otra parte de la aplicación, es necesario importarlos mediante la palabra clave `import`. Los tipos pueden ser importación con nombre, importación por defecto e importación de espacio de nombres.

  - **Example code**

    ```js
    // Within a file called math.js, we export the following functions:

    // Named export
    export function add(num1, num2) {
      return num1 + num2;
    }
    
    // Default export
    export default function subtract(num1, num2) {
      return num1 - num2;
    }
    
    // Within another file, we can import the functions from math.js.
    
    // Named import - This line imports the add function.
    // The name of the function must exactly match the one exported from math.js.
    import { add } from './math.js';
    
    // Default import - This line imports the subtract function.
    // The name of the function can be anything.
    import subtractFunc from './math.js';
    
    // Namespace import - This line imports everything from the file.
    import * as Math from './math.js';
    
    console.log(add(5, 3)); // 8
    console.log(subtractFunc(5, 3)); // 2
    console.log(Math.add(5, 3)); // 8
    console.log(Math.subtract(5, 3)); // 2
    ```

---
