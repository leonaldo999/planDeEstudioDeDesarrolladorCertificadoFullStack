# Elabora una lista de participantes para una misión espacial

En este taller, utilizarás JavaScript para crear una lista de astronautas para una misión espacial.

---

## Paso 1

> > Para empezar, crea un array vacío para tu lista con el nombre `squad`.

- **Code**

  ```js
  const squad = [];
  ```

---

## Paso 2

> > Tu plantilla comienza con un solo astronauta comandante. Crea un objeto llamado `firstAstronaut` con las siguientes propiedades:

| key | Value |
| --- | --- |
| `id` | `1` |
| `name` | `"Andy"` |
| `role` | `"Commander"` |
| `isEVAEligible` | `true` |
| `priority` | `3` |

---

- **Code**

  ```js
  const squad = [];
  /* code */
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  /* code */
  ```

---

## Paso 3

> > El centro de control de la misión necesita un método para añadir nuevos miembros a la lista. Crea una función vacía llamada `addCrewMember` que acepte dos parámetros: `crew` y `astronaut`.

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  /* code */
  function addCrewMember(crew, astronaut) {
  
  };
  /* code */
  ```

---

## Paso 4

Por lo general, es recomendable validar los datos introducidos dentro de una función. Utiliza un bucle `for` para recorrer el array `crew` y comprueba si algún miembro tiene ya el mismo `ID` que el `astronaut` introducido. Si se encuentra un duplicado, registra el mensaje de error `console.log("Duplicate ID: " + astronaut.id)` y, a continuación, llama a `return` para salir de la función antes de tiempo.

A continuación se muestra un ejemplo de esta técnica de uso común:

- **Example Code**

  ```js
  if (existingMember.id === newMember.id) {
      console.log("Duplicate ID: " + newMember.id);
      return;
  }
  ```

---

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    /* code */
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    /* code */
  };
  ```

---

## Paso 5

> > Añade el objeto `astronaut` al array `crew` y registra en la consola el mensaje `Added ${astronaut.name} as ${astronaut.role}`. Para el mensaje de registro, puedes utilizar literales de plantilla o la concatenación de cadenas.

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
  /* code */
    crew.push(astronaut);
    console.log(`Added ${astronaut.name} as ${astronaut.role}`);
  /* code */
  };
  ```

---

## Paso 6

> > Ahora puedes empezar a formar tu equipo. Usa `addCrewMember()` para añadir `firstAstronaut` a tu `squad`.

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
    console.log(`Added ${astronaut.name} as ${astronaut.role}`);
  };
  /* code */
  addCrewMember(squad, firstAstronaut);
  /* code */
  ```

---

## Paso 7

> > El resto de tu tripulación se ha creado en un array llamado `remainingCrew` con los siguientes datos:

| id | name | role | isEVAEligible | priority |
| --- | --- | --- | --- | --- |
| `2` | `"Bart"` | `"Pilot"` | `false` | `8` |
| `3` | `"Caroline"` | `"Engineer"` | `true` | `4` |
| `4` | `"Diego"` | `"Scientist"` | `false` | `1` |
| `5` | `"Elise"` | `"Medic"` | `true` | `7` |
| `6` | `"Felix"` | `"Navigator"` | `true` | `6` |
| `7` | `"Gertrude"` | `"Communications"` | `false` | `4` |
| `8` | `"Hank"` | `"Mechanic"` | `true` | `2` |
| `9` | `"Irene"` | `"Specialist"` | `true` | `5` |
| `10` | `"Joan"` | `"Technician"` | `false` | `1` |

---

> > Recorre el array `remainingCrew` y añade cada astronauta al `squad` mediante la función `addCrewMember()`.

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
    console.log(`Added ${astronaut.name} as ${astronaut.role}`);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  /* code */
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  /* code */
  ```

---

## Paso 8

> > Anteriormente habías añadido una llamada a `console.log()` en tu función `addCrewMember` para comprobar su funcionamiento, pero ahora ya no es necesaria. Para evitar que la terminal se llene de mensajes en los próximos pasos, elimina la llamada actual a `console.log()`.

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
    /* code */
    // Se elimina log
    /* code */
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  ```

---

## Paso 9

El centro de control de la misión necesita un método para intercambiar las posiciones de dos miembros de la tripulación en una lista. Crea una función vacía llamada `swapCrewMembers` con tres parámetros:

- `crew`: una matriz de objetos de astronauta

- `fromIndex`: el índice del primer astronauta que se va a intercambiar

- `toIndex`: el índice del segundo astronauta que se va a intercambiar

---

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  /* code */
  function swapCrewMembers(crew, fromIndex, toIndex) {
    
  }
  /* code */
  ```

---

## Paso 10

Al igual que antes, empieza por validar los datos de entrada dentro de la función `swapCrewMembers`. En concreto, debes validar los índices de los astronautas que se van a intercambiar.

Si se cumple alguna de las siguientes condiciones:

- `fromIndex` es negativo

- `fromIndex` es mayor o igual que `crew.length`

- `toIndex` es negativo

- `toIndex` es mayor o igual que `crew.length`

entonces, debes registrar `"Invalid crew indices"` en la consola y llamar a `return` para salir de la función.

Puedes usar el operador *OR* `||` para verificar varias condiciones a la vez:

- **Example Code**

  ```js
  if (condition1 || condition2 || condition3 || condition4) {
    console.log("Message");
    return;
  }
  ```

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  function swapCrewMembers(crew, fromIndex, toIndex) {
    /* code */
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
      console.log("Invalid crew indices");
      return;
    }
    /* code */
  }
  ```

---

## Paso 11

> > Debes crear una copia superficial del array `crew` utilizando el método `slice()`. Asigna al nuevo array el nombre `updatedCrew`.
>
> > Recuerda que llamar a `slice()` sin argumentos devuelve una copia de todo el array:

- **Example Code**

  ```js
  const copyArray = originalArray.slice();
  ```

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  function swapCrewMembers(crew, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
      console.log("Invalid crew indices");
      return;
    }
    /* code */
    const updatedCrew = crew.slice();
    /* code */
  }
  ```

---

## Paso 12

El método `splice()` puede modificar arrays añadiendo o eliminando elementos en cualquier posición, incluso en el medio. Dado que `splice()` devuelve un array que contiene los elementos eliminados, puedes utilizarlo para intercambiar dos elementos de un array sin alterar la original. Esto se puede hacer en una sola línea utilizando la siguiente técnica:

- **Example Code**

  ```js
  // swap elements at i and j without mutating the original
  const copy = array.slice();
  copy[i] = copy.splice(j, 1, copy[i])[0];
  ```

He aquí un ejemplo:

- **Example Code**

  ```js
  const originalArray = [12, 97, 68, 55];
  const copyArray = originalArray.slice();
  copyArray[1] = copyArray.splice(3, 1, copyArray[1])[0];
  console.log(copyArray); // [12, 55, 68, 97]
  ```

La técnica, aplicada en la tercera línea, funciona de la siguiente manera:

- `splice(3, 1, copyArray[1])` elimina el elemento en el índice `3` (`55`)

- Inserta el elemento de `copyArray[1]` (`97`) en el índice `3`

- `splice()` devuelve `[55]`, un array que contiene el elemento eliminado

- `[0]` extrae `55` de ese array

- Ese valor (`55`) se reasigna a `copyArray[1]`, completando el intercambio

Utiliza esta técnica con el array `updatedCrew` para intercambiar a los astronautas en `fromIndex` y `toIndex`.

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  function swapCrewMembers(crew, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
      console.log("Invalid crew indices");
      return;
    }
    const updatedCrew = crew.slice();
    /* code */
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
    /* code */
  }
  ```

---

## Paso 13

> > Utiliza un bucle `for` para registrar el nombre de cada astronauta en el array `updatedCrew`. Al finalizar el bucle, devuelve el array `updatedCrew` para completar tu función `swapCrewMembers`.

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  function swapCrewMembers(crew, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
      console.log("Invalid crew indices");
      return;
    }
    const updatedCrew = crew.slice();
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
    /* code */
    for (let i = 0; i < updatedCrew.length; i++) {
      console.log(updatedCrew[i].name);
    }
    return updatedCrew;
    /* code */
  }
  ```

---

## Paso 14

> > El centro de control de la misión te ha pedido que intercambies las posiciones de dos astronautas en tu array de `squad`, concretamente los miembros en los índices `2` y `5`. Usa tu función `swapCrewMembers()` para realizar el intercambio y guarda el resultado en una nueva variable llamada `updatedSquad`.

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  function swapCrewMembers(crew, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
      console.log("Invalid crew indices");
      return;
    }
    const updatedCrew = crew.slice();
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
    for (let i = 0; i < updatedCrew.length; i++) {
      console.log(updatedCrew[i].name);
    }
    return updatedCrew;
  }
  /* code */
  const updatedSquad = swapCrewMembers(squad, 2, 5);
  /* code */
  ```

---

## Paso 15

> > Anteriormente habías añadido una llamada a `console.log()` en tu función `swapCrewMembers` para comprobar su comportamiento, pero ahora ya no es necesaria. Para evitar que la terminal se llene de mensajes en los próximos pasos, elimina el bucle `for` actual que registra información en la consola.

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  function swapCrewMembers(crew, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
      console.log("Invalid crew indices");
      return;
    }
    const updatedCrew = crew.slice();
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
  /* code */
    // Se elimina el bucle for que registra los nombres
  /* code */
    return updatedCrew;
  }
  const updatedSquad = swapCrewMembers(squad, 2, 5);
  ```

---

## Paso 16

> > El control de misión necesita un método para seleccionar a los astronautas aptos para actividades extravehiculares (**EVA**) de una tripulación. Crea una función vacía llamada `getEVAReadyCrew` que acepte un parámetro de `crew`.

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  function swapCrewMembers(crew, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
      console.log("Invalid crew indices");
      return;
    }
    const updatedCrew = crew.slice();
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
    return updatedCrew;
  }
  const updatedSquad = swapCrewMembers(squad, 2, 5);
  /* code */
  function getEVAReadyCrew(crew) {
  
  }
  /* code */
  ```

---

## Paso 17

En primer lugar, crea una array vacío llamado `eligible`. A continuación, recorre todos los astronautas del array `crew` de entrada y, si son aptos para una **EVA** (es decir, si su propiedad `isEVAEligible` es `true`), añádelos al array `eligible`. Al finalizar el bucle, devuelve el array `eligible`.

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  function swapCrewMembers(crew, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
      console.log("Invalid crew indices");
      return;
    }
    const updatedCrew = crew.slice();
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
    return updatedCrew;
  }
  const updatedSquad = swapCrewMembers(squad, 2, 5);
  function getEVAReadyCrew(crew) {
    /* code */
    const eligible = [];
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].isEVAEligible) {
        eligible.push(crew[i]);
      }
    }
    return eligible;
    /* code */
  }
  ```

---

## Paso 18

El centro de control te ha informado de que la lista de astronautas aptos para actividades extravehiculares (**EVA**) también debe ordenarse por prioridad descendente. Hay varias formas de ordenar un array; quizá la más básica sea el ordenamiento por `bubble sort`(*clasificación de burbujas*).

La ordenación por `bubble sort` funciona recorriendo repetidamente una lista, comparando elementos adyacentes e intercambiándolos si están en el orden incorrecto. Después de cada pasada, el elemento que debería ir primero según tus criterios de ordenación se acerca (o *“burbujas”* hacia) su posición correcta en el array. Así es como puedes ordenar a `crew` por prioridad descendente utilizando la ordenación por `bubble sort`:

- **Example Code**

  ```js
  // Bucle Externo: determina cuántos pases hacemos
  for (let i = 0; i < crew.length - 1; i++) {
    // Bucle Interno: compara elementos adyacentes y los intercambia si están en el orden incorrecto
    for (let j = 0; j < crew.length - 1 - i; j++) {
      // si el miembro actual tiene menor prioridad que el siguiente, intercambiarlos
      if (crew[j].priority < crew[j + 1].priority) {
        // Uso de una variable temporal para el intercambio
          const temp = crew[j];
          crew[j] = crew[j + 1];
          crew[j + 1] = temp;
      }
    }
  }
  ```

> > Crea una nueva función auxiliar llamada `sortByPriorityDescending` que acepte un parámetro `crew`. Esta función debe ordenar directamente al array `crew` de entrada en orden descendente por prioridad, utilizando dos bucles `for` anidados, y no debe devolver ningún valor.

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  function swapCrewMembers(crew, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
      console.log("Invalid crew indices");
      return;
    }
    const updatedCrew = crew.slice();
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
    return updatedCrew;
  }
  const updatedSquad = swapCrewMembers(squad, 2, 5);
  /* code */
  function sortByPriorityDescending(crew) {
    for (let i = 0; i < crew.length - 1; i++) {
      for (let j = 0; j < crew.length - 1 - i; j++) {
        if (crew[j].priority < crew[j + 1].priority) {
          const temp = crew[j];
          crew[j] = crew[j + 1];
          crew[j + 1] = temp;
        }
      }
    }
  }
  /* code */
  function getEVAReadyCrew(crew) {
    const eligible = [];
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].isEVAEligible) {
        eligible.push(crew[i]);
      }
    }
    return eligible;
  }
  ```

---

## Paso 19

> > De vuelta dentro de la función `getEVAReadyCrew`, llama a `sortByPriorityDescending()` con el array local `eligible` para que quede ordenado antes de ser devuelta.

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  function swapCrewMembers(crew, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
      console.log("Invalid crew indices");
      return;
    }
    const updatedCrew = crew.slice();
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
    return updatedCrew;
  }
  const updatedSquad = swapCrewMembers(squad, 2, 5);
  function sortByPriorityDescending(crew) {
    for (let i = 0; i < crew.length - 1; i++) {
      for (let j = 0; j < crew.length - 1 - i; j++) {
        if (crew[j].priority < crew[j + 1].priority) {
          const temp = crew[j];
          crew[j] = crew[j + 1];
          crew[j + 1] = temp;
        }
      }
    }
  }
  function getEVAReadyCrew(crew) {
    const eligible = [];
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].isEVAEligible) {
        eligible.push(crew[i]);
      }
    }
    /* code */
    sortByPriorityDescending(eligible);
    /* code */
    return eligible;
  }
  ```

---

## Paso 20

> > Llama a la función `getEVAReadyCrew()` con tu lista `updatedSquad` y guarda el resultado en una nueva variable llamada `EVAReadySquad`. A continuación, utiliza un bucle `for` para registrar el `name` de cada astronauta del array `EVAReadySquad`.

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  function swapCrewMembers(crew, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
      console.log("Invalid crew indices");
      return;
    }
    const updatedCrew = crew.slice();
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
    return updatedCrew;
  }
  const updatedSquad = swapCrewMembers(squad, 2, 5);
  function sortByPriorityDescending(crew) {
    for (let i = 0; i < crew.length - 1; i++) {
      for (let j = 0; j < crew.length - 1 - i; j++) {
        if (crew[j].priority < crew[j + 1].priority) {
          const temp = crew[j];
          crew[j] = crew[j + 1];
          crew[j + 1] = temp;
        }
      }
    }
  }
  function getEVAReadyCrew(crew) {
    const eligible = [];
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].isEVAEligible) {
        eligible.push(crew[i]);
      }
    }
    sortByPriorityDescending(eligible);
    return eligible;
  }
  /* code */
  const EVAReadySquad = getEVAReadyCrew(updatedSquad);
  for (let i = 0; i < EVAReadySquad.length; i++) {
    console.log(EVAReadySquad[i].name);
  }
  /* code */
  ```

---

## Paso 21

> > Agregaste una llamada a `console.log()` en tu script para validar tu array `EVAReadySquad`, y ahora esa llamada ya no es necesaria. Para evitar que la terminal se llene de mensajes en los próximos pasos, elimina el bucle `for` actual que registra a los astronautas de `EVAReadySquad` en la consola.

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  function swapCrewMembers(crew, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
      console.log("Invalid crew indices");
      return;
    }
    const updatedCrew = crew.slice();
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
    return updatedCrew;
  }
  const updatedSquad = swapCrewMembers(squad, 2, 5);
  function sortByPriorityDescending(crew) {
    for (let i = 0; i < crew.length - 1; i++) {
      for (let j = 0; j < crew.length - 1 - i; j++) {
        if (crew[j].priority < crew[j + 1].priority) {
          const temp = crew[j];
          crew[j] = crew[j + 1];
          crew[j + 1] = temp;
        }
      }
    }
  }
  function getEVAReadyCrew(crew) {
    const eligible = [];
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].isEVAEligible) {
        eligible.push(crew[i]);
      }
    }
    sortByPriorityDescending(eligible);
    return eligible;
  }
  const EVAReadySquad = getEVAReadyCrew(updatedSquad);
  /* code */
  // Se elimina el bucle for que registra los nombres de los astronautas en la consola
  /* code */
  ```

---

## Paso 22

> > El centro de control de la misión ha solicitado una nueva función para dividir a la tripulación en grupos de tamaños variables. Crea una función vacía llamada `chunkCrew` que acepte dos parámetros: `crew` y `size`.

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  function swapCrewMembers(crew, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
      console.log("Invalid crew indices");
      return;
    }
    const updatedCrew = crew.slice();
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
    return updatedCrew;
  }
  const updatedSquad = swapCrewMembers(squad, 2, 5);
  function sortByPriorityDescending(crew) {
    for (let i = 0; i < crew.length - 1; i++) {
      for (let j = 0; j < crew.length - 1 - i; j++) {
        if (crew[j].priority < crew[j + 1].priority) {
          const temp = crew[j];
          crew[j] = crew[j + 1];
          crew[j + 1] = temp;
        }
      }
    }
  }
  function getEVAReadyCrew(crew) {
    const eligible = [];
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].isEVAEligible) {
        eligible.push(crew[i]);
      }
    }
    sortByPriorityDescending(eligible);
    return eligible;
  }
  const EVAReadySquad = getEVAReadyCrew(updatedSquad);
  /* code */
  function chunkCrew (crew, size) {
  
  };
  /* code */
  ```

---

## Paso 23

> > Al igual que antes, debes validar los datos introducidos. En concreto, si el `size` es menor que `1`, debes registrar el mensaje `"Chunk size must be >= 1"` en la consola y, a continuación, llamar a `return` para salir de la función.

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  function swapCrewMembers(crew, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
      console.log("Invalid crew indices");
      return;
    }
    const updatedCrew = crew.slice();
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
    return updatedCrew;
  }
  const updatedSquad = swapCrewMembers(squad, 2, 5);
  function sortByPriorityDescending(crew) {
    for (let i = 0; i < crew.length - 1; i++) {
      for (let j = 0; j < crew.length - 1 - i; j++) {
        if (crew[j].priority < crew[j + 1].priority) {
          const temp = crew[j];
          crew[j] = crew[j + 1];
          crew[j + 1] = temp;
        }
      }
    }
  }
  function getEVAReadyCrew(crew) {
    const eligible = [];
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].isEVAEligible) {
        eligible.push(crew[i]);
      }
    }
    sortByPriorityDescending(eligible);
    return eligible;
  }
  const EVAReadySquad = getEVAReadyCrew(updatedSquad);
  function chunkCrew (crew, size) {
    /* code */
    if (size < 1) {
      console.log("Chunk size must be >= 1");
      return;
    }
    /* code */
  };
  ```

---

## Paso 24

Para crear fragmentos de tamaño `n` a partir de un array sin modificarlo, puedes combinar un bucle `for` con el método `slice()` de la siguiente manera:

- **Example Code**

  ```js
  const result = [];
  for (let i = 0; i < array.length; i += n) {
    result.push(array.slice(i, i + n));
  }
  ```

*El ejemplo anterior*:

- crea un array vacío llamado `result`

- recorre el `array` original en tramos de tamaño `n` utilizando un bucle `for` con un incremento de `i += n`

- crea fragmentos del array de tamaño `n` y los añade a `result` mediante la función `slice()`

> > Para completar la función `chunkCrew`, debes:

- crear un array llamado `chunks` vacío para almacenar los fragmentos de tripulación

- recorrer `crew` en intervalos de tamaño `size`, creando y añadiendo fragmentos de `crew` a `chunks` mediante `slice()`

- devolver el array `chunks`

---

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  function swapCrewMembers(crew, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
      console.log("Invalid crew indices");
      return;
    }
    const updatedCrew = crew.slice();
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
    return updatedCrew;
  }
  const updatedSquad = swapCrewMembers(squad, 2, 5);
  function sortByPriorityDescending(crew) {
    for (let i = 0; i < crew.length - 1; i++) {
      for (let j = 0; j < crew.length - 1 - i; j++) {
        if (crew[j].priority < crew[j + 1].priority) {
          const temp = crew[j];
          crew[j] = crew[j + 1];
          crew[j + 1] = temp;
        }
      }
    }
  }
  function getEVAReadyCrew(crew) {
    const eligible = [];
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].isEVAEligible) {
        eligible.push(crew[i]);
      }
    }
    sortByPriorityDescending(eligible);
    return eligible;
  }
  const EVAReadySquad = getEVAReadyCrew(updatedSquad);
  function chunkCrew (crew, size) {
    if (size < 1) {
      console.log("Chunk size must be >= 1");
      return;
    }
  /* code */
    const chunks = [];
    for (let i = 0; i < crew.length; i += size) {
      chunks.push(crew.slice(i, i + size));
    }
    return chunks;
  /* code */
  };
  ```

---

## Paso 25

> > Utiliza tu función `chunkCrew()` para crear grupos de tamaño `3` a partir de tu array `EVAReadySquad` y guárdalos en una nueva variable llamada `EVAChunks`.

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  function swapCrewMembers(crew, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
      console.log("Invalid crew indices");
      return;
    }
    const updatedCrew = crew.slice();
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
    return updatedCrew;
  }
  const updatedSquad = swapCrewMembers(squad, 2, 5);
  function sortByPriorityDescending(crew) {
    for (let i = 0; i < crew.length - 1; i++) {
      for (let j = 0; j < crew.length - 1 - i; j++) {
        if (crew[j].priority < crew[j + 1].priority) {
          const temp = crew[j];
          crew[j] = crew[j + 1];
          crew[j + 1] = temp;
        }
      }
    }
  }
  function getEVAReadyCrew(crew) {
    const eligible = [];
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].isEVAEligible) {
        eligible.push(crew[i]);
      }
    }
    sortByPriorityDescending(eligible);
    return eligible;
  }
  const EVAReadySquad = getEVAReadyCrew(updatedSquad);
  function chunkCrew (crew, size) {
    if (size < 1) {
      console.log("Chunk size must be >= 1");
      return;
    }
    const chunks = [];
    for (let i = 0; i < crew.length; i += size) {
      chunks.push(crew.slice(i, i + size));
    }
    return chunks;
  };
  /* code */
  const EVAChunks = chunkCrew(EVAReadySquad, 3);
  /* code */
  ```

---

## Paso 26

Quizás hayas notado que `EVAChunks` es, en esencia, un array que contiene otros arrays, es decir, un array bidimensional (*2D*). Se puede utilizar un bucle `for` anidado para registrar datos de una array *2D*:

- **Example Code**

  ```js
  for (let i = 0; i < rootArray.length; i++) {
    console.log(`Group ${i + 1}:`);
    for (let j = 0; j < rootArray[i].length; j++) {
      console.log(rootArray[i][j].property);
    }
  }
  ```

En el ejemplo anterior, `rootArray` es el array principal, `rootArray[i]` es un subarray dentro del array principal, y `rootArray[i][j]` es un objeto dentro de ese subarray; además, `.property` accede a un valor de ese objeto.

> > Utiliza un bucle `for` anidado para recorrer `EVAChunks` y registra el nombre de cada astronauta en cada fragmento. Asegúrate de:

- utilizar `EVAChunks` como tu array raíz

- registrar `Chunk ${i+1}:` entre fragmentos

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  function swapCrewMembers(crew, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
      console.log("Invalid crew indices");
      return;
    }
    const updatedCrew = crew.slice();
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
    return updatedCrew;
  }
  const updatedSquad = swapCrewMembers(squad, 2, 5);
  function sortByPriorityDescending(crew) {
    for (let i = 0; i < crew.length - 1; i++) {
      for (let j = 0; j < crew.length - 1 - i; j++) {
        if (crew[j].priority < crew[j + 1].priority) {
          const temp = crew[j];
          crew[j] = crew[j + 1];
          crew[j + 1] = temp;
        }
      }
    }
  }
  function getEVAReadyCrew(crew) {
    const eligible = [];
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].isEVAEligible) {
        eligible.push(crew[i]);
      }
    }
    sortByPriorityDescending(eligible);
    return eligible;
  }
  const EVAReadySquad = getEVAReadyCrew(updatedSquad);
  function chunkCrew (crew, size) {
    if (size < 1) {
      console.log("Chunk size must be >= 1");
      return;
    }
    const chunks = [];
    for (let i = 0; i < crew.length; i += size) {
      chunks.push(crew.slice(i, i + size));
    }
    return chunks;
  };
  const EVAChunks = chunkCrew(EVAReadySquad, 3);
  /* code */
  for (let i = 0; i < EVAChunks.length; i++) {
    console.log(`Chunk ${i + 1}:`);
    for (let j = 0; j < EVAChunks[i].length; j++) {
      console.log(EVAChunks[i][j].name);
    }
  }
  /* code */
  ```

---

## Paso 27

> > Agregaste una llamada a `console.log()` en tu script para validar tu array `EVAChunks`, y ahora esa llamada ya no es necesaria. Para mantener la terminal despejada de cara a los siguientes pasos, elimina el bloque del bucle `for` que registra los datos de `EVAChunks`.

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  function swapCrewMembers(crew, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
      console.log("Invalid crew indices");
      return;
    }
    const updatedCrew = crew.slice();
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
    return updatedCrew;
  }
  const updatedSquad = swapCrewMembers(squad, 2, 5);
  function sortByPriorityDescending(crew) {
    for (let i = 0; i < crew.length - 1; i++) {
      for (let j = 0; j < crew.length - 1 - i; j++) {
        if (crew[j].priority < crew[j + 1].priority) {
          const temp = crew[j];
          crew[j] = crew[j + 1];
          crew[j + 1] = temp;
        }
      }
    }
  }
  function getEVAReadyCrew(crew) {
    const eligible = [];
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].isEVAEligible) {
        eligible.push(crew[i]);
      }
    }
    sortByPriorityDescending(eligible);
    return eligible;
  }
  const EVAReadySquad = getEVAReadyCrew(updatedSquad);
  function chunkCrew (crew, size) {
    if (size < 1) {
      console.log("Chunk size must be >= 1");
      return;
    }
    const chunks = [];
    for (let i = 0; i < crew.length; i += size) {
      chunks.push(crew.slice(i, i + size));
    }
    return chunks;
  };
  const EVAChunks = chunkCrew(EVAReadySquad, 3);
  /* code */
    // Se elimina el bloque del bucle for que registra los datos de EVAChunks en la consola
  /* code */
  ```

---

## Paso 28

> > Mission Control necesita una función más para registrar un resumen de la tripulación. Crea una función vacía llamada `printCrewSummary` que acepte un parámetro de `crew`.

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  function swapCrewMembers(crew, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
      console.log("Invalid crew indices");
      return;
    }
    const updatedCrew = crew.slice();
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
    return updatedCrew;
  }
  const updatedSquad = swapCrewMembers(squad, 2, 5);
  function sortByPriorityDescending(crew) {
    for (let i = 0; i < crew.length - 1; i++) {
      for (let j = 0; j < crew.length - 1 - i; j++) {
        if (crew[j].priority < crew[j + 1].priority) {
          const temp = crew[j];
          crew[j] = crew[j + 1];
          crew[j + 1] = temp;
        }
      }
    }
  }
  function getEVAReadyCrew(crew) {
    const eligible = [];
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].isEVAEligible) {
        eligible.push(crew[i]);
      }
    }
    sortByPriorityDescending(eligible);
    return eligible;
  }
  const EVAReadySquad = getEVAReadyCrew(updatedSquad);
  function chunkCrew (crew, size) {
    if (size < 1) {
      console.log("Chunk size must be >= 1");
      return;
    }
    const chunks = [];
    for (let i = 0; i < crew.length; i += size) {
      chunks.push(crew.slice(i, i + size));
    }
    return chunks;
  };
  const EVAChunks = chunkCrew(EVAReadySquad, 3);
  /* code */
  function printCrewSummary(crew) {
    
  }
  /* code */
  ```

---

## Paso 29

> > En primer lugar, crea una copia superficial del array `crew` de entrada utilizando la función `slice()` y asígnala a una variable llamada `sorted`.

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  function swapCrewMembers(crew, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
      console.log("Invalid crew indices");
      return;
    }
    const updatedCrew = crew.slice();
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
    return updatedCrew;
  }
  const updatedSquad = swapCrewMembers(squad, 2, 5);
  function sortByPriorityDescending(crew) {
    for (let i = 0; i < crew.length - 1; i++) {
      for (let j = 0; j < crew.length - 1 - i; j++) {
        if (crew[j].priority < crew[j + 1].priority) {
          const temp = crew[j];
          crew[j] = crew[j + 1];
          crew[j + 1] = temp;
        }
      }
    }
  }
  function getEVAReadyCrew(crew) {
    const eligible = [];
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].isEVAEligible) {
        eligible.push(crew[i]);
      }
    }
    sortByPriorityDescending(eligible);
    return eligible;
  }
  const EVAReadySquad = getEVAReadyCrew(updatedSquad);
  function chunkCrew (crew, size) {
    if (size < 1) {
      console.log("Chunk size must be >= 1");
      return;
    }
    const chunks = [];
    for (let i = 0; i < crew.length; i += size) {
      chunks.push(crew.slice(i, i + size));
    }
    return chunks;
  };
  const EVAChunks = chunkCrew(EVAReadySquad, 3);
  function printCrewSummary(crew) {
    /* code */
    const sorted = crew.slice();
    /* code */
  }
  ```

---

## Paso 30

> > Ordena directamente el array `sorted` local utilizando tu función auxiliar `sortByPriorityDescending()`.

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  function swapCrewMembers(crew, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
      console.log("Invalid crew indices");
      return;
    }
    const updatedCrew = crew.slice();
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
    return updatedCrew;
  }
  const updatedSquad = swapCrewMembers(squad, 2, 5);
  function sortByPriorityDescending(crew) {
    for (let i = 0; i < crew.length - 1; i++) {
      for (let j = 0; j < crew.length - 1 - i; j++) {
        if (crew[j].priority < crew[j + 1].priority) {
          const temp = crew[j];
          crew[j] = crew[j + 1];
          crew[j + 1] = temp;
        }
      }
    }
  }
  function getEVAReadyCrew(crew) {
    const eligible = [];
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].isEVAEligible) {
        eligible.push(crew[i]);
      }
    }
    sortByPriorityDescending(eligible);
    return eligible;
  }
  const EVAReadySquad = getEVAReadyCrew(updatedSquad);
  function chunkCrew (crew, size) {
    if (size < 1) {
      console.log("Chunk size must be >= 1");
      return;
    }
    const chunks = [];
    for (let i = 0; i < crew.length; i += size) {
      chunks.push(crew.slice(i, i + size));
    }
    return chunks;
  };
  const EVAChunks = chunkCrew(EVAReadySquad, 3);
  function printCrewSummary(crew) {
    const sorted = crew.slice();
    /* code */
    sortByPriorityDescending(sorted);
    /* code */
  }
  ```

---

## Paso 31

> > Utiliza un bucle `for` para registrar el `name` de cada astronauta del array `sorted`.

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  function swapCrewMembers(crew, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
      console.log("Invalid crew indices");
      return;
    }
    const updatedCrew = crew.slice();
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
    return updatedCrew;
  }
  const updatedSquad = swapCrewMembers(squad, 2, 5);
  function sortByPriorityDescending(crew) {
    for (let i = 0; i < crew.length - 1; i++) {
      for (let j = 0; j < crew.length - 1 - i; j++) {
        if (crew[j].priority < crew[j + 1].priority) {
          const temp = crew[j];
          crew[j] = crew[j + 1];
          crew[j + 1] = temp;
        }
      }
    }
  }
  function getEVAReadyCrew(crew) {
    const eligible = [];
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].isEVAEligible) {
        eligible.push(crew[i]);
      }
    }
    sortByPriorityDescending(eligible);
    return eligible;
  }
  const EVAReadySquad = getEVAReadyCrew(updatedSquad);
  function chunkCrew (crew, size) {
    if (size < 1) {
      console.log("Chunk size must be >= 1");
      return;
    }
    const chunks = [];
    for (let i = 0; i < crew.length; i += size) {
      chunks.push(crew.slice(i, i + size));
    }
    return chunks;
  };
  const EVAChunks = chunkCrew(EVAReadySquad, 3);
  function printCrewSummary(crew) {
    const sorted = crew.slice();
    sortByPriorityDescending(sorted);
    /* code */
    for (let i = 0; i < sorted.length; i++) {
      console.log(sorted[i].name);
    }
    /* code */
  }
  ```

---

## Paso 32

> > Para completar los preparativos de tu misión espacial, ¡llama a la función `printCrewSummary()` con tu array `updatedSquad`!

- **Code**

  ```js
  const squad = [];
  const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3
  };
  function addCrewMember(crew, astronaut) {
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].id === astronaut.id) {
        console.log("Duplicate ID: " + astronaut.id);
        return;
      }
    }
    crew.push(astronaut);
  };
  addCrewMember(squad, firstAstronaut);
  const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
  ]; 
  for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
  }
  function swapCrewMembers(crew, fromIndex, toIndex) {
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
      console.log("Invalid crew indices");
      return;
    }
    const updatedCrew = crew.slice();
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
    return updatedCrew;
  }
  const updatedSquad = swapCrewMembers(squad, 2, 5);
  function sortByPriorityDescending(crew) {
    for (let i = 0; i < crew.length - 1; i++) {
      for (let j = 0; j < crew.length - 1 - i; j++) {
        if (crew[j].priority < crew[j + 1].priority) {
          const temp = crew[j];
          crew[j] = crew[j + 1];
          crew[j + 1] = temp;
        }
      }
    }
  }
  function getEVAReadyCrew(crew) {
    const eligible = [];
    for (let i = 0; i < crew.length; i++) {
      if (crew[i].isEVAEligible) {
        eligible.push(crew[i]);
      }
    }
    sortByPriorityDescending(eligible);
    return eligible;
  }
  const EVAReadySquad = getEVAReadyCrew(updatedSquad);
  function chunkCrew (crew, size) {
    if (size < 1) {
      console.log("Chunk size must be >= 1");
      return;
    }
    const chunks = [];
    for (let i = 0; i < crew.length; i += size) {
      chunks.push(crew.slice(i, i + size));
    }
    return chunks;
  };
  const EVAChunks = chunkCrew(EVAReadySquad, 3);
  function printCrewSummary(crew) {
    const sorted = crew.slice();
    sortByPriorityDescending(sorted);
    for (let i = 0; i < sorted.length; i++) {
      console.log(sorted[i].name);
    }
  };
  /* code */
  printCrewSummary(updatedSquad);
  /* code */
  ```

---
