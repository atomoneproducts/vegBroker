let currentIndex = 0;

function slide() {
  const slider = document.querySelector('.firstPage');
  currentIndex = (currentIndex + 1) % 2; // Toggle between 0 and 1
  slider.style.transform = `translate(-${currentIndex * 100}%)`;
}

setInterval(slide, 4000);