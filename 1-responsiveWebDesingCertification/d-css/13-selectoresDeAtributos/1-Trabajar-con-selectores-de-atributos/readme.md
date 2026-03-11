# Trabajar con selectores de atributos

## **Navegación**

- [Trabajar con selectores de atributos](#trabajar-con-selectores-de-atributos)
  - [**Navegación**](#navegación)
  - [Tema 1: ¿Qué es el selector de atributos y cómo se puede utilizar para seleccionar enlaces con los atributos `href` y `title`?](#tema-1-qué-es-el-selector-de-atributos-y-cómo-se-puede-utilizar-para-seleccionar-enlaces-con-los-atributos-href-y-title)
  - [Cuestionario 1](#cuestionario-1)
  - [Tema 2: ¿Cómo utilizar el selector de atributos para seleccionar elementos con los atributos lang y data-lang?](#tema-2-cómo-utilizar-el-selector-de-atributos-para-seleccionar-elementos-con-los-atributos-lang-y-data-lang)
  - [Cuestionario 2](#cuestionario-2)
  - [Tema 3: ¿Cómo utilizar el selector de atributos para seleccionar elementos de listas ordenadas con el atributo type?](#tema-3-cómo-utilizar-el-selector-de-atributos-para-seleccionar-elementos-de-listas-ordenadas-con-el-atributo-type)
  - [Cuestionario 3](#cuestionario-3)

---

Los selectores de atributos se utilizan para seleccionar elementos HTML basados en la presencia o el valor de un atributo específico. Estos selectores son muy útiles para aplicar estilos a elementos que comparten ciertos atributos, como `class`, `id`, `type`, entre otros.

---

## Tema 1: ¿Qué es el selector de atributos y cómo se puede utilizar para seleccionar enlaces con los atributos `href` y `title`?

El selector de atributos en CSS es una potente herramienta que permite seleccionar elementos HTML en función de sus atributos. Esto significa que se pueden aplicar estilos a elementos que tengan atributos específicos o incluso determinados valores para esos atributos.

Resulta especialmente útil cuando se desea aplicar estilos a los elementos de forma dinámica o cuando los nombres de clase por sí solos no proporcionan suficiente especificidad.

Por ejemplo, puede utilizar el selector de atributos para seleccionar todos los enlaces que tengan un atributo href. Esto resulta especialmente útil cuando se desea aplicar un estilo uniforme a todos los enlaces de una página.

A continuación se muestra cómo se puede utilizar el selector de atributos para seleccionar enlaces con el atributo href:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <a href="https://example.com">Example link with an href attribute</a>
  <a>Example link without an href attribute</a>
  ```
  
  ```css
  a {
    display: block;
  }
  
  a[href] {
    color: blue;
    text-decoration: underline;
  }
  ```
  
Esta regla CSS aplicará un color azul y un subrayado a cualquier enlace que incluya un atributo `href`, lo que garantiza que todos los enlaces en los que se puede hacer clic tengan un estilo coherente.

Pero los selectores de atributos pueden ser más específicos. Supongamos que desea seleccionar solo los enlaces que tienen un atributo `title`. El atributo `title` suele proporcionar información adicional sobre el enlace, y es posible que desee aplicar un estilo diferente a estos enlaces para indicar que contienen información adicional. A continuación se explica cómo hacerlo:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <a href="https://example.com" title="Example link with a title attribute">Example link with a title attribute</a>
  <a>Example link without a title or href attribute</a>
  ```
  
  ```css
  a {
    display: block;
  }
  
  a[title] {
    font-weight: bold;
    text-decoration: none;
  }
  ```

Esta regla aplica texto en negrita y elimina el subrayado de cualquier enlace con un atributo `title`. Es una excelente manera de diferenciar visualmente estos enlaces de otros en la página.

También puedes combinar selectores de atributos para obtener resultados aún más precisos. Por ejemplo, si deseas aplicar un estilo a los enlaces que tienen atributos `href` y `title`, puedes hacer lo siguiente:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <a href="https://example.com" title="Example link with a title attribute">Example link with a title attribute</a>
  <a>Example link without a title or href attribute</a>
  ```
  
  ```css
  a {
    display: block;
  }
  
  a[href][title] {
    display:block;
    color: green;
  }
  ```

En este caso, solo los enlaces que contengan los atributos `href` y `title` se mostrarán con texto verde. Este nivel de control es lo que hace que los selectores de atributos sean tan potentes en CSS.

Otro ejemplo de selector de atributos es hacer coincidir un único valor dentro de una lista de valores separados por espacios en un atributo.

A continuación se muestra un ejemplo de un elemento de anclaje con varias clases:

`<a href="https://example.com" class="btn primary large">Visit Example Site</a>`

Para seleccionar este elemento de anclaje específico, puede utilizar el siguiente selector:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <a href="https://example.com" class="btn primary large">Visit Example Site</a>
  ```
  
  ```css
  a[class~="primary"] {
    color: red;
    font-weight: bold;
  }
  ```

La sintaxis `[attr~=valor]` se utiliza aquí para seleccionar todos los elementos de anclaje cuyo atributo de clase contenga la palabra `"primary"`.

Si necesita seleccionar un elemento cuyo valor de atributo esté precedido por un valor específico, puede utilizar la sintaxis `[attr^=valor]`. A continuación se muestra un ejemplo:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <a href="https://example.com" class="btn primary large">Visit Example Site</a>
  ```
  
  ```css
  a[href^="https://"] {
    color: green;
    text-decoration: underline;
  }
  ```

En este ejemplo, el selector `a[href^="https://"]` seleccionará todos los elementos de anclaje cuyo atributo `href` comience por `"https://"`.

Para seleccionar elementos cuyo atributo termine con un valor específico, puede utilizar la sintaxis `[attr$=value]`. A continuación se muestra un ejemplo:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <a href="https://example.com">Visit Example Site</a>
  ```
  
  ```css
  a[href$=".com"] {
    color: darkgreen;
    text-decoration: underline dotted;
  }
  ```

En este ejemplo, el selector `a[href$=".com"]` seleccionará todos los elementos de anclaje cuyo atributo `href` termine en `.com`.

El uso de selectores de atributos no solo mejora el estilo de tu página web, sino que también mejora la accesibilidad al hacer que los elementos interactivos, como los enlaces, sean más distinguibles en función de sus atributos.

---

## Cuestionario 1

1. **¿Qué selector CSS utilizarías para seleccionar todos los enlaces con un atributo `href`?**

    - [x] a) `a[href]` //correcto
    - [ ] b) `a[href=""]`
    - [ ] c) `a[href="https"]`
    - [ ] d) `a[href*="https"]`

2. **¿Qué hace el selector de atributos en CSS?**

    - [ ] a) Selecciona elementos basándose en el nombre de su etiqueta.
    - [ ] b) Selecciona elementos basándose en el nombre de su clase.
    - [x] c) Selecciona elementos basándose en sus atributos. //correcto
    - [ ] d) Selecciona elementos basándose en su ID.

3. **¿Cuál de las siguientes reglas CSS aplicará estilo a los enlaces con los atributos `href` y `title`?**

    - [ ] a) `a[href]`
    - [ ] b) `a[title]`
    - [x] c) `a[href][title]` //correcto
    - [ ] d) `a[href*="title"]`

[☝️](#trabajar-con-selectores-de-atributos)

---

## Tema 2: ¿Cómo utilizar el selector de atributos para seleccionar elementos con los atributos lang y data-lang?

Al crear sitios web multilingües o manejar atributos de datos personalizados, a menudo es necesario aplicar estilos a los elementos en función del idioma que contienen o de valores de datos específicos.

Los atributos `lang` y `data-lang` se utilizan habitualmente para estos fines, y el selector de atributos en CSS permite aplicar estilos basados en estos atributos de forma eficaz.

El atributo `lang` se utiliza en HTML para especificar el idioma del contenido dentro de un elemento. Es posible que desee aplicar estilos diferentes a los elementos en función del idioma en el que estén escritos, especialmente en un sitio web multilingüe.

A continuación se muestra un ejemplo de cómo se puede utilizar el selector de atributos para seleccionar elementos con un atributo `lang` específico:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <p lang="en">This is an English paragraph.</p>
  <p lang="fr">Ceci est un paragraphe en français.</p>
  ```
  
  ```css
  p[lang="en"] {
    font-style: italic;
  }
  ```

Esta regla CSS aplica un estilo cursivo a cualquier elemento de párrafo en el que el atributo `lang` esté establecido en inglés (`en`). Esto podría ser útil para resaltar el texto en inglés en un documento que incluya varios idiomas.

Del mismo modo, puede utilizar el selector de atributos para seleccionar elementos con un atributo `data-lang`.

Los atributos de datos personalizados como `data-lang` se utilizan habitualmente para almacenar información adicional en los elementos, como especificar el idioma utilizado en una sección concreta del texto.

A continuación se muestra cómo se puede utilizar CSS para seleccionar y aplicar estilos a los elementos basándose en el atributo `data-lang`:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <p data-lang="fr">Ceci est un paragraphe en français.</p>
  <p data-lang="en">This is a paragraph in English.</p>
  ```
  
  ```css
  p[data-lang="fr"] {
    color: blue;
  }
  ```

En este caso, cualquier elemento `p` con un atributo `data-lang` establecido en francés (`fr`) cambiará el color de su texto a azul. Esto le permite identificar rápidamente y aplicar estilos a secciones de contenido basándose en la información de idioma almacenada en el atributo `data-lang`.

Los selectores de atributos como estos proporcionan una forma eficaz de aplicar estilos condicionales basados en los metadatos incrustados en su HTML, lo que hace que sus páginas web sean más dinámicas y sensibles al contexto.

---

## Cuestionario 2

1. **¿Qué selector CSS utilizarías para seleccionar todos los párrafos en los que el atributo `lang` está establecido en inglés?**

    - [x] a) `p[lang="en"]` //correcto
    - [ ] b) `p[lang]`
    - [ ] c) `p[lang="es"]`
    - [ ] d) `p[lang*="en"]`

2. **¿Cómo seleccionarías todos los elementos `div` que tienen un atributo `data-lang` establecido en `fr`?**

    - [ ] a) `div[data-lang]`
    - [x] b) `div[data-lang="fr"]` //correcto
    - [ ] c) `div[lang="fr"]`
    - [ ] d) `div[data-lang*="fr"]`

3. **¿Qué atributo utilizarías en HTML para especificar el idioma del contenido dentro de un elemento?**

    - [ ] a) `data-lang`
    - [ ] b) `class`
    - [x] c) `lang` //correcto
    - [ ] d) `id`

[☝️](#trabajar-con-selectores-de-atributos)

---

## Tema 3: ¿Cómo utilizar el selector de atributos para seleccionar elementos de listas ordenadas con el atributo type?

Cuando se trabaja con listas ordenadas en HTML, el atributo `type` permite especificar el estilo de numeración utilizado, como numérico, alfabético o números romanos.

El atributo `type` se puede establecer en un elemento `ol` (lista ordenada) para controlar el formato de numeración:

- `1` para listas numéricas (como 1, 2, 3, ...),

- `A` para listas alfabéticas en mayúsculas (como A, B, C, ...),

- `a` para listas alfabéticas en minúsculas (como a, b, c, ...),

- `I` para números romanos en mayúscula (como I, II, III, ...),

- `i` para números romanos en minúscula (como i, ii, iii, ...).

A continuación se muestra cómo se puede utilizar el selector de atributos para seleccionar una lista ordenada con un atributo de tipo específico:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <ol type="A">
    <li>Item 1</li>
    <li>Item 2</li>
  </ol>
  ```
  
  ```css
  ol[type="A"] {
    color: purple;
    font-weight: bold;
  }
  ```

En este ejemplo, la regla CSS aplicará texto morado y negrita a cualquier lista ordenada que utilice numeración alfabética en mayúsculas, lo cual se especifica con `type="A"`.

Del mismo modo, puede seleccionar listas ordenadas que utilicen números romanos en minúscula seleccionando aquellas con `type="i"`:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <ol type="i">
    <li>Item 1</li>
    <li>Item 2</li>
  </ol>
  ```
  
  ```css
  ol[type="i"] {
    color: green;
  }
  ```

Esta regla cambiará el color del texto a verde para cualquier lista ordenada que utilice números romanos en minúscula.

La posibilidad de aplicar estilos a las listas ordenadas en función de su atributo de `type` le ofrece un mayor control sobre el aspecto de las listas en su documento, lo que le permite personalizarlas en función de la estructura del contenido.

---

## Cuestionario 3

1. **¿Qué selector CSS utilizarías para seleccionar listas ordenadas que utilizan numeración alfabética en mayúsculas?**

    - [x] a) `ol[type="A"]` //correcto
    - [ ] b) `ol[type="a"]`
    - [ ] c) `ol[type="1"]`
    - [ ] d) `ol[type="I"]`

2. **¿Cómo se enfocarían las listas ordenadas que utilizan números romanos en minúscula?**

    - [ ] a) `ol[type="I"]`
    - [ ] b) `ol[type="1"]`
    - [x] c) `ol[type="i"]` //correcto
    - [ ] d) `ol[type="A"]`

3. **¿Qué atributo se utiliza habitualmente en HTML para especificar el estilo de numeración de una lista ordenada?**

    - [ ] a) `data-type`
    - [x] b) `type` //correcto
    - [ ] c) `style`
    - [ ] d) `order`

[☝️](#trabajar-con-selectores-de-atributos)

---
