# Crear una pantalla de video usando iframe

---

## Paso 1

En este taller, utilizará el elemento `iframe` para mostrar un video. Se ha preparado para usted el código HTML básico.

> Comience creando un elemento `h1` con el texto `iframe Video Display`.

- **Codigo**

  ```html
  <h1>iframe Video Display</h1>
  ```

---

## Paso 2

> Ahora, crea un elemento `iframe`. No pongas nada en él todavía.

- **Codigo**

  ```html
  <h1>iframe Video Display</h1>
  <iframe></iframe>
  ```

---

## Paso 3

En la primera lección sobre el elemento `iframe`, aprendiste que es un elemento reemplazado, al igual que `img`. Eso significa que también puede tomar las propiedades de `width` y `height` para determinar cuánto debe medir.

> Dale a tu elemento `iframe` un `width` de `560` y un `height` de `315`.

- **Codigo**

  ```html
  <h1>iframe Video Display</h1>
  <iframe width="560" height="315"></iframe>
  ```

---

## Paso 4

El elemento `iframe` también toma un atributo `src` con un valor que indica la URL o la ruta del recurso que se va a mostrar.

> Agregue un atributo `src` de `<https://www.youtube.com/embed/I0_951_MPE0>` a su elemento `iframe`.

En este punto, debería ver el video en la página, pero hay algunos atributos más que debe agregar.

- **Codigo**

  ```html
  <h1>iframe Video Display</h1>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/I0_951_MPE0"
    >
    </iframe>
  ```

---

## Paso 5

Uno de los atributos es `allow`. Es como una lista de permisos que le indica al navegador qué funciones puede utilizar el `iframe`.

A continuación se muestra un elemento `iframe` con el atributo `allow`:

- **Codigo Ejemplo**

  ```html
  <iframe
  allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share"
  ></iframe>
  ```

> Agregue el atributo `allow` con los valores `accelerometer`, `autoplay`, y `clipboard-write`.

El `accelerometer` permite que el `iframe` utilice sensores de movimiento para detectar cosas como la inclinación y la rotación del dispositivo. `autoplay` permite que el video comience a reproducirse automáticamente, y `clipboard-write` permite que el `iframe` escriba datos en el portapapeles del usuario.

- **Codigo**

  ```html
  <h1>iframe Video Display</h1>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/I0_951_MPE0"
    allow="accelerometer autoplay clipboard-write"
    >
    </iframe>
  ```

---

## Paso 6

> Agregue `encrypted-media`, `gyroscope` y `web-share` a los valores existentes en el atributo `allow`.

Estos tres permitirán el uso de extensiones de medios cifrados para proteger el video, otorgarán acceso a los sensores de movimiento y orientación del dispositivo y permitirán compartir el contenido del iframe a través de los diálogos de compartir nativos del dispositivo.

- **Codigo**

  ```html
  <h1>iframe Video Display</h1>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/I0_951_MPE0"
    allow="accelerometer autoplay clipboard-write encrypted-media gyroscope web-share"
    >
    </iframe>
  ```

---

## Paso 7

El siguiente atributo que agregará es `referrerpolicy`. Es la regla que determina cuántos detalles comparte cuando su página se conecta a otra página.

> Agregue el atributo `referrerpolicy` y configúrelo en `strict-origin-when-cross-origin`. Esto comparte la dirección completa en el mismo sitio, solo el nombre del sitio en otros sitios y nada en sitios inseguros.

- **Codigo**

  ```html
  <h1>iframe Video Display</h1>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/I0_951_MPE0"
    allow="accelerometer autoplay clipboard-write encrypted-media gyroscope web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    >
    </iframe>
  ```

---

## Paso 8

> Por último, pero no menos importante, el atributo que agregarás es `allowfullscreen`. Como su nombre indica, permite ver el video en modo de pantalla completa.

- **Codigo**

  ```html
  <h1>iframe Video Display</h1>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/I0_951_MPE0"
    allow="accelerometer autoplay clipboard-write encrypted-media gyroscope web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    >
    </iframe>
  ```

---

**¡Con esto, el taller ha terminado!**
