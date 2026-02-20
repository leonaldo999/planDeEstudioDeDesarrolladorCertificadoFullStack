# Revisión de colores CSS

En CSS, los colores se pueden definir utilizando diferentes formatos, como nombres de colores, valores hexadecimales, valores RGB y valores HSL. Cada formato tiene sus propias ventajas y se puede utilizar según las necesidades del diseño.

---

## Teoría del color

- **Definición de teoría del color**: es el estudio de cómo interactúan los colores entre sí y cómo afectan a nuestra percepción. Abarca las relaciones entre los colores, la armonía cromática y el impacto psicológico del color.

- **Colores primarios**: estos colores, que son el amarillo, el azul y el rojo, son los tonos fundamentales de los que se derivan todos los demás colores.

- **Colores secundarios**: estos colores son el resultado de mezclar cantidades iguales de dos colores primarios. El verde, el naranja y el morado son ejemplos de colores secundarios.

- **Colores terciarios**: Estos colores se obtienen al combinar un color primario con un color secundario vecino. El amarillo verdoso, el azul verdoso y el azul violáceo son ejemplos de colores terciarios.

- **Colores cálidos**: Estos colores, que incluyen los rojos, naranjas y amarillos, evocan sensaciones de comodidad, calidez y acogedoridad.

- **Colores fríos**: Estos colores, que incluyen azules, verdes y morados, evocan sensaciones de calma, serenidad y profesionalidad.

- **Rueda de colores**: La rueda de colores es un diagrama circular que muestra cómo se relacionan los colores entre sí. Es una herramienta esencial para los diseñadores, ya que les ayuda a seleccionar combinaciones de colores.

- **Esquemas de colores análogos**: Estos esquemas de colores crean experiencias cohesionadas y relajantes. Tienen colores análogos, que son adyacentes entre sí en la rueda de colores.

- **Esquemas de colores complementarios**: estos esquemas de colores crean un alto contraste y un gran impacto visual. Sus colores se encuentran en extremos opuestos de la rueda de colores, uno respecto al otro.

- **Esquema de colores triádicos**: este esquema de colores tiene colores vibrantes. Se componen de colores que están aproximadamente a la misma distancia entre sí. Si se conectan, forman un triángulo equilátero en la rueda de colores.

- **Esquema de colores monocromáticos**: en este esquema, todos los colores se derivan del mismo color base ajustando su luminosidad, oscuridad y saturación. Esto evoca una sensación de unidad y armonía, al tiempo que crea contraste.

---

## Diferentes formas de trabajar con colores en CSS

- **Colores con nombre**: estos colores son nombres de colores predefinidos que reconocen los navegadores. Algunos ejemplos son `blue`, `darkred`, `lightgreen`.

- **Función `rgb()`**: RGB son las siglas de rojo, verde y azul, los colores primarios de la luz. Estos tres colores se combinan en diferentes intensidades para crear una amplia gama de colores. La función `rgb()` permite definir colores utilizando el modelo de color RGB.
  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <p>RGB Color</p>
    ```

    ```css
    p {
      color: rgb(255, 0, 0);
    }
    ```

- **Función `rgba()`**: Esta función añade un cuarto valor, alfa, que controla la transparencia del color. Si no se proporciona, el valor alfa se establece por defecto en 1.
  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <div>RGBA Background</div>
    ```

    ```css
    div {
      background-color: rgba(0, 0, 255, 0.5);
    }
    ```

- **Función `hsl()`**: HSL son las siglas de Hue (tono), Saturation (saturación) y Lightness (luminosidad), los tres componentes clave que definen un color.
  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <p>HSL Color</p>
    ```

    ```css
    p {
      color: hsl(120, 100%, 50%);
    }
    ```

- **Función `hsla()`**: Esta función agrega un cuarto valor, alfa, que controla la opacidad del color.
  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <div>HSLA Background</div>
    ```

    ```css
    div {
      background-color: hsla(0, 100%, 50%, 0.5);
    }
    ```

- **Hexadecimal**: un código `hex`(abreviatura de código hexadecimal) es una cadena de seis caracteres que se utiliza para representar colores en el modelo de color RGB. "`Hex`" hace referencia al sistema numérico de base 16, que utiliza los dígitos del `0` al `9` y las letras de la `A` a la `F`.
  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <h1 class="hex-text">Hex Text</h1>
    <p class="hex-bg">Hex Background</p>
    ```

    ```css
    h1 {
      color: #FF5733; /* A reddish-orange color */
    }
    
    p {
      background-color: #4CAF50; /* A shade of green */
    }
    ```

---

## Propiedad `box-shadow`

- **Definición**: La propiedad `box-shadow` aplica una o más sombras alrededor de un elemento.

- **Valores de desplazamiento**: Debe especificar valores horizontales (`offset-x`) y verticales (`offset-y`). Un valor positivo de `offset-x` mueve la sombra hacia la derecha, mientras que los valores negativos la mueven hacia la izquierda. Un valor positivo de `offset-y` mueve la sombra hacia abajo, mientras que los valores negativos la mueven hacia arriba. Si el valor es 0, no es necesario incluir una unidad.

- Radio de desenfoque: este valor opcional controla el grado de desenfoque de la sombra. Si no se incluye, el valor predeterminado es `0`, lo que crea bordes nítidos. Cuanto mayor sea el valor, más suave será la sombra.

- Radio de expansión: este valor opcional controla cuánto se expande o se contrae la sombra. Si no se incluye, el valor predeterminado es `0`.

- Color de la sombra: puede especificar el color utilizando colores con nombre, valores hexadecimales o las funciones `rgb()`, `rgba()`, `hsl()` o `hsla()`.

- Palabra clave `inset`: al añadir la palabra clave `inset`, la sombra se coloca dentro del elemento en lugar de fuera.

- Aplicación de múltiples sombras de cuadro: puede aplicar múltiples sombras separándolas con comas. Las sombras se superponen de delante hacia atrás.

### Syntax

```css
box-shadow: offset-x offset-y blur-radius spread-radius color;
```

- **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <div class="shadow-box">Shadow Color Example</div>
    ```

    ```css
    .shadow-box {
      width: 200px;
      padding: 20px;
      background-color: lightblue;
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
    }
    ```

---

## Degradados lineales y radiales

- **Degradados lineales**: estos degradados crean una mezcla gradual entre colores a lo largo de una línea recta. Puede controlar la dirección de esta línea utilizando palabras clave como `to top`, `to right`, `to bottom right` o ángulos como `45deg`. Puede utilizar cualquier color CSS válido y tantos paradas de color como desee.
- **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <div class="linear-gradient">Linear Gradient</div>
    ```

    ```css
    .linear-gradient {
      background: linear-gradient(45deg, red, #33FF11, rgba(100, 100, 255, 0.5));
      height: 40vh;
    }
    ```

- **Radial Gradients**: Estos degradados crean degradados circulares o elípticos que irradian desde un punto central.
- **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <div class="radial-gradient">Radial Gradient</div>
    ```

    ```css
    .radial-gradient {
      background: radial-gradient(circle, red, blue);
      height: 40vh;
    }
    ```
