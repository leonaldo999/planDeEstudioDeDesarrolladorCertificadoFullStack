# Revisión de accesibilidad CSS

En esta sección, revisaremos algunos aspectos de accesibilidad relacionados con CSS. La accesibilidad web es fundamental para garantizar que todas las personas, independientemente de sus habilidades o discapacidades, puedan acceder y utilizar los sitios web de manera efectiva.

---

## Herramientas de contraste de colores

- **Verificador de contraste de colores de WebAIM**: esta herramienta en línea le permite introducir los colores de primer plano y de fondo de su diseño y ver al instante si cumplen con los estándares de las Pautas de Accesibilidad al Contenido en la Web (WCAG).

- **Analizador de contraste de colores de TPGi**: se trata de un verificador de contraste de colores gratuito que le permite comprobar si sus sitios web y aplicaciones cumplen con los estándares de las Pautas de Accesibilidad al Contenido en la Web (WCAG). Esta herramienta también incluye una función de simulador de daltonismo que le permite ver cómo se ve su sitio web o aplicación para las personas con problemas de visión del color.

## Árbol de accesibilidad

- El árbol de accesibilidad es una estructura utilizada por tecnologías de asistencia, como los lectores de pantalla, para interpretar e interactuar con el contenido de una página web.

## Función `max()`

- La función `max()`: devuelve el mayor valor de un conjunto de valores separados por comas:

  - **Codigo ejemplo**

    ```html
    <head>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/9.jpg" alt="A cat sitting on a table">
    </body>
    ```

    ```css
    img {
      width: max(250px, 25vw);
    }
    ```

  En el ejemplo anterior, el ancho de la imagen será de 250 píxeles si el ancho de la ventana gráfica es inferior a 1000 píxeles. Si el ancho de la ventana gráfica es superior a 1000 píxeles, el ancho de la imagen será de 25 vw. Esto se debe a que 25 vw es igual al 25 % del ancho de la ventana gráfica.

## Mejores prácticas con CSS y accesibilidad

- `display: none;`: El uso de `display: none;` significa que los lectores de pantalla y otras tecnologías de asistencia no podrán acceder a este contenido, ya que no está incluido en el árbol de accesibilidad. Por lo tanto, es importante utilizar este método solo cuando se desee eliminar completamente el contenido tanto de la presentación visual como de la accesibilidad.

- `visibility: hidden;`: Esta propiedad y este valor ocultan el contenido visualmente, pero lo mantienen en el flujo del documento, lo que significa que sigue ocupando espacio en la página. Estos elementos tampoco serán leídos por los lectores de pantalla, ya que se habrán eliminado del árbol de accesibilidad.

- **Clase CSS `.sr-only`**: Se trata de una técnica habitual que se utiliza para ocultar visualmente el contenido, pero manteniéndolo accesible para los lectores de pantalla.

  - **Codigo ejemplo**

    ```html
    <head>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <span>This span element can be read</span>
      <span class="sr-only">This span element can only be read by screen readers</span>
      <p style="display: none">
        This text is hidden with display: none and is NOT accessible to screen readers.
      </p>
      <p style="visibility: hidden">
        This text is hidden with visibility: hidden and is NOT read by screen readers,
        but it still takes up space.
      </p>
    </body>
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

  ---

  💡 Tabla de Verdad del Ocultamiento
  
  | Técnica | ¿Ocupa Espacio? | ¿Es Accesible? | Uso Principal |
  | :--- | :---: | :---: | :--- |
  | `display: none` | ❌ No | ❌ No | Menús cerrados, elementos inactivos. |
  | `visibility: hidden` | ✅ Sí | ❌ No | Tooltips, efectos donde el layout no debe saltar. |
  | `.sr-only` | ❌ No | ✅ Sí | Etiquetas para iconos, descripciones extras. |
  | `hidden` (Attr) | ❌ No | ❌ No | Estado semántico de "no relevante" en HTML5. |
  
  >[!TIP]
  > Si usas `.sr-only`, asegúrate de que el texto dentro tenga sentido por sí solo, ya que será lo único que el usuario escuche para entender el contexto.

- `scroll-behavior: smooth;`: Esta propiedad y este valor permiten un desplazamiento suave.

- `prefers-reduced-motion` feature: Se trata de una función multimedia que se puede utilizar para detectar las preferencias del usuario en cuanto a animaciones.

  - **Codigo ejemplo**

    ```html
    <head>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <!-- Clicking these links should result in smooth scrolling 
     if the user has not set a preference for reduced motion -->
      <nav>
        <a href="#section1">Section 1</a>
        <a href="#section2">Section 2</a>
        <a href="#section3">Section 3</a>
      </nav>
    
      <section id="section1">
        <h2>Section 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula dui, venenatis quis ligula ac, gravida pellentesque orci. Phasellus feugiat tortor ut vehicula porttitor. Proin vehicula scelerisque purus sit amet porttitor. Suspendisse egestas congue nibh auctor auctor. Pellentesque interdum, urna eget rhoncus tincidunt, mi urna sodales ex, quis tincidunt ante purus et erat. Quisque lacinia sapien a nibh porta semper. Pellentesque vitae enim non elit euismod gravida. Etiam eu orci pulvinar, malesuada est non, molestie ex. Etiam massa ante, malesuada quis lorem ut, aliquet aliquam libero. Etiam arcu nunc, suscipit sit amet leo eu, pharetra viverra nibh.
        </p>
      </section>
    
      <section id="section2">
        <h2>Section 2</h2>
        <p>Mauris vel arcu enim. Nunc bibendum tincidunt dapibus. Nulla bibendum diam eget rutrum commodo. Quisque congue, erat eu tempus tincidunt, lacus ligula condimentum mi, ut luctus nisl erat at ipsum. In id mi sit amet purus laoreet commodo. Nunc facilisis sem diam, quis gravida nibh vulputate tempor. Praesent quam est, rhoncus ac volutpat non, sollicitudin quis tellus. Integer et velit sit amet ante tristique lobortis id eu nunc. Cras odio magna, malesuada nec eros sit amet, tincidunt tincidunt orci. Nam sit amet quam id urna tempus porttitor. Phasellus felis ligula, egestas non fringilla id, egestas vel erat. Ut semper est non bibendum facilisis. Ut ullamcorper tempor imperdiet.
        </p>
      </section>
    
      <section id="section3">
        <h2>Section 3</h2>
        <p>Praesent sed finibus lectus, vel ultricies sem. Nam nec suscipit turpis. Duis vehicula posuere magna, sed laoreet leo scelerisque id. Suspendisse iaculis vulputate nisl id porttitor. Praesent aliquam blandit ex, porta ultricies enim fermentum tristique. Morbi ac imperdiet diam, sit amet suscipit massa. Proin sed nisl a ex ultrices interdum. Nullam vitae diam eget odio iaculis tristique.
        </p>
      </section>
    </body>
    ```

    ```css
    @media (prefers-reduced-motion: no-preference) {
      * {
        scroll-behavior: smooth;
      }
    }
    ```

  En el ejemplo anterior, el desplazamiento suave se habilita si el usuario no tiene configurada ninguna preferencia de animación en su dispositivo.

## Ocultar contenido con atributos HTML

- **Atributo `aria-hidden`**: se utiliza para ocultar un elemento a las personas que utilizan tecnologías de asistencia, como lectores de pantalla. Por ejemplo, se puede utilizar para ocultar imágenes decorativas que no aportan ningún contenido significativo.

- **Atributo `hidden`**: este atributo es compatible con la mayoría de los navegadores modernos y oculta el contenido tanto visualmente como en el árbol de accesibilidad. Se puede activar y desactivar fácilmente con JavaScript.

  - **Codigo ejemplo**

    ```html
    <p aria-hidden>This paragraph is visible for sighted users, but is hidden from assistive technology.</p>
    <p hidden>This paragraph is hidden from both sighted users and assistive technology.</p>
    <p>This is a normal paragraph</p>
    ```

---

  > [!NOTE]
  > Comparativa de Atributos Nativos
  >
  > **`aria-hidden="true"`**: Es como una "capa de invisibilidad" solo para lectores de pantalla. El elemento sigue ocupando espacio y es visible para todos, pero el software de asistencia lo ignora. Ideal para iconos decorativos o elementos que ya tienen una descripción textual cerca.
  >
  > **`hidden`**: Es el método más radical de HTML5. Si un elemento tiene este atributo, es como si no existiera en la página (ni se ve, ni se lee, ni ocupa espacio).

---

  > [!TIP]
  > A diferencia de las clases de CSS, el atributo `hidden` es puramente **semántico**. Si usas JavaScript para ocultar elementos, es mucho más limpio hacer `elemento.hidden = true` que andar quitando y poniendo clases de CSS.

## Problema de accesibilidad del atributo `placeholder`

- El uso de texto `placeholder` no es muy adecuado para la accesibilidad. Con demasiada frecuencia, los usuarios confunden el texto `placeholder` con un valor de entrada real: piensan que ya hay un valor en el campo de entrada.

---

>[!NOTE]
> 💡 Por qué evitar el placeholder como etiqueta
>
> **Pérdida de Memoria a Corto Plazo:** En cuanto el usuario hace clic y escribe una letra, el placeholder desaparece. Si el usuario se distrae, ya no sabe si el campo pedía "Usuario", "Email" o "Nombre".
> **Contraste Insuficiente:** Por defecto, los navegadores renderizan el placeholder en un gris muy claro que no cumple con las normas **WCAG** de contraste, haciéndolo invisible para personas con visión reducida.
> **Lectores de Pantalla:** Muchos lectores de pantalla no leen el placeholder o lo hacen de forma inconsistente. Sin una etiqueta `<label>` real, el campo es un "agujero negro" para ellos.

---

> [!TIP]
> Si por diseño "necesitas" que no se vea el label, usa la técnica de `.sr-only` que vimos antes. Así el label existe para la accesibilidad pero no estorba visualmente.
