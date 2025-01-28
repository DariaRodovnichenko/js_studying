const buildHTML = () => {
  document.querySelector("#local-storage").innerHTML = `
    <h1 id="welcomeMessage"></h1>
    <p>You have visited this page <span id="visitCount">0</span> times.</p>`;
};

// Key names for local storage
const VISIT_COUNT_KEY = "visitCount";
const NAME_KEY = "userName";
const SURNAME_KEY = "userSurname";

// Build the initial HTML structure
buildHTML();

// Retrieve the current count from localStorage or initialize it to 0
let visitCount = Number(localStorage.getItem(VISIT_COUNT_KEY)) || 0;

// Increment the count
visitCount++;
console.log(visitCount);

// Save the updated count back to localStorage
localStorage.setItem(VISIT_COUNT_KEY, visitCount);

// Retrieve or prompt for the user's name and surname
let userName = localStorage.getItem(NAME_KEY);
let userSurname = localStorage.getItem(SURNAME_KEY);
console.log(userName, userSurname);

if (!userName || !userSurname) {
  // Prompt the user for their name and surname if not already saved
  userName = prompt("Please enter your first name:", "Guest");
  userSurname = prompt("Please enter your surname:", "User");

  // Save them to local storage
  localStorage.setItem(NAME_KEY, userName);
  localStorage.setItem(SURNAME_KEY, userSurname);
}

// Display the welcome message and visit count on the page
document.getElementById(
  "welcomeMessage"
).innerHTML = `Welcome ${userName} ${userSurname}`;
document.getElementById("visitCount").innerHTML = visitCount;
