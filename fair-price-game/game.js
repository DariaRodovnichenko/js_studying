//generate the random fair price
let fairPrice = Math.floor(Math.random() * (100 - 1)) + 1;
console.log(fairPrice);

const userInput = document.querySelector("#user-input");
const submitBtn = document.querySelector("#submit");
const cancelBtn = document.querySelector("#cancel");
const resetBtn = document.querySelector("#restart");
const messages = document.querySelector("#messages");

//function to display a message
const displayMessage = (message) => {
  const messageEl = document.createElement("p");
  messageEl.textContent = message;
  messageEl.classList.add("message");
  messages.appendChild(messageEl);
};

//Handle the submit button click
submitBtn.addEventListener("click", () => {
  const userGuess = Number(userInput.value);
  console.log(typeof userGuess);
  if (userGuess < fairPrice) {
    displayMessage(`Your guess ${userGuess}: it is more`);
  } else if (userGuess > fairPrice) {
    displayMessage(`Your guess ${userGuess}: it is less`);
  } else {
    displayMessage(`You won!`);
    submitBtn.disabled = true;
  }
  userInput.value = "";
  userInput.focus();
});

//Handle the cancel button click
cancelBtn.addEventListener("click", () => {
  displayMessage(`The right answer is: ${fairPrice}`);
  submitBtn.disabled = true;
});

//Handle the reset button click
resetBtn.addEventListener("click", () => {
  fairPrice = Math.floor(Math.random() * 100) + 1;
  messages.innerHTML = "";
  submitBtn.disabled = false;
  userInput.value = "";
  userInput.focus();
});
