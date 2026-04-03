# Trabaja con CSS Grid

## Navegación

- [Trabaja con CSS Grid](#trabaja-con-css-grid)
  - [Navegación](#navegación)
  - [Tema 1: ¿Qué es CSS Grid y en qué se diferencia de Flexbox?](#tema-1-qué-es-css-grid-y-en-qué-se-diferencia-de-flexbox)
  - [Cuestionario 1](#cuestionario-1)
  - [Tema 2: ¿Cómo se pueden crear cuadrículas flexibles con la unidad `fr`?](#tema-2-cómo-se-pueden-crear-cuadrículas-flexibles-con-la-unidad-fr)
  - [Cuestionario 2](#cuestionario-2)
  - [Tema 3: ¿Cómo se pueden crear espacios entre las pistas de una cuadrícula?](#tema-3-cómo-se-pueden-crear-espacios-entre-las-pistas-de-una-cuadrícula)
  - [## Cuestionario 3](#-cuestionario-3)
  - [Tema 4: ¿Cómo se pueden repetir las entradas de una lista en un diseño de cuadrícula?](#tema-4-cómo-se-pueden-repetir-las-entradas-de-una-lista-en-un-diseño-de-cuadrícula)
  - [Cuestionario 4](#cuestionario-4)
  - [Tema 5: ¿Cuál es la diferencia entre una cuadrícula implícita y una explícita?](#tema-5-cuál-es-la-diferencia-entre-una-cuadrícula-implícita-y-una-explícita)
    - [📊 Explicit Grid vs Implicit Grid](#-explicit-grid-vs-implicit-grid)
  - [Cuestionario 5](#cuestionario-5)
  - [Tema 6: ¿Qué es la función `minmax()` y cómo funciona?](#tema-6-qué-es-la-función-minmax-y-cómo-funciona)
  - [Cuestionario 6](#cuestionario-6)
  - [Tema 7: ¿Cómo funcionan las propiedades `grid-column` y `grid-row`?](#tema-7-cómo-funcionan-las-propiedades-grid-column-y-grid-row)
  - [Cuestionario 7](#cuestionario-7)
  - [Tema 8: ¿Cómo se pueden colocar elementos en la cuadrícula utilizando la propiedad `grid-template-areas`?](#tema-8-cómo-se-pueden-colocar-elementos-en-la-cuadrícula-utilizando-la-propiedad-grid-template-areas)
  - [Cuestionario 8](#cuestionario-8)

---

En esta sección, aprenderás a usar CSS Grid para crear diseños de página complejos y responsivos. CSS Grid es un sistema de diseño bidimensional que te permite organizar el contenido en filas y columnas, facilitando la creación de layouts flexibles y adaptables a diferentes tamaños de pantalla.

---

## Tema 1: ¿Qué es CSS Grid y en qué se diferencia de Flexbox?

CSS Grid es un potente sistema de diseño que permite a los desarrolladores web crear diseños de páginas web complejos y adaptativos con facilidad.

Imagina que estás colocando muebles en una habitación: CSS Grid es como tener una cuadrícula invisible en el piso que te ayuda a colocar todo exactamente donde quieres.

Cuando creamos sitios web, a menudo necesitamos organizar diferentes elementos en la página.

Antes de CSS Grid, esto a veces resultaba complicado, especialmente para diseños complejos. CSS Grid simplifica este proceso al dividir tu página web en filas y columnas, creando una estructura similar a una cuadrícula.

Imaginemos que estás trabajando con un `div` contenedor con varios elementos anidados en su interior, como este:

- **Codigo Ejemplo**
  
  ```html
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </div>
  ```

Si quieres aplicar estilos a esos elementos en formato de cuadrícula, puedes establecer la propiedad `display` en `grid` y aplicar columnas de la siguiente manera:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </div>
  ```
  
  ```css
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
  
  .item {
    background-color: lightgray;
    padding: 20px;
    text-align: center;
    border: 1px solid #ccc;
  }
  ```

En este código, le indicamos al navegador que cree una cuadrícula con tres columnas de _equal-width_ es lo que significa `1fr 1fr 1fr` y añadimos un espacio de `20px` entre cada elemento de la cuadrícula.

Ahora, tal vez te estés preguntando: "_¿Y qué hay de Flexbox? ¿No se usa también para diseños?_"

**¡Tienes razón!** Flexbox es otro modelo de diseño CSS, y también es bastante útil. Pero hay algunas diferencias clave.

**Flexbox es unidimensional**, mientras que Grid es bidimensional. Esto significa que Flexbox funciona muy bien para diseñar elementos en una sola fila o columna, mientras que Grid se destaca en la creación de diseños con filas y columnas.

Flexbox prioriza el contenido, lo que significa que ajusta el diseño en función del contenido. Grid, por otro lado, prioriza el diseño, lo que te permite crear el diseño y luego colocar elementos en él. Grid te ofrece un control más preciso sobre la ubicación. Puedes indicarle a un elemento exactamente qué fila y columna debe ocupar.

Aquí tienes un ejemplo de Flexbox para comparar:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </div>
  ```
  
  ```css
  .container {
    display: flex;
    justify-content: space-between;
  }
  ```

Esto crea un contenedor Flex en el que los elementos se distribuyen de manera uniforme a lo largo del eje principal.

Tanto Grid como Flexbox tienen sus ventajas y, a menudo, los mejores diseños combinan ambos. Podrías utilizar Grid para el diseño general de la página y, a continuación, Flexbox para alinear los elementos dentro de cada área de la cuadrícula.

En resumen, CSS Grid es una herramienta poderosa que permite crear diseños bidimensionales precisos. Aunque al principio pueda parecer complejo, con la práctica se convierte en una herramienta invaluable para crear diseños web adaptables y complejos.

---

## Cuestionario 1

1. **¿Cuál es la principal diferencia entre CSS Grid y Flexbox?**

    - [ ] a) Grid es más reciente que Flexbox.
    - [x] b) Grid es bidimensional, mientras que Flexbox es unidimensional. //correcto
    - [ ] c) Grid solo funciona con columnas, Flexbox solo con filas.
    - [ ] d) Grid es solo para diseños de escritorio, Flexbox para dispositivos móviles.

2. **En el ejemplo de CSS Grid que se proporciona, ¿qué significa `1fr 1fr 1fr` en la propiedad `grid-template-columns`?**

    - [ ] a) Crear 3 columnas, cada una de 1 píxel de ancho.
    - [x] b) Crear 3 columnas, cada una de las cuales ocupe un tercio del espacio disponible. //correcto
    - [ ] c) Crear 1 columna que sea 3 veces más ancha que las demás.
    - [ ] d) Crear una sola columna dividida en 3 partes iguales.

3. **¿Cuál de las siguientes afirmaciones sobre CSS Grid es cierta?**

    - [ ] a) Solo se puede utilizar para diseños de escritorio.
    - [ ] b) Requiere JavaScript para funcionar correctamente.
    - [x] c) Permite colocar elementos con precisión tanto en filas como en columnas. //correcto
    - [ ] d) Ajusta automáticamente el diseño en función del tamaño del contenido.

[☝️](#trabaja-con-css-grid)

---

## Tema 2: ¿Cómo se pueden crear cuadrículas flexibles con la unidad `fr`?

En la lección anterior, te presentamos las cuadrículas CSS, que se pueden utilizar para crear diseños complejos y fluidos en tus páginas web. En esta lección, veremos cómo crear diseños de cuadrícula flexibles utilizando la unidad `fr`.

Comencemos con este código HTML, que representará nuestro contenedor de cuadrícula:

- **Codigo Ejemplo**
  
  ```html
  <div class="grid-container">
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
  </div>
  ```

En el CSS, establecemos la propiedad `display` en `grid` para el contenedor.

- **Codigo Ejemplo**
  
  ```html
  <div class="grid-container">
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
  </div>
  ```

  ```css
  html,
  body {
    width: 90%;
    height: 50%;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    gap: 15px;
    background-color: darkgray;
    height: 100%;
  }
  
  .col {
    background-color: darkslateblue;
  }
  ```

La propiedad `grid-template-columns` se utiliza para establecer el tamaño de cada columna. En este caso, el tamaño de cada columna será del `25%` del contenedor. A continuación, se utiliza la propiedad `gap` para crear espacio alrededor de cada columna.

Hasta ahora hemos estado utilizando porcentajes para el tamaño de las columnas, pero también podemos usar la unidad `fr`.

La unidad `fr` es una unidad fraccionaria que representa una fracción del espacio del contenedor de la cuadrícula.

Así es como se verá el código cuando se refactorice para usar unidades `fr` en lugar de porcentajes.

- **Codigo Ejemplo**
  
  ```html
  <div class="grid-container">
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
  </div>
  ```

  ```css
  html,
  body {
    width: 90%;
    height: 50%;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 15px;
    background-color: darkgray;
    height: 100%;
  }
  
  .col {
    background-color: darkslateblue;
  }
  ```

Cada columna ocupará una fracción del espacio disponible. Dado que hay cuatro columnas, cada una de ellas tendrá una parte igual del espacio disponible en el contenedor de la cuadrícula.

A medida que comiences a crear tus diseños de cuadrícula, te darás cuenta de que querrás utilizar las unidades `fr` con más frecuencia, ya que ofrecen una forma flexible y proporcional de distribuir el espacio, lo que te permite crear diseños adaptables que se ajustan a diferentes tamaños de pantalla sin necesidad de ajustar manualmente los valores en píxeles.

---

## Cuestionario 2

1. **¿Cuál es la función de la propiedad `grid-template-columns` en un contenedor de cuadrícula CSS?**

    - [ ] a) Establece el color de las columnas.
    - [x] b) Establece el tamaño de las columnas. //correcto
    - [ ] c) Establece el espacio entre las columnas.
    - [ ] d) Especifica el número de filas de la cuadrícula.

2. **¿En qué se diferencia la unidad `fr` en CSS Grid del uso de porcentajes?**

    - [ ] a) Las unidades `fr` generan desbordamiento en los contenedores, mientras que los porcentajes no.
    - [x] b) Las unidades `fr` asignan espacio en función del espacio disponible en el contenedor, mientras que los porcentajes ocupan un porcentaje del espacio disponible. //correcto
    - [ ] c) Las unidades `fr` se utilizan para crear diseños flexibles, mientras que los porcentajes no.
    - [ ] d) No hay ninguna diferencia entre las unidades `fr` y los porcentajes.

3. **Qué sucede cuando se utiliza `grid-template-columns: 1fr 1fr 1fr 1fr;` en un diseño de cuadrícula CSS?**

    - [ ] a) El contenedor tendrá cuatro columnas, cada una de las cuales ocupará el 10 % del ancho del contenedor.
    - [ ] b) Las columnas se apilarán verticalmente.
    - [ ] c) Las columnas estarán espaciadas de manera uniforme, pero sus tamaños permanecerán fijos.
    - [x] d) Las columnas ocuparán fracciones iguales del espacio disponible, y su tamaño se ajustará automáticamente cuando cambie el tamaño del contenedor. //correcto

[☝️](#trabaja-con-css-grid)

---

## Tema 3: ¿Cómo se pueden crear espacios entre las pistas de una cuadrícula?

En las lecciones anteriores, hablamos un poco sobre cómo crear espacio entre los elementos de la cuadrícula. Pero en esta lección, profundizaremos en cómo utilizar las propiedades `row-gap`, `column-gap` y `gap` en un diseño de cuadrícula.

Pero primero debemos repasar qué es una pista en la cuadrícula CSS. Una pista es el espacio entre dos líneas de cuadrícula contiguas. Estas líneas se crean automáticamente cuando usas la cuadrícula CSS. En este contexto, las pistas generalmente se refieren a las filas y columnas que componen el diseño de cuadrícula.

Para crear espacios entre columnas en una cuadrícula CSS, puedes usar la propiedad `column-gap`. Los valores aceptables para esta propiedad incluyen píxeles, la unidad `em`, porcentajes o la palabra clave `normal`.

Si usas el valor `normal` para la propiedad `column-gap`, el resultado será `0` para diseños de cuadrícula y `1em` para diseños de varias columnas.

Aquí hay un ejemplo del marcado para un diseño de cuadrícula de cuatro columnas:

- **Codigo Ejemplo**
  
  ```html
  <div class="grid-container">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  ```

En el CSS, establecemos la propiedad `display` en `grid` y la propiedad `column-gap` en 10 píxeles:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="grid-container">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  ```

  ```css
  .grid-container {
    display: grid;
    height: 100px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 10px;
  }
  
  .grid-container div {
    background-color: darkblue;
  }
  ```

Si quisiéramos modificar el ejemplo para que tuviera dos filas de cuadros azules y crear más espacio entre las filas, podemos utilizar la propiedad `row-gap`:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="grid-container">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  ```

  ```css
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    row-gap: 30px;
  }
  
  .grid-container div {
    height: 100px;
    background-color: darkblue;
  }
  ```

En este ejemplo revisado, establecemos la propiedad `row-gap` en 30 píxeles y modificamos `grid-template-columns` para que utilice solo dos unidades de `1fr` en lugar de cuatro, con el fin de crear dos filas de cuadros.

Al igual que la propiedad `column-gap`, los valores válidos para la propiedad `row-gap` pueden incluir porcentajes, `em` y píxeles.

Si quieres usar una forma abreviada para crear espacios entre filas y columnas, puedes usar la propiedad `gap`. Esta es la sintaxis básica:

`gap: row-value optional-column-value;`

Si se especifica un valor para la propiedad `gap`, dicho valor se aplicará tanto a las filas como a las columnas. Si se especifican dos valores, el primero se aplicará a la fila y el segundo a la columna:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="grid-container">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  ```

  ```css
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px 10px;
  }
  
  .grid-container div {
    height: 100px;
    background-color: darkblue;
  }
  ```

Los valores válidos para la propiedad abreviada `gap` incluyen porcentajes, píxeles, `em` e incluso valores de `calc()`. Sin embargo, aquí no se pueden utilizar unidades `fr`.

Las propiedades `row-gap`, `column-gap` y `gap` ofrecen formas flexibles de controlar el espaciado entre los elementos en un diseño de cuadrícula CSS. Al utilizar estas propiedades, puedes crear fácilmente cuadrículas visualmente atractivas con espacios uniformes y ajustables entre filas y columnas.

---

## ## Cuestionario 3

1. **¿Cuál es la función de la propiedad `column-gap` en un diseño de cuadrícula CSS?**

    - [x] a) Establece el espacio entre las columnas de la cuadrícula //correcto.
    - [ ] b) Define el tamaño de los elementos de la cuadrícula.
    - [ ] c) Define el número de columnas de la cuadrícula.
    - [ ] d) Establece el espacio entre las filas de la cuadrícula.

2. **¿Qué sucede si se utiliza el valor predeterminado de la propiedad `column-gap` en un diseño de cuadrícula?**

    - [ ] a) El `gap` entre columnas se establece en 10
    - [ ] b) El `gap` entre columnas se establece en -1
    - [ ] c) El `gap` entre columnas se establece en 14
    - [x] d) El `gap` entre columnas se establece en 0 //correcto

3. **¿Cuál de las siguientes propiedades es la correcta para crear espacios entre filas y columnas?**

    - [ ] a) Propiedad `gapsAndSpaces`
    - [ ] b) Propiedad `space`
    - [ ] c) Propiedad `rowGapColumnGap`
    - [x] d) Propiedad `gap` //correcto

[☝️](#trabaja-con-css-grid)

---

## Tema 4: ¿Cómo se pueden repetir las entradas de una lista en un diseño de cuadrícula?

En las lecciones anteriores, hemos estado trabajando con la propiedad `grid-template-columns` y asignándole valores fraccionarios.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="grid-container">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
  ```

  ```css
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 10px;
  }
  
  .box {
    width: 100px;
    height: 100px;
    background-color: darkblue;
  }
  ```

Aunque el siguiente código es totalmente válido, hay una forma más sencilla de repetir una sección o todas las entradas de la lista de pistas.

La función `repeat()` se utiliza para repetir una sección o todas las pistas en columnas o filas. Esta función toma como parámetros el número de repeticiones y las pistas que deseas repetir.

Aquí tienes una versión revisada del ejemplo anterior utilizando la función repeat:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="grid-container">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
  ```

  ```css
  .grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
  }
  
  .box {
    width: 100px;
    height: 100px;
    background-color: darkblue;
  }
  ```

No habrá ningún cambio en los estilos del navegador, pero esta es una forma más concisa de escribir valores repetidos para las columnas.

La función `repeat()` acepta cualquier patrón válido que se pueda utilizar para filas o columnas.

A continuación se muestra un ejemplo en el que se utiliza la función `repeat()` para establecer la primera y la tercera columna en 20 píxeles, y la segunda y la cuarta columna en una unidad fraccionaria.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="grid-container">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
  ```

  ```css
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 20px 1fr);
    column-gap: 10px;
  }
  
  .grid-container div {
    height: 100px;
    background-color: darkblue;
  }
  ```

A veces, es posible que prefieras escribir cada valor por separado en lugar de usar la función `repeat()`. Sin embargo, hay ocasiones en las que esta función resulta muy útil, sobre todo cuando quieres repetir un patrón concreto en la lista de canciones.

---

## Cuestionario 4

1. **¿Cuál de las siguientes opciones es la sintaxis correcta para repetir la lista de canciones?**

    - [ ] a)  

      ```css
      .grid-container {
        display: grid;
        grid-template-columns: repeat(1fr times 4);
        column-gap: 10px;
      }
      ```

    - [x] b)  //correcto

      ```css
      .grid-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 10px;
      }
      ```

    - [ ] c)

      ```css
      .grid-container {
        display: grid;
        grid-template-columns: multiply(4, 1fr);
        column-gap: 10px;
      }
      ```

    - [ ] d)

      ```css
      .grid-container {
        display: grid;
        grid-template-columns: repeatSections(4, 1fr);
        column-gap: 10px;
      }
      ```

2. **¿Cuál es la principal ventaja de utilizar la función `repeat()` en la propiedad `grid-template-columns`?**

    - [x] a) Permite repetir las definiciones de las columnas de forma más concisa y reduce la redundancia. //correcto
    - [ ] b) Hace que el código se ejecute más rápido.
    - [ ] c) Da como resultado un código sin errores.
    - [ ] d) Hace que la página web sea más receptiva.

3. **¿Cuál es el resultado de establecer `grid-template-columns` en `repeat(2, 20px 1fr)`?**

    - [ ] a) Crea cuatro columnas, todas con un ancho de `1fr`.
    - [ ] b) Crea dos columnas, cada una con un ancho de `20px`.
    - [x] c) Crea cuatro columnas, donde la primera y la tercera tienen un ancho de `20px`, y la segunda y la cuarta tienen un ancho de `1fr`. //correcto
    - [ ] d) Crea tres columnas, donde la primera y la segunda tienen un ancho de `20px`, y la tercera tiene un ancho de `fr`.

[☝️](#trabaja-con-css-grid)

---

## Tema 5: ¿Cuál es la diferencia entre una cuadrícula implícita y una explícita?

Una cuadrícula implícita se refiere a las filas y columnas que el navegador crea automáticamente al colocar elementos en un diseño de cuadrícula, es decir, aquellas que no se definen explícitamente mediante `grid-template-rows` o `grid-template-columns`.

Las propiedades que controlan las columnas y filas creadas implícitamente por el navegador son `grid-auto-columns` y `grid-auto-rows`.

La cuadrícula implícita también se refiere a las filas y columnas adicionales que el navegador genera automáticamente cuando se coloca un elemento fuera de las filas y columnas definidas explícitamente.

Por ejemplo, supongamos que defines solo dos columnas explícitas en un diseño de cuadrícula de esta manera:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="grid-container">
    <div class="grid-item">Item 1</div>
    <div class="grid-item">Item 2</div>
    <div class="grid-item">Item 3</div>
    <div class="grid-item">Item 4</div>
    <div class="grid-item">Item 5</div>
    <div class="grid-item">Item 6</div>
  </div>
  ```

  ```css
  .grid-container {
    display: grid;
    grid-template-columns: 100px 100px; /* Only 2 explicit columns */
  }
  
  .grid-item {
    background-color: burlywood;
    border: 1px solid orangered;
    padding: 0.5rem;
    margin: 0.5rem;
  }
  ```

Dos elementos ocupaban la primera fila utilizando las dos columnas explícitas: el `Item 1` en la primera columna y el `Item 2` en la segunda columna.

Los siguientes elementos comienzan una nueva fila: el `Item 3` va en la primera columna de la segunda fila y el `Item 4` en la segunda columna de la segunda fila, y así sucesivamente.

Como ya has visto, las cuadrículas explícitas son las áreas de la cuadrícula que configuras intencionalmente. Es decir, las filas y columnas que defines explícitamente para un diseño de cuadrícula utilizando las propiedades `grid-template-rows` y `grid-template-columns`.

Aquí hay una tabla que resume las diferencias entre las cuadrículas implícitas y explícitas:

### 📊 Explicit Grid vs Implicit Grid

| Feature              | Explicit Grid                                                              | Implicit Grid                                                                  |
| -------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **Size control**     | Fully customizable using `grid-template-rows` and `grid-template-columns`. | Controlled by `grid-auto-rows` and `grid-auto-columns`, or defaults to `auto`. |
| **Default Behavior** | Does not change unless explicitly defined.                                 | Automatically adapts to items placed outside the explicit grid.                |
| **Complexity**       | Requires more planning for layout structure.                               | Easier to implement for unstructured or variable content.                      |
| **Flexibility**      | Rigid structure with defined rows and columns.                             | Flexible and adapts to dynamically placed content.                             |
| **Performance**      | Potentially more performant as the layout is predefined.                   | May require additional browser computations for implicit grid generation.      |
| **Use case**         | Useful when the grid structure is predictable and defined upfront.         | Useful for dynamic layouts where content is unknown or changes frequently.     |

---

## Cuestionario 5

1. **¿Qué propiedades controlan las columnas y filas creadas implícitamente por el navegador en un diseño de cuadrícula CSS?**

    - [ ] a) `cols` y `rows`
    - [ ] b) `col` y `row`
    - [ ] c) `implicit-columns` y `implicit-rows`
    - [x] d) `grid-auto-columns` y `grid-auto-rows` //correcto

2. **¿Qué propiedades se utilizan para definir filas y columnas explícitas en un diseño de cuadrícula CSS?**

    - [ ] a) `row` y `fr`
    - [ ] b) `grid-explicit-rows` y `grid-explicit-columns`
    - [x] c) `grid-template-rows` y `grid-template-columns` //correcto
    - [ ] d) `grid-gap` y `grid-flow`

3. **¿Cuál de los siguientes ejemplos de código es la forma correcta de establecer dos columnas explícitas?**

    - [x] a)  //correcto

      ```css
      .grid-container {
         display: grid;
         grid-template-columns: 100px 100px;
      }
      ```

    - [ ] b)

      ```css
      .grid-container {
         display: grid;
         grid-template-columns: 100px 100px 100px 100px;
      }
      ```

    - [ ] c)

      ```css
      .grid-container {
         display: grid;
         grid-template-rows: 100px 100px;
      }
      ```

    - [ ] d)

      ```css
      .grid-container {
         display: grid;
         grid-column-start: 100px 100px;
      }
      ```

[☝️](#trabaja-con-css-grid)

---

## Tema 6: ¿Qué es la función `minmax()` y cómo funciona?

La función `minmax()` define el rango del tamaño de una pista de la cuadrícula, especificando cuánto espacio puede ocupar una fila o columna.

Recuerda que puedes establecer el tamaño de la pista con unidades como `px`(píxeles), `rem` o incluso `em`, y con unidades fraccionarias (`fr`).

La función `minmax()` va un poco más allá al permitirte establecer un tamaño mínimo y un tamaño máximo para la pista de la cuadrícula.

Esta es la sintaxis de la función `minmax()`:

- **Example code**

  ```css
  minmax(min, max)
  ```

`min` es el tamaño mínimo de la pista de la cuadrícula, que se puede establecer en píxeles, porcentaje o `auto`. Y `max` es el tamaño máximo de la pista de la cuadrícula, que se puede establecer con las mismas unidades.

Estos dos valores funcionan juntos de la siguiente manera:

- El valor `min` garantiza que la pista de la cuadrícula nunca se reduzca por debajo de un tamaño establecido.

- El valor `max` limita el tamaño máximo que puede alcanzar la pista de la cuadrícula.

El tamaño de la pista de la cuadrícula se ajusta dinámicamente entre los valores `min` y `max` en función del contenido y del tamaño del contenedor.

Veamos un ejemplo práctico:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="grid-container">
    <div>
      <h2>Item 1</h2>
    </div>
    <div>
      <h2>Item 2</h2>
    </div>
  </div>
  ```

  ```css
  .grid-container {
    display: grid;
    grid-template-columns: minmax(150px, 300px) 1fr;
    gap: 20px;
  }
  
  .grid-container > div {
    background: crimson;
    padding: 20px;
    text-align: center;
  }
  ```

¿Qué está pasando aquí?

La primera columna, `minmax(150px, 300px)`, siempre tendrá un ancho mínimo de `150px` y un ancho máximo de `300px`, dependiendo del espacio disponible.

Por otro lado, la segunda columna, `1fr`, ocupará todo el espacio restante disponible en el contenedor de la cuadrícula, ya que no hay columnas adicionales con las que compartir el espacio.

La ventaja de la función `minmax()` sobre los tamaños fijos e incluso las unidades `fr` es que es más flexible, lo que la hace ideal para la adaptabilidad y la capacidad de respuesta.

---

## Cuestionario 6

1. **¿Qué función se puede utilizar para definir el rango del tamaño de una pista de cuadrícula?**

    - [ ] a) `clamp()`
    - [x] b) `minmax()` //correcto
    - [ ] c) `max-width()`
    - [ ] d) `calc()`

1. **¿Cuál de las siguientes opciones describe mejor cómo se comporta el tamaño de la cuadrícula al utilizar la función `minmax()`?**

    - [ ] a) El tamaño de la pista de la cuadrícula es fijo y se encuentra entre los valores mínimo y máximo.
    - [x] b) El tamaño de la pista de la cuadrícula se ajusta dinámicamente entre los valores mínimo y máximo en función del contenido y del tamaño del contenedor. //correcto
    - [ ] c) El tamaño de la pista de la cuadrícula siempre se establecerá en el valor máximo, independientemente del contenido.
    - [ ] d) El tamaño de la pista de la cuadrícula solo responde al contenido, no al tamaño del contenedor.

1. **¿Qué controlan los valores `min` y `max` en la función minmax()?**

    - [ ] a) El valor `min` permite que la pista de la cuadrícula se reduzca, mientras que el valor `max` establece un tamaño fijo.
    - [x] b) El valor `min` garantiza que la pista de la cuadrícula no se reduzca por debajo de un tamaño establecido, y el valor `max` limita el tamaño máximo que puede alcanzar. //correcto
    - [ ] c) El valor `min` limita el crecimiento, y el valor `max` determina el tamaño mínimo.
    - [ ] d) Ambos valores establecen tamaños fijos para la pista de la cuadrícula.

[☝️](#trabaja-con-css-grid)

---

## Tema 7: ¿Cómo funcionan las propiedades `grid-column` y `grid-row`?

Las propiedades `grid-column` y `grid-row` te permiten especificar la ubicación horizontal y vertical de los elementos de la cuadrícula dentro de un diseño de cuadrícula.

En otras palabras, ambas te permiten controlar dónde comienza y termina un elemento de la cuadrícula haciendo referencia a las líneas de la cuadrícula. Estas líneas de la cuadrícula son los límites que separan las filas y columnas que ya has definido utilizando las propiedades `grid-template-rows` y `grid-template-columns`.

Echemos un vistazo a la sintaxis tanto de `grid-row` como de `grid-column`, y también a un ejemplo práctico.

Esta es la sintaxis de la propiedad `grid-row`:

- **Example code**

  ```css
  grid-row: <start-line> / <end-line>;
  ```

Y de grid-column:

- **Example code**

  ```css
  grid-column: <start-line> / <end-line>;
  ```

`<start-line>` es la línea de cuadrícula donde comienza el elemento y `<end-line>` es la línea de cuadrícula donde termina el elemento. Ambas se indexan a partir del 1, es decir, se empieza a contar desde el 1, no desde el 0.

Recuerda que las líneas de cuadrícula de las filas se generan en función del número de filas especificado en la propiedad `grid-template-rows`. Lo mismo se aplica a las columnas con la propiedad `grid-template-columns`.

Para el ejemplo práctico, comencemos con las líneas generadas por el navegador cuando se utilizan las propiedades `grid-template-rows` y `grid-template-columns`.

Aquí hay un ejemplo de cuadrícula con 4 columnas y 3 filas:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="grid">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
    <div class="item6">6</div>
    <div class="item7">7</div>
    <div class="item8">8</div>
    <div class="item9">9</div>
    <div class="item10">10</div>
    <div class="item11">11</div>
    <div class="item12">12</div>
  </div>
  ```

  ```css
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
    grid-template-rows: repeat(3, 100px); /* 3 equal rows */
    gap: 10px;
  }
  
  .grid > div {
    display: grid;
    place-items: center;
    background: crimson;
    color: white;
    font-size: 4rem;
  }
  ```

Al examinar el contenedor de la cuadrícula (la clase `grid`), se observa que cada fila y columna está delimitada por dos líneas: una línea inicial al comienzo de la fila o columna y una línea final al final de la misma.

Puedes centrarte en estas líneas para empezar a utilizar las propiedades `grid-row` y `grid-column` y determinar dónde debes colocar un elemento.

A continuación te mostramos cómo puedes hacer que el primer elemento de la cuadrícula ocupe las dos primeras columnas:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="grid">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
    <div class="item6">6</div>
    <div class="item7">7</div>
    <div class="item8">8</div>
    <div class="item9">9</div>
    <div class="item10">10</div>
    <div class="item11">11</div>
    <div class="item12">12</div>
  </div>
  ```

  ```css
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
    grid-template-rows: repeat(3, 100px); /* 3 equal rows */
    gap: 10px;
  }
  
  .grid > div {
    display: grid;
    place-items: center;
    background: crimson;
    color: white;
    font-size: 4rem;
  }
  
  .item1 {
    grid-column: 1 / 3;
  }
  ```

Con esto, estás indicando que el primer elemento de la cuadrícula debe comenzar en la columna 1 y terminar justo antes de la columna 3.

Ahora, el primer elemento ocupará dos columnas, y el cuarto elemento se desplazará a la segunda fila. ¡Genial!

Si además quieres que el primer elemento ocupe dos filas, puedes especificar un valor de `grid-row` de `1/3`:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="grid">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
    <div class="item6">6</div>
    <div class="item7">7</div>
    <div class="item8">8</div>
    <div class="item9">9</div>
    <div class="item10">10</div>
    <div class="item11">11</div>
    <div class="item12">12</div>
  </div>
  ```

  ```css
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
    grid-template-rows: repeat(3, 100px); /* 3 equal rows */
    gap: 10px;
  }
  
  .grid > div {
    display: grid;
    place-items: center;
    background: crimson;
    color: white;
    font-size: 4rem;
  }
  
  .item1 {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
  ```

También puedes usar la palabra clave `span` para indicar al elemento de la cuadrícula qué fila y columna debe abarcar. Por ejemplo, `1 / 3` es lo mismo que `1 / span 2`:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="grid">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
    <div class="item6">6</div>
    <div class="item7">7</div>
    <div class="item8">8</div>
    <div class="item9">9</div>
    <div class="item10">10</div>
    <div class="item11">11</div>
    <div class="item12">12</div>
  </div>
  ```

  ```css
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
    grid-template-rows: repeat(3, 100px); /* 3 equal rows */
    gap: 10px;
  }
  
  .grid > div {
    display: grid;
    place-items: center;
    background: crimson;
    color: white;
    font-size: 4rem;
  }
  
  .item1 {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  }
  ```

Puedes seguir aplicando esta técnica a cualquier elemento de la cuadrícula y colocarlos donde quieras.

Siguiendo con el proceso, así es como hemos creado un diseño en estilo "masonry" con los elementos.

Este es un nuevo ejemplo:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="grid">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
    <div class="item6">6</div>
    <div class="item7">7</div>
  </div>
  ```

  ```css
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
    grid-template-rows: repeat(4, 100px); /* 4 equal rows */
    gap: 10px;
  }
  
  .grid > div {
    display: grid;
    place-items: center;
    background: crimson;
    color: white;
    font-size: 4rem;
  }
  
  .item1 {
    grid-column: 1 / span 2;
  }
  
  .item4 {
    grid-column: 1 / span 3;
  }
  
  .item6 {
    grid-column: 1 / span 2;
  }
  
  .item7 {
    grid-column: 3 / span 2;
  }
  ```

---

## Cuestionario 7

1. **¿Qué especifican las propiedades `grid-column` y `grid-row` en un diseño de cuadrícula?**

    - [ ] a) El tamaño del contenedor de la cuadrícula.
    - [ ] b) La alineación de toda la cuadrícula.
    - [x] c) La ubicación horizontal y vertical de los elementos de la cuadrícula. //correcto
    - [ ] d) El tamaño de las pistas de la cuadrícula.

1. **¿Qué determina el número de líneas de cuadrícula que se generan para las filas y columnas en un diseño de cuadrícula?**

    - [ ] a) La propiedad `grid-gap`.
    - [x] b) Las propiedades `grid-template-rows` y `grid-template-columns`. //correcto
    - [ ] c) Las propiedades `grid-auto-rows` y `grid-auto-columns`.
    - [ ] d) La propiedad `grid-area`.

1. **¿Cómo se puede especificar la forma en que los elementos de la cuadrícula se extienden a lo largo de las filas o columnas en un diseño de cuadrícula?**

    - [ ] a) Utilizando la propiedad `grid-template`.
    - [ ] b) Especificando `auto` en `grid-column` o `grid-row`.
    - [x] c) Utilizando la palabra clave `span` o un rango como `1 / 3`. //correcto
    - [ ] d) Definiendo el tamaño de `grid-gap`.

[☝️](#trabaja-con-css-grid)

---

## Tema 8: ¿Cómo se pueden colocar elementos en la cuadrícula utilizando la propiedad `grid-template-areas`?

La propiedad `grid-template-areas` te permite diseñar un diseño de cuadrícula visual mediante el uso de etiquetas con nombre.

A continuación, asignas las etiquetas a elementos específicos de la cuadrícula utilizando la propiedad `grid-area`. En otras palabras, esas etiquetas con nombre también se denominan «nombres de áreas de cuadrícula».

Esta es la sintaxis básica de la propiedad `grid-template-areas`:

- **Example code**

  ```css
  {
    grid-template-areas:
      'header header header'
      'left-sidebar main right-sidebar'
      'footer footer footer';
  }
  ```

Estos son los puntos clave que hay que recordar sobre la sintaxis básica:

- Los valores como header y main son los nombres de las áreas de la cuadrícula.

- Cada valor separado por un espacio dentro de una cadena corresponde a una columna.

- Cada cadena representa una fila de la cuadrícula.

Por lo tanto, en la sintaxis, tenemos un contenedor de cuadrícula de 3 por 3.

Una vez definida la plantilla, debes utilizar la propiedad `grid-area` y las etiquetas (o áreas) con nombre como valores para indicar a CSS que un elemento específico pertenece a esa área de la cuadrícula.

La propiedad `grid-area` vincula el elemento de la cuadrícula a la región con nombre que definas en `grid-template-areas`.

Una forma muy común de demostrar las capacidades de la propiedad `grid-template-areas` es creando el clásico diseño «Holy Grail».

Si no sabes qué es, el diseño Holy Grail es un patrón de diseño web con un encabezado, un pie de página, dos barras laterales y un área de contenido principal. Asegura que el contenido principal tenga prioridad, mientras que las barras laterales y otras secciones se ajustan de manera adaptativa dentro del diseño.

Existen muchas soluciones para implementar el diseño Holy Grail, pero usar `grid-template-areas` y la propiedad `grid-area` es la forma más sencilla de crearlo.

Aquí tienes un ejemplo del diseño Holy Grail:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="grid-container">
    <div class="header">
      <h2>Header</h2>
    </div>
    <div class="sidebar-left">
      <h2>Left Sidebar</h2>
    </div>
    <div class="main"><h2>Main Content</h2></div>
    <div class="sidebar-right">
      <h2>Right Sidebar</h2>
    </div>
    <div class="footer">
      <h2>Footer</h2>
    </div>
  </div>
  ```

  ```css
  .grid-container {
    display: grid;
    grid-template-areas:
      'header header header'
      'sidebar-left main sidebar-right'
      'footer footer footer';
    grid-gap: 10px;
    background-color: #2196F3;
    padding: 10px;
  }
  
  .header {
    grid-area: header;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    text-align: center;
  }
  
  .sidebar-left {
    grid-area: sidebar-left;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    text-align: center;
  }
  
  .main {
    grid-area: main;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    text-align: center;
  }
  
  .sidebar-right {
    grid-area: sidebar-right;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    text-align: center;
  }
  
  .footer {
    grid-area: footer;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    text-align: center;
  }
  ```

Ten en cuenta que las propiedades `grid-template-areas` y `grid-area` pueden utilizarse de forma independiente entre sí.

La propiedad `grid-template-areas` se utiliza específicamente para definir un diseño visual mediante la asignación de áreas de cuadrícula con nombre dentro del contenedor de cuadrícula.

Por otro lado, la propiedad `grid-area` se utiliza para posicionar elementos de cuadrícula individuales, ya sea especificando sus posiciones de fila y columna o haciendo referencia a las áreas con nombre definidas con la propiedad `grid-template-areas`.

---

## Cuestionario 8

1. **¿Cómo se diseña un diseño de cuadrícula con la propiedad `grid-template-areas`?**

    - [ ] a) Con valores separados por comas, como `1 / 4`, para representar las diferentes filas y columnas del diseño.
    - [ ] b) Con valores separados por comas, como `header` y `footer`.
    - [x] c) Con cadenas de valores separados por espacios para representar las diferentes filas y columnas del diseño. //correcto
    - [ ] d) Con valores separados por espacios, como `2fr 1fr 1fr`.

2. **¿Con qué propiedad se utiliza la propiedad `grid-template-areas`?**

    - [ ] a) `grid-column`
    - [ ] b) `grid-row
    - [ ] c) `grid-gap`
    - [x] d) `grid-area`` //correcto

3. **¿Cuál es el uso específico de la propiedad `grid-area`?**

    - [ ] a) Para especificar un área de la cuadrícula que se debe excluir.
    - [ ] b) Para especificar el tamaño de los elementos de la cuadrícula.
    - [x] c) Para colocar elementos individuales de la cuadrícula especificando sus posiciones en filas y columnas. //correcto
    - [ ] d) Para crear una representación visual de la cuadrícula.

[☝️](#trabaja-con-css-grid)

---
