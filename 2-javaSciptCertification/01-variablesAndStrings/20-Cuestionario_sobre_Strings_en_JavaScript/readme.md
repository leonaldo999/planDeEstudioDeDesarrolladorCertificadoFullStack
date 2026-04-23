# Cuestionario sobre Strings en JavaScript

Para aprobar el cuestionario, debes responder correctamente al menos 18 de las 20 preguntas siguientes.

1. **¿Cuál es el valor de retorno del método `includes()`?**

   - [ ] a) Si el subString se encuentra dentro de el String, el método devuelve el String. De lo contrario, devuelve `null`.
   - [x] b) Si el subString se encuentra dentro de el String, el método devuelve `true`. De lo contrario, devuelve `false`. // ❎
   - [ ] c) Si se encuentra el subString dentro de el String, el método devuelve `true`. De lo contrario, devuelve una String vacía.
   - [ ] d) Si se encuentra el subString dentro de el String, el método devuelve el String. De lo contrario, devuelve `undefined`.

2. **¿Qué opción muestra la interpolación de Strings?**

   - [ ] a) `Hello, {user}!`
   - [ ] b) `"Hello, $user!"`
   - [ ] c) `"Hello, " + user + "!"`
   - [x] d) ``Hello, ${user}!`` // ❎

3. **¿Cuál de las siguientes opciones es el carácter de salto de línea?**
  
   - [ ] a) `\new`
   - [ ] b) `\line`
   - [x] c) `\n` // ❎
   - [ ] d) `\newline`

4. **¿Cuál de las siguientes afirmaciones es correcta con respecto a los strings?**
  
   - [ ] a) Los strings son tipos de datos no primitivos.
   - [x] b) Los strings son inmutables. // ❎
   - [ ] c) Los strings son mutables y se pueden modificar después de crearlas.
   - [ ] d) Los strings solo se pueden crear utilizando comillas simples.

5. **¿Qué significa ASCII?**

   - [ ] a) Código estándar automático para información interna
   - [ ] b) Código sistemático avanzado para intercambio interno
   - [x] c) Código estándar estadounidense para intercambio de información // ❎
   - [ ] d) Código estándar estadounidense para información en Internet

6. **¿Cuál de los siguientes métodos extrae una parte de un String y devuelve un nuevo String?**
  
   - [x] a) `slice()` // ❎
   - [ ] b) `trim()`
   - [ ] c) `prompt()`
   - [ ] d) `indexOf()`

7. **¿Cuál es la finalidad del método `prompt()`?**
  
   - [ ] a) Muestra un cuadro de confirmación con un mensaje.
   - [ ] b) Muestra un cuadro de alerta con un mensaje.
   - [x] c) Muestra un cuadro de diálogo que espera la entrada del usuario. // ❎
   - [ ] d) Muestra un mensaje en la consola.

8. **¿Cuál de las siguientes opciones es la forma correcta de acceder al tercer carácter de un string?**

   - [x] a)  // ❎
          ```js
          const developer = "Jessica";
          developer[2];
          ```
   - [ ] b)
          ```js
          const developer = "Jessica";
          developer[3];
          ```
   - [ ] c)
          ```js
          const developer = "Jessica";
          developer[0];
          ```
   - [ ] d)
          ```js
          const developer = "Jessica";
          developer[-1];
          ```

9. **¿Cómo se puede obtener el valor ASCII del primer carácter del string `"hello"`?**

   - [ ] a) `"hello".codeAt(0)`
   - [ ] b) `"hello".charCode(0)`
   - [x] c) `"hello".charCodeAt(0)` // ❎
   - [ ] d) `"hello".getCharIndex(0)`

10. **¿Qué método se puede utilizar para obtener el carácter correspondiente a un valor ASCII?**

    - [ ] a) `toCode()`
    - [ ] b) `toChar()`
    - [x] c) `fromCharCode()` // ❎
    - [ ] d) `toASCII()`

11. **¿Cuál de los siguientes ejemplos de `indexOf` mostrará `-1` en la consola?**

    - [ ] a)
          ```js
          const organization = "freeCodeCamp";
          console.log(organization.indexOf("e"));
          ```
    - [ ] b)
          ```js
          const organization = "freeCodeCamp";
          console.log(organization.indexOf("C"));
          ```
    - [ ] c)
          ```js
          const organization = "freeCodeCamp";
          console.log(organization.indexOf("f"));
          ```
    - [x] d)  // ❎
          ```js
          const organization = "freeCodeCamp";
          console.log(organization.indexOf("c"));
          ```

12. **¿Cómo se puede comprobar si el string `"JavaScript"` contiene `"Script"`?**

    - [ ] a) `"JavaScript".exists("Script")`
    - [ ] b) `"JavaScript".has("Script")`
    - [x] c) `"JavaScript".includes("Script")` // ❎
    - [ ] d) `"JavaScript".contains("Script")`

13. **¿Cuál de las siguientes opciones extrae el subString `"Script"` del String `"JavaScript"`?**

    - [ ] a) `"JavaScript".cut(5)`
    - [x] b) `"JavaScript".slice(4)` // ❎
    - [ ] c) `"JavaScript".extract(4)`
    - [ ] d) `"JavaScript".find(5)`

14. **¿Cómo se convierte el string `"JavaScript"` a mayúsculas?**

    - [ ] a) `"JavaScript".toUpper()`
    - [ ] b) `"JavaScript".convertUpper()`
    - [x] c) `"JavaScript".toUpperCase()` // ❎
    - [ ] d) `"JavaScript".upper()`

15. **¿Cómo se convierte el string `"JavaScript"` a minúsculas?**

    - [ ] a) `"JavaScript".convertLower()`
    - [x] b) `"JavaScript".toLowerCase()` // ❎
    - [ ] c) `"JavaScript".lower()`
    - [ ] d) `"JavaScript".toLower()`

16. **¿Cuál de las siguientes opciones sustituirá `"dogs"` por `"cats"` en la frase `"I love dogs"`?**

    - [ ] a) `"I love dogs".slice("dogs", "cats")`
    - [ ] b) `"I love dogs".replaceWith("dogs", "cats")`
    - [ ] c) `"I love dogs".find("dogs", "cats")`
    - [x] d) `"I love dogs".replace("dogs", "cats")` // ❎

17. **¿Qué método se utiliza para repetir un string un número determinado de veces?**

    - [ ] a) `repeatNumber()`
    - [ ] b) `repeatTimes()`
    - [x] c) `repeat()` // ❎
    - [ ] d) `times()`

18. **¿Qué resultado devuelve el siguiente código: `"abc".repeat(3)`?**

    - [ ] a) Dará un error.
    - [ ] b) `"abcabc"`
    - [x] c) `"abcabcabc"` // ❎
    - [ ] d) `"abcabcabcabc"`

19. **¿Qué método elimina los espacios en blanco al principio y al final de un string?**

    - [ ] a) `trimWhitespace()`
    - [ ] b) `strip()`
    - [x] c) `trim()` // ❎
    - [ ] d) `removeWhitespace()`

20. **¿Cuál de las siguientes opciones es la sintaxis correcta para escapar las comillas?**

    - [ ] a)
          ```js
          "She said, ."Hello!.""
          ```
    - [ ] b)
          ```js
          "She said, ?"Hello!?""
          ```
    - [x] c) // ❎
          ```js
          She said, \"Hello!\""
          ```
    - [ ] d)
          ```js
          "She said, //"Hello!//""
          ```
