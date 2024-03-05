// JavaScript para controlar o carrossel

const slidesContainer = document.querySelector('.slides-container');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;

function showSlide(index) {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slidesContainer.children.length) % slidesContainer.children.length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slidesContainer.children.length;
  showSlide(currentIndex);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Mostrar o primeiro slide
showSlide(currentIndex);

// Alterar automaticamente
setInterval(nextSlide, 4000);

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
