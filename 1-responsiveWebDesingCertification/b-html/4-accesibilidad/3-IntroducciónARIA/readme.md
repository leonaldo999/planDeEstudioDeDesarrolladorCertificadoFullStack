# Introducción a ARIA

En estos vídeos aprenderá a trabajar con roles ARIA.

---

## ¿Para qué sirve WAI-ARIA y cómo funciona?

Hacer accesible el contenido estático puede ser relativamente sencillo, pero el contenido dinámico puede ser más complicado. Aquí es donde entra en juego `WAI-ARIA`.

Veamos qué es `WAI-ARIA`, su propósito, cómo funciona y algunos ejemplos.

`WAI-ARIA` son las siglas de Web Accessibility Initiative - Accessible Rich Internet Applications. Se trata de una especificación que mejora la accesibilidad de los contenidos dinámicos y los componentes de interfaz de usuario.

Tenga en cuenta que `WCAG` y `WAI-ARIA` no son lo mismo. WCAG proporciona directrices generales para la accesibilidad web, mientras que `WAI-ARIA` ofrece reglas específicas para hacer accesibles los contenidos dinámicos e interactivos a los usuarios de tecnologías de asistencia.

Por tanto, el objetivo principal de `WAI-ARIA` es mejorar la accesibilidad de los contenidos dinámicos y los componentes de interfaz de usuario que no tienen equivalentes nativos en HTML.

WAI-ARIA funciona introduciendo un conjunto de atributos que se pueden añadir a los elementos HTML para proporcionar información semántica adicional. Estos atributos se clasifican en roles, estados y propiedades.

El rol ARIA define el propósito de un elemento dentro de un sitio o aplicación web. A continuación se muestra un ejemplo en el que se establece la función de `button` para un elemento `div`.

- **Codigo Ejemplo**

  ```html
  <!-- Ejemplo de un boton accesible -->
  <div role="button">Click Me</div>
  ```

De este modo, está indicando a la tecnología de asistencia que el elemento es un botón. Sin embargo, los roles no proporcionan ninguna funcionalidad. El mero hecho de asignar a este `div` el `role` de `button` no hará que se comporte como tal. Para que se vea y se comporte como un botón, tendrá que utilizar CSS y JavaScript para obtener el resultado deseado. Siempre es mejor utilizar el `button` o `input` con `type="button"` en su lugar.

Dado que el HTML por sí solo no proporciona una forma de hacer accesibles componentes de interfaz de usuario personalizados como la navegación por pestañas (lista de pestañas), los roles ARIA pueden ser muy útiles.

Este es el aspecto que podría tener una lista de pestañas con el atributo `role`:

- **Codigo Ejemplo**

  ```html
  <!-- Ejemplo de una lista de pestañas accesible -->
  <div role="tablist" aria-label="Football Match Dashboard">
    <button
      role="tab"
      aria-selected="true"
      aria-controls="match-info-panel"
      id="match-info-tab">
        Match Info
    </button>

    <button
      role="tab"
      aria-selected="false"
      aria-controls="player-stats-panel"
      id="player-stats-tab">
      Player Stats
    </button>
  </div>
  ```

Cada pestaña de la lista de pestañas tendrá un panel de pestañas asociado que se mostrará cuando se seleccione su pestaña. Cada panel de pestañas tendrá el `role` de `tabpanel`.

He aquí cómo podría ser cada uno de esos paneles de pestañas:

- **Codigo Ejemplo**

  ```html
  <!-- Ejemplo de un panel de pestañas accesible -->
  <div 
    role="tabpanel"
    id="match-info-panel" 
    aria-labelledby="match-info-tab"
  >
     <p>
       Details about the match, including date,
       time, venue, and current score.
     </p>
  </div>
  
  <div
     role="tabpanel"
     id="player-stats-panel"
     aria-labelledby="player-stats-tab"
     hidden
  >
     <p>
       Individual player statistics such as goals,
       assists, and minutes played.
     </p>
  </div>  
  ```

El estado ARIA describe el estado actual de un elemento, que puede cambiar en función de las interacciones del usuario. Un ejemplo es el atributo `aria-expanded` para las secciones plegables:

- **Codigo Ejemplo**

  ```html
  <!-- Ejemplo de un botón accesible -->
  <button aria-expanded="false" aria-controls="more-info">
    More Info
  </button>
  
  <div id="more-info" hidden>
     <p>This is additional information.</p>
  </div>
  ```

De nuevo, esto es simplemente describir el estado, no proporciona ninguna funcionalidad. Tendría que utilizar JavaScript para cambiar el estado del atributo cuando el usuario haga clic en el botón.

Las propiedades ARIA proporcionan detalles adicionales sobre los elementos. Por ejemplo, la propiedad `aria-labelledby` permite conectar un elemento a una etiqueta específica:

- **Codigo Ejemplo**

  ```html
  <!-- Ejemplo de un botón accesible -->
  <h2 id="header-id">About freeCodeCamp</h2>
  <button id="button-id" aria-labelledby="header-id button-id">Learn More</button>
  ```

Esto hará que los elementos sean comprensibles y navegables para los usuarios de tecnologías de asistencia.

Para sacar el máximo partido de WAI-ARIA, intenta utilizar HTML nativo siempre que sea posible, ya que suele proporcionar más accesibilidad desde el primer momento.

Utiliza WAI-ARIA sólo cuando HTML se quede corto, y no te olvides de hacer pruebas con tecnologías de asistencia como lectores de pantalla, o haz que personas con discapacidades prueben tu trabajo. Además, asegúrate de que tus estados y propiedades WAI-ARIA se actualizan con el contenido en tiempo real. Evita abusar de ARIA, ya que puede resultar confuso en muchas ocasiones.

---

## Cuestionario 1

- **¿Cuál es la finalidad principal de los atributos WAI-ARIA en HTML?**

  - a) Para cambiar el aspecto visual de los elementos.
  - b) Proporcionar información semántica adicional para la accesibilidad. // correcto
  - c) Para mostrar información sobre herramientas en los elementos.
  - d) Para añadir animaciones a los elementos.

- **¿Cómo funciona WAI-ARIA para mejorar la accesibilidad web?**

  - a) Mejorando la velocidad de carga de las páginas.
  - b) Introduciendo atributos que aportan información semántica adicional. // correcto
  - c) Cifrando los datos.
  - d) Creando efectos visuales para los elementos.

- **¿Qué significa WAI-ARIA?**

  - a) Web Accessibility Initiative - Advanced Responsive Internet Applications
  - b) Web Accessibility Interface - Accessible Resource Internet Applications
  - c) Web Accessibility Initiative - Accessible Rich Internet Applications // correcto
  - d) Web Application Interface - Accessibility and Richness

---

## ¿Qué son las funciones ARIA?

ARIA son las siglas de **Accessible Rich Internet Applications**.

Los roles `ARIA` especifican el significado semántico de los elementos `HTML`. Son esenciales para que los contenidos web sean accesibles a las personas que utilizan tecnologías de asistencia, como los lectores de pantalla.

`HTML` tiene elementos semánticos y no semánticos, en función de si transmiten significado sobre su contenido.

Muchos elementos `HTML` semánticos ya tienen asignado por defecto un rol `ARIA`. Por ejemplo, el elemento `button` tiene un rol `ARIA` por defecto de `button`.

- **Codigo Ejemplo**

  ```html
  <button>Example button</button>
  ```

Pero los elementos no semánticos no tienen un rol. Por ejemplo, los lectores de pantalla no sabrán interpretar el propósito de un `div` si no se especifica explícitamente su función.

- **Codigo Ejemplo**

  ```html
  <div>
    <!-- more elements go here -->
  </div>
  ```

Para especificar el rol ARIA de un elemento, basta con añadir el atributo `role`, como este `role="ARIA role"`, donde value es el nombre de un rol en la especificación ARIA.

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css">
  
  <div class="alert" id="exp-warning" role="alert">
    <span class="hidden">Your log in session will expire in 3 minutes.</span>
  </div>
  ```

  ```css
  .alert {
    background-color: #fff3cd;
    border: 1px solid #ffeeba;
    color: #856404;
    padding: 1em;
    margin-top: 1em;
    border-radius: 4px;
    font-weight: bold;
  }
  
  .alert span {
    display: inline-block;
  }
  ```

Es importante tener en cuenta que especificar una función en un elemento sólo hace una cosa: informa a la tecnología de asistencia de la finalidad del elemento. No añade ninguna funcionalidad o comportamiento al elemento. Si la gente espera que un rol se comporte de una determinada manera, depende de ti, el desarrollador, añadir ese comportamiento esperado.

Por ejemplo, añadir un `role` de `button` a un `div` no lo hace automáticamente clicable con un ratón o utilizable con un teclado. Es responsabilidad del desarrollador añadir el comportamiento esperado que permita al `div` actuar como un botón y, en la mayoría de los casos, es mejor utilizar el elemento `button`.

Hay seis categorías principales de roles ARIA:

- Document structure roles
- Widget roles
- Landmark roles
- Live region roles
- Window roles
- And Abstract roles

Veámoslos con más detalle.

Los roles de estructura del documento definen la estructura general de la página web. Con estos roles, las tecnologías de asistencia pueden entender las relaciones entre las distintas secciones y ayudar a los usuarios a navegar por el contenido.

Sin embargo, la mayoría de los roles de estructura de documento no se utilizan en el desarrollo web moderno porque los navegadores ya admiten elementos HTML semánticos equivalentes, a los que debe darse prioridad siempre que sea posible.

Debe especificar los roles que no tienen un elemento semántico equivalente. Por ejemplo: `toolbar`, `tooltip`, `feed`, `math`, `presentation`, `none` y `note`.

Existen otros roles similares, pero estos son los más utilizados. Este es un ejemplo de un `div` con el rol ARIA `math`. El `div` contiene una ecuación matemática.

- **Codigo Ejemplo**

  ```html
  <!-- Ejemplo de un div con rol ARIA math -->
  <div role="math" aria-label="x squared + y squared = 3">
    x<sup>2</sup> + y<sup>2</sup> = 3
  </div>
  ```

También observará que el `div` tiene un atributo `aria-label`. El valor de este atributo debe ser una cadena que represente la expresión.

Los roles de widget definen el propósito y la funcionalidad de los elementos interactivos, como las barras de desplazamiento.

Algunos ejemplos de roles de widget son  `scrollbar`, `searchbox`, `separator` (cuando es enfocable), `slider`, `spinbutton`, `switch`, `tab`, `tabpanel`, y `treeitem`.

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css">

  <div class="search-container" role="search">
    <label for="searchbox" class="visually-hidden">Search</label>
  
    <div
      id="searchbox"
      class="searchbox"
      role="searchbox"
      aria-label="Search the site"
      tabindex="0"
      contenteditable="true">
    </div>
  
    <button type="button" aria-label="Submit search">Search</button>
  </div>
  
  ```

  ```css
  .search-container {
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-top: 1em;
  }
  
  .searchbox {
    flex: 1;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1em;
    min-height: 1.5em;
  }
  
  .searchbox:focus {
    border-color: #007acc;
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 122, 204, 0.3);
  }
  
  button {
    padding: 0.5em 1em;
    background-color: #007acc;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #005fa3;
  }
  
  /* Hide visually but keep for screen readers */
  .visually-hidden {
    position: absolute;
    left: -9999px;
  }
  ```

Algunos de estos roles tienen elementos semánticos equivalentes. Debe dar prioridad al elemento semántico sobre el rol si existe uno. Por ejemplo, debe favorecer el uso del elemento HTML `button` sobre añadir un `role` de `button` a un `div`.

Los roles de referencia clasifican y etiquetan las secciones principales de una página web. Los lectores de pantalla los utilizan para proporcionar una navegación cómoda a las secciones importantes de una página. Deben utilizarse con moderación para que el diseño general sea sencillo y fácil de entender. Ejemplos de landmark roles son `banner`, `complementary`, `contentinfo`, `form`, `main`, `navigation`, `region` y `search`. Cada uno de estos roles tiene su equivalente HTML correspondiente, como `header`, `footer`, `aside`, `form`, `main`, `nav`, `section`, y `search`. Si utiliza los elementos HTML adecuados para definir las secciones de su página, no es necesario añadir explícitamente el atributo `role` a estos elementos.

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css">

  <div role="banner" class="site-banner">
    <h1>Accessible Web Design</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Articles</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </div>
  ```

  ```css
  .site-banner {
  background-color: #007acc;
  color: #fff;
  padding: 1em 1.5em;
  border-radius: 4px;
  }
  
  .site-banner h1 {
    margin: 0 0 0.5em;
    font-size: 1.5em;
  }
  
  .site-banner nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1em;
  }
  
  .site-banner nav a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
  }
  
  .site-banner nav a:hover {
    text-decoration: underline;
  }
  ```

Los roles de región activa definen elementos con contenido que cambiará dinámicamente. De este modo, los lectores de pantalla y otras tecnologías de asistencia pueden anunciar los cambios a los usuarios con discapacidad visual. Estos roles incluyen: `alert`, `log`, `marquee`, `status`, y `timer`.

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css">

  <div class="status-demo">
    <button id="update-status-btn">Check Status</button>
    <div id="status-msg" role="status" class="status-message">
      No updates yet.
    </div>
  </div>
  
  <script src="index.js"></script>
  ```

  ```css
  .status-demo {
  margin-top: 1em;
  }
  
  button {
    padding: 0.5em 1em;
    background-color: #007acc;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #005fa3;
  }
  
  .status-message {
    margin-top: 0.75em;
    padding: 0.75em;
    background-color: #e8f4ff;
    border: 1px solid #b3d8ff;
    border-radius: 4px;
    font-weight: 500;
  }
  ```

  ```js
  const button = document.getElementById("update-status-btn");
  const statusMessage = document.getElementById("status-msg");
  
  button.addEventListener("click", () => {
    statusMessage.textContent = "Your upload has completed successfully.";
  });
  ```

Los roles de Window definen subventanas, como los diálogos modales emergentes. Estos roles incluyen `alertdialog` y `dialog`. Tenga en cuenta que actualmente se considera una buena práctica utilizar el elemento de `dialog` HTML y sus métodos JavaScript asociados en lugar de crear manualmente un diálogo.

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css">

  <button id="open-dialog">Open Dialog</button>
  
  <div id="custom-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" class="dialog">
    <div class="dialog-content">
      <h3 id="dialog-title">Confirm Action</h3>
      <p>Are you sure you want to delete this file?</p>
      <div class="dialog-actions">
        <button id="confirm-btn">Yes</button>
        <button id="close-dialog">Cancel</button>
      </div>
    </div>
  </div>
  
  <script src="index.js"></script>
  ```

  ```css
  body {
  font-family: Arial, sans-serif;
  margin: 2em;
  }
  
  button {
    padding: 0.5em 1em;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #007acc;
    color: white;
    font-size: 1em;
  }
  
  button:hover {
    background-color: #005fa3;
  }
  
  .dialog {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    justify-content: center; 
    align-items: center;   
    z-index: 1000;
  }
  
  .dialog-content {
    background-color: white;
    padding: 1.5em;
    border-radius: 8px;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  
  .dialog-actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.5em;
    margin-top: 1em;
  }
  ```

  ```js
  const dialog = document.getElementById("custom-dialog");
  const openBtn = document.getElementById("open-dialog");
  const closeBtn = document.getElementById("close-dialog");
  const confirmBtn = document.getElementById("confirm-btn");
  
  openBtn.addEventListener("click", () => {
    dialog.style.display = "flex";
  });
  
  closeBtn.addEventListener("click", () => {
    dialog.style.display = "none";
  });
  
  confirmBtn.addEventListener("click", () => {
    alert("File deleted.");
    dialog.style.display = "none";
  });
  ```

Por último, tenemos los roles abstractos. Estos roles ayudan a organizar el documento. Sólo están pensados para ser utilizados internamente por el navegador, no por los desarrolladores, así que debes saber que existen pero no debes utilizarlos en tus sitios o aplicaciones web.

Los roles ARIA permiten crear sitios y aplicaciones web accesibles e inclusivos. Proporcionan información semántica sobre el propósito y la función de los elementos HTML.

Los lectores de pantalla y otras tecnologías de asistencia utilizan esta información para ayudar a los usuarios a comprender el contenido de su página y establecer expectativas sobre cómo utilizarla, lo que contribuye a garantizar que todo el mundo pueda disfrutar de una gran experiencia de usuario.

---

## Cuestionario 2

- **¿Cuál es el objetivo principal de las funciones ARIA?**

  - a) Definir el aspecto visual de los elementos.
  - b) Para mejorar el rendimiento del sitio web.
  - c) Proporcionar información semántica sobre la finalidad de los elementos. // correcto
  - d) Para mejorar la compatibilidad de los navegadores.

- **¿Qué categoría de roles ARIA se utiliza para definir la finalidad y el comportamiento de las subventanas, como los diálogos modales emergentes?**

  - a) Widget roles.
  - b) Document structure roles.
  - c) Landmark roles.
  - d) Window roles. // correcto

- **¿Qué categoría de roles ARIA se utiliza para indicar contenido dinámico que debe anunciarse a los usuarios?**

  - a) Widget roles.
  - b) Document structure roles.
  - c) Landmark roles.
  - d) Live region roles. // correcto

---

## ¿Qué función desempeñan los atributos `aria-label` y `aria-labelledby`?

Es importante garantizar que todos los usuarios, incluidos los discapacitados, puedan acceder a los sitios web sin problemas.

Para los usuarios de lectores de pantalla, los atributos `aria-label` y `aria-labelledby` proporcionan información crucial sobre elementos de la página que pueden resultar poco claros o invisibles.

Veamos qué son los atributos `aria-label` y `aria-labelledby` y qué papel desempeñan en la accesibilidad de la web para personas con discapacidad visual y discapacidades afines.

Verás que tanto `aria-label` como `aria-labelledby` llevan el prefijo aria. ¿Qué significa eso? **ARIA** son las siglas de **Accessible Rich Internet Applications**.
Se trata de un conjunto de atributos con el prefijo `aria-`, que permite a los desarrolladores comunicar el propósito de los elementos a las tecnologías de asistencia. El atributo `aria-label` es una etiqueta invisible para elementos interactivos.
Añade una etiqueta de texto a un elemento que los lectores de pantalla pueden leer.

`aria-label` es especialmente útil para los elementos que no tienen texto visible pero que necesitan ser descritos por los lectores de pantalla.
*Por ejemplo*, los botones que sólo tienen iconos a menudo necesitan `aria-label` para transmitir su propósito.

**He aquí un ejemplo**:

- **Codigo Ejemplo**:

  ```html
  <button aria-label="Search">
    <i class="fas fa-search"></i>
  </button>
  ```

En este caso, un lector de pantalla puede anunciar este botón como `Search, button`, aunque el botón sólo contenga un icono. El atributo `aria-label` indica a los lectores de pantalla qué texto deben utilizar en lugar del icono.

Si el botón contuviera el texto «Search» en lugar de un icono, no sería necesario el atributo `aria-label`, ya que el texto proporcionaría la etiqueta para el botón.

Para los elementos de entrada, el atributo `aria-label` proporciona una etiqueta directamente si no hay una etiqueta visible asociada a la entrada.

El atributo `aria-labelledby` hace exactamente lo mismo que el atributo `aria-label`, pero en lugar de definir el texto directamente en el atributo, se utiliza una referencia a un texto que ya existe en la página.
El texto existente debe tener un atributo **id**, que se utilizará para el valor de referencia en el atributo `aria-labelledby`.

**He aquí un ejemplo**:

- **Codigo Ejemplo**

  ```html
  <input type="text" aria-labelledby="search-btn">
  <button type="button" id="search-btn">Search</button>
  ```

En este caso, el texto del botón se utiliza como etiqueta para la entrada de búsqueda.
Los lectores de pantalla anunciarán la entrada como algo parecido a `Search, edit`. Si más adelante decide cambiar el texto del botón a `Find`, la etiqueta de la entrada se actualizará automáticamente con el nuevo texto, ya que hace referencia al texto del botón. También es posible combinar varios valores de `id` en un único valor de atributo `aria-labelledby`. Así es como funciona:

- **Codigo Ejemplo**

  ```html
  <div>
    <span id="volume-label">Volume</span>
    <span id="volume-details">Adjust the volume level</span>
    <input
      type="range"
      min="0"
      max="100"
      value="30"
      aria-labelledby="volume-label volume-details">
  </div>
  ```

En el caso del deslizador, el lector de pantalla buscará el contenido de los elementos `volume-label` y `volume-details`, y anunciará `Volume Adjust the volume level`.

Ya has visto que los atributos `aria-label` y `aria-labelledby` ayudan a los lectores de pantalla a entender qué hacen los elementos. Entonces, ¿cuál debería utilizar? Dado que ambos proporcionan la misma funcionalidad, se puede utilizar cualquiera de ellos, pero puede haber algunas ventajas en el uso de `aria-labelledby` sobre `aria-label`:

- Si alguien utiliza un servicio de traducción para traducir el contenido de su página, es posible que el texto de un atributo `aria-label` no siempre se traduzca.

- El uso de `aria-labelledby` también puede ayudar a evitar un desajuste entre el texto de la etiqueta visible y la etiqueta invisible para los usuarios de lectores de pantalla, ya que la actualización del texto visible actualizará automáticamente la etiqueta invisible.

- `aria-labelledby` puede facilitar mucho la creación programática de etiquetas invisibles complejas compuestas por múltiples fuentes de texto.

Una última nota, no utilice `aria-label` y `aria-labelledby` en un elemento al mismo tiempo. En este caso, la etiqueta invisible para los lectores de pantalla siempre estará determinada por `aria-labelledby` y `aria-label` será completamente ignorada.

---

## Cuestionario 3

- **¿Qué significa ARIA?**

  - a) Accessible Rich Internet Applications. // correcto
  - b) Advanced Resource Integration Accessibility.
  - c) Automated Rich Internet Access.
  - d) Accessible Responsive Interactive Applications.

- **¿Qué hacen `aria-label` y `aria-labelledby`?**

  - a) Modifican el aspecto visual de los elementos.
  - b) Proporcionan etiquetas a los elementos para mejorar la accesibilidad de los lectores de pantalla. // correcto
  - c) Cambian la funcionalidad de las entradas de los formularios.
  - d) Añaden efectos de animación a los elementos.

- **¿Cuándo utilizar `aria-labelledby` en lugar de `aria-label`?**

  - a) Cuando necesite proporcionar un tooltip para un elemento.
  - b) Cuando quieras cambiar el color de un elemento.
  - c) Cuando necesite ocultar un elemento a los lectores de pantalla.
  - d) Cuando existe texto visible en la página que puede utilizarse como etiqueta. // correcto

---

## ¿Qué es el atributo `aria-hidden` y cómo funciona?

Si alguna vez necesitas mostrar contenido y, al mismo tiempo, ocultarlo a personas que utilizan tecnología de asistencia, como lectores de pantalla, puedes utilizar el atributo `aria-hidden`.

Sólo tienes que añadirlo al elemento HTML que quieras ocultar y establecer su valor en `true`, como puedes ver aquí: `aria-hidden=«true»`.

Este atributo oculta el elemento y todos sus hijos del árbol de accesibilidad, pero los mantiene visibles en la página. Los casos de uso común incluyen:

- Iconos e imágenes que sólo tienen una función decorativa.
- Contenido duplicado.

Es importante recordar que `aria-hidden` sólo oculta el contenido a la tecnología de asistencia, como los lectores de pantalla. Si el contenido debe estar oculto para todo el mundo, no debe utilizar `aria-hidden` para ocultarlo. Por ejemplo, un menú de hamburguesa que está actualmente contraído debe ocultarse a todos los usuarios de teclado, no sólo a los usuarios de lectores de pantalla. En este caso, podrías establecer la propiedad CSS `display` a `none` en el menú para eliminarlo del DOM cuando esté colapsado.

Nunca debe utilizar `aria-hidden` para ocultar un elemento que es enfocable con el teclado. El atributo `aria-hidden` sólo elimina el elemento del árbol de accesibilidad. No lo elimina del DOM. Por lo tanto, los usuarios de lectores de pantalla aún podrán desplazarse hasta el elemento, pero su lector de pantalla no anunciará el elemento, lo que hará que se centren en «nada».

He aquí un ejemplo en el que ocultamos un icono del árbol de accesibilidad añadiendo el atributo `aria-hidden` con el valor `true`.

Sólo mantenemos el texto expuesto a las tecnologías de asistencia para evitar cualquier confusión que pueda surgir de la redundancia de tener tanto un icono como texto para el mismo propósito.

- **Codigo Ejemplo**

  ```html
  <button>
    <i class="fa-solid fa-gear" aria-hidden="true"></i>
    <span class="label">Settings</span>
  </button>
  ```

No es necesario utilizar `aria-hidden` cuando:

- El elemento HTML ya tiene un atributo `hidden`.
- El elemento o el ancestro del elemento ya está oculto con `display: none`.
- El elemento o el ancestro del elemento ya está oculto con `visibility: hidden`.

En estos tres casos, el elemento ya está eliminado del DOM y, por tanto, oculto del árbol de accesibilidad, por lo que el atributo `aria-hidden` no es necesario.

Al igual que con el uso de cualquier atributo ARIA, siempre debe realizar pruebas con tecnologías de asistencia y, preferiblemente, hacer que personas con discapacidades prueben su trabajo, para asegurarse de que es fácil de entender, incluso con estos elementos ocultos.

También debes saber que establecer `aria-hidden` en `false` no expondrá el elemento a las tecnologías de asistencia si alguno de sus padres tiene este atributo establecido en `true`.

El atributo `aria-hidden` se utiliza para ocultar elementos a las personas que utilizan tecnologías de asistencia, como los usuarios de lectores de pantalla.

Aunque puede ser útil para ocultar elementos puramente decorativos y contenido duplicado, debe utilizarse con moderación para no dificultar la accesibilidad.

En general, todos los contenidos y funcionalidades disponibles en la página deben estar también disponibles para las personas que utilicen tecnología de asistencia. El uso de `aria-hidden` es muy restringido y debe limitarse principalmente a hacer que la experiencia sea más limpia para los usuarios de lectores de pantalla, eliminando información puramente decorativa o duplicada. No utilices `aria-hidden` para ocultar contenido que no creas que pueda interesar a los usuarios de lectores de pantalla. Los usuarios de lectores de pantalla merecen tener acceso a toda la información de la página.

Siguiendo estas buenas prácticas y poniendo a prueba la experiencia del usuario, podrá crear experiencias en línea inclusivas para todos.

---

## Cuestionario 4

- **¿Cuál es el objetivo principal del atributo `aria-hidden`?**

  - a) Para definir el aspecto visual de un elemento.
  - b) Para mejorar el rendimiento del sitio web.
  - c) Ocultar elementos de las tecnologías de asistencia. // correcto
  - d) Para mejorar la compatibilidad de los navegadores.

- **¿Cuándo debe utilizarse el atributo `aria-hidden`?**

  - a) Para todos los elementos de la página web.
  - b) Para elementos visualmente ocultos pero importantes para la experiencia del usuario.
  - c) Para elementos decorativos que no contribuyen al contenido principal. // correcto
  - d) Para elementos que se añaden o eliminan dinámicamente.

- **¿Cuáles son los riesgos potenciales del uso excesivo del atributo `aria-hidden`?**

  - a) Reduced website performance.
  - b) Incompatibilidad con navegadores antiguos.
  - c) Accesibilidad dificultada para usuarios con discapacidad. // correcto
  - d) Aumento del tamaño de los archivos.

---

## ¿Qué es el atributo `aria-expanded` y cómo funciona?

El atributo `aria-expanded` se utiliza con fines de accesibilidad para indicar si un control está expandido o colapsado. Se utiliza junto con widgets plegables como menús, acordeones y otros widgets de divulgación que controlan la visibilidad del contenido. El atributo `aria-expanded` se establece en `true` si el control está expandido, o en `false` si está colapsado.

La información proporcionada por `aria-expanded` permite a los usuarios de lectores de pantalla comprender el estado actual del control (si está expandido o contraído).

El atributo `aria-expanded` se aplica al elemento interactivo que activa la visibilidad de un widget plegable. Por ejemplo, si un botón activa un menú desplegable, el atributo `aria-expanded` se coloca en el botón.

Cuando el menú se expande, el atributo `aria-expanded` debe establecerse en `true` como en este ejemplo:

- **Codigo Ejemplo**

  ```html
  <button aria-expanded="true">Menu</button>
  ```

Cuando el menú está colapsado, se debe establecer en `false` en su lugar.

  ```html
  <button aria-expanded="false">Menu</button>
  ```

El atributo `aria-expanded` debe tener siempre el valor `true` o `false` en el elemento controlador. Por ejemplo, si un botón cambia la visibilidad de un menú, el valor predeterminado de `aria-expanded` debe basarse en la visibilidad predeterminada del menú.

Si el menú está desplegado por defecto, `aria-expanded` debe tener inicialmente el valor `true`. Si el menú está contraído por defecto, `aria-expanded` debe ser inicialmente `false`.

El valor de `aria-expanded` debe actualizarse dinámicamente mediante JavaScript a medida que el usuario interactúa con el elemento.

Además, las propiedades `aria-controls` y `aria-owns` pueden utilizarse en combinación con `aria-expanded` para establecer una conexión programática entre el elemento controlador y el elemento que controla.

Empecemos con `aria-controls`. Cuando se utiliza con `aria-expanded`, el atributo `aria-controls` sirve para especificar el elemento que se está controlando. Por ejemplo, un botón puede expandir o contraer una lista actuando como un menú. El valor de `aria-controls` será el `id` del elemento controlado (la lista del menú en este ejemplo).

- **Codigo Ejemplo**

  ```html
  <button aria-expanded="false" aria-controls="menu1">Menu</button>
  <ul id="menu1">
    <li>...</li>
    <li>...</li>
  </ul>
  ```

Observe que la lista sigue inmediatamente al botón de control. Para controles expandibles como éste, lo mejor es que el contenido expandido siga inmediatamente al elemento que lo controla en el DOM. Esto evita que los usuarios de lectores de pantalla tengan que buscar el contenido expandido, y facilita a los usuarios de teclado la navegación a través de cualquier control interactivo en el contenido expandido.

Si no es posible colocar el contenido expandido inmediatamente después del elemento de control, el atributo `aria-owns` permite moverlo virtualmente después del control en el árbol de accesibilidad. Esto permite que la tecnología de asistencia, como los lectores de pantalla, simulen que el contenido expandido se coloca directamente después del control en el DOM.

- **Codigo Ejemplo**

  ```html
  <button aria-owns="menu1" aria-expanded="true">Menu</button>
  <main>
    <!-- an entire page worth of content --->
  </main>
  <ul id="menu1">
    <li>...</li>
    <li>...</li>
  </ul>
  ```

El uso del atributo `aria-owns` tiene sus inconvenientes. Crea una verbosidad innecesaria para los usuarios de lectores de pantalla, ya que la mayoría de los lectores de pantalla leen automáticamente todo el contenido del elemento expandido cuando se expande por primera vez. Tampoco cambia el orden de tabulación, lo que puede obligar a los usuarios de teclado a pasar por todos los demás controles interactivos de la página antes de llegar al contenido expandido, a menos que gestione el orden de tabulación con JavaScript.

Idealmente, el contenido expandible debería colocarse después del elemento de control, y el atributo `aria-owns` sólo debería utilizarse en el peor de los casos cuando eso no sea posible. Si es necesario utilizarlo, tendrás que realizar pruebas exhaustivas con una amplia gama de lectores de pantalla y navegadores para asegurarte de que tu implementación es accesible para todos.

Y sólo un recordatorio, cuando se utiliza ya sea `aria-controls` o `aria-owns`, el valor de `aria-expanded` debe seguir actualizándose a medida que el control se expande y se contrae.

El atributo `aria-expanded` indica si un control está expandido o colapsado. Esta información es esencial para los usuarios de lectores de pantalla, ya que les ayuda a comprender el estado actual de elementos plegables como menús, acordeones y otros widgets de divulgación similares.

Si utiliza `aria-expanded` correctamente, podrá crear una experiencia de usuario intuitiva para todos.

## Cuestionario 5

- **¿Cuál es el objetivo principal del atributo `aria-expanded`?**

  - a) Para definir el aspecto visual de un elemento.
  - b) Para mejorar el rendimiento del sitio web.
  - c) Para indicar si un elemento está expandido o colapsado. // correcto
  - d) Para mejorar la compatibilidad de los navegadores.

- **¿Cuándo debe utilizarse el atributo `aria-expanded`?**

  - a) Para todos los elementos de una página web.
  - b) Para elementos visualmente ocultos.
  - c) Para elementos plegables como menús y acordeones. // correcto
  - d) Para elementos con contenido dinámico.

- **¿Cuáles son los posibles valores del atributo `aria-expanded`?**

  - a) `true`, `false`, `yes`, `no`.
  - b) `open`, `closed`, `expanded`, `collapsed`.
  - c) `show`, `hide`, `visible`, `invisible`.
  - d) `true`, `false`. // correcto

## ¿Qué es el atributo `aria-live` y cómo funciona?

El atributo `aria-live` crea una región activa en la página que puede utilizarse para notificar a los usuarios de lectores de pantalla los cambios dinámicos de contenido que se produzcan en la región activa.

Entre los usos habituales de las regiones activas se encuentran los mensajes que se muestran después de realizar una acción (como un mensaje de error o una confirmación), el contenido que se actualiza periódicamente (como un teletipo, una marquesina o un temporizador de cuenta atrás) o los mensajes de estado general (como las actualizaciones sobre un proceso).

Dado que el foco de lectura de los lectores de pantalla sólo puede estar en un lugar a la vez, los usuarios de lectores de pantalla no notarán un cambio de contenido si su foco está en otra parte de la página. Las regiones activas permiten notificar automáticamente a los usuarios de lectores de pantalla los cambios que se producen en la página en tiempo real. Sin una región activa, los usuarios de lectores de pantalla podrían perderse actualizaciones de contenido importantes que sí están disponibles para los usuarios videntes, ya que un usuario vidente tiene la capacidad de escanear toda la página.

Hay tres valores posibles para este atributo, basados en la prioridad de la información.

Si se establece `aria-live` con el valor `assertive` significa que la actualización es muy importante. Tiene la máxima prioridad, por lo que el usuario debe ser notificado inmediatamente.

Esto significa que el lector de pantalla interrumpirá cualquier anuncio que esté realizando en ese momento para anunciar el cambio de contenido en la región en directo. Estas interrupciones pueden ser muy molestas, por lo que el valor `assertive` sólo debe utilizarse para notificaciones críticas o urgentes.

- **Codigo Ejemplo**

  ```html
  <div aria-live="assertive">
    <p>Your session will expire in 30 seconds.</p>
  </div>
  ```

El siguiente valor en orden de prioridad es `polite`.

Este valor significa que la actualización no es urgente, por lo que el lector de pantalla puede esperar hasta que finalice cualquier anuncio actual o hasta que el usuario deje de escribir antes de anunciar la actualización. La mayoría de las regiones en directo utilizarán el valor `polite`.

- **Codigo Ejemplo**

  ```html
  <div aria-live="polite">
    <p>File successfully uploaded</p>
  </div>
  ```

El valor de prioridad más bajo para `aria-live` es `off`, lo que significa que la actualización no se anunciará a menos que el contenido esté en un elemento que tenga actualmente el foco del teclado. Siendo realistas, este valor casi nunca se utiliza, ya que el caso de uso es muy limitado y no se implementa de forma consistente (si es que se implementa) en todos los lectores de pantalla. Si necesitas regiones en vivo, planea usar `polite` para todo excepto para mensajes críticos que necesiten `assertive`.

También es importante señalar que el atributo `aria-live` no es necesario si la información actualizada está contenida en un elemento con un rol ARIA de `alert`, `log`, `marquee`, `status`, or `timer`, ya que estos roles ya tienen valores `aria-live` por defecto. Pero el valor por defecto puede cambiarse estableciendo explícitamente `aria-live` en el elemento.

La elección del valor correcto de `aria-live` depende de la prioridad de la información actualizada.

Si las actualizaciones son urgentes, deberías notificar al usuario inmediatamente con `assertive`. Sin embargo, solo debes utilizar esta opción si las actualizaciones son realmente urgentes, ya que las interrupciones repentinas pueden desorientar a los usuarios y afectar a su experiencia.

Si la actualización puede esperar hasta que finalice la tarea actual, debe utilizar `polite` en su lugar.

El atributo `aria-live` permite a las tecnologías de asistencia saber cuándo el contenido está cambiando dinámicamente en una página web. Esto ayuda a los usuarios con discapacidad a mantenerse informados sobre anuncios y actualizaciones importantes.

Utilizando `aria-live` adecuadamente, puedes asegurarte de que los usuarios estén al tanto de estas actualizaciones en función de su prioridad.

## Cuestionario 6

- **¿Cuál es la finalidad principal del atributo `aria-live`?**

  - a) Para definir el aspecto visual de un elemento.
  - b) Para mejorar el rendimiento del sitio web.
  - c) Para indicar que el contenido de un elemento cambia dinámicamente. // correcto
  - d) Para mejorar la compatibilidad de los navegadores.

- **¿Cuál de los siguientes valores puede utilizarse para el atributo aria-live?**

  - a) `true`, `false`, `off`.
  - b) `visible`, `hidden`, `off`.
  - c) `assertive`, `polite`, `off`. // correcto
  - d) `open`, `closed`,  `off`.

- **¿Cuál es la diferencia entre los valores `polite` y `assertive` del atributo `aria-live`?**

  - a) `polite` anuncia las actualizaciones inmediatamente, mientras que `assertive` anuncia las actualizaciones cuando el foco de atención está en otro elemento.
  - b) `polite` anuncia las actualizaciones una vez finalizada la tarea actual, mientras que `assertive` anuncia las actualizaciones inmediatamente. // correcto
  - c) No hay diferencia entre `polite` y `assertive`.
  - d) `polite` se utiliza para actualizaciones importantes, mientras que `assertive` se utiliza para actualizaciones menos urgentes.

## ¿Cuáles son los estados **ARIA** más comunes utilizados en los elementos de control personalizados?

Los elementos de control de formularios semánticos como `input`, `select`, `textare`a, `button` y `fieldset` tienen estados incorporados que se transmiten a las tecnologías de asistencia.

Por ejemplo, puede utilizar el atributo `disabled` para desactivar un botón o el atributo `checked` para indicar que una casilla de verificación está marcada.

Pero si está creando un elemento de control personalizado, necesita utilizar atributos ARIA para transmitir el estado del control a las tecnologías de asistencia.

En este vídeo de conferencia, hablaremos de algunos estados ARIA comunes que puede utilizar en elementos de control personalizados.

El primer estado ARIA del que hablaremos es `aria-selected`. Este estado se utiliza para indicar que un elemento está seleccionado. Puede utilizar este estado en controles personalizados como una interfaz de pestañas, un cuadro de lista o una cuadrícula.

He aquí un ejemplo de cómo utilizar `aria-selected` en un control de pestañas personalizado:

- **Codigo Ejemplo**

  ```html
  <div role="tablist">
    <button role="tab" aria-selected="true">Tab 1</button>
    <button role="tab" aria-selected="false">Tab 2</button>
    <button role="tab" aria-selected="false">Tab 3</button>
  </div>
  ```

Las pestañas se utilizan para mostrar varios paneles de contenido en un espacio limitado. El estado `aria-selected` se utiliza para indicar qué pestaña está seleccionada en ese momento.

Cuando el usuario selecciona una pestaña, el estado `aria-selected` de la pestaña seleccionada se establece en `true`, y el estado `aria-selected` de las otras pestañas se establece en `false`.

Otro estado ARIA común es `aria-disabled`. Este estado se utiliza para indicar que un elemento está deshabilitado sólo para las personas que utilizan tecnologías de asistencia, como los lectores de pantalla. Es importante señalar que `aria-disabled` no desactiva realmente el elemento. Depende de usted, el desarrollador, hacer que parezca y actúe como un elemento deshabilitado. Este atributo también se utiliza habitualmente en elementos HTML nativos en lugar del atributo `disabled`. La elección dependerá del contexto en el que se utilice el botón.

He aquí un ejemplo de cómo puede utilizar `aria-disabled` en un botón de edición personalizado:

- **Codigo Ejemplo**

  ```html
  <div role="button" tabindex="-1" aria-disabled="true">Edit</div>
  ```

El atributo `aria-disabled` se utiliza para indicar a los usuarios de lectores de pantalla que el botón de edición está deshabilitado y no se puede interactuar con él. De nuevo, en realidad no desactiva el botón. Cuando utilice `aria-disabled`, tendrá que aplicar estilos y JavaScript para que el control se vea y se comporte como un botón desactivado.

En la mayoría de los casos, es probable que utilice el elemento de botón nativo, pero hay casos en los que puede que necesite utilizar un control personalizado. Por lo tanto, es esencial saber cómo transmitir el estado del control a las tecnologías de asistencia.

El siguiente estado ARIA que trataremos es `aria-haspopup`. Este estado se utiliza para indicar que un elemento interactivo activará un elemento emergente cuando se active. Sólo se puede utilizar el atributo `aria-haspopup` cuando el elemento emergente tiene uno de los siguientes roles: `menu`, `listbox`, `tree`, `grid` o `dialog`. El valor de `aria-haspopup` debe ser uno de estos roles o `true`, que por defecto es el rol de `menu`.

Este es un ejemplo de un menú de editor de archivos que utiliza `aria-haspopup`:

- **Codigo Ejemplo**

  ```html
  <button id="menubutton" aria-haspopup="menu" aria-controls="filemenu" aria-expanded="false">File</button>
  <ul id="filemenu" role="menu" aria-labelledby="menubutton" hidden>
    <li role="menuitem" tabindex="-1">Open</li>
    <li role="menuitem" tabindex="-1">New</li>
    <li role="menuitem" tabindex="-1">Save</li>
    <li role="menuitem" tabindex="-1">Delete</li>
  </ul>
  ```

El estado `aria-haspopup` se utiliza para indicar que el botón del menú `File` abrirá un menú emergente cuando se active. Los usuarios de lectores de pantalla pueden oír esta información adicional cuando navegan hasta el botón.

Deberá utilizar JavaScript para mostrar y ocultar el menú emergente e implementar un soporte de teclado adecuado para interactuar con el menú. Además, tenga en cuenta que la función de `menu` ARIA se refiere a un tipo muy específico de menú. En general, se refiere a una lista de acciones que el usuario puede invocar, similar a un menú en una aplicación de escritorio. No incluye los usos más comunes de lo que solemos llamar «menús», como los menús de navegación. Siendo realistas, la mayoría de los «menús» que cree en la web no serán menús ARIA y no utilizará `aria-haspopup` con ellos.

El siguiente estado ARIA que trataremos es `aria-required`. El atributo `aria-required` se utiliza para indicar que es necesario rellenar un campo antes de enviar el formulario. He aquí un ejemplo de trabajo con el atributo `aria-required` para un control de formulario personalizado.

- **Codigo Ejemplo**

  ```html
  <div id="name-label">Full Name*</div>
  <div role="textbox" contenteditable aria-labelledby="name-label" aria-required="true" id="name"></div>
  ```

Necesitamos utilizar el atributo `contenteditable` para que los usuarios puedan introducir sus datos. También estamos utilizando el atributo `aria-required` establecido en `true` para indicar que este control de formulario personalizado es obligatorio.

Para hacer que el control de formulario parezca un control de formulario normal, tendría que añadir CSS. También tendría que añadir JavaScript para evitar que el formulario se envíe sin contenido.

Si la etiqueta ya tiene la palabra `required`, entonces debería omitir el atributo `aria-required`. Esto asegura que los lectores de pantalla sólo anuncien la palabra requerido una vez.

En la mayoría de los casos, es probable que utilice el `label` nativa y elementos de `form` con el atributo `required`. Pero si necesita crear un control de formulario personalizado, entonces es importante añadir el atributo `aria-required` cuando sea necesario.

Además, el atributo `aria-required` también puede utilizarse en entradas de formularios nativos, como los elementos `input`, `textarea` y `select`. A menudo se prefiere esto al atributo requerido nativo, ya que el atributo requerido puede tener problemas potenciales de usabilidad y accesibilidad, particularmente con el manejo de errores por defecto proporcionado por el navegador. En última instancia, tendrá que hacer pruebas para determinar qué atributo es el mejor para su situación.

El último estado ARIA del que hablaremos es `aria-checked`. Este atributo se utiliza para indicar si un elemento está marcado. Se utiliza con más frecuencia al crear casillas de verificación, botones de radio, interruptores y cuadros de lista personalizados.

A continuación se muestra un ejemplo de cómo se puede utilizar `aria-checked` en un control de casilla de verificación personalizado:

- **Codigo Ejemplo**

  ```html
  <div role="checkbox" aria-checked="true" tabindex="0">Checkbox</div>
  ```

Los elementos de casilla de verificación nativos tienen un estado `checked` incorporado que se transmite a las tecnologías de asistencia. Pero si está creando un control de casilla de verificación personalizado, tendrá que utilizar el atributo `aria-checked` para indicar su estado.

Cuando el usuario interactúa con el control de checkbox personalizado, necesitará utilizar el estado `aria-checked` para reflejar el nuevo estado del checkbox. Cuando la casilla de verificación está marcada, el atributo `aria-checked` se establece en `true`. Cuando no está marcada, se establece en `false`.

Los elementos nativos suelen tener mejor soporte y funciones de accesibilidad incorporadas.

Sin embargo, si debe crear controles personalizados, el uso de atributos ARIA es esencial para transmitir eficazmente el estado de estos controles a las tecnologías de asistencia.

Como siempre, pruebe su trabajo para asegurarse de que los atributos ARIA se aplican correctamente y de que el control personalizado funciona de forma accesible y fácil de usar.

## Cuestionario 7

- **¿Qué estado ARIA utilizaría para indicar que una pestaña está actualmente seleccionada?**

  - a) `aria-disabled`
  - b) `aria-selected` // correcto
  - c) `aria-haspopup`
  - d) `aria-checked`

- **En el contexto de los controles personalizados, ¿qué estado ARIA se utiliza para indicar que un elemento está actualmente desactivado?**

  - a) `aria-checked`
  - b) `aria-disabled` // correcto
  - c) `aria-selected`
  - d) `aria-haspopup`

- **Cuando se desea indicar que un elemento de menú tiene un submenú, ¿qué estado ARIA debe utilizarse?**

  - a) `aria-checked`
  - b) `aria-disabled`
  - c) `aria-haspopup` // correcto
  - d) `aria-selected`

## ¿Qué es el atributo `aria-controls` y cómo funciona?

El atributo `aria-controls` se utiliza para crear una relación programática entre un elemento que controla la presencia de otro elemento en la página y el elemento que controla. Esta relación puede ayudar a los usuarios de lectores de pantalla a comprender mejor cómo funciona el control. Los usos más comunes incluyen un conjunto de pestañas que controlan la visibilidad de diferentes secciones de contenido, o un botón que alterna la visibilidad de un menú.

Veamos un ejemplo para ver cómo funciona. En este ejemplo de interfaz con pestañas, tenemos un elemento `div` con un conjunto de tres botones:

- **Codigo Ejemplo**

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

Cada botón representa una pestaña y tiene un atributo `role` definido como `tab`. En la mayoría de las interfaces con pestañas, el primer panel de pestañas es visible por defecto, por lo que el primer botón de pestaña tiene un atributo `aria-selected` establecido a `true` para indicar que su sección de contenido asociada está visible en ese momento El atributo `aria-controls` se utiliza para asociar cada botón con la sección de contenido que controla.

Estas son las tres secciones de contenido que corresponden a las pestañas:

- **Codigo Ejemplo**

  ```html
  <div id="section1" role="tabpanel" aria-labelledby="tab1">
  Section 1 content
  </div>
  
  <div id="section2" role="tabpanel" aria-labelledby="tab2" hidden>
    Section 2 content
  </div>
  
  <div id="section3" role="tabpanel" aria-labelledby="tab3" hidden>
    Section 3 content
  </div>
  ```

Cada sección de contenido tiene un atributo `role` definido como `tabpanel` y un atributo `aria-labelledby` que apunta a la pestaña correspondiente para dar al panel un nombre accesible. El atributo `hidden` se utiliza para ocultar las secciones de contenido que no están seleccionadas en ese momento. Cada id de sección coincide con el valor del atributo `aria-controls` del botón correspondiente. El id de `section1` coincide con el atributo `aria-controls` del primer botón, `section2` coincide con el atributo `aria-controls` del segundo botón y `section3` coincide con el atributo `aria-controls` del tercer botón. Así se establece la asociación entre las pestañas y sus secciones de contenido.

Para pasar de una sección a otra, deberá utilizar JavaScript para actualizar el atributo `hidden` de la sección y el atributo `aria-selected` del botón en función de la sección que esté visible en ese momento. Sólo una sección puede ser visible a la vez y no debe tener el atributo `hidden` y `aria-selected` debe ser `true` en su botón. El resto de secciones ocultas deben tener el atributo `hidden` y aria-selected debe ser `false` en sus botones.

Las pestañas son un caso de uso común para el atributo `aria-controls`, pero se puede utilizar en otros escenarios en los que un elemento controla la visibilidad o el comportamiento de otro elemento. Otros ejemplos son los acordeones, los menús desplegables y los modales.

La próxima vez que diseñe una interfaz de usuario que implique el control de la visibilidad de los elementos, considere la posibilidad de utilizar el atributo `aria-controls` para establecer la relación entre el elemento controlador y el elemento controlado.

## Cuestionario 8

- **¿Para qué sirve el atributo `aria-controls` en el contexto de las pestañas?**

  - a) Para especificar qué pestaña está activa en ese momento.
  - b) Para ocultar o mostrar secciones de contenido.
  - c) Para asociar una pestaña a la sección que controla. // correcto
  - d) Para establecer el papel del elemento.

- **¿Cómo afecta el atributo `aria-controls` a las secciones de contenido del ejemplo?**

  - a) Actualiza automáticamente el contenido en función de las entradas del usuario.
  - b) Oculta o muestra secciones en función de la pestaña seleccionada. // correcto
  - c) Cambia el estilo de la pestaña para indicar que está seleccionada.
  - d) Define el aspecto visual de la pestaña.

- **En el ejemplo proporcionado, ¿cómo se utiliza el atributo `aria-labelledby`?**

  - a) Para especificar qué pestaña controla qué sección de contenido.
  - b) Para identificar la sección de contenido que controla una pestaña. // correcto
  - c) Para definir la función de la pestaña y las secciones de contenido.
  - d) Para pasar automáticamente de una sección de contenido a otra al hacer clic en una pestaña.

## ¿Qué es el atributo `aria-describedby` y cómo funciona?

El atributo `aria-describedby` se utiliza para proporcionar información adicional sobre un elemento a los usuarios de lectores de pantalla haciendo referencia al contenido existente en la página. Crea una asociación programática entre el elemento y el contenido (denominada técnicamente descripción accesible), que los lectores de pantalla pueden utilizar para informar a los usuarios de la información adicional cuando interactúan con el elemento.

El uso más común de `aria-describedby` es asociar instrucciones y mensajes de error a las entradas de un formulario. Debido a los diversos métodos que tienen los usuarios de lectores de pantalla para navegar por una página, pueden perderse estos mensajes al navegar entre las entradas. Usar `aria-describedby` ayuda a asegurar que los escucharán.

Veamos algunos ejemplos para entender cómo funciona. En este primer ejemplo, tenemos un elemento de `form` que acepta una contraseña:

- **Codigo Ejemplo**

  ```html
  <form>
    <label for="password">Password:</label>
    <input type="password" id="password" aria-describedby="password-help" />
    <p id="password-help">Your password must be at least 8 characters long.</p>
  </form>
  ```

Estamos utilizando un elemento `label` para el texto `Password` y asociándolo con el `input` de contraseña.

También tenemos un elemento párrafo que describe los requisitos de contraseña. Estamos utilizando el atributo `aria-describedby` para asociar el `input` de contraseña con los requisitos de contraseña en el elemento de párrafo. Cuando un usuario de lector de pantalla interactúe con este `input`, su lector de pantalla anunciará el nombre de la `input` (`Password`) y puede que también anuncie los requisitos de la contraseña. Sin embargo, esto no es una garantía absoluta, ya que es posible que algunos lectores de pantalla no anuncien automáticamente el contenido adicional o que sólo lo hagan en determinadas circunstancias. Esto no es infrecuente. Cada lector de pantalla es diferente y gestiona los atributos ARIA a su manera. Esto no invalida el uso de `aria-describedby`, ya que beneficiará a los usuarios de lectores de pantalla en general.

Otro buen caso de uso del atributo `aria-describedby` es cuando se tiene un `button` de borrado. A continuación se muestra un ejemplo de un `button` de borrado seguido de un mensaje que describe lo que sucederá cuando se haga clic en el botón:

- **Codigo Ejemplo**

  ```html
  <button aria-describedby="delete-message">Delete</button>

  <p id="delete-message">Warning! All deletions are permanent.</p>
  ```

Al igual que en el ejemplo anterior, asociamos el botón de eliminar con el mensaje utilizando el atributo `aria-describedby`. El valor `id` y el valor del atributo `aria-describedby` deben coincidir.

El atributo `aria-describedby` es un atributo potente que puede utilizarse para ayudar a garantizar que se proporcione información adicional sobre un elemento a los usuarios de lectores de pantalla cuando interactúan con el elemento. Se suele utilizar para asociar instrucciones y mensajes de error a las entradas de un formulario con el fin de reducir la posibilidad de que los usuarios de lectores de pantalla no vean estos mensajes mientras navegan por el formulario.

## Cuestionario 9

- **¿Para qué sirve el atributo `aria-describedby` en HTML?**

  - a) Para especificar un identificador único para un elemento.
  - b) Proporcionar información adicional sobre un elemento a las tecnologías de asistencia. // correcto
  - c) Para definir el idioma de un documento HTML.
  - d) Para controlar la visibilidad de un elemento HTML.

- **En los ejemplos proporcionados, ¿cómo mejora el atributo aria-describedby la experiencia del usuario en los campos de formulario?**

  - a) Cambia el aspecto visual de los campos del formulario.
  - b) Asocia texto descriptivo adicional a los campos del formulario para proporcionar más contexto o instrucciones. // correcto
  - c) Valida los valores de entrada de los campos del formulario.
  - d) Rellena automáticamente los campos del formulario con valores por defecto.

- **¿Cómo se utiliza el atributo `aria-describedby` en el ejemplo con el botón de cierre y el cuadro de diálogo modal?**

  - a) Sirve para definir el tamaño del botón de cierre.
  - b) Proporciona una etiqueta para el botón de cierre utilizando un texto independiente.
  - c) Asocia el botón de cierre con una descripción de su acción a las tecnologías de asistencia. // correcto
  - d) Controla el color del botón de cierre.
