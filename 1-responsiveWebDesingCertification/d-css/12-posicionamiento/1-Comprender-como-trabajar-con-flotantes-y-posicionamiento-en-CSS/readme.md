# Comprender cómo trabajar con flotantes y posicionamiento en CSS

## **Navegación**

- [Comprender cómo trabajar con flotantes y posicionamiento en CSS](#comprender-cómo-trabajar-con-flotantes-y-posicionamiento-en-css)
  - [**Navegación**](#navegación)
  - [Tema 1: ¿Cuáles son los casos de uso más comunes de los flotantes y cómo funcionan?](#tema-1-cuáles-son-los-casos-de-uso-más-comunes-de-los-flotantes-y-cómo-funcionan)
    - [💡 ¿Cómo funciona realmente el `float`?](#-cómo-funciona-realmente-el-float)
    - [💡 Visualizando el problema del colapso](#-visualizando-el-problema-del-colapso)
  - [Cuestionario 1](#cuestionario-1)
  - [Tema 2: ¿Qué es el posicionamiento relativo y en qué se diferencia del posicionamiento estático predeterminado?](#tema-2-qué-es-el-posicionamiento-relativo-y-en-qué-se-diferencia-del-posicionamiento-estático-predeterminado)
    - [💡 Comprendiendo el Flujo Normal](#-comprendiendo-el-flujo-normal)
    - [💡 Diferencias clave con Static](#-diferencias-clave-con-static)
  - [Cuestionario 2](#cuestionario-2)
  - [Tema 3: ¿Qué es el posicionamiento absoluto y cómo funciona?](#tema-3-qué-es-el-posicionamiento-absoluto-y-cómo-funciona)
    - [💡 El Secreto del "Padre Posicionado"](#-el-secreto-del-padre-posicionado)
  - [## Cuestionario 3](#-cuestionario-3)
  - [Tema 4: ¿Qué es el posicionamiento fijo(`Fixed`) y adherente(`Sticky`), y en qué se diferencia del posicionamiento absoluto?](#tema-4-qué-es-el-posicionamiento-fijofixed-y-adherentesticky-y-en-qué-se-diferencia-del-posicionamiento-absoluto)
  - [Cuestionario 4](#cuestionario-4)
  - [Tema 5: ¿Qué es la propiedad Z-Index y cómo funciona para controlar el apilamiento de elementos posicionados?](#tema-5-qué-es-la-propiedad-z-index-y-cómo-funciona-para-controlar-el-apilamiento-de-elementos-posicionados)
  - [Cuestionario 5](#cuestionario-5)

---

En esta sección, aprenderás sobre dos técnicas fundamentales para controlar la disposición de los elementos en una página web: los flotantes y el posicionamiento en CSS. Estas técnicas te permitirán crear diseños más complejos y flexibles, y entender cómo los elementos interactúan entre sí en el flujo del documento.

---

## Tema 1: ¿Cuáles son los casos de uso más comunes de los flotantes y cómo funcionan?

Los flotantes en CSS son una técnica diseñada originalmente para permitir que el texto se ajuste alrededor de un elemento, como una imagen. Sin embargo, con el tiempo, los desarrolladores encontraron nuevas formas de utilizar los flotantes, aplicándolos al diseño de maquetación de forma creativa. Aunque ahora se utilizan más comúnmente métodos de maquetación modernos como Flexbox y Grid, sigue siendo importante comprender los flotantes, especialmente cuando se trabaja con código antiguo o se necesitan efectos de maquetación específicos.

Cuando un elemento se flota, se saca del flujo normal del documento y se desplaza a la izquierda o a la derecha de su contenedor. El contenido que le sigue se ajusta alrededor del elemento flotante, llenando el espacio restante. Un uso clásico es ajustar el texto alrededor de las imágenes, donde una imagen se flota a un lado y el texto se ajusta a su alrededor. Esta técnica sigue siendo muy utilizada, especialmente en artículos y blogs donde es necesario colocar imágenes junto al texto. Aquí está el ejemplo de código:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="container">
    <img src="https://placehold.co/150x150" alt="Placeholder Image">
  </div>
  ```
  
  ```css
  .container {
    border: 1px solid black;
    padding: 10px;
  }
  
  img {
    float: left;
    margin-right: 20px;
  }
  ```

  ---
  
  ### 💡 ¿Cómo funciona realmente el `float`?
  
  1. **Salida Parcial del Flujo:** El elemento flotante se desplaza a un lado, pero a diferencia de `position: absolute`, los elementos de texto (nodos inline) siguen siendo conscientes de su presencia y se apartan para dejarle espacio.
  2. **El Problema del Colapso:** Un error común es que el contenedor padre pierda su altura si todos sus hijos son flotantes. Esto sucede porque el padre "ignora" a los hijos que están fuera del flujo normal.
  3. **La Solución (Clearfix):** Para evitar que el contenedor colapse, usamos propiedades como `overflow: auto` (que usé en la previsualización) o la propiedad `clear: both` en un elemento posterior.
  
  >[!TIP]
  Antes de que existiera Flexbox, usábamos `float: left` en todos los `div` de una página para crear columnas. Era un dolor de cabeza, pero nos enseñó mucho sobre el **Box Model**.
  
  ---

En el ejemplo anterior, el contenedor no envuelve la imagen flotante. La imagen está fuera del flujo normal del documento y el contenedor se ha reducido a una altura cero porque no "see" los elementos secundarios flotantes.

Los flotantes también eran populares para crear diseños de varias columnas antes de que Flexbox y Grid se generalizaran. Al flotar elementos uno al lado del otro, los desarrolladores podían crear columnas alineadas horizontalmente. Sin embargo, al utilizar flotantes, es importante manejar el problema del colapso de los elementos padres cuando sus elementos hijos flotan. La solución de la técnica clearfix se aplica al elemento clase de la `container` para solucionar este problema.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="container">
    <img src="https://placehold.co/150x150" alt="Placeholder Image">
    <p> This is an example of text flowing around a floated image.</p>
  </div>
  ```
  
  ```css
  .container {
    border: 1px solid black;
  }
  
  /* Clearfix CSS */
  .container::after {
    content: "";  
    display: block;
    clear: both;
  }
  
  img {
    float: left;
    margin-right: 20px;
  }
  ```

  ---

  ### 💡 Visualizando el problema del colapso
  
  1. **Sin Clearfix:** El navegador ve que el hijo (la imagen) es flotante y no le asigna altura al padre. El borde del contenedor se vería como una línea delgada por encima de la imagen.
  2. **Con Clearfix:** El pseudoelemento `::after` se coloca después de la imagen pero **dentro** del contenedor. Al aplicarle `clear: both`, le dice al navegador: "No permitas elementos flotantes a mis lados", lo que obliga al contenedor a crecer hasta alcanzar la posición de este elemento invisible.
  
  >[!TIP]
  Actualmente, puedes lograr el mismo efecto de forma más moderna añadiendo `display: flow-root;` al contenedor padre. Hace exactamente lo mismo que el Clearfix pero con una sola línea de código.

  ---

- `::after` es un pseudo-elemento que añade un bloque invisible después del contenido del contenedor.

- `content: ""` garantiza que el pseudo-elemento esté presente, pero no muestra ningún contenido.

- `display: block` convierte el pseudo-elemento en un elemento de nivel de bloque.

- `clear: both` garantiza que el pseudo-elemento borre ambos lados de cualquier elemento flotante que se encuentre encima de él.

En el ejemplo anterior, hemos añadido un nuevo elemento de párrafo para que el colapso sea más notable. Dado que el párrafo permanece en el flujo normal del documento, el contenedor se expande lo suficiente como para envolverlo. A continuación, aplicamos la técnica clearfix para corregir el colapso y hacer que el borde del contenedor se muestre correctamente. Puede intentar eliminar la regla clearfix para ver cómo el contenedor vuelve a colapsarse.

La técnica clearfix garantiza que el elemento padre envuelva correctamente a sus hijos flotantes. Clearfix obliga al contenedor padre a "see" los elementos hijos flotantes añadiendo una propiedad clear después del contenido flotante.

Aunque los flotantes ya no son el método más utilizado para diseños complejos debido a técnicas más modernas como Flexbox y Grid, siguen desempeñando un papel esencial en determinados escenarios. Tanto si envuelve texto alrededor de imágenes como si trabaja en proyectos heredados, comprender cómo funcionan los flotantes y cómo eliminarlos correctamente es clave para mantener diseños bien estructurados y adaptables.

---

## Cuestionario 1

1. **¿Cuál es un caso de uso común para utilizar flotantes en CSS?**

    - [ ] a) Centrar un elemento verticalmente.
    - [x] b) Ajustar el texto alrededor de las imágenes. //correcto
    - [ ] c) Crear un encabezado fijo.
    - [ ] d) Aplicar un color de fondo.

2. **¿Qué propiedad CSS se utiliza a menudo para borrar los flotantes y mantener el flujo del diseño?**

    - [ ] a) `float`
    - [ ] b) `margin`
    - [x] c) `clear` //correcto
    - [ ] d) `padding`

3. **¿Cómo afecta la aplicación de `float: left;` a un elemento su posición en el diseño?**

    - [ ] a) El elemento se centra en la página.
    - [ ] b) El elemento se desplaza hacia el lado derecho de su contenedor.
    - [x] c) El elemento se elimina del flujo normal del documento y se desplaza hacia el lado izquierdo de su contenedor. //correcto
    - [ ] d) El elemento permanece en el flujo normal del documento y se alinea con la parte superior de su contenedor.

[☝️](#comprender-cómo-trabajar-con-flotantes-y-posicionamiento-en-css)

---

## Tema 2: ¿Qué es el posicionamiento relativo y en qué se diferencia del posicionamiento estático predeterminado?

En CSS, el posicionamiento nos permite controlar cómo se distribuyen los elementos en una página. Dos tipos comunes de posicionamiento son el posicionamiento estático y el posicionamiento relativo. De forma predeterminada, los elementos se posicionan de forma estática. Esto significa que siguen el flujo normal del documento, uno tras otro, de arriba abajo y de izquierda a derecha.

El posicionamiento estático es el predeterminado para todos los elementos y no necesita ninguna declaración especial en CSS. No notarás ninguna diferencia al utilizar el posicionamiento estático, ya que simplemente mantiene los elementos en el lugar donde aparecen naturalmente en el documento. A continuación se muestra un ejemplo de un párrafo que utiliza el posicionamiento estático predeterminado:

- **Codigo Ejemplo**
  
  ```html
  <p>This paragraph is statically positioned.</p>
  ```

  ---

  ### 💡 Comprendiendo el Flujo Normal
  
  1. **Orden de llegada:** El primer elemento en tu HTML es el primero que aparece arriba en la pantalla.
  2. **Espacio reservado:** Cada elemento estático ocupa su propio espacio y empuja al siguiente hacia abajo o hacia el lado.
  3. **Sin coordenadas:** Al ser `static`, el elemento no puede ser desplazado con `top` o `left`. Si quieres moverlo, tendrías que usar `margin` o cambiar su tipo de posicionamiento.
  
  >[!TIP]
   El 90% de los elementos de cualquier página web son estáticos. Solo usamos los otros tipos de posicionamiento cuando necesitamos que algo se "salga" de la fila o se mueva de forma especial.

  ---

Cuando se muestra en el navegador, este párrafo aparecerá en su posición natural, siguiendo el flujo normal del documento. No se aplica ningún estilo especial para moverlo, y permanece donde aparecería naturalmente en el diseño.

El posicionamiento relativo, por otro lado, permite que un elemento se desplace de su posición normal sin interrumpir el flujo del documento. Piensa en ello como mover el elemento de su posición estática predeterminada dándole nuevas coordenadas. Así es como se puede aplicar el posicionamiento relativo:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <p class="relative">This paragraph is positioned relatively.</p>
  ```
  
  ```css
  body {
    border: solid 1px black;
  }
  
  .relative {
    position: relative;
    top: 30px;
    left: 30px;
  }
  ```

  ---
  
  ### 💡 Diferencias clave con Static
  
  1. **Punto de referencia:** Se mueve respecto a **sí mismo** (donde debería estar normalmente).
  2. **Espacio Reservado:** A diferencia de otros posicionamientos (como el absoluto), el navegador sigue reservando el espacio original del elemento. No causa que otros elementos se muevan o se reorganicen.
  3. **Activa Coordenadas:** Solo cuando cambias a `relative`, `absolute` o `fixed`, las propiedades `top`, `bottom`, `left` y `right` empiezan a funcionar.
  
  >[!TIP]
   El uso más común del posicionamiento relativo no es solo para mover elementos un poco, sino para servir de **ancla** o contenedor padre para elementos con `position: absolute`.
  
  ---

En este ejemplo, el párrafo aparecerá `30px` más abajo y `30px` a la derecha de su posición original. Sin embargo, el espacio que habría ocupado en el flujo normal se mantiene. El posicionamiento relativo es muy útil cuando se desea mover un elemento ligeramente sin afectar al resto del diseño.

---

## Cuestionario 2

1. **¿Cuál de las siguientes opciones es la posición predeterminada para todos los elementos?**

    - [ ] a) `absolute`
    - [ ] b) `relative`
    - [ ] c) `fixed`
    - [x] d) `static` //correcto

2. **¿Qué le hace el posicionamiento relativo a un elemento?**

    - [ ] a) Lo mueve del flujo normal del documento.
    - [x] b) Lo mueve en relación con su posición normal. //correcto
    - [ ] c) Lo fija a la ventana gráfica.
    - [ ] d) Lo apila sobre otros elementos.

3. **¿En qué se diferencia el posicionamiento relativo del posicionamiento estático?**

    - [ ] a) El posicionamiento relativo elimina el elemento del flujo del documento.
    - [ ] b) El posicionamiento estático permite desplazar los elementos de su posición predeterminada.
    - [x] c) El posicionamiento relativo permite desplazar un elemento sin alterar el flujo del documento. //correcto
    - [ ] d) El posicionamiento estático fija el elemento en su lugar, como una imagen de fondo.

[☝️](#comprender-cómo-trabajar-con-flotantes-y-posicionamiento-en-css)

---

## Tema 3: ¿Qué es el posicionamiento absoluto y cómo funciona?

El posicionamiento absoluto te permite sacar un elemento del flujo normal del documento, haciendo que se comporte de forma independiente de otros elementos. Cuando un elemento se posiciona de forma absoluta, se coloca en su propia capa, completamente separada de todo lo demás en el diseño. Esto lo hace útil para crear elementos flotantes de la interfaz de usuario, como modales, información sobre herramientas o menús desplegables, que pueden superponerse a otros elementos de la página.

De forma predeterminada, los elementos posicionados de forma absoluta se colocan en relación con el antecesor posicionado más cercano. Si no se encuentra ningún antecesor posicionado, el elemento se posicionará en relación con el bloque contenedor inicial, que suele ser la ventana gráfica del navegador. Puede mover el elemento posicionado de forma absoluta utilizando las propiedades `top`, `bottom`, `left` y `right` para especificar la distancia a la que debe estar de los bordes de su elemento contenedor.

Por ejemplo, al establecer `top: 30px` y `left: 30px`, el elemento se desplazará `30px` desde los bordes superior e izquierdo del bloque contenedor. A continuación se muestra un ejemplo de cómo aplicar el posicionamiento absoluto a un elemento en CSS:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="positioned">Absolutely Positioned</div>
  ```
  
  ```css
  body {
    background-color: #eeeeee;
  }
  
  .positioned {
    position: absolute;
    top: 30px;
    left: 30px;
    background-color: coral;
  }
  ```

  ---
  
  ### 💡 El Secreto del "Padre Posicionado"
  
  1. **Busca hacia arriba:** Mira si su padre, abuelo o cualquier ancestro tiene `position: relative`, `absolute` o `fixed`.
  2. **Si lo encuentra:** Se posiciona usando los bordes de ese ancestro como el "0,0" de sus coordenadas.
  3. **Si NO lo encuentra:** Sigue subiendo hasta llegar a la etiqueta `<html>` (la ventana del navegador o viewport).
  
  >[!TIP]
   Siempre que quieras poner un icono o un botón exactamente en una esquina de una tarjeta (Card), dale `position: relative` a la tarjeta y `position: absolute` al icono. ¡Nunca falla!

  ---

Cuando se aplica este código, el elemento se elimina del flujo normal del documento y se coloca a `30px` de distancia de la parte superior e izquierda del bloque que lo contiene.

El posicionamiento absoluto puede ser especialmente útil para crear elementos que deben flotar sobre el resto del contenido, como superposiciones o ventanas modales. Sin embargo, dado que el elemento se elimina del flujo del documento, también puede crear espacios o provocar que otros elementos se colapsen si no se maneja correctamente.

---

## ## Cuestionario 3

1. **¿Qué sucede cuando un elemento se posiciona de manera absoluta en CSS?**

    - [ ] a) El elemento se coloca en su flujo normal del documento.
    - [x] b) El elemento se superpone a otros elementos y se coloca en su propia capa. //correcto
    - [ ] c) El elemento se oculta.
    - [ ] d) El elemento se mueve a la parte superior de la página.

2. **¿Cómo se desplaza un elemento con posición absoluta 30px alejándolo de los bordes superior e izquierdo del bloque que lo contiene?**

    - [x] a) Establezca `top: 30px` y `left: 30px`. //correcto
    - [ ] b) Establezca `margin-top: 30px` y `margin-left: 30px`.
    - [ ] c) Establezca `position: relative`.
    - [ ] d) Establezca `padding: 30px`.

3. **Si no se encuentra ningún antepasado posicionado, ¿dónde se coloca un elemento posicionado de forma absoluta?**

    - [ ] a) En relación con el cuerpo.
    - [ ] b) En relación con el elemento fijo más cercano.
    - [x] c) En relación con el bloque contenedor inicial (normalmente la ventana gráfica del navegador). //correcto
    - [ ] d) Se queda en el mismo lugar.

[☝️](#comprender-cómo-trabajar-con-flotantes-y-posicionamiento-en-css)

---

## Tema 4: ¿Qué es el posicionamiento fijo(`Fixed`) y adherente(`Sticky`), y en qué se diferencia del posicionamiento absoluto?

El posicionamiento fijo y adherente son dos estrategias importantes de posicionamiento CSS, cada una de las cuales ofrece comportamientos distintos en comparación con el posicionamiento absoluto. Cuando un elemento se posiciona con `position: fixed`, se elimina del flujo normal del documento y se coloca en relación con la ventana gráfica, lo que significa que permanece en la misma posición incluso cuando el usuario se desplaza. Esto se utiliza a menudo para elementos como encabezados o barras de navegación que deben permanecer visibles en todo momento. Por ejemplo, si desea que un encabezado permanezca fijo en la parte superior de la página, puede utilizar el siguiente código:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <h1>Fixed Header</h1>
  
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
  <p>Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
  <p>Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
  <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
  <p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.</p>
  <p>Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.</p>
  <p>Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus.</p>
  <p>Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci.</p>
  <p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.</p>
  <p>Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit.</p>
  ```
  
  ```css
  body {
    margin: 0;
    padding-top: 60px;
    font-family: Arial, sans-serif;
    line-height: 1.6;
  }
  
  h1 {
    position: fixed;
    top: 0;
    width: 500px;
    background: white;
    padding: 10px;
    border-bottom: 2px solid #ccc;
  }
  
  p {
    max-width: 600px;
    margin: 20px auto;
  }
  ```

En este ejemplo, el elemento `h1` se mantendrá en la parte superior de la ventana gráfica e, incluso cuando el usuario se desplace, permanecerá en su lugar. Esto resulta especialmente útil para crear elementos de interfaz de usuario persistentes, como encabezados fijos o navegación siempre visible.

La `position: sticky` se comporta como un híbrido entre el posicionamiento relativo y el fijo. Inicialmente, el elemento se comporta como si estuviera posicionado de forma relativa, permaneciendo dentro del flujo del documento. Sin embargo, una vez que el usuario se desplaza más allá de un punto determinado, el elemento se "pega" a la ventana gráfica (normalmente en la parte superior) y se comporta como si estuviera fijo. Esto es ideal para crear elementos como barras de navegación fijas, que solo se fijan cuando el usuario se desplaza hasta una posición determinada. A continuación se muestra cómo se puede aplicar el posicionamiento fijo:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <h1>Sticky Header</h1>
  
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
  <p>Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
  <p>Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
  <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
  <p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.</p>
  <p>Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.</p>
  <p>Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus.</p>
  <p>Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci.</p>
  <p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.</p>
  <p>Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit.</p>
  ```
  
  ```css
  h1 {
    position: sticky;
    top: 30px;
    left: 30px;
  }
  ```

En este ejemplo, el elemento `h1` se comportará normalmente hasta que el usuario se desplace `30px` desde la parte superior, momento en el que se "stick" a la parte superior de la ventana gráfica.

Estas son algunas diferencias clave entre el posicionamiento absoluto, fijo y pegajoso:

- El posicionamiento absoluto elimina un elemento del flujo del documento y lo posiciona en relación con el antecesor posicionado más cercano, o con el bloque contenedor inicial si no existe ninguno. El elemento permanece en esa posición independientemente del desplazamiento.
- El posicionamiento fijo también elimina el elemento del flujo del documento, pero lo fija en relación con la ventana gráfica, lo que significa que permanecerá visible en el mismo lugar incluso cuando se desplace la página.
- El posicionamiento fijo mantiene el elemento en el flujo normal inicialmente, pero permite que se mantenga en su lugar después de desplazarse más allá de un umbral definido.

Estas estrategias le permiten crear diseños que incluyen elementos flotantes, encabezados fijos y componentes de interfaz de usuario más dinámicos, lo que mejora la experiencia del usuario al hacer que la información importante sea siempre accesible.

---

## Cuestionario 4

1. **¿Cuál es la principal diferencia entre el posicionamiento `fixed` y el `sticky`?**

    - [x] a) El `fixed` permanece en su lugar en relación con la ventana gráfica, mientras que el `sticky` se mueve en función de la posición de desplazamiento. //correcto
    - [ ] b) El `sticky` permanece en su lugar en relación con la ventana gráfica, mientras que el `fixed` se mueve en función de la posición de desplazamiento.
    - [ ] c) Tanto el `fixed` como el `sticky` se comportan de la misma manera.
    - [ ] d) Ninguno de los dos funciona para los encabezados ni las barras de navegación.

1. **¿Qué propiedad se debe definir para que funcione el posicionamiento `sticky`?**

    - [ ] a) `position: absolute`
    - [ ] b) `position: fixed`
    - [x] c) `position: sticky` //correcto
    - [ ] d) `z-index`

1. **¿En qué se diferencia el posicionamiento `fixed` del posicionamiento `absolute`?**

    - [x] a) El posicionamiento `fixed` es relativo a la ventana gráfica, mientras que el `absolute` es relativo al elemento posicionado más cercano. //correcto
    - [ ] b) El posicionamiento `fixed` no permite el desplazamiento.
    - [ ] c) El posicionamiento `absolute` mantiene el elemento dentro del flujo normal del documento.
    - [ ] d) El posicionamiento `fixed` oculta el elemento cuando se desplaza.

[☝️](#comprender-cómo-trabajar-con-flotantes-y-posicionamiento-en-css)

---

## Tema 5: ¿Qué es la propiedad Z-Index y cómo funciona para controlar el apilamiento de elementos posicionados?

La propiedad `z-index` en CSS se utiliza para controlar el orden de apilamiento vertical de los elementos posicionados que se superponen en la página. Cuando varios elementos se apilan unos encima de otros, el valor `z-index` determina qué elemento aparece en la parte superior. Cuanto mayor sea el valor de `z-index`, más cerca estará el elemento del espectador, mientras que los valores más bajos colocan el elemento más atrás en la pila.

Sin embargo, el `z-index` solo funciona en elementos que están posicionados, lo que significa que el elemento debe tener un valor de posición distinto como `static`, `relative`, `absolute`, o `fixed`. El valor predeterminado de `z-index` es `auto`, que coloca el elemento en el orden de apilamiento predeterminado. Veamos un ejemplo con tres cuadros:

- **Codigo Ejemplo**
  
  ```html
  <div class="container">
    <div class="box1">Box 1</div>
    <div class="box2">Box 2</div>
    <div class="box3">Box 3</div>
  </div>
  ```

Ahora, podemos aplicar algunos estilos para posicionar los recuadros de manera que se superpongan entre sí, así:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="container">
    <div class="box1">Box 1</div>
    <div class="box2">Box 2</div>
    <div class="box3">Box 3</div>
  </div>
  ```

  ```css
  .container {
    position: relative;
    width: 300px;
    height: 300px;
    border: 1px solid black;
  }
  
  .box1 {
    position: absolute;
    z-index: 1;
    background: lightcoral;
    top: 20px;
    left: 20px;
    width: 100px;
    height: 100px;
  }
  
  .box2 {
    position: absolute;
    z-index: 3;
    background: gold;
    top: 40px;
    left: 40px;
    width: 100px;
    height: 100px;
  }
  
  .box3 {
    position: absolute;
    z-index: 2;
    background: lightgreen;
    top: 60px;
    left: 60px;
    width: 100px;
    height: 100px;
  }
  ```

Para el contenedor, el posicionamiento se establecerá como `relative` y todos los cuadros anidados en su interior se establecerán como posicionamiento `absolute`. Cada cuadro tiene un valor diferente para el `z-index`, lo que da como resultado que los cuadros se superpongan unos sobre otros.

Puedes pensar en el `z-index` como una forma de crear capas en una página web, y los elementos con valores de `z-index` más altos se colocarán encima de los que tienen valores más bajos. Esto es especialmente útil para controlar cómo se comportan los elementos superpuestos en diseños complejos, como modales, ventanas emergentes o información sobre herramientas.

---

## Cuestionario 5

1. **¿Qué controla la propiedad `z-index`en CSS?**

    - [ ] a) El color de un elemento.
    - [x] b) El orden de apilamiento vertical de los elementos posicionados. //correcto
    - [ ] c) El tamaño de un elemento.
    - [ ] d) La alineación horizontal del texto.

2. **Para que la propiedad `z-index` funcione, ¿qué debe cumplirse con respecto al elemento?**

    - [ ] a) Debe tener un ancho `fixed`.
    - [x] b) Debe tener un valor de `position` distinto de `static`. //correcto
    - [ ] c) Debe tener un valor de `display` de `block`.
    - [ ] d) Debe tener un color de fondo establecido.

3. **¿Qué valor de `z-index` coloca un elemento encima de todos los demás?**

    - [ ] a) `z-index: 0;`
    - [x] b) `z-index: 5;` //correcto
    - [ ] c) `z-index: auto;`
    - [ ] d) `z-index: -1;`

[☝️](#comprender-cómo-trabajar-con-flotantes-y-posicionamiento-en-css)

---
