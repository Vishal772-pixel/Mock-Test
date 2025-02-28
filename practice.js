// Practice items data
const practiceItems = [
    {
      id: 1,
      title: 'Calculus Fundamentals',
      subject: 'Mathematics',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      questions: 50,
      estimatedTime: 45,
      difficulty: 'Medium',
      topics: ['Limits', 'Derivatives', 'Integrals']
    },
    {
      id: 2,
      title: 'Mechanics & Dynamics',
      subject: 'Physics',
      image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      questions: 35,
      estimatedTime: 40,
      difficulty: 'Hard',
      topics: ['Newton\'s Laws', 'Kinematics', 'Conservation Laws']
    },
    {
      id: 3,
      title: 'Organic Chemistry',
      subject: 'Chemistry',
      image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      questions: 45,
      estimatedTime: 50,
      difficulty: 'Medium',
      topics: ['Hydrocarbons', 'Functional Groups', 'Reaction Mechanisms']
    },
    {
      id: 4,
      title: 'Data Structures',
      subject: 'Computer Science',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      questions: 40,
      estimatedTime: 60,
      difficulty: 'Hard',
      topics: ['Arrays', 'Linked Lists', 'Trees', 'Graphs']
    },
    {
      id: 5,
      title: 'Logical Reasoning',
      subject: 'General Aptitude',
      image: 'https://images.unsplash.com/photo-1616161560417-66d4db5892ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      questions: 30,
      estimatedTime: 30,
      difficulty: 'Easy',
      topics: ['Patterns', 'Syllogisms', 'Deductions']
    },
    {
      id: 6,
      title: 'Grammar & Vocabulary',
      subject: 'Verbal Ability',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      questions: 50,
      estimatedTime: 40,
      difficulty: 'Medium',
      topics: ['Sentence Correction', 'Vocabulary', 'Reading Comprehension']
    }
  ];
  
  // DOM elements
  const practiceGrid = document.getElementById('practice-items');
  const subjectFilter = document.getElementById('subject-filter');
  const difficultyRadios = document.querySelectorAll('input[name="difficulty"]');
  const searchInput = document.getElementById('search-query');
  const searchButton = document.querySelector('.search-btn');
  const pageButtons = document.querySelectorAll('.page-number');
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  
  // State
  let selectedSubject = 'Mathematics';
  let selectedDifficulty = 'All';
  let searchQuery = '';
  let currentPage = 1;
  
  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    renderPracticeItems();
    setupEventListeners();
  });
  
  // Event listeners
  function setupEventListeners() {
    // Subject filter
    subjectFilter.addEventListener('change', (e) => {
      selectedSubject = e.target.value;
      renderPracticeItems();
    });
  
    // Difficulty filter
    difficultyRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        selectedDifficulty = e.target.value;
        renderPracticeItems();
      });
    });
  
    // Search
    searchButton.addEventListener('click', () => {
      searchQuery = searchInput.value.trim().toLowerCase();
      renderPracticeItems();
    });
  
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        searchQuery = searchInput.value.trim().toLowerCase();
        renderPracticeItems();
      }
    });
  
    // Pagination
    pageButtons.forEach(button => {
      button.addEventListener('click', () => {
        currentPage = parseInt(button.textContent);
        updatePagination();
        renderPracticeItems();
      });
    });
  
    prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        updatePagination();
        renderPracticeItems();
      }
    });
  
    nextButton.addEventListener('click', () => {
      if (currentPage < 3) {
        currentPage++;
        updatePagination();
        renderPracticeItems();
      }
    });
  }
  
  // Filter items
  function filterItems() {
    return practiceItems.filter(item => {
      const matchesSubject = selectedSubject === 'All' || item.subject === selectedSubject;
      const matchesDifficulty = selectedDifficulty === 'All' || item.difficulty === selectedDifficulty;
      const matchesSearch = searchQuery === '' || 
                            item.title.toLowerCase().includes(searchQuery) || 
                            item.subject.toLowerCase().includes(searchQuery) ||
                            item.topics.some(topic => topic.toLowerCase().includes(searchQuery));
      
      return matchesSubject && matchesDifficulty && matchesSearch;
    });
  }
  
  // Render practice items
  function renderPracticeItems() {
    const filteredItems = filterItems();
    
    // Clear the grid
    practiceGrid.innerHTML = '';
    
    if (filteredItems.length === 0) {
      practiceGrid.innerHTML = `
        <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
          <p>No practice items found matching your criteria.</p>
        </div>
      `;
      return;
    }
    
    // In a real app, we would implement proper pagination
    // For this demo, we'll just show all items
    filteredItems.forEach(item => {
      const card = document.createElement('div');
      card.className = 'practice-card';
      
      const difficultyClass = item.difficulty.toLowerCase();
      
      card.innerHTML = `
        <div class="card-image">
          <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="card-content">
          <div class="card-header">
            <h3 class="card-title">${item.title}</h3>
            <span class="difficulty-badge ${difficultyClass}">${item.difficulty}</span>
          </div>
          
          <p class="card-subject">${item.subject}</p>
          
          <div class="card-stats">
            <div class="stat">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>${item.questions} Questions</span>
            </div>
            <div class="stat">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>${item.estimatedTime} mins</span>
            </div>
          </div>
          
          <div class="topic-tags">
            ${item.topics.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
          </div>
          
          <div class="card-actions">
            <button class="start-btn">
              Start Practice
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            <button class="bookmark-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                <path d="M12 15l-8.5 8.5c-.83.83-2.17.83-3 0 0-1.5 0-8.5 0-8.5 0-3 2-5 5-5 1.5 0 3 .5 4 2 1-1.5 2.5-2 4-2 3 0 5 2 5 5 0 0 0 7 0 8.5-.83.83-2.17.83-3 0L12 15z"></path>
              </svg>
            </button>
          </div>
        </div>
      `;
      
      practiceGrid.appendChild(card);
    });
  }
  
  // Update pagination UI
  function updatePagination() {
    pageButtons.forEach(button => {
      const page = parseInt(button.textContent);
      if (page === currentPage) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }
  
  // Add event listeners for practice cards (delegated)
  document.addEventListener('click', (e) => {
    // Start practice button
    if (e.target.closest('.start-btn')) {
      const card = e.target.closest('.practice-card');
      const title = card.querySelector('.card-title').textContent;
      alert(`Starting practice: ${title}`);
    }
    
    // Bookmark button
    if (e.target.closest('.bookmark-btn')) {
      const button = e.target.closest('.bookmark-btn');
      button.classList.toggle('active');
      const card = button.closest('.practice-card');
      const title = card.querySelector('.card-title').textContent;
      
      if (button.classList.contains('active')) {
        alert(`Bookmarked: ${title}`);
      } else {
        alert(`Removed bookmark: ${title}`);
      }
    }
  });