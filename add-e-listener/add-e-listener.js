const buildHTML = () => {
  document.querySelector("#add-e-listener").innerHTML = `
        <h1>Dynamic List with Delete Options</h1>
        <input type="text" id="itemInput" placeholder="Enter an item">
        <button id="addButton">Add</button>
        <button id="deleteLastButton">Delete Last</button>
        <button id="deleteAllButton">Delete All</button>
        
        <ul id="itemList"></ul>`;
};

// Initialize the HTML content
buildHTML();

// Get references to elements
const addButton = document.getElementById("addButton");
const deleteLastButton = document.getElementById("deleteLastButton");
const deleteAllButton = document.getElementById("deleteAllButton");
const itemInput = document.getElementById("itemInput");
const itemList = document.getElementById("itemList");

// Add event listener to add items
addButton.addEventListener("click", () => {
  const inputValue = itemInput.value.trim();

  // Only add the item if the input is not empty
  if (inputValue) {
    const li = document.createElement("li");
    li.textContent = inputValue;
    itemList.appendChild(li);

    // Clear the input field
    itemInput.value = "";
  }
});

// Add event listener to delete the last item
deleteLastButton.addEventListener("click", () => {
  const lastItem = itemList.lastElementChild;
  if (lastItem) {
    itemList.removeChild(lastItem);
  }
});

// Add event listener to delete all <p> elements
deleteAllButton.addEventListener("click", () => {
  const items = document.querySelectorAll("li");
  items.forEach((li) => li.remove());
});
