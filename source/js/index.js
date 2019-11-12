// Toggle mobile nav in and out of display
const toggleNav = () => {

  // Select HTML elements
  let hamburger = document.querySelector(".hamburger");
  let navMenu = document.querySelector(".nav-menu");
  let overlay = document.getElementById("overlay");
  const navLinks = document.querySelectorAll(".nav-link");

  // Open mobile nav and add animations
  hamburger.addEventListener("click", () => {
    hamburger.classList.add("rotate");
    navMenu.classList.add("open");
    overlay.style.display = "block";

    navLinks.forEach( (item, index) => {
      item.style.animation = "slideIn 0.3s linear " + index / 11 + "s" + " forwards";
    });
  });

  // Close mobile nav and remove animations
  const closeNav = () => {
    hamburger.classList.remove("rotate");
    navMenu.classList.remove("open");
    overlay.style.display = "none";

    navLinks.forEach( (item) => {
      item.style.animation = "";
    });
  };

  // Close mobile nav when the nav menu is clicked
  navMenu.addEventListener("click", closeNav);


  // Close mobile nav when the overlay is clicked
  overlay.addEventListener("click", closeNav);

};


// Invoke program functions
(function () {
  toggleNav();
})();
