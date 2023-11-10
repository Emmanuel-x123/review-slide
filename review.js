const slides = document.querySelectorAll(".slide");
const right = document.querySelector(".right");
const left = document.querySelector(".left");
let currentSlide = 0;

//creates a sliding function
const sliding = () => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  };

  // makes a function to be called repeatedly every particular time(3sec)
setInterval(() => {
    sliding();
  }, 3000);

  right.addEventListener("click", function () {
    sliding();
  });
  
  left.addEventListener("click", function () {
    sliding();
  });
  
  