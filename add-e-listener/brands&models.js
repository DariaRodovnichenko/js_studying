const buildHTML = () => {
  document.querySelector("#add-e-listener").innerHTML = `
  <h1>Car Brands and Models</h1>
  
  <label for="brandSelect">Brands:</label>
  <select id="brandSelect">
    <option value="">-- Select a Brand --</option>
  </select>
  
  <label for="modelSelect">Models:</label>
  <select id="modelSelect" disabled>
    <option value="">-- Select a Model --</option>
  </select>`;
};

// Initialize the HTML content
buildHTML();

const carData = {
  Luxury: {
    Mercedes: ["S-Class", "E-Class", "C-Class"],
    BMW: ["7 Series", "5 Series", "3 Series"],
    Audi: ["A8", "A6", "A4"],
  },
  Standard: {
    Toyota: ["Camry", "Corolla", "Yaris"],
    Ford: ["Mustang", "Focus", "Fiesta"],
    Honda: ["Accord", "Civic", "Fit"],
  },
};

// Get references to dropdowns
const brandSelect = document.getElementById("brandSelect");
const modelSelect = document.getElementById("modelSelect");

// Populate "Brands" dropdown
for (const [className, brands] of Object.entries(carData)) {
  const optGroup = document.createElement("optgroup");
  optGroup.label = className;

  for (const brand in brands) {
    const option = document.createElement("option");
    option.value = brand;
    option.textContent = brand;
    optGroup.appendChild(option);
  }

  brandSelect.appendChild(optGroup);
}

// Event listener to update "Models" dropdown based on selected brand
brandSelect.addEventListener("change", () => {
  const selectedBrand = brandSelect.value;

  // Clear the "Models" dropdown
  modelSelect.innerHTML = '<option value="">-- Select a Model --</option>';
  modelSelect.disabled = true;

  if (selectedBrand) {
    // Find the models for the selected brand
    for (const brands of Object.values(carData)) {
      if (selectedBrand in brands) {
        const models = brands[selectedBrand];

        // Populate "Models" dropdown
        models.forEach((model) => {
          const option = document.createElement("option");
          option.value = model;
          option.textContent = model;
          modelSelect.appendChild(option);
        });

        modelSelect.disabled = false; // Enable "Models" dropdown
        break;
      }
    }
  }
});