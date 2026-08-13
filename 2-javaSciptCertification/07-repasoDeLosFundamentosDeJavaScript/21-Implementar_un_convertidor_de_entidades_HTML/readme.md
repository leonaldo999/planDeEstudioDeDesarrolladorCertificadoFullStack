# Implementar un convertidor de entidades HTML

Este laboratorio trata sobre la conversión de caracteres especiales en una cadena por sus entidades HTML correspondientes.

---

## Historias de usuario

1. Debes tener una función `convertHTML` que acepte una cadena como argumento.

2. La función `convertHTML` debe devolver una nueva cadena al convertir los caracteres especiales de la cadena pasada como argumento a sus entidades HTML correspondientes.

   - `&` debe convertirse a `&amp;`.
   - `<` debe convertirse a `&lt;`.
   - `>` debe convertirse a `&gt;`.
   - `"` debe convertirse a `&quot;`.
   - `'` debe convertirse a `&apos;`.

---

## Solucíon

```js
function convertHTML(str) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  return str.replace(/[&<>"']/g, function(char) {
    return entities[char];
  });
}

console.log(convertHTML("Dolce & Gabbana"));
```
