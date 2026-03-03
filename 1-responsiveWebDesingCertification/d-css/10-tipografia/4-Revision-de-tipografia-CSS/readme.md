# Revisión de tipografía CSS

En esta sección, revisaremos algunos de los problemas comunes que surgen al aplicar estilos a la tipografía en CSS. En particular, nos centraremos en el uso de `font-family`, `font-size`, `font-weight` y `line-height` para crear diseños tipográficos efectivos y legibles.

---

## Introducción a la tipografía

- **Definición**: La tipografía es el arte de elegir las fuentes y el formato adecuados para que el texto resulte atractivo a la vista y fácil de leer. El "Type" se refiere al diseño y la disposición de los caracteres individuales.

- **Definición de tipo de letra**: un tipo de letra es el diseño y el estilo general de un conjunto de caracteres, números y símbolos. Es como un plano para una familia de fuentes.

- **Definición de fuente**: una fuente es una variación específica de un tipo de letra con características concretas, como el tamaño, el grosor, el estilo y la anchura.

- **Tipo de letra `serif`**: este tipo de letra tiene un estilo clásico con pequeñas líneas al final de los caracteres. Los tipos de letra `serif` se utilizan comúnmente para materiales impresos, como libros.

- **Tipo de letra `sans-serif`**: este tipo de letra tiene un aspecto más moderno, sin las pequeñas líneas al final de los caracteres. Los tipos de letra `sans-serif` se utilizan comúnmente en el diseño digital porque son fáciles de leer en pantalla. Algunos ejemplos son `Helvetica`, `Arial` y `Roboto`.

- **Grosor de la fuente**: es el grosor de los caracteres, incluyendo `ligero`, `normal`, `negrita` y `negro`.

- **Estilo de la fuente**: es la inclinación y orientación de los caracteres, como `cursiva` y `oblicua`.

- **Ancho de la fuente**: es el espacio horizontal que ocupan los caracteres, como condensado y expandido.

- **Línea base**: es la línea imaginaria sobre la que descansan la mayoría de los caracteres.

- **Altura de mayúsculas**: es la altura de las letras mayúsculas, medida desde la línea base hasta la parte superior.

- **Altura x**: es la altura media de las letras minúsculas, excluyendo los ascendentes y descendentes.

- **Ascendentes**: son las partes de las letras minúsculas que se extienden por encima de la altura x, como la parte superior de las letras "h", "b", "d" y "f".

- **Descendentes**: son las partes de las letras minúsculas que se extienden por debajo de la línea de base, como las colas de las letras "y", "g", "p" y "q".

- **Kerning**: es la forma en que se ajusta el espacio entre pares específicos de caracteres para mejorar su legibilidad y estética. Por ejemplo, reducir el espacio entre las letras A y V.

- **Espaciado**: es la forma en que se ajusta el espacio entre todos los caracteres de un bloque de texto. Es esencialmente la distancia entre los caracteres. Afecta a la densidad y apertura del texto.

- **Interlineado**: es el espacio vertical entre las líneas de texto. Se mide desde la línea de base de una línea hasta la línea de base de la siguiente línea.

- **Mejores prácticas con la tipografía**: Debes elegir fuentes claras y sencillas para que tus diseños sean fáciles de entender. Esto es especialmente importante para el texto principal de tu sitio web. Los usuarios se sentirán más atraídos por tu contenido si la fuente es fácil de leer. Debes utilizar dos o tres fuentes como máximo para crear una coherencia visual. El uso de demasiadas fuentes puede dificultar la lectura del texto y debilitar la identidad de tu marca. Esto también puede afectar a la experiencia del usuario al aumentar el tiempo de carga del sitio web. Puede utilizar el tamaño de la fuente para crear una jerarquía visual para los títulos, subtítulos, párrafos y otros elementos. Por ejemplo, el título principal de una página web debe tener una fuente más grande, seguido de subtítulos con tamaños de fuente más pequeños. Esto le dará a cada elemento de la jerarquía un tamaño de fuente específico que ayudará a los usuarios a navegar visualmente por la estructura.

---

## Propiedad `font-family` de CSS

- **Definición**: Una familia tipográfica es un grupo de fuentes que comparten un diseño común. Todas las fuentes que pertenecen a la misma familia se basan en el mismo tipo de letra básico, pero también presentan variaciones en su estilo, grosor y anchura. Se pueden especificar varias `font-family` por orden de prioridad, de mayor a menor, separándolas con comas. Estas fuentes alternativas actuarán como opciones de reserva. Siempre se debe incluir una familia de fuentes genérica al final de la lista de familias de fuentes.

  - **Codigo ejemplo**

    ```css
    font-family: Arial, Lato;
    ```

- **Font Families comunes**: Estas son algunas de las `font-family` más utilizadas en CSS: serif, sans-serif, monospace, cursiva, fantasía.

---

## Fuentes seguras para web

- **Definición**: estas fuentes son un subconjunto de fuentes que es muy probable que estén instaladas en una computadora o dispositivo. Cuando el navegador tiene que renderizar una fuente, intenta encontrar el archivo de fuente en el sistema del usuario. Pero si no encuentra la fuente, normalmente recurrirá a una fuente predeterminada del sistema.

- **Fuentes seguras para web:**

  - Las fuentes sans-serif se utilizan habitualmente para el desarrollo web porque no tienen pequeños "feet" o líneas al final de los caracteres, por lo que son fáciles de leer en pantalla. Algunos ejemplos de fuentes sans-serif seguras para web son: Arial, Verdana y Trebuchet MS.

  - Por el contrario, las fuentes serif sí tienen pequeños "feet" al final de los caracteres, por lo que se utilizan habitualmente para la impresión tradicional. Entre las fuentes serif seguras para la web se incluyen: Times New Roman y Georgia.

---

## Reglas @ y la regla @font-face

- **Definición**: Las reglas @ son instrucciones que proporcionan indicaciones al navegador. Se pueden utilizar para definir diversos aspectos de la hoja de estilos, como consultas de medios, fotogramas clave, tipos de letra y mucho más.

- `@font-face`: permite definir una fuente personalizada especificando el archivo de fuente, el formato y otras propiedades importantes, como el grosor y el estilo. Para que la regla `@font-face` sea válida, también es necesario especificar la propiedad `src`. Esta propiedad contiene referencias a los recursos de fuentes.

  - **Codigo ejemplo**

    ```css
    @font-face {
      font-family: "MyCustomFont"; 
      src: url("path/to/font.woff2"),
           url("path/to/font.woff"),
           url("path/to/font.otf");
    }
    ```

- **Formatos de fuente**: Para cada recurso de fuente, también puede especificar el formato. Esto es opcional. Es una sugerencia para el navegador sobre el formato de fuente. Si se omite el formato, el recurso se descargará y el formato se detectará después de la descarga. Si el formato no es válido, el recurso no se descargará. Los formatos de fuente posibles incluyen `collection`, `embedded-opentype`, `opentype`, `svg`, `truetype`, `woff` y `woff2`.

  - **Codigo ejemplo**

    ```css
    @font-face {
      font-family: "MyCustomFont"; 
      src: url("path/to/font.woff2") format("woff2"),
           url("path/to/font.otf") format("opentype"),
           url("path/to/font.woff") format("woff");
    }
    ```

- `woff` y `woff2`: `woff` significa «Web Open Font Format» _"Web Open Font Format."_. Es un formato de fuente muy utilizado desarrollado por Mozilla en colaboración con Type Supply, LettError y otras organizaciones. La diferencia entre `woff` y woff2 es el algoritmo utilizado para comprimir los datos.

- **OpenType**: es un formato para fuentes informáticas escalables desarrollado por Microsoft y Adobe que permite a los usuarios acceder a funciones adicionales en una fuente. Se utiliza ampliamente en los principales sistemas operativos.

- `tech()`: se utiliza para especificar la tecnología del recurso de fuente. Es opcional.

  - **Codigo ejemplo**

    ```css
    @font-face {
      font-family: "MyCustomFont"; 
      src: url("path/to/font.woff2") format("woff2"),
           url("path/to/font.otf") format("opentype") tech(color-COLRv1),
           url("path/to/font.woff") format("woff");
    }
    ```

---

## Trabajar con fuentes externas

- Definición: una fuente externa es un archivo de fuente que no se incluye directamente en los archivos de su proyecto. Por lo general, se alojan en un servidor independiente. Para incluir estas fuentes externas en su proyecto, puede utilizar un elemento de `link` o una instrucción `@import` dentro de su CSS.

- Google Fonts: se trata de un servicio de Google que ofrece una colección de fuentes, muchas de las cuales están diseñadas específicamente para el desarrollo web.

  A continuación se muestra un ejemplo en el que se utiliza el elemento de `link`:

  - **Codigo ejemplo**

    ```html
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    ```

    ```css
    .roboto-thin {
      font-family: "Roboto", sans-serif;
      font-weight: 100;
      font-style: normal;
    }
    ```

  Aquí hay un ejemplo que utiliza la instrucción `@import`:

  - **Codigo ejemplo**

    ```css
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    ```

- Font Squirrel: Este es otro recurso popular que puedes utilizar para añadir fuentes externas personalizadas a tus proyectos.

---

## Propiedad `text-shadow`

- **Definición**: esta propiedad se utiliza para aplicar sombras al texto. Debe especificar el desplazamiento X e Y, que representan la distancia horizontal y vertical de la sombra con respecto al texto, respectivamente. Estos valores son obligatorios. Los valores positivos del desplazamiento X e Y moverán la sombra hacia la derecha y hacia abajo, respectivamente, mientras que los valores negativos la moverán hacia la izquierda y hacia arriba.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <p>Typography Shadow</p>
    ```

    ```css
      p {
      text-shadow: 3px 2px;
    }
    ```

- **Color Shadow**: también puede personalizar el color Shadow especificando este valor antes o después del desplazamiento. Si no se especifica el color, el navegador lo determinará automáticamente, por lo que suele ser mejor establecerlo explícitamente.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <p>Colored Shadow</p>
    ```

    ```css
    p {
      text-shadow: 3px 2px #00ffc3;
    }
    ```

- Radio de desenfoque: El radio de desenfoque es opcional, pero hará que la sombra se vea mucho más suave y sutil. El valor predeterminado del radio de desenfoque es cero. Cuanto mayor sea el valor, mayor será el desenfoque, lo que significa que la sombra se volverá más clara.
  
  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <p>Blurred Shadow</p>
    ```

    ```css
    p {
      text-shadow: 3px 2px 3px #00ffc3;
    }
    ```

- **Aplicación de múltiples Text Shadows**: El texto puede tener más de una sombra. Las sombras se aplicarán en capas, de adelante hacia atrás, con la primera sombra en la parte superior.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <p>Multiple Shadows</p>
    ```

    ```css
    p {
      text-shadow:
        3px 2px 3px #00ffc3,
        -3px -2px 3px #0077ff,
        5px 4px 3px #dee7e5;
    }
    ```
