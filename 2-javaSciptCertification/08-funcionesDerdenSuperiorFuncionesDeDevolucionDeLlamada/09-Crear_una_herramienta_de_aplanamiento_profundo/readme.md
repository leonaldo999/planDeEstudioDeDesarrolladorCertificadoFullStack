# Crear una herramienta de aplanamiento profundo

En este laboratorio, implementarás un algoritmo de aplanamiento de matrices.

Aplanar una matriz significa convertir una matriz anidada de cualquier profundidad en una sola matriz unidimensional. El proceso extrae todos los elementos en orden, desanidando únicamente las matrices. Los demás tipos se mantienen sin cambios.

Por ejemplo:

---

| Original | Aplanado |
| --- | --- |
| `[[1], [], [2, [3]]]` | `[1, 2, 3]` |
| `[1, {"foo": "bar"}, [2]]` | `[1, {"foo": "bar"}, 2]` |
| `["baz", [1, 2], {}]` | `["baz", 1, 2, {}]` |

---

## Historias de usuario

1. Debes tener una función llamada `steamrollArray`.

2. La función `steamrollArray` debe aceptar un argumento: un array anidado.

3. La función debe aplanar el array anidado, teniendo en cuenta los distintos niveles de anidamiento.

4. Tu solución no debe utilizar los métodos `Array.prototype.flat()` ni `Array.prototype.flatMap()`.

5. No se deben utilizar variables globales.

---

## Resultado

```js
// Crear una herramienta de aplanamiento profundo
function steamrollArray(arr) {
  const result = [];

  for (const element of arr) {
    if (Array.isArray(element)) {
      result.push(...steamrollArray(element));
    }else{
      result.push(element);
    }
  }

  return result;
}
```
