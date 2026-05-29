# Crear una colección de discos

_Estás creando una función que ayuda a gestionar una colección de álbumes musicales. La colección está organizada como un objeto que contiene varios álbumes, los cuales también son objetos. Cada álbum se representa en la colección con un `id` único como nombre de propiedad. Dentro de cada objeto de álbum, hay varias propiedades que describen información sobre el álbum. No todos los álbumes tienen la información completa._

---

La función `updateRecords` toma 4 argumentos representados por los siguientes parámetros de función:

- `records`: un objeto que contiene varios álbumes individuales

- `id`: un número que representa un álbum específico en el objeto `records`

- `prop`: una cadena que representa el nombre de la propiedad del álbum que se va a actualizar

- `value`: una cadena que contiene la información utilizada para actualizar la propiedad del álbum

**Objetivo**: Cumple con las historias de usuario que se indican a continuación y haz que todas las pruebas pasen para completar el laboratorio.

---

## Historias de usuario

1. Tu función siempre debe devolver el objeto de `records` completo.

2. Si `value` es un string vacío, elimina la propiedad `prop` indicada del álbum.

3. Si `prop` no es `tracks` y `value` no es un string vacío, asigna el `value` a la propiedad `prop` de ese álbum.

4. Si `prop` es `tracks` y `value` no es un string vacío, pero el álbum no tiene una propiedad `tracks`, crea una matriz vacía y agrega `value` a ella.

5. Si `prop` es `tracks` y `value` no es un string vacío, agrega `value` al final de la matriz `tracks` existente del álbum.

> [!NOTE]
> Se utiliza una copia del objeto `recordCollection` para las pruebas. Tu función no debe hacer referencia directa al objeto `recordCollection`, solo al parámetro de la función.

```js
// Configuración
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Cambia solo el código debajo de esta línea
function updateRecords(records, id, prop, value) {
  if (value === '') {
    delete records[id][prop];
  } else if (prop !== 'tracks') {
    records[id][prop] = value;
  } else {
    records[id][prop] = records[id][prop] || [];
    records[id][prop].push(value);
  }
  return records;
} 

// Cambia solo el código encima de esta línea
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");

```
