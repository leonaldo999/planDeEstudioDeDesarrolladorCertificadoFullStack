# Crea una función de diferencia simétrica

Compara dos matrices y devuelve una nueva matriz con los elementos que solo se encuentren en una de las dos matrices dadas, pero no en ambas. En otras palabras, devuelve la diferencia simétrica de las dos matrices.

Ejemplo:

Matriz A: `["diamante", "palo", "manzana"]`

Matriz B: `["palo", "esmeralda", "pan"]`

Resultado: `["diamante", "manzana", "esmeralda", "pan"]`

---

## Historias de usuario

1. Tu función `diffArray` debe devolver un array.

2. Tu función debe tomar dos argumentos, ambos de tipo array.

3. Tu función debe utilizar el método `filter`.

4. Tu función debe devolver la diferencia simétrica de los dos arreglos.

5. Tu función debe devolver un arreglo vacío si no hay diferencia simétrica.

---

## Solución

```js
// Crea una función de diferencia simétrica
function diffArray(arr1, arr2) {

  const inArr1 = arr1.filter((item) => !arr2.includes(item));
  const inArr2 = arr2.filter((item) => !arr1.includes(item));
  const arrResult = inArr1.concat(inArr2);
  return arrResult;
}
```
