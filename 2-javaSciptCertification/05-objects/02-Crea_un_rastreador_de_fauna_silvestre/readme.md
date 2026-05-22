# Crea un rastreador de fauna silvestre

En este taller, crearás un sencillo rastreador de fauna silvestre utilizando objetos de JavaScript.

---

## Paso 1

A continuación se muestra un ejemplo de un objeto:

- **Example Code**

  ```js
  const animal = {}; // empty object
  ```

Esto crea un objeto vacío.

> > Ahora crea una variable llamada `tiger` y asígnale un objeto vacío.

- **Code**

  ```js
  /* Code */
  const tiger = {};
  /* Code */
  ```

---

## Paso 2

En este rastreador de fauna silvestre, actualizarás un objeto con nuevas propiedades.

A continuación se muestra un ejemplo de cómo crear un objeto con una propiedad:

- **Example Code**

  ```js
  const animal = {
    name: "Lion", // property: value
  };
  ```

> > Ahora actualiza el objeto `tiger` para que incluya una propiedad llamada `species`.
>
> > Establece su valor en `"Tiger"`.

- **Code**

  ```js
  const tiger = {
    /* Code */
    species: "Tiger",
    /* Code */
  };
  ```

---

## Paso 3

> > Ahora actualiza tu objeto `tiger` añadiendo una nueva propiedad llamada `age`.
>
> > Asigna a la propiedad `age` el valor `5`.

- **Code**

  ```js
  const tiger = {
    species: "Tiger",
    /* Code */
    age: 5,
    /* Code */
  };
  ```

---

## Paso 4

> > Ahora agrega otra propiedad al objeto `tiger` llamada `isEndangered`.

Establece la propiedad `isEndangered` en `true`.

- **Code**

  ```js
  const tiger = {
    species: "Tiger",
    age: 5,
    /* Code */
    isEndangered: true,
    /* Code */
  };
  ```

---

## Paso 5

> > Ahora crea un segundo objeto llamado `elephant`.
>
> > Añade las siguientes propiedades:

---

- `species` con el valor `elephant`
- `age` con el valor `10`
- `isEndangered` con el valor `true`

---

- **Code**

  ```js
  const tiger = {
    species: "Tiger",
    age: 5,
    isEndangered: true,
  };

  /* Code */
  const elephant ={
    species: "Elephant",
    age: 10,
    isEndangered: true
  };
  /* Code */
  ```

---

## Paso 6

En este paso, crearás una función para acceder a la propiedad `species` de un objeto.

A continuación se muestra un pequeño ejemplo de cómo acceder a una propiedad de un objeto:

- **Example Code**

  ```js
  const dog = {
    species: "Dog"
  };
  const getAnimalSpecies = (pet) => {
    return pet.species; // access species using dot notation
  };
  console.log(getAnimalSpecies(dog)); // Dog
  ```

En este ejemplo, la función toma un objeto como parámetro y devuelve su propiedad `species`.

> > Ahora crea una función llamada `getSpecies`.
>
> > La función debe tomar un parámetro llamado `animal`.
>
> > Devuelve la propiedad `species` del `animal` utilizando la notación de puntos.
>
> > Después de crear la función, utiliza `console.log` para llamar a `getSpecies(tiger)` y así poder ver el resultado en la consola.

- **Code**

  ```js
  const tiger = {
    species: "Tiger",
    age: 5,
    isEndangered: true,
  };

  const elephant ={
    species: "Elephant",
    age: 10,
    isEndangered: true
  };

  /* Code */
  const getSpecies = (animal) => {
    return animal.species
  };
  console.log(getSpecies(tiger));
  /* Code */
  ```

---

## Paso 7

En este paso, crearás una función para acceder a la propiedad `age` de un objeto.

Aquí tienes un ejemplo:

- **Example Code**

  ```js
  const cat = {
    age: 3
  };
  
  const getAnimalAge = (pet) => {
    return pet.age; // access age using dot notation
  }
  
  console.log(getAnimalAge(cat)); // 3
  ```

En este ejemplo, la función toma un objeto como parámetro y devuelve su propiedad `age`.

> > Ahora crea una función llamada `getAge`.
>
> > La función debe tomar un parámetro llamado `animal`.
>
> > Devuelve la propiedad `age` del `animal` utilizando la notación de puntos.
>
> > Después de crear la función, utiliza `console.log` para llamar a `getAge(tiger)` y así poder ver el resultado en la consola.

- **Code**

  ```js
  const tiger = {
    species: "Tiger",
    age: 5,
    isEndangered: true,
  };

  const elephant ={
    species: "Elephant",
    age: 10,
    isEndangered: true
  };

  const getSpecies = (animal) => {
    return animal.species
  };
  console.log(getSpecies(tiger));

  /* Code */
  const getAge = (animal) => {
    return animal.age
  };
  console.log(getAge(tiger));
  /* Code */
  ```

---

## Paso 8

En este paso, crearás una función que agrega una nueva propiedad a un objeto.

A continuación, te mostramos un ejemplo de cómo agregar una propiedad dentro de una función:

- **Example Code**

  ```js
  const cat = {
    species: "Cat"
  };
  
  const addColor = (pet, color) => {
    pet.color = color; // add new property using dot notation
    return pet; // return the updated object
  }
  
  console.log(addColor(cat, "White")); 
  // {
  //   species: 'Cat',
  //   color: 'White'
  // }
  ```

En este ejemplo, se añade la propiedad `color` al objeto `cat`.

> > Ahora crea una función llamada `addHabitat`. La función debe tomar dos parámetros: `animal` y `habitat`.
>
> > Dentro de la función, agrega una nueva propiedad llamada `habitat` al objeto `animal`. Establece su valor igual al parámetro `habitat`.
>
> > Devuelve el objeto animal actualizado.
>
> > Después de crear la función, usa `console.log` para llamar a `addHabitat(tiger, "Rainforest")` y así puedas ver el objeto tiger actualizado en la consola.

- **Code**

  ```js
  const tiger = {
    species: "Tiger",
    age: 5,
    isEndangered: true,
  };

  const elephant ={
    species: "Elephant",
    age: 10,
    isEndangered: true
  };

  const getSpecies = (animal) => {
    return animal.species
  };
  console.log(getSpecies(tiger));

  const getAge = (animal) => {
    return animal.age
  };
  console.log(getAge(tiger));

  /* Code */
  const addHabitat = (animal, habitat) => {
    animal.habitat = habitat;
    return animal;
  };
  console.log(addHabitat(tiger, "Rainforest"));
  /* Code */
  ```

---

## Paso 9

En este paso, crearás una función que actualiza una propiedad de un objeto.

A continuación se muestra un ejemplo de cómo actualizar una propiedad dentro de una función:

- **Example Code**

  ```js
  const dog = {
    age: 4
  };
  
  const changeAge = (pet, updatedAge) => {
    pet.age = updatedAge; // update existing property using dot notation
    return pet; // return the updated object
  }
  
  console.log(changeAge(dog, 6)); // { age: 6 }
  ```

En este ejemplo, la propiedad `age` se actualiza con un nuevo valor.

> > Ahora crea una función llamada `updateAge`. La función debe tomar dos parámetros: `animal` y `newAge`.
>
> > Dentro de la función, actualiza la propiedad `age` del objeto `animal` con el valor de `newAge`. Devuelve el objeto `animal` actualizado.
>
>> Después de crear la función, usa `console.log` para llamar a `updateAge(elephant, 12)` y así poder ver el objeto «elephant» actualizado en la consola.

- **Code**

  ```js
  const tiger = {
    species: "Tiger",
    age: 5,
    isEndangered: true,
  };

  const elephant ={
    species: "Elephant",
    age: 10,
    isEndangered: true
  };

  const getSpecies = (animal) => {
    return animal.species
  };
  console.log(getSpecies(tiger));

  const getAge = (animal) => {
    return animal.age
  };
  console.log(getAge(tiger));

  const addHabitat = (animal, habitat) => {
    animal.habitat = habitat;
    return animal;
  };
  console.log(addHabitat(tiger, "Rainforest"));

  /* Code */
  const updateAge = (animal, newAge) => {
    animal.age = newAge;
    return animal;
  };
  console.log(updateAge(elephant, 12));
  /* Code */
  ```

---

## Paso 10

En este paso, crearás una función que elimina una propiedad de un objeto.

A continuación se muestra un ejemplo de cómo eliminar una propiedad utilizando `delete`:

- **Example Code**

  ```js
  const bird = {
    species: "Parrot",
    canFly: true
  };
  
  const removeFlight = (pet) => {
    delete pet.canFly; // remove property using delete keyword
    return pet; // return the updated object
  };
  
  console.log(removeFlight(bird));
  // { species: "Parrot" }
  ```

En este ejemplo, se elimina la propiedad `canFly` del objeto `bird`.

> > Ahora crea una función llamada `removeEndangeredStatus`. La función debe tomar un parámetro llamado `animal`.
>
> > Dentro de la función, elimina la propiedad `isEndangered` del objeto `animal` utilizando la palabra clave `delete`. Devuelve el objeto animal actualizado.
>
> > Después de crear la función, utiliza `console.log` para llamar a `removeEndangeredStatus(tiger)` y así poder ver el objeto actualizado en la consola.

- **Code**

  ```js
  const tiger = {
    species: "Tiger",
    age: 5,
    isEndangered: true,
  };

  const elephant ={
    species: "Elephant",
    age: 10,
    isEndangered: true
  };

  const getSpecies = (animal) => {
    return animal.species
  };
  console.log(getSpecies(tiger));

  const getAge = (animal) => {
    return animal.age
  };
  console.log(getAge(tiger));

  const addHabitat = (animal, habitat) => {
    animal.habitat = habitat;
    return animal;
  };
  console.log(addHabitat(tiger, "Rainforest"));

  const updateAge = (animal, newAge) => {
    animal.age = newAge;
    return animal;
  };
  console.log(updateAge(elephant, 12));

  /* Code */
  const removeEndangeredStatus = (animal) => {
    delete animal.isEndangered;
    return animal;
  };
  console.log(removeEndangeredStatus(tiger));
  /* Code */
  ```

---

## Paso 11

En este paso, crearás una función que comprueba si un objeto tiene una propiedad específica.

A continuación se muestra un ejemplo del uso de `hasOwnProperty`:

- **Example Code**

  ```js
  const cat = {
    species: "Cat",
    color: "White"
  };
  
  const dog = {
    species: "Dog",
    weight: 50
  };
  
  const hasColor = (pet) => {
    return pet.hasOwnProperty("color"); // check if "color" property exists
  };
  
  console.log(hasColor(cat)); // true
  console.log(hasColor(dog)); // false
  ```

En este ejemplo, la función `hasColor` utiliza `hasOwnProperty` para comprobar si la propiedad `color` existe en un objeto.

> > Ahora crea una función llamada `hasHabitat`. La función debe tomar un parámetro llamado `animal`.
>
> > Utiliza el método `hasOwnProperty` para devolver `true` si el objeto `animal` tiene una propiedad llamada `"habitat"` y `false` en caso contrario.
>
> > Después de crear la función, usa `console.log` para llamar a `hasHabitat(tiger)` y `hasHabitat(elephant)` para que puedas ver ambos resultados en la consola.

- **Code**

  ```js
  const tiger = {
    species: "Tiger",
    age: 5,
    isEndangered: true,
  };

  const elephant ={
    species: "Elephant",
    age: 10,
    isEndangered: true
  };

  const getSpecies = (animal) => {
    return animal.species
  };
  console.log(getSpecies(tiger));

  const getAge = (animal) => {
    return animal.age
  };
  console.log(getAge(tiger));

  const addHabitat = (animal, habitat) => {
    animal.habitat = habitat;
    return animal;
  };
  console.log(addHabitat(tiger, "Rainforest"));

  const updateAge = (animal, newAge) => {
    animal.age = newAge;
    return animal;
  };
  console.log(updateAge(elephant, 12));

  const removeEndangeredStatus = (animal) => {
    delete animal.isEndangered;
    return animal;
  };
  console.log(removeEndangeredStatus(tiger));

  /* Code */
  const hasHabitat = (animal) => {
    return  animal.hasOwnProperty("habitat");
  };
  console.log(hasHabitat(tiger));
  console.log(hasHabitat(elephant));
  /* Code */
  ```

---

## Paso 12

En este último paso del taller **Wildlife Tracker**, crearás una función que acceda a una propiedad de un objeto utilizando la notación entre corchetes.

A continuación se muestra un ejemplo de cómo acceder a una propiedad utilizando la notación entre corchetes:

- **Example Code**

  ```js
  const cat = {
    species: "Cat",
    age: 3
  };
  
  const property = "species";
  
  console.log(cat[property]); // "Cat"
  ```

En este ejemplo, la notación entre corchetes te permite acceder a una propiedad mediante una variable.

> > Ahora crea una función llamada `getProperty`.
>
> > La función debe tomar dos parámetros: `animal` y `propertyName`.
>
> > Devuelve el valor de la propiedad utilizando la notación entre corchetes.
>
> > Después de crear la función, utiliza `console.log` para llamar a `getProperty(tiger, "species")` y `getProperty(elephant, "age")` para que puedas ver los valores devueltos en la consola.

- **Code**

  ```js
  const tiger = {
    species: "Tiger",
    age: 5,
    isEndangered: true,
  };

  const elephant ={
    species: "Elephant",
    age: 10,
    isEndangered: true
  };

  const getSpecies = (animal) => {
    return animal.species
  };
  console.log(getSpecies(tiger));

  const getAge = (animal) => {
    return animal.age
  };
  console.log(getAge(tiger));

  const addHabitat = (animal, habitat) => {
    animal.habitat = habitat;
    return animal;
  };
  console.log(addHabitat(tiger, "Rainforest"));

  const updateAge = (animal, newAge) => {
    animal.age = newAge;
    return animal;
  };
  console.log(updateAge(elephant, 12));

  const removeEndangeredStatus = (animal) => {
    delete animal.isEndangered;
    return animal;
  };
  console.log(removeEndangeredStatus(tiger));

  const hasHabitat = (animal) => {
    return  animal.hasOwnProperty("habitat");
  };
  console.log(hasHabitat(tiger));
  console.log(hasHabitat(elephant));
  
  /* Code */
  const getProperty = (animal, propertyName) => {
    return animal[propertyName]
  };
  console.log(getProperty(tiger, "species"));
  console.log(getProperty(elephant, "age"));
  /* Code */
  ```

---

**¡Con esto, el taller de Wildlife Tracker ha terminado!**
