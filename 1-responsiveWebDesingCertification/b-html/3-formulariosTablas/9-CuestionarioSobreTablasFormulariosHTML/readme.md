# Cuestionario sobre tablas y formularios HTML

El siguiente cuestionario pondrá a prueba tus conocimientos sobre tablas HTML, formularios y herramientas HTML de uso común.

Si te estás preparando para el examen, hay varios juegos de preguntas disponibles para practicar. Después de completar un cuestionario, puede volver a visitar esta página para acceder a un nuevo conjunto de preguntas.

*Para aprobar el cuestionario, debe responder correctamente al menos a 18 de las 20 preguntas siguientes.*

## Questionario

- **1.¿Cuál de los siguientes atributos se utiliza para especificar la URL a la que deben enviarse los datos del formulario?**

  - a) `lang`
  - b) `capture`
  - c) `accept`
  - d) `action` //correcto

- **2.¿Qué dos elementos se utilizan para especificar una fila y una cabecera de fila en una tabla?**

  - a) El elemento `tr` se utiliza para las filas y el elemento `th` para la cabecera. //correcto
  - b) El elemento `r` se utiliza para las filas y el elemento `thead` para la cabecera.
  - c) El elemento `row` se utiliza para las filas y el elemento `th` para la cabecera.
  - d) El elemento `tr` se utiliza para las filas y el elemento `head` para la cabecera.

- **3.¿Para qué sirve el elemento td?**

  - a) Se utiliza para fusionar dos columnas.
  - b) Se utiliza para definir una celda de tabla. //correcto
  - c) Se utiliza para fusionar dos filas.
  - d) Se utiliza para definir un tipo de datos de tabla.

- **4.¿Cuál es la función del atributo `colspan`?**

  - a) Define el número de columnas que debe abarcar una celda de la tabla. //correcto
  - b) Sirve para definir el número de columnas.
  - c) Elimina la línea de separación entre el texto de una columna.
  - d) Define la longitud de una columna en una tabla.

- **5.¿Cuál es la función del atributo `placeholder`?**

  - a) Se utiliza para especificar que un campo de entrada es de sólo lectura para el usuario.
  - b) Se utiliza para proporcionar una pista para un campo de entrada. //correcto
  - c) Se utiliza para asociar un elemento `label` a un elemento `input`.
  - d) Se utiliza para enviar datos al servidor cuando se envía el formulario.

- **6.¿Cuál es la finalidad del elemento `thead`?**

  - a) Se utiliza para agrupar el contenido del pie de página en una tabla HTML.
  - b) Se utiliza para agrupar el contenido de cabecera en una tabla HTML. //correcto
  - c) Se utiliza para agrupar la descripción de una tabla HTML.
  - d) Se utiliza para agrupar el contenido del cuerpo en una tabla HTML.

- **7.¿Cuál de los siguientes es un ejemplo de asociación de forma explícita entre etiquetas y entradas?**

  - a)

      ```html
      <label associate="age">Age:</label>
      <input type="number" id="age" name="age">
      ```

  - b)  //correcto

      ```html
      <label for="age">Age:</label>

      <input type="number" id="age" name="age">
      ```

  - c)

      ```html
      <label connect="age">Age:</label>

      <input type="number" id="age" name="age">
      ```

  - d)

      ```html
      <label explicit="age">Age:</label>

      <input type="number" id="age" name="age">
      ```

- **8.¿Para qué sirve un validador HTML?**

  - a) Un validador es una herramienta que aplica estilos a tu HTML.
  - b) Un validador es una herramienta que hace que tu código HTML funcione más rápido.
  - c) Un validador es una herramienta que comprueba la sintaxis del código HTML para garantizar su validez. //correcto
  - d) Un validador es una herramienta que formatea automáticamente su código HTML.

- **9.¿Qué elemento se utiliza para definir una celda en una tabla?**

  - a) `tcol`
  - b) `td` //correcto
  - c) `tc`
  - d) `th`

- **10.¿Cuál de las siguientes es una herramienta que permite inspeccionar y modificar la estructura HTML de una página web?**

  - a) DOM tester.
  - b) DOM validation.
  - c) DOM removal.
  - d) DOM inspector. //correcto

- **11.¿Cuál de las siguientes es la forma correcta de agrupar campos de entrada relacionados?**

  - a)  //correcto

      ```html
      <form>
        <fieldset>
          <legend>User information</legend>
      
          <label for="name">Name: </label>
          <input type="text" id="name" />
      
          <label for="email">Email: </label>
          <input type="email" id="email" />
        </fieldset>
      </form>
      ```

  - b)

      ```html
      <form>
        <fieldset>
          <title>User information</title>
      
          <label for="name">Name: </label>
          <input type="text" id="name" />
      
          <label for="email">Email: </label>
          <input type="email" id="email" />
        </fieldset>
      </form>
      ```

  - c)

      ```html
      <form>
        <span>
          <p>User information</p>
      
          <label for="name">Name: </label>
          <input type="text" id="name" />
      
          <label for="email">Email: </label>
          <input type="email" id="email" />
        </span>
      </form>
      ```

  - d)

      ```html
      <form>
        <fieldset>
          <caption>User information</caption>
      
          <label for="name">Name: </label>
          <input type="text" id="name" />
      
          <label for="email">Email: </label>
          <input type="email" id="email" />
        </fieldset>
      </form>
      ```

- **12.¿Cuál de las siguientes opciones se utiliza para especificar que un campo de entrada es de sólo lectura?**

  - a) `readonly` //correcto
  - b) `readInputOnly`
  - c) `only-read`
  - d) `read-only`

- **13.¿Qué atributo especifica que una entrada debe rellenarse antes de enviar el formulario?**

  - a) `obligatory`
  - b) `essential`
  - c) `necessary`
  - d) `required` //correcto

- **14.¿Para qué sirven las Devtools?**

  - a) Estas herramientas están integradas directamente en el navegador y se utilizan para ayudarle a garantizar una cobertura de pruebas del 100% para su código.
  - b) Estas herramientas están integradas directamente en el navegador y se utilizan para formatear automáticamente el código.
  - c) Estas herramientas están integradas directamente en el navegador y sirven para detectar problemas de linting en el código.
  - d) Estas herramientas están integradas directamente en el navegador y sirven para ayudarle a depurar, perfilar y analizar páginas web. //correcto

- **15.¿Cuál de las siguientes es la forma correcta de desactivar una entrada?**

  - a)

      ```html
      <input type="checkbox" disabledInput />
      ```

  - b)

      ```html
      <input type="checkbox" disabling />
      ```

  - c)

      ```html
      <input type="checkbox" inputDisabled />
      ```

  - d)  //correcto

      ```html
      <input type="checkbox" disabled />
      ```

- **16.¿Cuál de los siguientes es un valor válido para el atributo `type`?**

  - a)

      ```html
      <input type="time" />
      ```

  - b)  //correcto

      ```html
      <input type="email" />
      ```

  - c)

      ```html
      <input type="action" />
      ```

  - d)

      ```html
      <input type="capture" />
      ```

- **17.¿Cuál de los siguientes es el uso correcto del atributo `size`?**

  - a)

      ```html
      <input id="fullName" type="text" size="large" />
      ```

  - b)

      ```html
      <input id="fullName" type="text" size=".001" />
      ```

  - c)

      ```html
      <input id="fullName" type="text" size="10vh" />
      ```

  - d)  //correcto

      ```html
      <input id="fullName" type="text" size="10" />
      ```

- **18.¿Cuál de los siguientes atributos se utiliza para especificar el número mínimo y máximo de caracteres necesarios en un campo de entrada?**

  - a) `minimumLen` and `maximumLen`
  - b) `min` and `max`
  - c) `minlength` and `maxlength` //correcto
  - d) `minlen` and `maxlen`

- **19.¿Cuál de los siguientes ejemplos de botones NO utiliza un valor correcto para el atributo `type`?**

  - a)

      ```html
      <button type="submit">Submit</button>
      ```

  - b)

      ```html
      <button type="button">Example Button</button>
      ```

  - c)  //correcto

      ```html
      <button type="btn">Example Btn</button>
      ```

  - d)

      ```html
      <button type="reset">Reset</button>
      ```

- **20.¿Cuál de los siguientes atributos se utiliza para especificar el valor de un botón?**

  - a) `buttonValue`
  - b) `btnVal`
  - c) `val`
  - d) `value` //correcto
