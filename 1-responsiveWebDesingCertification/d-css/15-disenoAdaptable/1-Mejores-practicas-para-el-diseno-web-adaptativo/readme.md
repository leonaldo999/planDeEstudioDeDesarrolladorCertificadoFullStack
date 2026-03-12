# Mejores prácticas para el diseño web adaptativo

## Navegación

- [Mejores prácticas para el diseño web adaptativo](#mejores-prácticas-para-el-diseño-web-adaptativo)
  - [Navegación](#navegación)
  - [Tema 1: ¿Qué es el diseño web adaptativo y cuál es su relación con herramientas como CSS `Grid` y `Flexbox`?](#tema-1-qué-es-el-diseño-web-adaptativo-y-cuál-es-su-relación-con-herramientas-como-css-grid-y-flexbox)
  - [Cuestionario 1](#cuestionario-1)
  - [Tema 2: ¿Cómo funcionan las consultas de medios y cuáles son algunos de los tipos y características más comunes?](#tema-2-cómo-funcionan-las-consultas-de-medios-y-cuáles-son-algunos-de-los-tipos-y-características-más-comunes)
  - [Cuestionario 2](#cuestionario-2)
  - [Tema 3: ¿Qué son los `Media Breakpoints` y cuáles son los `Breakpoints` más comunes en el diseño moderno?](#tema-3-qué-son-los-media-breakpoints-y-cuáles-son-los-breakpoints-más-comunes-en-el-diseño-moderno)
  - [Cuestionario 3](#cuestionario-3)
  - [Tema 4: ¿Qué es el enfoque `mobile-first` en el diseño web adaptativo?](#tema-4-qué-es-el-enfoque-mobile-first-en-el-diseño-web-adaptativo)
  - [Cuestionario 4](#cuestionario-4)

---

El diseño web adaptativo es una técnica de diseño que permite que un sitio web se adapte a diferentes tamaños de pantalla y dispositivos. Para lograr esto, es importante seguir algunas mejores prácticas:

---

## Tema 1: ¿Qué es el diseño web adaptativo y cuál es su relación con herramientas como CSS `Grid` y `Flexbox`?

El `Responsive web design` es un enfoque del desarrollo web cuyo objetivo es crear sitios web que ofrezcan una experiencia de visualización e interacción óptima en una amplia gama de dispositivos, desde computadoras de escritorio hasta teléfonos móviles.

El principio fundamental del diseño adaptativo es la adaptabilidad, es decir, la capacidad de un sitio web para ajustar su diseño y contenido en función del tamaño de la pantalla y las capacidades del dispositivo en el que se visualiza.

El diseño adaptativo suele basarse en tres componentes principales: _cuadrículas fluidas_, _imágenes flexibles_ y _consultas de medios_:

- Las cuadrículas fluidas utilizan unidades relativas, como porcentajes, en lugar de unidades fijas, como píxeles, lo que permite que el contenido cambie de tamaño y se reajuste en función del tamaño de la pantalla.

- Las imágenes flexibles se configuran para cambiar de tamaño dentro de los elementos que las contienen, lo que garantiza que no se salgan de sus contenedores en pantallas más pequeñas.

- Además, las consultas de medios permiten a los desarrolladores aplicar diferentes estilos en función de las características del dispositivo, principalmente el ancho de la ventana gráfica. Aprenderás más sobre las consultas de medios en futuras lecciones.

La relación entre el diseño web adaptativo y herramientas como CSS `Grid` y `Flexbox` es simbiótica. Mientras que el diseño adaptativo es un concepto o enfoque, CSS `Grid` y `Flexbox` son herramientas prácticas que facilitan y hacen más eficiente la implementación de diseños adaptativos.

En lecciones anteriores aprendiste a trabajar con `Flexbox` y en lecciones futuras aprenderás a trabajar con CSS `Grid`. Pero, por ahora, aquí tienes una breve introducción a CSS `Grid`.

CSS `Grid` es un sistema de diseño bidimensional que permite disposiciones más complejas. Es excelente para crear diseños de página generales, así como diseños de componentes más pequeños.

Aquí tienes un ejemplo de cómo se puede utilizar CSS `Grid` de forma adaptativa:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="grid-container">
    <div class="grid-item">Item 1</div>
    <div class="grid-item">Item 2</div>
    <div class="grid-item">Item 3</div>
  </div>
  ```
  
  ```css
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  @media (min-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  @media (min-width: 1024px) {
    .grid-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  ```

En este ejemplo, la cuadrícula comienza con una sola columna en pantallas pequeñas, cambia a dos columnas en pantallas medianas y luego a tres columnas en pantallas más grandes. Esto demuestra cómo Grid puede crear diseños adaptables que se ajustan a diferentes tamaños de pantalla.

Tanto Flexbox como Grid ofrecen ventajas significativas sobre los métodos de diseño más antiguos, como los diseños flotantes o basados en tablas. Proporcionan más flexibilidad y control, requieren menos código y están diseñados teniendo en cuenta la capacidad de respuesta. Permiten a los desarrolladores crear diseños complejos y adaptables con relativa facilidad, lo que los convierte en herramientas muy valiosas para implementar el diseño web adaptable.

Cabe señalar que Flexbox y Grid se utilizan a menudo juntos en diseños adaptables. Flexbox se utiliza normalmente para componentes y diseños unidimensionales, mientras que Grid se utiliza para la estructura general de la página y los diseños bidimensionales. La elección entre uno u otro depende a menudo de las necesidades específicas de diseño.

Además de Flexbox y Grid, otras características de CSS desempeñan un papel importante en el diseño adaptable.

La función `calc()`, por ejemplo, permite mezclar unidades y realizar cálculos, lo que puede resultar muy útil para crear diseños flexibles.

Las imágenes adaptables son otro aspecto crucial del diseño web adaptable. El atributo `srcset` y el elemento `picture` en HTML5 permiten servir diferentes archivos de imagen en función de las capacidades del dispositivo, lo que garantiza que los usuarios no descarguen archivos de imagen innecesariamente grandes en dispositivos con pantallas más pequeñas o menor resolución.

En conclusión, el diseño web adaptable es un enfoque que tiene como objetivo crear sitios web que funcionen bien en cualquier dispositivo.

Aunque se trata más de una filosofía de diseño que de una tecnología específica, se basa en gran medida en características de CSS como las consultas de medios, y se ve facilitado en gran medida por herramientas de diseño modernas como Flexbox y Grid. Estas herramientas proporcionan la flexibilidad y el control necesarios para crear diseños verdaderamente adaptables, lo que permite que los sitios web se adapten perfectamente a la variedad cada vez mayor de dispositivos utilizados para acceder a la web.

---

## Cuestionario 1

1. **¿Cuál es el objetivo principal del diseño web adaptativo?**

    - [ ] a) Crear versiones separadas de un sitio web para computadoras de escritorio y dispositivos móviles.
    - [x] b) Garantizar que los sitios web se adapten a diferentes tamaños de pantalla y dispositivos. //correcto
    - [ ] c) Aumentar la velocidad de carga de los sitios web en dispositivos móviles.
    - [ ] d) Simplificar el proceso de diseño para los desarrolladores web.

2. **¿Cómo contribuye CSS Flexbox al diseño web adaptativo?**

    - [ ] a) Proporcionando una forma de crear diseños de cuadrículas complejos.
    - [x] b) Permitiendo la fácil manipulación de diseños unidimensionales. //correcto
    - [ ] c) Redimensionando automáticamente las imágenes para diferentes tamaños de pantalla.
    - [ ] d) Habilitando el uso de consultas de medios.

3. **En el diseño web adaptativo, ¿cuál es la principal ventaja de utilizar CSS Grid frente a los métodos de diseño más antiguos?**

    - [ ] a) Permite crear hojas de estilo para impresión.
    - [x] b) Ofrece mayor flexibilidad a la hora de crear diseños bidimensionales complejos. //correcto
    - [ ] c) Ajusta automáticamente el tamaño de la fuente para diferentes dispositivos.
    - [ ] d) Reduce la necesidad de utilizar JavaScript en los diseños adaptativos.

[☝️](#mejores-prácticas-para-el-diseño-web-adaptativo)

---

## Tema 2: ¿Cómo funcionan las consultas de medios y cuáles son algunos de los tipos y características más comunes?

Las consultas de medios son un componente fundamental del diseño web adaptativo, ya que permiten a los desarrolladores aplicar diferentes estilos en función de las características del dispositivo o navegador del usuario. Ofrecen una forma de adaptar la presentación del contenido a una variedad de dispositivos sin cambiar el contenido en sí.

En esencia, una consulta de medios consiste en un tipo de medio y una o más expresiones que comprueban condiciones específicas. Si estas condiciones se cumplen, se aplican los estilos correspondientes. Este mecanismo permite crear diseños adaptables que se ajustan a diferentes tamaños de pantalla, resoluciones y capacidades de los dispositivos.

La sintaxis básica de una consulta de medios en CSS es la siguiente:

- **Codigo Ejemplo**

  ```css
  @media mediatype and (feature: value) {
    /* CSS rules go here */
  }
  ```

En esta estructura, mediatype especifica el tipo de medio al que se aplica la consulta, y el par característica:valor define la condición que debe cumplirse para que se apliquen los estilos.

Los tipos de medios describen la categoría general de un dispositivo. Veamos los tipos de medios más utilizados:

- `all` es adecuado para todos los dispositivos. Esta es la opción predeterminada si no se especifica ningún tipo de medio.

- `print` está pensado para material paginado y documentos que se visualizan en una pantalla en modo de vista previa de impresión.

- `screen` está pensado principalmente para pantallas.

En el pasado, había más tipos de medios, como `handheld` y `tv`, pero la mayoría de ellos han quedado obsoletos en favor del uso de características que permiten orientar los dispositivos con mayor precisión.

Las características multimedia describen características específicas del agente de usuario, el dispositivo de salida o el entorno. Veamos algunas de las características multimedia más utilizadas. La `width` y el `height` se refieren a la anchura y la altura de la ventana gráfica, y suelen utilizarse con los prefijos `min-` o `max-` para consultas de rango. Veamos un ejemplo:

- **Codigo Ejemplo**

  ```css
  @media screen and (min-width: 768px) {
    /* Styles for screens at least 768px wide */
  }
  ```

La `aspect-ratio` describe la relación entre el ancho y el alto de la ventana gráfica. A continuación se muestra un ejemplo:

- **Codigo Ejemplo**

  ```css
  @media screen and (aspect-ratio: 16/9) {
    /* Styles for screens with a 16:9 aspect ratio */
  }
  ```

La función de `orientation` indica si el dispositivo está en orientación horizontal o vertical. A continuación se muestra un ejemplo:

- **Codigo Ejemplo**

  ```css
  @media screen and (orientation: landscape) {
    /* Styles for landscape orientation */
  }
  ````

La función de `resolution` describe la resolución del dispositivo de salida en puntos por pulgada (ppp) o puntos por centímetro (ppc). A continuación se muestra un ejemplo:

- **Codigo Ejemplo**

  ```css
  @media screen and (min-resolution: 300dpi) {
    /* Styles for high-resolution screens */
  }
  ````

La función de `hover` comprueba si el mecanismo de entrada principal puede desplazarse sobre los elementos. A continuación se muestra un ejemplo:

- **Codigo Ejemplo**

  ```css
  @media (hover: hover) {
    /* Styles for devices that support hover */
  }
  ```

La función `prefers-color-scheme` detecta si el usuario ha solicitado un tema de colores claros u oscuros. A continuación se muestra un ejemplo:

- **Codigo Ejemplo**

  ```css
  @media (prefers-color-scheme: dark) {
    /* Styles for dark mode */
  }
  ```

Las consultas de medios también pueden combinar varias condiciones utilizando operadores lógicos. El operador `and` se utiliza para combinar varias características de medios, mientras que `not` y `only` solo se pueden utilizar para negar o aislar consultas de medios. A continuación se muestra un ejemplo que combina varias características:

- **Codigo Ejemplo**

  ```css
  @media screen and (min-width: 768px) and (orientation: landscape) {
    /* Styles for landscape screens at least 768px wide */
  }
  ```

También es posible seleccionar varias consultas en una lista separada por comas, que funciona como un operador "or":

- **Codigo Ejemplo**

  ```css
  @media screen and (min-width: 768px), print {
    /* Styles for screens at least 768px wide OR for print */
  }
  ```

Al trabajar con consultas de medios, es importante tener en cuenta la cascada. Las consultas de medios no aumentan la especificidad, solo agrupan reglas condicionales. Las reglas normales de la cascada CSS siguen aplicándose dentro de cada consulta de medios.

En la práctica, las consultas de medios se utilizan a menudo para crear diseños adaptables. Un patrón común es definir un estilo base para dispositivos móviles y luego utilizar consultas de medios para mejorar el diseño para pantallas más grandes:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css">

  <div class="container">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
    <p>Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.</p>
    <p>Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
  </div>
  ```

  ```css
  /* Base styles for mobile */
  .container {
    width: 100%;
    padding: 15px;
  }
  
  /* Styles for tablets */
  @media screen and (min-width: 768px) {
    .container {
      width: 750px;
      margin: 0 auto;
    }
  }
  
  /* Styles for desktops */
  @media screen and (min-width: 1024px) {
    .container {
      width: 960px;
    }
  }
  ```

Este enfoque, conocido como diseño responsivo "mobile-first", garantiza que los estilos básicos sean adecuados para dispositivos móviles, con mejoras añadidas para pantallas más grandes.

En conclusión, las consultas de medios son una poderosa herramienta en CSS que permite la creación de diseños web adaptables y responsivos. Al comprender cómo utilizar los diferentes tipos y características de los medios, los desarrolladores pueden crear sitios web que proporcionen una experiencia de usuario óptima en una amplia gama de dispositivos y preferencias. A medida que las tecnologías web siguen evolucionando, mantenerse al día con las nuevas características de los medios puede ayudar a crear diseños responsivos más matizados y fáciles de usar.

---

## Cuestionario 2

1. **¿Cuál de los siguientes NO es un tipo de medio comúnmente utilizado en CSS moderno?**

    - [ ] a) `all`
    - [ ] b) `print`
    - [ ] c) `screen`
    - [x] d) `handheld` //correcto

2. **¿Qué comprueba la función de orientación de los medios?**

    - [ ] a) La orientación física del dispositivo.
    - [x] b) Si la ventana gráfica es más ancha que alta, o viceversa. //correcto
    - [ ] c) La dirección del texto en la página.
    - [ ] d) La orientación geográfica del usuario.

3. **En una consulta de medios, ¿cuál es el propósito de utilizar el operador `and`?**

    - [ ] a) Combinar varias propiedades CSS.
    - [ ] b) Sumar dos valores numéricos.
    - [x] c) Combinar varias características o tipos de medios. //correcto
    - [ ] d) Crear una condición lógica `or`.

[☝️](#mejores-prácticas-para-el-diseño-web-adaptativo)

---

## Tema 3: ¿Qué son los `Media Breakpoints` y cuáles son los `Breakpoints` más comunes en el diseño moderno?

Los `Breakpoints` de medios son puntos específicos en el diseño de un sitio web en los que el diseño y el contenido se ajustan para adaptarse a diferentes tamaños de pantalla. Estos `Breakpoints` son cruciales en el diseño web adaptativo, ya que permiten a los desarrolladores crear sitios web que se ven y funcionan bien en diversos dispositivos, desde teléfonos móviles hasta grandes monitores de escritorio.

En CSS, los `Breakpoints` de medios se implementan mediante consultas de medios. Estas consultas permiten aplicar diferentes estilos en función de las características del dispositivo, normalmente el ancho de la ventana gráfica. Por ejemplo, se puede establecer un punto de ruptura a 768 píxeles para diferenciar entre los diseños para móviles y tabletas.

A continuación se muestra un ejemplo sencillo de cómo podría ser una consulta de medios con un punto de ruptura en CSS:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css">
  <div>
    <h1>Responsive Design</h1>
    <p>This is a simple example of responsive design using media queries.</p>
  </div>
  ```

  ```css
  /* Styles for screens wider than 768px */
  @media screen and (min-width: 768px) {
    body {
      font-size: 1.125rem;
    }
  }
  ```

Cuando el ancho de la pantalla es de 768 píxeles o más, el tamaño de la fuente aumenta a `1.125rem`, lo que equivale a 18 píxeles. Esto demuestra cómo se pueden utilizar los puntos de ruptura para ajustar el diseño a diferentes tamaños de pantalla.

A la hora de elegir puntos de ruptura, no existe una solución única para todos los casos. Los puntos de ruptura adecuados para su sitio web dependerán de su diseño y contenido específicos. Sin embargo, hay algunos puntos de ruptura comunes que muchos diseñadores utilizan como punto de partida en el diseño web moderno.

Un conjunto popular de puntos de ruptura se corresponde con las categorías de dispositivos comunes:

- Dispositivos pequeños (smartphones): hasta 640 píxeles.

- Dispositivos medianos (tabletas): de 641 a 1024 píxeles.

- Dispositivos grandes (computadoras de escritorio): 1025 píxeles y más.

Algunos diseñadores prefieren un enfoque más detallado, utilizando puntos de ruptura como:

- Dispositivos extrapequeños: hasta 576 píxeles.

- Dispositivos pequeños: de 577 a 768 píxeles.

- Dispositivos medianos: de 769 a 992 píxeles.

- Dispositivos grandes: de 993 a 1200 píxeles.

- Dispositivos extragrandes: 1201 píxeles y más.

Es importante señalar que no se trata de reglas estrictas, sino más bien de prácticas comunes.

La tendencia en el diseño responsivo moderno se inclina hacia un enfoque más fluido, en el que los diseños se adaptan con facilidad a una amplia gama de tamaños de pantalla, en lugar de realizar cambios drásticos en puntos de ruptura establecidos.

A continuación se muestran otros ejemplos comunes de puntos de ruptura:

- Dispositivo extra pequeño: menos de 576 píxeles.

- Dispositivo pequeño: igual o más de 576 píxeles.

- Dispositivo mediano: igual o más de 768 píxeles.

- Dispositivo grande: igual o más de 992 píxeles.

- Dispositivo extra grande: igual o más de 1200 píxeles.

- Dispositivo extra extra grande: igual o más de 1400 píxeles.

Estos puntos de ruptura se utilizan ampliamente y pueden servir como un buen punto de partida para muchos proyectos. Sin embargo, es fundamental recordar que los mejores puntos de ruptura para tu proyecto deben determinarse en función de tu contenido y diseño, y no de números arbitrarios o tamaños de dispositivos.

---

## Cuestionario 3

1. **¿Cuál es el objetivo principal de los media breakpoints en el diseño web adaptativo?**

    - [ ] a) Cambiar la combinación de colores del sitio web en diferentes dispositivos.
    - [x] b) Ajustar el diseño y el contenido a diferentes tamaños de pantalla. //correcto
    - [ ] c) Aumentar la velocidad de carga del sitio web en dispositivos móviles.
    - [ ] d) Añadir nuevas funciones para los usuarios de computadoras de escritorio.

2. **¿Cuál de los siguientes es un breakpoint comúnmente utilizado para dispositivos más pequeños, como los teléfonos inteligentes?**

    - [ ] a) `1640px`
    - [x] b) `640px` //correcto
    - [ ] c) `1200px`
    - [ ] d) `2000px`

3. **¿Cuál de las siguientes opciones NO se considera normalmente un breakpoint común en el diseño responsivo moderno?**

    - [ ] a) `768px` (tablets).
    - [ ] b) `1024px` (small desktops).
    - [ ] c) `480px` (large smartphones).
    - [x] d) `6000px` (really large device). //correcto

[☝️](#mejores-prácticas-para-el-diseño-web-adaptativo)

---

## Tema 4: ¿Qué es el enfoque `mobile-first` en el diseño web adaptativo?

El enfoque `mobile-first` es una filosofía de diseño y una estrategia de desarrollo en el diseño web adaptativo que da prioridad a la creación de sitios web para dispositivos móviles antes que al diseño para pantallas más grandes. Este enfoque ha ganado mucha popularidad en los últimos años, convirtiéndose en una piedra angular de las prácticas modernas de desarrollo web.

En esencia, el enfoque `mobile-first` consiste en diseñar y desarrollar la versión móvil de un sitio web como paso principal. Esta versión sirve de base, que luego se mejora progresivamente para pantallas más grandes y dispositivos con más capacidades. Esta metodología contrasta con el enfoque tradicional, en el que los sitios web se diseñaban inicialmente para computadoras de escritorio y posteriormente se reducían o modificaban para adaptarse a pantallas más pequeñas.

El principio que subyace al diseño `mobile-first` es garantizar que el contenido y las funciones más esenciales estén disponibles y optimizados primero para las pantallas más pequeñas. Esto obliga a los diseñadores y desarrolladores a centrarse en el contenido y las características principales, lo que da lugar a una experiencia de usuario más ágil y eficiente en todos los dispositivos.

Uno de los principales impulsores de la adopción del enfoque `mobile-first` es el drástico cambio en los patrones de uso de Internet. Dado que los dispositivos móviles representan ahora más de la mitad del tráfico web mundial, el diseño `mobile-first` garantiza que los sitios web se adapten a una base de usuarios amplia y en crecimiento.

Este enfoque se ajusta al panorama digital actual, en el que muchos usuarios acceden a Internet principalmente a través de sus teléfonos inteligentes.

La optimización del rendimiento es otro aspecto crucial del enfoque `mobile-first`. Los dispositivos móviles suelen tener menos potencia de procesamiento y pueden estar conectados a redes más lentas en comparación con las computadoras de escritorio.

Al diseñar primero para dispositivos móviles, se anima a los desarrolladores a optimizar el rendimiento desde el principio. Este enfoque en la eficiencia no solo beneficia a los usuarios de dispositivos móviles, sino que también se traduce en un mejor rendimiento en todos los dispositivos. El espacio limitado de la pantalla en los dispositivos móviles requiere una cuidadosa priorización del contenido.

Los diseñadores deben tomar decisiones críticas sobre qué contenido es absolutamente esencial y cómo presentarlo de manera eficaz en una pantalla pequeña. Esta limitación suele dar lugar a una experiencia más centrada y fácil de usar, que luego puede ampliarse a pantallas más grandes sin perder la esencia del contenido.

La implementación de un enfoque que prioriza los dispositivos móviles suele implicar el uso de consultas de medios CSS para mejorar progresivamente el diseño para pantallas más grandes. A continuación se muestra un ejemplo de cómo podría verse esto en la práctica:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="container">
    <h1>Responsive Design</h1>
    <p>This is a simple example of responsive design using media queries.</p>
  </div>
  ```

  ```css
  /* Base styles for mobile */
  .container {
    width: 100%;
    padding: 10px;
  }
  
  /* Styles for larger screens */
  @media screen and (min-width: 768px) {
    body {
      font-size: 1.2rem;
    }
  
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

En este ejemplo, comenzamos con estilos básicos adecuados para dispositivos móviles. A continuación, utilizamos consultas de medios con `min-width` para añadir o modificar estilos para pantallas más grandes. Esto ejemplifica la esencia del diseño `"mobile-first"` en CSS: comenzar con estilos para las pantallas más pequeñas y luego mejorarlos progresivamente para las más grandes.

El enfoque `"mobile-first"` también se ajusta bien a las estrategias de optimización de motores de búsqueda (SEO). Google, por ejemplo, utiliza la indexación `"mobile-first"`, lo que significa que utiliza predominantemente la versión móvil del contenido para la indexación y la clasificación.

Al dar prioridad a la experiencia móvil, los sitios web pueden mejorar potencialmente su clasificación y visibilidad en los motores de búsqueda. Aunque el enfoque `"mobile-first"` ofrece numerosas ventajas, no está exento de retos. Diseñar primero para móviles puede limitar en ocasiones la creatividad para pantallas más grandes, y puede resultar difícil conceptualizar inicialmente funciones complejas en dispositivos móviles.

Además, puede resultar complicado convencer a las partes interesadas de que den prioridad al diseño móvil, especialmente si están acostumbradas a ver primero los diseños para computadoras de escritorio.

A pesar de estos retos, el enfoque `"mobile-first"` sigue siendo una estrategia poderosa en el diseño web adaptativo. Fomenta la eficiencia, se centra en el contenido y la funcionalidad básicos y se ajusta al comportamiento actual de los usuarios.

A medida que sigue creciendo el uso de Internet móvil, es probable que el enfoque `"mobile-first"` siga siendo un principio fundamental en la creación de sitios web eficaces y fáciles de usar que funcionen bien en todos los dispositivos.

---

## Cuestionario 4

1. **¿Cuál es el objetivo principal del enfoque `mobile-first` en el diseño web adaptativo?**

    - [ ] a) Diseñar para pantallas de computadoras de escritorio y luego adaptarlo para dispositivos móviles.
    - [ ] b) Crear sitios web separados para usuarios de dispositivos móviles y de computadoras de escritorio.
    - [x] c) Dar prioridad al diseño móvil y mejorarlo progresivamente para pantallas más grandes. //correcto
    - [ ] d) Centrarse únicamente en el diseño móvil e ignorar a los usuarios de computadoras de escritorio.

2. **¿Cómo se suelen utilizar las consultas de medios CSS en el enfoque `mobile-first`?**

    - [ ] a) Utilizando max-width para reducir el tamaño de los diseños para pantallas más pequeñas.
    - [x] b) Utilizando min-width para añadir estilos para pantallas más grandes. //correcto
    - [ ] c) Creando hojas de estilo separadas para cada tipo de dispositivo.
    - [ ] d) Evitando por completo las consultas de medios.

3. **¿Cuál de las siguientes opciones NO es una ventaja principal del enfoque `mobile-first`?**

    - [ ] a) Mejora de la optimización del rendimiento.
    - [ ] b) Mejor adaptación a las tendencias actuales de uso de la web.
    - [x] c) Proceso de diseño simplificado para funciones complejas. //correcto
    - [ ] d) Mejora de la priorización de contenidos.

[☝️](#mejores-prácticas-para-el-diseño-web-adaptativo)

---
