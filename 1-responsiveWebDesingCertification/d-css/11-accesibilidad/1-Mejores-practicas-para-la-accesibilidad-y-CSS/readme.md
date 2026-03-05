# Mejores prácticas para la accesibilidad y CSS

## Navegación

- [Mejores prácticas para la accesibilidad y CSS](#mejores-prácticas-para-la-accesibilidad-y-css)
  - [Navegación](#navegación)
  - [Tema 1: ¿Qué herramientas existen para comprobar el contraste de colores en los sitios web?](#tema-1-qué-herramientas-existen-para-comprobar-el-contraste-de-colores-en-los-sitios-web)
  - [Cuestionario 1](#cuestionario-1)
  - [Tema 2: ¿Cuáles son las mejores prácticas para ocultar contenido sin que se vuelva inaccesible?](#tema-2-cuáles-son-las-mejores-prácticas-para-ocultar-contenido-sin-que-se-vuelva-inaccesible)
  - [Cuestionario 2](#cuestionario-2)

---

En este módulo, aprenderás sobre las mejores prácticas para la accesibilidad y CSS. Cubriremos temas como el uso de colores contrastantes, la importancia de la tipografía legible, y cómo asegurarte de que tu diseño sea accesible para todos los usuarios.

---

## Tema 1: ¿Qué herramientas existen para comprobar el contraste de colores en los sitios web?

Al diseñar sitios web, garantizar un buen contraste de colores es fundamental para la accesibilidad y la legibilidad. Existen varias herramientas que ayudan a los desarrolladores y diseñadores a comprobar y mantener los ratios de contraste de colores adecuados en sus sitios web. Una herramienta muy popular es el verificador de contraste de colores de WebAIM.

Esta herramienta en línea le permite introducir los colores de primer plano y de fondo de su diseño y ver al instante si cumplen con los estándares de las Pautas de Accesibilidad al Contenido en la Web (WCAG). Es fácil de usar y proporciona información inmediata sobre si sus elecciones de color cumplen o no los requisitos de contraste.

Para utilizar el verificador de contraste de colores de WebAIM, solo tiene que visitar su sitio web e introducir los códigos hexadecimales de los colores de primer plano y de fondo. A continuación, la herramienta calculará la relación de contraste e indicará si cumple con los estándares WCAG 2.0 de nivel AA o AAA. A continuación se muestra un ejemplo de cómo se pueden utilizar los valores de color en su CSS:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <p>Hello, World!</p>
  ```
  
  ```css
  body {
    background-color: #FFFFFF;
    color: #333333;
  }
  ```

En este ejemplo, hemos establecido un fondo blanco (`#FFFFFF`) y un texto gris oscuro (`#333333`). Puede introducir estos códigos de color en la herramienta WebAIM para comprobar su relación de contraste.

Otra herramienta muy útil es el analizador de contraste de colores TPGi. Esta aplicación de escritorio ofrece funciones más avanzadas en comparación con las herramientas en línea. Le permite analizar páginas web completas, no solo pares de colores individuales. Puede utilizar su selector de colores para seleccionar colores directamente desde la pantalla, lo que facilita la comprobación de las relaciones de contraste de los diseños existentes.

El analizador de contraste de colores TPGi también ofrece simulaciones para diferentes tipos de deficiencias en la visión del color, lo que le ayuda a garantizar que su diseño sea accesible para usuarios con diversas formas de daltonismo.

Para utilizar el Analizador de contraste de colores de TPGi, descargue e instale la aplicación en su computadora. Una vez instalada, puede utilizar su herramienta cuentagotas para seleccionar colores de su pantalla y ver al instante la relación de contraste. Esto resulta especialmente útil cuando se trabaja con diseños complejos o se comprueba el contraste en sitios web activos.

Ambas herramientas son muy valiosas para crear sitios web accesibles y legibles. Ayudan a garantizar que el texto sea legible sobre el fondo, lo cual es esencial para todos los usuarios, pero especialmente importante para aquellos con discapacidad visual. Recuerde que, aunque estas herramientas son extremadamente útiles, deben utilizarse junto con pruebas manuales y comentarios de los usuarios. Los diferentes contextos y necesidades de los usuarios pueden requerir ajustes que van más allá de lo que pueden sugerir las herramientas automatizadas.

Al utilizar regularmente herramientas como el verificador de contraste de colores de WebAIM y el analizador de contraste de colores de TPGi, puede crear diseños que no solo sean visualmente atractivos, sino también inclusivos y accesibles para un público más amplio. Esta atención al detalle en el contraste de colores puede mejorar significativamente la experiencia de usuario de su sitio web para todos los visitantes.

---

## Cuestionario 1

1. **¿Cuál es el objetivo principal de utilizar herramientas de verificación del contraste de colores como el verificador de contraste de colores de WebAIM?**

    - [ ] a) Hacer que los sitios web sean más coloridos.
    - [x] b) Garantizar que el texto sea legible sobre el fondo para facilitar la accesibilidad. //correcto
    - [ ] c) Reducir el número de colores utilizados en un sitio web.
    - [ ] d) Aumentar la velocidad de carga del sitio web.

2. **¿Qué función ofrece el Analizador de contraste de colores de TPGi que no ofrecen la mayoría de los verificadores de contraste en línea?**

    - [ ] a) Puede verificar las relaciones de contraste.
    - [ ] b) Proporciona códigos de color hexadecimales.
    - [x] c) Puede analizar páginas web completas y simular deficiencias en la visión del color. //correcto
    - [ ] d) Sugiere combinaciones de colores.

3. **¿A qué se refieren los estándares WCAG 2.0 de nivel AA y AAA en el contexto de las herramientas de contraste de colores?**

    - [ ] a) A los niveles de brillo de los colores.
    - [ ] b) Al tamaño de los archivos de imagen.
    - [x] c) A las relaciones de contraste mínimas necesarias para la accesibilidad. //correcto
    - [ ] d) Al número de colores utilizados en un diseño.

[☝️](#mejores-prácticas-para-la-accesibilidad-y-css)

---

## Tema 2: ¿Cuáles son las mejores prácticas para ocultar contenido sin que se vuelva inaccesible?

Ocultar contenido en una página web es una práctica habitual en el desarrollo web, pero es fundamental hacerlo de forma que no se comprometa la accesibilidad. Las diferentes técnicas de ocultación pueden tener distintos efectos en la forma en que las tecnologías de asistencia interpretan y presentan el contenido a los usuarios. Veamos algunas prácticas recomendadas para ocultar contenido sin comprometer la accesibilidad. Un método habitual para ocultar contenido es utilizar `display: none`. Veamos un ejemplo:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <p class="hidden">Hidden text</p>
  <p>Visible text</p>
  ```
  
  ```css
  .hidden {
    display: none;
  }
  ```

Aunque esto oculta el contenido de forma visual, también lo elimina del árbol de accesibilidad. El árbol de accesibilidad es una estructura que utilizan las tecnologías de asistencia, como los lectores de pantalla, para interpretar e interactuar con el contenido de una página web. Representa el contenido y su significado semántico de una forma que las tecnologías de asistencia pueden entender y presentar al usuario.

El uso de `display: none` significa que los lectores de pantalla y otras tecnologías de asistencia no podrán acceder a este contenido, ya que no está incluido en el árbol de accesibilidad. Por lo tanto, es importante utilizar este método solo cuando se desee eliminar completamente el contenido tanto de la presentación visual como de la accesibilidad.

Otro método para ocultar contenido es utilizar `visibility: hidden`:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <p class="hidden">Hidden text</p>
  <p>Visible text</p>
  ```
  
  ```css
  .hidden {
    visibility: hidden;
  }
  ```

`visibility: hidden` oculta el contenido visualmente, pero lo mantiene en el flujo del documento, lo que significa que sigue ocupando espacio en la página. Al igual que `display: none`, `visibility: hidden` también elimina el contenido del árbol de accesibilidad. Esto significa que las tecnologías de asistencia, como los lectores de pantalla, no podrán acceder al contenido oculto. Utilice `visibility: hidden` solo cuando desee ocultar contenido a todo el mundo, incluidas las personas que utilizan tecnologías de asistencia.

Para el contenido que debe ocultarse visualmente pero seguir siendo accesible para los lectores de pantalla, puede utilizar una técnica que a menudo se denomina «oculto visualmente» o «solo para lectores de pantalla». A continuación se muestra un ejemplo en el que se utiliza la clase CSS `.sr-only`, una técnica habitual para ocultar visualmente el contenido y mantenerlo accesible para los lectores de pantalla:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <p class="sr-only">Hidden text</p>
  <p>Visible text</p>
  ```
  
  ```css
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  ```

En este ejemplo, utilizamos propiedades como `position`, `clip` y `white-space`, que aprenderás en lecciones posteriores. Por ahora, solo tienes que saber que esta regla CSS oculta eficazmente el contenido a la vista, pero lo mantiene accesible para los lectores de pantalla. Es útil para proporcionar contexto adicional a los usuarios de lectores de pantalla sin afectar al diseño visual.

Para alternar la visibilidad del contenido, considera la posibilidad de utilizar el atributo `hidden`:

- **Codigo Ejemplo**
  
  ```html
  <p hidden>This content is hidden</p>
  <p>This content is visible</p>
  ```
  
El atributo `hidden` es compatible con la mayoría de los navegadores modernos y oculta el contenido tanto visualmente como del árbol de accesibilidad. Se puede activar y desactivar fácilmente con JavaScript. Por último, tenga cuidado al ocultar contenido importante. Si la información es crucial para comprender o utilizar el sitio web, debe ser visible y accesible para todos los usuarios. Solo oculte contenido cuando ello mejore realmente la experiencia del usuario. Si sigue estas prácticas recomendadas, se asegurará de que su contenido siga siendo accesible para todos los usuarios, independientemente de cómo interactúen con su sitio web.

---

## Cuestionario 2

1. **¿Cuál es el principal problema de accesibilidad al utilizar las declaraciones de estilo `display: none` y `visibility: hidden`, o el atributo `hidden` para ocultar contenido?**

    - [ ] a) Estos métodos hacen que solo las tecnologías de asistencia, como los lectores de pantalla, puedan acceder al contenido oculto.
    - [ ] b) El contenido solo permanece oculto hasta que los usuarios pasan el ratón por encima.
    - [x] c) Estos métodos eliminan el contenido del árbol de accesibilidad, lo que imposibilita que las tecnologías de asistencia, como los lectores de pantalla, accedan al contenido oculto. //correcto
    - [ ] d) Estos métodos no funcionan con algunos navegadores.

2. **¿Cuál es el objetivo principal de la técnica CSS "visually hidden" o "screen reader only"?**

    - [ ] a) Ocultar contenido a todos los usuarios.
    - [ ] b) Hacer que el contenido solo sea visible en dispositivos móviles.
    - [x] c) Ocultar contenido visualmente, pero mantenerlo accesible para los lectores de pantalla. //correcto
    - [ ] d) Crear transiciones animadas para el contenido.

3. **¿Cuándo se debe ocultar contenido en una página web?**

    - [ ] a) Cuando el contenido que se oculta es menos importante que otro contenido de la página.
    - [ ] b) Cuando el contenido que se oculta es incorrecto.
    - [x] c) Solo cuando realmente mejora la experiencia del usuario. //correcto
    - [ ] d) Siempre que se desee.

[☝️](#mejores-prácticas-para-la-accesibilidad-y-css)

---
