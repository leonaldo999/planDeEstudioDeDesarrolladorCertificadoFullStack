<!-- Taller -->

# Crea un registro de recetas

En este taller, crearás un registro de recetas utilizando objetos de JavaScript.

---

## Paso 1

> > Empieza por crear un array vacía llamado `recipes`. Este es el array al que más adelante irás añadiendo los objetos de receta.

- **Code**

  ```js
  /* Code */
  const recipes = [];
  /* Code */
  ```

---

## Paso 2

> > Crea un objeto llamado `recipe1`. Dentro del objeto `recipe1`, crea una propiedad `name` con el valor `Spaghetti Carbonara`.
>
> > También dentro del objeto `recipe1`, crea una propiedad `ingredients` cuyo valor sea un array. El array debe contener `spaghetti`, `Parmesan cheese`, `pancetta`, y `black peppe`.

- **Code**

  ```js
  const recipes = [];
  /* Code */
  const recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    
  };
  /* Code */
  ```

---

## Paso 3

> > Añade las siguientes propiedades al objeto `recipe1`:

| Propiedad | Valor |
| --- | --- |
| `cookingTime` | `22` |
| `totalIngredients` | `null` |
| `difficultyLevel` | `""` |

Las propiedades con valores `null` o cadenas vacías se actualizarán más tarde, una vez que las hayas calculado.

- **Code**

  ```js
  const recipes = [];
  const recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    /* Code */
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: ""
    /* Code */
  };
  ```

---

## Paso 4

> > Crea un objeto `recipe2` con las siguientes propiedades y valores:

| Propiedad | Valor |
| --- | --- |
| `name` | `Chicken Curry` |
| `ingredients` | `["chicken breast", "coconut milk", "curry powder", "onion", "garlic"]` |
| `cookingTime` | `42` |
| `totalIngredients` | `null` |
| `difficultyLevel` | `""` |

- **Code**

  ```js
  const recipes = [];
  const recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: ""
  };
  /* Code */
  const recipe2 = {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: ""
  }
  /* Code */
  ```

---

## Paso 5

> > Crea un objeto `recipe3` con las siguientes propiedades y valores:

| Propiedad | Valor |
| --- | --- |
| `name` | `Vegetable Stir Fry` |
| `ingredients` | `["broccoli", "carrot", "bell pepper"]` |
| `cookingTime` | `15` |
| `totalIngredients` | `null` |
| `difficultyLevel` | `""` |

- **Code**

  ```js
  const recipes = [];
  const recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: ""
  };
  const recipe2 = {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: ""
  }
  /* Code */
  const recipe3 = {
    name: "Vegetable Stir Fry",
    ingredients: ["broccoli", "carrot", "bell pepper"],
    cookingTime: 15,
    totalIngredients: null,
    difficultyLevel: ""
  }
  /* Code */
  ```

---

## Paso 6

Antes de continuar, deberías practicar cómo acceder a las propiedades de un objeto.

Para ello, puedes usar la notación del punto (`.`) o la de los corchetes (`[]`). Aquí tienes un ejemplo:

- **Example code**

  ```js
  const person = {
    name: "John",
    age: 30,
    job: "Software Engineer"
  };
  
  console.log(person.name); // John
  console.log(person['age']);  // 30
  ```

> > Accede a la propiedad `name` de `recipe1` y asígnala a la variable `recipe1Name`.
>
> > A continuación, accede a la propiedad `cookingTime` de `recipe2` y asígnala a la variable `recipe2CookingTime`.
>
> > Por último, accede a la propiedad `ingredients` de `recipe3` y asígnala a la variable `recipe3Ingredients`.
>
> > Asegúrate de que todas las variables que has creado se registren en la consola.

- **Code**

  ```js
  const recipes = [];
  const recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: ""
  };
  const recipe2 = {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: ""
  }
  const recipe3 = {
    name: "Vegetable Stir Fry",
    ingredients: ["broccoli", "carrot", "bell pepper"],
    cookingTime: 15,
    totalIngredients: null,
    difficultyLevel: ""
  }
  /* Code */
  const recipe1Name = recipe1.name;
  console.log(recipe1Name);
  
  const recipe2CookingTime = recipe2.cookingTime;
  console.log(recipe2CookingTime);
  
  const recipe3Ingredients = recipe3.ingredients;
  console.log(recipe3Ingredients);
  /* Code */
  ```

---

## Paso 7

> > Ahora debes añadir los tres objetos al array `recipes`. Para ello, puedes utilizar el método `push()`.
>
> > Utiliza el método `push()` para añadir todos los objetos `recipe` al array `recipes`. Asegúrate de añadir `recipe1`, `recipe2` y `recipe3` en ese orden.
>
> > Además, elimina las variables `recipe1Name`, `recipe2CookingTime` y `recipe3Ingredients`, así como las instrucciones `console.log` que registran esas variables.

- **Code**

  ```js
  const recipes = [];
  const recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: ""
  };
  const recipe2 = {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: ""
  }
  const recipe3 = {
    name: "Vegetable Stir Fry",
    ingredients: ["broccoli", "carrot", "bell pepper"],
    cookingTime: 15,
    totalIngredients: null,
    difficultyLevel: ""
  }
  /* Code */
  recipes.push(recipe1);
  recipes.push(recipe2);
  recipes.push(recipe3);
  /* Code */
  ```

---

## Paso 8

> > Crea una función `getTotalIngredients` que tome un único argumento, que represente un array con los ingredientes, y devuelva el número de ingredientes del array pasada a la función.

- **Code**

  ```js
  const recipes = [];
  const recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: ""
  };
  const recipe2 = {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: ""
  }
  const recipe3 = {
    name: "Vegetable Stir Fry",
    ingredients: ["broccoli", "carrot", "bell pepper"],
    cookingTime: 15,
    totalIngredients: null,
    difficultyLevel: ""
  }
  recipes.push(recipe1);
  recipes.push(recipe2);
  recipes.push(recipe3);
  /* Code */
  function getTotalIngredients(ingredients) {
    return ingredients.length;
  }
  /* Code */
  ```

---

## Paso 9

> > Crea una función `getDifficultyLevel` que tome como parámetro un número que indique el tiempo de cocción.
>
> > Si el tiempo de cocción es menor o igual a `30`, la función debe devolver `"easy"`. Si es menor o igual a `60`, la función debe devolver `"medium"`. De lo contrario, la función debe devolver `"hard"`.

- **Code**

  ```js
  const recipes = [];
  const recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: ""
  };
  const recipe2 = {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: ""
  }
  const recipe3 = {
    name: "Vegetable Stir Fry",
    ingredients: ["broccoli", "carrot", "bell pepper"],
    cookingTime: 15,
    totalIngredients: null,
    difficultyLevel: ""
  }
  recipes.push(recipe1);
  recipes.push(recipe2);
  recipes.push(recipe3);
  function getTotalIngredients(ingredients) {
    return ingredients.length;
  }
  /* Code */
  function getDifficultyLevel(cookingTime) {
    if (cookingTime <= 30) {
      return "easy";
    } else if (cookingTime <= 60) {
      return "medium";
    } else {
      return "hard";
    }
  }
  /* Code */
  ```

---

## Paso 10

Es hora de probar cada una de las funciones. Puedes usar cualquiera de las recetas para ello, pero en este tutorial comenzaremos con la `receta1`.

> > Crea dos variables nuevas: `recipe1TotalIngredients` y `recipe1DifficultyLevel`. Asigna valores a cada una llamando a la función correspondiente y pasando la propiedad `recipe1` adecuada.
>
> > Por último, registra cada variable en la consola para ver los resultados.

- **Code**

  ```js
  const recipes = [];
  const recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: ""
  };
  const recipe2 = {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: ""
  }
  const recipe3 = {
    name: "Vegetable Stir Fry",
    ingredients: ["broccoli", "carrot", "bell pepper"],
    cookingTime: 15,
    totalIngredients: null,
    difficultyLevel: ""
  }
  recipes.push(recipe1);
  recipes.push(recipe2);
  recipes.push(recipe3);
  function getTotalIngredients(ingredients) {
    return ingredients.length;
  }
  function getDifficultyLevel(cookingTime) {
    if (cookingTime <= 30) {
      return "easy";
    } else if (cookingTime <= 60) {
      return "medium";
    } else {
      return "hard";
    }
  }
  /* Code */
  const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
  console.log(recipe1TotalIngredients); // 4
  const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
  console.log(recipe1DifficultyLevel); // "easy"
  /* Code */
  ```

---

## Paso 11

> > Ahora puedes asignar valores a las propiedades `totalIngredients` y `difficultyLevel` de cada elemento del array `recipes`.
>
> > Por ahora, accede a las propiedades `totalIngredients` y `difficultyLevel` de `recipe1` y asígnales los resultados correspondientes de las llamadas a funciones y sus argumentos.

- **Code**

  ```js
  const recipes = [];
  const recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: ""
  };
  const recipe2 = {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: ""
  }
  const recipe3 = {
    name: "Vegetable Stir Fry",
    ingredients: ["broccoli", "carrot", "bell pepper"],
    cookingTime: 15,
    totalIngredients: null,
    difficultyLevel: ""
  }
  recipes.push(recipe1);
  recipes.push(recipe2);
  recipes.push(recipe3);
  function getTotalIngredients(ingredients) {
    return ingredients.length;
  }
  function getDifficultyLevel(cookingTime) {
    if (cookingTime <= 30) {
      return "easy";
    } else if (cookingTime <= 60) {
      return "medium";
    } else {
      return "hard";
    }
  }
  const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
  console.log(recipe1TotalIngredients); // 4
  const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
  console.log(recipe1DifficultyLevel); // "easy"
  /* Code */
  recipe1.totalIngredients = recipe1TotalIngredients;
  recipe1.difficultyLevel = recipe1DifficultyLevel;
  console.log(recipe1);
  /* Code */
  ```

---

## Paso 12

> > Repite el proceso para las propiedades `totalIngredients` y `difficultyLevel` de `recipe2` y `recipe3`.

- **Code**

  ```js
  const recipes = [];
  const recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: ""
  };
  const recipe2 = {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: ""
  }
  const recipe3 = {
    name: "Vegetable Stir Fry",
    ingredients: ["broccoli", "carrot", "bell pepper"],
    cookingTime: 15,
    totalIngredients: null,
    difficultyLevel: ""
  }
  recipes.push(recipe1);
  recipes.push(recipe2);
  recipes.push(recipe3);
  function getTotalIngredients(ingredients) {
    return ingredients.length;
  }
  function getDifficultyLevel(cookingTime) {
    if (cookingTime <= 30) {
      return "easy";
    } else if (cookingTime <= 60) {
      return "medium";
    } else {
      return "hard";
    }
  }
  const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
  console.log(recipe1TotalIngredients); // 4
  const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
  console.log(recipe1DifficultyLevel); // "easy"
  recipe1.totalIngredients = recipe1TotalIngredients;
  recipe1.difficultyLevel = recipe1DifficultyLevel;
  console.log(recipe1);
  /* Code */
  recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
  recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);
  recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
  recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);
  /* Code */
  ```

---

## Paso 13

> > Ahora, muestra el array de `recipes` en la consola para ver todos sus elementos con los valores actualizados.

- **Code**

  ```js
  const recipes = [];
  const recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: ""
  };
  const recipe2 = {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: ""
  }
  const recipe3 = {
    name: "Vegetable Stir Fry",
    ingredients: ["broccoli", "carrot", "bell pepper"],
    cookingTime: 15,
    totalIngredients: null,
    difficultyLevel: ""
  }
  recipes.push(recipe1);
  recipes.push(recipe2);
  recipes.push(recipe3);
  function getTotalIngredients(ingredients) {
    return ingredients.length;
  }
  function getDifficultyLevel(cookingTime) {
    if (cookingTime <= 30) {
      return "easy";
    } else if (cookingTime <= 60) {
      return "medium";
    } else {
      return "hard";
    }
  }
  const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
  console.log(recipe1TotalIngredients); // 4
  const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
  console.log(recipe1DifficultyLevel); // "easy"
  recipe1.totalIngredients = recipe1TotalIngredients;
  recipe1.difficultyLevel = recipe1DifficultyLevel;
  console.log(recipe1);
  recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
  recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);
  recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
  recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);
  /* Code */
  console.log(recipes);
  /* Code */
  ```

---

**Con esto, tu proyecto de registro de recetas está terminado.**
