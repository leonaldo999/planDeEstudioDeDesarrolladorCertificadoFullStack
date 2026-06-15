# Crea un detector de letras faltantes

En esta sección, crearás una función que detecte qué letra falta en un rango de letras. Por ejemplo, si se le da el string `"abce"`, la función debería devolver `"d"` porque es la letra que falta en el rango alfabético.

## Historias de usuario

1. Debes tener una función llamada `fearNotLetter`.

2. La función `fearNotLetter` debe aceptar un argumento: un string que represente un rango de letras en orden alfabético en el que puede faltar una letra.

3. La función debe encontrar la letra que falta en el rango de letras pasado y devolverla.

4. Si todas las letras están presentes en el rango, la función debe devolver `undefined`.

---

```js
function fearNotLetter(str) {
  for (let i = 1; i < str.length; i++) {
    let prevCode = str.charCodeAt(i - 1);
    let currentCode = str.charCodeAt(i);

    // Si la diferencia no es 1, falta una letra
    if (currentCode - prevCode > 1) {
      return String.fromCharCode(prevCode + 1);
    }
  }
  return undefined;
}

// Pruebas
console.log(fearNotLetter("abce")); // "d"
console.log(fearNotLetter("abcdefghjklmno")); // "i"
console.log(fearNotLetter("stvwx")); // "u"
console.log(fearNotLetter("bcdf")); // "e"
console.log(fearNotLetter("abc")); // undefined
```
