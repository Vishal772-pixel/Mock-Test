// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    
    if (menuToggle && mobileNav) {
      menuToggle.addEventListener('click', function() {
        const menuIcon = this.querySelector('i');
        
        if (mobileNav.classList.contains('active')) {
          mobileNav.classList.remove('active');
          menuIcon.setAttribute('data-lucide', 'menu');
        } else {
          mobileNav.classList.add('active');
          menuIcon.setAttribute('data-lucide', 'x');
        }
        
        lucide.createIcons();
      });
    }
    
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', () => {
        // Check if current item is already active
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faqItem => {
          faqItem.classList.remove('active');
        });
        
        // If clicked item wasn't active, open it
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
    
    // Add animation to value cards on scroll
    const valueCards = document.querySelectorAll('.value-card');
    const animateOnScroll = () => {
      valueCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }
      });
    };
    
    // Set initial state for animation
    valueCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const messageInput = this.querySelector('textarea');
        
        let isValid = true;
        
        // Simple email validation
        if (!emailInput.value || !emailInput.value.includes('@')) {
          emailInput.style.boxShadow = '0 0 0 2px rgba(239, 68, 68, 0.5)';
          isValid = false;
        } else {
          emailInput.style.boxShadow = '';
        }
        
        // Message validation
        if (!messageInput.value.trim()) {
          messageInput.style.boxShadow = '0 0 0 2px rgba(239, 68, 68, 0.5)';
          isValid = false;
        } else {
          messageInput.style.boxShadow = '';
        }
        
        if (isValid) {
          // Simulate form submission
          const submitButton = this.querySelector('.submit-button');
          const originalText = submitButton.textContent;
          
          submitButton.textContent = 'Sending...';
          submitButton.disabled = true;
          
          // Simulate API call
          setTimeout(() => {
            submitButton.textContent = 'Sent!';
            submitButton.style.backgroundColor = '#10B981';
            
            // Reset form
            emailInput.value = '';
            messageInput.value = '';
            
            // Reset button after delay
            setTimeout(() => {
              submitButton.textContent = originalText;
              submitButton.style.backgroundColor = '';
              submitButton.disabled = false;
            }, 2000);
          }, 1500);
        }
      });
    }
  });