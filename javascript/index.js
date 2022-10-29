// close and open the navigation bar
const menuEl = document.querySelector("#menuEl");
const menuIcon = document.querySelector(".menu-icon");
const headerEl = document.querySelector("header");

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
