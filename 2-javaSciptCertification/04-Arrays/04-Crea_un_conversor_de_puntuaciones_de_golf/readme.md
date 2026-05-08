# Crea un conversor de puntuaciones de golf

_En el golf, cada hoyo tiene un par, es decir, el número promedio de golpes que se espera que dé un golfista para meter la pelota en el hoyo y completar el juego. Dependiendo de cuánto se desvíen tus golpes por encima o por debajo del par, hay un apodo diferente._

_En este laboratorio, escribirás una función que convierta el par y los golpes en su apodo correspondiente._

---

## Historias de usuario

1. Debes crear una función llamada `golfScore`.

2. `golfScore` debe tomar dos argumentos numéricos: el `par` del campo y el número de golpes realizados.

3. `golfScore` debe devolver un string.

4. `golfScore` debe devolver `"¡Hole-in-one!"` si `strokes` es `1`.

5. `golfScore` debe devolver `"Eagle"` si `strokes` es menor o igual al `par` menos `2`.

6. `golfScore` debe devolver `"Birdie"` si `strokes` es igual al `par` menos `1`.

7. `golfScore` debe devolver `"Par"` si `strokes` es igual al `par`.

`golfScore` debe devolver `"Bogey"` si `strokes` es igual al `par` más `1`.

`golfScore` debe devolver `"Double Bogey"` si `strokes` es igual al `par` más `2`.

`golfScore` debe devolver `"Go Home!"` si `strokes` es mayor o igual al `par` más `3`.
