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
