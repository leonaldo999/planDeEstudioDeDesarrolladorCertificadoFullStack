# Crea una calculadora de años bisiestos

*Un año bisiesto es aquel que es divisible por `4`, excepto los años que son divisibles por `100` y no por `400`. Por ejemplo, el año `2000` es bisiesto, pero el `1900` no lo es. Además, un año bisiesto tiene un día adicional en febrero, que es el día `29` del mes.*

>[!NOTE]
> **Objetivo**: Cumple con las historias de usuario que se indican a continuación y haz que todas las pruebas pasen para completar el laboratorio.

## Historias de usuario

- Define una función llamada `isLeapYear` que tome un número como argumento.

- Fuera de la función, declara una variable `year` que almacene el valor del año que deseas verificar.

- Dentro de la función, utiliza una instrucción `if/else` o un operador ternario para verificar si el año es bisiesto.

- Para verificar si el año es bisiesto, cumple las siguientes condiciones:

  - Si el año es divisible por `4`, entonces es un año bisiesto.
  - A menos que el año también sea divisible por `100`, entonces no es un año bisiesto.
  - A menos que el año también sea divisible por `400`, entonces es un año bisiesto.

- Si el año es bisiesto, `return` `[year] is a leap year.`. De lo contrario, `return` `[year] is not a leap year.`. Reemplazarás `[year]` por el parámetro definido en la función `isLeapYear`.

- Debes llamar a la función `isLeapYear` con `year` como argumento y asignar el resultado a una variable llamada `result`.

- Debes mostrar la variable `result` en la consola utilizando `console.log()`.
