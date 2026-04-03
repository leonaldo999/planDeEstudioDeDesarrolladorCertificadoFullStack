# Repaso de las animaciones CSS

En esta sección, repasaremos los conceptos básicos de las animaciones CSS, incluyendo cómo se definen y cómo se aplican a los elementos HTML para crear efectos visuales dinámicos.

## Conceptos básicos de las animaciones CSS

- **Definición**: Las animaciones CSS te permiten crear efectos dinámicos y visualmente atractivos en páginas web sin necesidad de JavaScript ni de una programación compleja. Ofrecen una forma de realizar transiciones fluidas entre diferentes estilos de los elementos durante un tiempo determinado.

- **La regla `@keyframes`**: Esta regla define las etapas y los estilos de la animación. Especifica qué estilos debe tener el elemento en distintos momentos de la animación.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <div class="box">Slide</div>
    ```

    ```css
    .box {
      width: 120px;
      padding: 10px;
      background: #0077ff;
      color: white;
      animation: slide-in 1s ease-in-out;
    }
    
    @keyframes slide-in {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0);
      }
    }
    ```

    ---

- **Propiedad `animation`**: Es la propiedad abreviada que se utiliza para aplicar animaciones.

- `animation-name`: Especifica el nombre de la regla `@keyframes` que se va a utilizar.

- `animation-duration`: Establece la duración de la animación.

- `animation-timing-function`: Define cómo avanza la animación a lo largo del tiempo (por ejemplo, `ease`, `linear`, `ease-in-out`).

- `animation-delay`: Especifica un retraso antes de que comience la animación.

- `animation-iteration-count`: Establece cuántas veces debe repetirse la animación.

- `animation-direction`: Determina si la animación debe reproducirse hacia adelante, hacia atrás o de forma alterna.

- `animation-fill-mode`: Especifica cómo debe verse el elemento antes y después de la animación.

- `animation-play-state`: Permite pausar y reanudar la animación.

---

## Accesibilidad y la consulta de _Media Query_ `prefers-reduced-motion`

- **La consulta de medios `prefers-reduced-motion`**: Una de las principales preocupaciones en materia de accesibilidad con respecto a las animaciones es que pueden causar molestias o incluso daños físicos a algunos usuarios. Las personas con trastornos vestibulares o sensibilidad al movimiento pueden experimentar mareos, náuseas o dolores de cabeza cuando se exponen a ciertos tipos de movimiento en la pantalla. La consulta de medios `prefers-reduced-motion` permite a los desarrolladores web detectar si el usuario ha solicitado animaciones o efectos de movimiento mínimos a nivel del sistema.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <button class="animated-element">Hover me</button>
    ```

    ```css
    .animated-element {
      padding: 10px 16px;
      transition: transform 0.3s ease-in-out;
    }
    
    .animated-element:hover {
      transform: translateX(20px);
    }
    
    @media (prefers-reduced-motion: reduce) {
      .animated-element {
        transition: none;
      }
    }
    ```

    ---
