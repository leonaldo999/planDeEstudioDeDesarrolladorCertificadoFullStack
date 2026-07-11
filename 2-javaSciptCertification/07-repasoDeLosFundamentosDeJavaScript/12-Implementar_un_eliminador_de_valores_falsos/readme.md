# Implementar un eliminador de valores falsos

En este laboratorio crearás una función que elimine todos los valores falsos de un array.

Los valores falsos en JavaScript son `false`, `null`, `0`, `""`, `undefined` y `NaN`.

---

## Historias de usuario

1. Debes tener una función `bouncer` que tome un array como argumento.

2. La función `bouncer` debe devolver un nuevo array que contenga los mismos elementos que el array pasado como argumento, pero sin los elementos falsy.

3. La función `bouncer` no debe modificar el array pasado como argumento.
Sugerencia: Intenta convertir cada valor a un valor booleano.

---

### Solucion

```js
/*
Los valores que JavaScript considera falsos:

false
null
0
""
undefined
NaN
*/
function bouncer(arr) {
  return arr.filter(function(valor) {
    return Boolean(valor);
  });
}


console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));
console.log(bouncer);
console.log(bouncer([]));

```
