const openNav = document.getElementById("open-nav");
const closeNav = document.getElementById("close-nav");
const themeBtn = document.getElementById("theme-btn");

let isDark = false;

openNav.addEventListener("click", function(e) {
    const navbar = document.getElementById("navbar");

    navbar.classList.remove("hide");
})

closeNav.addEventListener("click", function(e) {
    const navbar = document.getElementById("navbar");

    navbar.classList.add("hide");
})

themeBtn.addEventListener("click", function(e) {
    const body = document.getElementById("body-theme");
    const logo = document.getElementById("logo");

    if (isDark) {
        body.classList.remove("dark");
        logo.src = "./assets/alarado-icon-homepage.svg";
    } else {
        body.classList.add("dark");
        logo.src = "./assets/alarado-icon-homepage-dark.svg";
    }

    isDark = !isDark
})