var header = document.querySelector("header");
var navbar = document.querySelector("header .navbar");
var navbarBrand = document.querySelector("header .navbar .navbar-brand");
var about = document.querySelector(".about");

window.onscroll = function() {
    if (about.getBoundingClientRect().bottom <= 300) {
        header.classList.add("header__sticky");
        navbarBrand.classList.add("d-xl-none");
    } else {
        header.classList.remove("header__sticky");
        navbarBrand.classList.remove("d-xl-none");
    }
}