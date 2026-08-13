# Implementar un filtro de objetos coincidentes

En este laboratorio, crearás una función que filtre un array de objetos y devuelva únicamente aquellos objetos que coincidan con todos los pares clave-valor de un objeto de origen dado.

---

## Historias de usuario

1. Debes tener una función `whatIsInAName` que acepte dos argumentos: una matriz de objetos y un objeto de origen.

2. La función `whatIsInAName` debe devolver una nueva matriz que contenga únicamente los objetos de la colección que tengan todos los pares clave-valor presentes en el objeto de origen.

3. Si ningún objeto coincide con todos los pares clave-valor del objeto de origen, la función debe devolver una matriz vacía. Por ejemplo:

---

```js
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
// should return [{ first: "Tybalt", last: "Capulet" }]
```

---

## Resultado

```js
// Implementar un filtro de objetos coincidentes
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);

function whatIsInAName(colection, source) {
  const keys = Object.keys(source);

  return colection.filter(obj => 
    keys.every(key => obj[key] === source[key])
  )
}
```
