document.addEventListener("DOMContentLoaded", function () {
  Promise.all([
    fetch("header-jakob.html").then(response => response.text()),
    fetch("sofie.html").then(response => response.text()),
    fetch("sofie.js").then(response => response.text()),
    fetch("sofie.css").then(response => response.text()),
  ])
  .then(([headerHTML, sofieHTML]) => {
    document.body.insertAdjacentHTML("afterbegin", headerHTML); // Insert header first
    document.body.insertAdjacentHTML("beforeend", sofieHTML); // Insert sofie.html at the end
  })
  .catch(error => console.error("Error loading files:", error));
});






/* Jakob */
document.addEventListener("DOMContentLoaded", function () {
    alert('Script kører')
});
/* Jakob */
//sofie
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); 
  }
  
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  
  // Auto-advance slides every 5 seconds
  setTimeout(() => {
    plusSlides(1);
  }, 30000);
}
// Soife slut