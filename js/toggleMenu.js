const headerMenu = document.querySelector(".header-menu");
const toggleBtn = document.querySelector(".toggle-btn");
const triangle = document.querySelector(".triangle");

function toggleMenu() {
	headerMenu.classList.toggle("hide");
	headerMenu.classList.toggle("show");
	triangle.classList.toggle("hide");
	triangle.classList.toggle("show");
}

toggleBtn.addEventListener("click", toggleMenu);