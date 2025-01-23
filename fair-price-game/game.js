//generate the random fair price
let fairPrice = Math.floor(Math.random() * 100) + 1;

const userInput = document.querySelector("#user-input");
const submitBtn = document.querySelector("#submit");
const cancelBtn = document.querySelector("#cancel");
const resetBtn = document.querySelector("#restart");
const messageEl = document.querySelector("#message");

//function to display a message
const displayMessage = (message) => {
  messageEl.innerHTML = message;
};

//Handle the submit button click
submitBtn.addEventListener("click", () => {
  const userGuess = Number(userInput.value);
  console.log(userGuess);
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
    messageEl.innerHTML = "";
    submitBtn.disabled = false;
    userInput.value = "";
    userInput.focus();
})