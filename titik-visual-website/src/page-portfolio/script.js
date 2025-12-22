const API_BASE_URL = 'http://localhost:5000';

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navCenter = document.querySelector('.nav-center');

    if (mobileMenuToggle && navCenter) {
        mobileMenuToggle.addEventListener('click', function () {
            navCenter.classList.toggle('active');
        });
    }

    // Load portfolio from backend
    loadPortfolio();
});

/**
 * Load portfolio projects from backend API
 */
async function loadPortfolio() {
    try {
        const api = new TitikVisualAPI(API_BASE_URL);
        
        // Fetch portfolio data from backend
        const response = await api.getPortfolio({ featured: true });
        
        if (response.success && response.data) {
            renderPortfolioCards(response.data);
            console.log('Portfolio loaded successfully:', response.data);
        } else {
            console.warn('Portfolio API returned no data, using fallback');
            loadFallbackPortfolio();
        }
    } catch (error) {
        console.error('Error loading portfolio from backend:', error);
        console.log('Loading fallback portfolio from localStorage...');
        loadFallbackPortfolio();
    }
}

/**
 * Render portfolio cards dynamically
 */
function renderPortfolioCards(projects) {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    if (!portfolioGrid) {
        console.warn('Portfolio grid not found');
        return;
    }

    // Clear existing cards (but keep structure)
    const existingCards = portfolioGrid.querySelectorAll('.project-card');
    existingCards.forEach(card => card.remove());

    // Add new cards from API data
    projects.forEach(project => {
        const card = createProjectCard(project);
        portfolioGrid.appendChild(card);
    });
}

/**
 * Create project card element
 */
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <div class="card-image">
            <img src="${project.images && project.images[0] ? project.images[0] : '../img/portfolio.png'}" alt="${project.title}">
            ${project.featured ? '<span class="project-tag">Featured</span>' : ''}
        </div>
        <div class="card-content">
            <div class="content-header">
                <span class="project-category">${project.category || 'Web Design'}</span>
                <span class="project-year">${new Date(project.createdAt).getFullYear()}</span>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${(project.technologies || []).map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <div class="project-footer">
                <span class="client-name">Client: ${project.client || 'N/A'}</span>
                <a href="#" class="project-link"><i class="fas fa-arrow-up-right-from-square"></i></a>
            </div>
        </div>
    `;
    return card;
}

/**
 * Load fallback portfolio from localStorage
 */
function loadFallbackPortfolio() {
    try {
        const savedPortfolio = localStorage.getItem('titikvisual_portfolio');
        if (savedPortfolio) {
            const portfolio = JSON.parse(savedPortfolio);
            renderPortfolioCards(portfolio);
            console.log('Loaded portfolio from localStorage');
        } else {
            console.log('No saved portfolio found, using default cards');
        }
    } catch (error) {
        console.error('Error loading fallback portfolio:', error);
    }
}
