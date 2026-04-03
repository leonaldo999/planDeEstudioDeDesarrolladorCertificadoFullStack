# Animaciones y accesibilidad

En esta sección, exploraremos cómo las animaciones CSS pueden afectar la accesibilidad de tu sitio web y cómo puedes utilizarlas de manera responsable para mejorar la experiencia del usuario sin causar molestias.

---

## Tema 1: ¿Qué son las animaciones CSS y cómo funcionan?

Las animaciones CSS te permiten crear efectos dinámicos y visualmente atractivos en páginas web sin necesidad de JavaScript ni de una programación compleja. Ofrecen una forma de realizar transiciones fluidas entre diferentes estilos de los elementos durante un tiempo determinado.

En esencia, una animación CSS consta de dos componentes principales: la regla `@keyframes` y la propiedad animation.

La regla `@keyframes` define las etapas y los estilos de la animación. Especifica qué estilos debe tener el elemento en distintos momentos durante la animación.

Aquí tienes un ejemplo:

- **Example code**

  ```css
  @keyframes slide-in {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  ```

Esta regla `@keyframes`, denominada `slide-in`, define una animación que desplaza un elemento de izquierda a derecha. Los porcentajes representan el progreso de la animación, siendo el `0%` el inicio y el `100%` el final.

La función `translateX` en tu animación `@keyframes` controla la posición horizontal de un elemento a medida que se anima para aparecer en pantalla.

Para aplicar esta animación a un elemento, utiliza la propiedad `animation`. Este ejemplo también repite la animación infinitamente para que puedas verla en acción (deberás habilitar el editor interactivo para ver las vistas previas):

- **Example code**

  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="sliding-element">Hello, I slide in!</div>
  ```

  ```css
  @keyframes slide-in {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  
  .sliding-element {
    animation: slide-in 2s ease-out infinite;
  }
  ```

Esto aplica la animación de `slide-in` al elemento, con una duración de 2 segundos y una función de transición `ease-out`.

La propiedad `animation` es, en realidad, una forma abreviada de varias propiedades individuales:

`animation-name`, que especifica la regla `@keyframes` que se debe utilizar.

`animation-duration`, que establece cuánto tiempo debe tardar la animación en completarse.

`animation-timing-function`, que define cómo progresa la animación a lo largo del tiempo, por ejemplo, `ease`, `linear`, `ease-in-out`.

`animation-delay`, que especifica un retraso antes de que comience la animación.

`animation-iteration-count`, que establece cuántas veces debe repetirse la animación.

`animation-direction`, que determina si la animación debe reproducirse hacia adelante, hacia atrás o de forma alterna.

`animation-fill-mode`, que especifica cómo debe verse el elemento antes y después de la animación.

`animation-play-state`, que te permite pausar y reanudar la animación.

Puedes usar estas propiedades individualmente para un control más preciso:

- **Example code**

  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="complex-animation">Watch my colors change!</div>
  ```

  ```css
  .complex-animation {
    animation-name: color-change;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  
  @keyframes color-change {
    0% {
      background-color: red;
    }
    50% {
      background-color: blue;
    }
    100% {
      background-color: green;
    }
  }
  ```

Esto crea una animación que cambia continuamente el color de fondo de un elemento entre rojo, azul y verde.

Las animaciones CSS pueden activarse mediante diversos eventos, como al pasar el cursor por encima de un elemento:

- **Example code**

  ```html
  <link rel="stylesheet" href="styles.css">
  <button class="button">Hover over me!</button>
  ```

  ```css
  .button {
    background-color: blue;
    transition: background-color 0.3s;
  }
  
  .button:hover {
    background-color: red;
  }
  ```

Aunque en este ejemplo se utiliza la propiedad transition, que resulta más sencilla para efectos básicos, muestra cómo el CSS puede crear elementos interactivos y animados.

Es importante señalar que, si bien las animaciones CSS son muy potentes, deben utilizarse con moderación. El uso excesivo de animaciones puede reducir el rendimiento y resultar molesto o problemático para los usuarios con determinadas necesidades de accesibilidad. Considera siempre la posibilidad de ofrecer opciones para reducir o desactivar las animaciones para aquellos usuarios que prefieran menos movimiento.

Las animaciones CSS ofrecen una forma de crear experiencias web atractivas e interactivas sin depender de JavaScript. Al comprender los principios de @keyframes y las propiedades de animation, puedes dar vida a tus diseños web de una manera eficiente y accesible.

---

1. **¿Cuál es el propósito de la regla `@keyframes` en las animaciones CSS?**

    - [ ] a) Especificar la duración de la animación.
    - [x] b) Definir las etapas y los estilos de la animación. //correcto
    - [ ] c) Establecer la función de sincronización de la animación.
    - [ ] d) Determinar cuántas veces se repite la animación.

2. **En el siguiente código CSS, ¿qué significa `2s`?**

    ```css
    .element {
      animation: fade-in 2s ease-in;
    }
    ```

    - [ ] a) El tiempo de espera antes de que comience la animación.
    - [ ] b) El número de veces que se repite la animación.
    - [x] c) La duración de la animación. //correcto
    - [ ] d) El porcentaje de avance de la animación.

3. **¿¿Qué propiedad CSS usarías para que una animación se repitiera indefinidamente?**

    - [ ] a) `animation-loop: infinite;`
    - [ ] b) `animation-repeat: always;`
    - [x] c) `animation-iteration-count: infinite;` //correcto
    - [ ] d) `animation-duration: endless;`

[☝️](#animaciones-y-accesibilidad)

---

## Tema 2: ¿Cuáles son las preocupaciones en materia de accesibilidad relacionadas con el uso de animaciones y cómo puede ayudar la propiedad `prefers-reduced-motion`?

Las animaciones pueden mejorar considerablemente el atractivo visual y la experiencia del usuario en un sitio web. Sin embargo, también pueden plantear importantes retos de accesibilidad para ciertos usuarios. Es fundamental comprender estas preocupaciones e implementar soluciones para garantizar que tu sitio web siga siendo accesible para todos los usuarios.

Una de las principales preocupaciones en materia de accesibilidad con respecto a las animaciones es que pueden causar molestias o incluso daños físicos a algunos usuarios. Las personas con trastornos vestibulares o sensibilidad al movimiento pueden experimentar mareos, náuseas o dolores de cabeza cuando se exponen a ciertos tipos de movimiento en la pantalla.

Además, las animaciones pueden distraer a los usuarios con discapacidades cognitivas o trastornos de atención. Los efectos de destellos rápidos o estroboscópicos son particularmente problemáticos. Pueden desencadenar convulsiones en personas con epilepsia fotosensible. Como regla general, evite cualquier contenido que destelle más de tres veces por segundo.

Otro problema es que las animaciones pueden dificultar que algunos usuarios se concentren en el contenido o lo lean. Esto es especialmente cierto en el caso de los usuarios con baja visión o dificultades de lectura, a quienes les puede resultar complicado seguir el texto en movimiento o los diseños cambiantes.

Para abordar estas preocupaciones, CSS ofrece la consulta de medios `prefers-reduced-motion`. Esta función permite a los desarrolladores web detectar si el usuario ha solicitado animaciones o efectos de movimiento mínimos a nivel del sistema.

A continuación te mostramos cómo puedes utilizar `prefers-reduced-motion`:

- **Example code**

  ```css
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```

Este fragmento de código CSS desactiva de manera efectiva la mayoría de las animaciones y transiciones para los usuarios que han indicado su preferencia por un movimiento reducido. Analicémoslo:

La regla de consulta `@media` comprueba si el usuario prefiere un movimiento reducido. Si es así, aplica los estilos incluidos.

Dentro de la consulta de medios, nos dirigimos a todos los elementos (`*`) y anulamos las propiedades de animación y transición.

Establecemos `animation-duration` y `transition-duration` en un valor extremadamente pequeño (`0.01 ms`). Esto básicamente desactiva las animaciones, pero permite que se completen, lo cual puede ser importante para ciertas funcionalidades.

`animation-iteration-count: 1` garantiza que cualquier animación en bucle solo se reproduzca una vez.

`scroll-behavior: auto` desactiva los efectos de desplazamiento suave.

La declaración `!important` se utiliza para garantizar que estas reglas tengan prioridad sobre otros estilos de animación.

Es importante señalar que, si bien este método reduce eficazmente el movimiento, se trata de un enfoque general. Para un control más preciso, es posible que desees definir alternativas específicas de movimiento reducido para tus animaciones.

A continuación, te mostramos un ejemplo de un enfoque más específico:

- **Example code**

  ```css
  .animated-element {
    transition: transform 0.3s ease-in-out;
  }
  
  @media (prefers-reduced-motion: reduce) {
    .animated-element {
      transition: none;
    }
  }
  ```

En este caso, solo desactivamos la `transition` de un elemento específico cuando se prefiere un movimiento reducido. Esto te permite ofrecer experiencias alternativas con menos movimiento a los usuarios que lo necesiten.

Recuerda que el objetivo no es eliminar por completo todo el movimiento de tu sitio web, sino ofrecer opciones que permitan a todos los usuarios interactuar cómodamente con tu contenido. Cierto grado de movimiento puede seguir siendo beneficioso para la usabilidad y la retroalimentación, incluso para los usuarios que prefieren un movimiento reducido.

Al implementar animaciones, considere usarlas de manera reflexiva en lugar de solo como decoración. Evite movimientos grandes e inesperados y proporcione controles para pausar, detener u ocultar animaciones cuando sea posible. Es importante que utilice la consulta `prefers-reduced-motion` para ofrecer una alternativa con poco movimiento, asegurando que su contenido siga siendo accesible y cómodo para todos los usuarios, incluidos aquellos sensibles al movimiento.

Al tener en cuenta estas cuestiones de accesibilidad y utilizar herramientas como `prefers-reduced-motion`, puedes crear experiencias animadas atractivas que sean inclusivas y accesibles para todos los usuarios.

---

## Cuestionario 2

1. **¿Cuál es el objetivo principal de la consulta de medios `prefers-reduced-motion`?**

    - [ ] a) Aumentar la velocidad de todas las animaciones.
    - [x] b) Detectar si un usuario ha solicitado animaciones mínimas a nivel del sistema.. //correcto
    - [ ] c) Añadir automáticamente más animaciones a un sitio web.
    - [ ] d) Cambiar la combinación de colores de las animaciones.

2. **¿Cuál de las siguientes opciones NO es una preocupación habitual en materia de accesibilidad relacionada con las animaciones?**

    - [ ] a) Pueden causar molestias a los usuarios con trastornos vestibulares.
    - [ ] b) Pueden distraer a los usuarios con discapacidades cognitivas.
    - [x] c) Siempre mejoran la legibilidad para todos los usuarios. //correcto
    - [ ] d) Pueden provocar convulsiones en personas con epilepsia fotosensible.

3. **En el contexto de `prefers-reduced-motion`, ¿qué se consigue al establecer `animation-duration: 0.01ms !important;`?**

    - [ ] a) Hace que las animaciones duren exactamente 0,01 milisegundos.
    - [ ] b) Aumenta la velocidad de las animaciones.
    - [x] c) Desactiva las animaciones de manera efectiva, pero permite que se completen. //correcto
    - [ ] d) Hace que las animaciones duren indefinidamente.

[☝️](#animaciones-y-accesibilidad)

---
