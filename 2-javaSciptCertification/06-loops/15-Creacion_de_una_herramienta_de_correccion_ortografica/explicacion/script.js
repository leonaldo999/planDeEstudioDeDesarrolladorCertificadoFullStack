// Función que verifica si una palabra es palíndromo
function isPalindrome(word) {
  const lower = word.toLowerCase();
  const reversed = lower.split("").reverse().join("");
  return lower === reversed;
}

// Encuentra índices de palabras que NO son palíndromos
function findPalindromeBreaks(words) {
  const breaks = [];
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }
  return breaks;
}

// Encuentra índices donde frases de longitud phraseLength se repiten en words
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

// Analiza múltiples textos y devuelve resultados con frases repetidas e índices de palabras no palíndromas
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

// Ejemplo de textos para analizar
const texts = [
  ["racecar", "level", "hello", "world"],
  ["the", "cat", "sat", "the", "cat"]
];

// Al hacer clic, ejecuta el análisis y muestra resultados
document.getElementById("analyzeBtn").addEventListener("click", () => {
  const phraseLength = 2; // Puedes cambiar esto para analizar frases de distinta longitud
  const results = analyzeTexts(texts, phraseLength);
  document.getElementById("output").textContent = JSON.stringify(results, null, 2);
});
