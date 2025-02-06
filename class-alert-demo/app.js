class MyApp {
  constructor() {
    this.initUI();
  }

  initUI() {
    const appDiv = document.getElementById("myApp");
    if (appDiv) {
      const heading = document.createElement("h1");
      heading.textContent = "Hello, World!";
      appDiv.appendChild(heading);
    } else {
      console.error("Element with ID 'myApp' not found.");
    }
  }
}

// Initialize the application
new MyApp();
