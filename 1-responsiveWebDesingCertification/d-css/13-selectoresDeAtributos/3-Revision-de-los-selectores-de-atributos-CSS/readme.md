# Revisión de los selectores de atributos CSS

Revisión de los selectores de atributos CSS para seleccionar elementos HTML en función de sus atributos, como href o title. Aprenderemos a usar diferentes tipos de selectores de atributos para aplicar estilos específicos a elementos que cumplen ciertas condiciones.

---

## Trabajar con diferentes selectores de atributos y enlaces

- **Definición**: El selector de atributos le permite seleccionar elementos HTML en función de sus atributos, como los atributos href o title.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <a href="https://www.freecodecamp.org">Link with href</a>
    <a>No href</a>
    ```

    ```css
    a[href] {
      color: blue;
      text-decoration: underline;
    }
    ```

- **Atributo `title`**: este atributo proporciona información adicional sobre un elemento. A continuación se muestra cómo se pueden seleccionar enlaces con el atributo `title`:

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <a href="#" title="Tooltip">Link with title</a>
    <a href="#">Normal link</a>
    ```

    ```css
    a[title] {
      font-weight: bold;
      text-decoration: none;
    }
    ```

- **Combina selectores para encontrar enlaces que tengan los atributos `href` y `title`**: Combina varios selectores de atributos.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <a href="#" title="Info">Href + Title</a>
    <a href="#">Only href</a>
    ```

    ```css
    a[href][title] {
      color: green;
    }
    ```

- **Busca una sola palabra dentro de una lista separada por espacios**: busca enlaces que tengan una palabra de clase específica.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <a class="link primary">Primary link</a>
    <a class="link secondary">Secondary link</a>
    ```

    ```css
    a[class~="primary"] {
      color: red;
      font-weight: bold;
    }
    ```

- **Buscar valores que empiecen por un prefijo específico**: Busca enlaces que empiecen por `https://`.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <a href="https://www.freecodecamp.org">HTTPS link</a>
    <a href="http://www.freecodecamp.org">HTTP link</a>
    ```

    ```css
    a[href^="https://"] {
      color: green;
      text-decoration: underline;
    }
    ```

- **Buscar valores que terminen con un sufijo específico**: Busca enlaces que terminen en `.jpg`.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <a href="photo.jpg">Image link</a>
    <a href="index.html">HTML link</a>
    ```

    ```css
    a[href$=".jpg"] {
      color: darkgreen;
      text-decoration: underline dotted;
    }
    ```

- **Coincidir valores que contengan una subcadena en cualquier lugar**: busca enlaces que contengan `https` en cualquier parte del valor.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <a href="https://www.freecodecamp.org">Secure link</a>
    <a href="page.html">Local link</a>
    ```

    ```css
    a[href*="https"] {
      color: teal;
    }
    ```

- **Resumen**: Estos patrones facilitan el diseño coherente de los enlaces en función de sus atributos y valores.

## Selección de elementos con los atributos `lang` y `data-lang`

- **Atributo `lang`**: Este atributo se utiliza en HTML para especificar el idioma del contenido de un elemento. Es posible que desee aplicar estilos diferentes a los elementos en función del idioma en el que estén escritos, especialmente en un sitio web multilingüe.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <p lang="en">English text</p>
    <p lang="fr">French text</p>
    ```

    ```css
    p[lang="en"] {
      font-style: italic;
    }
    ```

- **Atributo `data-lang`**: Los atributos de datos personalizados, como el atributo `data-lang`, se utilizan habitualmente para almacenar información adicional en los elementos, como especificar el idioma utilizado en una sección concreta del texto. A continuación se muestra cómo se puede aplicar estilo a los elementos basándose en el atributo `data-lang`:

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <div data-lang="fr">French content</div>
    <div data-lang="en">English content</div>
    ```

    ```css
    div[data-lang="fr"] {
      color: blue;
    }
    ```

## Trabajar con el selector de atributos, elementos de listas ordenadas y el atributo `type`

- **Atributo `type`**: al trabajar con listas ordenadas en HTML, el atributo `type` permite especificar el estilo de numeración utilizado, como numérico, alfabético o números romanos.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <ol type="A">
      <li>Alpha</li>
      <li>Beta</li>
    </ol>
    
    <ol type="i">
      <li>One</li>
      <li>Two</li>
    </ol>
    ```

    ```css
    /*Example targeting uppercase alphabetical numbering*/
    ol[type="A"] {
      color: purple;
      font-weight: bold;
    }
    
    /*Example targeting lowercase Roman numerals*/
    ol[type="i"] {
      color: green;
    }
    ```
