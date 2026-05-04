# Crear un asistente para el conteo de cartas

*En el juego de casino Blackjack, un jugador puede determinar si tiene ventaja sobre la casa en la siguiente mano llevando la cuenta del número relativo de cartas altas y bajas que quedan en la baraja. A esto se le llama "conteo de cartas".*

*Que queden más cartas altas en la baraja favorece al jugador. Cuando el conteo es positivo, el jugador debe apostar fuerte. Cuando el conteo es cero o negativo, el jugador debe apostar poco.*

## Historias de usuario

- Debes usar `let` para declarar una variable global llamada `count` y asignarle el valor `0`.

- Debes tener una función llamada `cardCounter`.

- La función `cardCounter` debe recibir un parámetro card, que puede ser un número o una cadena.

  - Para valores entre `2` y `10`, el parámetro `card` será un número.
  - Para todos los demás valores, el parámetro `card` será un string.

- La función `cardCounter` debe modificar la variable global `count` según ciertos criterios.

- La variable global `count` debe incrementarse en `1` para las cartas `2`, `3`, `4`, `5` o `6`.

- La variable global `count` debe permanecer sin cambios para las cartas `7`, `8` y `9`.

- La variable global `count` debe disminuirse en `1` para las cartas `10`, `"J"`, `"Q"`, `"K"` y `"A"`.

- La función `cardCounter` debe devolver un string con el recuento actual y el string `Bet` si el recuento es positivo.

- La función `cardCounter` debe devolver un string con el recuento actual y el string `Hold` si el recuento es menor o igual a `0`.

- En la salida de la función, el recuento actual y la decisión del jugador (`Bet` o `Hold`) deben estar separados por un espacio. Por ejemplo, `-3 Hold`.
