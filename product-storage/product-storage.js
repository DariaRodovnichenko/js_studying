const buildHTML = () => {
  document.querySelector("#product-storage").innerHTML = `
    <label for="productSelect">Select Product:</label>
    <select id="productSelect"></select>
    
    <label for="number">Select Quantity:</label>
    <select id="number"></select>
    
        <button id="addButton">Add</button>
        <button id="deleteLastButton">Delete Last Item</button>
        <ul id="cartList"></ul>
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

// Retrieve cart from local storage or initialize it
const CART_KEY = "shoppingCart";
let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

// Function to populate dropdowns
const populateDropdowns = () => {
  const productSelect = document.querySelector("#productSelect");
  const quantitySelect = document.querySelector("#number");

  // Get product names and sort them alphabetically
  const sortedProducts = Object.keys(productData).sort();

  // Populate product dropdown with sorted names
  sortedProducts.forEach((product) => {
    const option = document.createElement("option");
    option.value = product;
    option.textContent = `${product} ($${productData[product].toFixed(2)})`;
    productSelect.appendChild(option);
  });

  // Populate quantity dropdown
  for (let i = 1; i <= 5; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    quantitySelect.appendChild(option);
  }
};

populateDropdowns();

// Function to update cart display
const updateCartDisplay = () => {
  const ulEl = document.querySelector("ul");
  ulEl.innerHTML = "";
  let basketTotal = 0;

  // Sort the cart alphabetically by product name
  cart.sort((a, b) => a.name.localeCompare(b.name));

  for (const item of cart) {
    ulEl.innerHTML += `<li>${item.name} (Unit Price: $${item.unitPrice.toFixed(
      2
    )}) × ${item.quantity} = $${item.totalPrice.toFixed(2)}</li>`;
    basketTotal += item.totalPrice;
  }
  document.querySelector("#total").textContent = basketTotal.toFixed(2);

  // Attach event listeners to remove links
  document.querySelectorAll(".remove-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      removeItem(index);
    });
  });
};

// Function to add items to the cart
const addToCart = () => {
  const productSelect = document.querySelector("#productSelect");
  const quantitySelect = document.querySelector("#number");

  const selectedProduct = productSelect.value;
  const selectedQuantity = Number(quantitySelect.value);
  const unitPrice = productData[selectedProduct];
  const addedPrice = unitPrice * selectedQuantity;

  // Check if the product already exists in the cart
  const existingProduct = cart.find((item) => item.name === selectedProduct);
  if (existingProduct) {
    existingProduct.quantity += selectedQuantity;
    existingProduct.totalPrice += addedPrice;
  } else {
    cart.push({
      name: selectedProduct,
      quantity: selectedQuantity,
      unitPrice: unitPrice,
      totalPrice: addedPrice,
    });
  }

  // Save to local storage
  localStorage.setItem(CART_KEY, JSON.stringify(cart));

  // Update display
  updateCartDisplay();
};

// Function to remove the last item from the cart
const removeLastItem = () => {
  if (cart.length > 0) {
    cart.pop();
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartDisplay();
  }
};

// Function to remove a specific item by index
const removeItem = (index) => {
  cart.splice(index, 1);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartDisplay();
};

// Attach event listeners
document.querySelector("#addButton").addEventListener("click", addToCart);
document
  .querySelector("#deleteLastButton")
  .addEventListener("click", removeLastItem);

// Initialize the cart display
updateCartDisplay();
