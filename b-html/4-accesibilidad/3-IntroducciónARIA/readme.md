# Introducción a ARIA

En estos vídeos aprenderá a trabajar con roles ARIA.

## ¿Para qué sirve WAI-ARIA y cómo funciona?

Hacer accesible el contenido estático puede ser relativamente sencillo, pero el contenido dinámico puede ser más complicado. Aquí es donde entra en juego WAI-ARIA.

Veamos qué es WAI-ARIA, su propósito, cómo funciona y algunos ejemplos.

WAI-ARIA son las siglas de Web Accessibility Initiative - Accessible Rich Internet Applications. Se trata de una especificación que mejora la accesibilidad de los contenidos dinámicos y los componentes de interfaz de usuario.

Tenga en cuenta que WCAG y WAI-ARIA no son lo mismo. WCAG proporciona directrices generales para la accesibilidad web, mientras que WAI-ARIA ofrece reglas específicas para hacer accesibles los contenidos dinámicos e interactivos a los usuarios de tecnologías de asistencia.

Por tanto, el objetivo principal de WAI-ARIA es mejorar la accesibilidad de los contenidos dinámicos y los componentes de interfaz de usuario que no tienen equivalentes nativos en HTML.

WAI-ARIA funciona introduciendo un conjunto de atributos que se pueden añadir a los elementos HTML para proporcionar información semántica adicional. Estos atributos se clasifican en roles, estados y propiedades.

El rol ARIA define el propósito de un elemento dentro de un sitio o aplicación web. A continuación se muestra un ejemplo en el que se establece la función de `button` para un elemento `div`.

- **Codigo Ejemplo**

  ```html
  <!-- Ejemplo de un boton accesible -->
  <div role="button">Click Me</div>
  ```

De este modo, está indicando a la tecnología de asistencia que el elemento es un botón. Sin embargo, los roles no proporcionan ninguna funcionalidad. El mero hecho de asignar a este `div` la `role` de `button` no hará que se comporte como tal. Para que se vea y se comporte como un botón, tendrá que utilizar CSS y JavaScript para obtener el resultado deseado. Siempre es mejor utilizar el `button` o `input` con `type="button"` en su lugar.

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

## ¿Qué son las funciones ARIA?

ARIA son las siglas de Accessible Rich Internet Applications.

Los roles ARIA especifican el significado semántico de los elementos HTML. Son esenciales para que los contenidos web sean accesibles a las personas que utilizan tecnologías de asistencia, como los lectores de pantalla.

HTML tiene elementos semánticos y no semánticos, en función de si transmiten significado sobre su contenido.

Muchos elementos HTML semánticos ya tienen asignado por defecto un rol ARIA. Por ejemplo, el elemento `button` tiene un rol ARIA por defecto de `button`.

Pero los elementos no semánticos no tienen un rol. Por ejemplo, los lectores de pantalla no sabrán interpretar el propósito de un `div` si no se especifica explícitamente su función.

Para especificar el rol ARIA de un elemento, basta con añadir el atributo `role`, como este `role="ARIA role"`, donde value es el nombre de un rol en la especificación ARIA.

Es importante tener en cuenta que especificar una función en un elemento sólo hace una cosa: informa a la tecnología de asistencia de la finalidad del elemento. No añade ninguna funcionalidad o comportamiento al elemento. Si la gente espera que un rol se comporte de una determinada manera, depende de ti, el desarrollador, añadir ese comportamiento esperado. Por ejemplo, añadir un `role` de `button` a un `div` no lo hace automáticamente clicable con un ratón o utilizable con un teclado. Es responsabilidad del desarrollador añadir el comportamiento esperado que permita al `div` actuar como un botón y, en la mayoría de los casos, es mejor utilizar el elemento `button`.

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

Algunos de estos roles tienen elementos semánticos equivalentes. Debe dar prioridad al elemento semántico sobre el rol si existe uno. Por ejemplo, debe favorecer el uso del elemento HTML `button` sobre añadir un `role` de `button` a un `div`.

Los roles de referencia clasifican y etiquetan las secciones principales de una página web. Los lectores de pantalla los utilizan para proporcionar una navegación cómoda a las secciones importantes de una página. Deben utilizarse con moderación para que el diseño general sea sencillo y fácil de entender. Ejemplos de landmark roles son `banner`, `complementary`, `contentinfo`, `form`, `main`, `navigation`, `region` y `search`. Cada uno de estos roles tiene su equivalente HTML correspondiente, como `header`, `footer`, `aside`, `form`, `main`, `nav`, `section`, y `search`. Si utiliza los elementos HTML adecuados para definir las secciones de su página, no es necesario añadir explícitamente el atributo `role` a estos elementos.

Los roles de región activa definen elementos con contenido que cambiará dinámicamente. De este modo, los lectores de pantalla y otras tecnologías de asistencia pueden anunciar los cambios a los usuarios con discapacidad visual. Estos roles incluyen: `alert`, `log`, `marquee`, `status`, y `timer`.

Los roles de Window definen subventanas, como los diálogos modales emergentes. Estos roles incluyen `alertdialog` y `dialog`. Tenga en cuenta que actualmente se considera una buena práctica utilizar el elemento de `dialog` HTML y sus métodos JavaScript asociados en lugar de crear manualmente un diálogo.

Por último, tenemos los roles abstractos. Estos roles ayudan a organizar el documento. Sólo están pensados para ser utilizados internamente por el navegador, no por los desarrolladores, así que debes saber que existen pero no debes utilizarlos en tus sitios o aplicaciones web.

Los roles ARIA permiten crear sitios y aplicaciones web accesibles e inclusivos. Proporcionan información semántica sobre el propósito y la función de los elementos HTML.

Los lectores de pantalla y otras tecnologías de asistencia utilizan esta información para ayudar a los usuarios a comprender el contenido de su página y establecer expectativas sobre cómo utilizarla, lo que contribuye a garantizar que todo el mundo pueda disfrutar de una gran experiencia de usuario.

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

También es importante señalar que el atributo aria-live no es necesario si la información actualizada está contenida en un elemento con un rol ARIA de alerta, registro, marquesina, estado o temporizador, ya que estos roles ya tienen valores aria-live por defecto. Pero el valor por defecto puede cambiarse estableciendo explícitamente aria-live en el elemento.
