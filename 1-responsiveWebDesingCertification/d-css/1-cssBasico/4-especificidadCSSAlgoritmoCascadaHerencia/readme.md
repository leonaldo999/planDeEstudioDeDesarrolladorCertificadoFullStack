# Especificidad CSS, el algoritmo en cascada y la herencia

Comprende cómo funciona la especificidad en CSS, el algoritmo en cascada y la herencia para aplicar estilos de manera efectiva en tus proyectos web.

---

## ¿Qué es la especificidad CSS y la especificidad para CSS en línea, interno y externo?

La especificidad CSS es un concepto fundamental que determina qué estilos se aplican a un elemento cuando se pueden aplicar varias reglas.

Comprender la especificidad ayuda a los desarrolladores a resolver conflictos entre diferentes reglas CSS y garantiza que los estilos deseados se apliquen de manera coherente.

La especificidad CSS se calcula en función del tipo de selectores utilizados.

La especificidad más alta se atribuye a los estilos en línea, que se aplican directamente a un elemento a través del atributo de `style`.

En este ejemplo, el primer párrafo será rojo, mientras que los demás elementos `p` serán azules. Esto se debe a que los estilos en línea tienen una especificidad mayor que los selectores de tipo, como el selector `p` que se muestra en el archivo `styles.css`.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <p style="color: red;">Red paragraph</p>
  <p>Other paragraph</p>
  <p>Another paragraph</p>
  <p>Yet another paragraph</p>
  ```

  ```css
  p {
    color: blue;
  }
  ```

Por consiguiente, los selectores de ID tienen un alto nivel de especificidad.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <p id="para">Red paragraph</p>
  <p>Other paragraph</p>
  <p>Another paragraph</p>
  <p>Yet another paragraph</p>
  ```

  ```css
  #para {
    color: red; 
  }
  
  p {
    color: blue;
  }
  ```

A continuación, entran en juego los selectores de clase, los selectores de atributo y las pseudoclases.

Algunos ejemplos son los selectores de clase como `.container` y .button, los selectores de atributo como `[type="text"]` y las pseudoclases como `:hover`. Estos tienen un nivel moderado de especificidad.

NOTA: Aprenderás más sobre las pseudoclases en lecciones futuras.

En este ejemplo, el primer párrafo será rojo porque un selector de `id` tiene una especificidad mayor que las clases y los selectores de tipo. Los elementos `.example-para` tendrán un color verde, mientras que los elementos de párrafo restantes tendrán un color azul.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <p id="para">Example paragraph</p>
  <p class="example-para">Other paragraph</p>
  <p class="example-para">Another paragraph</p>
  <p>Yet another paragraph</p>
  ```

  ```css
  #para {
    color: red; 
  }
  
  .example-para {
    color: green;
  }
  
  p {
    color: blue;
  }
  ```

Los selectores de tipo, como `div` y `h1`, y los pseudo-elementos como `::before` y `::after`, tienen una especificidad menor en comparación con los grupos anteriores.

NOTA: Aprenderás más sobre los pseudoelementos en lecciones futuras.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <p id="para">Example paragraph</p>
  <p>Other paragraph</p>
  <p>Yet another paragraph</p>
  ```

  ```css
  #para {
    color: red; 
  }
  
  p {
    color: blue;
  }
  ```

Por último, el selector universal, representado por un asterisco `*`, es el que tiene menor especificidad de todos.

A continuación se muestra un ejemplo en el que se establece el color rojo para todos los elementos utilizando el selector `*`. Sin embargo, no verás ningún elemento rojo porque hay selectores de ID y tipo que anulan esos estilos, lo que pone de relieve la baja especificidad del selector `*`.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <p id="para">Example paragraph</p>
  <p>Other paragraph</p>
  <p>Yet another paragraph</p>
  ```

  ```css
  * {
    color: red;
  }
  
  #para {
    color: green; 
  }
  
  p {
    color: blue;
  }
  ```

Los valores de especificidad se calculan como un valor de cuatro partes `(a, b, c, d)`:

- `a`: Estilos en línea (`1` o `0`).
- `b`: Número de selectores de ID.
- `c`: Número de selectores de clase, selectores de atributo y pseudoclases.
- `d`: Número de selectores de tipo, pseudoelementos y selectores universales.

Cada parte del valor de especificidad tiene un peso diferente:

- Los estilos en línea (`a`) tienen el peso más alto, aportando un valor de `1` a la primera parte del valor de especificidad.

- Los selectores de ID (`b`) tienen el siguiente peso más alto, con cada ID aportando `1` a la segunda parte del valor de especificidad.

- Los selectores de clase, los selectores de atributo y las pseudoclases (`c`) tienen un peso moderado, y cada uno aporta `1` a la tercera parte del valor de especificidad.

- Los selectores de tipo y los pseudoelementos (`d`) tienen el peso más bajo, y cada uno aporta `1` a la cuarta parte del valor de especificidad.

- Selector universal (`*`): el selector universal aporta `0` al cálculo de la especificidad y no afecta a esta. Su inclusión en un selector no cambia el valor de especificidad.

El CSS en línea tiene la mayor especificidad porque se aplica directamente al elemento. Anula cualquier CSS interno o externo. El valor de especificidad para los estilos en línea es `(1, 0, 0, 0)`.

Aquí hay otro ejemplo de un estilo en línea:

- **Codigo Ejemplo**
  
  ```html
  <p style="color: red;">This text is red.</p>
  ```

El CSS interno se define dentro de un elemento de `style` en la sección `head` del documento HTML. Tiene una especificidad menor que los estilos en línea, pero puede anular los estilos externos.

El valor de especificidad de los estilos internos viene determinado por los selectores utilizados. Por ejemplo, un selector de ID dentro del CSS interno tiene un valor de especificidad de `(0, 1, 0, 0)`.

- **Codigo Ejemplo**
  
  ```html
  <head>
    <style>
      #text {
        color: blue;
      }
    </style>
  </head>
  <body>
    <div id="text">This text is blue.</div>
  </body>
  ```

En este ejemplo, el texto será azul a menos que se aplique un estilo en línea o un estilo externo más específico.

El CSS externo se vincula mediante un elemento de `link` en la sección `head` y se escribe en archivos `.css` separados. Tiene la especificidad más baja, pero proporciona la mejor mantenibilidad para proyectos más grandes.

El valor de especificidad de los estilos externos también viene determinado por los selectores utilizados. Por ejemplo, un selector de clase dentro de un CSS externo tiene un valor de especificidad de `(0, 0, 1, 0)`.

- **Codigo Ejemplo**
  
  ```html
  <head>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div class="text">This text's color is defined in an external CSS file.</div>
  </body>
  ```

  ```css
  .text {
    color: purple;
  }
  ```

En este ejemplo, el color del texto se define en el archivo `styles.css` y se aplicará a menos que se sobrescriba con estilos internos o en línea.

---

## Cuestionario 1

- **1.¿Qué especificidad CSS es mayor?**

  - [ ] a) Un selector de clase.
  - [x] b) Un estilo en línea. //correcto
  - [ ] c) Un selector de ID.
  - [ ] d) Un selector de tipo.

- **2.En la jerarquía de especificidad CSS, ¿cuál tiene la prioridad más baja?**

  - [ ] a) Un selector de clase.
  - [ ] b) Un estilo en línea.
  - [x] c) Selectores universales. //correcto
  - [ ] d) Un selector de ID.

- **3.¿De qué color será el texto en el siguiente ejemplo?**

  ```html
  <head>
    <style>
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p style="color: blue;">This text</p>
  </body>
  ```

  - [x] a) blue //correcto
  - [ ] b) red
  - [ ] c) yellow
  - [ ] d) green

---

## ¿Qué es el selector universal y cuál es su especificidad?

El selector universal (`*`) es un tipo especial de selector CSS que coincide con cualquier elemento del documento.

A menudo se utiliza para aplicar un estilo a todos los elementos de la página, lo que puede resultar útil para restablecer o normalizar estilos en diferentes navegadores.

El selector universal se puede utilizar para seleccionar todos los elementos dentro de un contexto específico o globalmente en todo el documento.

A continuación se muestra un ejemplo del uso del selector universal para establecer el `margin` y el `padding` de todo el documento HTML:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  
  <h1>Heading element</h1>
  <p>example paragraph element</p>
  ```

  ```css
  * {
    margin: 0;
    padding: 0;
  }
  ```

En este ejemplo de código, el selector `*` restablece el margin y el padding de todos los elementos a cero, lo cual es una técnica común utilizada en los restablecimientos CSS.

El selector universal tiene el valor de especificidad más bajo de todos los selectores. Contribuye con 0 a todas las partes del valor de especificidad `(0, 0, 0, 0)`.

Esto significa que cualquier otro selector, incluidos los selectores de tipo, los selectores de clase, los selectores de ID y los estilos en línea, anulará los estilos establecidos por el selector universal.

Veamos el siguiente ejemplo de HTML y CSS:

- **Codigo Ejemplo**
  
  ```html
  <head>
    <style>
      * {
        color: blue;
      }
      p {
        color: red;
      }
      .highlight {
        color: green;
      }
      #unique {
        color: purple;
      }
    </style>
  </head>
  <body>
    <p id="unique" class="highlight">This text has multiple styles applied.</p>
  </body>
  ```

El selector universal `*` establece el color del texto en `blue` para todos los elementos.

Sin embargo, el selector de tipo `p` anula esto al establecer el color del texto en `red` específicamente para los elementos `p`.

Si un elemento tiene la clase `highlight`, el selector de clase tiene prioridad y cambia el color del texto a `green`.

Por último, el selector de ID `#unique`, que tiene la mayor especificidad, anulará todos los demás y establecerá el color del texto en `purple`.

---

## Cuestionario 2

- **1.¿Cuál es el valor de especificidad del selector universal (`*`)?**

  - [ ] a) (1, 0, 0, 0)
  - [ ] b) (0, 1, 0, 0)
  - [ ] c) (0, 0, 1, 0)
  - [x] d) (0, 0, 0, 0) //correcto

- **2.¿Cuál es un caso de uso común para el selector universal?**

  - [ ] a) Para aplicar estilos a un elemento específico.
  - [x] b) Para restablecer o normalizar los estilos en todos los elementos. //correcto
  - [ ] c) Para seleccionar elementos con una clase específica.
  - [ ] d) Para anular los estilos en línea.

- **3.Dado el siguiente CSS, ¿cuál será el color del texto?**

  ```html
  <head>
    <style>
      * {
        color: blue;
      }
      p {
        color: red;
      }
      .highlight {
        color: green;
      }
      #unique {
        color: purple;
      }
    </style>
  </head>
  <body>
    <p id="unique" class="highlight">This text</p>
  </body>
  ```

  - [ ] a) blue
  - [ ] b) red
  - [ ] c) green
  - [x] d) purple //correcto

---

## ¿Cuál es la especificidad de los selectores de tipo?

Los selectores de tipo, también conocidos como selectores de elementos, se dirigen a los elementos en función de su nombre de etiqueta.

Estos selectores son fundamentales en CSS y permiten aplicar estilos a todas las instancias de un elemento HTML específico.

Los selectores de tipo son fáciles de usar y se escriben simplemente como el nombre de la etiqueta del elemento al que se desea aplicar el estilo.

A continuación se muestra un ejemplo de un selector de tipo que se dirige a todos los elementos de párrafo de la página:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <p>Paragraph one</p>
  <p>Paragraph two</p>
  <p>Paragraph three</p>
  ```

  ```css
  p {
    color: blue;
  }
  ```

En este ejemplo, todos los elementos `p` tendrán el color del texto establecido en `blue`.

Los selectores de tipo tienen una especificidad relativamente baja en comparación con otros selectores. El valor de especificidad de un selector de tipo es `(0, 0, 0, 1)`.

Esto significa que los selectores de tipo serán anulados por los selectores de clase, los selectores de ID y los estilos en línea, pero aún así podrán aplicar estilos a menos que existan reglas de mayor especificidad.

Veamos un ejemplo en el que los selectores de clase anularán los estilos del selector de tipo.

Aquí hay un ejemplo con dos elementos de párrafo:

- **Codigo Ejemplo**
  
  ```html
  <p class="para">I am a paragraph</p>
  <p class="para">Here is another paragraph</p>
  ```

Ambos elementos de párrafo tienen una clase llamada `para`.

Dentro del archivo CSS, el selector de tipo se dirige a los párrafos, y el selector de clase se dirige a los elementos con la clase `para`.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <p class="para">I am a paragraph</p>
  <p class="para">Here is another paragraph</p>
  ```

  ```css
  p {
    color: blue;
  }
  
  .para {
    color: red;
  }
  ```

Todos los párrafos de la página con la clase `para` tendrán el color del texto establecido en `red` en lugar de `blue`, ya que los selectores de clase tienen una especificidad mayor que los selectores de tipo.

---

## Cuestionario 3

- **1.¿Cuál es el valor de especificidad de un selector de tipo (e.g., div)?**

  - [ ] a) (1, 0, 0, 0)
  - [ ] b) (0, 1, 0, 0)
  - [ ] c) (0, 0, 1, 0)
  - [x] d) (0, 0, 0, 1) //correcto

- **2.¿Cuál de los siguientes tiene una especificidad menor que un selector de tipo?**

  - [ ] a) Un selector de clase.
  - [ ] b) Un selector de ID.
  - [ ] c) Un estilo en línea.
  - [x] d) Un selector universal. //correcto

- **3.Dado el siguiente CSS, ¿cuál será el color del texto?**

  ```html
  <head>
    <style>
      * {
        color: blue;
      }
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p>This text</p>
  </body>
  ```

  - [ ] a) blue
  - [x] b) red //correcto
  - [ ] c) green
  - [ ] d) purple

---

## ¿Cuál es la especificidad de los selectores de clase?

Los selectores de clase son una parte fundamental de CSS, ya que permiten a los desarrolladores seleccionar varios elementos con el mismo atributo de clase y aplicarles un estilo coherente.

Esto los hace muy versátiles y eficaces para aplicar estilos en un sitio web.

Los selectores de clase se definen con un punto (`.`) seguido del nombre de la clase. Se pueden aplicar a cualquier elemento del documento HTML.

A continuación se muestra un ejemplo del uso de un selector de clase:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <p class="highlight">Example paragraph</p>
  ```

  ```css
  .highlight {
    color: green;
  }
  ```

En este ejemplo, cualquier elemento con la clase `highlight` tendrá el color del texto establecido en `green`.

Los selectores de clase tienen una especificidad mayor que los selectores de tipo, pero menor que los selectores de ID y los estilos en línea.

El valor de especificidad de un selector de clase es `(0, 0, 1, 0)`. Esto significa que los selectores de clase pueden anular los selectores de tipo, pero pueden ser anulados por los selectores de ID y los estilos en línea.

Los selectores de clase se pueden combinar con otros selectores para crear reglas más específicas.

A continuación se muestra un ejemplo en el que se combina un selector de tipo de párrafo con un selector de clase:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <p class="bold-text">Example paragraph</p>
  <p class="bold-text">Example paragraph</p>
  <p>Another paragraph</p>
  <p>Yet another paragraph</p>
  ```

  ```css
  p.bold-text {
    font-weight: bold;
  }
  ```

Esta regla solo se aplica a los elementos `p` que también tienen la clase `bold-text`, lo que hace que su texto aparezca en negrita.

---

## Cuestionario 4

- **1.¿Cuál es el valor de especificidad de un selector de clase (e.g., .example)?**

  - [ ] a) (1, 0, 0, 0)
  - [ ] b) (0, 1, 0, 0)
  - [x] c) (0, 0, 1, 0) //correcto
  - [ ] d) (0, 0, 0, 1)

- **2.¿Cuál de los siguientes selectores tiene una especificidad mayor que un selector de clase?**

  - [ ] a) Un selector de tipo.
  - [ ] b) Un selector de ID. //correcto
  - [ ] c) Un selector universal.
  - [x] d) Un pseudo-elemento.

- **3.Dado el siguiente CSS, ¿cuál será el color del texto?**

  ```html
  <head>
    <style>
      .highlight {
        color: green;
      }
      p {
        color: blue;
      }
      p.highlight {
        color: red;
      }
    </style>
  </head>
  <body>
    <p class="highlight">This text</p>
  </body>
  ```

  - [ ] a) green
  - [ ] b) blue
  - [x] c) red //correcto
  - [ ] d) purple

---

## ¿Cuál es la especificidad de los selectores ID?

Los selectores ID se encuentran entre los selectores más potentes de CSS, ya que permiten a los desarrolladores aplicar estilos a elementos específicos con identificadores únicos.

Esto los hace muy eficaces para seleccionar elementos individuales que necesitan un estilo único.

Los selectores ID se definen mediante un símbolo de almohadilla (`#`) seguido del nombre del ID. Deben ser únicos dentro de un documento HTML, lo que significa que no debe haber dos elementos que compartan el mismo ID.

A continuación se muestra un ejemplo en el que se utiliza un selector ID:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <p id="unique">Example paragraph</p>
  <p>Another paragraph</p>
  <p>Yet another paragraph</p>
  ```

  ```css
  #unique {
    color: purple;
  }
  ```

En este ejemplo, el elemento con el ID `unique` tendrá el color del texto establecido en `purple`.

Los selectores de ID tienen una especificidad muy alta, superior a la de los selectores de tipo y los selectores de clase, pero inferior a la de los estilos en línea. El valor de especificidad de un selector de ID es `(0, 1, 0, 0)`.

Esto significa que los selectores de ID pueden anular los selectores de clase y los selectores de tipo, pero pueden ser anulados por los estilos en línea.

---

## Cuestionario 5

- **1.¿Cuál es el valor de especificidad de un selector de ID (e.g., #example)?**

  - [ ] a) (1, 0, 0, 0)
  - [x] b) (0, 1, 0, 0) //correcto
  - [ ] c) (0, 0, 1, 0)
  - [ ] d) (0, 0, 0, 1)

- **2.¿Cuál de los siguientes tiene una especificidad mayor que un selector de ID?**

  - [ ] a) Un selector de clase.
  - [x] b) Un estilo en línea. //correcto
  - [ ] c) Un selector de atributos.
  - [ ] d) Un selector de tipo.

- **3.Dado el siguiente CSS, ¿cuál será el color del texto?**

  ```html
  <head>
    <style>
    #unique {
    color: purple;
    }
    .highlight {
      color: green;
    }
    p {
      color: blue;
    }
    </style>
  </head>
  <body>
    <p id="unique" class="highlight">This text</p>
  </body>
  ```

  - [ ] a) green
  - [ ] b) blue
  - [ ] c) red
  - [x] d) purple //correcto

---

## ¿Qué es la palabra clave !important y cuáles son las mejores prácticas para usarla?

La palabra clave !important en CSS se utiliza para dar a una regla de estilo la máxima prioridad, lo que le permite anular cualquier otra declaración para una propiedad.

Cuando se utiliza, obliga al navegador a aplicar el estilo especificado, independientemente de la especificidad de otros selectores.

Supongamos que tienes un elemento de párrafo HTML con estilos en línea como este:

- **Codigo Ejemplo**
  
  ```html
  <p class="para" style="background-color: lightblue; color: black;">
    This is a paragraph.
  </p>
  ```

En este ejemplo, el elemento párrafo tiene un color de fondo establecido en `lightblue` y un color de texto establecido en `black`.

El archivo CSS aplica los siguientes estilos al elemento párrafo:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <p class="para" style="background-color: lightblue; color: black;">
    This is a paragraph.
  </p>
  ```

  ```css
  .para {
    background-color: black;
    color: white;
  }
  ```

Dado que los estilos en línea tienen mayor prioridad que los selectores de clase, ID y tipo, el color de fondo negro y el color de texto blanco no se aplicarán a ese elemento de párrafo.

Para anular esos estilos en línea, puede utilizar la palabra clave `!important` de la siguiente manera:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <p class="para" style="background-color: lightblue; color: black;">
    This is a paragraph.
  </p>
  ```

  ```css
  .para {
    background-color: black !important;
    color: white !important;
  }
  ```

La palabra clave `!important` se utiliza después del valor CSS y antes del punto y coma.

Ahora el elemento párrafo tendrá esos colores blanco y negro aplicados porque los estilos en línea se están anulando con el uso de la palabra clave `!important`.

La palabra clave `!important` en CSS se utiliza para dar a una regla de estilo la máxima prioridad, anulando efectivamente otras declaraciones, incluidas aquellas con mayor especificidad y estilos en línea.

Sin embargo, la palabra clave `!important` no cambia la especificidad del selector CSS en sí. Simplemente garantiza que se aplique la regla con `!important`, incluso si hay otras reglas conflictivas con mayor especificidad.

Otro caso de uso apropiado de la palabra clave `!important` es anular los estilos de bibliotecas o marcos de terceros cuando no se tiene control sobre el CSS original.

Sin embargo, el uso excesivo de la palabra clave `!important` puede dificultar el mantenimiento y la depuración del CSS, ya que rompe la cascada natural de estilos y puede tener consecuencias no deseadas.

Por lo tanto, es mejor utilizar la palabra clave `!important` con moderación.

---

## Cuestionario 6

- **1.¿Qué hace la palabra clave `!important` en CSS?**

  - [ ] a) Aumenta el valor de especificidad de un selector.
  - [x] b) Aplica un estilo independientemente de la especificidad de otras reglas. //correcto
  - [ ] c) Disminuye el valor de especificidad de un selector.
  - [ ] d) Solo anula los estilos en línea.

- **2.¿Cuándo se debe utilizar la palabra clave `!important`?**

  - [ ] a) Como método principal para dar estilo a los elementos.
  - [x] b) Para anular estilos de terceros o como solución temporal. //correcto
  - [ ] c) En todas las reglas CSS para mantener la coherencia.
  - [ ] d) Para aumentar la especificidad.

- **3.Dado el siguiente CSS, ¿cuál será el color del texto?**

  ```html
  <head>
    <style>
      p {
        color: blue;
      }
      .highlight {
        color: green !important;
      }
      #unique {
        color: purple;
      }
    </style>
  </head>
  <body>
    <p id="unique" class="highlight">This text</p>
  </body>
  ```

  - [ ] a) blue
  - [x] b) green //correcto
  - [ ] c) purple
  - [ ] d) red

---

## ¿Cómo funciona el algoritmo en cascada a alto nivel?

El algoritmo en cascada es el proceso que utiliza el navegador para decidir qué reglas CSS aplicar cuando hay varios estilos dirigidos al mismo elemento. Garantiza que se utilicen los estilos más adecuados, basándose en un conjunto de reglas bien definidas.

El proceso comienza con la relevancia. El navegador primero filtra todas las reglas CSS para encontrar aquellas que realmente se aplican al elemento en cuestión. Esto incluye la coincidencia de selectores y la consideración de las consultas de medios que puedan estar en vigor.

Una consulta de medios es una técnica CSS que se utiliza para aplicar estilos basados en las características del dispositivo o la ventana gráfica, como su anchura, altura u orientación.

A continuación, el algoritmo tiene en cuenta el origen y la importancia. El CSS puede provenir de diferentes fuentes: los estilos predeterminados del navegador (agente de usuario), los estilos establecidos por el usuario y los estilos escritos por el autor (usted).

Tras considerar el origen, el algoritmo evalúa la importancia de cada regla, dando prioridad a las reglas marcadas con `!important`, que anulan otras reglas independientemente de su origen.

Después de filtrar por origen e importancia, el algoritmo analiza la especificidad. Cuando se aplican dos reglas del mismo origen y nivel de importancia, se aplicará la regla con mayor especificidad.

La especificidad es una medida de lo específico que es un selector, y los selectores más específicos tienen prioridad sobre los más generales.

Por último, si todo lo demás es igual, entra en juego el orden de aparición. Cuando dos reglas tienen la misma especificidad, se aplicará la que aparezca en último lugar en el CSS.

Por eso, el orden en el que escribes tus estilos puede afectar en ocasiones al resultado.

Veamos un ejemplo.

En el archivo HTML hay un único elemento de párrafo. Luego, dentro del CSS, tenemos dos reglas, cada una de ellas dirigida al elemento de párrafo.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <p>example paragraph</p>
  ```

  ```css
  p {
    color: blue;
  }
  
  p {
    color: green; 
  }
  ```

La primera regla establece que todos los elementos de párrafo tengan el color de texto azul, mientras que la segunda regla establece que todos los elementos de párrafo tengan el color de texto verde.

Entonces, ¿qué color se aplicará? Se aplicará el color verde a los elementos de párrafo.

Al tener en cuenta la relevancia, el origen y la importancia, la especificidad, el alcance y el orden de aparición, el algoritmo en cascada garantiza que tu CSS se comporte de manera predecible, lo que te permite diseñar páginas web más complejas y matizadas.

---

## Cuestionario 7

- **1.¿Cuál es el primer paso que da el algoritmo en cascada al determinar qué estilos aplicar?**

  - [ ] a) Comprueba la especificidad de las reglas.
  - [x] b) Filtra las reglas por relevancia. //correcto
  - [ ] c) Busca declaraciones `!important`.
  - [ ] d) Aplica la última regla del CSS.

- **2.¿Qué sucederá si intenta aplicar un conjunto de estilos conflictivos a dos reglas de párrafo?**

  - [ ] a) Se aplicarán partes de los estilos de cada regla.
  - [ ] b) El programa se bloqueará.
  - [x] c) Se aplicarán los últimos estilos. //correcto
  - [ ] d) No se aplicará ninguno de los estilos.

- **3.¿Cuál de los siguientes factores no influye en la decisión del algoritmo en cascada sobre qué regla CSS aplicar?**

  - [ ] a) La especificidad de los selectores.
  - [ ] b) El alcance de las normas.
  - [ ] c) Si se utiliza la palabra clave `!important`.
  - [x] d) La propiedad de `color` de la regla CSS. //correcto

---

## ¿Cómo funciona la herencia con CSS a alto nivel?

La herencia es un concepto clave en CSS que determina cómo se transmiten los estilos de los elementos padres a sus elementos hijos.

Al igual que en el mundo real, donde los hijos suelen heredar rasgos de sus padres, en CSS, ciertos atributos pueden ser heredados por los elementos hijos de sus elementos padres.

Esto permite aplicar de forma más eficiente un estilo coherente en todo el documento.

En CSS, no todas las propiedades se heredan de forma predeterminada. Por ejemplo, propiedades como el `color`, `font-family` y la `line-height` se heredan. Esto significa que si se establece el color del texto en un elemento padre, todos sus elementos hijos heredarán ese color a menos que se sobrescriba específicamente.

Por ejemplo, consideremos el siguiente ejemplo en el que un elemento `div` padre tiene su color establecido mediante un estilo en línea, y el elemento `p` hijo hereda ese color.

- **Codigo Ejemplo**
  
  ```html
  <div style="color: blue;">
  This is the parent element.
    <p>This is the child element inheriting the color.</p>
  </div>
  ```

En este caso, tanto el `div` padre como el `p` hijo mostrarán su texto en azul porque el color se hereda.

Por otro lado, propiedades como `margin`, `padding`, `border` y `background` no se heredan de forma predeterminada. Si quieres que un elemento hijo herede estos estilos, debes establecerlos explícitamente, ya sea directamente en el elemento hijo o utilizando la palabra clave `inherit`.

La palabra clave `inherit` se puede utilizar para forzar la herencia de una propiedad de un elemento padre, incluso si esa propiedad no se hereda normalmente.

Por ejemplo, si desea que un elemento hijo específico tenga el mismo `padding` que su padre, puede establecer `padding: inherit` en el elemento hijo:

- **Codigo Ejemplo**
  
  ```html
  <div style="padding: 20px;">
  This is the parent element with padding.
    <p style="padding: inherit;">This is the child element inheriting the padding.</p>
  </div>
  ```

En este caso, el elemento `p` secundario heredará el relleno de `20px` de su elemento `div` principal.

La herencia es especialmente útil para mantener la coherencia y reducir la redundancia en las hojas de estilo.

En lugar de escribir la misma regla de estilo para varios elementos, puedes definirla una vez en un elemento padre y los elementos secundarios la heredarán. Esto puede hacer que tu CSS sea más conciso y fácil de manejar.

Sin embargo, es importante recordar que la herencia solo funciona en una dirección: de padre a hijo. Si anulas un estilo en un elemento secundario, no afectará al elemento padre.

---

## Cuestionario 8

- **1.¿Cuál de las siguientes propiedades CSS se hereda normalmente por defecto?**

  - [ ] a) `padding`
  - [ ] b) `border`
  - [x] c) `color` //correcto
  - [ ] d) `background`

- **2.¿Qué palabra clave se puede utilizar para forzar a un elemento secundario a heredar una propiedad de su elemento principal?**

  - [ ] a) `default`
  - [x] b) `inherit` //correcto
  - [ ] c) `initial`
  - [ ] d) `none`

- **3.Dado el siguiente CSS, ¿cuál será el color del texto del `span` dentro del `p`?**

  ```html
  <head>
    <style>
      p {
        color: blue;
      }
    </style>
  </head>
  <body>
    <p>This is a <span>test</span>.</p>
  </body>
  ```

  - [x] a) blue //correcto
  - [ ] b) red
  - [ ] c) green
  - [ ] d) black

---
