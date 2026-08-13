# Implementa una calculadora de MCM basada en un rango

En este laboratorio, crearás una función que tome un array de dos números y devuelva el mínimo común múltiplo (MCM) de esos dos números y de todos los números que se encuentran entre ellos.

## Historias de usuario

1. Debes tener una función `smallestCommons` que acepte un array de dos números como argumento.

2. La función `smallestCommons` debe devolver el mínimo común múltiplo que sea divisible sin resto por ambos números y por todos los números secuenciales en el rango entre ellos.

3. La función debe manejar entradas en las que los dos números no estén en orden numérico.

---

## Resultado

```js
// Implementa una calculadora de MCM basada en un rango
function smallestCommons(arr) {
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);

  const rango = [];
  for (let i = min; i <= max; i++) {
    rango.push(i);
  }

  let mcm = max;
  while (!rango.every(num => mcm % num === 0)) {
    mcm += max;
  }
  
  return mcm;
}

```
