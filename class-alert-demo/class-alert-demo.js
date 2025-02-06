class AlertMessage {
  constructor(message) {
    this.message = message;
    this.showAlert();
  }

  showAlert() {
    alert(this.message);
  }
}

// Create an instance of the class to trigger the alert
new AlertMessage("Hello, World!");
