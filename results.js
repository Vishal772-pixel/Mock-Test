document.addEventListener('DOMContentLoaded', function() {
  // Chart for Subject Performance Analysis
  const ctx = document.getElementById('subjectChart').getContext('2d');
  
  const subjectChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History'],
          datasets: [
              {
                  label: 'Current Performance (%)',
                  data: [90, 87, 73, 68, 84, 77],
                  backgroundColor: 'rgba(255, 209, 102, 0.7)',
                  borderColor: 'rgba(255, 209, 102, 1)',
                  borderWidth: 1
              },
              {
                  label: 'Previous Performance (%)',
                  data: [87, 83, 78, 64, 80, 73],
                  backgroundColor: 'rgba(200, 200, 200, 0.7)',
                  borderColor: 'rgba(200, 200, 200, 1)',
                  borderWidth: 1
              }
          ]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
              y: {
                  beginAtZero: true,
                  max: 100,
                  grid: {
                      color: 'rgba(0, 0, 0, 0.05)'
                  }
              },
              x: {
                  grid: {
                      display: false
                  }
              }
          },
          plugins: {
              legend: {
                  position: 'top',
                  labels: {
                      boxWidth: 15,
                      padding: 15
                  }
              },
              tooltip: {
                  backgroundColor: 'rgba(90, 103, 216, 0.8)',
                  titleColor: '#fff',
                  bodyColor: '#fff',
                  padding: 10,
                  cornerRadius: 6,
                  displayColors: false
              }
          },
          barPercentage: 0.7,
          categoryPercentage: 0.7
      }
  });

  // Add animation to stat cards
  const statCards = document.querySelectorAll('.stat-card');
  statCards.forEach((card, index) => {
      setTimeout(() => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          
          setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
          }, 100);
      }, index * 100);
  });

  // Add click event for view details buttons
  const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
  viewDetailsButtons.forEach(button => {
      button.addEventListener('click', function() {
          const testName = this.closest('tr').querySelector('td:first-child').textContent;
          alert(`Viewing details for ${testName}. This would navigate to a detailed report page.`);
      });
  });

  // Add click event for plan action buttons
  const planActionButtons = document.querySelectorAll('.plan-action-btn');
  planActionButtons.forEach(button => {
      button.addEventListener('click', function() {
          const action = this.textContent.trim();
          alert(`Action: ${action}. This would trigger the corresponding functionality.`);
      });
  });

  // Add click event for refresh plan button
  const refreshPlanButton = document.querySelector('.refresh-btn');
  refreshPlanButton.addEventListener('click', function() {
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Refreshing...';
      
      setTimeout(() => {
          this.innerHTML = 'Refresh Plan';
          alert('Your personalized improvement plan has been refreshed with the latest data!');
      }, 1500);
  });

  // Add click event for CTA button
  const ctaButton = document.querySelector('.cta-button');
  ctaButton.addEventListener('click', function() {
      alert('This would open a form to schedule a consultation with a tutor.');
  });

  // Highlight active navigation item
  const navItems = document.querySelectorAll('nav ul li a');
  navItems.forEach(item => {
      if (item.classList.contains('active')) {
          item.setAttribute('aria-current', 'page');
      }
  });
});

// Function to animate numbers (for future use)
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
          window.requestAnimationFrame(step);
      }
  };
  window.requestAnimationFrame(step);
}