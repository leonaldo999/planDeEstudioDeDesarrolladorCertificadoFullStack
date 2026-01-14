# Listas de estilos y enlaces

En esta sección, exploraremos cómo transformar elementos de navegación y organización. Aprenderá a personalizar las listas (ul, ol) eliminando viñetas predeterminadas o usando imágenes personalizadas. Además, dominaremos el diseño de enlaces, controlando sus estados mediante pseudo-clases (:hover, :active, :visited) para crear menús interactivos y una experiencia de usuario profesional y moderna.

---

## ¿Cómo se espacian los elementos de una lista utilizando el margen o la altura de línea?

Los márgenes y la altura de línea son esenciales para espaciar los elementos de una lista y mejorar así la legibilidad y el atractivo visual.

En primer lugar, ¡comencemos a espaciar los elementos de una lista utilizando márgenes!

Los márgenes se pueden utilizar para crear espacio entre los elementos de una lista aplicando propiedades de margen a los elementos `li`. Este método permite controlar el espaciado fuera de cada elemento de la lista, aumentando o disminuyendo eficazmente la distancia entre ellos.

Veamos un ejemplo de una lista desordenada con tres elementos.

- **Codigo Ejemplo**
  
  ```html
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  ```

De forma predeterminada, HTML no aplicará mucho espacio entre los elementos de la lista.

Para aplicar algo de espacio en la parte inferior de cada elemento de la lista, puede utilizar la propiedad `margin-bottom` de la siguiente manera:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  ```

  ```css
  li {
    margin-bottom: 40px;
  }
  ```

En este ejemplo, se aplicará un margen de `40px` a la parte inferior de cada elemento de la lista dentro de la lista desordenada.

Otra forma de espaciar los elementos de la lista sería utilizar la propiedad `line-height`.

La propiedad `line-height` ajusta el espaciado vertical entre las líneas de texto dentro de un solo elemento de la lista.

Aunque afecta principalmente al espaciado entre las líneas de texto dentro de cada elemento, también puede influir indirectamente en el espaciado general entre los elementos de la lista si estos contienen solo una línea de texto.

Si los elementos de la lista tienen varias líneas de texto, la `line-height` afectará al espaciado entre esas líneas, pero no ajustará directamente el espaciado entre los elementos separados de la lista.

Para controlar el espaciado entre elementos individuales de la lista, se deben utilizar las propiedades `margin` o `padding`.

Utilizando la misma lista desordenada de antes, aquí hay un ejemplo de cómo aplicar `line-height` a los elementos de la lista:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  ```

  ```css
  li {
    line-height: 2; 
  }
  ```

En este ejemplo, `line-height: 2;` establece la altura de línea en el doble del tamaño de la fuente, creando más espacio vertical dentro de cada elemento de la lista.

---

## Cuestionario 1

- **1.¿Qué propiedad CSS utilizarías para crear espacio entre los elementos de una lista ajustando el espacio fuera de cada elemento `li`?**

  - [ ] a) `padding`
  - [ ] b) `line-height`
  - [x] c) `margin` //correcto
  - [ ] d) `border`

- **2.Dada la regla CSS `li { margin-bottom: 15px; }`, ¿qué efecto tiene esto en los elementos de la lista?**

  - [ ] a) Añade `15px` de espacio dentro de cada elemento de la lista.
  - [ ] b) Añade `15px` de espacio entre el contenido y el `border` de cada elemento de la lista.
  - [x] c) Añade `15px` de espacio debajo de cada elemento de la lista. //correcto
  - [ ] d) Añade `15px` de espacio encima de cada elemento de la lista.

- **3.¿Qué controla la propiedad line-height en CSS?**

  - [ ] a) El `width` del contenido.
  - [ ] b) El espacio dentro del `border` de un elemento.
  - [x] c) El espacio vertical entre las líneas de texto dentro de un elemento. //correcto
  - [ ] d) El espacio fuera del `border` de un elemento.

---

## ¿Cómo funcionan las diferentes propiedades de estilo de lista?

En CSS, la propiedad list-style se utiliza para controlar la apariencia de las listas en una página web.

Tanto si trabajas con listas ordenadas (ol) como con listas desordenadas (ul), la propiedad list-style te permite personalizar cómo se muestran los elementos de la lista.

La propiedad list-style es en realidad una abreviatura de otras tres propiedades:

list-style-type
list-style-position
list-style-image
Cada una de ellas desempeña un papel diferente en la definición del aspecto de las listas.

La propiedad list-style-type te permite definir el tipo de viñeta o número utilizado en una lista.

Para las listas no ordenadas, puedes elegir entre varios estilos de viñetas, como discos, círculos o cuadrados.

Para las listas ordenadas, puedes utilizar diferentes sistemas de numeración, como decimales, números romanos o incluso caracteres alfabéticos.

A continuación se muestra un ejemplo del uso de list-style-type:
