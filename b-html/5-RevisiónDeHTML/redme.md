# Revisión de HTML

Antes de realizar el examen HTML prep, primero debe revisar los conceptos enseñados en los módulos anteriores.

Abra esta página para revisar conceptos sobre los conceptos básicos de elementos HTML, HTML semántico, tablas, formularios y accesibilidad.

## Conceptos Básicos de HTML

- **Rol de HTML**: HTML (Lenguaje de Marcado de Hipertexto) es la base de la estructura web, definiendo los elementos de una página web.

- **Elementos HTML**: Se utilizan para representar el contenido de la página. La mayoría de ellos están formados por una etiqueta de apertura y una de cierre (por ejemplo, `<h1> </h1>,<p> </p>`).

- **Estructura HTML**: HTML consta de un encabezado y un cuerpo, donde se estructuran los metadatos, los estilos y el contenido.

- **Elementos HTML comunes**: Encabezados (`<h1> - <h6>`), párrafos (`<p>`) y contenedores div (`<div>`).

- **elementos `div`**: El elemento `div` es un elemento HTML genérico que no tiene ningún significado semántico. Se utiliza como contenedor genérico para contener otros elementos HTML.

- **Elementos vacíos**: No tienen una etiqueta de cierre (por ejemplo, `<img>`).

- **Atributos**: Agregar metadatos y comportamiento a los elementos.

## Identificadores y Agrupación

- **IDs**: Identificadores únicos de elementos.

- **Clases**: Agrupación de elementos por estilo y comportamiento.

## Caracteres Especiales y Enlaces

- **Entidades HTML**: Usando caracteres especiales como `&amp;` y `&lt;`.

- **elemento `link`**: Enlace a hojas de estilo externas.

- **elemento `script`**: Incrustación de archivos JavaScript externos.

## Repetitivo y Codificación

- **HTML repetitivo**: Estructura básica de una página web, que incluye los elementos `DOCTYPE`, `html`, `head` y `body`. Debe usarse como punto de partida para un documento HTML.

- **Codificación de caracteres UTF-8**: Asegurando la visualización universal de caracteres.

## SEO y Redes Sociales

- **Metaetiquetas (descripción)**: Proporcionar una breve descripción de la página web e impactar en el SEO.

- **Etiquetas Open Graph**: Mejorando el intercambio de redes sociales.

## Elementos Multimedia y Optimización

- **Elementos reemplazados**: Contenido incrustado (por ejemplo, imágenes, iframes).

- **Optimización de medios**: Técnicas para mejorar el rendimiento de los medios.

- **Formatos y licencias de imagen**: Comprensión de los derechos y tipos de uso.

- **SVGs**: Gráficos vectoriales escalables para imágenes nítidas.

## Integración Multimedia

- **Elementos de audio y video `HTML`**: Incrustación de multimedia.

- **Incrustación con `<iframe>`**: Integración de contenido de video externo.

## Rutas y Comportamiento de Enlaces

- **Tipos de atributos de destino**: Control del comportamiento de los enlaces.

- **Rutas absolutas versus relativas**: Navegación por directorios.

- **Sintaxis de ruta**: Comprensión `/`, `./`, `../` para la navegación de archivos.

- **Estados de enlace**: Gestión de diferentes interacciones de enlace (flotante, activo).

## Importancia del HTML Semántico

- **Jerarquía estructural de los elementos de encabezado**: Es importante utilizar el elemento de encabezado correcto para mantener la jerarquía estructural del contenido. El elemento h1 es el nivel más alto de encabezado y el elemento h6 es el nivel más bajo de encabezado.

- **Elementos HTML de presentación**: Elementos que definen la apariencia del contenido. Ex. los elementos obsoletos `center`, `big` y `font`.

- **Elementos HTML semánticos**: Estos elementos aportan significado a la estructura del contenido. Los ejemplos incluyen:

  - `<header>`: Representa contenido introductorio.

  - `<nav>`: Contiene enlaces de navegación.

  - `<article>`: Representa contenido autónomo.

  - `<aside>`: Se usa para barras laterales o contenido relacionado.

  - `<section>`: Agrupa el contenido relacionado dentro de un documento.

  - `<footer>`: Define el pie de página de una sección o documento.

## Elementos HTML Semánticos

- **Elemento de énfasis (`em`)**: Marca el texto que tiene énfasis en el acento.

- **Elemento de texto idiomático (`i`)**: Se usa para resaltar voces o estados de ánimo alternativos, términos idiomáticos de otro idioma, términos técnicos y pensamientos.

- **Elemento de gran importancia (`strong`)**: Marca el texto que tiene una gran importancia.

- **Llamar la atención sobre (`b`) elemento**: Se utiliza para llamar la atención sobre el texto que no es importante para el significado del contenido.

- **Elemento Lista de descripciones (`dl`)**: Se utiliza para representar una lista de agrupaciones de descripciones de términos.

- **Elemento de término de descripción (`dt`)**: Se usa para representar el término que se está definiendo.

- **Elemento Detalles de la descripción (`dd`)**: Se utiliza para representar la descripción del término.

- **Elemento de cita en bloque (`blockquote`)**: Se usa para representar una sección que se cita de otra fuente.

- **Elemento de cotización en línea (`q`)**: Se utiliza para representar una cotización en línea corta.

- **Elemento abreviatura (`abbr`)**: Se usa para representar una abreviatura o acrónimo.

- **Elemento Dirección de contacto (`address`)**: Se utiliza para representar la información de contacto.

- **Elemento (`date`) Hora (`time`)**: Se utiliza para representar una fecha y/o hora.

- **Elemento de superíndice (`sup`)**: Se utiliza para representar texto en superíndice.

- **Subelemento (`sub`) de subíndice**: Se utiliza para representar texto de subíndice.

- **Elemento de código en línea (`code`)**: Se usa para representar un fragmento de código de computadora.

- **Elemento de anotación no articulada (`u`)**: Se usa para representar un tramo de texto en línea que debe representarse de una manera que indique que tiene una anotación no textual.

- **Elemento Anotación Ruby (`ruby`)**: Se usa para representar el texto de una anotación ruby.

- **Elemento tachado (`s`)**: Se utiliza para representar contenido que ya no es preciso o relevante.

## Elementos y Atributos de Formulario HTML

### Formularios

- **elemento de `form`**: Se utiliza para crear un formulario HTML para la entrada del usuario.

- **atributo de `action`**: Define dónde enviar los datos del formulario.

- **atributo del `method`**: Determina cómo se envían los datos del formulario (GET o POST).

- **Tipos de Entrada Comunes**:

  - `text`, `email`, `password`, `radio`, `checkbox`, `number`, `date`.

- **atributo de `action`**: se utiliza para especificar la URL a la que se deben enviar los datos del formulario.

- **atributo del `method`**: se utiliza para especificar el método HTTP que se utilizará al enviar los datos del formulario. Los métodos más comunes son `GET` y `POST`.

```html
<form method="value-goes-here" action="url-goes-here">
  <!-- inputs go inside here -->
</form>
```

- **elemento de `input`**: se utiliza para crear un campo de entrada para la entrada del usuario.

- **atributo de `type`**: se utiliza para especificar el tipo de campo de entrada. Ex.  `text`, `email`, `number`, `radio`, `checkbo` etc.

- **atributo de `placeholder`**: se usa para mostrar una sugerencia al usuario para mostrarle qué ingresar en el campo de entrada.

- **atributo de `value`**: se utiliza para especificar el valor de la entrada. Si la entrada tiene un tipo de `button`, el atributo `value` se puede usar para establecer el texto del botón.

- **atributo de `name`**: se usa para asignar un nombre a un campo de entrada, que sirve como clave cuando se envían los datos del formulario. Para los botones de opción, darles el mismo `name` los agrupa, por lo que solo se puede seleccionar una opción del grupo a la vez.

- **atributo de `size`**: se utiliza para definir el número de caracteres que deben estar visibles a medida que el usuario escribe en la entrada.

- **atributo `min`**: se puede usar con tipos de entrada como `number` para especificar el valor mínimo permitido en el campo de entrada.

- **atributo ``max``**: se puede usar con tipos de entrada como `number` para especificar el valor máximo permitido en el campo de entrada.

- **atributo `minlength`**: se utiliza para especificar el número mínimo de caracteres necesarios en un campo de entrada.

- **atributo `maxlength`**: se utiliza para especificar el número máximo de caracteres permitidos en un campo de entrada.

- **atributo `required`**: se usa para especificar que se debe completar un campo de entrada antes de enviar el formulario.

- **atributo `disabled`**: se utiliza para especificar que un campo de entrada debe estar deshabilitado.

- **atributo de `readonly`**: se usa para especificar que un campo de entrada sea de solo lectura.

```html
<!-- Text input -->
<input 
  type="text"
  id="name"
  name="name"
  placeholder="e.g. Quincy Larson"
  size="20"
  minlength="5"
  maxlength="30"
  required
/>

<!-- Number input -->
<input 
  type="number"
  id="quantity"
  name="quantity"
  min="2"
  max="10"
  disabled
/>

<!-- Button -->
<input type="button" value="Show Alert" />
```

- **elemento de `label`**: se utiliza para crear una etiqueta para un campo de entrada.

- **atributo `for`**: se usa para especificar para qué campo de entrada es la etiqueta.

- **Asociación implícita de formularios**: las entradas se pueden asociar con etiquetas envolviendo el campo de entrada dentro del elemento `label`.

```html
<form action="">
  <label>
    Full Name:
    <input type="text" />
  </label>
</form>
```

- **Asociación explícita de formularios**: las entradas se pueden asociar con etiquetas utilizando el atributo `for` en el elemento `label`.

```html
<form action="">
  <label for="email">Email Address: </label>
  <input type="email" id="email" />
</form>
```

- **elemento de `button`**: se utiliza para crear un botón en el que se puede hacer clic. Un botón también puede tener un atributo `type`, que se utiliza para controlar el comportamiento del botón cuando se activa. Ex. `submit`, `reset`, `button`.

```html
<button type="button">Show Form</button>
<button type="submit">Submit Form</button>
<button type="reset">Reset Form</button>
```

- **elemento `fieldset`**: se usa para agrupar entradas relacionadas.

- **elemento de `legend`**: se usa para agregar un título para describir el grupo de entradas.

```html
<!-- Radio group -->
<fieldset>
  <legend>Was this your first time at our hotel?</legend>

  <label for="yes-option">Yes</label>
  <input id="yes-option" type="radio" name="hotel-stay" value="yes" />

  <label for="no-option">No</label>
  <input id="no-option" type="radio" name="hotel-stay" value="no" />
</fieldset>

<!-- Checkbox group -->
<fieldset>
  <legend>
    Why did you choose to stay at our hotel? (Check all that apply)
  </legend>

  <label for="location">Location</label>
  <input type="checkbox" id="location" name="location" value="location" />

  <label for="price">Price</label>
  <input type="checkbox" id="price" name="price" value="price" />
</fieldset>
```

- **Focused state**: este es el estado de un campo de entrada cuando es seleccionado por el usuario.

---

## Trabajar con Elementos y Atributos de Tablas HTML

- **Elemento de `table`**: se utiliza para crear una tabla HTML.

- **Elemento Table Head (`thead`)**: se utiliza para agrupar el contenido del encabezado en una tabla HTML.

- **Elemento Fila de tabla (`tr`)**: se utiliza para crear una fila en una tabla HTML.

- **Elemento de encabezado de tabla (`th`)**: se utiliza para crear una celda de encabezado en una tabla HTML.

- **Elemento del cuerpo de la tabla (`tbody`)**: se utiliza para agrupar el contenido del cuerpo en una tabla HTML.

- **Elemento de celda de datos de tabla (`td`)**: se utiliza para crear una celda de datos en una tabla HTML.

- **Elemento Pie de tabla (`tfoot`)**: se utiliza para agrupar el contenido del pie de página en una tabla HTML.

- **elemento `caption`**: se usa para agregar un título de una tabla HTML.

- **atributo `colspan`**: se usa para especificar el número de columnas que debe abarcar una celda de la tabla.

```html
<table>
  <caption>Exam Grades</caption>

  <thead>
    <tr>
      <th>Last Name</th>
      <th>First Name</th>
      <th>Grade</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Davis</td>
      <td>Alex</td>
      <td>54</td>
    </tr>

    <tr>
      <td>Doe</td>
      <td>Samantha</td>
      <td>92</td>
    </tr>

    <tr>
      <td>Rodriguez</td>
      <td>Marcus</td>
      <td>88</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="2">Average Grade</td>
      <td>78</td>
    </tr>
  </tfoot>
</table>
```

---

## Herramientas HTML

- **Validador de HTML**: Una herramienta que verifica la sintaxis del código HTML para garantizar que sea válido.

- **Inspector DOM**: Una herramienta que permite inspeccionar y modificar la estructura HTML de una página web.

- **Devtools**: Un conjunto de herramientas para desarrolladores web integradas directamente en el navegador que lo ayudan a depurar, perfilar y analizar páginas web.

## Introducción a la Accesibilidad

- **Pautas de Accesibilidad al Contenido Web**: Las Pautas de Accesibilidad al Contenido Web (WCAG, por sus siglas en inglés) son un conjunto de pautas para hacer que el contenido web sea más accesible para las personas con discapacidades. Los cuatro principios de WCAG son POUR, que significa Perceptible, Operable, Comprensible y Robusto.

## Tecnología de Asistencia para la Accesibilidad

- **Lectores de pantalla**: Programas de software que leen el contenido de la pantalla de una computadora en voz alta. Son utilizadas por personas ciegas o con discapacidad visual para acceder a la web.

- **Teclados de texto grande o braille**: Utilizados por personas con discapacidad visual para acceder a la web.

- **Ampliadores de pantalla**: Programas de software que amplían el contenido de la pantalla de una computadora. Son utilizadas por personas con baja visión para acceder a la web.

- **Dispositivos señaladores alternativos**: Utilizados por personas con problemas de movilidad para acceder a la web. Esto incluye dispositivos como joysticks, trackballs y paneles táctiles.

- **Reconocimiento de voz**: Utilizado por personas con discapacidad motriz para acceder a la web. Permite a los usuarios controlar una computadora usando su voz.

## Herramientas de Auditoría de Accesibilidad

- **Herramientas de accesibilidad comunes**: Google Lighthouse, Wave, IBM Equal Accessibility Checker y axe DevTools son algunas de las herramientas de accesibilidad comunes que se utilizan para auditar la accesibilidad de un sitio web.

## Mejores Prácticas de Accesibilidad

- **Estructura de nivel de encabezado adecuada**: Debe usar niveles de encabezado adecuados para crear una estructura lógica para su contenido. Esto ayuda a las tecnologías de asistencia a comprender el contenido de su sitio web.

- **Accesibilidad y tablas**: Al usar tablas, debe usar el elemento th para definir celdas de encabezado y el elemento td para definir celdas de datos. Esto ayuda a las tecnologías de asistencia a comprender la estructura de la mesa.

- **Importancia de que los inputs tengan una label asociado**: Debe usar el elemento label para asociar etiquetas con entradas de formulario. Esto ayuda a las tecnologías de asistencia a comprender el propósito de la entrada.

- **Importancia de un buen texto `alt`**: Debe usar el atributo `alt` para proporcionar una alternativa de texto para las imágenes. Esto ayuda a las tecnologías de asistencia a comprender el contenido de la imagen.

- **Importancia del buen texto del enlace**: Debe utilizar texto descriptivo del enlace para ayudar a los usuarios a comprender el propósito del enlace. Esto ayuda a las tecnologías de asistencia a comprender el propósito del enlace.

- **Prácticas recomendadas para hacer accesible el contenido de audio y video**: Debe proporcionar subtítulos y transcripciones del contenido de audio y video para que sea accesible para las personas con discapacidad auditiva. También debe proporcionar descripciones de audio del contenido de video para que sea accesible para personas con discapacidades visuales.

- **atributo `tabindex`**: Se usa para hacer que los elementos sean enfocables y definir el orden relativo en el que se deben navegar usando el teclado. Es importante no utilizar nunca el atributo `tabindex` con un valor superior a 0. En su lugar, debe usar un valor de 0 o -1. Para obtener más información, revise el video de la conferencia anterior sobre accesibilidad del teclado.

- **atributo `accesskey`**: Se utiliza para definir un método abreviado de teclado para un elemento. Esto puede ayudar a los usuarios con discapacidades de movilidad a navegar por el sitio web con mayor facilidad.

## WAI-ARIA, Roles y Atributos

- **WAI-ARIA**: Son las siglas de Iniciativa de Accesibilidad Web: Aplicaciones Ricas de Internet Accesibles. Es un conjunto de atributos que se pueden agregar a los elementos HTML para mejorar la accesibilidad. Proporciona información adicional a las tecnologías de asistencia sobre el propósito y la estructura del contenido.

- **Roles ARIA**: Un conjunto de roles predefinidos que se pueden agregar a los elementos HTML para definir su propósito. Esto ayuda a las tecnologías de asistencia a comprender el contenido del sitio web. Los ejemplos incluyen `role= "tab"`, `role= "menu"` y `role= "alert"`.

- **atributos `aria-label` y `aria-labelledby`**: Estos atributos se utilizan para dar a un elemento un nombre programático (o accesible), lo que ayuda a la tecnología de asistencia (como los lectores de pantalla) a comprender el propósito del elemento. A menudo se usan cuando la etiqueta visual de un elemento es una imagen o símbolo en lugar de texto. aria-label le permite definir el nombre directamente en el atributo, mientras que aria-labelledby le permite hacer referencia al texto existente en la página.

- **atributo `aria-hidden`**: Se utiliza para ocultar un elemento de las tecnologías de asistencia, como los lectores de pantalla. Por ejemplo, esto se puede utilizar para ocultar imágenes decorativas que no proporcionan ningún contenido significativo.

- **atributo `aria-expanded`**: Se utiliza para transmitir el estado de una función de alternancia (o divulgación) a los usuarios del lector de pantalla.

- **atributo `aria-live`**: Se utiliza para indicar que el contenido de un elemento es lo suficientemente importante como para requerir que cualquier cambio en el contenido se anuncie de inmediato a los usuarios de lectores de pantalla. Esto puede incluir mensajes de estado, como actualizar el número de resultados devueltos de una búsqueda, o un mensaje de error que se muestra después de enviar un formulario sin éxito.

- **Estados ARIA comunes**: Los estados ARIA comunes incluyen `aria-haspopup`, `aria-checked`, `aria-disabled` y `aria-selected`. Estos atributos se pueden utilizar para indicar el estado de un elemento y ayudar a las tecnologías de asistencia a comprender el contenido del sitio web.

- **atributo `aria-controls`**: Se usa para asociar un elemento con otro elemento que controla. Esto ayuda a las tecnologías de asistencia a comprender la relación entre los elementos.

- **atributo `aria-describedby`**: Se utiliza para proporcionar información adicional sobre un elemento asociándolo con otro elemento que contiene la información. Esto ayuda a las tecnologías de asistencia a comprender el propósito del elemento.
