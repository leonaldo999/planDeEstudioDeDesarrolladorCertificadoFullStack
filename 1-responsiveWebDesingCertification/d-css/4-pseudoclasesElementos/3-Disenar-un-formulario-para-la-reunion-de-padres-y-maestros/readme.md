# Diseñar un formulario para la reunión de padres y maestros

En este taller, practicarás cómo añadir estilos personalizados a los botones de opción creando un formulario para reuniones entre padres y maestros. Se te ha proporcionado el código HTML básico.

---

## Paso 1

> Comienza añadiendo un elemento `main` con una clase llamada `container`.

- **Codigo**

  ```html
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parent Teacher Conference Form</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  
  <body>
    <!-- code -->
    <main class="container"></main>
    <!-- code -->
  </body>
  
  </html>
  ```

---

## Paso 2

> A continuación, dentro del elemento `main`, agregue un elemento `h1` con el texto `Parent Teacher Conference Form` y las `class` `title` y `center`.

- **Codigo**

  ```html
  <body>
    <main class="container">
      <!-- code -->
      <h1 class="title center">Parent Teacher Conference Form</h1>
      <!-- code -->
    </main>
  </body>
  ```

---

## Paso 3

> A continuación, agregue un elemento de párrafo con el texto `Please fill out the form below to help schedule your parent-teacher conference.`. El elemento de párrafo también debe incluir las clases `description` y `center`.

- **Codigo**

  ```html
  <body>
    <main class="container">
      <h1 class="title center">Parent Teacher Conference Form</h1>
      <!-- code -->
      <p class="description center">Please fill out the form below to help schedule your parent-teacher conference.</p>
      <!-- code -->
    </main>
  </body>
  ```

---

## Paso 4

Ahora es el momento de agregar los elementos de `form` y `input`, que representarán la información de los padres y los estudiantes.

> Comience agregando un elemento de `form` debajo del elemento `p`.

- **Codigo**

  ```html
  <body>
    <main class="container">
      <h1 class="title center">Parent Teacher Conference Form</h1>
      <p class="description center">Please fill out the form below to help schedule your parent-teacher conference.</p>
      
      <!-- code -->
      <form></form>
      <!-- code -->
    </main>
  </body>
  ```

---

## Paso 5

La primera sección del formulario se centrará en la información del estudiante, como su nombre y grado.

> Dentro del elemento `form`, agrega un elemento `fieldset`. Dentro de ese elemento `fieldset`, agrega un elemento `legend` con el texto `Student Information`.
>
> Debajo del elemento `legend`, agrega un elemento `label` con el texto `Full Name :` y un atributo `for` con el valor de `student-name`.

- **Codigo**

  ```html
  <body>
    <main class="container">
      <h1 class="title center">Parent Teacher Conference Form</h1>
      <p class="description center">Please fill out the form below to help schedule your parent-teacher conference.</p>
      
      <form>
        <!-- code -->
        <fieldset>
          <legend>Student Information</legend>
          <label for="student-name">
            Full Name: 
          </label>
        </fieldset>
        <!-- code -->
      </form>
    </main>
  </body>
  ```

---

## Paso 6

El siguiente paso es agregar el `input` asociado para la información del estudiante.

> Comience agregando un `input` con un atributo de `type` establecido en `"text"`. A continuación, agregue un atributo de `name` e `id`, ambos establecidos en `student-name`.

A continuación, agregue un atributo de `placeholder` establecido en `E.g., Jane Doe`. Y, por último, agregue un atributo `required`.

- **Codigo**

  ```html
  <form>
    <fieldset>
      <legend>Student Information</legend>
      <label for="student-name">
        Full Name: 
      </label>
      <!-- code -->
      <input 
        type="text" 
        name="student-name" 
        id="student-name" 
        required
        placeholder="E.g., Jane Doe" 
      >
      <!-- code -->
    </fieldset>
  </form>
  ```

---

## Paso 7

Ahora es el momento de agregar los elementos del formulario para recopilar la información sobre las calificaciones de los estudiantes.

> Comience agregando otro elemento `label` con el texto `Student Grade :` y el atributo `for` establecido en `"grade"`.
>
> A continuación, debajo del elemento `label`, agregue un elemento de `input` con el atributo de `type` establecido en `"number"`. Los atributos de `name` e `id` deben establecerse en `"grade"`. El atributo de `placeholder` debe establecerse en `"E.g., 4"`. Por último, el `input` de número debe ser obligatoria.

- **Codigo**

  ```html
  <form>
    <fieldset>
      <legend>Student Information</legend>
      <label for="student-name">
        Full Name: 
      </label>
      <input 
        type="text" 
        name="student-name" 
        id="student-name" 
        required
        placeholder="E.g., Jane Doe" 
      >

      <!-- code -->
      <label for="grade">
        Student Grade: 
      </label>
      <input 
        type="number" 
        name="grade" 
        id="grade" 
        placeholder="E.g., 4" 
        required
      >
      <!-- code -->
    </fieldset>
  </form>
  ```

---

Paso 8

El siguiente paso es la sección del formulario dedicada a la información de los padres.

> Comience añadiendo otro elemento `fieldset`. Dentro de ese elemento `fieldset`, añada un elemento `legend` con el texto `Parent/Guardian Information`.

- **Codigo**

  ```html
  <form>
    <fieldset>
    </fieldset>
    
    <!-- code -->
    <fieldset>
      <legend>Parent/Guardian Information</legend>
    </fieldset>
    <!-- code -->
  </form>
  ```

---

## Paso 9

Ahora es el momento de agregar los elementos del formulario para recopilar la información de los padres.

> Comience agregando un elemento de `label` con el texto`Parent/Guardian Name :` y el atributo `for` establecido en `"parent-name"`.
>
> A continuación, debajo del elemento de `label`, agregue un elemento de `input` con el atributo de `type` establecido en `"text"`. Los atributos `name` e `id` deben establecerse en `"parent-name"`. El atributo `placeholder` debe establecerse en `"E.g., Nancy Doe"`. Por último, la entrada debe ser obligatoria.

- **Codigo**

  ```html
  <form>
    <fieldset>
    </fieldset>
    
    <fieldset>
      <legend>Parent/Guardian Information</legend>
      
      <!-- code -->
      <label for="parent-name">
        Parent/Guardian Name: 
      </label>
      <input type="text" name="parent-name" id="parent-name" placeholder="E.g., Nancy Doe" required>
      <!-- code -->
    </fieldset>
  </form>
  ```

---

## Paso 10

En los siguientes pasos, agregará los elementos del formulario responsables de recopilar el método de contacto preferido del usuario.

> Comience agregando otro elemento `fieldset` con un elemento `legend` anidado en su interior. El elemento `legend` debe tener el texto `Preferred Contact Method`.

- **Codigo**

  ```html
  <form>
    <fieldset>
    </fieldset>
    
    <fieldset>
    </fieldset>

    <!-- code -->
    <fieldset>
      <legend>Preferred Contact Method</legend>
    </fieldset>
    <!-- code -->
  </form>
  ```

---

## Paso 11

El siguiente paso es agregar la etiqueta `label` y los `input` para el método de contacto por correo electrónico.

> Comience agregando una `label` con una clase de `"contact-method"` y un atributo `for` establecido en `"email"`. El texto de la `label` debe ser `Email :`.
>
> Debajo del elemento de `label`, agregue un `input` de `type` `"radio"` con los atributos `id` y value establecidos en `"email"`. El atributo `name` debe establecerse en `"contact-method"` y la clase debe establecerse en `"contact-method-radio-btn"`.
>
> Por último, asegúrese de que este `input` de `type` `"radio"` esté marcado por defecto.

- **Codigo**

  ```html
  <form>
    <fieldset>
    </fieldset>
    
    <fieldset>
    </fieldset>

    <fieldset>
      <legend>Preferred Contact Method</legend>
      <!-- code -->
      <label class="contact-method" for="email">
          Email: 
        </label>
        <input 
          id="email" 
          class="contact-method-radio-btn" 
          type="radio" 
          name="contact-method" 
          value="email" 
          checked
        >
      <!-- code -->
    </fieldset>
  </form>
  ```

---

## Paso 12

> A continuación, agregue otro `label` con una clase `"contact-method"` y un atributo `for` establecido en `"phone"`. El texto del `label` debe ser `Phone :`.
>
> Debajo del elemento `label`, agregue un `input` de `type` `"radio"` con los atributos `id` y `value` establecidos en `"phone"`. El atributo `name` debe establecerse en `"contact-method"` y la clase debe establecerse en `"contact-method-radio-btn"`.

- **Codigo**

  ```html
  <form>
    <fieldset>
    </fieldset>
    
    <fieldset>
    </fieldset>

    <fieldset>
      <legend>Preferred Contact Method</legend>
      <label class="contact-method" for="email">
          Email: 
        </label>
        <input 
          id="email" 
          class="contact-method-radio-btn" 
          type="radio" 
          name="contact-method" 
          value="email" 
          checked
        >
        <!-- code -->
        <label class="contact-method" for="phone">Phone: </label>
        <input 
          id="phone" 
          class="contact-method-radio-btn"
          type="radio" 
          name="contact-method" 
          value="phone" 
        >
        <!-- code -->
    </fieldset>
  </form>
  ```

---

## Paso 13

Es recomendable permitir a los usuarios añadir notas o comentarios adicionales.

> Debajo del tercer elemento `fieldset`, añada un nuevo elemento `fieldset`. Dentro de él, añada un elemento `legend` con el texto `Additional Notes`.

- **Codigo**

  ```html
  <form>
    <fieldset>
    </fieldset>
    
    <fieldset>
    </fieldset>

    <fieldset>
    </fieldset>

    <!-- code -->
    <fieldset>
      <legend>Additional Notes</legend>
    </fieldset>
    <!-- code -->
  </form>
  ```

---

## Paso 14

> Ahora, agrega un elemento de `label` con el texto `Any specific concerns or topics you'd like to discuss?` y un atributo `for` establecido en `notes`.
>
> Debajo de esta `label`, agrega un elemento `textarea`. Establece su `id` en `notes`, su `name` en `notes`, sus `rows` en `4` y sus `cols` en `50`.

- **Codigo**

  ```html
  <form>
    <fieldset>
    </fieldset>
    
    <fieldset>
    </fieldset>

    <fieldset>
    </fieldset>

    <fieldset>
      <legend>Additional Notes</legend>
      <!-- code -->
      <label for="notes">Any specific concerns or topics you'd like to discuss?</label>
      <textarea name="notes" id="notes" cols="50" rows="4"></textarea>
      <!-- code -->
    </fieldset>
  </form>
  ```

---

## Paso 15

Por último, debes agregar el botón de envío del formulario.

> Debajo del último elemento `fieldset`, agrega un elemento `button` con la `class` `submit-btn` y el atributo `type` establecido en `"submit"`. El contenido del texto del botón debe ser `Submit Form`.

_¡Con esto, tu estructura HTML está completa!_

- **Codigo**

  ```html
  <form>
    <fieldset>
    </fieldset>
    
    <fieldset>
    </fieldset>

    <fieldset>
    </fieldset>

    <fieldset>
    </fieldset>

    <!-- code -->
    <button class="submit-btn" type="submit">Submit Form</button>
    <!-- code -->
  </form>
  ```

---

## Paso 16

Ahora que la estructura HTML está completa, debe pasar al estilo CSS.

Abra su archivo `styles.css`. Primero, establezca un color de fondo oscuro para el `body` y un color claro para el texto.

> Seleccione el elemento `body` y establezca su `background-color` en `midnightblue` y el `color` en `whitesmoke`.

- **Codigo**

  ```css
  /* codigo */
  body {
    background-color: midnightblue;
    color: whitesmoke;
  }
  /* codigo */
  ```

---

## Paso 17

> A continuación, debes dar estilo al contenedor principal. Selecciona el elemento con la clase `container` y establece su `background-color` en el código hexadecimal `#ffffff1a`.

Un código hexadecimal es una combinación de seis dígitos y letras que se utiliza en HTML y CSS para representar colores. Comienza con un `#` seguido de tres pares:

- Los dos primeros dígitos representan el rojo
- Los dos siguientes representan el verde
- Los dos últimos representan el azul.

Por ejemplo, `#ffffff` es blanco puro porque tiene el valor máximo para el rojo, el verde y el azul.

También puedes añadir dos dígitos adicionales al final para controlar la opacidad (lo que se denomina canal alfa). En `#ffffff1a`, el `1a` hace que el color blanco sea semitransparente. Cuanto menor sea el valor alfa, más transparente aparecerá el color. ¡Más adelante aprenderás más sobre los códigos hexadecimales!

- **Codigo**

  ```css
  body {
    background-color: midnightblue;
    color: whitesmoke;
  }

  /* codigo */
  .container{
    background-color: #ffffff1a;
  }
  /* codigo */
  ```

---

## Paso 18

> Continuando con el contenedor principal, asigne a la clase del `container` un `width` del `80%` y un `max-width` de `600px`. Además, añada un `border-radius` de `10px` y establezca el `margin` en `20px auto` para centrarlo horizontalmente.

- **Codigo**

  ```css
  body {
    background-color: midnightblue;
    color: whitesmoke;
  }

  .container{
    background-color: #ffffff1a;
    /* codigo */
    width: 80%;
    max-width: 600px;
    border-radius: 10px;
    margin: 20px auto;
    /* codigo */
  }
  ```

---

## Paso 19

> Ahora, debes agregar un poco de relleno al contenedor. Establece el `padding` en `10px 20px`. De esta manera, estableces un relleno de `10px` en la parte superior e inferior, y de `20px` en la izquierda y la derecha.

- **Codigo**

  ```css
  body {
    background-color: midnightblue;
    color: whitesmoke;
  }

  .container{
    background-color: #ffffff1a;
    width: 80%;
    max-width: 600px;
    border-radius: 10px;
    margin: 20px auto;
    /* codigo */
    padding: 10px 20px;
    /* codigo */
  }
  ```

---

## Paso 20

> Para resaltar el contenedor, debes agregar una `box-shadow` establecida en `0 5px 15px black`.

Esto agrega un efecto de sombra alrededor del contenedor. Los valores controlan el desplazamiento horizontal, el desplazamiento vertical, el radio de desenfoque y el color, respectivamente.

- **Codigo**

  ```css
  body {
    background-color: midnightblue;
    color: whitesmoke;
  }

  .container {
    background-color: #ffffff1a;
    width: 80%;
    max-width: 600px;
    border-radius: 10px;
    margin: 20px auto;
    padding: 10px 20px;
    /* codigo */
    box-shadow: 0 5px 15px black;
    /* codigo */
  }
  ```

---

## Paso 21

Has añadido una clase `center` a algunos elementos del HTML. Ahora, debes definir esa clase para centrar esos elementos.

> Selecciona la clase `center` y centra los elementos que la tengan con una propiedad `text-align` establecida en `center`.

- **Codigo**

  ```css
  .container {
    background-color: #ffffff1a;
    width: 80%;
    max-width: 600px;
    border-radius: 10px;
    margin: 20px auto;
    padding: 10px 20px;
    box-shadow: 0 5px 15px black;
  }

  /* codigo */
  .center {
    text-align: center;
  }
  /* codigo */
  ```

---

## Paso 22

> El texto descriptivo debe ser un poco más grande. Seleccione el elemento con la clase `description` y establezca su `font-size` en `1.2rem`.

- **Codigo**

  ```css
  .center {
    text-align: center;
  }

  /* codigo */
  .description {
    font-size: 1.2rem;
  }
  /* codigo */
  ```

---

## Paso 23

Es hora de dar estilo a los elementos `fieldset` para darles un borde distintivo.

> Seleccione el elemento `fieldset`. Establezca su `border` en `1px solid gray`, el `border-radius` en `5px`, el `margin` en `20px 0` y el `padding` en `20px`.

- **Codigo**

  ```css
  .description {
    font-size: 1.2rem;
  }

  /* codigo */
  fieldset {
    border: 1px solid gray;
    border-radius: 5px;
    margin: 20px 0;
    padding: 20px;
  }
  /* codigo */
  ```

---

## Paso 24

Para que el texto de la `legend` destaque más, es necesario aplicarle un estilo.

> Seleccione el elemento `legend` del `fieldset`. Establezca su `font-size` en `1.3rem` y su `font-weight` en `600`.

El `font-weight` controla la intensidad del texto.

Los valores comunes de `font-weight` son:

- `normal` → Peso regular (predeterminado)
- `bold` → Texto en negrita
- `lighter` → Más claro que el elemento principal
- `bolder` → Más grueso que el elemento principal
- Valores numéricos como:
  - `100` (delgado)
  - `400` (normal)
  - `700` (negrita)
  - `900` (extra negrita)

- **Codigo**

  ```css
  fieldset {
    border: 1px solid gray;
    border-radius: 5px;
    margin: 20px 0;
    padding: 20px;
  }

  /* codigo */
  fieldset legend {
    font-size: 1.3rem;
    font-weight: 600;
  }
  /* codigo */
  ```

---

## Paso 25

Ahora, debes aumentar el tamaño de la fuente para todos los elementos `label`.

> Selecciona el elemento de `label` y establece su `font-size` en `1.2rem`.

- **Codigo**

  ```css
  fieldset {
    border: 1px solid gray;
    border-radius: 5px;
    margin: 20px 0;
    padding: 20px;
  }

  fieldset legend {
    font-size: 1.3rem;
    font-weight: 600;
  }

  /* codigo */
  label {
    font-size: 1.2rem;
  }
  /* codigo */
  ```

---

## Paso 26

 De forma predeterminada, los elementos de `label` están en línea. Para apilarlos verticalmente (excepto las etiquetas de los botones de opción), utilice la pseudo-clase `:not()`.

La pseudo-clase `:not()` niega una selección. En este caso, selecciona todos los elementos de `label` que no tienen la clase `contact-method`.

> Seleccione `label:not(.contact-method)` y, a continuación, establezca el `display` en `block` y el `margin` en `10px 0`.

- **Codigo**

  ```css
  fieldset legend {
    font-size: 1.3rem;
    font-weight: 600;
  }

  label {
    font-size: 1.2rem;
  }

  /* codigo */
  label:not(.contact-method) {
    display: block;
    margin: 10px 0;
  }
  /* codigo */
  ```

---

## Paso 27

Ahora, debes aplicar estilo a los elementos `input` y `textarea`. A menudo es buena idea comenzar con estilos generales para `input` y `textarea`, y luego refinar tipos específicos.

> Seleccione `input:not(.contact-method-radio-btn), textarea`. Establezca el `background-color` en `#ffffff1a`, el `width` en `95%`, el `border` en `1px solid gray`, `border-radius` en `5px` y el `padding` en `10px`.

La parte `:not(.contact-method-radio-btn)` excluye los botones de radio con esa clase del estilo de esta regla. De esta manera, podemos aplicar estilos generales a la mayoría de las entradas, manteniendo los botones de radio separados.

Estos estilos harán que los campos del formulario sean más anchos y legibles. Prueba a previsualizar el formulario para ver cómo cambia el diseño.

- **Codigo**

  ```css
  label {
    font-size: 1.2rem;
  }

  label:not(.contact-method) {
    display: block;
    margin: 10px 0;
  }

  /* codigo */
  input:not(.contact-method-radio-btn),
  textarea {
    background-color: #ffffff1a;
    width: 95%;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
  }
  /* codigo */
  ```

---

## Paso 28

Para asegurarte de que el texto introducido en los campos de entrada y las áreas de texto, así como sus marcadores de posición, sean visibles, configura su color.

> Selecciona `input, input::placeholder, textarea` y configura el `color` en `whitesmoke`.

- **Codigo**

  ```css
  input:not(.contact-method-radio-btn),
  textarea {
    background-color: #ffffff1a;
    width: 95%;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
  }

  /* codigo */
  input,
  input::placeholder,
  textarea {
    color: whitesmoke;
  }
  /* codigo */
  ```

---

## Paso 29

Ahora es el momento de personalizar los botones de opción. De forma predeterminada, los botones de opción tienen el aspecto nativo del navegador. Debes eliminar este aspecto para poder crear uno personalizado.

> Selecciona el elemento con la clase `contact-method-radio-btn`. Establece la `appearance` en `none`.

- **Codigo**

  ```css
  input,
  input::placeholder,
  textarea {
    color: whitesmoke;
  }

  /* codigo */
  .contact-method-radio-btn {
    appearance: none;
  }
  /* codigo */
  ```

---

## Paso 30

Debes asignar un tamaño y una forma a tus botones de radio personalizados.

> Sin dejar de seleccionar `.contact-method-radio-btn`, establece el `width` en `20px`, el `height` en `20px`, el `border-radius` en `50%` y el `border` en `2px solid gray`.

- **Codigo**

  ```css
  input,
  input::placeholder,
  textarea {
    color: whitesmoke;
  }

  .contact-method-radio-btn {
    appearance: none;
    /* codigo */
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid gray;
    /* codigo */
  }
  ```

---

## Paso 31

De forma predeterminada, es posible que los elementos de formulario, como los botones de opción, no estén perfectamente alineados con sus etiquetas, especialmente si el texto de la etiqueta es más alto o tiene una configuración de fuente diferente.

Para alinear los botones de opción verticalmente con sus etiquetas, puede utilizar la propiedad `vertical-align`. Esta propiedad controla cómo los elementos inline o inline-block se alinean verticalmente con el texto circundante.

> Ahora, establezca `vertical-align` en `bottom` para los botones de opción. Puede probar con otros valores como `middle` o `top` para ver cómo afectan a la alineación, pero `bottom` suele funcionar bien para los botones de opción situados junto a las etiquetas.

- **Codigo**

  ```css
  input,
  input::placeholder,
  textarea {
    color: whitesmoke;
  }

  .contact-method-radio-btn {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid gray;
    /* codigo */
    vertical-align: bottom;
    /* codigo */
  }
  ```

---

## Paso 32

Ahora, debes crear el círculo interior que aparecerá cuando se marque el botón de radio. Para ello, utilizarás el pseudoelemento `::before`.

Un pseudoelemento como `::before` te permite insertar contenido adicional antes del elemento real. Se utiliza a menudo con fines decorativos.

> Dirigiéndote al pseudo-elemento `.contact-method-radio-btn::before`, establece una `display` de `block`, `content` de `" "`, `width` de `10px`, `height` de `10px` y `border-radius` del `50%`.

- **Codigo**

  ```css
  .contact-method-radio-btn {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid gray;
    vertical-align: bottom;
  }

  /* codigo */
  .contact-method-radio-btn::before {
    display: block;
    content: " ";
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  /* codigo */
  ```

---

## Paso 33

Debes colocar el círculo interior y hacerlo invisible inicialmente.

> Sin dejar de seleccionar `.contact-method-radio-btn::before`, establece `transform` en `translate(3px, 3px) scale(0)`. La función `translate` mueve ligeramente el círculo y `scale(0)` lo reduce a tamaño cero, por lo que queda oculto de forma predeterminada.
>
> Además, agrega una `transition` de `all 0.3 s ease-in` para crear una animación suave cuando aparezca. Esto significa que cualquier cambio de estilo se animará durante 0.3 segundos, comenzando lentamente y acelerando.

- **Codigo**

  ```css
  .contact-method-radio-btn {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid gray;
    vertical-align: bottom;
  }

  .contact-method-radio-btn::before {
    display: block;
    content: " ";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    /* codigo */
    transform: translate(3px, 3px) scale(0);
    transition: all 0.3 s ease-in;
    /* codigo */
  }
  ```

---

## Paso 34

Ahora es el momento de definir qué sucede cuando se marca el botón de radio.

> Solo se aplica estilo al círculo interior cuando se selecciona el botón de radio, por lo que el selector debe ser `.contact-method-radio-btn:checked::before`.
>
> En la regla, establezca `transform` en `translate(3px, 3px) scale(1)` y `background-color` en `lightgreen`.

El `transform` mueve ligeramente el círculo interior y lo amplía a tamaño completo con `scale(1)`, y un fondo de color verde claro rellena el círculo con color para mostrar que la opción está seleccionada, haciéndola visible.

- **Codigo**

  ```css
  .contact-method-radio-btn::before {
    display: block;
    content: " ";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: translate(3px, 3px) scale(0);
    transition: all 0.3 s ease-in;
  }

  /* codigo */
  .contact-method-radio-btn:checked::before {
    transform: translate(3px, 3px) scale(1);
    background-color: lightgreen;
  }
  /* codigo */
  ```

---

## Paso 35

Es hora de diseñar el botón Enviar.

> Seleccione el elemento con la clase `submit-btn`. Establezca el `cursor` en `pointer` (para indicar que se puede hacer clic), el `background-color` en `royalblue`, el `color` en `whitesmoke`, el `borde` en `none`, el `border-radius` en `6px` y el `padding` en `12px 20px`.

- **Codigo**

  ```css
  .contact-method-radio-btn:checked::before {
    transform: translate(3px, 3px) scale(1);
    background-color: lightgreen;
  }

  /* codigo */
  .submit-btn {
    cursor: pointer;
    background-color: royalblue;
    color: whitesmoke;
    border: none;
    border-radius: 6px;
    padding: 12px 20px;
  }
  /* codigo */
  ```

---

## Paso 36

> Establece el `font-size` en `1.1rem`, la `display` en `block` y el `margin` en `auto` para centrar el botón.

- **Codigo**

  ```css
  .contact-method-radio-btn:checked::before {
    transform: translate(3px, 3px) scale(1);
    background-color: lightgreen;
  }

  .submit-btn {
    cursor: pointer;
    background-color: royalblue;
    color: whitesmoke;
    border: none;
    border-radius: 6px;
    padding: 12px 20px;
    /* codigo */
    font-size: 1.1rem;
    display: block;
    margin: auto;
    /* codigo */
  }
  ```

---

## Paso 37

Por último, agrega un efecto de desplazamiento al botón Enviar para mejorar la retroalimentación del usuario.

> Selecciona `.submit-btn:hover` y establece su `background-color` en `midnightblue`.

- **Codigo**

  ```css
  .contact-method-radio-btn:checked::before {
    transform: translate(3px, 3px) scale(1);
    background-color: lightgreen;
  }

  .submit-btn {
    cursor: pointer;
    background-color: royalblue;
    color: whitesmoke;
    border: none;
    border-radius: 6px;
    padding: 12px 20px;
    font-size: 1.1rem;
    display: block;
    margin: auto;
  }

  /* codigo */
  .submit-btn:hover {
    background-color: midnightblue;
  }
  /* codigo */
  ```

---

**¡Felicidades por terminar este taller!**
