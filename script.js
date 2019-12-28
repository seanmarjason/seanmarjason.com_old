
// Menu Show-Hide
function toggleMenu() {
  var menu = document.getElementById("burgerMenu")
  var hamburger = document.getElementById("burger");
  menu.classList.toggle("burgerMenuShow");
  hamburger.classList.toggle("change");
}

// Carousel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("skill");
  var dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {
    slideIndex = 1
  };

  if (n < 1) {
    slideIndex = slides.length
  };

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display="none";
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}
