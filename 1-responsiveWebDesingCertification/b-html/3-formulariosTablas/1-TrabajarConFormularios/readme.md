# Trabajar con formularios

En estos videos de lecciones, aprenderá sobre los formularios, la función de las etiquetas, las entradas y los botones en la creación de formularios, la validación de formularios del lado del cliente y los estados de los formularios.

## ¿Cómo funcionan los formularios (`form`), las etiquetas y las entradas en HTML?

El elemento de `form` en HTML se utiliza para recopilar información del usuario, como nombres y direcciones de correo electrónico. A continuación, se muestra un ejemplo de un elemento de `form`:

- **Codigo ejemplo**

  ```html
  <form action="url-goes-here">
    <!-- input elements go here -->
  </form>
  ```

El atributo de `action` especifica dónde se enviarán los datos del formulario al enviarlo. Para recopilar información específica, como nombres y direcciones de correo electrónico, se utiliza el elemento de `input`. A continuación, se muestra un ejemplo de uso de un elemento de `input`:

- **Codigo ejemplo**

  ```html
  <form action="">
    <input type="text" />
  </form>
  ```

Los elementos `input` son nulos y no tienen etiquetas de cierre. El atributo `type` define el tipo de datos que el usuario espera. En este caso, los datos serían texto plano. Para agregar una etiqueta a la entrada, se usaría un elemento de `label`. A continuación, se muestra un ejemplo de uso de un elemento de `label` con el texto "`Full Name:`".

- **Codigo ejemplo**

  ```html
  <form action="">
    <label>
      Full Name:
      <input type="text" />
    </label>
  </form>
  ```

Al anidar una `input` dentro de un elemento de `label`, se crea una asociación implícita entre la `label` y el campo de `input`. El término "implícito" se refiere a algo que se entiende o infiere sin necesidad de ser explícitamente establecido o definido con atributos o elementos adicionales. Para asociar explícitamente una `label` con una `input`, se puede usar el atributo `for`. A continuación, se muestra un ejemplo del uso del atributo `for` para una etiqueta de dirección de correo electrónico:

- **Codigo ejemplo**

  ```html
  <form action="">
    <label for="email"> Email Address: </label>
    <input type="email" id="email" />
  </form>
  ```

Al usar una asociación explícita, los valores del atributo `for` y del `id` deben ser iguales. En este caso, ambos valores se establecen en `email`. El tipo de `email` en la entrada proporciona una validación básica para direcciones de correo electrónico con el formato correcto. Si desea mostrar sugerencias adicionales a los usuarios sobre la entrada esperada, puede usar el atributo `placeholder`. A continuación, se muestra un ejemplo con el atributo `placeholder` dentro de la entrada "email":

- **Codigo ejemplo**

  ```html
  <form action="">
    <label for="email"> Email Address: </label>
    <input type="email" id="email" placeholder="Ex. example@email.com" />
  </form>
  ```

Para el texto del marcador de posición, desea proporcionar un texto breve y útil que muestre el formato y el tipo de datos que espera de sus usuarios. En este caso, el texto del marcador de posición `Ex. example@email.com` indica al usuario que debe introducir una dirección de correo electrónico con el formato correcto.

## Questionario 1

- **¿Cuál es el papel del atributo `for` dentro del elemento `label`?**

  - a) Indica el color del texto de la etiqueta.
  - b) Se utiliza para asociar explícitamente una etiqueta con una entrada. // correcto
  - c) Especifica la alineación de la etiqueta dentro de su contenedor.
  - d) Define una función de JavaScript que se ejecutará cuando se haga clic en la etiqueta.

- **¿Cuál de los siguientes es un valor correcto para el atributo de `type` utilizado dentro de las entradas?**

  - a) `choice`
  - b) `text-box`
  - c) `numberinput`
  - d) `text` // correcto

- **¿Cuál es la función del atributo `placeholder` dentro del elemento `input`?**

  - a) Se utiliza para proporcionar una pista o un texto de ejemplo dentro de un campo de entrada. // correcto
  - b) Especifica el tipo de campo de entrada.
  - c) Define el valor inicial que se muestra en el campo de entrada.
  - d) Indica la longitud máxima de caracteres permitidos en el campo de entrada.

## ¿Cuáles son los diferentes tipos de botones y cuándo se deben usar?

El elemento `button` se utiliza para realizar una acción específica al activarse. Aquí tienes un ejemplo de un elemento `button` con el texto "`Start Game`".

- **Codigo ejemplo**

  ```html
  <button>Start Game</button>
  ```

Otros ejemplos de uso del elemento `button` incluyen enviar un formulario, mostrar un modal o activar y desactivar un menú lateral. El elemento `button` tiene un atributo de `type` que controla su comportamiento al activarse. El primer valor posible para el atributo de `type` sería el tipo de `button`. A continuación, se muestra un ejemplo de uso del elemento `button` con el tipo de `button` y el texto "`Show Alert`":

- **Codigo ejemplo**

  ```html
  <button type="button">Show Alert</button>
  ```

De forma predeterminada, el botón no realiza ninguna acción al activarse. Sin embargo, puedes añadir código JavaScript para que el botón sea interactivo, como mostrar una alerta en este caso. Otro valor posible para el atributo `type` es el valor de `submit`. A continuación, se muestra un ejemplo de uso de un elemento de `button` con el tipo de `submit`:

- **Codigo ejemplo**

  ```html
  <form action="">
    <label for="email">Email address:</label>
    <input type="email" id="email" name="email" />
    <button type="submit">Submit form</button>
  </form>
  ```

Dentro de este elemento de `form`, hay una `label` y un elemento de `input` para la dirección de correo electrónico del usuario. Cuando el usuario hace clic en el botón de envío, sus datos se envían al servidor y se procesan. El tercer valor posible para el atributo `type` es el valor de `reset`. A continuación, se muestra un ejemplo de un elemento de `form` con botones de restablecimiento y envío:

- **Codigo ejemplo**

  ```html
  <form action="">
    <label for="email">Email address:</label>
    <input type="email" id="email" name="email" />
    <button type="reset">Reset form</button>
    <button type="submit">Submit form</button>
  </form>
  ```

En este ejemplo modificado, se utilizan una `label` y un elemento de `input` para recopilar la dirección de correo electrónico del usuario. Al hacer clic en el botón de reinicio, se borran todos los datos introducidos. Es importante tener en cuenta que los botones de reinicio no suelen ser la mejor idea, ya que podrían provocar que los usuarios restablezcan sus datos accidentalmente. Además, tener varios botones en el formulario podría saturar la interfaz de usuario.

Otra forma de crear botones en HTML es usar el elemento de `input`. Este elemento también tiene un atributo de `type` con los valores posibles de `submit`, `reset` y `button`. A continuación, se muestra un ejemplo del uso del elemento de `input` con el `type` establecido en `button`:

- **Codigo ejemplo**

  ```html
  <input type="button" value="Show Alert" />
  ```

El atributo `value` se usa para mostrar el texto del botón. Entonces, ¿cuál es la diferencia entre usar los elementos `input` y `button`? Los elementos `input` son elementos void, lo que significa que no pueden tener nodos secundarios, como texto, y solo pueden tener una etiqueta de inicio. Por otro lado, el elemento `button` ofrece mayor flexibilidad, ya que permite anidar texto, imágenes e iconos en su interior.

## Questionario 2

- **¿Cuál de los siguientes NO es un valor válido para el atributo de `type` dentro de los botones?**

  - a) `src` // correcto
  - b) `button`
  - c) `reset`
  - d) `submit`

- **¿Cuál es el papel del `type="reset"` dentro del elemento del `button`?**

  - a) Envía los datos del formulario.
  - b) Solo restablece los elementos del `textarea`.
  - c) Restablece el formulario. // correcto
  - d) No hay ningún comportamiento para el tipo de `reset`.

- **¿Qué otro elemento puedes utilizar para representar un botón?**

  - a) `img`
  - b) `form`
  - c) `header`
  - d) `input` // correcto

## ¿Qué es la validación de formularios del lado del cliente en formularios HTML y cuáles son algunos ejemplos?

Cuando un usuario completa un formulario en su sitio web, es importante que complete toda la información necesaria en el formato correcto. Los controles de formulario HTML, al igual que las entradas, cuentan con numerosas validaciones integradas que puede usar para verificar si hay datos no válidos. Esto ayudará a garantizar que el usuario corrija estos errores antes de que el servidor envíe y procese la información.

El término "del lado del cliente" se refiere a todo lo que sucede en el ordenador o dispositivo del usuario, como la parte de un sitio web o aplicación con la que interactúa directamente. Esto incluye el diseño, la maquetación y cualquier función interactiva.

El término "del lado del servidor" se refiere a todo lo que sucede en el servidor, el ordenador o sistema que aloja el sitio web o la aplicación. Esto incluye el procesamiento de datos, la ejecución de aplicaciones y la gestión de solicitudes provenientes del dispositivo del usuario.

Si bien la validación del lado del cliente es importante, también necesita la validación del lado del servidor para mayor seguridad. Usuarios malintencionados pueden eludir las comprobaciones del lado del cliente, por lo que es esencial contar con medidas robustas del lado del servidor. Aprenderá más sobre esto en un módulo posterior. Por ahora, veamos algunos ejemplos de validación de formularios del lado del cliente.

Un ejemplo común de validación de formulario integrada es usar el atributo `required` en las entradas. Este atributo especifica que el usuario debe completar esa parte del formulario antes de enviarlo. A continuación, se muestra un ejemplo del uso del atributo `required` en una entrada de correo electrónico:

- **Codigo ejemplo**

  ```html
  <form action="">
    <label for="email">Email Address (Required field):</label>
    <input required type="email" name="email" id="email" />
    <button type="submit">Submit Form</button>
  </form>
  ```

Cuando el usuario hace clic en el botón `Submit Form` sin proporcionar una dirección de correo electrónico, se le avisará que el campo es obligatorio y que el formulario no se enviará. Cada navegador tiene sus propios estilos para mostrar este mensaje de alerta. Otra ventaja de usar la entrada de correo electrónico es que cuenta con una validación básica para garantizar que las direcciones tengan el formato correcto. Es importante tener en cuenta que los navegadores solo verifican la validación básica para las direcciones de correo electrónico estándar. Depende del usuario agregar niveles adicionales de validación, que aprenderá en módulos posteriores.

Otras formas de validación para las entradas de correo electrónico son usar los atributos `minlength` y `maxlength`. A continuación, se muestra un ejemplo con la validación adicional:

- **Codigo ejemplo**

  ```html
  <form action="">
    <label for="email">Email Address (Required field):</label>
    <input
      required
      type="email"
      name="email"
      id="email"
      minlength="4"
      maxlength="64"
    />
    <button type="submit">Submit Form</button>
  </form>
  ```

Los atributos `minlength` y `maxlength` se utilizan para establecer la longitud mínima y máxima de caracteres para la entrada de correo electrónico. Si no se incluye la longitud mínima o se supera la máxima, el navegador mostrará un mensaje de alerta.

## Questionario 3

- **¿Cuál es el propósito de los atributos `minlength` y `maxlength` dentro de las entradas(`input`)?**

  - a) Se utilizan para controlar el tamaño de fuente del texto dentro del campo de entrada.
  - b) Se utilizan para establecer la longitud mínima y máxima en caracteres para la entrada. // correcto
  - c) Se utilizan para definir el `width` del campo de entrada en la página.
  - d) Se utilizan para especificar el número máximo de caracteres que se pueden escribir en un `textarea`.

- **¿Qué atributo se utiliza para garantizar que un campo de entrada esté marcado como obligatorio?**

  - a) `required` // correcto
  - b) `size`
  - c) `minlength`
  - d) `autoplay`

- **¿Qué sucede si intenta enviar un valor sin un signo `@` para la `input` de `email`?**

  - a) El programa se bloqueará.
  - b) El formulario se enviará sin problemas.
  - c) No pasará nada.
  - d) El navegador mostrará un mensaje de alerta indicando que en la entrada falta el signo `@`. // correcto

## ¿Cuáles son los diferentes estados de un formulario y por qué son importantes?

En HTML, los controles de formulario, al igual que las entradas, pueden encontrarse en diferentes etapas o condiciones, como estado `focused`, estado de `readonly` o estado `disabled`.

El primer estado se considera el `default`. El estado predeterminado de una entrada de correo electrónico es una entrada en blanco. Así es como se ve la entrada de correo electrónico cuando se muestra por primera vez en la página. En este punto, el usuario no ha introducido ninguna información.

Cuando el usuario hace clic en un control de formulario o lo selecciona con la tecla de tabulación del teclado, significa que está en estado `focused`. Cuando una entrada está en estado `focused`, la mayoría de los navegadores mostrarán un borde azul resaltado alrededor de la entrada. Sin embargo, puede optar por agregar estilos adicionales en CSS.

Otro estado del formulario es el estado `disabled`. Este estado indica a los usuarios que una entrada no puede enfocarse ni activarse. Para deshabilitar una entrada, puede agregar el atributo booleano `disabled` al elemento de la siguiente manera:

- **Codigo ejemplo**

  ```html
  <input disabled type="email" name="email" id="email" />
  ```

Si el usuario intenta hacer clic en la entrada, el foco no se activará. Al igual que con el estado `focused`, puede agregar estilos adicionales para el estado `disabled` mediante CSS.

Otro tipo de estado de formulario es el de `readonly`. Esto ocurre cuando un control de formulario, como una entrada, no es editable por el usuario. A continuación, se muestra un ejemplo de cómo configurar una entrada de correo electrónico como de solo lectura:

- **Codigo ejemplo**

  ```html
  <input
    readonly
    type="email"
    name="email"
    id="email"
    value="example@email.com"
  />
  ```

El atributo `value` se utiliza para establecer el valor que se muestra dentro del campo de entrada. Si intentara hacer clic en la entrada, no podría editar el valor existente.

Una diferencia clave entre el estado `disabled` y el de `readonly` es que `readonly` puede tener el foco, mientras que el estado `disabled` no.

Es importante comprender los diferentes estados del formulario, ya que garantizan una experiencia de usuario fluida al proporcionar información y orientación claras durante la gestión de errores.

## Questionario 4

- **¿Qué atributo se utiliza para deshabilitar una entrada?**

  - a) `readonly`
  - b) `required`
  - c) `checked`
  - d) `disabled` // correcto

- **¿Qué atributo se utiliza para marcar una entrada como de solo lectura?**

  - a) `checked`
  - b) `readonly` // correcto
  - c) `size`
  - d) `capture`

- **¿Cuando se produce el estado de enfoque?**

  - a) Cuando un campo de entrada está deshabilitado y no se puede interactuar con él.
  - b) Cuando se valida un campo de entrada y muestra un mensaje de error.
  - c) Cuando el usuario hace clic en una entrada o la selecciona utilizando la tecla de tabulación para enfocarla. // correcto
  - d) Cuando un campo de entrada ha sido rellenado previamente con valores predeterminados por el navegador.
