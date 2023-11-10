const button = document.querySelector('.aside__nav--button');
const aside = document.querySelector('.aside');
const filter = document.querySelector('.filter');
const main = document.querySelector('.main');
button.addEventListener('click', function () {
            aside.classList.toggle('active');
            filter.classList.toggle('active');
             main.classList.toggle('active');
        });
    
const dropbutton = document.querySelector('.drop__down--btn');
const dropbutton2 = document.querySelector('.drop__down--btn2');
const dropmenu = document.querySelector('.dropdown__menu');  
const dropmenu2 = document.querySelector('.dropdown__menu2');       
dropbutton.addEventListener('click', function () {
 dropmenu.classList.toggle('active');
});
dropbutton2.addEventListener('click', function () {
 dropmenu2.classList.toggle('active');
});

const swiperservice = new Swiper('.swiper__service', {
  // Optional parameters
  direction: 'horizontal',
    loop: true,
    slidesPerView: 3, 
    spaceBetween: 40,
  breakpoints: {
     320: {
      slidesPerView: 1, // Кількість слайдів при ширині екрану 1300px і більше
  
    },
    375: {
      slidesPerView: 1, // Кількість слайдів при ширині екрану 1300px і більше
  
    },
  430: {
      slidesPerView: 1, // Кількість слайдів при ширині екрану 1300px і більше
  
    },
    768: {
      slidesPerView: 2, // Кількість слайдів при ширині екрану 1300px і більше
  },
   1000: {
      slidesPerView: 3, // Кількість слайдів при ширині екрану 1300px і більше
    },
  },
  navigation: {
    nextEl: '.swiper__service--btnnext',
    prevEl: '.swiper__service--btnprev',
  },

});


const paginationButtons = document.querySelectorAll('[class^="VetCat__pagination--btn"]');
const infoElements = document.querySelectorAll('[class^="VetCat__info--img"]');
const svgElements = document.querySelectorAll('[class^="VetCat__svgpagination"]');

infoElements[0].classList.add('active');
svgElements[0].classList.add('active');

paginationButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    
    if (button.classList.contains('active')) {
      return;
    }

    // Удаляем класс "active" у всех кнопок, элементов и SVG
    paginationButtons.forEach(btn => btn.classList.remove('active'));
    infoElements.forEach(el => el.classList.remove('active'));
    svgElements.forEach(svg => svg.classList.remove('active'));

    // Добавляем класс "active" к текущей кнопке, соответствующему элементу и SVG
    button.classList.add('active');
    infoElements[index].classList.add('active');
    svgElements[index].classList.add('active');
  });
});

const swiperhistory = new Swiper('.swiper__history', {
  // Optional parameters
  direction: 'horizontal',
   slidesPerView: 4, 
    spaceBetween: 40,
  breakpoints: {
      320: {
      slidesPerView: 1, // Кількість слайдів при ширині екрану 1300px і більше
  
    },
     375: {
      slidesPerView: 1, // Кількість слайдів при ширині екрану 1300px і більше
  
    },
    430: {
      slidesPerView: 1, // Кількість слайдів при ширині екрану 1300px і більше
  
    },
   500: {
      slidesPerView: 2, // Кількість слайдів при ширині екрану 1300px і більше
    
    },
    768: {
      slidesPerView: 2, // Кількість слайдів при ширині екрану 1300px і більше
      spaceBetween: 40,
    },
    850: {
      slidesPerView: 2, // Кількість слайдів при ширині екрану 1300px і більше
      spaceBetween: 40,
    },
    970: {
      slidesPerView: 3, // Кількість слайдів при ширині екрану 1300px і більше
      spaceBetween: 60,
    },
      1620: {
      slidesPerView: 4, // Кількість слайдів при ширині екрану 1300px і більше
      spaceBetween: 60,
    },
        1920: {
      slidesPerView: 4, // Кількість слайдів при ширині екрану 1300px і більше
      spaceBetween: 60,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper__history--btnnext',
    prevEl: '.swiper__history--btnprev',
  },


});
const buttons = document.querySelectorAll('[class^="blog__itemlinks--btn"]');
const items = document.querySelectorAll('[class^="blog__content--item"]');

// Устанавливаем класс "active" для первой кнопки и соответствующего элемента
buttons[0].classList.add('active');
items[0].classList.add('active');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('active')) {
      return;
    }
    buttons.forEach(btn => btn.classList.remove('active'));
    items.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    items[index].classList.add('active');
  });
});



const stroginoHospital = document.querySelector(".strogino-hospital");
const donskoiHospital = document.querySelector(".donskoi-hospital");
const swiper1 = document.querySelector(".someService-swiper1");
const swiper2 = document.querySelector(".someService-swiper2");

stroginoHospital.addEventListener("click", () => {
  swiper1.style.display = "block";
  swiper2.style.display = "none";
  donskoiHospital.classList.remove("btn-active");
  donskoiHospital.classList.add("btn-nonactive");
  stroginoHospital.classList.remove("btn-nonactive");
  stroginoHospital.classList.add("btn-active");

});

donskoiHospital.addEventListener("click", () => {
  swiper1.style.display = "none";
  swiper2.style.display = "block";
  stroginoHospital.classList.remove("btn-active");
  stroginoHospital.classList.add("btn-nonactive");
  donskoiHospital.classList.remove("btn-nonactive");
  donskoiHospital.classList.add("btn-active");
});

const swiperStrogino1 = new Swiper('.swiper-strogino', {

  slidesPerView: 1,
  navigation: {
    nextEl: '.custom-next-button',
    prevEl: '.custom-prev-button',
  },
  spaceBetween: 0,
  loop: true,

  breakpoints: {
    820: {
      slidesPerView: 2, // Кількість слайдів при ширині екрану 1300px і більше
    },
    1200: {
      slidesPerView: 3, // Кількість слайдів при ширині екрану 1300px і більше
      spaceBetween: 40,
    },
  },

});


const swiperDonskoi2 = new Swiper('.swiper-donskoi', {

  slidesPerView: 1,
  navigation: {
    nextEl: '.custom-next-button',
    prevEl: '.custom-prev-button',
  },
  spaceBetween: 0,
  loop: true,

  breakpoints: {
    820: {
      slidesPerView: 2, // Кількість слайдів при ширині екрану 1300px і більше
    },
    1200: {
      slidesPerView: 3, // Кількість слайдів при ширині екрану 1300px і більше
      spaceBetween: 40,
    },
  },

});
