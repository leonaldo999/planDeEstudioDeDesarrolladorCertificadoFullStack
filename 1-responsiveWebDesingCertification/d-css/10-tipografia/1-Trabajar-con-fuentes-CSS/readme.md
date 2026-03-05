# Trabajar con fuentes CSS

## Navegación

- [Trabajar con fuentes CSS](#trabajar-con-fuentes-css)
  - [Navegación](#navegación)
  - [Introducción](#introducción)
  - [Tema 1: ¿Cuáles son los fundamentos de la tipografía?](#tema-1-cuáles-son-los-fundamentos-de-la-tipografía)
  - [Cuestionario 1](#cuestionario-1)
  - [Tema 2: ¿Cuáles son algunas de las mejores prácticas para trabajar con tipografía en tus diseños?](#tema-2-cuáles-son-algunas-de-las-mejores-prácticas-para-trabajar-con-tipografía-en-tus-diseños)
  - [Cuestionario 2](#cuestionario-2)
  - [Tema 3: ¿Qué son las familias tipográficas y cómo funcionan?](#tema-3-qué-son-las-familias-tipográficas-y-cómo-funcionan)
  - [## Cuestionario 3](#-cuestionario-3)
  - [Tema 4: ¿Qué son las fuentes seguras para web?](#tema-4-qué-son-las-fuentes-seguras-para-web)
  - [Cuestionario 4](#cuestionario-4)
  - [Tema 5: ¿Qué es la regla `@font-face` y cómo funciona?](#tema-5-qué-es-la-regla-font-face-y-cómo-funciona)
  - [Cuestionario 5](#cuestionario-5)
  - [Tema 6: ¿Cómo se trabaja con fuentes externas como `Font Squirrel` y `Google Fonts`?](#tema-6-cómo-se-trabaja-con-fuentes-externas-como-font-squirrel-y-google-fonts)
  - [Cuestionario 6](#cuestionario-6)
  - [Tema 7: ¿Qué es la propiedad text-shadow y cómo funciona?](#tema-7-qué-es-la-propiedad-text-shadow-y-cómo-funciona)
  - [Cuestionario 7](#cuestionario-7)

---

## Introducción

En este desafío, se te proporcionará un bloque de texto y se te pedirá que apliques estilos de fuente específicos utilizando CSS. Deberás utilizar las propiedades de fuente para cambiar la apariencia del texto según las instrucciones dadas.

---

## Tema 1: ¿Cuáles son los fundamentos de la tipografía?

La tipografía es el arte de elegir las fuentes y el formato adecuados para que el texto resulte atractivo a la vista y fácil de leer. El "Type" se refiere al diseño y la disposición de los caracteres individuales. Al elegir las fuentes adecuadas para su proyecto, puede evocar emociones, establecer jerarquías y reforzar la identidad de su marca.

Comenzaremos hablando de los tipos de letra y las fuentes. Un tipo de letra es el diseño y el estilo general de un conjunto de caracteres, números y símbolos. Es como un plano para una familia de fuentes. Una fuente es una variación específica de un tipo de letra con características específicas, como el tamaño, el grosor, el estilo y la anchura.

Dos ejemplos muy importantes de tipos de letra son `Serif` y `Sans Serif`. El tipo de letra `Serif` tiene un estilo clásico con pequeñas líneas al final de los caracteres. Los tipos de letra `Serif` se utilizan comúnmente para materiales impresos, como libros. Algunos ejemplos son `Times New Roman`, `Georgia` y `Garamond`.

Por el contrario, el tipo de letra `Sans Serif` tiene un aspecto más moderno, sin las pequeñas líneas al final de los caracteres. Los tipos de letra `Sans Serif` se utilizan habitualmente en el diseño digital porque son fáciles de leer en pantalla. Algunos ejemplos son `Helvetica`, `Arial` y `Roboto`. Existen otras clasificaciones de tipos de letra, como `Script`, `Blackletter`, `Monospaced` y `Decorative`.

Hemos mencionado que los tipos de letra son como planos para las fuentes, ¿verdad? Pues bien, las fuentes también se pueden agrupar si comparten un diseño similar. Se pueden combinar diferentes grosores y estilos. Por ejemplo, `Times New Roman` incluye variaciones como `Times New Roman Bold`, `Times New Roman Italic` y `Times New Roman Bold Italic`. Estas variaciones dentro de la misma familia de fuentes suelen incluir:

- Peso: el grosor de los caracteres, incluyendo ligero, regular, negrita y negro.
- Estilo: la inclinación y orientación de los caracteres, como cursiva y oblicua.
- Ancho: el espacio horizontal que ocupan los caracteres, como condensado y expandido.

Genial. Ahora exploremos los elementos fundamentales de la tipografía:

- La línea de base es la línea imaginaria sobre la que descansan la mayoría de los caracteres.
- La altura de las mayúsculas es la altura de las letras mayúsculas, medida desde la línea de base hasta la parte superior.
- La altura x es la altura media de las letras minúsculas, excluyendo las ascendentes y descendentes.
- Las ascendentes son las partes de las letras minúsculas que se extienden por encima de la altura x, como la parte superior de las letras `h`, `b`, `d` y `f`.
- Las descendentes son las partes de las letras minúsculas que se extienden por debajo de la línea base, como las colas de las letras `y`, `g`, `p` y `q`.

También hay conceptos más avanzados, como el `kerning`, el `tracking` y el `interlineado`.

El `kerning` es la forma en que se ajusta el espacio entre pares específicos de caracteres para mejorar su legibilidad y estética. Por ejemplo, reducir el espacio entre las letras A y V.
El `tracking` es la forma en que se ajusta el espacio entre todos los caracteres de un bloque de texto. Es esencialmente la distancia entre los caracteres. Afecta a la densidad y apertura del texto.
El `interlineado` es el espacio vertical entre las líneas de texto. Se mide desde la línea base de una línea hasta la línea base de la siguiente línea.

Es fundamental estar familiarizado con estos conceptos para elegir la fuente adecuada para su proyecto.

La longitud de la línea también puede tener un impacto significativo en la legibilidad. Si el texto es demasiado estrecho, los lectores tendrán que volver a enfocar la vista con demasiada frecuencia. Si el texto es demasiado ancho, pueden experimentar fatiga. Debe encontrar la longitud de línea óptima para una lectura cómoda.

Con la tipografía, también puedes crear una jerarquía visual, lo que ayuda a los lectores a comprender qué partes del texto o de la interfaz de usuario son más importantes. Las fuentes más grandes suelen indicar que el texto es más importante. Poner el texto en negrita también es útil para resaltarlo.

Subrayar el texto o presentarlo en cursiva es útil para resaltar los puntos clave. Proporcionar un espaciado preciso alrededor del texto puede resaltar su importancia. Y el contraste de colores puede llamar la atención de los lectores hacia partes específicas del texto.

Tener conocimientos básicos de tipografía es esencial para diseñar aplicaciones visualmente atractivas. Al comprender las fuentes, el espaciado y la jerarquía, puede crear experiencias visuales que mejoren la legibilidad de su contenido y refuercen la identidad de su marca.

---

## Cuestionario 1

1. **¿Cuál de las siguientes opciones se refiere al diseño y la disposición de los caracteres individuales?**

    - [ ] a) Glyph
    - [x] b) Type //correcto
    - [ ] c) Beak
    - [ ] d) Shoulder

2. **¿Cuál es la diferencia entre un tipo de letra y una fuente?**

    - [ ] a) Un tipo de letra es un estilo específico de una fuente, mientras que una fuente es el diseño general.
    - [x] b) Una fuente es un estilo específico de un tipo de letra, mientras que un tipo de letra es el diseño general. //correcto
    - [ ] c) No hay diferencia entre un tipo de letra y una fuente.
    - [ ] d) Un tipo de letra es una colección de fuentes, mientras que una fuente es un solo carácter.

3. **¿Cuál es la principal diferencia entre las fuentes `serif` y `sans-serif`?**

    - [ ] a) Las fuentes serif son manuscritas, mientras que las fuentes sans-serif son impresas.
    - [x] b) Las fuentes serif tienen pequeñas líneas al final de los caracteres, mientras que las fuentes sans-serif no las tienen. //correcto
    - [ ] c) Las fuentes serif se utilizan para los titulares, mientras que las fuentes sans-serif se utilizan para el cuerpo del texto.
    - [ ] d) Las fuentes serif son más antiguas que las fuentes sans-serif.

[☝️](#trabajar-con-fuentes-css)

---

## Tema 2: ¿Cuáles son algunas de las mejores prácticas para trabajar con tipografía en tus diseños?

La tipografía es el arte y la técnica de organizar los tipos de letra para comunicar de forma eficaz. Implica dar formato al texto y seleccionar las fuentes adecuadas. En esta lección, aprenderás las mejores prácticas para utilizar la tipografía de forma que mejore `la legibilidad`, la `jerarquía` y la `accesibilidad`.

Comencemos por `la legibilidad`. Debes elegir fuentes claras y sencillas para que tus diseños sean fáciles de entender. Esto es especialmente importante para el texto principal de tu sitio web. Los usuarios se sentirán más atraídos por tu contenido si la fuente es fácil de leer. Algunas fuentes que se utilizan con frecuencia para el desarrollo web son `Roboto`, `Open Sans`, `Poppins`, `Lato` y `Barlow`. Pero hay muchas entre las que elegir y seguro que encuentras una que se adapte a tus necesidades.

El texto también debe ser lo suficientemente grande como para que todo el mundo pueda leerlo. Debes intentar que las líneas sean relativamente cortas. El número específico de caracteres por línea depende realmente de su proyecto. Pero mantener las líneas cortas hará que el contenido sea más fácil de leer.

Puede utilizar el tamaño de la fuente para crear una `jerarquía` visual para los títulos, subtítulos, párrafos y otros elementos. Por ejemplo, el título principal de una página web debe tener una fuente más grande, seguido de subtítulos con tamaños de fuente más pequeños. Esto le dará a cada elemento de la `jerarquía` un tamaño de fuente específico que ayudará a los usuarios a navegar visualmente por la estructura.

Debes utilizar dos o tres tipos de letra como máximo para crear una coherencia visual. Utilizar demasiados tipos de letra puede dificultar la lectura del texto y debilitar la identidad de tu marca. Esto también puede afectar a la experiencia del usuario al aumentar el tiempo de carga del sitio web.

Una vez que elijas estas dos o tres fuentes, úsalas de manera consistente en las diferentes páginas y elementos. Estas fuentes deben ser coherentes con el diseño general de tu aplicación web, producto o servicio. También debes utilizar espacios en blanco para crear un equilibrio visual y mejorar la legibilidad.

Por motivos de `accesibilidad`, debes seguir las Pautas de `Accesibilidad al Contenido en la Web`. Estas pautas establecen la relación de contraste recomendada para el texto. Una relación de contraste más alta facilita la lectura del texto, especialmente para las personas con discapacidades visuales.

También debe ofrecer opciones para ajustar el tamaño de la fuente y evitar en la medida de lo posible las fuentes complejas. Como regla general, debe utilizar fuentes sencillas siempre que sea posible. Si su contenido es fácil de leer, los usuarios estarán más dispuestos a interactuar con él. Un último consejo para trabajar con tipografía es asegurarse de que sus fuentes se muestran correctamente en diferentes tamaños de pantalla y dispositivos.

La tipografía es una herramienta poderosa para crear diseños atractivos y experiencias de usuario interesantes. Al comprender los fundamentos de la tipografía y aplicar estas prácticas recomendadas, podrá crear diseños eficaces.

---

## Cuestionario 2

1. **¿Cuál de los siguientes es un factor muy importante para garantizar la legibilidad en la tipografía web?**

    - [ ] a) Utilizar una gran variedad de fuentes.
    - [ ] b) Maximizar el tamaño de la fuente para todos los elementos de texto.
    - [x] c) Lograr un contraste óptimo entre el texto y el fondo. //correcto
    - [ ] d) Alinear el texto al margen izquierdo.

2. **A la hora de elegir fuentes para un sitio web, por lo general se recomienda:**

    - [ ] a) Utilizar tantas fuentes diferentes como sea posible para lograr un mayor interés visual.
    - [x] b) Limitar el número de font families para mejorar la coherencia. //correcto
    - [ ] c) Dar prioridad a las fuentes decorativas sobre la legibilidad.
    - [ ] d) Utilizar solo fuentes con serif para el cuerpo del texto.

3. **¿Cuál de las siguientes opciones describe mejor el concepto de jerarquía visual en tipografía?**

    - [ ] a) Utilizar un solo estilo de fuente en todo el diseño.
    - [x] b) Dar prioridad a la información más importante mediante el tamaño y el estilo de la fuente. //correcto
    - [ ] c) Mantener un espaciado uniforme entre las letras.
    - [ ] d) Asegurarse de que todo el texto esté centrado en la página.

[☝️](#trabajar-con-fuentes-css)

---

## Tema 3: ¿Qué son las familias tipográficas y cómo funcionan?

Una `font family` es un grupo de fuentes que comparten un diseño común. Todas las fuentes que pertenecen a la misma familia se basan en el mismo tipo de letra básico, pero también tienen variaciones en su estilo, grosor y ancho. Se pueden considerar como hermanos que comparten características similares, pero que también tienen algunas diferencias. Por ejemplo, `Arial` es una `font family` que incluye variaciones como `Arial Bold` y `Arial Italic`.

En CSS, puedes establecer la `font family` con la propiedad `font-family`. A continuación se muestra un ejemplo de cómo establecer la fuente del párrafo en `Arial`:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <p id="arial-font">Example paragraph using Arial font.</p>
  <p>Paragraph not using Arial font.</p>
  ```
  
  ```css
  #arial-font {
    font-family: Arial;
  }
  ```

Pero, ¿qué pasa si no se encuentra la `font family`? Puede especificar varias familias tipográficas por orden de prioridad, de mayor a menor, separándolas con comas. Estas fuentes alternativas actuarán como opciones de reserva. En este ejemplo, Arial es la fuente principal y Lato es la fuente alternativa:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <p id="specified-font">Example paragraph using specified fonts.</p>
  <p>Paragraph not using specified fonts.</p>
  ```
  
  ```css
  #specified-font {
    font-family: Arial, Lato;
  }
  ```

El navegador mostrará la primera fuente (Arial) si la encuentra en el dispositivo. Si no es así, se mostrará la segunda fuente (Lato).

También debes saber cómo funciona este proceso entre bastidores. El proceso de selección no se detiene si la primera fuente está disponible. La `font family` se elige carácter por carácter, por lo que si a una fuente le falta un carácter específico, el navegador lo busca en las fuentes de menor prioridad. Interesante, ¿verdad?

En el contexto del desarrollo web, también encontrarás familias de fuentes genéricas. Son muy importantes. Una `font family` genéricas es una fuente predeterminada que los navegadores web mostrarán cuando las fuentes de mayor prioridad no estén disponibles. Para garantizar que el contenido siga siendo legible, el navegador sustituye la fuente original por la fuente más adecuada que encuentra, basándose en la `font family` genéricas especificada. Algunas de las más utilizadas son:

- serif
- sans-serif
- monospace
- cursive
- fantasy

Pero hay más opciones entre las que elegir. En el código siguiente, tenemos tres familias de fuentes alternativas:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <p id="specified-font">Example paragraph using specified fonts.</p>
  <p>Paragraph not using specified fonts.</p>
  ```
  
  ```css
  #specified-font {
    font-family: Arial, Lato, sans-serif;
  }
  ```

Arial tiene la máxima prioridad. Si no se encuentra Arial, el navegador intentará renderizar Lato. Si no se encuentra ninguna de las dos, el navegador utilizará la `font family` sans-serif genérica, seleccionando una fuente con estas características de entre las instaladas en el sistema del usuario.

Siempre debes incluir una `font family` genéricas al final de la lista de `font family`. Ten en cuenta que la fuente genérica puede tener un aspecto diferente al de la fuente que habías previsto originalmente en tu diseño, por lo que siempre es útil comprobar cómo se ven estas fuentes alternativas en diferentes navegadores.

Para que la experiencia del usuario sea lo más coherente posible, también se recomienda utilizar fuentes seguras para la web. Estas `font family` suelen estar instaladas en la mayoría de los dispositivos, por lo que es muy probable que se encuentren y se representen correctamente para la mayoría de los usuarios. Aprenderás más sobre ellas en las próximas lecciones.

Las `font family` son esenciales en el mundo del diseño web. Mediante el uso de la propiedad font-family, puedes transformar instantáneamente el aspecto y la sensación de tu texto.

---

## ## Cuestionario 3

1. **¿Cuál es el objetivo principal de la propiedad CSS `font-family`?**

    - [ ] a) Establecer el color del texto.
    - [ ] b) Controlar el tamaño de la fuente del texto.
    - [x] c) Definir el tipo de letra utilizado para el texto. //correcto
    - [ ] d) Ajustar el interlineado del texto.

2. **¿Cuál de las siguientes es una familia tipográfica genérica común?**

    - [ ] a) `Helvetica`
    - [ ] b) `Times New Roman`
    - [x] c) `Sans-Serif` //correcto
    - [ ] d) `Arial`

3. **¿Cómo se pueden especificar varias familias de fuentes como alternativa en CSS?**

    - [x] a) Separándolas con comas. //correcto
    - [ ] b) Utilizando declaraciones de familia de fuentes anidadas.
    - [ ] c) Utilizando el carácter &.
    - [ ] d) Utilizando el carácter |.

[☝️](#trabajar-con-fuentes-css)

---

## Tema 4: ¿Qué son las fuentes seguras para web?

Las fuentes seguras para web son un subconjunto de fuentes que es muy probable que estén instaladas en una computadora o dispositivo. Son ampliamente compatibles con diferentes sistemas operativos y navegadores web, por lo que es muy probable que se representen y muestren de manera consistente. Veamos cómo funciona esto.

Los navegadores son responsables de interpretar y mostrar las fuentes en un sitio web. Cuando el navegador tiene que representar una fuente, intenta encontrar el archivo de fuente en el sistema del usuario. Pero si no encuentra la fuente, normalmente recurre a una fuente predeterminada del sistema. Esto garantiza que el contenido siga siendo legible, incluso si falta la fuente específica que debería representarse en el sitio web.

Sin embargo, la fuente alternativa seleccionada por el navegador puede tener un aspecto muy diferente al de la fuente que se suponía que debía representarse originalmente. Esto puede tener un impacto crítico en el diseño general y la experiencia del usuario. Para evitarlo, debe utilizar fuentes seguras para la web siempre que sea posible. Tiene dos opciones. Puede utilizarlas como fuentes principales o puede utilizar fuentes personalizadas con una fuente segura para la web como opción alternativa. De esta manera, puede controlar el aspecto del sitio web en caso de que no se encuentre la fuente personalizada.

Veamos algunos ejemplos de fuentes seguras para la web. En una lección anterior, aprendiste que las fuentes sans-serif se utilizan comúnmente para el desarrollo web porque no tienen pequeños «pies» o líneas al final de los caracteres, por lo que son fáciles de leer en pantalla. Algunos ejemplos de fuentes sans-serif seguras para la web son:

- Arial
- Verdana
- Trebuchet MS

Por el contrario, las fuentes serif tienen pequeños "feet" al final de los caracteres, por lo que se utilizan habitualmente en la impresión tradicional. Pero si alguna vez necesitas utilizarlas para el desarrollo web, las fuentes serif seguras para la web incluyen:

- Times New Roman
- Georgia

Al utilizar fuentes seguras para web, puedes asegurarte de que tu diseño se vea consistente en todos los dispositivos y plataformas. También pueden mejorar la accesibilidad para los usuarios con discapacidades visuales, ya que son sencillas y fáciles de leer. Por último, las fuentes seguras para web pueden reducir el tiempo de carga de la página, ya que no es necesario descargarlas si ya están instaladas.

Ahora que ya sabe qué son las fuentes seguras para web, puede empezar a utilizarlas y asignarlas como alternativas para crear experiencias de usuario fiables en todos los navegadores y plataformas.

---

## Cuestionario 4

1. **¿Cuál de las siguientes es una característica clave de las fuentes seguras para la web?**

    - [ ] a) Son difíciles de leer.
    - [ ] b) Están diseñadas para tipos específicos de contenido.
    - [x] c) Son ampliamente compatibles con diferentes plataformas y navegadores. //correcto
    - [ ] d) Solo están disponibles en estilos serif.

2. **¿Cuál de las siguientes no es una fuente segura para la web?**

    - [ ] a) `Arial`
    - [ ] b) `Verdana`
    - [ ] c) `Georgia`
    - [x] d) `Dancing Script` //correcto

3. **¿Cuándo son especialmente útiles las fuentes seguras para web?**

    - [ ] a) Para diseños web complejos y visualmente exigentes.
    - [ ] b) Cuando una fuente personalizada específica es esencial para fines de marca.
    - [x] c) Para el diseño web básico y cuando la prioridad es una representación coherente. //correcto
    - [ ] d) Para crear fuentes personalizadas.

[☝️](#trabajar-con-fuentes-css)

---

## Tema 5: ¿Qué es la regla `@font-face` y cómo funciona?

Antes de profundizar en el tema, debes saber qué es una regla en CSS. Las reglas son instrucciones que se proporcionan al navegador. Se pueden utilizar para definir diversos aspectos de la hoja de estilos, como consultas de medios, fotogramas clave, tipos de letra y mucho más. Aprenderás más sobre conceptos como consultas de medios y fotogramas clave en lecciones futuras. En esta ocasión, aprenderás sobre la regla `@font-face`.

Con `@font-face`, puedes definir una fuente personalizada especificando el archivo de fuente, el formato y otras propiedades importantes, como el peso y el estilo. Esta es la sintaxis básica. Puedes ver `@font-face` seguido de un bloque entre llaves:

- **Codigo Ejemplo**
  
  ```css
  @font-face {
    /* Descriptors */
  }
  ```

Dentro de las llaves, deberá incluir descriptores para personalizar su tipo de letra. Veamos algunos de los más utilizados. El descriptor `font-family` especifica el nombre que utilizará en toda la hoja de estilos para referirse a ese tipo de letra. Por ejemplo, supongamos que define esta `@font-face rule`. Tiene definido el descriptor `font-family` y su valor es `MyCustomFont`:

- **Codigo Ejemplo**
  
  ```css
  @font-face {
    font-family: "MyCustomFont";
  }
  ```

En ese caso, tendrías que utilizar ese nombre en tu hoja de estilos siempre que quieras asignar esa familia de fuentes personalizada a todos los elementos que coincidan con un selector CSS. Por ejemplo, lo utilizarías como valor de `font-family`:

- **Codigo Ejemplo**
  
  ```css
  body { 
    font-family: "MyCustomFont"; 
  }
  ```

Pero para que la regla `@font-face` sea válida, también es necesario especificar el `src`. Este contiene referencias a los recursos de fuentes. Básicamente, es una lista de referencias externas o nombres de fuentes instaladas localmente separados por comas. También puede incluir indicaciones sobre el formato y la tecnología de los recursos de fuentes.

En el código siguiente, se define el `src`. El valor es una lista de URL separadas por comas y colocadas en líneas separadas para mejorar la legibilidad:

- **Codigo Ejemplo**
  
  ```css
  @font-face {
    font-family: "MyCustomFont"; 
    src: url("path/to/font.woff2"),
      url("path/to/font.woff"),
      url("path/to/font.otf");
  }
  ```

Puede llamar a la función `url()` para incluir un archivo en su hoja de estilos. En este caso, estamos incluyendo los archivos de fuentes. Deberá escribir la ruta del archivo entre paréntesis y comillas, incluyendo la extensión del archivo. Para mejorar la legibilidad, puede escribir cada recurso en una línea diferente, pero el último debe terminar con un punto y coma.

Para cada recurso de fuente, también puedes especificar el formato. Esto es opcional. Es una pista para el navegador sobre el formato de la fuente. Si se omite el formato, el recurso se descargará y el formato se detectará después de la descarga. Si el formato no es válido, el recurso no se descargará.

Los formatos de fuente posibles incluyen `collection`, `embedded-opentype`, `opentype`, `svg`, `truetype`, `woff` y `woff2`.

A continuación se muestra un ejemplo con formatos de fuente. Observe cómo escribimos el formato específico entre paréntesis y comillas:

- **Codigo Ejemplo**
  
  ```css
  @font-face {
    font-family: "MyCustomFont"; 
    src: url("path/to/font.woff2") format("woff2"),
      url("path/to/font.otf") format("opentype"),
      url("path/to/font.woff") format("woff");
  }
  ```

En este ejemplo, puede ver que estamos especificando el formato `WOFF2`, el formato `OpenType` y el formato `WOFF`.

`WOFF` significa `Web Open Font Format` (formato de fuente abierto para web). La diferencia entre `WOFF` y `WOFF2` es el algoritmo utilizado para comprimir los datos. `OpenType` es un formato para fuentes informáticas escalables desarrollado por Microsoft y Adobe que permite a los usuarios acceder a funciones adicionales en una fuente. Se utiliza ampliamente en los principales sistemas operativos.

Además de especificar el formato, también se puede especificar la tecnología del recurso de fuente. Esto también es opcional. A continuación se muestra un ejemplo en el que especificamos la tecnología del segundo recurso de fuente.

- **Codigo Ejemplo**
  
  ```css
  @font-face {
    font-family: "MyCustomFont"; 
    src: url("path/to/font.woff2") format("woff2"),
      url("path/to/font.otf") format("opentype") tech(color-COLRv1),
      url("path/to/font.woff") format("woff");
  }
  ```

Estos son los fundamentos de la regla @font-face. Con esta regla, puedes especificar el archivo de fuente para definir fuentes personalizadas para tus diseños únicos.

---

## Cuestionario 5

1. **¿Cuál es el objetivo principal de la regla `@font-face` en CSS?**

    - [ ] a) Definir el color del texto.
    - [ ] b) Controlar el tamaño de la fuente del texto.
    - [x] c) Definir fuentes personalizadas. //correcto
    - [ ] d) Ajustar el interlineado del texto.

2. **¿Cuál de las siguientes propiedades se requiere dentro de la regla `@font-face` para especificar el archivo de fuente?**

    - [ ] a) `font-name`
    - [x] b) `src` //correcto
    - [ ] c) `font-weight`
    - [ ] d) `font-style`

3. **¿Cuál es la principal ventaja de utilizar fuentes personalizadas definidas con `@font-face` en comparación con utilizar únicamente fuentes seguras para web?**

    - [ ] a) Mayor compatibilidad con los navegadores.
    - [x] b) Opciones mejoradas de personalización y branding. //correcto
    - [ ] c) Tiempos de carga de página más rápidos.
    - [ ] d) Gestión de fuentes simplificada.

[☝️](#trabajar-con-fuentes-css)

---

## Tema 6: ¿Cómo se trabaja con fuentes externas como `Font Squirrel` y `Google Fonts`?

Una fuente externa es un archivo de fuente que no está incluido directamente en los archivos de tu proyecto. Por lo general, se alojan en un servidor independiente. Un servidor es una computadora que proporciona datos o servicios a otras computadoras a través de una red. Aprenderás más sobre los servidores en futuras lecciones. Las fuentes externas te ofrecen más flexibilidad, ya que puedes utilizar fuentes personalizadas que pueden no estar instaladas en el dispositivo del usuario.

`Google Fonts` y `Font Squirrel` son recursos en línea muy populares para buscar y utilizar fuentes gratuitas para el desarrollo web. Puedes incorporarlas a tus proyectos muy fácilmente.

Comencemos con `Google Fonts`. Se trata de un servicio de Google que ofrece una colección de fuentes, muchas de las cuales están diseñadas específicamente para el desarrollo web. En la interfaz de usuario de `Google Fonts`, puedes ver muchos elementos diferentes. Repasemos uno por uno. En la barra lateral izquierda, encontrarás:

- Una sección para ver, buscar y filtrar fuentes.
- Una sección especial sobre Noto, una colección de fuentes de alta calidad con diferentes grosores, anchuras y estilos, perfectas para comunicarse en más de 1000 idiomas y más de 150 sistemas de escritura.
- Una sección donde puedes buscar y descargar íconos para tus proyectos web.
- Una sección donde puedes aprender más sobre las fuentes y sus mejores prácticas, seguida de preguntas frecuentes.

Para agregar una fuente de Google a tu sitio web, debes ir a la primera sección (Fuentes). Puedes personalizar el texto de vista previa en la barra lateral izquierda, donde dice "Preview." Solo escribe el texto que te gustaría ver y se actualizará automáticamente. Esto es útil para obtener una vista previa de la fuente con el texto que ya tienes en mente para tu sitio web. También puedes ajustar el tamaño de la fuente y filtrar las fuentes según sus características.

Para obtener más información sobre una fuente, solo tienes que hacer clic en ella y verás información importante sobre la fuente, como quién la diseñó, el texto de vista previa y los diferentes estilos, como ligero, normal, medio, negrita y negro. Si haces clic en las opciones de la parte superior, puedes ir al probador de tipos, ver los glifos individuales y obtener más información sobre la fuente y su licencia.

Puede personalizar el tamaño de la fuente del texto de vista previa con el control deslizante azul situado junto al campo donde puede introducir el texto de vista previa. Cuando esté listo para añadir la fuente a su proyecto, haga clic en el botón azul «Obtener fuente» situado en la parte superior. Se le redirigirá a una página de resumen donde verá las fuentes que ha seleccionado actualmente. Puede seleccionar varias fuentes al mismo tiempo.

A continuación, debes elegir si deseas descargar los archivos de fuentes para añadirlos a tu proyecto como archivos locales o si deseas utilizarlos como fuentes externas y descargarlos de los servidores de Google cuando un usuario entre en tu sitio web. Haz clic en «Descargar todo» si deseas descargarlos, pero si prefieres utilizarlos como fuentes externas en los servidores de Google, haz clic en «Obtener código de inserción». Si haces clic en «Obtener código de inserción», verás las instrucciones que debes seguir para añadir estas fuentes externas a tu proyecto.

Para los proyectos de desarrollo web, tienes dos opciones. Puedes utilizar un elemento de `link` o `@import`. Si eliges la opción del elemento de `link`, puedes copiar y pegar el fragmento de código HTML y las reglas CSS para añadirlos a tu proyecto. Debes incrustar el código en el elemento head de tu archivo HTML y añadir las reglas CSS que se ajusten a tus necesidades.

Aquí tienes un ejemplo del uso de todos los estilos Roboto:

- **Codigo Ejemplo**
  
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">

  <p class="roboto-thin">roboto-thin</p>
  <p class="roboto-light">roboto-light</p>
  <p class="roboto-regular">roboto-regular</p>
  <p class="roboto-medium">roboto-medium</p>
  <p class="roboto-bold">roboto-bold</p>
  <p class="roboto-black">roboto-black</p>

  <p class="roboto-thin-italic">roboto-thin-italic</p>
  <p class="roboto-light-italic">roboto-light-italic</p>
  <p class="roboto-regular-italic">roboto-regular-italic</p>
  <p class="roboto-medium-italic">roboto-medium-italic</p>
  <p class="roboto-bold-italic">roboto-bold-italic</p>
  <p class="roboto-black-italic">roboto-black-italic</p>
  ```
  
  ```css
  .roboto-thin {
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    font-style: normal;
  }
  
  .roboto-light {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: normal;
  }
  
  .roboto-regular {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  
  .roboto-medium {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-style: normal;
  }
  
  .roboto-bold {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-style: normal;
  }
  
  .roboto-black {
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-style: normal;
  }
  
  .roboto-thin-italic {
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    font-style: italic;
  }
  
  .roboto-light-italic {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: italic;
  }
  
  .roboto-regular-italic {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: italic;
  }
  
  .roboto-medium-italic {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-style: italic;
  }
  
  .roboto-bold-italic {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-style: italic;
  }
  
  .roboto-black-italic {
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-style: italic;
  }
  ```

Hay una regla CSS para cada estilo de fuente. Cada regla asigna las fuentes personalizadas con fuentes alternativas en caso de que las fuentes personalizadas no se carguen correctamente.

Si eliges la opción `@import`, tendrás que añadir esa regla a tu archivo CSS. Aquí tienes un ejemplo:

- **Codigo Ejemplo**
  
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  ```

Las reglas CSS son exactamente las mismas.

Si solo quieres incluir estilos de fuente específicos, también tienes la opción de eliminarlos de estos fragmentos. Los fragmentos HTML y CSS se actualizarán automáticamente.

Y esto es `Google Fonts`. Es una de las opciones más populares para encontrar fuentes gratuitas y de código abierto para proyectos de desarrollo web.

Otra gran opción es `Font Squirrel`, donde puedes encontrar y descargar las fuentes personalizadas que imaginas para tu diseño. Si buscas una fuente y haces clic en un resultado, verás más detalles sobre la fuente, incluyendo muestras, prueba, glifos y kit de fuentes web. También puedes ver muestras de los diferentes estilos y variaciones de la fuente, como fina, ligera, media, negrita y negra.

Una vez que hayas decidido la fuente que quieres utilizar en tu proyecto, ve a la pestaña "Webfont Kit". Aquí puedes comprobar si la licencia de la fuente te permite utilizarla en incrustaciones CSS `@font-face`. También puedes elegir el subconjunto y el formato.

Al hacer clic en el botón "Download @font-face Kit" , se descargará un archivo comprimido (zip). Al descomprimirlo, encontrará una carpeta llamada "web fonts", la licencia en forma de archivo de texto y un archivo HTML con instrucciones sobre cómo utilizar las fuentes web. La carpeta "web fonts" contiene todos los archivos de fuentes que necesita para su proyecto. Los encontrará agrupados en carpetas específicas para los diferentes estilos de fuentes.

Si abre el archivo HTML en un navegador, encontrará instrucciones sobre cómo añadir las fuentes a su proyecto, cómo incluirlas en la hoja de estilos con la declaración `@font-face` y cómo utilizarlas en las reglas CSS.

Así es como puede agregar fuentes personalizadas de `Font Squirrel` a su proyecto. También puede alojarlas en un servidor independiente y utilizarlas como fuentes externas. Las fuentes externas son muy útiles para personalizar el aspecto y el diseño general de su sitio web. Pueden hacer que su sitio web sea realmente único.

Sin embargo, también debe tener en cuenta que el uso de varias fuentes externas puede aumentar el tiempo de carga del sitio web, lo que afecta a su rendimiento general. Siempre debe esforzarse por encontrar un equilibrio entre el estilo y la eficiencia.

---

## Cuestionario 6

1. **¿Cuál es la principal ventaja de utilizar fuentes externas de servicios como `Font Squirrel` o `Google Fonts`?**

    - [ ] a) Reducción del tamaño de los archivos de fuentes.
    - [ ] b) Mayor velocidad de renderización de fuentes.
    - [x] c) Mayor selección y variedad de fuentes. //correcto
    - [ ] d) Mejora de la compatibilidad con los navegadores.

2. **¿Cuál es la posible desventaja de utilizar varias fuentes externas?**

    - [x] a) Aumento del tiempo de carga del sitio web. //correcto
    - [ ] b) Mayor probabilidad de que se produzcan errores.
    - [ ] c) Opciones de personalización limitadas.
    - [ ] d) Mayor compatibilidad con los navegadores.

3. **¿Cuál es la importancia de proporcionar fuentes alternativas cuando se utilizan fuentes externas?**

    - [ ] a) Para crear un diseño más atractivo visualmente.
    - [ ] b) Para mejorar el rendimiento de la representación de fuentes.
    - [x] c) Para mostrar el texto correctamente, incluso si la fuente externa no se carga correctamente. //correcto
    - [ ] d) Tiempos de carga más rápidos.

[☝️](#trabajar-con-fuentes-css)

---

## Tema 7: ¿Qué es la propiedad text-shadow y cómo funciona?

CSS no aplica sombras al texto de forma predeterminada. Este es un ejemplo de un párrafo sin sombras. Pero si necesitas añadir sombras, puedes utilizar la propiedad text-shadow.

- **Codigo Ejemplo**
  
  ```css
  text-shadow: /* Values */
  ```

En CSS, puedes describir una sombra mediante una combinación de su desplazamiento `X`, desplazamiento `Y`, radio de desenfoque y color. En primer lugar, debes especificar el desplazamiento `X` e `Y`, que representan la distancia horizontal y vertical de la sombra con respecto al texto, respectivamente. Estos valores son obligatorios.

A continuación se muestra un ejemplo de cómo aplicar un desplazamiento `X` e `Y` a una sombra. Aplicamos la propiedad `text-shadow` con un _desplazamiento x_ de `3px` y un _desplazamiento y_ de `2px`:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <p>Hello, World!</p>
  ```

  ```css
  p {
    text-shadow: 3px 2px;
  }
  ```

En el navegador, el texto y la sombra tendrán un aspecto similar, pero también podemos personalizar el color de la sombra especificando el valor antes o después del desplazamiento. Vamos a establecer el color de la sombra. Aquí utilizaremos un color hexadecimal, pero puedes utilizar cualquier formato de color válido.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <p>Hello, World!</p>
  ```

  ```css
  p {
    text-shadow: 3px 2px #00ffc3;
  }
  ```

Estamos escribiendo el color después del desplazamiento, pero también puedes escribir el color antes del desplazamiento si lo prefieres. Es equivalente:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <p>Hello, World!</p>
  ```

  ```css
  p {
    text-shadow: #00ffc3 3px 2px;
  }
  ```

En el navegador, la sombra tendrá un color específico, por lo que podremos distinguirla fácilmente del texto. Ahora que podemos diferenciar la sombra del texto, también es importante ver cómo los valores positivos y negativos afectan al desplazamiento de la sombra. Los valores positivos del desplazamiento `X` y del desplazamiento `Y` moverán la sombra hacia la derecha y hacia abajo, respectivamente, mientras que los valores negativos la moverán hacia la izquierda y hacia arriba. A continuación se muestra un ejemplo que utiliza valores negativos:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <p>Hello, World!</p>
  ```

  ```css
  p {
    text-shadow: -3px -2px #00ffc3;
  }
  ```

Ahora la sombra se moverá hacia la izquierda y hacia arriba en relación con el texto. Genial. Pero la sombra no se ve muy bien, porque se ve exactamente igual que el texto original, pero colocada detrás de él. Para que se vea mejor, necesitamos agregar un tercer valor, el radio de desenfoque. Este valor es opcional, pero hace que la sombra se vea mucho más suave y sutil. El valor predeterminado del radio de desenfoque es cero. Cuanto mayor sea el valor, mayor será el desenfoque, lo que significa que la sombra se vuelve más clara.

Aquí, estamos estableciendo el radio de desenfoque en `3px` y volvemos a valores positivos para el desplazamiento:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <p>Hello, World!</p>
  ```

  ```css
  p {
    text-shadow: 3px 2px 3px #00ffc3;
  }
  ```

Ahora empieza a parecer una sombra. Es más borrosa y sutil, por lo que podemos centrarnos en el texto principal mientras que la sombra añade algo de estilo al fondo. A partir de aquí, podemos ajustar un poco los valores hasta encontrar una combinación de desplazamiento, color y radio de desenfoque que se adapte a nuestras necesidades.

También es útil saber que el texto puede tener más de una sombra. Solo tienes que escribirlas en la misma propiedad `text-shadow` separadas por comas. Se aplicarán en capas, de delante hacia atrás, con la primera sombra en la parte superior.

Aquí tienes un ejemplo de un párrafo con tres sombras aplicadas en capas. Fíjate en que todas estas sombras se definen en la misma propiedad `text-shadow` y se separan por comas:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <p>Hello, World!</p>
  ```

  ```css
  p {
    text-shadow: 
    3px 2px 3px #00ffc3, 
    -3px -2px 3px #0077ff, 
    5px 4px 3px #dee7e5;
  }
  ```

`text-shadow` es una potente propiedad CSS que permite resaltar el texto. También puede mejorar el diseño general de su aplicación web. Al elegir el desplazamiento, el desenfoque y el color, puede crear una amplia gama de efectos de sombra.

---

## Cuestionario 7

1. **¿Cuál es el objetivo principal de la propiedad CSS `text-shadow`?**

    - [ ] a) Ajustar el tamaño de la fuente del texto.
    - [ ] b) Cambiar el color del texto.
    - [x] c) Crear un efecto de sombra para el texto. //correcto
    - [ ] d) Controlar el espaciado entre las líneas de texto.

2. **¿Cómo se puede crear una sombra de texto negra con un desplazamiento horizontal hacia la derecha y un radio de desenfoque de 5px?**

    - [ ] a) `text-shadow: 5px 0px 0px black;`
    - [x] b) `text-shadow: 5px 0px 5px black;` //correcto
    - [ ] c) `text-shadow: 5px 5px 0px black;`
    - [ ] d) `text-shadow: 0px 5px 0px black;`

3. **Cómo se puede crear un efecto de sombra de texto con varias capas?**

    - [x] a) Definiendo varias sombras en la propiedad text-shadow. //correcto
    - [ ] b) Anidando elementos unos dentro de otros.
    - [ ] c) Utilizando la propiedad `filter`.
    - [ ] d) Aplicando una imagen de fondo.

[☝️](#trabajar-con-fuentes-css)

---
