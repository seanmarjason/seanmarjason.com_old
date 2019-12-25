
// Menu Show-Hide
function toggleMenu() {
  var menu = document.getElementById("burgerMenu")
  var hamburger = document.getElementById("burger");
  menu.classList.toggle("burgerMenuShow");
  hamburger.classList.toggle("change");
}

// Resize iFrame to fit contents
function resizeIframe(contents) {
  contents.style.height = 0;
  contents.style.height = contents.contentWindow.document.documentElement.scrollHeight + 'px';
}

try {
  var iframe = document.getElementById("iframe");
  iframe.addEventListener('load', function () {resizeIframe(iframe);});
  window.addEventListener('resize', function () {resizeIframe(iframe);});
}
catch(err){}

// Add shadow under navbar on scroll
var navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  // console.log(window.scrollY);
  if (window.scrollY >= 25) {
    navbar.classList.add("navbarScrolled");
  }
  else {
    navbar.classList.remove("navbarScrolled");
  }
});
