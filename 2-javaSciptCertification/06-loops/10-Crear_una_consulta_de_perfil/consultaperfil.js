/* Crear una consulta de perfil */
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
