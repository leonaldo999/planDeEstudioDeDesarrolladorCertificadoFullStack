# Comprender las comparaciones y las oraciones condicionales

En esta sección, aprenderás a usar operadores de comparación para comparar valores y a usar oraciones condicionales para ejecutar código basado en el resultado de esas comparaciones. También aprenderás sobre la precedencia de los operadores, que determina el orden en que se evalúan las operaciones en una expresión.

---

## Tema 1: ¿Cómo funcionan las comparaciones con los tipos de datos `null` y `undefined`?

En JavaScript, `null` y `undefined` son dos tipos de datos distintos que representan la ausencia de un valor, pero se comportan de manera diferente en las comparaciones. Comprender cómo interactúan estos tipos en diversos escenarios de comparación es fundamental para escribir código robusto y sin errores.

Comencemos con el tipo `undefined`. Una variable es `undefined` cuando se ha declarado pero no se le ha asignado un valor. Es el valor predeterminado de las variables no inicializadas y de los parámetros de función a los que no se les proporcionó un argumento.

El tipo `null`, por otro lado, es un valor de asignación que representa un no-valor deliberado. A menudo se utiliza para indicar que una variable no tiene valor intencionalmente.

Al comparar `null` y `undefined` utilizando el operador de igualdad (`==`), JavaScript realiza una conversión de tipos. Esto significa que intenta convertir los operandos al mismo tipo antes de realizar la comparación. En este caso, `null` y `undefined` se consideran iguales:

- **Example code**

  ```js
  console.log(null == undefined); // true
  ```

Sin embargo, cuando se utiliza el operador de igualdad estricta (`===`), que comprueba tanto el valor como el tipo sin realizar una conversión de tipos, null y undefined no son iguales:

- **Example code**

  ```js
  console.log(null === undefined); // false
  ```

Es importante tener en cuenta esta diferencia al escribir sentencias condicionales o al realizar comprobaciones de igualdad en tu código. Al comparar valores `null` o `undefined` con otros valores utilizando el operador de igualdad (`==`), el comportamiento puede ser inesperado. Por ejemplo:

- **Example code**

  ```js
  console.log(null == 0);  // false
  console.log(null == ''); // false
  console.log(undefined == 0); // false
  console.log(undefined == ''); // false
  ```

Estas comparaciones devuelven `false` porque `null` y `undefined` solo son iguales entre sí (y a sí mismos) cuando se utiliza el operador de igualdad. El comportamiento de `null` en otras comparaciones es especialmente complicado:

- **Example code**

  ```js
  console.log(null > 0);  // false
  console.log(null == 0); // false
  console.log(null >= 0); // true
  ```

Por otro lado, `undefined` siempre se convierte en `NaN` en contextos numéricos, lo que hace que todas las comparaciones numéricas con `undefined` devuelvan `false`:

- **Example code**

  ```js
  console.log(undefined > 0);  // false
  console.log(undefined < 0);  // false
  console.log(undefined == 0); // false
  ```

Teniendo en cuenta estos matices, por lo general se recomienda utilizar el operador de igualdad estricta al comparar valores, especialmente cuando se trata de `null` y `undefined`. Este enfoque ayuda a evitar la conversión de tipos inesperada y hace que el comportamiento de tu código sea más predecible.

En resumen, aunque tanto `null` como `undefined` se utilizan para representar la ausencia de un valor, se comportan de manera diferente en las comparaciones. Comprender estas diferencias es clave para escribir código JavaScript claro y sin errores.

---

## Cuestionario 1

1. **¿Cuál es el resultado de la expresión: `null === undefined`?**

    - [ ] a) `true`
    - [x] b) `false` //correcto
    - [ ] c) `undefined`
    - [ ] d) `Null`

2. **En JavaScript, ¿cuál es el resultado de la comparación: `null >= 0`?**

    - [x] a) `true` //correcto
    - [ ] b) `false`
    - [ ] c) `undefined`
    - [ ] d) `Error`

3. **¿Cuál de las siguientes afirmaciones sobre undefined es correcta?**

    - [ ] a) `undefined == null` da como resultado `false`.
    - [ ] b) `undefined === null` da como resultado `true`.
    - [ ] c) `undefined < 0` da como resultado `true`.
    - [x] d) `undefined == 0` da como resultado `false`. //correcto

[☝️](#comprender-las-comparaciones-y-las-oraciones-condicionales)

---

## Tema 2: ¿Qué son las sentencias `switch` y en qué se diferencian de las cadenas `if/else`?

Tanto las sentencias `switch` como las cadenas `if/else` `if/else` son estructuras de flujo de control en programación que nos permiten ejecutar diferentes bloques de código en función de determinadas condiciones. Sin embargo, tienen características y casos de uso distintos.

Una instrucción `switch` evalúa una expresión y compara su valor con una serie de cláusulas `case`. Cuando se encuentra una coincidencia, se ejecuta el bloque de código asociado a `case`. A continuación se muestra la estructura básica de una instrucción `switch`:

- **Example code**

  ```js
  switch (expression) {
    case value1:
      // code to be executed if expression === value1
      break;
    case value2:
      // code to be executed if expression === value2
      break;
    default:
      // code to be executed if expression doesn't match any case
  }
  ```

La instrucción `break` al final de cada `case` es fundamental. Le indica al programa que salga del bloque `switch` una vez que se haya ejecutado el `case` correspondiente. Sin ella, el programa seguiría ejecutando los casos posteriores, un comportamiento conocido como "fall-through".

Las sentencias `switch` se utilizan normalmente cuando se compara una sola variable con múltiples valores posibles. Son especialmente útiles cuando hay muchas condiciones potenciales que verificar con respecto a una sola variable. A continuación se muestra un ejemplo en el que se utiliza una sentencia `switch` para los días de la semana:

- **Example code**

  ```js
  let dayOfWeek = 3; 

  switch (dayOfWeek) {
      case 1:
          console.log("It's Monday! Time to start the week strong.");
          break;
      case 2:
          console.log("It's Tuesday! Keep the momentum going.");
          break;
      case 3:
          console.log("It's Wednesday! We're halfway there.");
          break;
      case 4:
          console.log("It's Thursday! Almost the weekend.");
          break;
      case 5:
          console.log("It's Friday! The weekend is near.");
          break;
      case 6:
          console.log("It's Saturday! Enjoy your weekend.");
          break;
      case 7:
          console.log("It's Sunday! Rest and recharge.");
          break;
      default:
          console.log("Invalid day! Please enter a number between 1 and 7.");
  }
  ```

Las sentencias `switch` pueden resultar más legibles y concisas cuando se trabaja con muchos valores posibles para una sola variable.

Por otro lado, las sentencias `if/else if` son más flexibles. Pueden evaluar condiciones complejas y variables diferentes en cada cláusula. Esto las hace adecuadas para una gama más amplia de situaciones. A continuación se muestra un ejemplo de cuándo se podría preferir una sentencia `if/else` en lugar de una sentencia `switch`:

- **Example code**

  ```js
  let creditScore = 720; 
  let annualIncome = 60000; 
  let loanAmount = 200000; 
  
  let eligibilityStatus;
  
  if (creditScore >= 750 && annualIncome >= 80000) {
      eligibilityStatus = "Eligible for premium loan rates.";
  } else if (creditScore >= 700 && annualIncome >= 50000) {
      eligibilityStatus = "Eligible for standard loan rates.";
  } else if (creditScore >= 650 && annualIncome >= 40000) {
      eligibilityStatus = "Eligible for subprime loan rates.";
  } else if (creditScore < 650) {
      eligibilityStatus = "Not eligible due to low credit score.";
  } else {
      eligibilityStatus = "Not eligible due to insufficient income.";
  }
  
  console.log(eligibilityStatus);
  ```

En este ejemplo, contamos con los ingresos anuales y la calificación crediticia de una persona, y verificamos para qué tipos de préstamos podría calificar. Dado que estamos lidiando con evaluaciones lógicas más complejas y múltiples variables, es mejor utilizar una instrucción `if/else` en lugar de una instrucción `switch`.

Vale la pena señalar que las instrucciones `switch` en JavaScript utilizan la comparación estricta (`===`), lo que significa que no realizan conversión de tipos. Esto puede ser una ventaja en términos de previsibilidad y para evitar errores sutiles.

En resumen, aunque tanto las sentencias `switch` como las cadenas `if/else` if permiten una lógica de múltiples ramificaciones en tu código, tienen diferentes puntos fuertes. Las sentencias `switch` se destacan en el manejo de múltiples valores posibles para una sola variable, mientras que las cadenas `if/else if` ofrecen más flexibilidad para condiciones complejas. La elección entre ellas a menudo se reduce a los requisitos específicos de tu código y a las preferencias de estilo de programación personales o del equipo.

---

## Cuestionario 2

1. **¿Qué sucede si se omite la instrucción `break` en un caso de `switch`?**

    - [ ] a) La instrucción `switch` generará un error.
    - [ ] b) El programa saldrá del bloque `switch` inmediatamente.
    - [x] c) El código continuará con el siguiente caso, independientemente de si coincide o no. //correcto
    - [ ] d) No pasa nada; `break` es opcional en las instrucciones `switch`.

2. **¿Cuál de las siguientes opciones es una ventaja clave de utilizar una instrucción `switch` en lugar de una cadena de sentencias `if/else`?**

    - [ ] a) Las instrucciones `switch` pueden manejar condiciones más complejas.
    - [ ] b) Las instrucciones `switch` pueden comparar varias variables.
    - [x] c) Las instrucciones `switch` suelen ser más concisas a la hora de comparar una sola variable con muchos valores. //correcto
    - [ ] d) Las instrucciones `switch` siempre se ejecutan más rápido que las cadenas de sentencias `if/else`.

3. **En JavaScript, ¿qué tipo de comparación utiliza una instrucción `switch`?**

    - [ ] a) Igualdad simple (`==`).
    - [x] b) Igualdad estricta (`===`). //correcto
    - [ ] c) Mayor o igual que (`>=`).
    - [ ] d) Menor o igual que (`<=`).

[☝️](#comprender-las-comparaciones-y-las-oraciones-condicionales)

---
