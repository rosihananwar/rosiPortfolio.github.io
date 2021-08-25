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

const scriptURL = "https://script.google.com/macros/s/AKfycbzayjYpC0Io9Qm24p5Kn9Tnd3Lerlr9tfkZXCCi7_h1EU8eUAE5-QDHWoZ7ei4emiXAWA/exec";
const form = document.forms["sentMessage"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
