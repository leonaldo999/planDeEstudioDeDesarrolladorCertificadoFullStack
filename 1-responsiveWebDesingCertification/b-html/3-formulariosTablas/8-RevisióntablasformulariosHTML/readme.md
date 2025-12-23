# Revisión de tablas y formularios HTML

Antes de que te pongan a prueba con los formularios, tablas y herramientas HTML, primero tienes que repasar los conceptos.

Abre esta página para repasar los elementos de `table`, `input` y `button`, así como las herramientas más utilizadas, como el validador de HTML, entre otras.

## Elementos y atributos de los formularios HTML

- **elemento de `form`**: se utiliza para crear un formulario *HTML* para la entrada de datos por parte del usuario.

- **atributo de `action`**: se utiliza para especificar la *URL* a la que se deben enviar los datos del formulario.

- **atributo de `method`**: se utiliza para especificar el `method` *HTTP* que se debe utilizar al enviar los datos del formulario. Los métodos más comunes son `GET` y `POST`.

```html
<form method="value-goes-here" action="url-goes-here">
  <!-- inputs go inside here -->
</form>
```

- **elemento `input`**: utilizado para crear un campo de entrada para la entrada del usuario.

- **atributo `type`**: utilizado para especificar el tipo de campo de entrada. Por ejemplo, `text`, `email`, `number`, `radio`, `checkbox`, etc.

- **atributo `placeholder`**: se utiliza para mostrar una sugerencia al usuario para mostrarle lo que debe introducir en el campo de entrada.

- **atributo `value`**: se utiliza para especificar el valor de la entrada. Si la entrada es de tipo `button`, el atributo `value` puede utilizarse para establecer el texto del botón.

- **atributo `size`**: se utiliza para definir el número de caracteres que deben ser visibles cuando el usuario escribe en la entrada.

- **atributo `min`**: puede utilizarse con tipos de entrada como `number` para especificar el valor mínimo permitido en el campo de entrada.

- **atributo `max`**: puede utilizarse con tipos de entrada como `number` para especificar el valor máximo permitido en el campo de entrada.

- **atributo `minlength`**: se utiliza para especificar el número mínimo de caracteres necesarios en un campo de entrada.

- **atributo `maxlength`**: se utiliza para especificar el número máximo de caracteres permitidos en un campo de entrada.

- **atributo `required`**: se utiliza para especificar que un campo de entrada debe rellenarse antes de enviar el formulario.

- **atributo `disabled`**: se utiliza para especificar que un campo de entrada debe estar deshabilitado.

- **atributo `readonly`**: se utiliza para especificar que un campo de entrada es de sólo lectura.

```html
<!-- Text input -->
<input 
  type="text"
  id="name"
  name="name"
  placeholder="e.g. Quincy Larson" 
  size="20"
  minlength="5"
  maxlength="30"
  required
/>

<!-- Number input -->
<input 
  type="number"
  id="quantity"
  name="quantity"
  min="2"
  max="10"
  disabled
/>

<!-- Button -->
<input type="button" value="Show Alert" />
```

- **elemento `label`**: se utiliza para crear una etiqueta para un campo de entrada.

- **atributo `for`**: se utiliza para especificar para qué campo de entrada es la etiqueta.

- **Asociación implícita de formularios**: las entradas pueden asociarse a etiquetas envolviendo el campo de entrada dentro del elemento `label`.

```html
<form action="">
  <label>
    Full Name:
    <input type="text" />
  </label>
</form>
```

- **Asociación explícita de formularios:** las entradas pueden asociarse a etiquetas mediante el atributo for del elemento `label`.

```html
<form action="">
  <label for="email">Email Address: </label>
  <input type="email" id="email" />
</form>
```

- **elemento `button`**: se utiliza para crear un botón en el que se puede hacer clic. Un botón también puede tener un atributo `type`, que se utiliza para controlar el comportamiento del botón cuando se activa. Ej. `submit`, `reset`, `button`.

```html
<button type="button">Show Form</button>
<button type="submit">Submit Form</button>
<button type="reset">Reset Form</button>
```

- **elemento `fieldset`**: se utiliza para agrupar entradas relacionadas.

- **elemento `legend`**: se utiliza para añadir una leyenda que describa el grupo de entradas.

```html
<!-- Radio group -->
<fieldset>
  <legend>Was this your first time at our hotel?</legend>

  <label for="yes-option">Yes</label>
  <input id="yes-option" type="radio" name="hotel-stay" />

  <label for="no-option">No</label>
  <input id="no-option" type="radio" name="hotel-stay" />
</fieldset>

<!-- Checkbox group -->
<fieldset>
  <legend>
    Why did you choose to stay at our hotel? (Check all that apply)
  </legend>

  <label for="location">Location</label>
  <input type="checkbox" id="location" name="location" value="location" />

  <label for="price">Price</label>
  <input type="checkbox" id="price" name="price" value="price" />
</fieldset>
```

- **Estado enfocado**: es el estado de un campo de entrada cuando es seleccionado por el usuario.

---

## Trabajar con elementos y atributos de tablas HTML

- **Elemento `Table`**: se utiliza para crear una tabla HTML.

- **Elemento Cabecera de Tabla (`thead`)**: se utiliza para agrupar el contenido de la cabecera en una tabla HTML.

- **Elemento Fila de Tabla (`tr`)**: sirve para crear una fila en una tabla HTML.

- **Elemento encabezado de tabla (`th`)**: sirve para crear una celda de encabezado en una tabla HTML.

- **Elemento cuerpo de tabla (`tbody`)**: sirve para agrupar el contenido del cuerpo de una tabla HTML.

- **Elemento celda de datos de tabla (`td`)**: sirve para crear una celda de datos en una tabla HTML.

- **Elemento pie de tabla (`tfoot`)**: se utiliza para agrupar el contenido del pie de una tabla HTML.

- **elemento `caption`**: se utiliza para añadir un título a una tabla HTML.

- **atributo `colspan`**: se utiliza para especificar el número de columnas que debe abarcar una celda de tabla.

```html
<table>
  <caption>Exam Grades</caption>

  <thead>
    <tr>
      <th>Last Name</th>
      <th>First Name</th>
      <th>Grade</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Davis</td>
      <td>Alex</td>
      <td>54</td>
    </tr>

    <tr>
      <td>Doe</td>
      <td>Samantha</td>
      <td>92</td>
    </tr>

    <tr>
      <td>Rodriguez</td>
      <td>Marcus</td>
      <td>88</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="2">Average Grade</td>
      <td>78</td>
    </tr>
  </tfoot>
</table>
```

## Trabajar con herramientas HTML

- **Validador `HTML`**: herramienta que comprueba la sintaxis del código HTML para garantizar su validez.

- **Inspector `DOM`**: herramienta que permite inspeccionar y modificar la estructura HTML de una página web.

- **Devtools**: conjunto de herramientas para desarrolladores web integradas directamente en el navegador que te ayudan a depurar, perfilar y analizar páginas web.
