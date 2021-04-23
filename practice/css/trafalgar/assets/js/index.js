// navbarSticky 
window.onscroll = function() {navbarSticky()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function navbarSticky() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("navbar-sticky")
  } else {
    navbar.classList.remove("navbar-sticky");
  }
}

//  burgerMenu
if ($(".mobile-menu").length) {
  $(".mobile-menu").on("click", function() {
    $(this).toggleClass("active");
    $(".nav-menu").slideToggle(300);
  });
}