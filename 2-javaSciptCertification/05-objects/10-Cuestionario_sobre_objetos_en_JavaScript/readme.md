# Cuestionario sobre objetos en JavaScript

Para aprobar el cuestionario, debes responder correctamente al menos 18 de las 20 preguntas siguientes.

1. **¿Cuál de las siguientes opciones NO describe un objeto en JavaScript?**

    - [ ] a) Un tipo de datos no primitivo.
    - [x] b) Un tipo de datos primitivo. // ❎
    - [ ] c) Una colección de pares clave-valor.
    - [ ] d) Un contenedor de propiedades y métodos.

2. **¿Cuál de las siguientes definiciones de objeto no es válida?**

    - [ ] a) `const person = { "name": "nora" };`
    - [ ] b) `const book = { "pages": 255 };`
    - [x] c) `const product = { color: blue };` // ❎
    - [ ] d) `const car = { year: 2025 };`

3. **¿Cómo se puede acceder a la propiedad `job` de este objeto `person`?**

    ```js
    let person = { job: "Software Developer" };
    ```

    - [x] a) `person.job` // ❎
    - [ ] b) `preson -> job`
    - [ ] c) `person[job]`
    - [ ] d) `person#job`

4. **¿Cómo se puede acceder a la propiedad `street` del objeto `person` que aparece a continuación?**

    ```js
    const person = {
      address: {
        street: "sample-street"
      }
    };
    ```

    - [ ] a) `person -> address -> street`
    - [ ] b) `person#address#street`
    - [x] c) `person["address"]["street"]` // ❎
    - [ ] d) `person[address.street]`

5. **¿A cuál de estas claves de propiedad solo se puede acceder mediante la notación entre corchetes?**

    - [ ] a) Una clave de propiedad anidada en varios niveles de un objeto.
    - [ ] b) Una clave de propiedad conocida y estática.
    - [x] c) Una clave de propiedad dinámica. // ❎
    - [ ] d) Una clave de propiedad que podría no existir en el objeto.

6. **¿Cuál de las siguientes opciones utiliza correctamente la desestructuración para acceder a la propiedad `name` del objeto `person` que aparece a continuación?**

    ```js
    const person = { name: "John" }
    ```

    - [ ] a) `const name = person["name"];`
    - [ ] b) `const name = person.name;`
    - [ ] c) `const { ...name } = person;`
    - [x] d) `const { name } = person;` // ❎

7. **¿Cuál de las siguientes opciones utiliza correctamente la desestructuración para acceder a la propiedad `flour` del objeto `recipe` que aparece a continuación?**

    ```js
    const recipe = {
      ingredients: {
        flour: "2 cups",
        sugar: "1 cup"
      }
    };
    ```

    - [x] a) `const { ingredients: { flour } } = recipe;` // ❎
    - [ ] b) `const flour = recipe["ingredients"]["flour"];`
    - [ ] c) `const { ingredients: flour } = recipe;`
    - [ ] d) `const flour = recipe.ingredients.flour;`

8. **¿Cómo se puede asignar un valor predeterminado a la clave de una propiedad al utilizar la desestructuración en JavaScript?**

    - [ ] a) `const key = object.key && "defaultValue";`
    - [ ] b) `const { key: "defaultValue" } = object;`
    - [ ] c) `const key = object.key || "defaultValue";`
    - [x] d) `const { key = "defaultValue" } = object;` // ❎

9. **¿Cómo se puede comprobar si un objeto `car` tiene una propiedad `year`?**

    - [ ] a) `car.hasProperty("year");`
    - [ ] b) `car.hasOwnProperty(year);`
    - [x] c) `car.hasOwnProperty("year");` // ❎
    - [ ] d) `year.hasProperty("car");`

10. **¿Qué es un método de objeto?**

    - [ ] a) Una matriz asociada a un objeto.
    - [ ] b) Un número asociado a un objeto.
    - [ ] c) Una cadena asociada a un objeto.
    - [x] d) Una función asociada a un objeto. // ❎

11. **¿Cómo se puede llamar al método `add` de este objeto `calculator` para sumar los números `10` y `7`?**

    ```js
    const calculator = {
      add: function(a, b) {
        return a + b;
      }
    };
    ```

    - [ ] a) `calculator.call(add(10, 7));`
    - [ ] b) `add.calculator(10, 7);`
    - [ ] d) `calculator#add(10, 7);`
    - [x] c} `calculator.add(10, 7);` // ❎

12. **¿Qué operador elimina una propiedad de un objeto?**

    - [ ] a) `erase`
    - [ ] b) `remove`
    - [ ] c) `discard`
    - [x] d) `delete` // ❎

13. **¿Cómo se puede comprobar si una propiedad de `score` existe en un objeto de `player`?**

    - [ ] a) `score in player`
    - [ ] b) `player in score`
    - [ ] c) `player in "score"`
    - [x] d) `"score" in player` // ❎

14. **¿Cómo se crea un nuevo objeto vacío en JavaScript?**

    - [x] a) `new Object()` // ❎
    - [ ] b) `Object() new`
    - [ ] c) `object() new`
    - [ ] d) `new object()`

15. **¿Cuál es la sintaxis correcta para utilizar el encadenamiento opcional en JavaScript?**

    - [ ] a) `object.?key`
    - [x] b) `object?.key` // ❎
    - [ ] c) `object.["key"]`
    - [ ] d) `object?key`

16. **¿Para qué se utiliza el encadenamiento opcional en JavaScript?**

    - [ ] a) Se utiliza para definir variables con valores predeterminados.
    - [ ] b) Se utiliza para definir métodos opcionales dentro de un objeto que pueden llamarse o no.
    - [ ] c) Se utiliza para escribir código más conciso al encadenar varias llamadas a métodos en una sola instrucción.
    - [x] d) Se utiliza para acceder de forma segura a propiedades de un objeto que podrían ser `null` o `undefined`. // ❎

17. **¿Qué método se utiliza para convertir un objeto JavaScript en una cadena JSON?**

    - [x] a) `JSON.stringify()` // ❎
    - [ ] b) `Stringify.toJSON()`
    - [ ] c) `JSON.toObject()`
    - [ ] d) `Object.toJSON()`

18. **¿Qué método convierte un string JSON de nuevo en un objeto JavaScript?**

    - [ ] a) `SON.object()`
    - [x] b) `JSON.parse()` // ❎
    - [ ] c) `JSON.convert()`
    - [ ] d) `JSON.toObject()`

19. **¿Cuál de estas opciones accede a la propiedad `color` de un objeto `toy` utilizando la notación entre corchetes?**

    - [x] a) `toy["color"]` // ❎
    - [ ] b) `color[toy]`
    - [ ] c) `toy[color]`
    - [ ] d) `toy.color`

20. **¿Cómo se puede acceder al `home` de este objeto `learner` en JavaScript utilizando la notación de puntos?**

    ```js
    const learner = {
      name: "Nora",
      age: 45,
      contact: {
        email: "nora@email.com",
        phone: {
          home: "123-456-7890",
          work: "098-765-4321"
        }
      }
    };
    ```

    - [ ] a) `learner.contact.home`
    - [ ] b) `learner.name.phone.home`
    - [x] c) `learner.contact.phone.home` // ❎
    - [ ] d) `learner.email.work`
