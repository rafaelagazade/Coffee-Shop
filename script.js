const allLi = document.querySelectorAll(".header .navbar a");

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header .navbar");
const navItem = document.querySelectorAll(".header .navbar #a");

const homeBtn = document.getElementsByClassName(".position-fixed-btn");

window.addEventListener("load", () => {
  if (window.matchMedia("(max-width: 768px)")) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
    navItem.forEach((item) => {
      item.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    });
  } else {
  }
});

allLi.forEach((item) => {
  item.addEventListener("click", () => {
    allLi.forEach((item2) => {
      item2.classList.remove("active-selector");
    });

    item.classList.add("active-selector");
  });
});
