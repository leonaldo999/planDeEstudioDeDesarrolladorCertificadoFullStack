# Creación de una herramienta de corrección ortográfica

En este laboratorio, crearás una herramienta de corrección ortográfica que analiza conjuntos de palabras en busca de palíndromos y frases repetidas.

Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás. Por ejemplo, `"racecar"` y `"level"` son palíndromos, pero `"hello"` no lo es.

Una frase es una secuencia de palabras consecutivas. Por ejemplo, en `["the", "cat", "sat", "the", "cat"]`, la frase `"the cat"` (una secuencia de 2 palabras) aparece en las posiciones 0 y 3.

---

## Historias de usuario

1. Debes definir una función llamada `isPalindrome` que tome un string `word` como argumento. Debe devolver `true` si la palabra se lee igual hacia adelante y hacia atrás (sin distinguir entre mayúsculas y minúsculas), y `false` en caso contrario.

2. Debes definir una función llamada `findPalindromeBreaks` que tome una matriz `words` como argumento. Debe devolver una matriz con los índices de las palabras que no son palíndromos. Debe devolver una matriz vacía si la entrada está vacía.

3. Debes definir una función llamada `findRepeatedPhrases` que tome una matriz `words` y un número de `phraseLength` como argumentos. Debe devolver una matriz de todos los índices iniciales donde una secuencia de `phraseLength` `words` consecutivas aparezca más de una vez en la matriz, incluyendo el índice de la primera aparición. Debe devolver una matriz vacía si la `phraseLength` es mayor o igual a la longitud de la matriz `words`. También deben contarse las secuencias superpuestas.

4. Debes definir una función llamada `analyzeTexts` que tome como argumentos una matriz `texts` y un número de `phraseLength`. Debe procesar cada elemento de `texts` (cada uno de ellos una matriz de palabras) y devolver una matriz de objetos, cada uno con las propiedades `repeatedPhrases` y ``. Debe devolver una matriz vacía si `texts` están vacíos.

---

```js
/* Creación de una herramienta de corrección ortográfica */

function isPalindrome(word) {
  const lower = word.toLowerCase();
  const reversed = lower.split("").reverse().join("");
  return lower === reversed;
}


function findPalindromeBreaks(words) {
  const breaks = [];
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }
  return breaks;
}

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) return [];

  const seen = {};
  const repeatedIndices = [];

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");
    if (!seen[phrase]) {
      seen[phrase] = [i];
    } else {
      seen[phrase].push(i);
    }
  }

  for (const phrase in seen) {
    if (seen[phrase].length > 1) {
      repeatedIndices.push(...seen[phrase]);
    }
  }

  return repeatedIndices;
}

function analyzeTexts(texts, phraseLength) {
  if (texts.length === 0) return [];

  const results = [];

  for (const words of texts) {
    results.push({
      repeatedPhrases: findRepeatedPhrases(words, phraseLength),
      palindromeBreaks: findPalindromeBreaks(words)
    });
  }

  return results;
}

const texts = [
  ["racecar", "level", "hello", "world"],
  ["the", "cat", "sat", "the", "cat"]
];

console.log(analyzeTexts(texts, 2));
```
