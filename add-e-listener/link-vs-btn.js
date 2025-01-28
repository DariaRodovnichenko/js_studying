const buildHTML = () => {
  document.querySelector("#add-e-listener").innerHTML = `
        <h1>Dynamic List with Links</h1>
        <input type="text" id="itemInput" placeholder="Enter an item">
        <a id="addLink" href="#">Add</a>
        <a id="deleteLastLink" href="#">Delete Last</a>
        <a id="deleteAllLinks" href="#">Delete All</a>
        
        <ul id="itemList"></ul>`;
};

// Initialize the HTML content
buildHTML();

// Get references to elements
const addLink = document.getElementById("addLink");
const deleteLastLink = document.getElementById("deleteLastLink");
const deleteAllLinks = document.getElementById("deleteAllLinks");
const itemInput = document.getElementById("itemInput");
const itemList = document.getElementById("itemList");

// Add event listener to add items
addLink.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default link behavior
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
deleteLastLink.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default link behavior
  const lastItem = itemList.lastElementChild;
  if (lastItem) {
    itemList.removeChild(lastItem);
  }
});

// Add event listener to delete all <p> elements
deleteAllLinks.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default link behavior
  const paragraphs = document.querySelectorAll("li");
  paragraphs.forEach((li) => li.remove());
});
