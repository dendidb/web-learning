window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("navbar-sticky")
  } else {
    navbar.classList.remove("navbar-sticky");
  }
}

// Menu mobile

if ($(".mobile-menu").length) {
  $(".mobile-menu").on("click", function() {
    $(this).toggleClass("active");
    $(".nav-menu").slideToggle(300);
  });
}


// $("a[href*=\\#]:not([href=\\#])").on("click", function() {
//   if (
//     location.pathname.replace(/^\//, "") ==
//     this.pathname.replace(/^\//, "") &&
//     location.hostname == this.hostname
//     ) {
//     var target = $(this.hash);
//   target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
//   if (target.length) {
//     var width = $(window).width();
//     if (width < 991) {
//       $(".mobile-menu").removeClass("muncul");
//       $(".nav-menu").slideUp(200);
//     }
//     $("html,body").animate(
//     {
//       scrollTop: target.offset().top - 80
//     },
//     700
//     );
//     return false;
//   }
// }
// });

  $('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:50,
    items:3,
    lazyLoad: true,
    nav:true,
    dots:true,
    responsive:{
      0:{
        items:1,
        stagePadding: 0
      },
      768:{
        items:2,
        stagePadding: 0
      },
      1000:{
        items:1,
        stagePadding: 180
      },
      1260:{
        items:1,
        stagePadding: 280
      }
    }
  })