# Cuestionario sobre comparaciones y condiciones en JavaScript

Para aprobar el cuestionario, debes responder correctamente al menos 9 de las 10 preguntas siguientes.

---

1. **¿Cuál es el resultado de la expresión `undefined > 0`?**

    - [ ] a) `null`
    - [x] b) `undefined`
    - [ ] c) `true`
    - [ ] d) `false` // ❎

2. **¿Qué operación lógica representa `||`?**

    - [x] a) `OR` // ❎
    - [ ] b) `AND`
    - [ ] c) `XOR`
    - [ ] d) `NOT`

3. **¿Cuál es el resultado del siguiente código?**

    ```js
    console.log(5 === 2 + 3 || 4 == 2);
    ```

    - [ ] a) `false`
    - [ ] b) Se produce un error.
    - [ ] c) `undefined`
    - [x] d) `true` // ❎

4. **¿Qué es un valor truthy y un valor falsy?**
  
    - [x] a) Un valor que se considera `true` o `false` cuando aparece en un contexto booleano. // ❎
    - [ ] b) Un valor que es a la vez `true` y `false`.
    - [ ] c) Un valor que se comporta de manera diferente a los valores `true` o `false`.
    - [ ] d) Un valor que cambia según el contexto.

5. **¿Qué se registra en la consola a partir del código siguiente**

    ```js
    if (1) {
      console.log("True!");
    }
    ```

    - [x] a) `True!` // ❎
    - [ ] b) Se produce un error.
    - [ ] c) `false`
    - [ ] d) No se muestra nada en la consola.

6. **¿Cuál es la diferencia entre `undefined` y `null`?**
  
    - [ ] a) `null` es una propiedad global, mientras que `undefined` no lo es.
    - [x] b) Las variables sin valor se consideran `undefined`, mientras que `null` representa la ausencia intencional de un valor de objeto. // ❎
    - [ ] c) `null` es el valor implícito que se asigna a las variables y no se puede modificar, mientras que `undefined` es el valor explícito que se asigna a las variables.
    - [ ] d) Tanto `null` como `undefined` apuntan a una ubicación de memoria fuera de rango y son inaccesibles.

7. **¿Qué sucede si no se incluye `break` al implementar una instrucción `switch`?**
  
    - [ ] a) La instrucción `switch` terminará tras la primera coincidencia.
    - [ ] b) La instrucción `switch` generará un error tras la instrucción anterior.
    - [ ] c) La instrucción `switch` se detendrá de forma abrupta.
    - [x] d) El código continúa evaluando las siguientes instrucciones `case`, incluso después de encontrar una coincidencia. // ❎

8. **¿Qué se muestra en la consola al ejecutar el código siguiente?**

    ```js
    const a = 2;
    if (1 == "1") {
      let b = 3;
      console.log(a + b);
    }
    console.log(b);
    ```

    - [ ] a)

      ```js
      5
      3
      ```

    - [x] b) 5, y luego se produce un error. // ❎
    - [ ] c)

      ```js
      5
      undefined
      ```

    - [ ] d) Se produce un error.

9. **¿Cuál será el resultado del siguiente código JavaScript?**

    ```js
    let vehicle = "car";

    switch (vehicle) {
      case "bike":
        console.log("Bikes are two-wheelers.");
        break;
      case "car":
        console.log("Some cars are 4x4.");
      case "truck":
        console.log("Trucks can carry heavy loads.");
        break;
      default:
        console.log("Unknown vehicle.");
    }
    ```

   - [ ] a)

    ```js
    Some cars are 4x4.
    ```

   - [x] b) // ❎

    ```js
    Some cars are 4x4.
    Trucks can carry heavy loads.
    ```

   - [ ] c)

    ```js
    Some cars are 4x4.
    Trucks can carry heavy loads.
    Unknown vehicle.
    ```

   - [ ] d)

    ```js
    Unknown vehicle.
    ```

10. **¿Qué se muestra en la consola con el código siguiente?**

    ```js
    let x = 5;
    if (x > 1 && x < 10) {
      console.log("x is between 1 and 10");
    } else {
      console.log("x is not between 1 and 10");
    }
    ```

    - [ ] a) No se imprime nada.
    - [ ] b) Se produce un error.
    - [x] c) `x is between 1 and 10` // ❎
    - [ ] d) `x is not between 1 and 10`

---
