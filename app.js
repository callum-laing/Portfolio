/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNavbar() {
  var x = document.querySelector(".main-nav");
  if (x.classList.contains("show")) {
    x.classList.remove("show");
  } else {
    window.addEventListener("click", hideNav)
    x.classList.add("show");
  }
}

function hideNav(e) {
  let button = document.querySelector("#hamburgerButton")
  if (e.target == button) {
      return
  }
  var x = document.querySelector(".main-nav");
  x.classList.remove("show");
  window.removeEventListener("click", hideNav)
}

function rps() {
  location.href = "https://laing91.github.io/rock-paper-scissors/";
}

function githubApp() {
  location.href = "https://laing91.github.io/GithubApp/";
}

function LATracker() {
  location.href = "https://laing91.github.io/first-crud-app/";
}