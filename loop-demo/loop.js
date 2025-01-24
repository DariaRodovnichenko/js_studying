// Create main container
const loopApp = document.querySelector("#loopApp");

// Create a heading
const heading = document.createElement("h1");
heading.textContent = "Product Selector";
loopApp.appendChild(heading);

// Create a label for the dropdown
const label = document.createElement("label");
label.setAttribute("for", "productSelect");
label.textContent = "Choose a product: ";
loopApp.appendChild(label);

// Create a dropdown (select element)
const productSelect = document.createElement("select");
productSelect.id = "productSelect";

// Array of products
const products = ["Apple", "Banana", "Orange", "Pineapple", "Grapes"];

// Use a for loop to add options to the dropdown
for (let i = 0; i < products.length; i++) {
  const option = document.createElement("option");
  option.value = products[i];
  option.textContent = products[i];
  productSelect.appendChild(option);
}
loopApp.appendChild(productSelect);

// Create an "Add" button
const addButton = document.createElement("button");
addButton.id = "addButton";
addButton.textContent = "Add";
loopApp.appendChild(addButton);

// Create a subheading for instructions
const subHeading = document.createElement("h2");
subHeading.textContent = "Open the console to view the sorted product list!";
loopApp.appendChild(subHeading);

// Create the data structure
const productList = [];

// Add event listener to the "Add" button
addButton.addEventListener("click", () => {
  const selectedProduct = productSelect.value;

  // Add the product to the array and sort alphabetically
  productList.push(selectedProduct);
  productList.sort();

  // Display the sorted product list in the console
  console.log("Sorted Product List:", productList);
});
