# Crear una consulta de perfil

En este laboratorio, crearás una consulta de perfil que busque información sobre personas en una lista de contactos.

Para este ejemplo, imagina que hay un contacto llamado *Akira Laine*; la consulta `lookUpProfile("Akira", "lastName")` debería devolver `Laine`.

---

## Historias de usuario

1. Debes crear una función llamada `lookUpProfile` que tome un *nombre* y una *propiedad* como argumentos.

2. Debes recuperar la información de contacto del array proporcionado `contacts`.

3. Si la función recibe un nombre de contacto y la propiedad existe en el contacto relacionado, entonces se debe devolver el valor de la propiedad.

4. Si el nombre pasado a la función no coincide con ningún contacto de la matriz de contactos, entonces la función debe devolver `"No such contact"`.

5. Si la propiedad no existe en un contacto encontrado, entonces la función debe devolver `"No such contact"`.

---

```js
let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Recorremos cada contacto en el array
  for (let i = 0; i < contacts.length; i++) {
    // Verificamos si el nombre coincide con el firstName del contacto
    if (contacts[i].firstName === name) {
      // Si el contacto existe, revisamos si la propiedad solicitada está en el objeto
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop]; // devolvemos el valor de la propiedad
      } else {
        return "No such property"; // propiedad no encontrada
      }
    }
  }
  // Si ningún contacto coincide con el nombre
  return "No such contact";
}

console.log(lookUpProfile("Akira", "lastName"));
// → "Laine"

console.log(lookUpProfile("Harry", "likes"));
// → ["Hogwarts", "Magic", "Hagrid"]

console.log(lookUpProfile("Sherlock", "age"));
// → "No such property"

console.log(lookUpProfile("Bob", "number"));
// → "No such contact"
```

---

## Cómo usar para estudiar

| Input | Propiedad | Resultado |
| --- | --- | --- |
| Akira | lastName | Laine |
| Akira | likes | ["Pizza", "Coding", "Brownie Points"] |
| Akira | email | "No such property" (error) |
| John | lastName | "No such contact" (error) |
