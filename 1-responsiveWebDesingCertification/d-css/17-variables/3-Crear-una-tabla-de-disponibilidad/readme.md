# Crear una tabla de disponibilidad

Esta tarea te ayudará a practicar el uso de variables CSS para crear una tabla de disponibilidad. La tabla mostrará la disponibilidad de personas en diferentes días de la semana y horas del día, utilizando colores para indicar el nivel de disponibilidad.

---

## Historias de usuario

1. Debes tener una tabla con al menos tres columnas y cinco filas, incluyendo los encabezados.

2. Las celdas de la primera fila deben ser encabezados de tabla que contengan los días de la semana.

3. Las celdas de la primera columna deben ser encabezados de tabla con la clase `time` y deben contener valores de hora como texto.

4. Todas las celdas de datos deben tener la clase `available-#`, donde `#` es un número del `0` al `5` que especifica el número de personas disponibles en ese momento.

5. En tu selector `:root`, debes definir seis variables CSS llamadas `--color#`, donde `#` es un número del `0` al `5`, y asignarles a cada una un valor de color. Usa estas variables para establecer el color de fondo de los elementos `.available-#` correspondientes.

6. En tu selector `:root`, debes definir variables CSS llamadas `--solid-border` y `--dashed-border`. Usa estas variables para aplicar estilo a los bordes inferiores de tus celdas de datos, alternando entre bordes sólidos y discontinuos según la fila. Asigna a las filas la clase `sharp` o `half` para aplicarles estilo.

7. Debes tener un elemento `div` con el `id` de `legend`. Debe contener un elemento `span` con el texto `Availability` y un elemento div con el `id` de `legend-gradient`.

8. Debes darle al elemento `#legend-gradient` un _degradado lineal_ que haga la transición entre todos los colores desde `--color0` hasta `--color5` con líneas marcadas.

**Nota: Asegúrate de vincular tu hoja de estilos en tu HTML para aplicar tu CSS.**
