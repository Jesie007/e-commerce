"use strict";

// Build cookie message on top of nav
const nav = document.querySelector(".nav");
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML = "Free shipping over 45$";
nav.prepend(message);
message.style.backgroundColor = "#ffdeeb";

// Button scroll effect
const btnScrollTo = document.querySelector(".btn--scroll-to");
const sectionCatergory = document.querySelector(".section-catergory");

btnScrollTo.addEventListener("click", function (e) {
  e.preventDefault();

  sectionCatergory.scrollIntoView({ behavior: "smooth" });
});

// Page navigation
document.querySelectorAll(".nav-link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

// document.querySelector(".nav-list").addEventListener("click", function (e) {
//   e.preventDefault();

//   if (e.target.classList.contains(".nav-link")) {
//     const id = e.target.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   }
// });

// How to implement tab components
// const tabs = document.querySelector(".operations__tab");
// const tabsContainer = document.querySelector(".operations__tab-container");
// const tabsContent = document.querySelectorAll(".operations__content");

// tabsContainer.addEventListener("click", function (e) {
//   e.preventDefault();
//   const clicked = e.target.closest(".operations__tab");
//   if (!clicked) return;

//   // Remove active classes
//   tabs.forEach((t) => t.classList.remove("operations__tab--active"));
//   tabsContent.forEach((c) => c.classList.remove("operations__tab--active"));

//   // Active tab
//   clicked.classList.add("operations__tab--active");

//   // Active content area
//   document
//     .querySelector(`'operations__content--${clicked.dataset.tab}`)
//     .classList.add("operations__tab--active");
// });

// Sticky navigation
const sectionBest = document.querySelector(".section-best");
const initalCoords = sectionBest.getBoundingClientRect();
console.log(initalCoords);
window.addEventListener("scroll", function () {
  console.log(window.scrollY);

  if (window.scrollY > initalCoords.top) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
});

// Build Slider
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

let curSlide = 0;
const maxSlide = slides.length;
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
// Slider 2

// const sliders = document.querySelector(".sliders");
const slides2 = document.querySelectorAll(".slides");
const btnLeft1 = document.querySelector(".slider__btn--left--1");
const btnRight1 = document.querySelector(".slider__btn--right--1");

let curSlide1 = 0;
const maxSlide1 = slides2.length;
const goToSlide1 = function (slide) {
  slides2.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide1(0);

const nextSlide1 = function () {
  if (curSlide1 === maxSlide1 - 1) {
    curSlide1 = 0;
  } else {
    curSlide1++;
  }

  goToSlide(curSlide1);
};

const prevSlide1 = function () {
  if (curSlide1 === 0) {
    curSlide1 = maxSlide1 - 1;
  } else {
    curSlide1--;
  }
  goToSlide(curSlide1);
};

btnRight1.addEventListener("click", nextSlide1);
btnLeft1.addEventListener("click", prevSlide1);

// AJAX using WEB APIS
// const request = fetch("https://countries-api-836d.onrender.com/countries/");
// const getCountryData = function (country) {
//   fetch("https://countries-api-836d.onrender.com/countries/")
//     .then(
//       (response) => response.json()
//       // (err) => alert(err)
//     )
//     .then((data) => renderCountry(data[0]).catch((err) => alert(err)));
// };
