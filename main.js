const slides = document.querySelector('.slideshow');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(n) {
  slides.style.transform = `translateX(-${n * 100}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === n);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.children.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
    currentSlide = index;
  });
});