# Depurar un formulario de donación

Una organización benéfica local ha creado un sitio web con un formulario de donación, pero hay varios problemas que deben solucionarse. El formulario no es accesible y tiene algunos errores de sintaxis HTML.

Tu trabajo consiste en corregir todos los errores para que el formulario funcione correctamente y sea accesible para todos los usuarios. Completa los elementos de las historias de usuario que aparecen a continuación y haz clic en «Ejecutar las pruebas» para comprobar si has corregido todos los errores.

---

## Historias de usuario

- Los elementos `input` son elementos vacíos y no deben tener etiquetas de cierre. Elimina todas las etiquetas de cierre `</input>` del formulario.

- Añade elementos de `label` para cada campo de entrada del formulario, de modo que los usuarios sepan para qué sirve cada campo. El texto del `label` debe coincidir con lo que aparece actualmente junto a cada `input`.

- El tipo de entrada `Email Address:` debe ser un correo electrónico en lugar de texto.

- Debe asociar cada elemento de `label` con su elemento `input` correspondiente utilizando el atributo `for` en la `label` y un atributo `id` coincidente en la entrada.

- Agregue el atributo `required` a los campos `input` de texto, correo electrónico y número (pero no a la casilla de verificación ni al botón de envío) para garantizar que los usuarios rellenen la información requerida.
