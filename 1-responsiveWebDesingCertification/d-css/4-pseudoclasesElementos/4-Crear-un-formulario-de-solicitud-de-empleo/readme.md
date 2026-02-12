# Crear un formulario de solicitud de empleo

> Objetivo: Cumpla con las historias de usuario que se indican a continuación y apruebe todas las pruebas para completar el laboratorio.

## Historias de usuario

- Debe tener un elemento `div` con la clase `container`.

- Dentro del elemento `div`, debe tener un elemento de `form`.

- El formulario debe contener un elemento `input` con el `type` `text` y el `name` de identificación para introducir el nombre completo del usuario.

- Debe tener otro elemento `input` con el `type` `email` y la identificación `email` para introducir la dirección de correo electrónico del usuario.

- El formulario debe incluir un elemento `select` con la identificación `position` que permita a los usuarios seleccionar un puesto de trabajo.

- Debe tener un elemento `fieldset` con la clase `radio-group`.

- Dentro de `.radio-group` debe haber un conjunto de elementos `input` con el `type` `radio` y etiquetas relevantes para seleccionar las opciones de disponibilidad (por ejemplo, Tiempo completo, Tiempo parcial). El `name` del grupo debe ser `availability`.

- Debe haber un elemento `textarea` con el id `message` para introducir un mensaje.

- Debe asociar cada elemento `input` con un elemento de `label`.

- Debe tener un elemento de `button` con el `type` `submit` para enviar el formulario.

- Añada una pseudoclase `:focus` a los elementos `input` y `textarea` para cambiar el color del borde cuando se seleccionen.

- Los elementos `input`, selección y `textarea` deben tener una pseudoclase :invalid que cambie el color del borde a rojo cuando se detecte una entrada no válida.

- Los elementos `input`, `select` y `textarea` deben tener una pseudoclase `:valid` que cambie el color del borde a verde cuando se introduzca una entrada válida.

- El elemento `button` debe tener una pseudoclase `:hover` que cambie el color de fondo al pasar el cursor por encima.

- Utilice la pseudoclase :`checked` en `.radio-group input[type="radio"]` para añadir un color de borde, un color de fondo y una sombra de cuadro cuando se seleccione el botón de radio.

- Utilice la pseudoclase `:checked` en los botones de radio para cambiar el color del texto de la `label` asociada cuando se seleccione la opción.

- Añada una pseudoclase `:first-of-type` al elemento `input` para aplicar un estilo diferente al primer campo de entrada. (Por ejemplo, esquinas redondeadas).
  
Nota: Asegúrese de vincular su hoja de estilos en su HTML y aplicar su CSS.
