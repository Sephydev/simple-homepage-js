const openNav = document.getElementById("open-nav");
const closeNav = document.getElementById("close-nav");

openNav.addEventListener("click", function(e) {
    const navbar = document.getElementById("navbar");

    navbar.classList.remove("hide");
})

closeNav.addEventListener("click", function(e) {
    const navbar = document.getElementById("navbar");

    navbar.classList.add("hide");
})