# Construir un reproductor multimedia

En este laboratorio, construirás un reproductor multimedia.

Practicará con los elementos `audio` y `video`, el atributo `controls` y el atributo `aria-label`.

---

En los vídeos de las clases anteriores, se le presentó el trabajo con elementos de audio y vídeo. En este laboratorio, creará un reproductor multimedia que mostrará una pista de audio y vídeo con una transcripción.

Para el elemento de audio, tendrá que incluir un elemento de origen que se utiliza para especificar los medios de comunicación que se utilizan.

He aquí un ejemplo:

```html
<audio controls aria-label="descriptive label goes here">
  <source src="url-to-audio-goes-here" type="audio/mpeg">
</audio>
```

El elemento `source` también se puede utilizar en el elemento de `video` de esta manera:

```html
<video controls width="600" aria-label="descriptive label goes here">
  <source src="link-to-mp4-goes-here" type="video/mp4">
  <!-- Remaining code goes here -->  
</video>
```

Objetivo: Cumplir las siguientes historias de usuario y superar todas las pruebas para completar el laboratorio.

## Historias de usuarios

Debe tener un elemento h1 para el título principal de la página.
Debería tener tres elementos de sección.
Dentro del primer elemento de sección, debe tener un elemento h2 para el título de la canción que se está reproduciendo.
Debajo del elemento h2, debe tener un elemento audio con el atributo controls y el atributo aria-label.
Dentro del elemento audio, debes tener un elemento source con un atributo src que apunte a un archivo de audio y un atributo type. Puede utilizar esta URL de audio si lo desea: <https://cdn.freecodecamp.org/curriculum/js-music-player/sailing-away.mp3>
Dentro del segundo elemento de sección, debe tener un elemento h2 para el título del vídeo que se está reproduciendo.
Debajo del elemento h2, deberías tener un elemento video con controles, atributos width y un atributo aria-label.
Dentro del elemento de vídeo, debe tener un elemento fuente con un atributo src que apunte a un archivo de vídeo y un atributo type. Eres libre de usar la URL de este vídeo si quieres: <https://cdn.freecodecamp.org/curriculum/labs/What> is the map method and how does it work.mp4
Debajo del elemento source, deberías tener un elemento track con un atributo src apuntando a un archivo de subtítulos y un atributo kind, un atributo srclang y un atributo label.
Dentro del tercer elemento section, deberías tener un elemento h2 para el título de la sección, por ejemplo "Transcripción".
Debajo del elemento h2, debe haber un elemento p con la transcripción del vídeo.
