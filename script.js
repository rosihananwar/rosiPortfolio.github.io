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

const scriptURL = "https://script.google.com/macros/s/AKfycbyC-AHkSylI6Pl_tK0wdqvr4fbswswSM_AfjNG5-jq8DvcaTCseuFxfIcwdoS6FR06ZqA/exec";
const form = document.forms["sentMessage"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
