// Selected Elements
const navigationBar = document.querySelector(".compass");
const navToggler = document.querySelector(".toggler");
// Events
navToggler.addEventListener("click", () => {
    navigationBar.classList.toggle("show-compass")
})