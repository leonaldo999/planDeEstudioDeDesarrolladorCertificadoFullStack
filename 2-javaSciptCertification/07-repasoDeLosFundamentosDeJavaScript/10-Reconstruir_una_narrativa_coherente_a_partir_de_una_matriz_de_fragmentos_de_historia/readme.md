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
```
