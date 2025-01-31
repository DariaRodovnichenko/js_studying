const buildHTML = () => {
  document.querySelector("#thumbnails").innerHTML = `
        <ul style="list-style: none; display: flex; gap: 32px; padding: 0"></ul>
        <div id="selected-image"></div>
    `;
};

const displaySelectedImage = () => {
  document.querySelector(
    "#selected-image"
  ).innerHTML = `<img src="${imgListUrl[selectedIndex]}" style="max-width: 100%;" />`;
};

const displayThumbnails = () => {
  const ul = document.querySelector("ul");
  ul.innerHTML = imgListUrl
    .map((url, index) => {
      return `<li id="${index}" ">
            <img src="${url}" style="height: 80px; opacity: ${
        index === selectedIndex ? "0.5" : "1"
      }; transition: opacity 0.3s;" />
        </li>`;
    })
    .join("");

  document.querySelectorAll("li").forEach((li) => {
    li.addEventListener("mouseenter", (event) => {
      const img = event.target.querySelector("img");
      if (img) img.style.opacity = "0.6";
    });

    li.addEventListener("mouseleave", (event) => {
      const img = event.target.querySelector("img");
      if (img && li.id != selectedIndex) img.style.opacity = "1";
    });
  });
};

buildHTML();

// generate images
const imgListUrl = [
  "https://picsum.photos/500?random=1",
  "https://picsum.photos/500?random=2",
  "https://picsum.photos/500?random=3",
  "https://picsum.photos/500?random=4",
];

let selectedIndex = 0;

// initial display
displayThumbnails();
displaySelectedImage();

// onClick thumbnail
document.querySelector("ul").addEventListener("click", (event) => {
  if (event.target.closest("LI")) {
    const id = event.target.closest("LI").id;
    selectedIndex = Number(id);
    displaySelectedImage();
    displayThumbnails();
  }
});

// Animation using set interval
const interval = setInterval(() => {
  selectedIndex = (selectedIndex + 1) % imgListUrl.length;
  displaySelectedImage();
  displayThumbnails();
}, 3000);
