'use strict';

// Открытие поповера каталога при наведении
const catalogLink = document.querySelector('.navigation-catalog-link');
const popoverCatalog = document.querySelector('.popover-catalog');

catalogLink.addEventListener('mouseenter', () => {
  popoverCatalog.classList.add('popover-catalog-open');
  catalogLink.classList.add('navigation-catalog-active');
});

popoverCatalog.addEventListener('mouseleave', () => {
  popoverCatalog.classList.remove('popover-catalog-open');
  catalogLink.classList.remove('navigation-catalog-active');
});


// Сладер
const slides = document.querySelectorAll('.slide-wrapper');
const btnPrev = document.querySelector('.toggle-button-prev');
const btnNext = document.querySelector('.toggle-button-next');
const flips = document.querySelectorAll('.slider-flip-button');

let slideIndex = 0;

// showSlides(slideIndex);
setInterval(() => showSlides(slideIndex += 1), 3000);

btnNext.addEventListener('click', () => {
  showSlides(slideIndex += 1);
});

btnPrev.addEventListener('click', () => {
  showSlides(slideIndex -= 1);
});

flips.forEach((flip, index) => {
  flip.addEventListener('click', () => {
    for (let slide of slides) {
      slide.classList.add('slide-hidden');
    }
    for (let flip of flips) {
      flip.classList.remove('slider-flip-current');
    }
    slides[index].classList.remove('slide-hidden');
    flips[index].classList.add('slider-flip-current');
  })
})

function showSlides(n) {
  if (n > slides.length - 1) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let slide of slides) {
    slide.classList.add('slide-hidden');
  }
  for (let flip of flips) {
    flip.classList.remove('slider-flip-current');
  }
  slides[slideIndex].classList.remove('slide-hidden');
  flips[slideIndex].classList.add('slider-flip-current');
};
