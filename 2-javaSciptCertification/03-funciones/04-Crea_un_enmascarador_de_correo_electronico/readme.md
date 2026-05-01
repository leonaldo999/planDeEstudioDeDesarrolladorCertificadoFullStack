# Crea un enmascarador de correo electrónico

*En este laboratorio, ocultarás el nombre de usuario de una dirección de correo electrónico con asteriscos. El enmascaramiento es un término que se utiliza para ocultar o reemplazar información confidencial con asteriscos u otros caracteres.*

Por ejemplo, si la dirección de correo electrónico era `myEmail@email.com`, entonces la dirección de correo electrónico enmascarada será `m*****l@email.com`.

> [!NOTE]
> Objetivo: Cumplir con las historias de usuario que se detallan a continuación y lograr que todas las pruebas se superen para completar el laboratorio.

## Historias de usuario

- Crea una función llamada `maskEmailque` tome `email` como argumento.

- Dentro de la función, debes enmascarar `email` y agregarle el nombre de dominio. Recuerda que puedes usar métodos como `slice`, `repeat`, `indexOf` o incluso `replace` para ayudarte.

- Fuera de la función, declara una variable con un nombre específico `email` almacenar la dirección de correo electrónico que deseas ocultar.

- Llama a la función `maskEmail` con la variable `email` y muestra el resultado en la consola.

- `maskEmail("apple.pie@example.com")` debería regresar `"a*******e@example.com"`.

- `maskEmail("freecodecamp@example.com")` debería regresar `"f**********p@example.com"`.

- `maskEmail("info@test.dev")` debería regresar `"i**o@test.dev"`.

- `maskEmail("user@domain.org")` debería regresar `"u**r@domain.org"`.
