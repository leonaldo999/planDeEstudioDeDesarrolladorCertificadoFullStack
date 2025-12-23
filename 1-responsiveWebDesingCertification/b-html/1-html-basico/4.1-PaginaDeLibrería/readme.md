# crea una Página de Librería

---

## Paso 1

En este taller, construirá una página de librería creando tarjetas de libros que muestren información sobre diferentes libros. Practicarás la organización de contenido utilizando elementos `div`, `class` e `ID`.

> Comience agregando un elemento `h1` con el texto `XYZ Bookstore`.

- **Codigo**

  ```html
  <h1>XYZ Bookstore</h1>
  ```

---

## Paso 2

> Debajo del elemento `h1`, agregue un elemento `p` con este texto: `Browse our collection of amazing books!`.

- **Codigo**

  ```html
  <h1>XYZ Bookstore</h1>
  <p>Browse our collection of amazing books!</p>
  ```

---

## Paso 3

El elemento `div` se usa como contenedor para agrupar otros elementos HTML. Utilizará principalmente el elemento `div` cuando desee agrupar elementos HTML que compartirán un conjunto de estilos CSS.

> Debajo del elemento `p`, agregue un elemento `div`. Este `div` será un contenedor para tus tarjetas de libro.

- **Codigo**

  ```html
  <h1>XYZ Bookstore</h1>
  <p>Browse our collection of amazing books!</p>
  <div></div>
  ```

---

## Paso 4

El atributo `class` se usa para identificar uno o más elementos para el estilo. A diferencia del atributo `id`, los nombres de clase no necesitan ser únicos: varios elementos pueden compartir la misma clase.

- **Codigo ejemplo**

  ```html
  <p class="example">example paragraph</p>
  ```

> Agregue un atributo de `class` a su elemento `div` y establezca su valor en `card-container`.

- **Codigo**

  ```html
  <h1>XYZ Bookstore</h1>
  <p>Browse our collection of amazing books!</p>
  <div class="card-container">
    
  </div>
  ```

---

## Paso 5

> Dentro del elemento que tiene la `class` de `card-container`, cree otro elemento `div`. Este `div` representará la primera tarjeta de libro.
>
> Agregue un atributo de `class` a este nuevo elemento `div` y establezca el valor del atributo de `class` en `card`.

- **Codigo**

  ```html
  <h1>XYZ Bookstore</h1>
  <p>Browse our collection of amazing books!</p>
  <div class="card-container">
    <div class="card"></div>
  </div>
  ```

---

## Paso 6

El atributo `id` agrega un identificador único a un elemento HTML. Cada `id` debe ser único dentro de una página y solo debe usarse una vez.

los valores de `id` no pueden contener espacios y solo deben contener letras, dígitos, guiones bajos y guiones.

Aquí hay un ejemplo:

- **Codigo ejemplo**

  ```html
  <p id="para">example paragraph</p>
  ```

> Agregue un atributo `id` a su elemento que tenga una `class` de `card` y establezca su valor en `sally-adventure-book`.

- **Codigo**

  ```html
  <h1>XYZ Bookstore</h1>
  <p>Browse our collection of amazing books!</p>
  <div class="card-container">
  <!-- codigo de usuario -->
    <div class="card" id="sally-adventure-book">

    </div>
  <!-- codigo de usuario -->
  </div>
  ```

---

## Paso 7

> Dentro del primer elemento que tenga una `class` de `card`, agregue un elemento `h2` con el texto `Sally's SciFi Adventure`.

- **Codigo**

  ```html
  <h1>XYZ Bookstore</h1>
  <p>Browse our collection of amazing books!</p>
  <div class="card-container">
    <div class="card" id="sally-adventure-book">
      <!-- codigo de usuario -->
      <h2>Sally's SciFi Adventure</h2>
      <!-- codigo de usuario -->
    </div>
  </div>
  ```

---

## Paso 8

> Debajo del elemento h2 en el primer elemento que tiene una clase de tarjeta, agregue un elemento p con el siguiente texto: `This is an epic story of Sally and her dog Rex as they navigate through other worlds.`

- **Codigo**

  ```html
  <h1>XYZ Bookstore</h1>
  <p>Browse our collection of amazing books!</p>
  <div class="card-container">
    <div class="card" id="sally-adventure-book">
      <h2>Sally's SciFi Adventure</h2>
      <!-- codigo de usuario -->
      <p>
        This is an epic story of Sally and her dog Rex as they navigate through other worlds.
      </p>
      <!-- codigo de usuario -->
    </div>
  </div>
  ```

---

## Paso 9

El elemento `button` se utiliza para crear botones en los que se puede hacer clic en una página web. Los botones son elementos interactivos en los que los usuarios pueden hacer clic para realizar acciones.

> Puede agregar varios elementos dentro de un elemento `div` para agrupar contenido relacionado. Agregue un elemento de `button` dentro del elemento que tenga una `class` de `tarjeta`, asigne al `button` un atributo de `class` establecido en `btn` y el texto `Buy Now`.

- **Codigo**

  ```html
  <h1>XYZ Bookstore</h1>
  <p>Browse our collection of amazing books!</p>
  <div class="card-container">
    <!-- Usuario  -->
    <div class="card" id="sally-adventure-book">
      <h2>Sally's SciFi Adventure</h2>
      <p>
        This is an epic story of Sally and her dog Rex as they navigate through other worlds.
      </p>
      <button class="btn">Buy Now</button>
    </div>
    <!-- Usuario  -->
  </div>
  ```

---

## Paso 10

> Ahora crea una segunda tarjeta de libro. Agregue otro elemento `div` con el atributo `class` establecido en `card`. Observe cómo puede reutilizar el mismo nombre de clase para varios elementos para aplicar un estilo uniforme.

- **Codigo**

  ```html
  <h1>XYZ Bookstore</h1>
  <p>Browse our collection of amazing books!</p>
  <div class="card-container">
    <!-- Usuario  -->
    <div class="card" id="sally-adventure-book">
      <h2>Sally's SciFi Adventure</h2>
      <p>
        This is an epic story of Sally and her dog Rex as they navigate through other worlds.
      </p>
      <button class="btn">Buy Now</button>
    </div>
    <div class="card"></div>
    <!-- Usuario  -->
  </div>
  ```

---

## Paso 11

Agregue un atributo `id` a su segundo elemento que tenga una clase de `card` y establezca su valor en `dave-cooking-book`. Recuerda que cada `id` debe ser único.

- **Codigo**

  ```html
  <h1>XYZ Bookstore</h1>
  <p>Browse our collection of amazing books!</p>
  <div class="card-container">
    <div class="card" id="sally-adventure-book">
      <h2>Sally's SciFi Adventure</h2>
      <p>
        This is an epic story of Sally and her dog Rex as they navigate through other worlds.
      </p>
      <button class="btn">Buy Now</button>
    </div>
    <!-- Usuario  -->
    <div class="card" id="dave-cooking-book">

    </div>
    <!-- Usuario  -->
  </div>
  ```

---

## Paso 12

Dentro del segundo elemento que tiene una `class` de `card`, agregue un elemento `h2` con el texto `Dave's Cooking Adventure`.

- **Codigo**

  ```html
  <h1>XYZ Bookstore</h1>
  <p>Browse our collection of amazing books!</p>
  <div class="card-container">
    <div class="card" id="sally-adventure-book">
      <h2>Sally's SciFi Adventure</h2>
      <p>
        This is an epic story of Sally and her dog Rex as they navigate through other worlds.
      </p>
      <button class="btn">Buy Now</button>
    </div>
    <!-- Usuario  -->
    <div class="card" id="dave-cooking-book">
      <h2>Dave's Cooking Adventure</h2>
    </div>
    <!-- Usuario  -->
  </div>
  ```

---

## Paso 13

> Debajo del elemento `h2` en la segunda tarjeta, agregue un elemento `p` con este texto: `This is the story of Dave as he learns to cook everything from pancakes to pasta, one recipe at a time.`

- **Codigo**

  ```html
  <h1>XYZ Bookstore</h1>
  <p>Browse our collection of amazing books!</p>
  <div class="card-container">
    <div class="card" id="sally-adventure-book">
      <h2>Sally's SciFi Adventure</h2>
      <p>
        This is an epic story of Sally and her dog Rex as they navigate through other worlds.
      </p>
      <button class="btn">Buy Now</button>
    </div>
    <!-- Usuario  -->
    <div class="card" id="dave-cooking-book">
      <h2>Dave's Cooking Adventure</h2>
      <p>
        This is the story of Dave as he learns to cook everything from pancakes to pasta, one recipe at a time.
      </p>
    </div>
    <!-- Usuario  -->
  </div>
  ```

---

## Paso 14

> Dentro de la segunda tarjeta, agregue un elemento de `button` con el atributo de `class` establecido en `btn` y el texto `Buy Now`.

Ambos elementos de `button` ahora comparten la misma clase, lo que significa que pueden tener un estilo coherente juntos.

- **Codigo**

  ```html
  <h1>XYZ Bookstore</h1>
  <p>Browse our collection of amazing books!</p>
  <div class="card-container">
    <div class="card" id="sally-adventure-book">
      <h2>Sally's SciFi Adventure</h2>
      <p>
        This is an epic story of Sally and her dog Rex as they navigate through other worlds.
      </p>
      <button class="btn">Buy Now</button>
    </div>
    <!-- Usuario  -->
    <div class="card" id="dave-cooking-book">
      <h2>Dave's Cooking Adventure</h2>
      <p>
        This is the story of Dave as he learns to cook everything from pancakes to pasta, one recipe at a time.
      </p>
      <button class="btn">Buy Now</button>
    </div>
    <!-- Usuario  -->
  </div>
  ```

---

## Paso 15

> Debajo del elemento con la clase `card-container`, agregue un nuevo elemento `p` con este texto: `Review your selections and continue to checkout.`
>
> Debajo del elemento `p`, cree un elemento `div` con el atributo `class` establecido en `btn-container`. Este contenedor agrupará los elementos de los botones de navegación.

- **Codigo**

  ```html
  <h1>XYZ Bookstore</h1>
  <p>Browse our collection of amazing books!</p>
  <div class="card-container">
    <div class="card" id="sally-adventure-book">
      <h2>Sally's SciFi Adventure</h2>
      <p>
        This is an epic story of Sally and her dog Rex as they navigate through other worlds.
      </p>
      <button class="btn">Buy Now</button>
    </div>
    <div class="card" id="dave-cooking-book">
      <h2>Dave's Cooking Adventure</h2>
      <p>
        This is the story of Dave as he learns to cook everything from pancakes to pasta, one recipe at a time.
      </p>
      <button class="btn">Buy Now</button>
    </div>
  </div>
  <!-- Usuario  -->
  <p>
  Review your selections and continue to checkout.
  </p>
  <div class="btn-container"></div>
    <!-- Usuario  -->
  ```

---

## Paso 16

Dentro del elemento con una clase `btn-container`, agregue dos elementos de `button`:

- **First button**:
  - *Id*: `view-cart-btn`
  - *Class*: `btn`
  - *Text*: `View Cart`

- **Second button**:

  - *Id*: `checkout-btn`
  - *Class*: `btn`
  - *Text*: `Checkout`

---

**¡Felicitaciones! Ha creado con éxito la estructura de una página de librería utilizando `divs`, `clases` e `ID` para organizar su contenido.**

- **Codigo**

  ```html
  <h1>XYZ Bookstore</h1>
  <p>Browse our collection of amazing books!</p>
  <div class="card-container">
    <div class="card" id="sally-adventure-book">
      <h2>Sally's SciFi Adventure</h2>
      <p>
        This is an epic story of Sally and her dog Rex as they navigate through other worlds.
      </p>
      <button class="btn">Buy Now</button>
    </div>
    <div class="card" id="dave-cooking-book">
      <h2>Dave's Cooking Adventure</h2>
      <p>
        This is the story of Dave as he learns to cook everything from pancakes to pasta, one recipe at a time.
      </p>
      <button class="btn">Buy Now</button>
    </div>
  </div>
  <p>
  Review your selections and continue to checkout.
  </p>
  <div class="btn-container">
  <!-- Usuario  -->
    <button id="view-cart-btn" class="btn">
      View Cart
    </button>
    <button id="checkout-btn" class="btn">
      Checkout
    </button>
    <!-- Usuario  -->
  </div>
  ```

---
