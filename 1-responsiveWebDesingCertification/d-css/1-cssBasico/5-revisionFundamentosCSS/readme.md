# Revisión de los fundamentos de CSS

CSS es el lenguaje que define el diseño visual de una web. Se basa en reglas (selectores y propiedades) para aplicar estilos y en el Modelo de Caja, que gestiona el espacio de cada elemento a través de márgenes, bordes y rellenos. Se denomina "en cascada" porque las reglas se aplican siguiendo un orden de prioridad y jerarquía.

---

## Conceptos básicos de CSS

- **¿Qué es CSS?**: Las hojas de estilo en cascada (`CSS`) son un lenguaje de marcado que se utiliza para aplicar estilos a los elementos `HTML`. `CSS` se utiliza para colores, imágenes de fondo, diseños y mucho más.

- **Anatomía básica de una regla CSS**: una regla `CSS` se compone de dos partes principales: un selector y un bloque de declaración. Un selector es un patrón utilizado en `CSS` para identificar y seleccionar elementos `HTML` específicos para aplicarles estilos. Un bloque de declaración aplica un conjunto de estilos a uno o varios selectores determinados.

*Esta es la sintaxis general de una regla CSS:*

- **Codigo**
  
  ```css
  selector {
      property: value;
  }
  ```

- **Elemento `meta name="viewport"`**: este elemento `meta` proporciona al navegador instrucciones sobre cómo controlar las dimensiones y el escalado de la página en diferentes dispositivos, especialmente en teléfonos móviles y tabletas.

- **Estilos predeterminados del navegador**: cada elemento `HTML` tendrá aplicados los estilos predeterminados del navegador. Esto suele incluir elementos como los márgenes y rellenos predeterminados.

---

## CSS en línea, interno y externo

- **CSS en línea**: estos estilos se escriben directamente dentro de un elemento `HTML` utilizando el atributo `style`. La mayoría de las veces no utilizará `CSS` en línea debido a la separación de conceptos.

*A continuación se muestra un ejemplo de CSS en línea:*

- **Codigo**
  
  ```html
  <p style="color: red;">This is a red paragraph.</p>
  ```

- **CSS interno**: estos estilos se escriben dentro de las etiquetas `<style>` en la sección `head` de un documento `HTML`. Esto puede ser útil para crear ejemplos de código cortos, pero normalmente no será necesario utilizar CSS interno.

- **CSS externo**: estos estilos se escriben en un archivo CSS independiente y se vinculan al documento HTML mediante el elemento `link` en la sección `head`. En la mayoría de los proyectos, se utilizará un archivo `CSS` externo en lugar de `CSS` interno o en línea.

---

## Trabajar con las propiedades `width` y `height`

- **Propiedad `width`**: esta propiedad especifica el ancho de un elemento. Si no se especifica un ancho, el valor predeterminado se establece en `auto`. Esto permite que el navegador determine el ancho del elemento en función de su contenido, su elemento padre y el tipo de visualización.

- **Propiedad `min-width`**: esta propiedad especifica el ancho mínimo de un elemento.

- **Propiedad `max-width`**: esta propiedad especifica el ancho máximo de un elemento.

- **Propiedad `height`**: esta propiedad especifica la altura de un elemento. Del mismo modo, la altura es automática de forma predeterminada, lo que significa que se ajustará al contenido que haya dentro.

- **Propiedad `min-height`**: esta propiedad especifica la altura mínima de un elemento.

- **Propiedad `max-height`**: esta propiedad especifica la altura máxima de un elemento.

---

## Diferentes tipos de combinadores CSS

- **Combinador descendiente**: este combinador se utiliza para seleccionar elementos que son descendientes de un elemento padre específico. El siguiente ejemplo seleccionará todos los elementos `li` dentro de los elementos `ul`.

  **Codigo**
  
  ```html
  <ul>
    <li>Example item one</li>
    <li>Example item two</li>
    <li>Example item three</li>
  </ul>
  ```

  ```css
  ul li {
    background-color: yellow;
  }
  ```

- **Combinador de hijos (`>`)**: este combinador se utiliza para seleccionar elementos que son hijos directos de un elemento padre específico. El siguiente ejemplo seleccionará todos los elementos `p` que sean hijos directos de la clase `container`.

  **Codigo**
  
  ```html
  <div class="container">
    <p>This will get styled.</p>
  
    <div>
      <p>This will not get styled.</p>
    </div>
  </div>
  ```

  ```css
  .container > p {
    background-color: black;
    color: white;
  }
  ```

- **Combinador siguiente hermano (`+`)**: este combinador selecciona un elemento que sigue inmediatamente a un elemento hermano especificado. El siguiente ejemplo seleccionará el elemento párrafo que sigue inmediatamente al elemento `h2`.

- **Codigo**
  
  ```html
  <h2>I am a sub heading</h2>

  <p>This paragraph element will get a red background.</p>
  ```

  ```css
  h2 + p {
    background-color: red;
  }
  ```

- **Combinador de hermanos posteriores (`~`)**: este combinador selecciona todos los hermanos de un elemento específico que vienen después de él. El siguiente ejemplo aplicará estilo solo al segundo elemento de párrafo, ya que es el único que es hermano del elemento `ul` y comparte el mismo padre.

- **Codigo**
  
  ```html
  <div class="container">
    <p>This will not get styled.</p>
    <ul>
      <li>Example item one</li>
      <li>Example item two</li>
      <li>Example item three</li>
    </ul>
    <p>This will get styled.</p>
  </div>
  <p>This will not get styled.</p>
  ```

  ```css
  ul ~ p {
    background-color: green;
  }
  ```

---

## Elementos de nivel en línea, bloque y bloque en línea

- **Elementos de nivel en línea**: los elementos en línea solo ocupan el ancho que necesitan y no comienzan en una nueva línea. Estos elementos fluyen dentro del contenido, lo que permite que el texto y otros elementos en línea aparezcan junto a ellos. Los elementos en línea comunes son los elementos `span`, `anchor` e `img`.

- **Elementos de nivel de bloque**: los elementos de nivel de bloque comienzan en una nueva línea y ocupan todo el ancho disponible por defecto, extendiéndose a lo largo del ancho de su contenedor. Algunos elementos de nivel de bloque comunes son los elementos `div`, `p` y `section`.

- **Elementos de nivel de bloque en línea**: puede establecer un elemento como `inline-block` utilizando la propiedad `display`. Estos elementos se comportan como elementos en línea, pero pueden tener un `width` y una `height` establecidos como los elementos de nivel de bloque.

---

## Margen y relleno

- **Propiedad `margin`**: esta propiedad se utiliza para aplicar espacio fuera del elemento, entre el borde del elemento y los elementos circundantes.

- **Propiedad `padding`**: esta propiedad se utiliza para aplicar espacio dentro del elemento, entre el contenido y su borde.

- **Abreviatura de `margin`**: puede especificar de 1 a 4 valores para establecer los lados del margen. Un valor se aplica a los cuatro lados; dos valores establecen la parte `top` y `bottom`, y luego `right` y `left`; tres valores establecen la parte `top`, la horizontal (`right` y `left`) y luego `bottom`; cuatro valores establecen la parte `top`, `right`, `bottom` y `left`.

- **Abreviatura `padding`**: puede especificar entre 1 y 4 valores para establecer los lados del relleno. Un valor se aplica a los cuatro lados; dos valores establecen la parte `top` y `bottom`, luego `right` y `left`; tres valores establecen la parte `top`, la horizontal (`right` y `left`) y luego `bottom`; cuatro valores establecen la parte `top`, `right`, `bottom` y `left`.

---

## Especificidad CSS

- **Especificidad CSS en línea**: el CSS en línea tiene la mayor especificidad porque se aplica directamente al elemento. Anula cualquier CSS interno o externo. El valor de especificidad para los estilos en línea es `(1, 0, 0, 0)`.

- **Especificidad CSS interno**: el CSS interno se define dentro de un elemento de `style` en la sección `head` del documento HTML. Tiene menor especificidad que los estilos en línea, pero puede anular los estilos externos.

- **Especificidad del CSS externo**: el CSS externo se vincula a través de un elemento de `link` en la sección `head` y se escribe en archivos `.css` separados. Tiene la especificidad más baja, pero proporciona la mejor mantenibilidad para proyectos más grandes.

- **Selector universal (`*`)**: un tipo especial de selector CSS que coincide con cualquier elemento del documento. A menudo se utiliza para aplicar un estilo a todos los elementos de la página, lo que puede ser útil para restablecer o normalizar estilos en diferentes navegadores. El selector universal tiene el valor de especificidad más bajo de todos los selectores. Contribuye con 0 a todas las partes del valor de especificidad `(0, 0, 0, 0)`.

- **Selectores de tipo**: estos selectores se dirigen a los elementos en función de su nombre de etiqueta. Los selectores de tipo tienen una especificidad relativamente baja en comparación con otros selectores. El valor de especificidad de un selector de tipo es `(0, 0, 0, 1)`.

- **Selectores de clase**: Estos selectores se definen mediante un punto (`.`) seguido del nombre de la clase. El valor de especificidad de un selector de clase es `(0, 0, 1, 0)`. Esto significa que los selectores de clase pueden anular los selectores de tipo, pero pueden ser anulados por los selectores de ID y los estilos en línea.

- **Selectores de ID**: los selectores de ID se definen mediante un símbolo de almohadilla (`#`) seguido del nombre del ID. Los selectores de ID tienen una especificidad muy alta, superior a la de los selectores de tipo y los selectores de clase, pero inferior a la de los estilos en línea. El valor de especificidad de un selector de ID es `(0, 1, 0, 0)`.

- **Palabra clave `!important`**: se utiliza para dar a una regla de estilo la máxima prioridad, lo que le permite anular cualquier otra declaración de una propiedad. Cuando se utiliza, obliga al navegador a aplicar el estilo especificado, independientemente de la especificidad de otros selectores. Debes tener cuidado al utilizar `!important`, ya que puede dificultar el mantenimiento y la depuración de tu CSS.

- **Algoritmo en cascada**: algoritmo utilizado para decidir qué reglas CSS aplicar cuando hay varios estilos dirigidos al mismo elemento. Garantiza que se utilicen los estilos más adecuados, basándose en un conjunto de reglas bien definidas.

- **Herencia CSS**: proceso por el cual los estilos se transmiten de los elementos padres a sus hijos. La herencia permite definir estilos en un nivel superior del árbol del documento y aplicarlos a varios elementos sin especificarlos explícitamente para cada uno de ellos.
