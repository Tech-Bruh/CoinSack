// Navigation Bar
const navbarMenuBox = document.querySelector(".navbar-menu-box");
const resbar = document.querySelector(".resbar");
const resbarMenuBox = document.querySelector(".res-menu-box");
const resbarMenuBarOne = document.querySelector(".res-menu-bar-1");
const resbarMenuBarTwo = document.querySelector(".res-menu-bar-2");

navbarMenuBox.addEventListener("click", function () {
  resbar.style.animation = "resbarEntree 1s forwards 1";
  resbarMenuBox.style.animation = "resmenuBox 0.3s forwards 1 1.6s";
  resbarMenuBarOne.style.animation = "resBar1 0.3s forwards 1 1s";
  resbarMenuBarTwo.style.animation = "resBar2 0.3s forwards 1 1.3s";
});

resbarMenuBox.addEventListener("click", function () {
  resbar.style.animation = "resbarExit 1s forwards 1";
  resbarMenuBox.style.animation = "resmenuBoxClicked 0.3s forwards 1";
  resbarMenuBarOne.style.animation = "resBar1Clicked 0.3s forwards 1 0.6s";
  resbarMenuBarTwo.style.animation = "resBar2Clicked 0.3s forwards 1 0.3s";
});
