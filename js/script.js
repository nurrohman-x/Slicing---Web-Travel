$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".wrapper-menu").toggleClass("show");
    $(".icon-bar").toggleClass("d-none");
    $(".close").toggleClass("d-none");
  });
});
