//generate the random fair price
let fairPrice = Math.random() * (100 - 1) + 1;

const userInput = document.querySelector("#user-input");
const submitBtn = document.querySelector("#submit");
const cancelBtn = document.querySelector("#cancel");
const resetBtn = document.querySelector("#reset");
const messageEl = document.querySelector("#message");

//function to display a message
const displayMessage = (message) => {
    messageEl.innerHTML = message;
};

//Handle the submit button click
submitBtn.addEventListener("click", () => {
    const userGuess = Number(userInput.value);
    console.log(userGuess);
})