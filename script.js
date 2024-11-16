var container = document.querySelector("#container");
var heart = document.querySelector(".container i");

container.addEventListener("dblclick", function() {
  // Initially shrink and hide the heart icon
  heart.style.transform = "translate(-50%, -50%) scale(0)";
  heart.style.opacity = 0;

  // Delay the animation to allow the browser to apply initial styles
  setTimeout(function() {
    // Animate the heart to grow and become visible
    heart.style.transform = "translate(-50%, -50%) scale(1.5)";
    heart.style.opacity = 1;
  }, 10); // 10 milliseconds delay is usually enough to allow the reflow

  // After 1 second, shrink and hide the heart again
  setTimeout(function() {
    heart.style.transform = "translate(-50%, -50%) scale(0)";
    heart.style.opacity = 0;
  }, 1000); // 1 second delay for the heart to fade out
});
