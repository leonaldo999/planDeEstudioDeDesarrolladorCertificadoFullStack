# Revisión de accesibilidad HTML

Antes de que te examinen sobre HTML y accesibilidad, primero debes repasar los conceptos.

Abre esta página para repasar conceptos como los atributos `aria-hidden`, `aria-describedby`, `tabindex` y más.

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

- **Estructura de nivel de heading adecuada**: Debe usar niveles de encabezado adecuados para crear una estructura lógica para su contenido. Esto ayuda a las personas que usan tecnologías de asistencia a comprender el contenido de su sitio web.

- **Accesibilidad y tablas**: Al usar tablas, debe usar el elemento `th` para definir celdas de encabezado y el elemento `td` para definir celdas de datos. Esto ayuda a las personas que usan tecnologías de asistencia a comprender la estructura de la mesa. Con el elemento `caption`, puede escribir el título (o título) de una tabla para que los usuarios, especialmente aquellos que usan tecnologías de asistencia, puedan comprender rápidamente el propósito y el contenido de la tabla. Debe colocar el elemento `caption` inmediatamente después de la etiqueta de apertura del elemento `table`. De esta manera, los lectores de pantalla y otras tecnologías de asistencia pueden proporcionar más contexto anunciando el título antes de leer el contenido.

- **Importancia de que las `inputs` tengan una etiqueta `label`**: Debe usar el elemento `label` para asociar etiquetas con entradas de formulario. Esto ayuda a las personas que usan tecnologías de asistencia a comprender el propósito de la entrada.

- **Importancia de un buen texto ``alt``**: Debe usar el atributo `alt` para proporcionar una alternativa de texto para las imágenes. Esto ayuda a las personas que usan tecnologías de asistencia a comprender el contenido de la imagen.

- **Importancia del buen texto del enlace**: Debe utilizar texto descriptivo del enlace para ayudar a los usuarios a comprender el propósito del enlace. Esto ayuda a las personas que usan tecnologías de asistencia a comprender el propósito del enlace.

- **Prácticas recomendadas para hacer accesible el contenido de audio y video**: Debe proporcionar subtítulos y transcripciones del contenido de audio y video para que sea accesible para las personas con discapacidad auditiva. También debe proporcionar descripciones de audio del contenido de video para que sea accesible para personas con discapacidades visuales.

- **atributo `tabindex`**: Se usa para hacer que los elementos sean enfocables y definir el orden relativo en el que se deben navegar usando el teclado. Es importante no utilizar nunca el atributo `tabindex` con un valor superior a 0. En su lugar, debe usar un valor de 0 o -1. Para obtener más información, revise el video de la conferencia anterior sobre accesibilidad del teclado.

```html
<p tabindex="-1">Sorry, there was an error with your submission.</p>
```

- **atributo `accesskey`**: Se utiliza para definir un método abreviado de teclado para un elemento. Esto puede ayudar a los usuarios con discapacidades de movilidad a navegar por el sitio web con mayor facilidad.

```html
<button accesskey="s">Save</button>
<button accesskey="c">Cancel</button>
<a href="index.html" accesskey="h">Home</a>
```

---

## WAI-ARIA, Roles y Atributos

- **WAI-ARIA**: Son las siglas de Iniciativa de Accesibilidad Web: Aplicaciones Ricas de Internet Accesibles. Es un conjunto de atributos que se pueden agregar a los elementos HTML para mejorar la accesibilidad. Proporciona información adicional a las tecnologías de asistencia sobre el propósito y la estructura del contenido.

- **Roles ARIA**: Un conjunto de roles predefinidos que se pueden agregar a los elementos HTML para definir su propósito. Esto ayuda a las personas que usan tecnologías de asistencia a comprender el contenido del sitio web. Los ejemplos incluyen `role= "tab"`, `role= "menu"` y `role= "alert"`.

*Hay seis categorías principales de roles ARIA:*

- **Document structure roles**: Estos roles definen la estructura general de la página web. Con estos roles, las tecnologías de asistencia pueden comprender las relaciones entre diferentes secciones y ayudar a los usuarios a navegar por el contenido.

- **Roles de widget**: Estos roles definen el propósito y la funcionalidad de los elementos interactivos, como las barras de desplazamiento.

- **Landmark roles**: Estos roles clasifican y etiquetan las secciones principales de una página web. Los lectores de pantalla los utilizan para proporcionar una navegación conveniente a secciones importantes de una página.

- **Live region roles**: Estos roles definen elementos con contenido que cambiará dinámicamente. De esta manera, los lectores de pantalla y otras tecnologías de asistencia pueden anunciar cambios a los usuarios con discapacidades visuales.

- **Roles de Window**: Estos roles definen subventanas, como diálogos modales emergentes. Estos roles incluyen `alertdialog` y `dialog`.

- **Abstract roles**: Estos roles ayudan a organizar el documento. Solo están destinados a ser utilizados internamente por el navegador, no por los desarrolladores, por lo que debe saber que existen, pero no debe usarlos en sus sitios web o aplicaciones web.

- **atributos `aria-label` y `aria-labelledby`**: Estos atributos se utilizan para dar a un elemento un nombre programático (o accesible), lo que ayuda a las personas que usan tecnología de asistencia (como lectores de pantalla) a comprender el propósito del elemento. A menudo se usan cuando la etiqueta visual de un elemento es una imagen o símbolo en lugar de texto. aria-label le permite definir el nombre directamente en el atributo, mientras que aria-labelledby le permite hacer referencia al texto existente en la página.

```html
<button aria-label="Search">
  <i class="fas fa-search"></i>
</button>
```

```html
<input type="text" aria-labelledby="search-btn">
<button type="button" id="search-btn">Search</button>
```

- **`aria-hidden` atributo**: Se utiliza para ocultar un elemento de las tecnologías de asistencia, como los lectores de pantalla. Por ejemplo, esto se puede utilizar para ocultar imágenes decorativas que no proporcionan ningún contenido significativo.

```html
<button>
  <i class="fa-solid fa-gear" aria-hidden="true"></i>
  <span class="label">Settings</span>
</button>
```

- **atributo `aria-expanded`**: Se utiliza para transmitir el estado de una función de alternancia (o divulgación) a los usuarios del lector de pantalla.

```html
<button aria-expanded="true">Menu</button>
```

- **Atributo `aria-live`**: Se utiliza para indicar que el contenido de un elemento es lo suficientemente importante como para requerir que cualquier cambio se anuncie inmediatamente a los usuarios de lectores de pantalla. Esto puede incluir mensajes de estado, como la actualización del número de resultados de una búsqueda, o un mensaje de error que se muestra tras un envío fallido del formulario.

```html
<div aria-live="assertive">
  <p>Your session will expire in 30 seconds.</p>
</div>
```

```html
<div aria-live="polite">
  <p>File successfully uploaded</p>
</div>
```

- **Estados ARIA comunes**: Los estados ARIA comunes incluyen `aria-haspopup`, `aria-checked`, `aria-disabled` y `aria-selected`. Estos atributos se pueden usar para indicar el estado de un elemento y ayudar a las personas que usan tecnologías de asistencia a comprender el contenido del sitio web.

- **atributo `aria-haspopup`**: Este estado se usa para indicar que un elemento interactivo activará un elemento emergente cuando se active. Solo puede usar el atributo `aria-haspopup` cuando la ventana emergente tenga uno de los siguientes roles: `menu`, `listbox`, `tree`, `grid`, o `dialog`. El valor de `aria-haspopup` debe ser uno de estos roles o `true`, que es lo mismo que `menu`.

```html
<button id="menubutton" aria-haspopup="menu" aria-controls="filemenu" aria-expanded="false">File</button>
<ul id="filemenu" role="menu" aria-labelledby="menubutton" hidden>
  <li role="menuitem" tabindex="-1">Open</li>
  <li role="menuitem" tabindex="-1">New</li>
  <li role="menuitem" tabindex="-1">Save</li>
  <li role="menuitem" tabindex="-1">Delete</li>
</ul>
```

- **atributo `aria-checked`**: Este atributo se usa para indicar si un elemento está en el estado checked. Se usa con mayor frecuencia al crear casillas de verificación personalizadas, botones de opción, interruptores y cuadros de lista.

```html
<div role="checkbox" aria-checked="true" tabindex="0">Checkbox</div>
```

- **atributo `aria-disabled`**: Este estado se usa para indicar que un elemento está deshabilitado solo para personas que usan tecnologías de asistencia, como lectores de pantalla.

```html
<div role="button" tabindex="-1" aria-disabled="true">Edit</div>
```

- **atributo `aria-selected`**: Este estado se usa para indicar que un elemento está seleccionado. Puede usar este estado en controles personalizados como una interfaz con pestañas, un cuadro de lista o una cuadrícula.

```html
<div role="tablist">
  <button role="tab" aria-selected="true">Tab 1</button>
  <button role="tab" aria-selected="false">Tab 2</button>
  <button role="tab" aria-selected="false">Tab 3</button>
</div>
```

- **atributo `aria-controls`**: Se usa para asociar un elemento con otro elemento que controla. Esto ayuda a las personas que usan tecnologías de asistencia a comprender la relación entre los elementos.

```html
<div role="tablist">
  <button role="tab" id="tab1" aria-controls="section1" aria-selected="true">
      Tab 1
  </button>
  <button role="tab" id="tab2" aria-controls="section2" aria-selected="false">
      Tab 2
  </button>
  <button role="tab" id="tab3" aria-controls="section3" aria-selected="false">
      Tab 3
  </button>
</div>
```

- **atributo `aria-describedby`**: Se utiliza para proporcionar información adicional sobre un elemento asociándolo con otro elemento que contiene la información. Esto brinda a las personas que usan lectores de pantalla acceso inmediato a la información adicional cuando navegan por el elemento. El uso común incluiría asociar instrucciones de formato a una entrada de texto o un mensaje de error a una entrada después de un envío de formulario no válido.

```html
<form>
    <label for="password">Password:</label>
    <input type="password" id="password" aria-describedby="password-help" />
    <p id="password-help">Your password must be at least 8 characters long.</p>
</form>
```
