// Form validation
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Simple validation
        let isValid = true;
        let errorMessage = '';
        
        if (!name) {
          isValid = false;
          errorMessage += 'Name is required.\n';
        }
        
        if (!email) {
          isValid = false;
          errorMessage += 'Email is required.\n';
        } else if (!isValidEmail(email)) {
          isValid = false;
          errorMessage += 'Please enter a valid email address.\n';
        }
        
        if (!subject) {
          isValid = false;
          errorMessage += 'Subject is required.\n';
        }
        
        if (!message) {
          isValid = false;
          errorMessage += 'Message is required.\n';
        }
        
        if (isValid) {
          // In a real application, you would send the form data to a server
          alert('Thank you for your message! We will get back to you soon.');
          contactForm.reset();
        } else {
          alert(errorMessage);
        }
      });
    }
    
    // Highlight active nav item
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        // Remove active class from all items
        navItems.forEach(navItem => {
          navItem.classList.remove('active');
        });
        
        // Add active class to clicked item
        e.target.classList.add('active');
      });
    });
  });
  
  // Email validation helper
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }