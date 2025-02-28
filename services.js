document.addEventListener('DOMContentLoaded', function() {
  // Slider elements
  const sliderTrack = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.service-slide');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const indicators = document.querySelectorAll('.indicator');
  
  // Set initial slide index
  let currentSlide = 0;
  const slideCount = slides.length;
  
  // Set initial width for slider track based on number of slides
  sliderTrack.style.width = `${slideCount * 100}%`;
  
  // Function to update slider position
  function updateSlider() {
    sliderTrack.style.transform = `translateX(-${currentSlide * (100 / slideCount)}%)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
      if (index === currentSlide) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }
  
  // Event listeners for next and previous buttons
  nextBtn.addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlider();
  });
  
  prevBtn.addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateSlider();
  });
  
  // Event listeners for indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
      currentSlide = index;
      updateSlider();
    });
  });
  
  // Auto-advance slider every 5 seconds
  let slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlider();
  }, 5000);
  
  // Pause auto-advance on hover
  sliderTrack.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });
  
  // Resume auto-advance when mouse leaves
  sliderTrack.addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % slideCount;
      updateSlider();
    }, 5000);
  });
  
  // Touch events for mobile swipe
  let touchStartX = 0;
  let touchEndX = 0;
  
  sliderTrack.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  sliderTrack.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    // Detect swipe direction
    if (touchEndX < touchStartX - 50) {
      // Swipe left - next slide
      currentSlide = (currentSlide + 1) % slideCount;
      updateSlider();
    } else if (touchEndX > touchStartX + 50) {
      // Swipe right - previous slide
      currentSlide = (currentSlide - 1 + slideCount) % slideCount;
      updateSlider();
    }
  }
  
  // Initialize slider
  updateSlider();
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      currentSlide = (currentSlide + 1) % slideCount;
      updateSlider();
    } else if (e.key === 'ArrowLeft') {
      currentSlide = (currentSlide - 1 + slideCount) % slideCount;
      updateSlider();
    }
  });
});