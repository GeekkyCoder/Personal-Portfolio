// close and open the navigation bar
const menuEl = document.querySelector("#menuEl");
const menuIcon = document.querySelector(".menu-icon");
const headerEl = document.querySelector("header");

// elements that have hidden class
const hiddenElements = document.querySelectorAll(".hidden");
const slideElements = document.querySelectorAll("slide-up");

const intersecionObersver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.remove("hidden");
    } else {
      entry.target.classList.remove("show");
      entry.target.classList.add("hidden");
    }
  });
});

hiddenElements.forEach((el) => intersecionObersver.observe(el));

menuEl.addEventListener("click", handleMenu);

function handleMenu() {
  if (headerEl.classList.contains("close")) {
    menuIcon.src = "./images/external/menu-close.png";
    headerEl.classList.remove("close");
    headerEl.classList.add("open");
  } else {
    menuIcon.src = "./images/external/menu.png";
    headerEl.classList.remove("open");
    headerEl.classList.add("close");
  }
}
