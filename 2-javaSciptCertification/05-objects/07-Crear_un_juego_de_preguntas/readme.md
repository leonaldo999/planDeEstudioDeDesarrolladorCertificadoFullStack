# Crear un juego de preguntas

Objetivo: Cumple con las historias de usuario que se indican a continuación y haz que todas las pruebas pasen para completar el laboratorio.

---

## Historias de usuario

- Debes crear un array llamada `questions`.

- El array `questions` debe contener al menos cinco objetos, cada uno con las claves `category`, `question`, `choices` y `answer`.

- La clave `category` debe tener el valor de un string que represente una categoría de pregunta.

- La clave `question` debe tener el valor de un string que represente una pregunta.

- La clave `choices` debe tener el valor de un array que contenga tres strings, que son respuestas alternativas a la pregunta.

- La clave `answer` debe tener el valor de un string que represente la respuesta correcta a la pregunta. Además, el valor de `answer` debe incluirse en el array `choices`.

- Debes tener una función llamada `getRandomQuestion` que tome un array de preguntas como parámetro y devuelva un objeto de pregunta aleatoria del array.

- Debes tener una función llamada `getRandomComputerChoice` que tome el array de opciones disponibles como parámetro y devuelva una respuesta aleatoria a la pregunta seleccionada.

- Debes tener una función llamada `getResults` que tome el objeto de pregunta como primer parámetro y la elección de la computadora como segundo parámetro. La función debe devolver `The computer's choice is correct!` si la respuesta es correcta. De lo contrario, devuelve `The computer's choice is wrong. The correct answer is: <correct-answer>`, donde `<correct-answer>` es el valor de la respuesta correcta a la pregunta elegida.
