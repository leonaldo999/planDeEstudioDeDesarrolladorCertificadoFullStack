# Implementa el algoritmo de mutaciones

El algoritmo de mutaciones se utiliza para determinar si un string de texto contiene todas las letras de otro string de texto. En este laboratorio, implementarás el algoritmo de mutaciones creando una función llamada `mutation` que tome un array como argumento y devuelva `true` o `false` según corresponda.

## Historias de usuario

1. Crea una función llamada `mutation` que tome un array como argumento.

2. `mutation` debe devolver `true` si el string del primer elemento del array contiene todas las letras del string del segundo elemento del array, y `false` en caso contrario. Por ejemplo:
  
    - `mutation(["hello", "Hello"])`, debería devolver `true` porque todas las letras de la segundio string están presentes en el primero, sin distinguir entre mayúsculas y minúsculas.
  
    - `mutation(["hello", "hey"])` debería devolver `false` porque el string `hello` no contiene una `y`.
  
    - `mutation(["Alien", "line"])`, debería devolver `true` porque todas las letras de `line` están presentes en `Alien`.

---

```js
function mutation(arr) {
  // Convertir ambas cadenas a minúsculas para ignorar mayúsculas y minúsculas
  const str1 = arr[0].toLowerCase();
  const str2 = arr[1].toLowerCase();

  // Recorrer cada letra de la segunda cadena
  for (let i = 0; i < str2.length; i++) {
    // Verificar si la letra actual de str2 está presente en str1
    if (str1.indexOf(str2[i]) === -1) {
      // Si no se encuentra la letra, devolver false
      return false;
    }
  }

  // Si todas las letras de str2 están presentes en str1, devolver true
  return true;
}
```

```js
// Pruebas
console.log(mutation(["hello", "Hello"])); // true
console.log(mutation(["hello", "hey"]));   // false
console.log(mutation(["Alien", "line"]));  // true
```
