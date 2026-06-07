# Construye un analizador de oraciones

En este taller, crearás un analizador de oraciones que, al recibir una oración, calculará el número de palabras, vocales, consonantes y signos de puntuación.

---

## Paso 1

>> Para empezar, crea una función llamada `getVowelCount` con un parámetro llamado `sentence`. Tu función debe devolver el número total de vocales de una oración.

- **Code**

  ```js
  function getVowelCount(sentence) {
    const vowels = 'aeiou';
    let count = 0;
    
    for (const char of sentence.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  ```

---

## Paso 2

Ahora es el momento de probar tu función `getVowelCount`.

> > Crea una variable `vowelCount` y asígnale el resultado de llamar a la función `getVowelCount` con el argumento `"Apples are tasty fruits"`.
>
> > Después de eso, registra lo siguiente en la consola: `"Vowel Count: [vowel count goes here]"`. Reemplaza `[vowel count goes here]` por el nombre real de la variable. Puedes optar por usar cadenas de plantilla o concatenación de cadenas con el operador `+` aquí.

- **Code**

  ```js
  function getVowelCount(sentence) {
    const vowels = 'aeiou';
    let count = 0;
    
    for (const char of sentence.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }

  /* code */
  const vowelCount = getVowelCount("Apples are tasty fruits");
  console.log("Vowel Count: " + vowelCount);
  /* code */
  ```

---

## Paso 3

> > Es hora de contar las consonantes. Crea una función `getConsonantCount` con un parámetro `sentence`.
>
> > Dentro de la función, utiliza un bucle para contar el número de consonantes que hay en la `sentence` que se pasará a la función cuando se la llame. Una consonante es cualquier letra que no sea uno de los siguientes caracteres: `aeiou`.
>
> > Tu función `getConsonantCount` debe devolver un número.

- **Code**

  ```js
  function getVowelCount(sentence) {
    const vowels = 'aeiou';
    let count = 0;
    
    for (const char of sentence.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }

  const vowelCount = getVowelCount("Apples are tasty fruits");
  console.log("Vowel Count: " + vowelCount);
  
  /* code */
  function getConsonantCount(sentence) {
    const consonants = "bcdfghjklmnpqrstvwxyz";
    let count = 0;
  
    for (const char of sentence.toLowerCase()) {
      if (consonants.includes(char)) {
        count++;
      }
    }
    return count;
  }
  /* code */
  ```

---

## Paso 4

Ahora es el momento de probar tu función `getConsonantCount`.

> > Crea una variable `consonantCount` y asígnale el resultado de llamar a la función `getConsonantCount` con el argumento `"Coding is fun"`.
>
> > Después de eso, registra lo siguiente en la consola: `"Consonant Count: [Consonant count goes here]"`. Reemplaza `[Consonant count goes here]` por el nombre real de la variable. Aquí puedes optar por usar cadenas de plantilla o concatenación de cadenas con el operador `+`.

- **Code**

  ```js
  function getVowelCount(sentence) {
    const vowels = 'aeiou';
    let count = 0;
    
    for (const char of sentence.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }

  const vowelCount = getVowelCount("Apples are tasty fruits");
  console.log("Vowel Count: " + vowelCount);
  
  function getConsonantCount(sentence) {
    const consonants = "bcdfghjklmnpqrstvwxyz";
    let count = 0;
  
    for (const char of sentence.toLowerCase()) {
      if (consonants.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  /* code */
  const consonantCount = getConsonantCount("Coding is fun");
  console.log("Consonant Count: " + consonantCount);
  /* code */
  ```

---

## Paso 5

Ahora debes contar el número de signos de puntuación.

> > Crea una función `getPunctuationCount` con un parámetro `sentence`.
>
> > Dentro de la función, crea un bucle para contar el número de caracteres de puntuaciónes en la `sentence` que se pasará a la función cuando se la llame. Para nuestros propósitos, un carácter de puntuación es cualquier carácter que no sea un espacio (`" "`) o una letra.
>
> > Tu función `getPunctuationCount` debe devolver un número.

- **Code**

  ```js
  function getVowelCount(sentence) {
    const vowels = 'aeiou';
    let count = 0;
    
    for (const char of sentence.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }

  const vowelCount = getVowelCount("Apples are tasty fruits");
  console.log("Vowel Count: " + vowelCount);
  
  function getConsonantCount(sentence) {
    const consonants = "bcdfghjklmnpqrstvwxyz";
    let count = 0;
  
    for (const char of sentence.toLowerCase()) {
      if (consonants.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  const consonantCount = getConsonantCount("Coding is fun");
  console.log("Consonant Count: " + consonantCount);

  /* code */
  function getPunctuationCount(sentence) {
    const punctuations = ".,!?;:-()[]{}\"'–";
    let count = 0;
  
    for (const char of sentence) {
      if (punctuations.includes(char)) {
        count++;
      }
    }
    return count;
  }
  /* code */
  ```

---

## Paso 6

Ahora es el momento de probar tu función `getPunctuationCount`.

> > Crea una variable `punctuationCount` y asígnale el resultado de llamar a la función `getPunctuationCount` con el argumento `"WHAT?!?!?!?!?"`.
>
> > Después de eso, registra lo siguiente en la consola: `"Punctuation Count: [Punctuation count goes here]"`. Reemplaza `[Punctuation count goes here]` por el nombre real de la variable. Aquí puedes optar por usar cadenas de plantilla o concatenación de cadenas con el operador `+`.

- **Code**

  ```js
  function getVowelCount(sentence) {
    const vowels = 'aeiou';
    let count = 0;
    
    for (const char of sentence.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }

  const vowelCount = getVowelCount("Apples are tasty fruits");
  console.log("Vowel Count: " + vowelCount);
  
  function getConsonantCount(sentence) {
    const consonants = "bcdfghjklmnpqrstvwxyz";
    let count = 0;
  
    for (const char of sentence.toLowerCase()) {
      if (consonants.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  const consonantCount = getConsonantCount("Coding is fun");
  console.log("Consonant Count: " + consonantCount);

  function getPunctuationCount(sentence) {
    const punctuations = ".,!?;:-()[]{}\"'–";
    let count = 0;
  
    for (const char of sentence) {
      if (punctuations.includes(char)) {
        count++;
      }
    }
    return count;
  }

  /* code */
  const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
  console.log(`Punctuation Count: ${punctuationCount}`);
  /* code */
  ```

---

## Paso 7

> > Por último, cuenta el número de palabras creando una función `getWordCount` con un parámetro de tipo `sentence`. La función debe devolver el número total de palabras de la oración que se le pase cuando se la llame.

- **Code**

  ```js
  function getVowelCount(sentence) {
    const vowels = 'aeiou';
    let count = 0;
    
    for (const char of sentence.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }

  const vowelCount = getVowelCount("Apples are tasty fruits");
  console.log("Vowel Count: " + vowelCount);
  
  function getConsonantCount(sentence) {
    const consonants = "bcdfghjklmnpqrstvwxyz";
    let count = 0;
  
    for (const char of sentence.toLowerCase()) {
      if (consonants.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  const consonantCount = getConsonantCount("Coding is fun");
  console.log("Consonant Count: " + consonantCount);

  function getPunctuationCount(sentence) {
    const punctuations = ".,!?;:-()[]{}\"'–";
    let count = 0;
  
    for (const char of sentence) {
      if (punctuations.includes(char)) {
        count++;
      }
    }
    return count;
  }

  const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
  console.log(`Punctuation Count: ${punctuationCount}`);

  /* code */
  function getWordCount(sentence) {
    if (sentence.trim() === '') {
      return 0;
    }
    
    const words = sentence.trim().split(' ');
    let count = 0;
  
    for (const word of words) {
      if (word !== '') {
        count++;
      }
    }
  
    return count;
  }
  /* code */
  ```

---

## Paso 8

> > Prueba tu función `getWordCount` creando una variable `wordCount` que contenga el resultado de llamar a la función `getWordCount` con la oración `"I love freeCodeCamp"`.
>
> > Después, registra lo siguiente en la consola: `"Word Count: [Word count goes here]"`. Reemplaza `[Word count goes here]` por el nombre real de la variable. Aquí puedes optar por usar cadenas de plantilla o concatenar cadenas con el operador `+`.

- **Code**

  ```js
  function getVowelCount(sentence) {
    const vowels = 'aeiou';
    let count = 0;
    
    for (const char of sentence.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }

  const vowelCount = getVowelCount("Apples are tasty fruits");
  console.log("Vowel Count: " + vowelCount);
  
  function getConsonantCount(sentence) {
    const consonants = "bcdfghjklmnpqrstvwxyz";
    let count = 0;
  
    for (const char of sentence.toLowerCase()) {
      if (consonants.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  const consonantCount = getConsonantCount("Coding is fun");
  console.log("Consonant Count: " + consonantCount);

  function getPunctuationCount(sentence) {
    const punctuations = ".,!?;:-()[]{}\"'–";
    let count = 0;
  
    for (const char of sentence) {
      if (punctuations.includes(char)) {
        count++;
      }
    }
    return count;
  }

  const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
  console.log(`Punctuation Count: ${punctuationCount}`);

  function getWordCount(sentence) {
    if (sentence.trim() === '') {
      return 0;
    }
    
    const words = sentence.trim().split(' ');
    let count = 0;
  
    for (const word of words) {
      if (word !== '') {
        count++;
      }
    }
  
    return count;
  }
  
  /* code */
  const wordCount = getWordCount("I love freeCodeCamp");
  console.log(`Word Count: ${wordCount}`);
  /* code */
  ```

---

**¡Con esto, tu proyecto de analizador de oraciones está listo!**
