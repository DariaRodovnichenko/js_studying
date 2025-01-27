const buildHTML = () => {
  document.querySelector("#loopApp").innerHTML = `
    <select id="product"></select>
    <select id="number"></select>
    <button>Add</button>
    <ul></ul>`;
};
buildHTML();

// Product list
const productList = ["Apple", "Orange", "Pear", "Lemon"];
const list = [];

// Populate product dropdown
for (let i = 0; i < productList.length; i++) {
  const el = productList[i];
  document.querySelector(
    "#product"
  ).innerHTML += `<option value="${el}">${el}</option>`;
}

// Quantity options
const productQuantity = [1, 2, 3, 4];
for (let i = 0; i < productQuantity.length; i++) {
  const num = productQuantity[i];
  document.querySelector(
    "#number"
  ).innerHTML += `<option value="${num}">${num}</option>`;
}

// Add event listener for the "Add" button
document.querySelector("button").addEventListener("click", () => {
  const selectedProduct = document.querySelector("#product").value;
  const selectedQuantity = Number(document.querySelector("#number").value);

  // Create a product object with quantity
  const selected = {
    product: selectedProduct,
    quantity: selectedQuantity,
  };

  // Check if the product already exists in the list
  const productExist = list.find(
    (element) => element.product === selected.product
  );

  if (productExist) {
    // Update quantity if the product already exists
    productExist.quantity += selected.quantity;
  } else {
    // Add new product to the list
    list.push(selected);
  }

  // Update the UI
  const ulEl = document.querySelector("ul");
  ulEl.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    const el = list[i];
    ulEl.innerHTML += `<li>${el.quantity} ${el.product}</li>`;
  }

  // Log the updated list for debugging
  console.log("Updated list:", list);
});
