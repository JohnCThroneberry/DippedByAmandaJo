function togglePricing() {
  var pricingTab = document.getElementById("pricingTab");
  if (pricingTab.style.display === "none" || pricingTab.style.display === "") {
    pricingTab.style.display = "block";
  } else {
    pricingTab.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const sprinkleContainer = document.getElementById('sprinkleContainer');
  const colors = ['#FF69B4', '#FF4500', '#FFD700', '#ADFF2F', '#00BFFF', '#800080'];

  function createSprinkle() {
    const sprinkle = document.createElement('div');
    sprinkle.classList.add('sprinkle');
    sprinkle.style.left = Math.random() * 100 + 'vw';
    sprinkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    sprinkle.style.animationDuration = (Math.random() * 3 + 2) + 's'; // 2s to 5s
    sprinkleContainer.appendChild(sprinkle);

    // Remove sprinkle after it falls
    setTimeout(() => {
      sprinkle.remove();
    }, 5000);
  }

  // Generate sprinkles at intervals
  setInterval(createSprinkle, 300); // Adjust frequency here
});
