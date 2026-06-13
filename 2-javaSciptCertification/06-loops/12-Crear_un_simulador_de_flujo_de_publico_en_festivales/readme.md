# Crear un simulador de flujo de público en festivales

En este taller, utilizarás JavaScript para simular el flujo de asistentes a un festival de música.

---

## Paso 1

Trabajarás con dos conjuntos de datos que describen las entradas del festival durante los turnos de mañana y de noche:

- **Example Code**

  ```js
  const morningGates = [
    { id: "North", capacity: 5, queue: [3, 6, 2, 4] },
    { id: "East", capacity: 3, queue: [2, 4, 3, 5] },
    { id: "South", capacity: 4, queue: [1, 2, 3, 1] },
    { id: "West", capacity: 2, queue: [4, 1, 2, 3] },
  ];

  const nightGates = [
    { id: "North", capacity: 4, queue: [6, 2, 5, 1] },
    { id: "East", capacity: 2, queue: [3, 3, 4, 2] },
    { id: "South", capacity: 5, queue: [2, 1, 2, 3] },
    { id: "West", capacity: 3, queue: [5, 2, 1, 4] },
  ];
  ```

Cada objeto «gate» contiene las siguientes propiedades:

- `id`: Una cadena que identifica la puerta.
- `capacity`: El número de asistentes que la puerta puede procesar por tick.
- `queue`: Una matriz de números que representa cuántos asistentes llegan a la puerta durante un tick específico.

> > Para empezar, crea una función vacía llamada `initializeThroughput` que acepte un parámetro llamado `gates`.

- **Code**

  ```js
  const morningGates = [
    { id: "North", capacity: 5, queue: [3, 6, 2, 4] },
    { id: "East", capacity: 3, queue: [2, 4, 3, 5] },
    { id: "South", capacity: 4, queue: [1, 2, 3, 1] },
    { id: "West", capacity: 2, queue: [4, 1, 2, 3] },
  ];

  const nightGates = [
    { id: "North", capacity: 4, queue: [6, 2, 5, 1] },
    { id: "East", capacity: 2, queue: [3, 3, 4, 2] },
    { id: "South", capacity: 5, queue: [2, 1, 2, 3] },
    { id: "West", capacity: 3, queue: [5, 2, 1, 4] },
  ];

  /* code */
  function initializeThroughput(gates) {}
  /* code */
  ```

---

## Paso 2

En este taller, el «rendimiento» se refiere al número total de asistentes procesados por una puerta en todas las entradas de una sola simulación (mañana o noche). Tu función `initializeThroughput` preparará un objeto para llevar un registro de cuántos asistentes procesa cada puerta.

> > Primero, crea un objeto vacío llamado `summary`.

- **Code**

  ```js
  const morningGates = [ ... ];

  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    /* code */
    const summary = {};
    /* code */
  }
  ```

---

## Paso 3

> > Para completar tu función `initializeThroughput`:

- Recorre cada puerta del array de `gates` de entrada. Para cada puerta, agrega una propiedad al objeto `summary` donde:
  - La clave es el `ID` de la puerta.
  - El valor es `0`.

- Al finalizar el bucle, devuelve el objeto `summary`.

> > Tu función `initializeThroughput` no debe modificar el array de `gates` de entrada original.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    /* code */
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
    /* code */
  }
  ```

---

## Paso 4

Durante cada tick de simulación:

- Llega un número determinado de asistentes a la puerta (desde su `queue`).
- La puerta procesa a los asistentes según su `capacity`.
- Si llegan más asistentes de los que la puerta puede manejar, algunos se quedarán fuera (desbordamiento).

Ahora crearás una función que maneje esta lógica para una puerta en un solo tick.

> > Crea una función vacía llamada `processGateFlow` que acepte dos parámetros:

- `gate`: El objeto de la puerta que se está procesando.
- `tickIndex`: La posición actual del tick de simulación en la matriz de la fila.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  /* code */
  function processGateFlow(gate, tickIndex) {}
  /* code */
  ```

---

## Paso 5

En primer lugar, debes obtener el número de asistentes que llegan durante el tick actual.
> > Accede al valor del array de la cola de la puerta de entrada en el índice `tickIndex` y asígnalo a una variable llamada `currentTickQueue`.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    /* code */
    let currentTickQueue = gate.queue[tickIndex];
    /* code */
  }
  ```

---

## Paso 6

A continuación, necesitas una forma de llevar la cuenta de cuántos asistentes pasan por la puerta durante el evento.
> > Crea una variable llamada `processed` y asígnale el valor `0`.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    /* code */
    let processed = 0;
    /* code */
  }
  ```

---

## Paso 7

> > Crea un bucle `while` vacío que continúe mientras haya asistentes en espera `(currentTickQueue > 0)` y la puerta tenga capacidad disponible `(processed < gate.capacity)`.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    /* code */
    while (currentTickQueue > 0 && processed < gate.capacity) {}
    /* code */
  }
  ```

---

## Paso 8

> > Ahora es el momento de procesar a los asistentes a través de la puerta. Dentro del bucle `while`:

- Reduzca `currentTickQueue` en 1 para indicar que ha pasado un asistente. Utilice el operador de decremento (`--`).
- Aumente `processed` en 1 para llevar la cuenta de cuántos asistentes se han procesado. Utilice el operador de incremento (`++`).

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      /* code */
      currentTickQueue--;
      processed++;
      /* code */
    }
  }
  ```

---

## Paso 9

> > Para completar tu función `processGateFlow`, devuelve un objeto que contenga dos propiedades:

- `processed`: El número de asistentes que la puerta pudo procesar durante este ciclo.
- `overflow`: El número de asistentes que quedaron en la cola después del procesamiento (que es `currentTickQueue` tras el bucle).

> > Debes devolver el objeto directamente de la siguiente manera:

- **Example Code**

  ```js
  return {
    firstKey: firstValue,
    secondKey: secondValue
  }
  ```

---

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    /* code */
    return {
      processed: processed,
      overflow: currentTickQueue
    }
    /* code */
  }
  ```

---

## Paso 10

Cuando una puerta no puede procesar a todos los asistentes durante un tick, algunos de ellos permanecen en la fila. Para gestionar este exceso de aforo, crearás una función que redirija a los asistentes que no caben a otra puerta.

> > Crea una función vacía llamada `rerouteOverflow` con los siguientes parámetros:

- `gates`: El array completo de objetos de puerta.
- `currentGate`: La puerta donde ocurrió el exceso.
- `tickIndex`: La posición actual del tick en la fila.
- `overflowAmount`: El número de asistentes que no pudieron ser procesados.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  /* code */
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {}
  /* code */
  ```

---

## Paso 11

En primer lugar, debes localizar la posición de una puerta específica dentro de el array `gates`.

> > Utiliza el método `indexOf()` sobre `gates` para localizar el elemento `currentGate` y asigna el resultado a una variable llamada `currentIndex`.

A continuación te ofrecemos un repaso de cómo se puede hacer esto:

- **Example Code**

  ```js
  const index = array.indexOf(element);
  ```

---

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    /* code */
    const currentIndex = gates.indexOf(currentGate);
    /* code */
  }
  ```

---

## Paso 12

Al redirigir el exceso de personas, debes enviar a los asistentes a la siguiente puerta del array `gates`. Para ello, debes encontrar el índice de la siguiente puerta. Normalmente, podrías sumar 1 al índice actual. Sin embargo, si la puerta actual es la última del array, debes volver a la primera puerta.

Puedes utilizar el operador módulo (`%`) para manejar esto:

- **Example Code**

  ```js
  const nextIndex = (currentIndex + 1) % array.length;
  ```

---

Esto funciona porque, cuando `currentIndex + 1` es igual a `array.length`, el resultado es 0.

> > Siguiendo este enfoque, crea una variable llamada `nextGateIndex` que almacene el índice de la siguiente puerta en el array `gates`.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    const currentIndex = gates.indexOf(currentGate);
    /* code */
    const nextGateIndex = (currentIndex + 1) % gates.length;
    /* code */
  }
  ```

---

## Paso 13

Ahora que ya sabes a qué puerta debes redirigir a los asistentes excedentes, puedes moverlos.

> > Toma el valor `overflowAmount` y añádelo a la cola de la siguiente puerta en el mismo `tickIndex`.

*En concreto, debes:*

- Acceder a la siguiente puerta utilizando `nextGateIndex`.
- Acceder a su `queue`.
- Añadir el valor `overflowAmount` al valor en la posición `tickIndex`.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    const currentIndex = gates.indexOf(currentGate);
    const nextGateIndex = (currentIndex + 1) % gates.length;
    /* code */
    gates[nextGateIndex].queue[tickIndex] += overflowAmount;
    /* code */
  }
  ```

---

## Paso 14

> > Para ayudar a realizar un seguimiento del recorrido de los asistentes por el sistema, registra el siguiente mensaje en la consola: `overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id`. Puedes utilizar concatenación de cadenas o literales de plantilla.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    const currentIndex = gates.indexOf(currentGate);
    const nextGateIndex = (currentIndex + 1) % gates.length;
    gates[nextGateIndex].queue[tickIndex] += overflowAmount;
    /* code */
    console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id);
    /* code */
  }
  ```

---

## Paso 15

Ahora que ya tienes funciones para procesar ticks individuales y gestionar el desbordamiento, es hora de crear una función controladora para una sola puerta. Esta función se encargará de todas las acciones de una puerta durante un solo tick de la simulación.

> > Crea una función vacía llamada handleGateAtTick con los siguientes parámetros:

- `gates`: El array completo de objetos de puerta.
- `gate`: La puerta actual que se está procesando.
- `tickIndex`: El índice de tick actual de la simulación.
- `throughputSummary`: Un objeto que registra el total de asistentes procesados por puerta.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    const currentIndex = gates.indexOf(currentGate);
    const nextGateIndex = (currentIndex + 1) % gates.length;
    gates[nextGateIndex].queue[tickIndex] += overflowAmount;
    console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id);
  }
  /* code */
  function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {}
  /* code */
  ```

---

## Paso 16

> > En primer lugar, registra el siguiente mensaje en la consola: `"\nProcessing " + gate.id + "..."`.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    const currentIndex = gates.indexOf(currentGate);
    const nextGateIndex = (currentIndex + 1) % gates.length;
    gates[nextGateIndex].queue[tickIndex] += overflowAmount;
    console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id);
  }
  function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
    /* code */
    console.log("\nProcessing " + gate.id + "...");
    /* code */
  }
  ```

---

## Paso 17

> > A continuación, registra el siguiente mensaje en la consola: `gate.queue[tickIndex] + " attendees arriving."`.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    const currentIndex = gates.indexOf(currentGate);
    const nextGateIndex = (currentIndex + 1) % gates.length;
    gates[nextGateIndex].queue[tickIndex] += overflowAmount;
    console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id);
  }
  function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
    console.log("\nProcessing " + gate.id + "...");
    /* code */
    console.log(gate.queue[tickIndex] + " attendees arriving.");
    /* code */
  }
  ```

---

## Paso 18

> > Procesa la puerta de entrada del tick actual llamando a la función `processGateFlow()` con los parámetros `gate` y `tickIndex`, y asigna el resultado a una variable llamada `result`.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    const currentIndex = gates.indexOf(currentGate);
    const nextGateIndex = (currentIndex + 1) % gates.length;
    gates[nextGateIndex].queue[tickIndex] += overflowAmount;
    console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id);
  }
  function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
    console.log("\nProcessing " + gate.id + "...");
    console.log(gate.queue[tickIndex] + " attendees arriving.");
    /* code */
    const result = processGateFlow(gate, tickIndex);
    /* code */
  }
  ```

---

## Paso 19

> > A continuación, actualiza el objeto `throughputSummary` de entrada para reflejar cuántos asistentes se han procesado correctamente en esta puerta en el tick actual. En concreto, toma el valor de `processed` en `result` y añádelo al elemento de `throughputSummary` en el índice `gate.id`.

Este paso garantiza que el resumen de rendimiento acumule los asistentes a lo largo de varios ticks.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    const currentIndex = gates.indexOf(currentGate);
    const nextGateIndex = (currentIndex + 1) % gates.length;
    gates[nextGateIndex].queue[tickIndex] += overflowAmount;
    console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id);
  }
  function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
    console.log("\nProcessing " + gate.id + "...");
    console.log(gate.queue[tickIndex] + " attendees arriving.");
    const result = processGateFlow(gate, tickIndex);
    /* code */
    throughputSummary[gate.id] += result.processed;
    /* code */
  }
  ```

---

## Paso 20

La última tarea de tu función `handleGateAtTick` es gestionar cualquier desbordamiento que se produzca en el tick actual.

> > Si se produce algún desbordamiento `(result.overflow > 0)`, debes:

- Registrar el siguiente mensaje: `"Overflow of " + result.overflow + " attendees. Rerouting..."`.
- Redirigir el desbordamiento llamando a tu función `rerouteOverflow()` con `gates`, `gate`, `tickIndex` y `result.overflow`.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    const currentIndex = gates.indexOf(currentGate);
    const nextGateIndex = (currentIndex + 1) % gates.length;
    gates[nextGateIndex].queue[tickIndex] += overflowAmount;
    console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id);
  }
  function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
    console.log("\nProcessing " + gate.id + "...");
    console.log(gate.queue[tickIndex] + " attendees arriving.");
    const result = processGateFlow(gate, tickIndex);
    throughputSummary[gate.id] += result.processed;
    /* code */
    if (result.overflow > 0) {
      console.log("Overflow of " + result.overflow + " attendees. Rerouting...");
      rerouteOverflow(gates, gate, tickIndex, result.overflow);
    }
    /* code */
  }
  ```

---

## Paso 21

> > Será útil contar con una función que muestre un resumen del rendimiento durante una simulación. Crea una función vacía llamada `printSummary` con un parámetro llamado `summary`.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    const currentIndex = gates.indexOf(currentGate);
    const nextGateIndex = (currentIndex + 1) % gates.length;
    gates[nextGateIndex].queue[tickIndex] += overflowAmount;
    console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id);
  }
  function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
    console.log("\nProcessing " + gate.id + "...");
    console.log(gate.queue[tickIndex] + " attendees arriving.");
    const result = processGateFlow(gate, tickIndex);
    throughputSummary[gate.id] += result.processed;
    if (result.overflow > 0) {
      console.log("Overflow of " + result.overflow + " attendees. Rerouting...");
      rerouteOverflow(gates, gate, tickIndex, result.overflow);
    }
  }
  /* code */
  function printSummary(summary) {}
  /* code */
  ```

---

## Paso 22

> > En primer lugar, registra el siguiente mensaje en la consola: `"\nThroughput Summary"`.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    const currentIndex = gates.indexOf(currentGate);
    const nextGateIndex = (currentIndex + 1) % gates.length;
    gates[nextGateIndex].queue[tickIndex] += overflowAmount;
    console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id);
  }
  function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
    console.log("\nProcessing " + gate.id + "...");
    console.log(gate.queue[tickIndex] + " attendees arriving.");
    const result = processGateFlow(gate, tickIndex);
    throughputSummary[gate.id] += result.processed;
    if (result.overflow > 0) {
      console.log("Overflow of " + result.overflow + " attendees. Rerouting...");
      rerouteOverflow(gates, gate, tickIndex, result.overflow);
    }
  }
  function printSummary(summary) {
    /* code */
    console.log("\nThroughput Summary");
    /* code */
  }
  ```

---

## Paso 23

> > Utiliza un bucle `for...in` para recorrer todas las puertas del objeto `summary` de entrada y registra el total de asistentes procesados.
>
> > Para cada puerta, registra un mensaje con este formato: `gate + ": " + summary[gate] + " attendees processed"`.

Por ejemplo, para un objeto `summary` de entrada definido como `{ North: 5, East: 3, South: 4, West: 2 }`, debe registrar:

- **Example Code**
  
  ```js
  North: 5 attendees processed
  East: 3 attendees processed
  South: 4 attendees processed
  West: 2 attendees processed
  ```

---

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    const currentIndex = gates.indexOf(currentGate);
    const nextGateIndex = (currentIndex + 1) % gates.length;
    gates[nextGateIndex].queue[tickIndex] += overflowAmount;
    console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id);
  }
  function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
    console.log("\nProcessing " + gate.id + "...");
    console.log(gate.queue[tickIndex] + " attendees arriving.");
    const result = processGateFlow(gate, tickIndex);
    throughputSummary[gate.id] += result.processed;
    if (result.overflow > 0) {
      console.log("Overflow of " + result.overflow + " attendees. Rerouting...");
      rerouteOverflow(gates, gate, tickIndex, result.overflow);
    }
  }
  function printSummary(summary) {
    console.log("\nThroughput Summary");
    /* code */
    for (const gate in summary) {
      console.log(gate + ": " + summary[gate] + " attendees processed");
    }
    /* code */
  }
  ```

---

## Paso 24

> > Ahora puedes crear una función para simular el festival. Crea una función vacía llamada `simulateFestival` con los parámetros `gates` y `timeBlock`.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    const currentIndex = gates.indexOf(currentGate);
    const nextGateIndex = (currentIndex + 1) % gates.length;
    gates[nextGateIndex].queue[tickIndex] += overflowAmount;
    console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id);
  }
  function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
    console.log("\nProcessing " + gate.id + "...");
    console.log(gate.queue[tickIndex] + " attendees arriving.");
    const result = processGateFlow(gate, tickIndex);
    throughputSummary[gate.id] += result.processed;
    if (result.overflow > 0) {
      console.log("Overflow of " + result.overflow + " attendees. Rerouting...");
      rerouteOverflow(gates, gate, tickIndex, result.overflow);
    }
  }
  function printSummary(summary) {
    console.log("\nThroughput Summary");
    for (const gate in summary) {
      console.log(gate + ": " + summary[gate] + " attendees processed");
    }
  }
  /* code */
  function simulateFestival(gates, timeBlock) {}
  /* code */
  ```

---

## Paso 25

> > En primer lugar, registra el siguiente mensaje en la consola: `"\n" + timeBlock + " Simulation"`.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    const currentIndex = gates.indexOf(currentGate);
    const nextGateIndex = (currentIndex + 1) % gates.length;
    gates[nextGateIndex].queue[tickIndex] += overflowAmount;
    console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id);
  }
  function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
    console.log("\nProcessing " + gate.id + "...");
    console.log(gate.queue[tickIndex] + " attendees arriving.");
    const result = processGateFlow(gate, tickIndex);
    throughputSummary[gate.id] += result.processed;
    if (result.overflow > 0) {
      console.log("Overflow of " + result.overflow + " attendees. Rerouting...");
      rerouteOverflow(gates, gate, tickIndex, result.overflow);
    }
  }
  function printSummary(summary) {
    console.log("\nThroughput Summary");
    for (const gate in summary) {
      console.log(gate + ": " + summary[gate] + " attendees processed");
    }
  }
  function simulateFestival(gates, timeBlock) {
    /* code */
    console.log("\n" + timeBlock + " Simulation");
    /* code */
  }
  ```

---

## Paso 26

> > Antes de iniciar la simulación, necesitas un objeto que registre el número de asistentes que procesa cada puerta a lo largo de todos los ticks. Llama a la función `initializeThroughput()` con los objetos `gates` y asigna el resultado a una variable llamada `throughputSummary`.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    const currentIndex = gates.indexOf(currentGate);
    const nextGateIndex = (currentIndex + 1) % gates.length;
    gates[nextGateIndex].queue[tickIndex] += overflowAmount;
    console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id);
  }
  function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
    console.log("\nProcessing " + gate.id + "...");
    console.log(gate.queue[tickIndex] + " attendees arriving.");
    const result = processGateFlow(gate, tickIndex);
    throughputSummary[gate.id] += result.processed;
    if (result.overflow > 0) {
      console.log("Overflow of " + result.overflow + " attendees. Rerouting...");
      rerouteOverflow(gates, gate, tickIndex, result.overflow);
    }
  }
  function printSummary(summary) {
    console.log("\nThroughput Summary");
    for (const gate in summary) {
      console.log(gate + ": " + summary[gate] + " attendees processed");
    }
  }
  function simulateFestival(gates, timeBlock) {
    console.log("\n" + timeBlock + " Simulation");
    /* code */
    const throughputSummary = initializeThroughput(gates);
    /* code */
  }
  ```

---

## Paso 27

Necesitas saber cuántos ticks debe ejecutarse la simulación. Recuerda que:

- Cada puerta tiene un array `queue` que indica cuántos asistentes llegan en cada tick.
- Dado que todas las puertas tienen el mismo número de ticks, puedes utilizar simplemente la longitud de la cola de la primera puerta.

> > Crea una variable llamada `maxTicks` y asígnale el valor de `gates[0].queue.length`.

Este valor se utilizará para controlar el bucle de simulación, asegurando que se procese cada tick para todas las puertas.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    const currentIndex = gates.indexOf(currentGate);
    const nextGateIndex = (currentIndex + 1) % gates.length;
    gates[nextGateIndex].queue[tickIndex] += overflowAmount;
    console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id);
  }
  function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
    console.log("\nProcessing " + gate.id + "...");
    console.log(gate.queue[tickIndex] + " attendees arriving.");
    const result = processGateFlow(gate, tickIndex);
    throughputSummary[gate.id] += result.processed;
    if (result.overflow > 0) {
      console.log("Overflow of " + result.overflow + " attendees. Rerouting...");
      rerouteOverflow(gates, gate, tickIndex, result.overflow);
    }
  }
  function printSummary(summary) {
    console.log("\nThroughput Summary");
    for (const gate in summary) {
      console.log(gate + ": " + summary[gate] + " attendees processed");
    }
  }
  function simulateFestival(gates, timeBlock) {
    console.log("\n" + timeBlock + " Simulation");
    const throughputSummary = initializeThroughput(gates);
    /* code */
    const maxTicks = gates[0].queue.length;
    /* code */
  }
  ```

---

## Paso 28

> > Para llevar un registro de qué tick se está procesando actualmente durante la simulación, crea una variable llamada `tickIndex` y asígnale un valor inicial de `0`.

Esta variable se utilizará para recorrer todos los ticks de la simulación y garantizar que cada puerta se procese en el orden correcto.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    const currentIndex = gates.indexOf(currentGate);
    const nextGateIndex = (currentIndex + 1) % gates.length;
    gates[nextGateIndex].queue[tickIndex] += overflowAmount;
    console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id);
  }
  function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
    console.log("\nProcessing " + gate.id + "...");
    console.log(gate.queue[tickIndex] + " attendees arriving.");
    const result = processGateFlow(gate, tickIndex);
    throughputSummary[gate.id] += result.processed;
    if (result.overflow > 0) {
      console.log("Overflow of " + result.overflow + " attendees. Rerouting...");
      rerouteOverflow(gates, gate, tickIndex, result.overflow);
    }
  }
  function printSummary(summary) {
    console.log("\nThroughput Summary");
    for (const gate in summary) {
      console.log(gate + ": " + summary[gate] + " attendees processed");
    }
  }
  function simulateFestival(gates, timeBlock) {
    console.log("\n" + timeBlock + " Simulation");
    const throughputSummary = initializeThroughput(gates);
    const maxTicks = gates[0].queue.length;
    /* code */
    let tickIndex = 0;
    /* code */
  }
  ```

---

## Paso 29

Ahora debes implementar el bucle principal de simulación. Este bucle garantizará que se procese cada puerta en cada tick de la simulación hasta que se hayan completado todos los ticks.

> > Crea un bucle `while` vacío que continúe mientras `tickIndex` sea menor que `maxTicks`.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    const currentIndex = gates.indexOf(currentGate);
    const nextGateIndex = (currentIndex + 1) % gates.length;
    gates[nextGateIndex].queue[tickIndex] += overflowAmount;
    console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id);
  }
  function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
    console.log("\nProcessing " + gate.id + "...");
    console.log(gate.queue[tickIndex] + " attendees arriving.");
    const result = processGateFlow(gate, tickIndex);
    throughputSummary[gate.id] += result.processed;
    if (result.overflow > 0) {
      console.log("Overflow of " + result.overflow + " attendees. Rerouting...");
      rerouteOverflow(gates, gate, tickIndex, result.overflow);
    }
  }
  function printSummary(summary) {
    console.log("\nThroughput Summary");
    for (const gate in summary) {
      console.log(gate + ": " + summary[gate] + " attendees processed");
    }
  }
  function simulateFestival(gates, timeBlock) {
    console.log("\n" + timeBlock + " Simulation");
    const throughputSummary = initializeThroughput(gates);
    const maxTicks = gates[0].queue.length;
    let tickIndex = 0;
    /* code */
    while (tickIndex < maxTicks) {}
    /* code */
  }
  ```

---

## Paso 30

Dentro de tu bucle `while`:

- Registra el mensaje: `"\nTick " + (tickIndex + 1)`.

- Recorre cada `gate` del array `gates` y llama a `handleGateAtTick()` con estos argumentos:
  
  - `gates`: el array completo de entradas de puertas.
  
  - `gate`: el objeto de puerta actual.
  
  - `tickIndex`: el tick actual.
  
  - `throughputSummary`: el objeto local que lleva la cuenta del total de asistentes procesados por puerta.

- Incrementa `tickIndex` en 1 para pasar al siguiente tick.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    const currentIndex = gates.indexOf(currentGate);
    const nextGateIndex = (currentIndex + 1) % gates.length;
    gates[nextGateIndex].queue[tickIndex] += overflowAmount;
    console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id);
  }
  function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
    console.log("\nProcessing " + gate.id + "...");
    console.log(gate.queue[tickIndex] + " attendees arriving.");
    const result = processGateFlow(gate, tickIndex);
    throughputSummary[gate.id] += result.processed;
    if (result.overflow > 0) {
      console.log("Overflow of " + result.overflow + " attendees. Rerouting...");
      rerouteOverflow(gates, gate, tickIndex, result.overflow);
    }
  }
  function printSummary(summary) {
    console.log("\nThroughput Summary");
    for (const gate in summary) {
      console.log(gate + ": " + summary[gate] + " attendees processed");
    }
  }
  function simulateFestival(gates, timeBlock) {
    console.log("\n" + timeBlock + " Simulation");
    const throughputSummary = initializeThroughput(gates);
    const maxTicks = gates[0].queue.length;
    let tickIndex = 0;
    while (tickIndex < maxTicks) {
      /* code */
      console.log("\nTick " + (tickIndex + 1));
      for (const gate of gates) {
        handleGateAtTick(gates, gate, tickIndex, throughputSummary)
      };
      tickIndex++;
      /* code */
    }
  }
  ```

---

## Paso 31

> > Para completar la función `simulateFestival`, muestra un resumen de los resultados de la simulación. Llama a `printSummary()` con tu objeto `throughputSummary` local.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    const currentIndex = gates.indexOf(currentGate);
    const nextGateIndex = (currentIndex + 1) % gates.length;
    gates[nextGateIndex].queue[tickIndex] += overflowAmount;
    console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id);
  }
  function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
    console.log("\nProcessing " + gate.id + "...");
    console.log(gate.queue[tickIndex] + " attendees arriving.");
    const result = processGateFlow(gate, tickIndex);
    throughputSummary[gate.id] += result.processed;
    if (result.overflow > 0) {
      console.log("Overflow of " + result.overflow + " attendees. Rerouting...");
      rerouteOverflow(gates, gate, tickIndex, result.overflow);
    }
  }
  function printSummary(summary) {
    console.log("\nThroughput Summary");
    for (const gate in summary) {
      console.log(gate + ": " + summary[gate] + " attendees processed");
    }
  }
  function simulateFestival(gates, timeBlock) {
    console.log("\n" + timeBlock + " Simulation");
    const throughputSummary = initializeThroughput(gates);
    const maxTicks = gates[0].queue.length;
    let tickIndex = 0;
    while (tickIndex < maxTicks) {
      console.log("\nTick " + (tickIndex + 1));
      for (const gate of gates) {
        handleGateAtTick(gates, gate, tickIndex, throughputSummary)
      };
      tickIndex++;
    }
    /* code */
    printSummary(throughputSummary);
    /* code */
  }
  ```

---

## Paso 32

Por último, ya puedes ejecutar tus simulaciones.

> > Empieza con el turno de la mañana. Llama a la función `simulateFestival()` con `morningGates` y `"Morning"`.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    const currentIndex = gates.indexOf(currentGate);
    const nextGateIndex = (currentIndex + 1) % gates.length;
    gates[nextGateIndex].queue[tickIndex] += overflowAmount;
    console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id);
  }
  function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
    console.log("\nProcessing " + gate.id + "...");
    console.log(gate.queue[tickIndex] + " attendees arriving.");
    const result = processGateFlow(gate, tickIndex);
    throughputSummary[gate.id] += result.processed;
    if (result.overflow > 0) {
      console.log("Overflow of " + result.overflow + " attendees. Rerouting...");
      rerouteOverflow(gates, gate, tickIndex, result.overflow);
    }
  }
  function printSummary(summary) {
    console.log("\nThroughput Summary");
    for (const gate in summary) {
      console.log(gate + ": " + summary[gate] + " attendees processed");
    }
  }
  function simulateFestival(gates, timeBlock) {
    console.log("\n" + timeBlock + " Simulation");
    const throughputSummary = initializeThroughput(gates);
    const maxTicks = gates[0].queue.length;
    let tickIndex = 0;
    while (tickIndex < maxTicks) {
      console.log("\nTick " + (tickIndex + 1));
      for (const gate of gates) {
        handleGateAtTick(gates, gate, tickIndex, throughputSummary)
      };
      tickIndex++;
    }
    printSummary(throughputSummary);
  }
  /* code */
  simulateFestival(morningGates, "Morning");
  /* code */
  ```

---

## Paso 33

> > Simula el turno de noche llamando a la función `simulateFestival()` con `nightGates` y `"Night"`.

- **Code**

  ```js
  const morningGates = [ ... ];
  const nightGates = [ ... ];

  function initializeThroughput(gates) {
    const summary = {};
    for (const gate of gates) {
      summary[gate.id] = 0;
    }
    return summary;
  }
  function processGateFlow(gate, tickIndex) {
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;
    while (currentTickQueue > 0 && processed < gate.capacity) {
      currentTickQueue--;
      processed++;
    }
    return {
      processed: processed,
      overflow: currentTickQueue
    }
  }
  function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
    const currentIndex = gates.indexOf(currentGate);
    const nextGateIndex = (currentIndex + 1) % gates.length;
    gates[nextGateIndex].queue[tickIndex] += overflowAmount;
    console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id);
  }
  function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
    console.log("\nProcessing " + gate.id + "...");
    console.log(gate.queue[tickIndex] + " attendees arriving.");
    const result = processGateFlow(gate, tickIndex);
    throughputSummary[gate.id] += result.processed;
    if (result.overflow > 0) {
      console.log("Overflow of " + result.overflow + " attendees. Rerouting...");
      rerouteOverflow(gates, gate, tickIndex, result.overflow);
    }
  }
  function printSummary(summary) {
    console.log("\nThroughput Summary");
    for (const gate in summary) {
      console.log(gate + ": " + summary[gate] + " attendees processed");
    }
  }
  function simulateFestival(gates, timeBlock) {
    console.log("\n" + timeBlock + " Simulation");
    const throughputSummary = initializeThroughput(gates);
    const maxTicks = gates[0].queue.length;
    let tickIndex = 0;
    while (tickIndex < maxTicks) {
      console.log("\nTick " + (tickIndex + 1));
      for (const gate of gates) {
        handleGateAtTick(gates, gate, tickIndex, throughputSummary)
      };
      tickIndex++;
    }
    printSummary(throughputSummary);
  }
  /* code */
  simulateFestival(morningGates, "Morning");
  simulateFestival(nightGates, "Night");
  /* code */
  /* Salida del codigo */
  Morning Simulation

  Tick 1
  
  Processing North...
  3 attendees arriving.
  
  Processing East...
  2 attendees arriving.
  
  Processing South...
  1 attendees arriving.
  
  Processing West...
  4 attendees arriving.
  Overflow of 2 attendees. Rerouting...
  2 attendees rerouted to North
  
  Tick 2
  
  Processing North...
  6 attendees arriving.
  Overflow of 1 attendees. Rerouting...
  1 attendees rerouted to East
  
  Processing East...
  5 attendees arriving.
  Overflow of 2 attendees. Rerouting...
  2 attendees rerouted to South
  
  Processing South...
  4 attendees arriving.
  
  Processing West...
  1 attendees arriving.
  
  Tick 3
  
  Processing North...
  2 attendees arriving.
  
  Processing East...
  3 attendees arriving.
  
  Processing South...
  3 attendees arriving.
  
  Processing West...
  2 attendees arriving.
  
  Tick 4
  
  Processing North...
  4 attendees arriving.
  
  Processing East...
  5 attendees arriving.
  Overflow of 2 attendees. Rerouting...
  2 attendees rerouted to South
  
  Processing South...
  3 attendees arriving.
  
  Processing West...
  3 attendees arriving.
  Overflow of 1 attendees. Rerouting...
  1 attendees rerouted to North
  
  Throughput Summary
  North: 14 attendees processed
  East: 11 attendees processed
  South: 11 attendees processed
  West: 7 attendees processed
  
  Night Simulation
  
  Tick 1
  
  Processing North...
  6 attendees arriving.
  Overflow of 2 attendees. Rerouting...
  2 attendees rerouted to East
  
  Processing East...
  5 attendees arriving.
  Overflow of 3 attendees. Rerouting...
  3 attendees rerouted to South
  
  Processing South...
  5 attendees arriving.
  
  Processing West...
  5 attendees arriving.
  Overflow of 2 attendees. Rerouting...
  2 attendees rerouted to North
  
  Tick 2
  
  Processing North...
  2 attendees arriving.
  
  Processing East...
  3 attendees arriving.
  Overflow of 1 attendees. Rerouting...
  1 attendees rerouted to South
  
  Processing South...
  2 attendees arriving.
  
  Processing West...
  2 attendees arriving.
  
  Tick 3
  
  Processing North...
  5 attendees arriving.
  Overflow of 1 attendees. Rerouting...
  1 attendees rerouted to East
  
  Processing East...
  5 attendees arriving.
  Overflow of 3 attendees. Rerouting...
  3 attendees rerouted to South
  
  Processing South...
  5 attendees arriving.
  
  Processing West...
  1 attendees arriving.
  
  Tick 4
  
  Processing North...
  1 attendees arriving.
  
  Processing East...
  2 attendees arriving.
  
  Processing South...
  3 attendees arriving.
  
  Processing West...
  4 attendees arriving.
  Overflow of 1 attendees. Rerouting...
  1 attendees rerouted to North
  
  Throughput Summary
  North: 11 attendees processed
  East: 8 attendees processed
  South: 15 attendees processed
  West: 9 attendees processed
  /* Salida del codigo */
  ```

---

**¡Con esto, tus simulaciones están completas!**
