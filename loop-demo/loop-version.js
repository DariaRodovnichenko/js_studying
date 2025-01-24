const buildHTML = () => {
  document.querySelector("#loopApp").innerHTML = `
    <select></select>
    <button>Add</button>
    <ul></ul>`;
};
buildHTML();

const productList = ["Apple", "Orange", "Pear", "Lemon"];
const list = [];
for (let i = 0; i < productList.length; i++) {
  const el = productList[i];
  document.querySelector("select").innerHTML += `<option>${el}</option>`;
}

document.querySelector("button").addEventListener("click", () => {
  const selectedProduct = document.querySelector("select").value;
  list.push(selectedProduct);
  list.sort();
  const ulEl = document.querySelector("ul");
  ulEl.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    const el = list[i];
    ulEl.innerHTML += `<li>${el}</li>`;
  }
});
