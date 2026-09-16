const inventory = [];

function findProductIndex(productName) {
  const nameLower = productName.toLowerCase();
  return inventory.findIndex(item => item.name.toLowerCase() === nameLower);
}

function addProduct(product) {
  const nameLower = product.name.toLowerCase();
  const index = findProductIndex(nameLower);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${nameLower} quantity updated`);
  } else {
    inventory.push({ name: nameLower, quantity: product.quantity });
    console.log(`${nameLower} added to inventory`);
  }
}

function removeProduct(productName, quantity) {
  const nameLower = productName.toLowerCase();
  const index = findProductIndex(nameLower);

  if (index === -1) {
    console.log(`${nameLower} not found`);
    return;
  }

  const currentProduct = inventory[index];

  if (currentProduct.quantity < quantity) {
    console.log(`Not enough ${nameLower} available, remaining pieces: ${currentProduct.quantity}`);
  } else {
    currentProduct.quantity -= quantity;
    
    if (currentProduct.quantity === 0) {
      inventory.splice(index, 1);
    }
    
    console.log(`Remaining ${nameLower} pieces: ${currentProduct.quantity}`);
  }
}

console.log(addProduct({name: "FLOUR", quantity: 5}))

console.log(removeProduct("FLOUR", 5));
