
// Hamburger Menu Animations
function displayMenu(x) {
  x.classList.toggle("change");
}

// Carousel

// document.getElementById("previous").addEventListener("click", plusSlides(-1));
// document.getElementById("next"),addEventListener("click", plusSlides(1));

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
  var slides = document.getElementsByClassName("project");
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