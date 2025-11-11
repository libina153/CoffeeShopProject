const menuOpenButton = document.getElementById('menu-open-button');
const menuCloseButton= document.getElementById('menu-close-button')

const navLinks= document.querySelectorAll('.nav-menu .nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => menuOpenButton.click());
});
        //Close mobile menu on nav link click

menuOpenButton.addEventListener('click', () => {
    //Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener('click', () => menuOpenButton.click()
);

//Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Responsive breakpoints
  breakpoints:{
    0:{
        slidesPerView: 1
    },
    768:{
        slidesPerView: 2
    },
    1024:{
        slidesPerView: 3
    }
  }

});
