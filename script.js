const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const mainMenu = document.querySelector(".navbar-elements");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
	mainMenu.style.display = "flex";
	mainMenu.style.top = "0";
}
function close() {
	mainMenu.style.top = "-100%";
}
/*toggleButton.addEventListener("click", () => {
	navbarLinks.classList.toggle("active");
});*/
