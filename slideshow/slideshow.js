const buildHTML = () => {
  document.querySelector("#slideshow").innerHTML = `
        <ul id="thumbnails" style="list-style: none; display: flex; gap: 28px; padding: 0; cursor: pointer;"></ul>
        <div id="selected-container">
            <img id="selected-image" src="" style="max-width: 100%;" />
            <p id="image-text"></p>
        </div>
        <div id="controls">
            <button id="start">Start</button>
            <button id="stop">Stop</button>
            <button id="faster">Faster</button>
            <button id="slower">Slower</button>
        </div>
    `;
};

const displaySelectedImage = () => {
  document.querySelector("#selected-image").src = imgList[selectedIndex].url;
  document.querySelector("#image-text").textContent =
    imgList[selectedIndex].text;
};

const displayThumbnails = () => {
  document.querySelector("#thumbnails").innerHTML = imgList
    .map((item, index) => {
      return `<li id="${index}" >
            <img src="${item.url}" style="height: 80px; opacity: ${
        index === selectedIndex ? "0.5" : "1"
      };" />
        </li>`;
    })
    .join("");

  // Add hover effect
  document.querySelectorAll("#thumbnails li").forEach((li) => {
    li.addEventListener("mouseenter", (e) => (e.target.style.opacity = "0.7"));
    li.addEventListener("mouseleave", (e) => (e.target.style.opacity = "1"));
  });
};

// Image list with descriptions
const imgList = [
  {
    url: "https://picsum.photos/600/400?random=1",
    text: "Displaying first image.",
  },
  {
    url: "https://picsum.photos/600/400?random=2",
    text: "Displaying second image.",
  },
  {
    url: "https://picsum.photos/600/400?random=3",
    text: "Displaying third image.",
  },
];

let selectedIndex = 0;
let slideshowInterval = 2000;
let slideshow;

// Initialize the gallery
buildHTML();
displayThumbnails();
displaySelectedImage();

// Add click event for thumbnails
document.querySelector("#thumbnails").addEventListener("click", (event) => {
  if (event.target.closest("LI")) {
    selectedIndex = Number(event.target.closest("LI").id);
    displaySelectedImage();
    displayThumbnails();
  }
});

// Slideshow function
const startSlideshow = () => {
  if (!slideshow) {
    slideshow = setInterval(() => {
      selectedIndex = (selectedIndex + 1) % imgList.length;
      displaySelectedImage();
      displayThumbnails();
    }, slideshowInterval);
  }
};

const stopSlideshow = () => {
  clearInterval(slideshow);
  slideshow = null;
};

const speedUp = () => {
  if (slideshowInterval > 500) {
    slideshowInterval -= 500;
    restartSlideshow();
  }
};

const slowDown = () => {
  slideshowInterval += 500;
  restartSlideshow();
};

const restartSlideshow = () => {
  stopSlideshow();
  startSlideshow();
};

// Event Listeners for controls
document.querySelector("#start").addEventListener("click", startSlideshow);
document.querySelector("#stop").addEventListener("click", stopSlideshow);
document.querySelector("#faster").addEventListener("click", speedUp);
document.querySelector("#slower").addEventListener("click", slowDown);