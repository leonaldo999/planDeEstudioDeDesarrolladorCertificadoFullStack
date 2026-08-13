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
