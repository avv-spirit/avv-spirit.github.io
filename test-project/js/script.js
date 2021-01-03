'use strict';

let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

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

let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides__slideshow");
  let dots = document.getElementsByClassName("slides__dot");
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

/*var flag = 0;

function spoiler() {
  let button = event.currentTarget;
  let text = button.getElementsByClassName("spoilerText")[0];

  if (flag == 0) {
    text.style.height = "120px";
    flag = 1;
    //	console.log(flag);

  } else {
    text.style.height = "0px";
    flag = 0;
  }
}*/

const tabsBtn = document.querySelectorAll(".career__sidebar-items");
const tabsItems = document.querySelectorAll(".career__list");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if ( ! currentBtn.classList.contains('active') ) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('active');
      })

      tabsItems.forEach(function (item) {
        item.classList.remove('active');
      })

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
}

document.querySelector('.career__sidebar-items').click();
