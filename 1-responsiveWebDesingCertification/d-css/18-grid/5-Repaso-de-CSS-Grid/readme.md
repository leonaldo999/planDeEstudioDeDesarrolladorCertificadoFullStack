# Repaso de CSS Grid

En esta sección, repasaremos los conceptos básicos de CSS Grid, un sistema de diseño bidimensional que permite crear diseños complejos en páginas web. CSS Grid es una herramienta poderosa para diseñar layouts de manera eficiente y flexible, y es esencial para cualquier desarrollador web que quiera crear sitios modernos y responsivos.

## Conceptos básicos de CSS Grid

- **Definición**: CSS Grid es un sistema de diseño bidimensional que se utiliza para crear diseños complejos en páginas web. Las cuadrículas constan de filas y columnas con espacios entre ellas. Para definir un diseño de cuadrícula, hay que establecer la propiedad `display` en `grid`.

  - **Codigo ejemplo**

    ```css
    .container {
      display: grid;
    }
    ```

- **La unidad `fr` (fraccional)**: Esta unidad representa una fracción del espacio dentro del contenedor de la cuadrícula. Puedes usar la unidad `fr` para crear cuadrículas flexibles.

- **Creación de espacios entre pistas**: Hay tres formas de crear espacios entre pistas en la cuadrícula CSS. Puedes usar la propiedad `column-gap` para crear espacios entre columnas. Puedes usar la propiedad `row-gap` para crear espacios entre filas. O puedes usar la propiedad abreviada `gap` para crear espacios tanto entre filas como entre columnas.

- `grid-template-columns`: Se utiliza para establecer los nombres de las líneas y el tamaño de las columnas de la pista de la cuadrícula.

  - **Codigo ejemplo**

    ```css
    .container {
      display: grid;
      width: 100%;
      grid-template-columns: 30px 1fr;
    }
    ```
  
- `grid-template-rows`: Se utiliza para definir los nombres y el tamaño de las filas de la cuadrícula.

- `grid-auto-flow`: Determina cómo se ajustan en la cuadrícula los elementos colocados automáticamente.

  - **Codigo ejemplo**

    ```css
    .container {
      display: grid;
      width: 100%;
      grid-auto-flow: column;
    }
    ```

- `grid-auto-columns`: Se utiliza para establecer el tamaño de las columnas creadas de forma implícita.

  - **Codigo ejemplo**

    ```css
    .container {
      display: grid;
      width: 100%;
      grid-auto-columns: auto;
    }
    ```

- `place-items`: Se utiliza para alinear elementos tanto en dirección de bloque como en línea.

- `align-items`: Se utiliza para establecer la alineación de los elementos dentro de un contenedor de cuadrícula.

- **Función `repeat()`**: Esta función se utiliza para repetir secciones en la lista de pistas. En lugar de escribir `grid-template-columns: 1fr 1fr 1fr;`, puedes utilizar la función `repeat()`.

  - **Codigo ejemplo**

    ```css
    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    ```

- Cuadrícula explícita: Puedes especificar el número de líneas o pistas mediante las propiedades `grid-template-columns` o `grid-template-rows`.

- Cuadrícula implícita: Cuando se colocan elementos fuera de la cuadrícula, se crean automáticamente filas y columnas para esos elementos externos.

- Función `minmax()`: Esta función se utiliza para establecer los tamaños mínimo y máximo de una pista.

  - **Codigo ejemplo**

    ```css
    .container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: minmax(150px, auto);
    }
    ```

- **Posicionamiento basado en líneas**: Todas las cuadrículas tienen líneas. Para especificar dónde comienza el elemento en una línea, puedes usar las propiedades `grid-column-start` y `grid-row-start`. Para especificar dónde termina el elemento en la línea, puedes usar las propiedades `grid-column-end` y `grid-row-end`. También puedes optar por usar las propiedades abreviadas `grid-column` o `grid-row`.

  A continuación se muestra un ejemplo del uso de la propiedad `grid-column` para hacer que un elemento se extienda a lo largo de todas las columnas.

  - **Codigo ejemplo**

    ```css
    .element {
      grid-column: 1 / -1;
    }
    ```

- `grid-template-areas`: Esta propiedad se utiliza para asignar un nombre a los elementos que se van a colocar en la cuadrícula.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">

    <div class="container">
      <div class="header">Header</div>
      <div class="sidebar">Sidebar</div>
      <div class="main">Main Content</div>
      <div class="footer">Footer</div>
    </div>
    
    ```

    ```css
    .container {
      display: grid;
      grid-template-columns: 200px 1fr; 
      grid-template-rows: auto 1fr auto; 
      grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer"; 
      gap: 20px; 
    }
    
    .header {
      grid-area: header; 
      background-color: #4CAF50;
      padding: 10px;
      color: white;
    }
    
    .sidebar {
      grid-area: sidebar;
      background-color: #f4f4f4;
      padding: 10px;
    }
    
    .main {
      grid-area: main; 
      background-color: #e0e0e0;
      padding: 10px;
    }
    
    .footer {
      grid-area: footer; 
      background-color: #4CAF50;
      padding: 10px;
      color: white;
    }
    ```

## Depuración de CSS

- **DevTools (Herramientas de desarrollador)**: DevTools te permite inspeccionar y modificar tu CSS en tiempo real. El panel "Styles" muestra todas las reglas CSS aplicadas al elemento seleccionado, incluidos los estilos heredados. Puedes activar y desactivar propiedades individuales, editar valores e incluso añadir nuevas reglas directamente en el navegador. Esta respuesta inmediata resulta increíblemente útil para experimentar con diferentes estilos sin modificar tu código fuente.

- **Validadores de CSS**: Los validadores se utilizan para comparar tu CSS con las especificaciones oficiales e informar de cualquier error o advertencia. Un validador popular que puedes utilizar es el validador de CSS del W3C.

- **Depuración de diseños adaptativos**: DevTools tiene una opción que te permite simular cómo se ve tu sitio en diferentes tamaños de pantalla y dispositivos. Esto puede ayudarte a identificar problemas de puntos de ruptura o estilos que no se adaptan bien a diferentes tamaños de ventana gráfica.
