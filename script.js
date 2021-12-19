const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".close-menu");
const openMenu = document.querySelector(".open-menu");
const closeNav = document.querySelector(".close-nav");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", closePopup);
closeNav.addEventListener("click", closePopup);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function closePopup() {
  mainMenu.style.top = "-100%";
}

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Cursor

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});
