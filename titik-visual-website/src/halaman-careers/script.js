const API_BASE_URL = 'http://localhost:5000';

// Define TitikVisualAPI class
class TitikVisualAPI {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async getCareers(params) {
        const queryString = params ? new URLSearchParams(params).toString() : '';
        const response = await fetch(`${this.baseURL}/careers?${queryString}`);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch careers: ${response.statusText}`);
        }
        
        return response.json();
    }

    async submitApplication(applicationData) {
        const response = await fetch(`${this.baseURL}/careers/apply`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(applicationData),
        });
        
        if (!response.ok) {
            throw new Error(`Failed to submit application: ${response.statusText}`);
        }
        
        return response.json();
    }
}

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navRight = document.querySelector('.nav-right');

    if (mobileMenuToggle && navRight) {
        mobileMenuToggle.addEventListener('click', function () {
            mobileMenuToggle.classList.toggle('active');
            navRight.classList.toggle('active');
        });

        // Close menu when clicking a nav link
        navRight.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenuToggle.classList.contains('active')) {
                    mobileMenuToggle.classList.remove('active');
                    navRight.classList.remove('active');
                }
            });
        });
    }

    // Load careers from backend
    loadCareers();
});

/**
 * Load career positions from backend API
 */
async function loadCareers() {
    try {
        const api = new TitikVisualAPI(API_BASE_URL);
        
        // Fetch career data from backend
        const response = await api.getCareers({ isOpen: true });
        
        if (response.success && response.data) {
            renderCareerCards(response.data);
            console.log('Careers loaded successfully:', response.data);
        } else {
            console.warn('Careers API returned no data, using fallback');
            loadFallbackCareers();
        }
    } catch (error) {
        console.error('Error loading careers from backend:', error);
        console.log('Loading fallback careers from localStorage...');
        loadFallbackCareers();
    }
}

/**
 * Render career position cards dynamically
 */
function renderCareerCards(careers) {
    const careerContainer = document.querySelector('.positions-grid') || document.querySelector('.careers-grid');
    
    if (!careerContainer) {
        console.warn('Career container not found');
        return;
    }

    // Clear existing cards
    const existingCards = careerContainer.querySelectorAll('[data-career-id]');
    existingCards.forEach(card => card.remove());

    // Add new cards from API data
    careers.forEach(career => {
        const card = createCareerCard(career);
        careerContainer.appendChild(card);
    });
}

/**
 * Create career position card element
 */
function createCareerCard(career) {
    const card = document.createElement('div');
    card.className = 'position-card';
    card.setAttribute('data-career-id', career._id);
    
    // Create elements properly instead of using innerHTML
    const positionHeader = document.createElement('div');
    positionHeader.className = 'position-header';
    
    const positionTitle = document.createElement('h3');
    positionTitle.className = 'position-title';
    positionTitle.textContent = career.position;
    
    const positionType = document.createElement('span');
    positionType.className = 'position-type';
    positionType.textContent = career.type || 'Fulltime';
    
    positionHeader.appendChild(positionTitle);
    positionHeader.appendChild(positionType);
    
    const positionDetails = document.createElement('div');
    positionDetails.className = 'position-details';
    
    // Department
    const departmentItem = document.createElement('div');
    departmentItem.className = 'detail-item';
    const departmentIcon = document.createElement('i');
    departmentIcon.className = 'fas fa-building';
    const departmentText = document.createElement('span');
    departmentText.textContent = career.department || 'Department';
    departmentItem.appendChild(departmentIcon);
    departmentItem.appendChild(departmentText);
    positionDetails.appendChild(departmentItem);
    
    // Location
    const locationItem = document.createElement('div');
    locationItem.className = 'detail-item';
    const locationIcon = document.createElement('i');
    locationIcon.className = 'fas fa-map-marker-alt';
    const locationText = document.createElement('span');
    locationText.textContent = career.location || 'Yogyakarta';
    locationItem.appendChild(locationIcon);
    locationItem.appendChild(locationText);
    positionDetails.appendChild(locationItem);
    
    // Salary range (if exists)
    if (career.salaryRange) {
        const salaryItem = document.createElement('div');
        salaryItem.className = 'detail-item';
        const salaryIcon = document.createElement('i');
        salaryIcon.className = 'fas fa-money-bill';
        const salaryText = document.createElement('span');
        salaryText.textContent = `${career.salaryRange.min || '0'} - ${career.salaryRange.max || '0'}`;
        salaryItem.appendChild(salaryIcon);
        salaryItem.appendChild(salaryText);
        positionDetails.appendChild(salaryItem);
    }
    
    const description = document.createElement('p');
    description.className = 'position-description';
    description.textContent = career.description || '';
    
    // Requirements (if exists)
    let requirementsElement = null;
    if (career.requirements && career.requirements.length > 0) {
        requirementsElement = document.createElement('div');
        requirementsElement.className = 'position-requirements';
        
        const requirementsTitle = document.createElement('strong');
        requirementsTitle.textContent = 'Persyaratan:';
        requirementsElement.appendChild(requirementsTitle);
        
        const requirementsList = document.createElement('ul');
        career.requirements.forEach(req => {
            const li = document.createElement('li');
            li.textContent = req;
            requirementsList.appendChild(li);
        });
        requirementsElement.appendChild(requirementsList);
    }
    
    const positionFooter = document.createElement('div');
    positionFooter.className = 'position-footer';
    
    const applyButton = document.createElement('a');
    applyButton.href = '#';
    applyButton.className = 'btn btn-apply';
    applyButton.textContent = 'Lamar Sekarang';
    
    const detailButton = document.createElement('a');
    detailButton.href = '#';
    detailButton.className = 'btn btn-detail';
    detailButton.textContent = 'Lihat Detail';
    
    positionFooter.appendChild(applyButton);
    positionFooter.appendChild(detailButton);
    
    // Assemble the card
    card.appendChild(positionHeader);
    card.appendChild(positionDetails);
    card.appendChild(description);
    if (requirementsElement) {
        card.appendChild(requirementsElement);
    }
    card.appendChild(positionFooter);
    
    return card;
}

/**
 * Load fallback careers from localStorage
 */
function loadFallbackCareers() {
    try {
        const savedCareers = localStorage.getItem('titikvisual_careers');
        if (savedCareers) {
            const careers = JSON.parse(savedCareers);
            renderCareerCards(careers);
            console.log('Loaded careers from localStorage');
        } else {
            console.log('No saved careers found');
        }
    } catch (error) {
        console.error('Error loading fallback careers:', error);
    }
}