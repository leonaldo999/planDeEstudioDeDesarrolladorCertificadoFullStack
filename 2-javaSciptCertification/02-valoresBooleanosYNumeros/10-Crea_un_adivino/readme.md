# Crea un adivino

*En este laboratorio, definirás cinco predicciones y seleccionarás una de ellas al azar para mostrársela al usuario.*

Objetivo: Cumple con las historias de usuario que se indican a continuación y haz que todas las pruebas pasen para completar el laboratorio.

## Historias de usuario

1. Debes inicializar las cinco variables `fortune1`, `fortune2`, `fortune3`, `fortune4` y `fortune5` con un valor de string de tu elección. Puedes usar las siguientes opciones si lo deseas:

    - `"Your cat will look very cuddly today."`
    - `"The weather will be nice tomorrow."`
    - `"Be cautious of your new neighbors."`
    - `"You will find a new hobby soon."`
    - `"It would be wise to avoid the color red today."`

2. Debes seleccionar un número aleatorio entre 1 y 5, ambos inclusive, y asignarlo a la variable `randomNumber`.

3. Debes crear una variable `selectedFortune` y asignarle la fortuna adecuada según estas reglas:

    - Si `randomNumber` es 1, asigna el valor de `fortune1` a `selectedFortune`.
    - Si `randomNumber` es 2, asigna el valor de `fortune2` a `selectedFortune`.
    - Si `randomNumber` es 3, asigna el valor de `fortune3` a `selectedFortune`.
    - Si `randomNumber` es 4, asigna el valor de `fortune4` a `selectedFortune`.
    - Si `randomNumber` es 5, asigna el valor de `fortune5` a `selectedFortune`.

4. Debes registrar el valor de `selectedFortune` en la consola.
