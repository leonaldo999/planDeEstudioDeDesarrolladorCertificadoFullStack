# Crear una función para repetir un string

En este laboratorio, crearás una función que repita una string dada un número específico de veces. Para este laboratorio, no utilices el método integrado `.repeat()`.

---

## Historias de usuario

1. Debes crear una función llamada `repeatStringNumTimes` que tome dos parámetros: una *string* y un *número*.

2. La función debe devolver el string repetido el número de veces especificado.

3. Si el número es menor o igual a cero, la función debe devolver una string vacía.

---

```js
function repeatStringNumTimes(str, num) {
  let result = ""; // acumulador

  // si num es menor o igual a 0, devolvemos vacío
  if (num <= 0) {
    return "";
  }

  // repetimos el string num veces
  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
}

console.log(repeatStringNumTimes("abc", 3)); 
// → "abcabcabc"

console.log(repeatStringNumTimes("hello", 1)); 
// → "hello"

console.log(repeatStringNumTimes("test", 0)); 
// → ""

```
