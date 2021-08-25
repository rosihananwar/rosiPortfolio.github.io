$(document).ready(function () {
  /* function csrollY */
  $(window).scroll(function () {
    if (this.scrollY > 200) {
      $(".navbar").fadeIn("slow").css("display", "flex");
    } else {
      $(".navbar").fadeOut("slow").css("display", "none");
    }
  });
});
