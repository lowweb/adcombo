const menuBtn = document.getElementById("menu-btn");
const headerMenu = document.getElementById("headerMenu");
menuBtn.addEventListener("click", menuClick);

function menuClick() {
    menuBtn.classList.toggle("ham--active");
    headerMenu.classList.toggle("header-menu--active");
}
