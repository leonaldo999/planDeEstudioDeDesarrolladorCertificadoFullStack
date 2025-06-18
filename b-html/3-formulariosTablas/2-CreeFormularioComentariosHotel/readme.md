# Cree un formulario de comentarios del hotel

En este taller, crearás un formulario de comentarios de hotel.

Practicarás el trabajo con etiquetas, entradas, conjuntos de campos, leyendas, áreas de texto y botones.

## Paso 1

En este taller, practicarás el uso de formularios HTML creando un formulario de comentarios de hotel.

Comienza añadiendo `<!DOCTYPE html>` seguido de un elemento `html` con el atributo `lang = "en"`.

Dentro del elemento `html`, añade un elemento `head`.

- **Codigo**

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
    </head>
  </html>
  ```

## Paso 2

Dentro del elemento `head`, anide un elemento `meta` con el atributo `charset` establecido en `"UTF-8"`.

Debajo de ese elemento `meta`, agregue un elemento de `title`. El texto del elemento de `title` debe ser `Hotel Feedback Form`.

- **Codigo**

  ```html
  <head>
      <meta charset="UTF-8">
      <title>Hotel Feedback Form</title>
  </head>
  ```

## Paso 3

Para prepararse para crear contenido real, agregue un elemento de `body` debajo del elemento de `head`.

- **Codigo**

  ```html
  <head>
      <meta charset="UTF-8">
      <title>Hotel Feedback Form</title>
  </head>
  <body>
  </body>
  ```

## Paso 4

Para el texto de introducción, deberá mostrar el título principal seguido de una breve nota sobre cómo dejar comentarios.

Dentro del elemento `body`, agregue un elemento `header`.

Dentro del elemento `header`, agregue un elemento `h1`. El texto del elemento `h1` debe ser `Hotel Feedback Form`.

Debajo del elemento `h1`, agregue un elemento `p`. El texto del elemento `p` debe ser `Thank you for staying with us. Please provide feedback on your recent stay.`.

- **Codigo**

  ```html
  <header>
    <h1>Hotel Feedback Form</h1>
    <p>Thank you for staying with us. Please provide feedback on your recent stay.</p>
  </header>
  ```

## Paso 5

Ahora es el momento de agregar el elemento `main`, que representa el contenido principal de la página.

- **Codigo**

  ```html
  <main></main>
  ```

## Paso 6

En los videos de lecciones anteriores, aprendiste a trabajar con el elemento de `form` de esta manera:

- **Codigo Ejem**

  ```html
  <form method="value-goes-here" action="url-goes-here">
    <!-- inputs go inside here -->
  </form>
  ```

El atributo `action` se utiliza para especificar dónde se deben enviar los datos del formulario al enviarlo.

El atributo `method` se utiliza para especificar el método HTTP que se usará al enviar los datos del formulario. Los métodos más comunes son `GET` y `POST`.

NOTA: Aprenderá sobre el funcionamiento de los métodos `HTTP` en módulos posteriores.

Dentro del elemento `main`, agregue un elemento `form` con el atributo `action` establecido en `https://hotel-feedback.freecodecamp.org` y el atributo method establecido en "POST".

- **Codigo**

  ```html
  <form method="value-goes-here" action="url-goes-here">
    <!-- inputs go inside here -->
  </form>
  ```

## Paso 7

Los formularios constan de `inputs` donde los usuarios pueden introducir sus datos. Puede agrupar los campos relacionados mediante el elemento `fieldset`.

A continuación, se muestra un ejemplo de uso de un elemento `fieldset`:

- **Codigo Ejem**

  ```html
  <form method="value-goes-here" action="url-goes-here">
    <!-- inputs go inside here -->
  </form>
  ```

Dentro del elemento de `form`, agregue un elemento `fieldset`.

- **Codigo**

  ```html
      <form method="POST" action="https://hotel-feedback.freecodecamp.org">
      <fieldset></fieldset>
    </form>
  ```

## Paso 8

Al trabajar con elementos de `fildset`, es habitual usar un título para describir el grupo de entradas. Para ello, puede usar el elemento de `legend`.

A continuación, se muestra un ejemplo de uso de un elemento de `legend`:

- **Codigo Ejem**

  ```html
  <form action="/example-url">
    <fieldset>
      <legend>Personal Information</legend>
      <!-- inputs go inside here-->
    </fieldset>
  </form>
  ```

Dentro del elemento `fieldset`, agregue un elemento `legend` con el texto `Personal Information`.

- **Codigo**

  ```html
  <form action="/example-url">
    <fieldset>
      <legend>
        Personal Information
      </legend>
    </fieldset>
  </form>
  ```

## Paso 9

En los videos de lecciones anteriores, aprendiste a asociar un elemento de `label` con una `input` como esté:

- **Codigo Ejem**

  ```html
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  ```

El atributo `for` del elemento de `label` debe coincidir con el atributo `id` del elemento de `input`. Esto se conoce como asociación explícita.

Debajo del elemento de `legend` agregue un elemento de `label` con el texto `Name (required):`. Establezca su atributo `for` con el valor `"full-name"`.

Luego, debajo del elemento de `label`, agregue un elemento de `input` sin atributos. En los siguientes pasos, agregará los atributos necesarios.

- **Codigo**

  ```html
    <form method="POST" action="https://hotel-feedback.freecodecamp.org">
      <fieldset>
        <legend>Personal Information</legend>
        <label for="full-name">Name (required):</label>
        <input >
      </fieldset>
    </form>
  ```

## Paso 10

Cuando un usuario proporciona su nombre completo, el `input` aceptará texto sin formato.

En los videos de lecciones anteriores, aprendiste a trabajar con el atributo `type` de esta manera:

- **Codigo Ejem**

  ```html
    <input type="text">
  ```

Para el elemento de `input` existente, agregue un atributo de `type` establecido en `"text"`

También asigne al elemento de `input` un atributo `id` con el valor `"full-name"`.

- **Codigo**

  ```html
    <input type="text" id ="full-name">
  ```

## Paso 11

El atributo de `name` se utiliza para identificar los datos del formulario una vez enviados al servidor.

A continuación, se muestra un ejemplo de cómo usar el atributo de `name`:

- **Codigo Ejem**

  ```html
    <input type="email" name="email">
  ```

Agrega un atributo de `name` al elemento de `input` con el valor de `"name"`.

- **Codigo**

  ```html
    <input type="text" id ="full-name" name="name">
  ```

## Paso 12

En los videos de lecciones anteriores, aprendiste a trabajar con el `placeholder` y los atributos `required` de esta manera:

- **Codigo Ejem**

  ```html
    <input type="text" placeholder="Ex. John Doe" required>
  ```

Para el elemento de `input` existente, agregue un atributo de `placeholder` con el valor `"Ex. John Doe"`.

Además, agregue el atributo `required` al elemento de `input`.

- **Codigo**

  ```html
    <input type="text" id="full-name" name="name" placeholder="Ex. John Doe" required>
  ```

## Paso 13

El formulario de comentarios de tu hotel también debe recopilar la dirección de correo electrónico del usuario.

Comienza añadiendo un nuevo elemento de `label` con el texto `Email address (required):` al formulario. El elemento de `label` debe tener el atributo `for` configurado con el valor `"email"`.

- **Codigo**

  ```html
  <label for="email">Email address (required):</label>
  ```

## Paso 14

A continuación, agregue una `input` con el tipo `"email"` debajo del `label` de su correo electrónico. Esta `input` debe tener el atributo `id` establecido en `"email"`. Además, configure el atributo `name` en `"email"`.

Esta `input` también es obligatoria, así que asegúrese de agregar el atributo `required`.

Por último, agregue un atributo de `placeholder` establecido en `example@email.com`.

- **Codigo**

  ```html
  <label for="email">Email address (required):</label>
  <input type="email" id="email" name="email" placeholder="example@email.com" required>
  ```

## Paso 15

Los elementos de `input` pueden tener un atributo de `size`. Este atributo define la cantidad de caracteres que deben ser visibles mientras el usuario escribe en la entrada. El valor de `size` debe ser un entero positivo mayor que cero. Si no se especifica el `size` o se especifica con un valor no válido, la entrada tendrá el ancho predeterminado del navegador.

- **Codigo Ejem**

  ```html
    <label for="lastName">Last Name:</label>
    <input id="lastName" name="lastName" type="text" size="10" />
  ```

Asigne a las entradas de nombre y correo electrónico un atributo de `size` con un valor de `"20"`.

- **Codigo**

  ```html
  <input type="text" id="full-name" name="name" placeholder="Ex. John Doe" required size="20">
  <label for="email">Email address (required):</label>
  <input type="email" id="email" name="email" placeholder="example@email.com" required size="20">
  ```

## Paso 16

El formulario de comentarios de tu hotel debe incluir una opción para que los usuarios indiquen su edad.

Comienza añadiendo un elemento de `label` con el texto `Age (optional):` al formulario.

El atributo `for` debe estar configurado como ``"age"``.

- **Codigo**

  ```html
    <label for="age">Age (optional):</label>
  ```

## Paso 17

La entrada numérica se utiliza para crear un campo de entrada numérico.

A continuación, se muestra un ejemplo de un campo de entrada numérico:

- **Codigo Ejem**

  ```html
    <input type="number" id="age" name="age" min="18" max="100">
  ```

Los atributos `min` y `max` se utilizan para establecer los valores mínimo y máximo que se pueden introducir en el input.

Debajo del elemento de `label`, agregue un `input` con el atributo `type` establecido en `"number"` y el `id` en `"age"`.

El atributo `name` debe establecerse en `"age"`, el atributo `min` en `"3"` y el atributo `max` en `"100"`.

- **Codigo**

  ```html
    <label for="age">Age (optional):</label>
    <input type="number" id="age" name="age" min="3" max="100">
  ```

## Paso 18

La siguiente sección del formulario preguntará a los usuarios si se han alojado anteriormente en el hotel.

Comience añadiendo un elemento `fieldset`.

Dentro del elemento `fieldset`, añada un elemento `legend` con el texto `Was this your first time at our hotel?`.

- **Codigo**

  ```html
  <fieldset>
    <legend>Was this your first time at our hotel?</legend>
  </fieldset>
  ```

## Paso 19

Si desea que los usuarios seleccionen una opción de una lista, puede usar un conjunto de botones de opción.

A continuación, se muestra un ejemplo de dos botones de opción:

- **Codigo Ejem**

  ```html
    <input type="radio" id="yes" name="first-time">
    <label for="yes">Yes</label>
    <input type="radio" id="no" name="first-time">
    <label for="no">No</label>
  ```

En este ejemplo, los botones de opción se agrupan utilizando el mismo valor de atributo `name`. Esto significa que solo se puede seleccionar un botón de opción a la vez.

Debajo del elemento de `legend`, agregue un elemento de `label` con el texto `Yes` y el atributo `for` establecido en `"yes-option"`.

Debajo del elemento de `label`, agregue un botón de `radio` con el `id` establecido en `"yes-option"` y el atributo `name` establecido en `"hotel-stay"`.

- **Codigo**

  ```html
  <fieldset>
    <legend>Was this your first time at our hotel?</legend>
    <label for="yes-option">Yes</label>
    <input type="radio" id="yes-option" name="hotel-stay">
  </fieldset>
  ```

## Paso 20

Debajo del primer botón de opción, agregue otro elemento de `label` con el atributo `for` establecido en `"no-option"`. El texto de la `label` debe ser `No`.

Debajo del segundo elemento de `label`, agregue un botón de `radio` con el `id` establecido en `"no-option"` y el atributo `name` establecido en `"hotel-stay"`.

Cuando haya terminado, puede probar los botones de opción seleccionando una opción a la vez.

- **Codigo**

  ```html
  <label for="yes-option">Yes</label>
  <input id="yes-option" type="radio" name="hotel-stay" />
  <label for="no-option">No</label>
  <input type="radio" id="no-option" name="hotel-stay">
  ```

## Paso 21

La siguiente sección del formulario preguntará a los usuarios por qué eligieron ese hotel en particular. Podrán seleccionar varias opciones.

Comience añadiendo otro elemento `fieldset`.

Dentro del elemento `fieldset`, añada un elemento `legend` con el texto `Why did you choose to stay at our hotel? (Check all that apply)`.

- **Codigo**

  ```html
  <fieldset>
    <legend>Why did you choose to stay at our hotel? (Check all that apply)</legend>
  </fieldset>
  ```

## Paso 22

Si desea que un usuario seleccione varias opciones de una lista, puede usar `checkboxes`.

A continuación, se muestra un ejemplo de cómo usar `checkboxes` para opciones de comida:

- **Codigo Ejem**

  ```html
  <fieldset>
    <legend>Food Options</legend>
    <label for="pizza">Pizza</label>
    <input type="checkbox" id="pizza" name="food" value="pizza">
    <label for="burger">Burger</label>
    <input type="checkbox" id="burger" name="food" value="burger">
  </fieldset>
  ```

El atributo `value` se utiliza para especificar el valor que se enviará al servidor al enviar el formulario.

Debajo del elemento `legend`, agregue un elemento `label` con el texto `Social Media Ads`. El atributo `for` debe estar configurado como `"ads"`.

Debajo del elemento `label`, agregue una `input` `checkboxes` con los atributos `id`, `name` y `value` configurados como `"ads"`.

- **Codigo**

  ```html
  <fieldset>
    <legend>
      Why did you choose to stay at our hotel? (Check all that apply)
    </legend>
    <label for="ads">Social Media Ads</label>
    <input type="checkbox" id="ads" name="ads" value="ads">
  </fieldset>
  ```

## Paso 23

Agregue otro `label` con el texto de `Personal Recommendation`. El atributo `for` debe estar configurado como `"recommendation"`.

Debajo del elemento de `label`, agregue otra `checkbox` `input` con los atributos `id`, `name` y `value` configurados como `"recommendation"`.

- **Codigo**

  ```html
  <label for="recommendation">Personal Recommendation</label>
  <input type="checkbox" name="recommendation" id="recommendation" value="recommendation">
  ```

## Paso 24

A continuación, agregue otro elemento de `label` con el texto `Location` y el atributo `for` establecido en `"location"`.

Para la `checkbox` `input`, los atributos `id`, `name` y `value` deben establecerse en `location`.

Debajo de ese elemento de `input`, agregue otro elemento de `label` con el texto `Reputation` y el atributo `for` establecido en `"reputation"`.

Para la `checkbox` `input`, los atributos `id`, `name` y `value` deben establecerse en `"reputation"`.

- **Codigo**

  ```html
  <label for="location">Location</label>
  <input type="checkbox" name="location" id="location" value="location">
  <label for="reputation">Reputation</label>
  <input type="checkbox" name="reputation" id="reputation" value="reputation">
  ```

## Paso 25

Para que una casilla de verificación esté marcada por defecto, puede agregar el atributo `checked`.

A continuación, se muestra un ejemplo de uso del atributo `checked`:

- **Codigo Ejem**

  ```html
  <input checked type="checkbox" id="checked" name="checked">
  ```

Agregue el atributo `checked` a la entrada de la casilla de verificación con el `id` de `"reputation"` para que esté marcado de manera predeterminada.

- **Codigo**

  ```html
    <input type="checkbox" id="reputation" name="reputation" value="reputation" />
    <input checked type="checkbox" id="reputation">
  ```

## Paso 26

Para el `label` final y el `input` dentro de este `fieldset`, agregue un elemento de `label` con el texto `Price` y el atributo `for` establecido en `"price"`.

El `input` de la casilla de verificación debe tener los atributos `id`, `name` y `value` establecidos en `"price"`.

Ahora puede probar su `form` seleccionando las distintas casillas de verificación.

- **Codigo**

  ```html
    <input type="checkbox" id="reputation" name="reputation" value="reputation" />
    <input checked type="checkbox" id="reputation">
  ```

## Paso 27

La siguiente sección del formulario permitirá a los usuarios dejar una calificación para el hotel.

Comience añadiendo un nuevo elemento `fieldset` con un elemento `legend` anidado dentro. La `legend` debe contener el texto `Ratings`.

Debajo del elemento `legend`, agregue un elemento `label` con el texto `¿How was the service?`. El atributo `for` debe estar configurado como `"service"`.

- **Codigo**

  ```html
  <fieldset>
    <legend>Ratings</legend>
    <label for="service">How was the service?</label>
  </fieldset>
  ```

## Paso 28

Si desea que los usuarios seleccionen opciones en un menú desplegable, puede usar los elementos `select` y `option`.

A continuación, se muestra un ejemplo del uso de estos elementos para crear un menú desplegable para diferentes ciudades:

- **Codigo Ejem**

  ```html
  <label for="city">Choose a City: </label>
  <select id="city" name="city">
    <option value="new-york">New York</option>
    <option value="los-angeles">Los Angeles</option>
    <option value="chicago">Chicago</option>
    <option value="miami">Miami</option>
  </select>
  ```

Comience agregando un elemento de `select` con los atributos de `name` e `id` establecidos en `"service"`.

- **Codigo**

  ```html
  <select name="service" id="service"></select>
  ```

## Paso 29

Dentro del elemento de `select`, agregue los siguientes cinco elementos de `option` con los valores correspondientes para el texto de `option` y el atributo de `value`:

- *Value Attributes:*

  - poor
  - satisfactory
  - good
  - very-good
  - excellent

- *Option Element Text:*
  
  - Poor
  - Satisfactory
  - Good
  - Very Good
  - Excellent

- **Codigo**

  ```html
  <select name="service" id="service">
    <option value="poor">Poor</option>
    <option value="satisfactory">Satisfactory</option>
    <option value="good">Good</option>
    <option value="very-good">Very Good</option>
    <option value="excellent">Excellent</option>
  </select>
  ```

## Paso 30

Para que una `option` se seleccione por defecto, puede agregar el atributo `selected` al elemento de `option` que desea seleccionar.

A continuación, se muestra un ejemplo con el atributo `selected`:

- **Codigo Ejem**

  ```html
  <option selected value="amazing">Amazing</option>
  ```

Dentro de su elemento de `select`, agregue el atributo `selected` al elemento de `option` con el valor `"excellent"`.

- **Codigo**

  ```html
  <select name="service" id="service">
    <option value="poor">Poor</option>
    <option value="satisfactory">Satisfactory</option>
    <option value="good">Good</option>
    <option value="very-good">Very Good</option>
    <option selected value="excellent">Excellent</option>
  </select>
  ```

## Paso 31

El formulario de comentarios de tu hotel también debe permitir a los usuarios calificar la comida.

Comienza añadiendo un elemento de `label` con el texto `How was the food?`. Este elemento de `label` debe tener el atributo `for` configurado como `"food"`.

Debajo del elemento de `label`, añade un elemento de `select` con el `id` y el `name` configurados como `"food"`.

- **Codigo**

  ```html
  <label for="food">How was the food?</label>
  <select name="food" id="food"></select>
  ```

## Paso 32

Dentro del elemento de `select`, agregue los siguientes cinco elementos de `option` con los valores correspondientes para el texto de `option` y el atributo de `value`:

- *Value Attributes:*

  - poor
  - satisfactory
  - good
  - very-good
  - excellent

- *Option Element Text:*
  
  - Poor
  - Satisfactory
  - Good
  - Very Good
  - Excellent

No olvide añadir el atributo `selected` al elemento `option` con el valor `excellent`.

- **Codigo**

  ```html
  <select name="food" id="food">
    <option value="poor">Poor</option>
    <option value="satisfactory">Satisfactory</option>
    <option value="good">Good</option>
    <option value="very-good">Very Good</option>
    <option selected value="excellent">Excellent</option>
  </select>
  ```

## Paso 33

La última sección del `form` permitirá a los usuarios proporcionar cualquier comentario adicional que les guste sobre el hotel.

Comience añadiendo un elemento `label` con el texto `Other Comments?` y un atributo for establecido en `"comments"`.

- **Codigo**

  ```html
  <label for="comments">Other Comments?</label> 
  ```

## Paso 34

Si desea que los usuarios dispongan de más espacio para escribir sus comentarios, puede utilizar un elemento `textarea`.

El elemento `textarea` es un control de entrada de texto multilínea que permite a los usuarios introducir texto más largo que una sola línea. Puede utilizarse para crear un cuadro de comentarios, una entrada de mensaje u otra entrada de texto que requiera varias líneas.

He aquí un ejemplo de elemento `textarea`:

- **Codigo Ejem**

  ```html
  <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
  ```

El atributo `rows` se utiliza para especificar la altura visible del `textarea`, y el atributo `cols` se utiliza para especificar la anchura visible del `textarea`.

Debajo del elemento `label`, añade un elemento `textarea`. En el siguiente paso, añadirás los atributos necesarios.

- **Codigo**

  ```html
  <label for="comments">Other Comments?</label>
  <textarea></textarea>
  ```

## Paso 35

Para tu elemento `textarea`, añade un atributo `id` y `name` con el valor `"comments"`.

Para el atributo `cols` establece el valor en `30` y para el atributo `rows` establece el valor en `10`.

- **Codigo**

  ```html
  <textarea name="comments" id="comments" cols="30" rows="10"></textarea>
  ```

## Paso 36

Para el último paso en el taller del formulario de opinión del hotel, necesitará añadir un botón de envío al formulario.

Recuerde que aprendió a trabajar con los botones de envío en los vídeos anteriores.

Añada un elemento `button` con el atributo `type` establecido en `"submit"` y el contenido de texto establecido en `Submit`.

**Y con eso, ¡tu formulario de comentarios del hotel está completo!**

- **Codigo**

  ```html
  <textarea name="comments" id="comments" cols="30" rows="10"></textarea>
  ```
