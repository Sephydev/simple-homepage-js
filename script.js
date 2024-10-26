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

    if (isDark) {
        body.classList.remove("dark");
    } else {
        body.classList.add("dark");
    }

    isDark = !isDark
})