# Revisión de diseños y efectos CSS

En esta sección, revisaremos algunos de los problemas comunes que surgen al aplicar estilos a los diseños y efectos CSS. En particular, nos centraremos en el modelo de caja, el uso de `box-sizing: border-box` para controlar el tamaño de los elementos y los problemas comunes relacionados con el uso de `float` para crear diseños.

---

## Propiedad CSS `overflow`

- **Definición**: `overflow` se refiere a la forma en que los elementos manejan el contenido que excede, o «rebosa», el tamaño del elemento que lo contiene. El `overflow` es bidimensional.

- `overflow-x`: el eje x determina el desbordamiento horizontal.

- `overflow-y`: el eje y determina el desbordamiento vertical.

- `overflow`: propiedad abreviada para `overflow-x` y `overflow-y`. Si se le asigna un valor, ambos desbordamientos lo utilizarán. Si se le asignan dos valores, `overflow-x` utilizará el primero y `overflow-y` utilizará el segundo.
  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <div class="overflow-box">
      This is very long content that will overflow horizontally and vertically.
      <br />
      This is very long content that will overflow horizontally and vertically.
      <br />
      This is very long content that will overflow horizontally and vertically.
      <br />
      This is very long content that will overflow horizontally and vertically.
      <br />
      This is very long content that will overflow horizontally and vertically.
      <br />
      This is very long content that will overflow horizontally and vertically.
    </div>
    ```

    ```css
    .overflow-box {
      width: 140px;
      height: 70px;
      border: 2px solid black;
      overflow-x: auto;
      overflow-y: auto;
      white-space:nowrap;
    }
    ```

---

## Propiedad CSS `Transform`

- Definición: esta propiedad le permite aplicar diversas transformaciones a los elementos, como rotarlos, escalarlos, inclinarlos o trasladarlos (moverlos) en un espacio 2D o 3D.

- Función `translate()`: esta función se utiliza para mover un elemento desde su posición actual.

- Función `scale()`: esta función le permite cambiar el tamaño de un elemento.

- Función `rotate()`: esta función le permite rotar un elemento.

- Función `skew()`: esta función permite sesgar un elemento.

- Transformaciones y accesibilidad: si utiliza transform para ocultar o revelar contenido, asegúrese de que el contenido siga siendo accesible para los lectores de pantalla y la navegación por teclado. El contenido oculto debe estar realmente oculto, por ejemplo, utilizando `display: none` o `visibility: hidden`, en lugar de simplemente moverlo fuera de la pantalla.
  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <div class="container">
      <div class="transform-box translate">Translate</div>
      <div class="transform-box scale">Scale</div>
      <div class="transform-box rotate">Rotate</div>
      <div class="transform-box skew">Skew</div>
    </div>
    ```

    ```css
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
    }
    
    .transform-box {
      width: 100px;
      height: 100px;
      background: coral;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    /* translate() */
    .translate {
      transform: translateX(20px);
    }
    
    /* scale() */
    .scale {
      transform: scale(1.2);
    }
    
    /* rotate() */
    .rotate {
      transform: rotate(15deg);
    }
    
    /* skew() */
    .skew {
      transform: skew(10deg, 5deg);
    }
    ```

---

## El Box Model

- Definición: En el Box Model CSS, cada elemento está rodeado por una caja. Esta caja consta de cuatro componentes: el área de contenido, el `padding`, el `border` y el `margin`.

- Área de contenido: El área de contenido es la parte más interna de la caja. Es el espacio que contiene el contenido real de un elemento, como texto o imágenes.

- Paddinig: el padding es el área inmediatamente posterior al área de contenido. Es el espacio entre el área de contenido y el borde de un elemento.

- Border: el border es el borde exterior o contorno de un elemento en el Box Model CSS. Es el límite visual del elemento.

- Margin: el margin es el espacio fuera del borde de un elemento. Determina la distancia entre un elemento y otros elementos a su alrededor.
  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <div class="box-model">Content</div>
    ```

    ```css
    .box-model {
      width: 120px;
      background: lightblue;
      padding: 16px;
      border: 4px solid teal;
      margin: 20px;
      text-align: center;
    }
    ```

---

## Colapso de márgenes

- Definición: este comportamiento se produce cuando los márgenes verticales de elementos adyacentes se superponen, lo que da como resultado un único margen igual al mayor de los dos. Este comportamiento solo se aplica a los márgenes verticales (superior e inferior), no a los márgenes horizontales (izquierdo y derecho).

---

## Los valores de las propiedades `content-box` y `border-box`

- Propiedad `box-sizing`: esta propiedad se utiliza para determinar cómo se calculan el `width` y el `height` finales de un elemento HTML.

- Valor `content-box`: en el modelo `content-box`, el `width` y el `height` que se establecen para un elemento determinan las dimensiones del área de contenido, pero no incluyen el `padding`, el `border` ni el `margin`.

- Valor `border-box`: con `border-box`, el `width` y el `height` de un elemento incluyen el área de contenido, el `padding` y el `border`, pero no incluyen el `margin`.
  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <div class="sizing-box content-box">Content-box</div>
    <div class="sizing-box border-box">Border-box</div>
    ```

    ```css
    .sizing-box {
      width: 150px;
      padding: 10px;
      border: 4px solid teal;
      margin-bottom: 10px;
      background: peachpuff;
      text-align: center;
    }
    
    .content-box {
      box-sizing: content-box;  
    }
    
    .border-box {
      box-sizing: border-box;
      background: lightgreen;
    }
    ```

---

## Restablecimiento de CSS

- Definición: Un restablecimiento de CSS es una hoja de estilos que elimina todo o parte del formato predeterminado que los navegadores web aplican a los elementos HTML. Entre las opciones de terceros para el restablecimiento de CSS se incluyen `sanitize.css` y `normalize.css`.

---

## Propiedad CSS Filter

- Definición: esta propiedad se puede utilizar para crear diversos efectos, como desenfoque, cambio de color y ajuste de contraste.

- Función `blur()`: esta función aplica un desenfoque gaussiano al elemento. La cantidad se define en píxeles y representa el radio del desenfoque.

- Función `brightness()`: esta función ajusta el brillo del elemento. Un valor del 0 % hará que el elemento sea completamente negro, mientras que los valores superiores al 100 % aumentarán el brillo.

- Función `contrast()`: esta función ajusta el contraste del elemento. Un valor del 0 % hará que el elemento sea completamente gris, el 100 % hará que el elemento se vea normalmente y los valores superiores al 100 % aumentarán el contraste.

- Función `grayscale()`: esta función convierte el elemento a escala de grises. La cantidad se define como un porcentaje, donde el 100 % es completamente escala de grises y el 0 % deja la imagen sin cambios.

- Función `sepia()`: esta función aplica un tono sepia al elemento. Al igual que grayscale, utiliza un valor porcentual.

- Función `hue-rotate()`: esta función aplica una rotación de tono al elemento. El valor se define en grados y representa una rotación alrededor del círculo cromático.
  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <div class="container">
      <img class="filter blur" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="Blur" />
      <img class="filter brightness" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="Brightness" />
      <img class="filter contrast" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="Contrast" />
      <img class="filter grayscale" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="Grayscale" />
      <img class="filter sepia" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="Sepia" />
      <img class="filter hue" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="Hue Rotate" />
    </div>
    ```

    ```css
    .container {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }
    
    .filter {
      width: 120px;
    }
    
    /* blur() */
    .blur {
      filter: blur(3px);
    }
    
    /* brightness() */
    .brightness {
      filter: brightness(130%);
    }
    
    /* contrast() */
    .contrast {
      filter: contrast(150%);
    }
    
    /* grayscale() */
    .grayscale {
      filter: grayscale(100%);
    }
    
    /* sepia() */
    .sepia {
      filter: sepia(100%);
    }
    
    /* hue-rotate() */
    .hue {
      filter: hue-rotate(90deg);
    }
    ```

---
