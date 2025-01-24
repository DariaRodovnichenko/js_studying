const list = ["apple", "pear", "lemon"];
const loopApp = document.querySelector("#loopApp");
loopApp.innerHTML = `<ul></ul>`;

for (let index = 0; index < list.length; index++) {
  const ulEl = document.querySelector("#loopApp ul");
  const el = list[index];
  ulEl.innerHTML += `<li>${el}</li>`;
}
