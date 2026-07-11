# Crea un inversor de cadenas

En este laboratorio, crearás un inversor de cadenas sencillo que invierta el orden de los caracteres de una cadena dada.

Por ejemplo, `"hello"` debería convertirse en `"olleh"`.

---

## Historias de usuario

1. Debes crear una función llamada `reverseString` que tome una cadena como argumento.

2. La función debe devolver la cadena invertida.

---

```js
function reverseString(str) {
  const letras = str.split("");
  const ivertido = letras.reverse();
  const resultado = invertido.join("");

  return resultado;
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("abc")); // "cba"
```
