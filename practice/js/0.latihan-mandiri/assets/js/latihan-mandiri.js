//  untuk mobile menu

if ($(".mobile-menu").length) {
  $(".mobile-menu").on("click", function() {
    $(this).toggleClass("active");
    $(".nav-menu").slideToggle(300);
  });
}