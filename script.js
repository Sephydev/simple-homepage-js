const openNav = document.getElementById("open-nav");

openNav.addEventListener("click", function(e) {
    const navbar = document.getElementById("navbar");

    navbar.classList.remove("hide");
})