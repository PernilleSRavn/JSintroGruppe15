
/* Jakob */
document.addEventListener("DOMContentLoaded", function () {
    //alert('Script kører')
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

// Pernille start //

document.addEventListener("DOMContentLoaded", function() {
  const faqs = document.querySelectorAll('.faq-container');


  faqs.forEach(faq => {
      faq.addEventListener('click', () => {
          const answer = faq.querySelector('.answer');
          answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      });
  });
});

// Pernille Slut //