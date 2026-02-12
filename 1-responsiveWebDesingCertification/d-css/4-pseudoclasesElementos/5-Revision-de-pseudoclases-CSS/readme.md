# Revisión de Pseudo-Clases CSS

En CSS, las pseudo-clases son palabras clave especiales que permiten seleccionar elementos en función de su estado o posición específicos. Las pseudo-clases de acción del usuario son un tipo de pseudoclase que permite cambiar la apariencia de los elementos en función de las interacciones del usuario, mejorando así la experiencia general del usuario.

---

## Pseudo-clases de acción del usuario

- **Definición de pseudo-clases**: son palabras clave CSS especiales que permiten seleccionar un elemento en función de su estado o posición específicos.

- **Pseudo-clases de acción del usuario**: son palabras clave especiales que permiten cambiar la apariencia de los elementos en función de las interacciones del usuario, mejorando así la experiencia general del usuario.

- **Pseudo-clase `:active`**: esta pseudo-clase permite seleccionar el estado activo de un elemento, como al hacer clic en un botón.

- **Pseudo-clase `:hover`**: esta pseudo-clase define el estado de desplazamiento de un elemento.

- **Pseudo-clase `:focus`**: esta pseudo-clase aplica estilos cuando un elemento obtiene el foco, normalmente a través de la navegación por teclado o cuando un usuario hace clic en un campo de entrada de un formulario.

- **Pseudo-clase `:focus-within`**: esta pseudo-clase se utiliza para aplicar estilos a un elemento cuando este o cualquiera de sus descendientes tienen el foco.

---

## Pseudo-clases de Input

- **Pseudoclases de Input**: estas pseudoclases se utilizan para seleccionar elementos de `input` HTML en función del estado en el que se encuentran antes y después de la interacción del usuario.

- **Pseudoclase `:enabled`**: esta pseudoclase se utiliza para seleccionar botones de formulario u otros elementos que están habilitados actualmente.

- **Pseudoclase `:disabled`**: esta pseudoclase permite aplicar estilos a un elemento interactivo en modo deshabilitado.

- **Pseudoclase `:checked`**: esta pseudoclase se utiliza para indicar al usuario que está marcado.

- **`:valid` Pseudoclase**: esta pseudoclase selecciona los campos de entrada que cumplen los criterios de validación.

- **`:invalid` Pseudoclase**: esta pseudoclase selecciona los campos de entrada que no cumplen los criterios de validación.

- **`:in-range` y `:out-of-range` Pseudoclases**: estas pseudoclases aplican estilos a los elementos en función de si sus valores se encuentran dentro o fuera de los límites especificados.

- **Pseudoclase `:required`**: esta pseudo-clase se aplica a los elementos `input` que tienen el atributo `required`. Indica al usuario que debe rellenar el campo para enviar el formulario.

- **Pseudoclase `:optional`**: esta pseudoclase aplica estilos a los elementos `input` que no son obligatorios y pueden dejarse vacíos.

- **Pseudoclase `:autofill`**: esta pseudoclase aplica estilos a los campos `input` que el navegador rellena automáticamente con los datos guardados.

---

## Pseudo-clases de ubicación

- **Pseudo-clases de ubicación**: estas pseudoclases se utilizan para aplicar estilos a enlaces y elementos que se encuentran dentro del documento actual.

- **Pseudo-clase `:any-link`**: esta pseudoclase es una combinación de las pseudoclases `:link` y `:visited`. Por lo tanto, coincide con cualquier elemento de anclaje con un atributo href, independientemente de si se ha visitado o no.

- **Pseudo-clase `:link`**: esta pseudoclase permite seleccionar todos los enlaces no visitados de una página web. Se puede utilizar para aplicar estilos diferentes a los enlaces antes de que el usuario haga clic en ellos.

- **Pseudo-clase `:local-link`**: esta pseudoclase selecciona los enlaces que apuntan al mismo documento. Puede resultar útil cuando se desea diferenciar los enlaces internos de los externos.

- **Pseudo-clase `:visited`**: esta pseudoclase selecciona un enlace que el usuario ha visitado.

- **Pseudo-clase `:target`**: esta pseudoclase se utiliza para aplicar estilos a un elemento que es el destino de un fragmento de URL.

---

## Pseudo-clases con estructura de árbol(`Tree-structural`)

- **Pseudo-clases con estructura de árbol**: estas pseudoclases te permiten seleccionar y aplicar estilos a los elementos en función de su posición dentro del árbol del documento.

- **Pseudo-clase `:root`**: esta pseudoclase suele ser el elemento html raíz. Te ayuda a seleccionar el nivel más alto del documento para que puedas aplicar un estilo común a todo el documento.

- **Pseudo-clase `:empty`**: los elementos vacíos, es decir, los elementos que no tienen hijos más que espacios en blanco, también se incluyen en el árbol del documento. Por eso existe la pseudoclase `:empty` para seleccionar elementos vacíos.

- **Pseudo-clase `:nth-child(n)`**: esta pseudoclase permite seleccionar elementos en función de su posición dentro de un elemento padre.

- **Pseudo-clase `:nth-last-child(n)`**: esta pseudoclase permite seleccionar elementos contando desde el final.

- **Pseudo-clase `:first-child`**: esta pseudoclase selecciona el primer elemento de un elemento padre o del documento.

- **Pseudo-clase `:last-child`**: esta pseudoclase selecciona el último elemento de un elemento padre o del documento.

- **Pseudo-clase `:only-child`**: esta pseudoclase selecciona el único elemento de un elemento padre o del documento.

- **Pseudo-clase `:first-of-type`**: esta pseudoclase selecciona la primera aparición de un tipo de elemento específico dentro de su elemento padre.

- **Pseudo-clase `:last-of-type`**: esta pseudoclase selecciona la última aparición de un tipo de elemento específico dentro de su elemento padre.

- **`:nth-of-type(n)` Pseudo-clase**: esta pseudoclase permite seleccionar un elemento específico dentro de su elemento padre en función de su posición entre los elementos hermanos del mismo tipo.

- :only-of-type Pseudo-clase: esta pseudoclase selecciona un elemento si es el único de su tipo dentro de su elemento padre.

---

## Pseudo-clases funcionales

- **Pseudoclases funcionales**: Las pseudoclases funcionales permiten seleccionar elementos basándose en condiciones o relaciones más complejas. A diferencia de las pseudoclases normales, que se centran en elementos basándose en un estado (por ejemplo, `:hover`, `:focus`), las pseudoclases funcionales aceptan argumentos.

- **Pseudoclase `:is()`**: esta pseudoclase toma una lista de selectores (por ejemplo, `ol`, `ul`) y selecciona un elemento que coincida con uno de los selectores de la lista.
  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css" />

    <p class="example">This text will change color.</p>
    <p>This text will not change color.</p>
    <p>This text will not change color.</p>
    <p class="this-works-too">This text will change color.</p>
    ```

    ```css
    p:is(.example, .this-works-too) {
      color: red;
    }
    ```

- **`:where()` Pseudoclase**: esta pseudoclase toma una lista de selectores (por ejemplo, `ol`, `ul`) y selecciona un elemento que coincida con uno de los selectores de la lista. La diferencia entre `:is` y `:where` es que esta última tendrá una especificidad de 0.

  - **Codigo ejemplo**

    ```css
    :where(h1, h2, h3) {
      margin: 0;
      padding: 0;
    }
    ```

- **Pseudoclase `:has()`**: esta pseudo'clase se suele denominar selector `"parent"`, ya que permite aplicar estilos a los elementos que contienen elementos secundarios especificados en la lista de selectores.

  - **Codigo ejemplo**

    ```css
    article:has(h2) {
      border: 2px solid hotpink;
    }
    ```

- **Pseudoclase `:not()`**: esta pseudo-clase se utiliza para seleccionar elementos que no coinciden con el selector proporcionado.

  - **Codigo ejemplo**

    ```css
    p:not(.example) {
      color: blue;
    }
    ```

---

## Pseudo-elementos

- **Pseudo-elemento `::before`**: este pseudoelemento utiliza la propiedad `content` para insertar contenido cosmético, como iconos, justo antes del elemento.

- **Pseudo-elemento `::after`**: este pseudoelemento utiliza la propiedad `content` para insertar contenido cosmético, como iconos, justo después del elemento.

- **Pseudo-elemento `::first-letter`**: este pseudoelemento se dirige a la primera letra del contenido de un elemento, lo que le permite aplicarle un estilo.

- **Pseudo-elemento `::marker`**: este pseudoelemento le permite seleccionar el marcador (viñeta o numeración) de los elementos de la lista para aplicarles un estilo.
