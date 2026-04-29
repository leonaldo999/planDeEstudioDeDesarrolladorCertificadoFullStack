# Repaso de comparaciones y condiciones en JavaScript

En esta sección, repasaremos cómo funcionan las comparaciones y las condiciones en JavaScript, especialmente en relación con los tipos de datos `null` y `undefined`. Es importante entender cómo estos valores interactúan con las comparaciones para evitar errores comunes en el código.

---

## Tema 1: Comparaciones y los tipos de datos `null` y `undefined`

- Comparaciones y `undefined`: Una variable se considera `undefined` cuando se ha declarado pero no se le ha asignado ningún valor. Es el valor predeterminado de las variables no inicializadas y de los parámetros de función a los que no se les ha proporcionado un argumento. `undefined` se convierte en `NaN` en contextos numéricos, lo que hace que todas las comparaciones numéricas con `undefined` devuelvan `false`.

- **Example code**

  ```js
  console.log(undefined < 0); // false (NaN < 0 is false)
  console.log(undefined >= 0); // false (NaN >= 0 is false)
  ```

- **Comparaciones y `null`**: El tipo `null` representa la ausencia intencionada de un valor. En contextos numéricos, `null` se convierte en `0`, lo que puede provocar un comportamiento inesperado en las comparaciones numéricas:

- **Example code**

  ```js
  console.log(null < 0); // false (0 < 0 is false)
  console.log(null >= 0); // true (0 >= 0 is true)
  ```

- Cuando se utiliza el operador de igualdad (`==`), `null` y `undefined` solo son iguales entre sí y a sí mismos:

- **Example code**

  ```js
  console.log(null == undefined); // true
  console.log(null == 0); // false
  console.log(undefined == NaN); // false
  ```

- Sin embargo, cuando se utiliza el operador de igualdad estricta (`===`), que comprueba tanto el valor como el tipo sin realizar una conversión de tipos, `null` y `undefined` no son iguales:

- **Example code**

  ```js
  console.log(null === undefined); // false
  ```

---

## Tema 2: Instrucciones `switch`

- **Definición**: Una instrucción `switch` evalúa una expresión y compara su valor con una serie de cláusulas `case`. Cuando se encuentra una coincidencia, se ejecuta el bloque de código asociado a ese caso. Se debe colocar una instrucción `break` al final de cada caso, para dar por terminada su ejecución y continuar con el siguiente. El caso por `default` es opcional y solo se ejecuta si ninguno de los otros casos coincide. El caso por `default` se coloca al final de una instrucción `switch`.

- **Example code**

  ```js
  const dayOfWeek = 3; 

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

---
