let slideIndex = 1;
showSlides(slideIndex);

// Set the interval for automatic sliding (every 3 seconds in this example)
let slideInterval = setInterval(function() {
  plusSlides(1); // Advance to the next slide
}, 3000); // 3000 milliseconds (3 seconds)

function plusSlides(n) {
  showSlides(slideIndex += n);
  resetSlideInterval(); // Reset the automatic sliding timer when a manual navigation action occurs
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  resetSlideInterval(); // Reset the automatic sliding timer when a manual navigation action occurs
}

function resetSlideInterval() {
  clearInterval(slideInterval); // Clear the previous interval
  slideInterval = setInterval(function() {
    plusSlides(1); // Advance to the next slide
  }, 3000); // Restart the automatic sliding timer
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
}


var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  scrollbar: {
    el: ".swiper-scrollbar", // Selector for the scrollbar element
    hide: false, // Show the scrollbar
    draggable: true, // Allow dragging the scrollbar
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

