'use strict';

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides__slideshow");
  var dots = document.getElementsByClassName("slides__dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slides__dot-active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " slides__dot-active";
  setTimeout(showSlides, 5000);
}
showSlides();

var flag = 0;

function spoiler() {
  var button = event.currentTarget;
  var text = button.getElementsByClassName("spoilerText")[0];

  if (flag == 0) {
    text.style.height = "120px";
    flag = 1;
    //	console.log(flag);

  } else {
    text.style.height = "0px";
    flag = 0;
  }
}
