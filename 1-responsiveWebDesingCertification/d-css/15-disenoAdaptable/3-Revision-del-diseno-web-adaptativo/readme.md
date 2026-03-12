# Revisión del diseño web adaptativo

El diseño web adaptativo es un enfoque de diseño que se centra en crear sitios web que se adapten a diferentes tamaños de pantalla y dispositivos. Utiliza técnicas como cuadrículas fluidas, imágenes flexibles y consultas de medios para garantizar que el contenido se muestre de manera óptima en cualquier dispositivo.

## Diseño web adaptativo

- **Definición**: El principio fundamental del diseño adaptativo es la adaptabilidad, es decir, la capacidad de un sitio web para ajustar su diseño y contenido en función del tamaño de la pantalla y las capacidades del dispositivo en el que se visualiza.

- **Grids fluidas**: utilizan unidades relativas, como porcentajes, en lugar de unidades fijas, como píxeles, lo que permite que el contenido cambie de tamaño y se reajuste en función del tamaño de la pantalla.

- **Imágenes flexibles**: están configuradas para cambiar de tamaño dentro de los elementos que las contienen, lo que garantiza que no se salgan de sus contenedores en pantallas más pequeñas.

## Consultas de media queries

- **Definición**: permiten a los desarrolladores aplicar diferentes estilos en función de las características del dispositivo, principalmente el ancho de la ventana gráfica.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <p class="mq-example">The background of this paragraph will change when the viewport is at least 768px wide.</p>
    ```

    ```css
    .mq-example {
      padding: 10px;
      border: 1px solid #ccc;
      background-color: lightyellow;
    }
    
    @media screen and (min-width: 768px) {
      /* Styles for screens at least 768px wide */
      .mq-example {
        background-color: lightblue;
      }
    }
    ```

- Tipos de medios de `all`: adecuado para todos los dispositivos. Es el valor predeterminado si no se especifica ningún tipo de medio.

- Tipos de medios de `print`: destinado a material paginado y documentos que se visualizan en una pantalla en modo de vista previa de `print`.

- Tipos de medios de `screen`: destinado principalmente a `screens`.

- `aspect-ratio`: describe la relación entre la anchura y la altura de la ventana gráfica.

  - **Codigo ejemplo**

    ```css
    @media screen and (aspect-ratio: 16/9) {
      /* Styles for screens with a 16:9 aspect ratio */
    }
    ```

- `Orientation`: se utiliza para indicar si el dispositivo está en orientación horizontal o vertical.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <p class="orientation-example">This paragraph's background will change in landscape orientation.</p>
    ```

    ```css
    .orientation-example {
      padding: 10px;
      border: 1px solid #ccc;
      background-color: lightyellow;
    }
    
    @media screen and (orientation: landscape) {
      /* Styles for landscape orientation */
      .orientation-example {
        background-color: lightgreen;
      }
    }
    ```

- `resolution`: Se utiliza para describir la resolución del dispositivo de salida en puntos por pulgada (ppp) o puntos por centímetro (ppc).

  - **Codigo ejemplo**

    ```css
    @media screen and (min-resolution: 300dpi) {
      /* Styles for high-resolution screens */
    }
    ```

- `hover`: Se utiliza para comprobar si el mecanismo de entrada principal puede situarse sobre los elementos.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <button>Hover over me</button>
    ```

    ```css
    button {
      padding: 10px 20px;
      font-size: 1rem;
      background-color: lightgray;
      border: 1px solid #999;
      cursor: pointer;
    }
    
    @media (hover: hover) {
      /* Styles for devices that support hover */
      button:hover {
        background-color: yellow;
      }
    }
    ```

- `prefers-color-scheme`: Se utiliza para detectar si el usuario ha solicitado un tema de colores claros u oscuros.

- Consultas de media y operadores lógicos: El operador `and` se utiliza para combinar varias características de medios, mientras que `not` y `only` solo se pueden utilizar para negar o aislar consultas de medios.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <p class="logical-example">This paragraph's background will change when the screen is at least 768px wide AND in landscape orientation.</p>
    ```

    ```css
    .logical-example {
      padding: 10px;
      border: 1px solid #ccc;
      background-color: lightyellow;
    }
    
    @media screen and (min-width: 768px) and (orientation: landscape) {
      /* Styles for landscape screens at least 768px wide */
      .logical-example {
        background-color: lightcoral;
      }
    }
    ```

## Breakpoints comunes en los @media

- Definición: Los puntos de ruptura en los media son puntos específicos en el diseño de un sitio web en los que el diseño y el contenido se ajustan para adaptarse a diferentes tamaños de pantalla. Existen algunos puntos de ruptura generales que se pueden utilizar para adaptarse a teléfonos, tabletas y pantallas de computadoras de escritorio. Sin embargo, no es aconsejable intentar abarcar todos los tamaños de pantalla posibles para los diferentes dispositivos.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <p class="breakpoint-example">This text will change size when the viewport width is at least 768px.</p>
    ```

    ```css
    .breakpoint-example {
      font-size: 1rem;
      padding: 10px;
      border: 1px solid #ccc;
    }
    
    /* Styles for screens wider than 768px */
    @media screen and (min-width: 768px) {
      .breakpoint-example {
        font-size: 1.125rem;
        background-color: lightblue;
      }
    }
    ```

- **Dispositivos pequeños (smartphones)**: hasta 640 píxeles

- **Dispositivos medianos (tabletas)**: de 641 a 1024 píxeles

- **Dispositivos grandes (computadoras de escritorio)**: 1025 píxeles y más

## Enfoque `mobile first`

- **Definición**: El enfoque `mobile first` es una filosofía de diseño y una estrategia de desarrollo en el diseño web adaptativo que da prioridad a la creación de sitios web para dispositivos móviles antes que al diseño para pantallas más grandes.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <div class="container">
      <p>The width of this container changes based on the viewport size.</p>
    </div>
    ```

    ```css
    /* Base styles for mobile */
    .container {
      width: 100%;
      padding: 10px;
      background-color: lightblue;
    }
    
    /* Styles for larger screens */
    @media screen and (min-width: 768px) {
      .container {
        width: 750px;
        margin: 0 auto;
        padding: 20px;
      }
    }
    
    @media screen and (min-width: 1024px) {
      .container {
        width: 960px;
      }
    }
    ```
