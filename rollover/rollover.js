document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("main-image");

  const originalSrc = mainImage.src; // Store original image source
  const rolloverSrc = "https://picsum.photos/300x300/0000FF/FFFFFF"; // Rollover image source (blue placeholder)

  // Add mouseenter event listener to change the image on hover
  mainImage.addEventListener("mouseenter", function () {
    mainImage.src = rolloverSrc;
  });

  // Add mouseleave event listener to restore the original image
  mainImage.addEventListener("mouseleave", function () {
    mainImage.src = originalSrc;
  });
});
