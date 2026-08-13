# Crea una aplicación generadora de contraseñas

En este laboratorio, practicarás el uso de funciones al crear un generador de contraseñas aleatorias.

---

## Historias de usuario

1. Debes crear una función llamada `generatePassword` que tome un parámetro que indique la longitud de la contraseña generada. Puedes nombrar el parámetro como quieras.

2. Tu función debe devolver una cadena que represente una contraseña generada al azar. Debes utilizar la siguiente cadena y diferentes métodos de `Math` para ayudarte a devolver una nueva cadena con caracteres aleatorios: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()`.

3. Debes definir una variable llamada `password` y asignarle el resultado de llamar a la función `generatePassword` con un argumento numérico que represente la longitud deseada de la contraseña.

4. Debes incluir un `console.log` que registre una sola cadena formada al concatenar el mensaje `Generated password:` y la variable `password`, separadas por un espacio.

---

## Solucíon

```js
// Crea una aplicación generadora de contraseñas
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generatePassword(length) {
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

const password = generatePassword(12);

console.log("Generated password: " + password);
```
