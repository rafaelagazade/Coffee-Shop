const allLi = document.querySelectorAll(".header .navbar a");

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header .navbar");
const navItem = document.querySelectorAll(".header .navbar #a");

document.addEventListener("DOMContentLoaded", init);

function init() {
  let querry = window.matchMedia("(max-width: 768px)");

  if (querry.matches) {
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
}

allLi.forEach((item) => {
  item.addEventListener("click", () => {
    allLi.forEach((item2) => {
      item2.classList.remove("active-selector");
    });

    item.classList.add("active-selector");
  });
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    homeBtn.classList.add("btn-active2");
  } else {
    homeBtn.classList.remove("btn-active2");
  }
});
