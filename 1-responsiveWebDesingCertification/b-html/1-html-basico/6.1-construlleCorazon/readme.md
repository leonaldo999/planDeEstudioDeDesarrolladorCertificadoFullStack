# Cosrulle un icono de corazón

---

## Paso 1

En una lección anterior, aprendiste sobre los elementos `svg` y cómo se utilizan a menudo como íconos en los proyectos. En los códigos base del mundo real, normalmente se utilizan bibliotecas de íconos, por lo que no es necesario crear elementos `svg` desde cero. Sin embargo, en este taller, crearás un ícono de corazón para aprender sobre los atributos principales que se utilizan dentro de un elemento `svg`.

> Comienza creando un elemento `svg` en la página.

- **Code**

  ```html
  <svg></svg>
  ```

---

## Paso 2

El siguiente paso es establecer los atributos de `width` y `height` para el elemento `svg`. Como estás creando un ícono, ambos valores deben establecerse en un valor pequeño.

> Establece ambos valores en `24`.

- **Code**

  ```html
  <svg width='24' , height='24'>
  </svg>
  ```

---

## Paso 3

Ya estás más cerca, ahora mira este ejemplo:

- **Code Ejemplo**

  ```html
  <svg viewBox="0 0 50 50">
  </svg>
  ```

El atributo `viewBox` controla qué parte visible de la imagen dentro del `SVG`.

- Los dos primeros números (`0 0`) establecen la posición inicial del `viewBox`: la esquina superior izquierda (x e y).
- Los dos números siguientes (`50 50`) definen la anchura y la altura del `viewBox`.

> Establezca el atributo `viewBox` en `0 0 24 24`.

- **Code**

  ```html
  <svg width="24" , height="24" viewBox="0 0 24 24">
  </svg>
  ```

---

## Paso 4

Antes de comenzar a colorear la imagen, debe anidar un elemento `path` dentro de su elemento `svg` para darle forma a la imagen.

> Cree un elemento `path`.

- **Code**

  ```html
  <svg width="24" , height="24" viewBox="0 0 24 24">
    <path></path>
  </svg>
  ```

---

## Paso 5

El elemento `path` necesita que se defina su forma. Ahí es donde entra en juego el atributo `d`. Se utiliza para crear una serie de letras y números de comando que dibujan una forma.

Estas letras representan comandos como mover a, dibujar línea y cerrar, mientras que los números representan coordenadas.

> Establezca el atributo `d` de la forma de corazón en `M12 21s-6-4.35-9.33-8.22C-.5 7.39 3.24 1 8.4 4.28 10.08 5. 32 12 7.5 12 7.5s1.92-2.18 3.6-3.22C20.76 1 24.5 7.39 21.33 12.78 18 16.65 12 21 12 21z`.

- **Code**

  ```html
  <svg width="24" , height="24" viewBox="0 0 24 24">
    <path d="M12 21s-6-4.35-9.33-8.22C-.5 7.39 3.24 1 8.4 4.28 10.08 5. 32 12 7.5 12 7.5s1.92-2.18 3.6-3.22C20.76 1 24.5 7.39 21.33 12.78 18 16.65 12 21 12 21z">
    </path>
  </svg>
  ```

---

## Paso 6

El ícono del corazón está casi listo. Solo tienes que colorearlo de rojo. Para ello, establece el atributo de `fill` del elemento `svg` en `red`.

- **Code**

  ```html
  <svg width="24" , height="24" viewBox="0 0 24 24" fill="red">
    <path d="M12 21s-6-4.35-9.33-8.22C-.5 7.39 3.24 1 8.4 4.28 10.08 5. 32 12 7.5 12 7.5s1.92-2.18 3.6-3.22C20.76 1 24.5 7.39 21.33 12.78 18 16.65 12 21 12 21z">
    </path>
  </svg>
  ```

---

**¡Felicidades por terminar este taller!**

---
