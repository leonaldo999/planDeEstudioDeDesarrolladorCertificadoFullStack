# Construir un reproductor de música HTML

En este taller, crearás un reproductor de música HTML. Se te ha proporcionado la plantilla HTML.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Working with the HTML Audio Element</title>
</head>
<body>
  

</body>
</html>
```

---

## Paso 1

>> Crea un elemento h1 y asígnale el texto `freeCodeCamp Tunes`

- **Código Ejemplo**

  ```html
  <h1>freeCodeCamp Tunes</h1>
  ```

---

## Paso 2

>>Debajo del `h1`, agrega un elemento `h2` con el texto `Can't Stay Down`, que es el título de la primera canción.
>
>>Debajo del elemento `h2`, agrega un elemento `p` con el texto `Artist: Quincy Larson`.

- **Código Ejemplo**

  ```html
  <h2>Can't Stay Down</h2>
  <p>Artist: Quincy Larson</p>
  ```

---

## Paso 3

>> A continuación, cree un elemento de `audio` debajo del elemento `p`. En los siguientes pasos, agregará los atributos necesarios para que el elemento de audio reproduzca música.

- **Código Ejemplo**

  ```html
  <audio></audio>
  ```

---

## Paso 4

>> Para especificar el recurso multimedia para el audio, deberá agregar el atributo `src` al elemento de `audio`.
>
>>Agregue el atributo `src` con el valor `https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3`.

- **Código Ejemplo**

  ```html
  <audio src="https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3"></audio>
  ```

---

## Paso 5

El atributo `loop` reiniciará el audio una vez que se complete la reproducción. Piensa en un meme de Internet que se reproduce repetidamente. Si omites el atributo `loop`, el audio se reproducirá una sola vez.

El atributo `loop` es un atributo booleano y no necesita un valor.

>> Agrega el atributo `loop` al elemento de `audio`.

- **Código Ejemplo**

  ```html
  <audio src="https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3" loop></audio>
  ```

---

## Paso 6

El atributo `controls` proporciona controles de reproducción que incluyen _pausar/reanudar_ la reproducción, búsqueda y control de volumen para el elemento de `audio`.

El atributo `controls` es un atributo booleano y no necesita un valor.

>> Agregue el atributo `controls` al elemento de `audio`.

Ahora debería ver el elemento de `audio` mostrado en la página.

- **Código Ejemplo**

  ```html
  <audio src="https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3" loop controls></audio>
  ```

---

## Paso 7

>> Agrega un nuevo elemento `h2` debajo del elemento de `audio` con el texto `Cruising for a Musing`.
>
>> Debajo del `h2`, agrega un elemento `p` con el texto `Artist: Quincy Larson`.

- **Código Ejemplo**

  ```html
  <h2>Cruising for a Musing</h2>
  <p>Artist: Quincy Larson</p>
  ```

---

## Paso 8

>> Debajo del elemento `p`, agregue un elemento `audio`, asígnele un atributo `src` con el valor `https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3` y los atributos `loop` y `controls`.

- **Código Ejemplo**

  ```html
  <audio src="https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3" loop controls></audio>
  ```

---

## Paso 9

>> La última canción se titula `Scratching the Surface`, el artista es Quincy Larson y el archivo que se va a utilizar es `https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3`.

Añada la última canción para completar el reproductor de música siguiendo el mismo patrón que utilizó para las dos primeras canciones.

- **Código Ejemplo**

  ```html
  <h2>Scratching the Surface</h2>
  <p>Artist: Quincy Larson</p>
  <audio src="https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3" loop controls></audio>
  ```

---
