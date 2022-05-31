const btnPrev = document.querySelector('.button_left');
const btnNext = document.querySelector('.button_right');
const currentImg = document.querySelector('.image');

let counter = 1;

function nextSlide() {
  counter < 4 ? counter++ : counter = 1;
  currentImg.src = `./img/${counter}.jpg`
}

function prevSlide() {
  counter == 1 ? counter = 4 : counter--;
  currentImg.src = `./img/${counter}.jpg`
}

btnNext.addEventListener('click', () => nextSlide());


btnPrev.addEventListener('click', () => prevSlide());