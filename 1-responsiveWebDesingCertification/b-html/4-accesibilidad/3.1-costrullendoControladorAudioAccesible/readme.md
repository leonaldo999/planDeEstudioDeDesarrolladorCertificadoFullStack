# Constullendo un controlador de audio accesible

En este taller, practicarás el uso de **ARIA** creando un controlador de audio accesible.

---

## Paso 1

> Para empezar, añade un elemento `h1` con el texto `Audio Controls`.

- **Codigo**

  ```html
  <h1>Audio Controls</h1>
  ```

---

## Paso 2

> A continuación, agregue un elemento `button` con el atributo `type` establecido en el valor `button`.
>
> El texto del elemento `button` debe ser `Play`.

- **Codigo**

  ```html
  <h1>Audio Controls</h1>
  <!-- usuario -->
  <button type="button">Play</button>
  <!-- usuario -->
  ```

---

## Paso 3

> A continuación, agregue un elemento `div` para contener todos los elementos del control de volumen.
>
> Dentro del elemento `div`, anide un elemento `span` con un atributo `id` establecido en `volume-label`. Además, el texto del elemento `span` debe ser `Volume`.

Más adelante, los atributos ARIA harán referencia al `id` para que las tecnologías de asistencia puedan identificar este texto como la etiqueta del control de volumen.

- **Codigo**

  ```html
  <h1>Audio Controls</h1>
  <button type="button">Play</button>
  <!-- usuario -->
  <div>
    <span id="volume-label">Volume</span>
  </div>
  <!-- usuario -->
  ```

---

## Paso 4

> Ahora es el momento de añadir otro elemento `span`.
>
> Este elemento `span` debe tener un atributo `id` establecido en `volume-description`. Además, el texto de este elemento `span` debe ser `Adjust the sound level`.

Al igual que el elemento `span` anterior, el `id` de este `span` será referenciado posteriormente por los atributos ARIA para que las tecnologías de asistencia puedan identificar este texto como la descripción del control de volumen.

- **Codigo**

  ```html
  <h1>Audio Controls</h1>
  <button type="button">Play</button>
  <div>
    <span id="volume-label">Volume</span>
    <!-- usuario -->
    <span id="volume-description">Adjust the sound level</span>
    <!-- usuario -->
  </div>
  ```

---

## Paso 5

> A continuación, debes agregar un `input` con el atributo `type` establecido en `range` para crear el control deslizante de volumen. Establece el atributo `min` en `0`, el atributo `max` en `100` y el atributo `value` en `50` para definir el nivel de volumen predeterminado.

- **Codigo**

  ```html
  <h1>Audio Controls</h1>
  <button type="button">Play</button>
  <div>
    <span id="volume-label">Volume</span>
    <span id="volume-description">Adjust the sound level</span>
    <!-- usuario -->
    <input type="range" min="0" max="100" value="50">
    <!-- usuario -->
  </div>
  ```

---

## Paso 6

Como recordará de lecciones anteriores, el atributo `aria-labelledby` se utiliza cuando hay texto en la página que puede utilizarse como etiqueta. En este caso, ha añadido el atributo `id` a sus elementos `span`, que ahora se utilizarán aquí.

> Añada un atributo `aria-labelledby` al elemento `input` establecido en `volume-label volume-description`.

- **Codigo**

  ```html
  <h1>Audio Controls</h1>
  <button type="button">Play</button>
  <div>
    <span id="volume-label">Volume</span>
    <span id="volume-description">Adjust the sound level</span>
    <!-- usuario -->
    <input type="range" min="0" max="100" value="50" aria-labelledby="volume-label volume-description">
    <!-- usuario -->
  </div>
  ```

---

## Paso 7

Tu controlador de audio accesible está casi completo, pero hay una última cosa que añadir.

> Añade un elemento de `button` con el atributo `type` establecido en `button` y con el texto `Mute` debajo del elemento `div`.

- **Codigo**

  ```html
  <h1>Audio Controls</h1>
  <button type="button">Play</button>
  <div>
    <span id="volume-label">Volume</span>
    <span id="volume-description">Adjust the sound level</span>
    <input type="range" min="0" max="100" value="50" aria-labelledby="volume-label volume-description">
  </div>
  <!-- usuario -->
  <button type="button">Mute</button>
  <!-- usuario -->
  ```

---

**¡Con ese cambio, habrás completado este taller!**
