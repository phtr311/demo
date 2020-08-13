
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");
var category = document.getElementById("category");
var footer = document.getElementById("last");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
var foot = footer.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {

  if (window.pageYOffset >= sticky) {
    navbar.style.position = "fixed";
    navbar.style.top = "0"; 
    navbar.style.left = "0"; 
    navbar.style.width = "100%";
    // navbar.classList.add("sticky");
    category.style.position = "fixed";
    category.style.top = "5rem"; 
    category.style.left = "8rem"; 
    // category.style.width = "100%";


  } else {
    // navbar.classList.remove("sticky");
    category.style.position = "static";
    navbar.style.position = "static";
  }

  if (window.pageYOffset >= foot){
    category.style.position = "static";
  }

}