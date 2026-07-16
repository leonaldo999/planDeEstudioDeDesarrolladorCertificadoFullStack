# Crea un motor de remezclas de listas de reproducción

En este laboratorio, crearás un programa que genere una única lista de reproducción remezclada a partir de varias listas de reproducción enviadas por los oyentes.

Cada oyente proporciona una lista de canciones que quiere escuchar. Algunas canciones pueden aparecer más de una vez, y algunos artistas pueden aparecer demasiadas veces. Tu tarea consiste en procesar estas listas de reproducción paso a paso: combinarlas en una sola lista, calificar cada canción, eliminar las canciones duplicadas, limitar la frecuencia con la que aparece el mismo artista y, luego, crear un orden de reproducción final.

---

## Historias de usuario

1. Debes crear una función llamada `flattenPlaylists` que acepte un array de listas de reproducción, donde cada lista de reproducción sea un array de objetos con las siguientes propiedades: `trackId`, `artist`, `title`, `votes` y `bpm`. Si la entrada no es un array, `flattenPlaylists` debe devolver un array vacío. Se te ha proporcionado una lista de reproducción de ejemplo. Puedes usar este ejemplo para probar tu función.

2. `flattenPlaylists` debe devolver un array plano de objetos de pista, en el que cada objeto incluya todas las propiedades originales de la pista, además de una propiedad `source` establecida como un array con el índice de la lista de reproducción y el índice de la pista, lo cual indica de dónde proviene la pista.

3. Debes crear una función llamada `scoreTracks` que acepte un array de objetos track tal como los devuelve `flattenPlaylists` (cada uno con las propiedades `trackId`, `artist`, `title`, `votes`, `bpm` y `source`) y que devuelva un nuevo array de objetos track, cada uno con una propiedad score agregada mediante la fórmula: `votes * 10 - Math.abs(bpm - 120)`.

4. Debes crear una función llamada `dedupeTracks` que acepte un array de objetos de pista como el que devuelve `scoreTracks` y devuelva un nuevo array del que se hayan eliminado las entradas con `trackId` duplicadas, conservando solo la primera aparición de cada una.

5. Debes crear una función llamada `enforceArtistQuota` que acepte un array de objetos de pista como el que devuelve `dedupeTracks` y un número que represente el máximo de apariciones permitidas por artista. La función debe devolver un nuevo array en el que ningún artista aparezca más veces que el número dado, conservando las primeras apariciones.

6. Debes crear una función llamada `buildSchedule` que acepte un array de objetos de pista devuelto por `enforceArtistQuota` y devuelva un nuevo array de objetos `{ slot, trackId }`, donde `slot` es un índice basado en 1 que representa la posición de cada pista en el orden de transmisión.

7. Debes crear una función llamada `remixPlaylist` que acepte un array de listas de reproducción y el número máximo de apariciones permitidas por artista. La función debe devolver el horario de transmisión final como un array de objetos `{ slot, trackId }`, llamando a `flattenPlaylists`, `scoreTracks`, `dedupeTracks`, `enforceArtistQuota` y `buildSchedule` en ese orden.

---

## Solucíon

```js
// Crea un motor de remezclas de listas de reproducción
const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) {
    return [];
  }

  let flatList = [];

  for (let i = 0; i < playlists.length; i++) {
    const currentPlaylist = playlists[i];

    for (let j = 0; j < currentPlaylist.length; j++) {
      const trackCopy = { ...currentPlaylist[j], source: [i, j] };
      flatList.push(trackCopy);
    }
  }

  return flatList;
}

function scoreTracks(tracks) {
  let scoredList = [];

  for (let i = 0; i < tracks.length; i++) {
    const trackCopy = {
      ...tracks[i],
      score: tracks[i].votes * 10 - Math.abs(tracks[i].bpm - 120)
    };
    scoredList.push(trackCopy);
  }

  return scoredList;
}

function dedupeTracks(tracks) {
  let uniqueTracks = [];

  for (let i = 0; i < tracks.length; i++) {
    let existe = false;

    for (let j = 0; j < uniqueTracks.length; j++) {
      if (tracks[i].trackId === uniqueTracks[j].trackId) {
        existe = true;
      }
    }

    if (existe === false) {
      uniqueTracks.push(tracks[i]);
    }
  }

  return uniqueTracks;
}

function enforceArtistQuota(tracks, maxQuota) {
  let quotaList = [];

  for (let i = 0; i < tracks.length; i++) {
    let count = 0;

    for (let j = 0; j < quotaList.length; j++) {
      if (tracks[i].artist === quotaList[j].artist) {
        count++;
      }
    }

    if (count < maxQuota) {
      quotaList.push(tracks[i]);
    }
  }

  return quotaList;
}

function buildSchedule(tracks) {
  let schedule = [];

  for (let i = 0; i < tracks.length; i++) {
    schedule.push({
      slot: i + 1,
      trackId: tracks[i].trackId
    });

  }

  return schedule;
}

function remixPlaylist(playlists, maxQuota) {
  let flat = flattenPlaylists(playlists);
  let scor = scoreTracks(flat);
  let dedupe = dedupeTracks(scor);
  let enforce = enforceArtistQuota(dedupe, maxQuota);
  let build = buildSchedule(enforce);

  return build;
}

// 1. Llamamos a la función con un límite de 1 canción por artista
let resultadoFinal = remixPlaylist(playlists, 1);

// 2. Mostramos el resultado en la consola
console.log("--- Horario de Transmisión Final ---");
console.log(resultadoFinal);

```
