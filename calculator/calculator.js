const clearBtn = document.querySelector('[data-action="clear"]');
const additionBtn = document.querySelector('[data-action="addition"]');
const subtractionBtn = document.querySelector('[data-action="subtraction"]');
const multiplicationBtn = document.querySelector(
  '[data-action="multiplication"]'
);
const divisionBtn = document.querySelector('[data-action="division"]');
const percentageBtn = document.querySelector('[data-action="percentage"]');
const powerBtn = document.querySelector('[data-action="power"]');
const squareRootBtn = document.querySelector('[data-action="square-root"]');
const sineBtn = document.querySelector('[data-action="sine"]');
const cosineBtn = document.querySelector('[data-action="cosine"]');
const tangentBtn = document.querySelector('[data-action="tangent"]');

const firstNumberInput = document.querySelector("#first-number");
const secondNumberInput = document.querySelector("#second-number");
const resultEl = document.querySelector("#result");

const updateCounter = (total) => {
  const roundedTotal = Math.round(total * 100) / 100;
  resultEl.innerHTML = `Total: ${roundedTotal}`;
};

function toggleSecondNumberInput(isNeeded) {
  if (isNeeded) {
    secondNumberInput.disabled = false;
    secondNumberInput.placeholder = "Enter Second Number";
  } else {
    secondNumberInput.disabled = true;
    secondNumberInput.placeholder = "Not needed";
    secondNumberInput.value = ""; // Clear the value if disabled
  }
}

function validateInputs(firstNumber, secondNumber, requireSecondNumber = true) {
  if (isNaN(firstNumber)) {
    resultEl.innerHTML = "Error: Please enter a valid number";
    return false;
  }
  if (requireSecondNumber && isNaN(secondNumber)) {
    resultEl.innerHTML = "Error: Please enter a valid number";
    return false;
  }
  return true;
}

clearBtn.addEventListener("click", () => {
  firstNumberInput.value = "";
  secondNumberInput.value = "";
  resultEl.innerHTML = "Total:";
  toggleSecondNumberInput(true);
});

additionBtn.addEventListener("click", (event) => {
  toggleSecondNumberInput(true);

  const firstNumber = Number(firstNumberInput.value);
  const secondNumber = Number(secondNumberInput.value);

  if (!validateInputs(firstNumber, secondNumber)) return;

  const total = firstNumber + secondNumber;
  updateCounter(total);
  console.log(typeof firstNumber);
  console.log(typeof secondNumber);
  console.log(event);
});

subtractionBtn.addEventListener("click", () => {
  toggleSecondNumberInput(true);

  const firstNumber = Number(firstNumberInput.value);
  const secondNumber = Number(secondNumberInput.value);

  if (!validateInputs(firstNumber, secondNumber)) return;

  const total = firstNumber - secondNumber;
  updateCounter(total);
});

multiplicationBtn.addEventListener("click", () => {
  toggleSecondNumberInput(true);

  const firstNumber = Number(firstNumberInput.value);
  const secondNumber = Number(secondNumberInput.value);

  if (!validateInputs(firstNumber, secondNumber)) return;

  const total = firstNumber * secondNumber;
  updateCounter(total);
});

divisionBtn.addEventListener("click", () => {
  toggleSecondNumberInput(true);

  const firstNumber = Number(firstNumberInput.value);
  const secondNumber = Number(secondNumberInput.value);

  if (!validateInputs(firstNumber, secondNumber)) return;

  if (secondNumber === 0) {
    resultEl.innerHTML = "Error: Division by zero.";
    return;
  }

  const total = firstNumber / secondNumber;
  updateCounter(total);
});

percentageBtn.addEventListener("click", () => {
  toggleSecondNumberInput(true);

  const firstNumber = Number(firstNumberInput.value);
  const secondNumber = Number(secondNumberInput.value);

  if (!validateInputs(firstNumber, secondNumber)) return;

  const total = (firstNumber * secondNumber) / 100;
  updateCounter(total);
});

powerBtn.addEventListener("click", () => {
  toggleSecondNumberInput(true);

  const firstNumber = Number(firstNumberInput.value);
  const secondNumber = Number(secondNumberInput.value);

  if (!validateInputs(firstNumber, secondNumber)) return;

  const total = firstNumber ** secondNumber;
  updateCounter(total);
});

squareRootBtn.addEventListener("click", () => {
  toggleSecondNumberInput(false);

  const firstNumber = Number(firstNumberInput.value);

  if (!validateInputs(firstNumber, null, false)) return;

  if (firstNumber < 0) {
    resultEl.innerHTML =
      "Error: Cannot calculate square root of a negative number.";
    return;
  }

  const total = Math.sqrt(firstNumber);
  updateCounter(total);
});

sineBtn.addEventListener("click", () => {
  toggleSecondNumberInput(false);

  const firstNumber = Number(firstNumberInput.value);

  if (!validateInputs(firstNumber, null, false)) return;

  const total = Math.sin(firstNumber);
  updateCounter(total);
});

cosineBtn.addEventListener("click", () => {
  toggleSecondNumberInput(false);

  const firstNumber = Number(firstNumberInput.value);

  if (!validateInputs(firstNumber, null, false)) return;

  const total = Math.cos(firstNumber);
  updateCounter(total);
});

tangentBtn.addEventListener("click", () => {
  toggleSecondNumberInput(false);

  const firstNumber = Number(firstNumberInput.value);

  if (!validateInputs(firstNumber, null, false)) return;

  const total = Math.tan(firstNumber);
  updateCounter(total);
});
