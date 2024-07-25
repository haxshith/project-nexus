const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const logoContainer = document.querySelector(".logo");

let timeoutFunction; // Declare a variable to hold the timeout identifier

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  timeoutFunction = setTimeout(() => {
    logoContainer.classList.remove("logo-color");
  }, 1000);
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  logoContainer.classList.add("logo-color");
  clearTimeout(timeoutFunction); // Clear the timeout if needed
});

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log("Logged in as: " + profile.getName());
}

function onSignOut() {}

$("#search-icon").click(function () {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
});

$(".menu-toggle").click(function () {
  $(".nav").toggleClass("mobile-nav");
  $(this).toggleClass("is-active");
});
