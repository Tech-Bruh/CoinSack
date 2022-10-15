const responsiveSectionOne = document.querySelector(".sect1-res-container");
const sectOneOpenMenu = document.querySelector(".sect1-menu-open");
const sectOneCloseMenu = document.querySelector(".sect1-menu-close");

sectOneOpenMenu.addEventListener("click", function () {
  responsiveSectionOne.style.animation = "resSectOneOpen 0.5s forwards 1";
  sectOneOpenMenu.style.display = "none";
  sectOneCloseMenu.style.display = "block";
});

sectOneCloseMenu.addEventListener("click", function () {
  responsiveSectionOne.style.animation = "resSectOneClose 0.5s forwards 1";
  sectOneOpenMenu.style.display = "block";
  sectOneCloseMenu.style.display = "none";
});

// Section Two
const responsiveSectionTwo = document.querySelector(".sect2-res-item2");
const sectTwoOpenMenu = document.querySelector(".sect2-menu-open");
const sectTwoCloseMenu = document.querySelector(".sect2-menu-close");

sectTwoOpenMenu.addEventListener("click", function () {
  responsiveSectionTwo.style.animation = "resSectTwoOpen 0.5s forwards 1";
  sectTwoOpenMenu.style.display = "none";
  sectTwoCloseMenu.style.display = "block";
});

sectTwoCloseMenu.addEventListener("click", function () {
  responsiveSectionTwo.style.animation = "resSectTwoClose 0.5s forwards 1";
  sectTwoOpenMenu.style.display = "block";
  sectTwoCloseMenu.style.display = "none";
});
