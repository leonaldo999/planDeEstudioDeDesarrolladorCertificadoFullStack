# Implementar una unión ordenada única

En esta lección, aprenderás a implementar una función que combine múltiples arrays en uno solo, asegurando que los valores sean únicos y manteniendo el orden en que aparecen por primera vez.

---

## Historias de usuario

1. Debes tener una función llamada `uniteUnique`.

2. La función `uniteUnique` debe aceptar dos o más matrices como argumentos.

3. La función debe devolver un nuevo array que contenga los valores únicos de los arrays de los argumentos, en el orden en que aparecen por primera vez en los argumentos. Por ejemplo, una entrada como `[1, 2, 4]`, `[2, 3, 5]` tendría como salida `[1, 2, 4, 3, 5]`.

---

## Solucíon

```js
// Implementar una unión ordenada única
function uniteUnique(...arrays) {
  const result = [];

  for (const array of arrays) {
    for (const value of array) {
      if (!result.includes(value)) {
        result.push(value);
      }
    }
  }

  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
```
