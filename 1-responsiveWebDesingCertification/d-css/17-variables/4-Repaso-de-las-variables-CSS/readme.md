# Repaso de las variables CSS

Repasaremos el uso de variables CSS, también conocidas como propiedades personalizadas de CSS, para crear estilos reutilizables y mantener un código más limpio. Las variables CSS nos permiten definir valores que pueden ser reutilizados en todo el documento, lo que facilita la gestión de estilos y la creación de temas personalizados.

---

## Propiedades personalizadas de CSS (variables CSS)

- **Definición**: Las propiedades personalizadas de CSS, también conocidas como variables CSS, son entidades definidas por los autores de CSS que contienen valores específicos para ser reutilizados en todo el documento. Se trata de una potente función que permite crear hojas de estilo más eficientes, fáciles de mantener y flexibles. Las propiedades personalizadas resultan especialmente útiles para crear diseños personalizables. Puedes definir un conjunto de propiedades para diferentes temas:

  - **Codigo ejemplo**

    ```css
    :root {
      --bg-color: white;
      --text-color: black;
    }
    
    .dark-theme {
      --bg-color: #333;
      --text-color: white;
    }
    
    body {
      background-color: var(--bg-color);
      color: var(--text-color);
    }
    ```

## La regla `@property`

- **Definición**: La regla `@property` es una potente función de CSS que permite a los desarrolladores definir propiedades personalizadas con un mayor control sobre su comportamiento, incluyendo cómo se animan y sus valores iniciales.

  - **Codigo ejemplo**

    ```css
    @property --property-name {
      syntax: '<type>';
      inherits: true | false;
      initial-value: <value>;
    }
    ```

- `--property-name`: Este es el nombre de la propiedad personalizada que estás definiendo. Al igual que todas las propiedades personalizadas, debe comenzar con dos guiones.
`syntax`: Define el tipo de la propiedad, que puede ser, por ejemplo, `<color>`, `<length>`, `<number>`, `<percentage>` o tipos más complejos.

- `inherits`: Esto especifica si la propiedad debe heredar su valor del elemento padre.

- `initial-value`: Esto establece el valor predeterminado de la propiedad.

- **Ejemplo de degradado utilizando la regla `@property`**: Este ejemplo crea un degradado que se anima suavemente al pasar el cursor sobre el elemento.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">

    <div class="gradient-box"></div>
    ```

    ```css
    @property --gradient-angle {
      syntax: "<angle>";
      inherits: false;
      initial-value: 0deg;
    }
    
    .gradient-box {
      width: 100px;
      height: 100px;
      background: linear-gradient(var(--gradient-angle), red, blue);
      transition: --gradient-angle 0.5s;
    }
    
    .gradient-box:hover {
      --gradient-angle: 90deg;
    }
    ```

- **Valores de reserva (`Fallbacks`)**: Al utilizar la propiedad personalizada, puedes proporcionar un valor de reserva mediante la función `var()`, tal como lo harías con las propiedades personalizadas estándar:

  - **Codigo ejemplo**

    ```css
    .button {
      background-color: var(--main-color, #3498db);
    }
    ```
