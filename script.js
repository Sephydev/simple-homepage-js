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
    const darkBtn = document.getElementById("dark-btn");
    const lightBtn = document.getElementById("light-btn");

    if (isDark) {
        body.classList.remove("dark");
        darkBtn.classList.remove("selected");
        darkBtn.src = "./assets/Moon_fill_light.svg";
        lightBtn.classList.add("selected");
        lightBtn.src = "./assets/Sun_fill.svg";
        logo.src = "./assets/alarado-icon-homepage.svg";
    } else {
        body.classList.add("dark");
        darkBtn.classList.add("selected");
        darkBtn.src = "./assets/Moon_fill.svg";
        lightBtn.classList.remove("selected");
        lightBtn.src = "./assets/Sun_fill_light.svg";
        logo.src = "./assets/alarado-icon-homepage-dark.svg";
    }

    isDark = !isDark
})