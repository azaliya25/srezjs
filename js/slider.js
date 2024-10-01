document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.testimonial_item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');
  
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = 'none';
        dots[i].classList.remove('active');
      });
      slides[index].style.display = 'block';
      dots[index].classList.add('active');
    }
  
    showSlide(currentIndex);
  
    nextButton.addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });
  
    prevButton.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });
  
    dots.forEach((dot, i) => {
      dot.addEventListener('click', function () {
        currentIndex = i;
        showSlide(currentIndex);
      });
    });
  });
  