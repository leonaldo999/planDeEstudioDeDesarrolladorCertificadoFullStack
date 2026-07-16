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
