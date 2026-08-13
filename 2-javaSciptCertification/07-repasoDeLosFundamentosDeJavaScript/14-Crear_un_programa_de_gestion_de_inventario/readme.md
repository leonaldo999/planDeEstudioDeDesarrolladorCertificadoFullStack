# Crear un programa de gestión de inventario

En este laboratorio, crearás un programa de gestión de inventario que te permitirá agregar, actualizar, buscar y eliminar productos del inventario. Utilizarás una matriz de objetos para representar tu inventario, en la que cada objeto tendrá como claves el nombre y la cantidad.

---

## Historias de usuario

1. Debes declarar un array vacío llamado `inventory` que almacenará objetos de producto con una clave `name` cuyo valor sea una cadena en minúsculas, y una clave `quantity` cuyo valor sea un número entero.

2. Debes crear una función llamada `findProductIndex` que tome el nombre del producto como argumento y devuelva el índice del objeto de producto correspondiente dentro del array `inventory`. La función siempre debe usar la forma en minúsculas del nombre del producto para realizar la búsqueda. Si no se encuentra el producto, la función debe devolver -1.

3. Debes crear una función llamada `addProduct` que tome un objeto de producto como argumento.

4. Si el producto ya está presente en el inventario, la función `addProduct` debe actualizar su valor de cantidad sumando la cantidad pasada a la función a la cantidad actual, y registrar en la consola el nombre del producto seguido de un espacio y la cantidad actualizada.

5. Si el producto no está presente en el inventario, la función `addProduct` debe agregar el producto al array del `inventory` y registrar el nombre del producto en la consola, seguido de un espacio y la indicación `added to inventory`.

6. Debes crear una función llamada `removeProduct` que tome el nombre del producto y la cantidad como argumentos.

7. La función `removeProduct` debe restar la cantidad pasada del objeto del producto correspondiente dentro del inventario y registrar la cadena `Remaining <product-name> pieces: <product-quantity>` en la consola, donde `<product-name>` debe sustituirse por el nombre del producto y `<product-quantity>` debe sustituirse por la cantidad del producto.

8. Si la cantidad después de la resta es cero, `removeProduct` debe eliminar el objeto del producto del inventario. Si la cantidad en el inventario no es suficiente para realizar la sustracción, la función removeProduct debe registrar en la consola la cadena `Not enough <product-name> available, remaining pieces: <product-quantity>`.
Si el producto que se va a eliminar no está presente en el inventario, la función `removeProduct` debe registrar en la consola `<product-name> not found`.

> [!note]
> Para evitar conflictos, mantén solo los registros mencionados en las historias de usuario al ejecutar las pruebas.

---

### Solucion

```js
// Crear un programa de gestión de inventario

// 1. Inventario vacío
const inventory = [];

// 2. Buscar producto
function findProductIndex(productName) {
  return inventory.findIndex(
    product => product.name === productName.toLowerCase()
  );
}

// 3. Agregar producto
function addProduct(product) {
  product.name = product.name.toLowerCase();

  const index = findProductIndex(product.name);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${product.name} quantity updated`);
  } else {
    inventory.push(product);
    console.log(`${product.name} added to inventory`);
  }
}

// 4. Eliminar producto
function removeProduct(productName, quantity) {
  const name = productName.toLowerCase();
  const index = findProductIndex(name);

  if (index === -1) {
    console.log(`${name} not found`);
    return;
  }

  const product = inventory[index];

  if (product.quantity < quantity) {
    console.log(
      `Not enough ${name} available, remaining pieces: ${product.quantity}`
    );
    return;
  }

  product.quantity -= quantity;

  console.log(
    `Remaining ${name} pieces: ${product.quantity}`
  );

  if (product.quantity === 0) {
    inventory.splice(index, 1);
  }
}

console.log(findProductIndex("flour"));
console.log(findProductIndex("FloUr"));
console.log(findProductIndex("Flour"));
console.log(addProduct({ name: "FLOUR", quantity: 5 }));
console.log(addProduct({name: "FLOUR", quantity: 5}));
console.log(addProduct({name: "FLOUR", quantity: 5}));
console.log(addProduct({name: "FLOUR", quantity: 5}));
console.log(removeProduct("FLOUR", 5));
console.log(removeProduct("FLOUR", 5));
console.log(removeProduct("FLOUR", 5));
console.log(removeProduct("FLOUR", 10));

```
