# Diseñar un menú de cafetería

En este taller, practicarás los conceptos básicos de CSS (hojas de estilo en cascada) creando el menú de una cafetería.

---

## Paso 1

> Comencemos añadiendo algo de contenido al menú. Añade un elemento `main` dentro del elemento `body` existente. Este elemento contendrá la información sobre los precios del café y los postres que ofrece la cafetería.

- **Codigo**

  ```html
  <body>
    <!-- code -->
    <main></main>
    <!-- code -->
  </body>
  ```

---

## Paso 2

> El nombre de la cafetería es `CAMPER CAFE`. Por lo tanto, agrega un elemento `h1` dentro de tu elemento `main`. Dale el nombre de la cafetería en letras mayúsculas para que destaque.

- **Codigo**

  ```html
  <main>
  <!-- code -->
    <h1>CAMPER CAFE</h1>
  <!-- code -->
  </main>
  ```

---

## Paso 3

> Para que los visitantes sepan que la cafetería se fundó en `2020`, agrega un elemento `p` debajo del elemento `h1` con el texto `Est. 2020`.

- **Codigo**

  ```html
  <main>
    <h1>CAMPER CAFE</h1>
  <!-- code -->
    <p>Est. 2020</p>
  <!-- code -->
  </main>
  ```

---

## Paso 4

> Habrá dos secciones en el menú, una para cafés y otra para postres. Agrega un elemento de `section` dentro del elemento `main` para que tengas un lugar donde poner todos los cafés disponibles.

- **Codigo**

  ```html
  <main>
    <h1>CAMPER CAFE</h1>
    <p>Est. 2020</p>
    <!-- code -->
    <section></section>
    <!-- code -->
  </main>
  ```

---

## Paso 5

> Cree un elemento `h2` en el elemento de `section` y asígnele el texto `Coffee`.

- **Codigo**

  ```html
  <section>
    <!-- code -->
    <h2>Coffee</h2>
    <!-- code -->
  </section>
  ```

---

## Paso 6

> Hasta ahora, tenías un control limitado sobre la presentación y el aspecto de tu contenido. Para cambiarlo, agrega un elemento de `style` dentro del elemento `head`.

- **Codigo**

  ```html
  <head>
    <meta charset="utf-8" />
    <title>Cafe Menu</title>
    <!-- code -->
    <style></style>
    <!-- code -->
  </head>
  <body>
    <main>
      <h1>CAMPER CAFE</h1>
      <p>Est. 2020</p>
      <section>
        <h2>Coffee</h2>
      </section>
    </main>
  </body>
  ```

---

## Paso 7

En lecciones anteriores, aprendiste a agregar propiedades y valores `CSS` de esta manera:

- **Codigo Ejemplo**

  ```css
  element {
   property: value;
  }
  ```

> Centra el contenido del elemento `h1` estableciendo su propiedad `text-align` en el valor `center`.

- **Codigo**

  ```html
  <style>
    /* code */ 
    h1 {
      text-align: center;
    }
    /* code */ 
  </style>
  ```

---

## Paso 8

> En el paso anterior, utilizaste un selector de tipo para aplicar estilo al elemento `h1`. Centra el contenido de los elementos `h2` y `p` añadiendo un nuevo selector de tipo para cada uno de ellos al elemento de `style` existente.

- **Codigo**

  ```html
  <style>
    h1 {
      text-align: center;
    }
    /* code */ 
    h2 {
      text-align: center;
    }
    p {
      text-align: center;
    }
    /* code */
  </style> 
  ```

---

## Paso 9

Ahora tienes tres selectores de tipo con el mismo estilo. Puedes agregar el mismo grupo de estilos a muchos elementos creando una lista de selectores. Cada selector se separa con comas, así:

- **Codigo Ejemplo**

  ```css
  selector1, selector2 {
    property: value;
  }
  ```

> Elimine los tres selectores de tipo existentes y sustitúyalos por una lista de selectores que centre el texto de los elementos `h1`, `h2` y `p`.

- **Codigo**

  ```html
  <style>
    /* code */ 
    h1, h2, p {
      text-align: center;
    }
    /* code */
  </style> 
  ```

---

## Paso 10

Has aplicado estilos a tres elementos escribiendo CSS dentro de las etiquetas de `<style>`. Esto funciona, pero como habrá muchos más estilos, es mejor poner todos los estilos en un archivo separado y enlazarlo.

Se ha creado un archivo `styles.css` independiente para usted. Puede cambiar entre archivos con las pestañas de la parte superior del editor.

> Empiece por reescribir los estilos que ha creado en el archivo `styles.css`. Asegúrese de excluir las etiquetas de `<style>` de apertura y cierre.

- **Codigo**

  ```css
  /* code */ 
  h1, h2, p {
    text-align: center;
  }
  /* code */ 
  ```

---

## Paso 11

> Ahora que ya tienes el CSS en el archivo `styles.css`, elimina el elemento de estilo y todo su contenido. Una vez eliminado, el texto que estaba centrado volverá a desplazarse hacia la izquierda.

- **Codigo**

  ```html
  <head>
    <meta charset="utf-8" />
    <title>Cafe Menu</title>
    <!-- code   -->

    <!-- code   -->
  </head>
  ```

---

## Paso 12

> Ahora necesitas vincular el archivo `styles.css` para que los estilos se apliquen de nuevo. Dentro del elemento `head`, añade un elemento `link`. Dale un atributo `rel` con el valor `«stylesheet»` y un atributo `href` con el valor `«styles.css»`.

Nota: El elemento `link` es un elemento vacío, lo que significa que no tiene una etiqueta de cierre. Los elementos vacíos deben escribirse como `<link>` en lugar de `<link></link>`.

- **Codigo**

  ```html
  <head>
    <meta charset="utf-8" />
    <title>Cafe Menu</title>
    <!-- code   -->
    <link rel="stylesheet" href="styles.css">
    <!-- code   -->
  </head>
  ```

---

## Paso 13

> Para que el estilo de la página se vea igual en dispositivos móviles que en computadoras de escritorio o portátiles, debes agregar un elemento `meta` con un atributo de `content` especial.

En lecciones anteriores aprendiste sobre el elemento `meta` viewport.

Aquí tienes un ejemplo:

- **Codigo Ejemplo**

  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ```

- **Codigo**

  ```html
  <head>
    <meta charset="utf-8" />
    <!-- code   -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- code   -->
    <title>Cafe Menu</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  ```

---

## Paso 14

> El texto vuelve a estar centrado, por lo que el enlace al archivo CSS funciona. Agregue otro estilo al archivo que cambie la propiedad `background-color` a `brown` para el elemento `body`.

- **Codigo**

  ```css
  /* code */ 
  body {
    background-color: brown;
  }
  /* code */ 
  ```

---

## Paso 15

> El fondo marrón dificulta la lectura del texto. Cambie el color de fondo del elemento del `body` a `burlywood` para que tenga algo de color, pero se pueda seguir leyendo el texto.

- **Codigo**

  ```css
  /* code */ 
  body {
    background-color: burlywood;
  }
  /* code */ 
  ```

---

## Paso 16

El elemento `div` se utiliza principalmente para fines de diseño, a diferencia de los otros elementos de contenido que ha utilizado hasta ahora.

>Agregue un elemento `div` dentro del elemento `body` y luego mueva todos los demás elementos dentro del nuevo `div`.
>
> Dentro de la etiqueta `div` de apertura, agregue el atributo `id` con un valor de `menu`.

- **Codigo**

  ```html
  <body>
    <!-- code -->
    <div id="menu">
      <main>
        <h1>CAMPER CAFE</h1>
        <p>Est. 2020</p>
        <section>
          <h2>Coffee</h2>
        </section>
      </main>
    </div>
    <!-- code -->
  </body>
  ```

---

## Paso 17

El objetivo ahora es hacer que el `div` no ocupe todo el ancho de la página. La propiedad `width` de CSS es perfecta para esto.

Puedes usar el selector `id` para seleccionar un elemento específico con un atributo `id`.

En lecciones anteriores aprendiste a trabajar con el selector `id` de la siguiente manera:

- **Codigo Ejemplo**

  ```css
  #cat {
    width: 250px;
  }
  ```

> Utilice el selector `#menu` para dar a su elemento un ancho de `300px`.

- **Codigo**

  ```css
  body {
    background-color: burlywood;
  }
  h1, h2, p {
    text-align: center;
  }
  /* code */ 
  #menu {
    width: 300px;
  }
  /* code */ 
  ```

---

## Paso 18

Los comentarios en CSS tienen este aspecto:

- **Codigo Ejemplo**

  ```css
  /* comment here */
  ```

> En tu hoja de estilos, comenta la línea que contiene la propiedad y el valor del `background-color`, para que puedas ver el efecto de aplicar estilo solo al elemento `#menu`. Esto hará que el fondo vuelva a ser blanco.

- **Codigo**

  ```css
  body {
    /* code */ 
    /* background-color: burlywood; */
    /* code */ 
  }
  h1, h2, p {
    text-align: center;
  }
  #menu {
    width: 300px;
  }
  ```

---

## Paso 19

> Ahora usa el selector `#menu` existente para establecer el color de fondo del elemento `div` en `burlywood`.

- **Codigo**

  ```css
  body {
    /* background-color: burlywood; */
  }
  #menu {
    width: 300px;
    /* code */ 
    background-color: burlywood;
    /* code */ 
  }
  h1, h2, p {
    text-align: center;
  }
  ```

---

## Paso 20

Ahora es fácil ver que el texto está centrado dentro del elemento `#menu`. Actualmente, el ancho del elemento `#menu` se especifica en píxeles (`px`).

Cambie el valor de la propiedad `width` a `80%`, para que sea el `80%` del ancho de su elemento padre (`body`).

- **Codigo**

  ```css
  #menu {
    /* code */ 
    width: 80%;
    /* code */ 
    background-color: burlywood;
  }
  ```

---

## Paso 21

> A continuación, debes centrar el `#menu` horizontalmente. Para ello, establece las propiedades `margin-left` y `margin-right` en `auto`. Piensa en el margen como un espacio invisible alrededor de un elemento. Utilizando estas dos propiedades de margen, centra el elemento `#menu` dentro del elemento `body`.

- **Codigo**

  ```css
  #menu {
    width: 80%;
    /* code */ 
    background-color: burlywood;
    margin-left: auto;
    margin-right: auto;
    /* code */ 
  }
  ```

---

## Paso 22

Hasta ahora has estado utilizando selectores de tipo e `id` para aplicar estilos a los elementos. Sin embargo, es más habitual utilizar un selector diferente para aplicar estilos a los elementos.

En lecciones anteriores has aprendido a trabajar con selectores de `class` de la siguiente manera:

- **Codigo Ejemplo**

  ```css
  .class-name {
    styles
  }
  ```

> Cambie el selector `#menu` existente por un selector de clase sustituyendo `#menu` por una clase llamada `.menu`.

- **Codigo**

  ```css
  /* code */ 
  .menu {
  /* code */ 
    width: 80%;
    background-color: burlywood;
    margin-left: auto;
    margin-right: auto;
  }
  ```

---

## Paso 23

Para aplicar el estilo de la clase al elemento div, elimine el atributo id y añada un atributo class a la etiqueta de apertura del elemento div. Asegúrese de establecer el valor de la clase en menu.

- **Codigo**

  ```html
  <body>
    <!-- code -->
    <div class="menu">
    <!-- code -->
      <main>
        <h1>CAMPER CAFE</h1>
        <p>Est. 2020</p>
        <section>
          <h2>Coffee</h2>
        </section>
      </main>
    </div>
  </body>
  ```

---

## Paso 24

Dado que el principal producto que vende la cafetería es el café, podrías utilizar una imagen de granos de café como fondo de la página.

> Elimina el comentario y su contenido dentro del selector de tipo de `body`. A continuación, añade una propiedad `background-image` y establece su valor en `url(https://cdn.freecodecamp.org/curriculum/css-cafe/beans.jpg)`.

- **Codigo**

  ```css
  body {
    <!-- code -->
    background-image: url(https://cdn.freecodecamp.org/curriculum/css-cafe/beans.jpg);
    <!-- code -->
  }
  ```

---

## Paso 25

Ahora que todo parece estar bien, es hora de empezar a añadir algunos elementos al menú.

> Añade un elemento de `article` vacío bajo el encabezado `Coffee`. Contendrá el sabor y el precio de cada café que ofreces actualmente.

- **Codigo**

  ```html
  <body>
    <div class="menu">
      <main>
        <h1>CAMPER CAFE</h1>
        <p>Est. 2020</p>
        <section>
          <h2>Coffee</h2>
          <!-- code -->
          <article></article>
          <!-- code -->
        </section>
      </main>
    </div>
  </body>
  ```

---

## Paso 26

Los elementos de `article` suelen contener varios elementos con información relacionada. En este caso, contendrá un sabor de café y el precio de ese sabor.

> Anida dos elementos `p` dentro del elemento de `article`. El texto del primero debe ser `French Vanilla` y el del segundo, `3.00`.

- **Codigo**

  ```html
    <article>
      <!-- code -->
      <p>French Vanilla</p>
      <p>3.00</p>
      <!-- code -->
    </article>
  ```

---

## Paso 27

Comenzando por debajo del par café/precio existente, agregue los siguientes cafés y precios utilizando elementos de artículo con dos elementos p anidados dentro de cada uno.

- **Codigo Ejemplo**

  ```text
  Caramel Macchiato 3.75
  Pumpkin Spice 3.50
  Hazelnut 4.00
  Mocha 4.50
  ```

> Como antes, el texto del primer elemento `p` debe contener el sabor del café y el texto del segundo elemento `p` debe contener el precio.

- **Codigo**

  ```html
    <article>
      <p>French Vanilla</p>
      <p>3.00</p>
    </article>
    <!-- code -->
    <article>
      <p>Caramel Macchiato</p>
      <p>3.75</p>
    </article>
    <article>
      <p>Pumpkin Spice</p>
      <p>3.50</p>
    </article>
    <article>
      <p>Hazelnut</p>
      <p>4.00</p>
    </article>
    <article>
      <p>Mocha</p>
      <p>4.50</p>
    </article>
    <!-- code -->
  ```

---

## Paso 28

Actualmente, los sabores y los precios están apilados uno encima del otro y centrados con sus respectivos elementos `p`. Sería mejor que el sabor estuviera a la izquierda y el precio a la derecha.

> Agrega el nombre de clase `flavor` al elemento `French Vanilla`.

- **Codigo**

  ```html
    <article>
      <!-- code -->
      <p class="flavor">French Vanilla</p>
      <!-- code -->
      <p>3.00</p>
    </article>
  ```

---

## Paso 29

> Utilizando tu nueva clase de `flavor` como selector, establece el valor de la propiedad `text-align` en `left`.

- **Codigo**

  ```css
  /* code */ 
  .flavor {
    text-align: left;
  }
  /* code */ 
  ```

---

## Paso 30

> A continuación, debes alinear el precio a la derecha. Añade una `class` llamada `price` a tu elemento `p` que tiene `3.00` como texto.

- **Codigo**

  ```html
    <article>
      <p class="flavor">French Vanilla</p>
      <!-- code -->
      <p class="price">3.00</p>
      <!-- code -->
    </article>
  ```

---

## Paso 31

> Ahora alinea el texto a la `right` para los elementos con la class de `price`.

- **Codigo**

  ```css
  /* code */ 
  .price {
    text-align: right;
  }
  /* code */ 
  ```

---

## Paso 32

Eso es más o menos lo que quieres, pero ahora sería bueno que el sabor y el precio estuvieran en la misma línea. Los elementos `p` son elementos de nivel de bloque, por lo que ocupan todo el ancho de su elemento padre.

Para que estén en la misma línea, debes aplicar algún estilo a los elementos `p` para que se comporten más como elementos en línea.

> Para ello, empieza por añadir un atributo de `class` con el valor `item` al primer elemento de `article` bajo el encabezado `Coffee`.

- **Codigo**

  ```html
    <h2>Coffee</h2>

      <!-- code -->
    <article class="item">
      <!-- code -->
      <p class="flavor">French Vanilla</p>
      <p class="price">3.00</p>
    </article>
  ```

---

## Paso 33

Los elementos `p` están anidados en un elemento `article` con el atributo de clase `item`. Puedes aplicar estilos a todos los elementos `p` anidados en cualquier lugar de los elementos con una clase llamada `item` de la siguiente manera:

- **Codigo Ejemplo**

  ```css
  .item p { }
  ```

> Utilizando el selector anterior, agregue una propiedad de `display` con el valor `inline-block` para que los elementos `p` se comporten más como elementos en línea.

- **Codigo**

  ```css
  /* code */ 
  .item p {
    display: inline-block;
  }
  /* code */ 
  ```

---

## Paso 34

Ahora está más cerca, pero el precio no se ha mantenido a la derecha. Esto se debe a que los elementos `inline-block` solo ocupan el ancho de su contenido.

> Para separarlos, agrega una propiedad de `width` a los selectores de clase `flavor` y `price` con un valor del `50%` cada uno.

- **Codigo**

  ```css
  /* code */ 
  .flavor {
    text-align: left;
    width: 50%;
  }
  
  .price {
    text-align: right;
    width: 50%;
  }
  /* code */ 
  ```

---

## Paso 35

Bueno, eso no funcionó. Al aplicar el estilo `inline-block` a los elementos `p` y colocarlos en líneas separadas, se crea un espacio adicional a la derecha del primer elemento `p`, lo que hace que el segundo se desplace a la siguiente línea.

> Una forma de solucionarlo es hacer que el ancho de cada elemento `p` sea ligeramente inferior al `50%`. Por lo tanto, cambia el valor del `width` al `49%` para cada clase y observa qué sucede.

- **Codigo**

  ```css
  /* code */ 
  .flavor {
    text-align: left;
    width: 49%;
  }
  
  .price {
    text-align: right;
    width: 49%;
  }
  /* code */ 
  ```

---

## Paso 36

Funcionó, pero aún queda un pequeño espacio a la derecha del precio.

> Podrías seguir probando diferentes porcentajes para los anchos. En lugar de eso, usa la tecla de retroceso para mover el elemento `p` con la clase `price` junto al elemento `p` con la clase `flavor`, de modo que queden en la misma línea en el editor. Asegúrate de que no haya espacio entre los dos elementos.

- **Codigo**

  ```html
      <!-- code -->
      <p class="flavor">French Vanilla</p><p class="price">3.00</p>
      <!-- code -->
  ```

---

## Paso 37

> Ahora, vuelve a cambiar el ancho de la clase de `flavor` y `price` al `50%`.

- **Codigo**

  ```css
  /* code */ 
  .flavor {
    text-align: left;
    width: 50%;
  }
  
  .price {
    text-align: right;
    width: 50%;
  }
  /* code */ 
  ```

---

## Paso 38

> Ahora que ya sabes que funciona, puedes cambiar los elementos `article` y `p` restantes para que coincidan con el primer conjunto. Empieza añadiendo la clase `item` a los demás elementos `article`.

- **Codigo**

  ```html
    <!-- code -->
    <article class="item">
      <p>Caramel Macchiato</p>
      <p>3.75</p>
    </article>
    <article class="item">
      <p>Pumpkin Spice</p>
      <p>3.50</p>
    </article>
    <article class="item">
      <p>Hazelnut</p>
      <p>4.00</p>
    </article>
    <article class="item">
      <p>Mocha</p>
      <p>4.50</p>
    </article>
    <!-- code -->
  ```

---

## Paso 39

> A continuación, coloca los demás elementos `p` en la misma línea sin dejar espacio entre ellos.

- **Codigo**

  ```html
    <!-- code -->
    <article class="item">
      <p>Caramel Macchiato</p><p>3.75</p>
    </article>
    <article class="item">
      <p>Pumpkin Spice</p><p>3.50</p>
    </article>
    <article class="item">
      <p>Hazelnut</p><p>4.00</p>
    </article>
    <article class="item">
      <p>Mocha</p><p>4.50</p>
    </article>
    <!-- code -->
  ```

---

## Paso 40

> Para completar el estilo, agrega los nombres de clase aplicables `flavor` y `price` a todos los elementos `p` restantes.

- **Codigo**

  ```html
    <!-- code -->
    <article class="item">
      <p class="flavor">Caramel Macchiato</p><p class="price">3.75</p>
    </article>
    <article class="item">
      <p class="flavor">Pumpkin Spice</p><p class="price">3.50</p>
    </article>
    <article class="item">
      <p class="flavor">Hazelnut</p><p class="price">4.00</p>
    </article>
    <article class="item">
      <p class="flavor">Mocha</p><p class="price">4.50</p>
    </article>
    <!-- code -->
  ```

---

## Paso 41

Si reduces el ancho de la vista previa de la página, notarás que, en algún momento, parte del texto de la izquierda comienza a pasar a la siguiente línea. Esto se debe a que el ancho de los elementos `p` del lado izquierdo solo puede ocupar el `50%` del espacio.

> Dado que los precios de la derecha tienen muchos menos caracteres, actualiza el ancho de la clase `flavor` al `75%` y el ancho de la clase `price` al `25%`.

- **Codigo**

  ```css
  /* code */ 
  .flavor {
    text-align: left;
    width: 75%;
  }
  
  .price {
    text-align: right;
    width: 25%;
  }
  /* code */ 
  ```

---

## Paso 42

> Volverás al diseño del menú en unos pasos, pero por ahora, sigue adelante y añade un segundo elemento de `section` debajo del primero para mostrar los postres que ofrece la cafetería.

- **Codigo**

  ```html
    <section>
      <h2>Coffee</h2>
      <article class="item">
        <p class="flavor">French Vanilla</p><p class="price">3.00</p>
      </article>
      <article class="item">
        <p class="flavor">Caramel Macchiato</p><p class="price">3.75</p>
      </article>
      <article class="item">
        <p class="flavor">Pumpkin Spice</p><p class="price">3.50</p>
      </article>
      <article class="item">
        <p class="flavor">Hazelnut</p><p class="price">4.00</p>
      </article>
      <article class="item">
        <p class="flavor">Mocha</p><p class="price">4.50</p>
      </article>
    </section>

    <!-- code -->
    <section></section>
    <!-- code -->
  ```

---

## Paso 43

> Agrega un elemento `h2` en la nueva sección y ponle el texto `Desserts`.

- **Codigo**

  ```html
    <section>
      <!-- code -->
      <h2>Desserts</h2>
      <!-- code -->
    </section>
  ```

---

## Paso 44

> Agrega un elemento de `article` vacío bajo el encabezado `Desserts`. Dale un atributo de class con el valor `item`.

- **Codigo**

  ```html
    <section>
      <h2>Desserts</h2>

      <!-- code -->
      <article class="item">
      </article>
      <!-- code -->
    </section>
  ```

---

## Paso 45

> Anida dos elementos `p` dentro del elemento de tu `article`. El texto del primero debe ser `Donut` y el del segundo, `1.50`. Coloca ambos en la misma línea, asegurándote de que no haya espacio entre ellos.

- **Codigo**

  ```html
      <article class="item">
      <!-- code -->
        <p>Donut</p><p>1.50</p>
      <!-- code -->
      </article>
  ```

---

## Paso 46

> Para los dos elementos `p` que acaba de agregar, agregue `dessert` como valor del atributo de `class` del primer elemento `p` y el valor `price` como atributo de `class` del segundo elemento `p`.

- **Codigo**

  ```html
      <article class="item">
      <!-- code -->
        <p class="dessert">Donut</p><p class="price">1.50</p>
      <!-- code -->
      </article>
  ```

---

## Paso 47

Algo no parece estar bien. Has añadido el valor correcto del atributo de `class` al elemento `p` con `Donut` como texto, pero no has definido un selector para él.

> La regla CSS para la `class` `flavor` ya establece las propiedades que deseas. Añade la class `dessert` como selector adicional para esta regla CSS.

- **Codigo**

  ```css
  /* code */ 
  .flavor, .dessert {
    text-align: left;
    width: 75%;
  }
  /* code */ 
  ```

---

## Paso 48

> Debajo del postre que acabas de añadir, añade el resto de postres y precios utilizando tres elementos de `article` más, cada uno con dos elementos `p` anidados. Cada elemento debe tener el texto correcto del postre y el precio, y todos ellos deben tener las clases correctas.

- **Codigo Ejemplo**

  ```text
  Cherry Pie 2.75
  Cheesecake 3.00
  Cinnamon Roll 2.50
  ```

- **Codigo**

  ```html
      <article class="item">
        <p class="dessert">Donut</p><p class="price">1.50</p>
      </article>

      <!-- code -->
      <article class="item">
        <p class="dessert">Cherry Pie</p><p class="price">2.75</p>
      </article>
      <article class="item">
        <p class="dessert">Cheesecake</p><p class="price">3.00</p>
      </article>
      <article class="item">
        <p class="dessert">Cinnamon Roll</p><p class="price">2.50</p>
      </article>
      <!-- code -->
  ```

---

## Paso 49

Puede dejar un espacio entre el contenido y los bordes del menú utilizando diversas propiedades de `padding`.

> Asigne a la clase del `menu` un `padding-left` y un `padding-right` con el mismo valor de `20px`.

- **Codigo**

  ```css
  .menu {
    width: 80%;
    background-color: burlywood;
    margin-left: auto;
    margin-right: auto;
    /* code */
    padding-left: 20px;
    padding-right: 20px;
    /* code */
  }
  ```

---

## Paso 50

> Así se ve mejor. Ahora intenta agregar el mismo `padding` de `20px` en la parte superior e inferior del menú.

- **Codigo**

  ```css
  .menu {
    width: 80%;
    background-color: burlywood;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
    /* code */
    padding-top: 20px;
    padding-bottom: 20px;
    /* code */
  }
  ```

---

## Paso 51

> Dado que los `4` lados del menú tienen el mismo espaciado interno, elimine las cuatro propiedades y utilice una única propiedad de `padding` con el valor `20px`.

- **Codigo**

  ```css
  .menu {
    width: 80%;
    background-color: burlywood;
    margin-left: auto;
    margin-right: auto;
    /* code */
    padding: 20px;
    /* code */
  }
  ```

---

## Paso 52

El ancho actual del menú siempre ocupará el 80 % del ancho del elemento `body`. En una pantalla muy ancha, el café y el postre aparecen muy lejos de sus precios.

> Agrega una propiedad `max-width` a la clase del `menu` con un valor de `500px` para evitar que se ensanche demasiado.

- **Codigo**

  ```css
  .menu {
    width: 80%;
    background-color: burlywood;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    /* code */
    max-width: 500px;
    /* code */
  }
  ```

---

## Paso 53

Puede cambiar la `font-family` del texto para que se vea diferente de la fuente predeterminada de su navegador. Cada navegador tiene algunas fuentes comunes disponibles.

> Cambie todo el texto del `body` añadiendo una propiedad de `font-family` con el valor `sans-serif`. Se trata de una fuente bastante común y muy legible.

- **Codigo**

  ```css
  body {
    background-image: url(https://cdn.freecodecamp.org/curriculum/css-cafe/beans.jpg);
    /* code */
    font-family: sans-serif;
    /* code */
  }
  ```

---

## Paso 54

Es un poco aburrido que todo el texto tenga la misma `font-family`. Puedes mantener la mayor parte del texto en `sans-serif` y cambiar solo los elementos `h1` y `h2` utilizando un selector diferente.

> Aplica estilo a los elementos `h1` y `h2` utilizando un único selector para que el texto de estos elementos utilice la fuente `Impact`.

- **Codigo**

  ```css
  /* code */
  h1, h2 {
    font-family: Impact;
  }
  /* code */
  ```

---

## Paso 55

Puede agregar un valor alternativo para la familia de fuentes añadiendo otro nombre de fuente separado por una coma. Las alternativas se utilizan en los casos en que la inicial no se encuentra o no está disponible.

> Agregue la fuente alternativa `serif` después de la fuente `Impact`.

- **Codigo**

  ```css
  h1, h2 {
    /* code */
    font-family: Impact, serif;
    /* code */
  }
  ```

---

## Paso 56

> Ponga en cursiva `Est. 2020` creando un selector de clase `established` y asignándole una propiedad de `font-style` en `italic`.

- **Codigo**

  ```css
  /* code */
  .established {
    font-style: italic;
  }
  /* code */
  ```

---

## Paso 57

> Ahora aplique la clase `established` al texto `Est. 2020`.

- **Codigo**

  ```html
    <h1>CAMPER CAFE</h1>
    <p class="established">Est. 2020</p>
  ```

---

## Paso 58

La tipografía de los elementos de encabezado (por ejemplo, `h1`, `h2`) se establece mediante los valores predeterminados de los navegadores de los usuarios.

> Agregue dos nuevos selectores de tipo (`h1` y `h2`). Utilice la propiedad `font-size` para ambos, pero utilice el valor `40px` para el `h1` y `30px` para el `h2`.

- **Codigo**

  ```css
  /* code */
  h1 {
  font-size: 40px;
  }
  h2 {
  font-size: 30px;
  }
  /* code */
  ```

---

## Paso 59

> Agrega un elemento de `footer` debajo del elemento `main`, donde puedes agregar información adicional.

- **Codigo**

  ```html
    <main>
      <h1>CAMPER CAFE</h1>
      <p class="established">Est. 2020</p>
      <section>
        <h2>Coffee</h2>
        <article class="item">
          <p class="flavor">French Vanilla</p><p class="price">3.00</p>
        </article>
        <article class="item">
          <p class="flavor">Caramel Macchiato</p><p class="price">3.75</p>
        </article>
        <article class="item">
          <p class="flavor">Pumpkin Spice</p><p class="price">3.50</p>
        </article>
        <article class="item">
          <p class="flavor">Hazelnut</p><p class="price">4.00</p>
        </article>
        <article class="item">
          <p class="flavor">Mocha</p><p class="price">4.50</p>
        </article>
      </section>
      <section>
        <h2>Desserts</h2>
        <article class="item">
          <p class="dessert">Donut</p><p class="price">1.50</p>
        </article>
        <article class="item">
          <p class="dessert">Cherry Pie</p><p class="price">2.75</p>
        </article>
        <article class="item">
          <p class="dessert">Cheesecake</p><p class="price">3.00</p>
        </article>
        <article class="item">
          <p class="dessert">Cinnamon Roll</p><p class="price">2.50</p>
        </article>
      </section>
    </main>

    <!-- code -->
    <footer></footer>
    <!-- code -->
  ```

---

## Paso 60

> Dentro del `footer`, agrega un elemento de `address`. En los siguientes pasos, agregarás la información de contacto a este elemento.

- **Codigo**

  ```html
    <footer>
      <!-- code -->
      <address></address>
      <!-- code -->
    </footer>
  ```

---

## Paso 61

> Dentro del `address`, agrega un elemento `p`. A continuación, anida un elemento de anclaje (`a`) en el `p` que enlace `https://www.freecodecamp.org` y tenga el texto `Visit our website`.

Asegúrate de que el enlace se abra en una nueva pestaña agregando un atributo de `target` con el valor `_blank`.

- **Codigo**

  ```html
    <footer>
      <address>
        <!-- code -->
        <p>
          <a href="https://www.freecodecamp.org" target="_blank">Visit our website</a>
        </p>
        <!-- code -->
      </address>
    </footer>
  ```

---

## Paso 62

> Agrega un segundo elemento `p` debajo del que contiene el enlace y asígnale el texto `123 Free Code Camp Drive`.

- **Codigo**

  ```html
    <footer>
      <address>
        <p>
          <a href="https://www.freecodecamp.org" target="_blank">Visit our website</a>
        </p>
        <!-- code -->
        <p>123 Free Code Camp Drive</p>
        <!-- code -->
      </address>
    </footer>
  ```

---

## Paso 63

Puede utilizar un elemento `hr` para mostrar un separador entre secciones de contenido diferente.

- **Codigo Ejemplo**

  ```html
  <section>
    <h2>Things cats love</h2>
    <hr>
    <p>Cats love lasagna.</p>
  </section>
  ```

> Primero, agrega un elemento `hr` entre el elemento p con la clase `established` y el primer elemento de `section`.

Ten en cuenta que el elemento `hr` es un elemento vacío.

- **Codigo**

  ```html
    <main>
      <h1>CAMPER CAFE</h1>
      <p class="established">Est. 2020</p>
      <!-- code -->
      <hr>
      <!-- code -->
      <section>
        <h2>Coffee</h2>
        <article class="item">
          <p class="flavor">French Vanilla</p><p class="price">3.00</p>
        </article>
        <article class="item">
          <p class="flavor">Caramel Macchiato</p><p class="price">3.75</p>
        </article>
        <article class="item">
          <p class="flavor">Pumpkin Spice</p><p class="price">3.50</p>
        </article>
        <article class="item">
          <p class="flavor">Hazelnut</p><p class="price">4.00</p>
        </article>
        <article class="item">
          <p class="flavor">Mocha</p><p class="price">4.50</p>
        </article>
      </section>
      <section>
        <h2>Desserts</h2>
        <article class="item">
          <p class="dessert">Donut</p><p class="price">1.50</p>
        </article>
        <article class="item">
          <p class="dessert">Cherry Pie</p><p class="price">2.75</p>
        </article>
        <article class="item">
          <p class="dessert">Cheesecake</p><p class="price">3.00</p>
        </article>
        <article class="item">
          <p class="dessert">Cinnamon Roll</p><p class="price">2.50</p>
        </article>
      </section>
    </main>
  ```

---

## Paso 64

Las propiedades predeterminadas de un elemento `hr` harán que aparezca como una línea delgada de color gris claro. Puede cambiar la altura de la línea especificando un valor para la propiedad `height`.

> Cambie la altura del elemento `hr` a `3px`.

- **Codigo**

  ```css
  /* code */
  hr {
    height: 3px;
  }
  /* code */
  ```

---

## Paso 65

> Cambia el background del elemento `hr` a `brown` para que coincida con el color de los granos de café.

- **Codigo**

  ```css
  hr {
    height: 3px;
    /* code */
    background: brown;
    /* code */
  }
  ```

---

## Paso 66

Observe el color gris a lo largo de los bordes de la línea. Esos bordes se conocen como bordes. Cada lado de un elemento puede tener un color diferente o todos pueden ser del mismo color.

> Haga que todos los bordes del elemento `hr` tengan el mismo color que su fondo utilizando la propiedad `border-color`.

- **Codigo**

  ```css
  hr {
    height: 3px;
    background: brown;
    /* code */
    border-color: brown;
    /* code */
  }
  ```

---

## Paso 67

¿Te das cuenta de que el grosor de la línea parece mayor? El valor predeterminado de una propiedad llamada `border-width` es `1px` para todos los bordes de los elementos `hr`. Al cambiar el borde al mismo color que el fondo, la altura total de la línea es de `5px` (`3px` más el ancho del borde superior e inferior de `1px`).

> Cambia la propiedad `height` del `hr` a `2px`, para que la altura total sea de `4px`.

- **Codigo**

  ```css
  hr {
    /* code */
    height: 2px;
    /* code */
    background: brown;
    border-color: brown;
  }
  ```

---

## Paso 68

> Añade otro elemento `hr` entre el elemento `main` y el elemento del `footer`.

- **Codigo**

  ```html
    <main>
      <h1>CAMPER CAFE</h1>
      <p class="established">Est. 2020</p>
      <hr>
      <section>
        <h2>Coffee</h2>
        <article class="item">
          <p class="flavor">French Vanilla</p><p class="price">3.00</p>
        </article>
        <article class="item">
          <p class="flavor">Caramel Macchiato</p><p class="price">3.75</p>
        </article>
        <article class="item">
          <p class="flavor">Pumpkin Spice</p><p class="price">3.50</p>
        </article>
        <article class="item">
          <p class="flavor">Hazelnut</p><p class="price">4.00</p>
        </article>
        <article class="item">
          <p class="flavor">Mocha</p><p class="price">4.50</p>
        </article>
      </section>
      <section>
        <h2>Desserts</h2>
        <article class="item">
          <p class="dessert">Donut</p><p class="price">1.50</p>
        </article>
        <article class="item">
          <p class="dessert">Cherry Pie</p><p class="price">2.75</p>
        </article>
        <article class="item">
          <p class="dessert">Cheesecake</p><p class="price">3.00</p>
        </article>
        <article class="item">
          <p class="dessert">Cinnamon Roll</p><p class="price">2.50</p>
        </article>
      </section>
    </main>
    <!-- code -->
    <hr>
    <!-- code -->
    <footer>
      <address>
        <p>
          <a href="https://www.freecodecamp.org" target="_blank">Visit our website</a>
        </p>
        <p>123 Free Code Camp Drive</p>
      </address>
    </footer>
  ```

---

## Paso 69

> Para crear un poco más de espacio alrededor del menú, agrega `20px` de espacio en el interior del elemento `body` utilizando la propiedad `padding`.

- **Codigo**

  ```css
  body {
    background-image: url(https://cdn.freecodecamp.org/curriculum/css-cafe/beans.jpg);
    font-family: sans-serif;
    /* code */
    padding: 20px;
    /* code */
  }
  ```

---

## Paso 70

Centrándonos en los elementos del menu y los precios, hay una diferencia bastante grande entre cada línea.

> Utiliza el selector existente que apunta a todos los elementos `p` anidados en elementos con la clase denominada `item` y establece su margen superior e inferior en `5px`.

- **Codigo**

  ```css
  h1, h2 {
    font-family: Impact, serif;
  }
  
  .item p {
    display: inline-block;
    /* code */
    margin-top: 5px;
    margin-bottom: 5px;
    /* code */
  }
  
  .flavor, .dessert {
    text-align: left;
    width: 75%;
  }
  
  .price {
    text-align: right;
    width: 25%
  }
  ```

---

## Paso 71

> Utilizando el mismo selector de estilo del paso anterior, aumenta el tamaño de la fuente de los artículos y los precios utilizando un valor de `18px`.

- **Codigo**

  ```css
  .item p {
    display: inline-block;
    margin-top: 5px;
    margin-bottom: 5px;
    /* code */
    font-size: 18px;
    /* code */
  }
  ```

---

## Paso 72

Cambiar el `margin-bottom` a `5px` queda muy bien. Sin embargo, ahora el espacio entre el elemento del menú `Cinnamon Roll` y el segundo elemento `hr` no coincide con el espacio entre el elemento `hr` superior y el encabezado `Coffee`.

> Añade un poco más de espacio creando una clase llamada `bottom-line` con un valor de `25px` para la propiedad `margin-top`.

- **Codigo**

  ```css
  /* code */
  .bottom-line {
    margin-top: 25px;
  }
  /* code */
  ```

---

## Paso 73

> Ahora agrega la clase `bottom-line` al segundo elemento `hr` para que se aplique el estilo.

- **Codigo**

  ```html
    <!-- code -->
    <hr class="bottom-line">
    <!-- code -->
  ```

---

## Paso 74

> A continuación, vas a diseñar el elemento `footer`. Para mantener el CSS organizado, añade un comentario al final de `styles.css` con el texto `FOOTER`.

- **Codigo**

  ```css
    /* code */
    /* FOOTER */
    /* code */
  ```

---

## Paso 75

> Pasando al elemento del `footer`, haz que todo el texto tenga un valor de `14px` para el tamaño de fuente.

- **Codigo**

  ```css
  /* FOOTER */

  /* code */
  footer{
    font-size: 14px;
  }
  /* code */
  ```

---

## Paso 76

> El estilo predeterminado del elemento de `address` es tener el `font-style` establecido en `italic`. Agregue un selector para el elemento de `address` y establezca su `font-style` en `normal`.

- **Codigo**

  ```css
  /* code */
  address {
    font-style: normal;
  }
  /* code */
  ```

---

## Paso 77

El color predeterminado de un enlace en el que aún no se ha hecho clic suele ser azul. El color predeterminado de un enlace que ya se ha visitado desde una página suele ser morado.

> Para que los enlaces del `footer` tengan el mismo color independientemente de si se han visitado o no, utilice un selector de tipo para el elemento de anclaje (`a`) y utilice el valor `black` para la propiedad de `color`.

- **Codigo**

  ```css
  /* code */
  a {
    color: black;
  }
  /* code */
  ```

---

## Paso 78

Puedes cambiar las propiedades de un enlace cuando este ha sido visitado utilizando un pseudo-selector que se ve así: `a:visited { nombrePropiedad: valorPropiedad; }`.

> Cambia el color del enlace `Visit our website` a `grey` cuando un usuario haya visitado el enlace.

- **Codigo**

  ```css
  /* code */
  a:visited {
    color: grey;
  }
  /* code */
  ```

---

## Paso 79

Puedes cambiar las propiedades de un enlace cuando el cursor se sitúa sobre él utilizando un pseudo-selector que tiene el siguiente aspecto: `a:hover { nombrePropiedad: valorPropiedad; }`.

> Cambia el color del enlace `Visit our website` para que sea `brown` cuando el usuario pase el cursor por encima.

- **Codigo**

  ```css
  /* code */
  a:hover {
    color: brown;
  }
  /* code */
  ```

---

## Paso 80

Para cambiar las propiedades de un enlace cuando se hace clic en él, utilice un pseudo-selector similar a `a:active { nombrePropiedad: valorPropiedad; }`.

> Cambie el color del enlace `Visit our website` a `white` cuando se haga clic en él.

- **Codigo**

  ```css
  /* code */
  a:active {
    color: white;
  }
  /* code */
  ```

---

## Paso 81

> Para mantener la combinación de colores `black` y `brown` existente, cambia el color del enlace visitado a `black` y utiliza el `brown` para el enlace en el que se ha hecho clic.

- **Codigo**

  ```css
  /* code */
  a:visited {
    color: black;
  }
  
  a:hover {
    color: brown;
  }
  
  a:active {
    color: brown;
  }
  /* code */
  ```

---

## Paso 82

El texto del menú `CAMPER CAFE` tiene un espacio diferente en la parte superior al espacio de la dirección en la parte inferior del menú. Esto se debe a que el navegador tiene un margen superior predeterminado para el elemento `h1`.

> Cambie el margen superior del elemento `h1` a `0` para eliminar todo el margen superior.

- **Codigo**

  ```css
  h1 {
    font-size: 40px;
    /* code */
    margin-top: 0;
    /* code */
  }
  ```

---

## Paso 83

> Para eliminar parte del espacio vertical entre el elemento `h1` y el texto `Est. 2020`, cambia el margin-bottom del `h1` a `15px`.

- **Codigo**

  ```css
  h1 {
    font-size: 40px;
    margin-top: 0;
    /* code */
    margin-bottom: 15px;
    /* code */
  }
  ```

---

## Paso 84

Ahora el espaciado superior se ve bien. El espacio debajo de la dirección en la parte inferior del menú es un poco más grande que el espacio en la parte superior del menú y el elemento `h1`.

> Para reducir el espacio de margen predeterminado debajo del elemento `p` de la dirección, crea un selector de clase llamado `address` y utiliza el valor `5px` para la propiedad `margin-bottom`.

- **Codigo**

  ```css
  /* code */
  .address {
    margin-bottom: 5px;
  }
  /* code */
  ```

---

## Paso 85

> Ahora aplica la clase de `address` al elemento `p` que contiene la dirección postal `123 Free Code Camp Drive`.

- **Codigo**

  ```html
  <!-- code -->
  <footer>
    <address>
      <p>
        <a href="https://www.freecodecamp.org" target="_blank">Visit our website</a>
      </p>
      <p class="address">123 Free Code Camp Drive</p>
    </address>
  </footer>
  <!-- code -->
  ```

---

## Paso 86

El menú tiene buen aspecto, pero aparte de la imagen de fondo con granos de café, se compone principalmente de texto.

> Debajo del encabezado `Coffee`, añade una imagen utilizando la URL `https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg`. Asigna a la imagen un valor `alt` de `coffee icon`.

- **Codigo**

  ```html
  <h2>Coffee</h2>
  <!-- code -->
  <img src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg" alt="coffee icon">
  <!-- code -->
  ```

---

## Paso 87

La imagen que ha añadido no está centrada horizontalmente como el encabezado `Coffee` que hay encima. Los elementos `img` son «similares» a los elementos en línea.

> Para que la imagen se comporte como los elementos de nivel de bloque, como los encabezados, cree un selector de tipo `img`. Establezca la propiedad `display` en `block` y utilice las propiedades `margin-left` y `margin-right` para centrarla horizontalmente.

- **Codigo**

  ```css
  /* code */
  img{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  /* code */
  ```

---

## Paso 88

> Agrega una última imagen bajo el encabezado `Desserts` utilizando la URL `https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg`. Dale a la imagen un valor `alt` de `pie icon`.

- **Codigo**

  ```html
  <h2>Coffee</h2>
  <!-- code -->
  <img src="https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg" alt="pie icon">
  <!-- code -->
  ```

---

## Paso 89

Sería bueno que el espacio vertical entre los elementos `h2` y sus iconos asociados fuera más pequeño. Los elementos `h2` tienen un margen superior e inferior predeterminado, por lo que podrías cambiar el margen inferior de los elementos `h2` a `0` u otro número.

> Hay una forma más fácil: simplemente agrega un `margin-top` negativo a los elementos `img` para levantarlos de sus posiciones actuales. Los valores negativos se crean utilizando un signo `-` delante del valor. Para completar este taller, utiliza un `margin-top` negativo de `25px` en el selector de tipo `img`.

- **Codigo**

  ```css
  img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    /* code */
    margin-top: -25px;
    /* code */
  }
  ```

**¡Felicidades! Has completado el taller Menú de cafetería!**

---
