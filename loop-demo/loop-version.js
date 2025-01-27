const buildHTML = () => {
  document.querySelector("#loopApp").innerHTML = `
    <label for="productSelect">Select Product:</label>
    <select id="productSelect"></select>
    
    <label for="number">Select Quantity:</label>
    <select id="number"></select>
    
    <button>Add</button>
    <ul></ul>
    <h3>Total Price: $<span id="total">0.00</span></h3>`;
};
buildHTML();

// Product list with prices
const productData = {
  Apple: 1.5,
  Orange: 2.0,
  Pear: 2.5,
  Lemon: 1.8,
};

// Populate product dropdown with product names and prices
const productList = Object.keys(productData);
const productSelect = document.querySelector("#productSelect");
for (const product of productList) {
  const option = document.createElement("option");
  option.value = product;
  option.textContent = `${product} ($${productData[product].toFixed(2)})`;
  productSelect.appendChild(option);
}

// Populate quantity dropdown
const productQuantity = ["1", "2", "3", "4", "5"];
const quantitySelect = document.querySelector("#number");
for (const qty of productQuantity) {
  const option = document.createElement("option");
  option.value = qty;
  option.textContent = qty;
  quantitySelect.appendChild(option);
}

// Shopping cart array
const cart = [];

document.querySelector("button").addEventListener("click", () => {
  const selectedProduct = productSelect.value;
  const selectedQuantity = Number(quantitySelect.value, 10);

  // Get unit price and calculate the price for the added quantity
  const unitPrice = productData[selectedProduct];
  const addedPrice = unitPrice * selectedQuantity;

  // Check if the product already exists in the cart
  const existingProduct = cart.find((item) => item.name === selectedProduct);
  if (existingProduct) {
    // Increment quantity and update total price
    existingProduct.quantity += selectedQuantity;
    existingProduct.totalPrice += addedPrice;
  } else {
    // Add new product to the cart
    cart.push({
      name: selectedProduct,
      quantity: selectedQuantity,
      unitPrice: unitPrice,
      totalPrice: addedPrice,
    });
  }

  // Update cart view
  const ulEl = document.querySelector("ul");
  ulEl.innerHTML = "";
  let basketTotal = 0;
  for (const item of cart) {
    ulEl.innerHTML += `<li>${item.name} (Unit Price: $${item.unitPrice.toFixed(
      2
    )}) × ${item.quantity} = $${item.totalPrice.toFixed(2)}</li>`;
    basketTotal += item.totalPrice;
  }

  // Update total price of the basket
  document.querySelector("#total").textContent = basketTotal.toFixed(2);
});
