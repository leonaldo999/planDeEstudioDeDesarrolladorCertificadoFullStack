# Crea una aplicación para encontrar la palabra más larga

En este laboratorio, crearás una función que devuelva la longitud de la palabra más larga de la oración proporcionada.

Por ejemplo, en la oración `"The quick brown fox jumped over the lazy dog"`, que tiene  La palabra más larga es `" jumped"`, con una longitud de 6.

---

## Casos de uso

- Debes crear una función llamada `findLongestWordLength` que tome una cadena como argumento.

- La función debe devolver la longitud de la palabra más larga de la cadena.

---

```js
function findLongestWordLength(sentence) {
  let maxLength = 0;      // Longitud máxima encontrada
  let currentLength = 0;  // Longitud de la palabra actual
  
  // Recorrer cada carácter de la oración
  for (let i = 0; i < sentence.length; i++) {
    
    // Si el carácter no es un espacio, es parte de una palabra
    if (sentence[i] !== ' ') {
      currentLength = currentLength + 1;
    } else {
      // Si trouvé un espacio, verifico si la palabra terminó
      if (currentLength > maxLength) {
        maxLength = currentLength;
      }
      currentLength = 0;  // Reiniciar para la siguiente palabra
    }
  }
  
  // Verificar la última palabra (por si no termina con espacio)
  if (currentLength > maxLength) {
    maxLength = currentLength;
  }
  
  return maxLength;
}

// Ejemplos de uso:
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); 
// Resultado: 6

console.log(findLongestWordLength("Hello World")); 
// Resultado: 5

console.log(findLongestWordLength("A")); 
// Resultado: 1
```
