# Reconstruir una narrativa coherente a partir de una matriz de fragmentos de historia

En este laboratorio, reconstruirás una narrativa coherente a partir de una matriz dañada de fragmentos de historia.

Practicarás el uso de bucles al implementar algoritmos fundamentales para matrices desde cero.

Trabajarás con matrices de objetos de fragmentos de historia. Cada objeto de fragmento tiene las siguientes propiedades:

---

| Propiedad | Descripción | Valor de ejemplo |
| --- | --- | --- |
| `id` | Un número entero positivo que indica la posición del fragmento en la historia | `3` |
| `text` | El contenido real de la historia | `"and I use Arch btw.\""` |

---

En este laboratorio, se te proporciona un array ya prellenado llamado `shuffledFragments`.

---

## Historias de usuario

1. No debes modificar el array `shuffledFragments` que ya está prellenado.

2. Debes crear una función llamada `compactFragments` que tome un array de fragmentos y devuelva un nuevo array del que se hayan eliminado todos los elementos indefinidos. Si la función elimina algún elemento indefinido, debe registrar un mensaje en la consola. El mensaje debe comenzar con el prefijo `[COMPACTED]`.

3. Debes declarar una variable llamada `compactedShuffledFragments` y asignarle el resultado de llamar a `compactFragments` con el array `shuffledFragments`.

4. Debes crear una función llamada `sortFragments` que tome un array de fragmentos sin elementos `undefined` y devuelva un nuevo array ordenado por la propiedad `id` en orden ascendente, manteniendo los fragmentos que comparten el mismo `id` en su orden original. No debes usar el método `sort` integrado de JavaScript.

5. Debes declarar una variable llamada `sortedFragments` y asignarle el resultado de llamar a `sortFragments` con el array `compactedShuffledFragments`.

6. Debes crear una función llamada `dedupeFragments` que tome un array ordenado de fragmentos y devuelva un nuevo array del que se hayan eliminado los duplicados, conservando únicamente la primera aparición. Debes definir los duplicados como dos o más fragmentos que compartan el mismo `id`. Por cada `id` del que se elimine el duplicado, la función debe registrar un mensaje en la consola. El mensaje debe comenzar con el prefijo `[DEDUPED]`.

7. Debes declarar una variable llamada `dedupedFragments` y asignarle el resultado de llamar a la función `dedupeFragments` con el array `sortedFragments`.

8. Debes crear una función llamada `fillMissingFragments` que tome un array ordenado de fragmentos y devuelva un nuevo array en el que los fragmentos faltantes se hayan rellenado con objetos de marcador de posición. Debes definir los fragmentos faltantes como huecos en la secuencia entre el `id` más bajo y el más alto. Los objetos de marcador de posición deben tener el formato `{ id: missingId, text: "[...]" }`. Por cada marcador de posición agregado, la función debe registrar un mensaje en la consola. El mensaje debe comenzar con el prefijo `[FILLED]`.

9. Debes declarar una variable llamada `filledFragments` y asignarle el resultado de llamar a `fillMissingFragments` con el array `dedupedFragments`.

10. Debes crear una función llamada `assembleStory` que tome un array ordenado de fragmentos y devuelva una sola cadena que contenga todos los textos de los fragmentos, separados por saltos de línea.

11. Debes usar `assembleStory` con tus `filledFragments` para mostrar la historia completa en la consola.

12. Tus funciones `compactFragments`, `sortFragments`, `dedupeFragments`, `fillMissingFragments` y `assembleStory` no deben modificar el array con el que se invocan.

### Ejemplo

A continuación se muestra un ejemplo de un array que contiene fragmentos de una historia:

```js
const exampleArray = [
  { id: 3, text: "and I use Arch btw.\"" },
  ,
  { id: 1, text: "Naomi said:" },
  { id: 3, text: "and I use Arch btw.\"" },
];
```

Después de restaurar la historia a partir de exampleArray, se vería así:

```txt
Naomi said:
[...]
and I use Arch btw."
```

---

## Solución

```js
// Reconstruir una narrativa coherente a partir de una matriz de fragmentos de historia
const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments(fragments) {
  const compacted = [];
  let removed = 0;

  for (let i = 0; i < fragments.length; i++) {
    if (fragments[i] !== undefined) {
      compacted.push(fragments[i]);
    } else {
      removed++;
    }
  }

  if (removed > 0) {
    console.log(`[COMPACTED] Removed ${removed} undefined fragment(s).`);
  }

  return compacted;
}

const compactedShuffledFragments = compactFragments(shuffledFragments);

function sortFragments(fragments) {
  const sorted = [];

  // Inserción estable: los elementos con el mismo id conservan
  // su orden original.
  for (let i = 0; i < fragments.length; i++) {
    const fragment = fragments[i];
    let insertAt = sorted.length;

    for (let j = 0; j < sorted.length; j++) {
      if (fragment.id < sorted[j].id) {
        insertAt = j;
        break;
      }
    }

    sorted.splice(insertAt, 0, fragment);
  }

  return sorted;
}

const sortedFragments = sortFragments(compactedShuffledFragments);

function dedupeFragments(fragments) {
  const deduped = [];

  for (let i = 0; i < fragments.length; i++) {
    const fragment = fragments[i];

    if (
      deduped.length === 0 ||
      deduped[deduped.length - 1].id !== fragment.id
    ) {
      deduped.push(fragment);
    } else {
      console.log(`[DEDUPED] Removed duplicate fragment with id ${fragment.id}.`);
    }
  }

  return deduped;
}

const dedupedFragments = dedupeFragments(sortedFragments);

function fillMissingFragments(fragments) {
  if (fragments.length === 0) {
    return [];
  }

  const filled = [];

  for (let i = 0; i < fragments.length; i++) {
    const current = fragments[i];

    if (filled.length > 0) {
      const previousId = filled[filled.length - 1].id;

      for (let id = previousId + 1; id < current.id; id++) {
        filled.push({
          id: id,
          text: "[...]"
        });

        console.log(`[FILLED] Added missing fragment with id ${id}.`);
      }
    }

    filled.push({
      id: current.id,
      text: current.text
    });
  }

  return filled;
}

const filledFragments = fillMissingFragments(dedupedFragments);

function assembleStory(fragments) {
  const texts = [];

  for (let i = 0; i < fragments.length; i++) {
    texts.push(fragments[i].text);
  }

  return texts.join("\n");
}

console.log(assembleStory(filledFragments));
```
