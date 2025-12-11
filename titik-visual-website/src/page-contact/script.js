// Initialize API client (assumes api-client.js is loaded)
const API_BASE_URL = 'http://localhost:5000';

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const closeMenu = document.getElementById('close-menu');
    const mobileNav = document.getElementById('mobile-nav');

    if (hamburgerMenu && mobileNav) {
        hamburgerMenu.addEventListener('click', function() {
            mobileNav.classList.add('active');
        });
    }

    if (closeMenu && mobileNav) {
        closeMenu.addEventListener('click', function() {
            mobileNav.classList.remove('active');
        });
    }

    // Contact Form Handler - INTEGRATED WITH BACKEND API
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const nama = document.getElementById('nama')?.value || '';
            const email = document.getElementById('email')?.value || '';
            const whatsapp = document.getElementById('whatsapp')?.value || '';
            const perusahaan = document.getElementById('perusahaan')?.value || '';
            const layanan = document.getElementById('layanan')?.value || '';
            const budget = document.getElementById('budget')?.value || '';
            const timeline = document.getElementById('timeline')?.value || '';
            const pesan = document.getElementById('pesan')?.value || '';
            const formAlert = document.getElementById('formAlert');
            
            // Validate required fields
            if (!nama || !email || !pesan) {
                showFormAlert(formAlert, 'error', 'Silakan isi semua field yang wajib (Nama, Email, Pesan)');
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Mengirim...';
            
            try {
                // Prepare contact data
                const contactData = {
                    name: nama,
                    email: email,
                    phone: whatsapp,
                    company: perusahaan,
                    projectType: layanan,
                    budget: budget,
                    timeline: timeline,
                    message: pesan
                };
                
                // Initialize API client if not already done
                const api = new TitikVisualAPI(API_BASE_URL);
                
                // Submit to backend API
                const response = await api.submitContact(contactData);
                
                // Show success message
                showFormAlert(formAlert, 'success', 'Terima kasih! Pesan Anda telah berhasil dikirim. Tim Titik Visual akan segera menghubungi Anda.');
                
                // Reset form
                contactForm.reset();
                
                // Hide alert after 5 seconds
                setTimeout(() => {
                    formAlert.style.display = 'none';
                }, 5000);
                
                console.log('Contact submitted successfully:', response);
                
            } catch (error) {
                console.error('Error sending contact:', error);
                
                // Fallback: Save to localStorage if API fails
                try {
                    const contactData = {
                        id: Date.now().toString(),
                        name: nama,
                        email: email,
                        phone: whatsapp,
                        company: perusahaan,
                        projectType: layanan,
                        budget: budget,
                        timeline: timeline,
                        message: pesan,
                        date: new Date().toISOString(),
                        read: false
                    };
                    
                    const contacts = JSON.parse(localStorage.getItem('titikvisual_contacts') || '[]');
                    contacts.push(contactData);
                    localStorage.setItem('titikvisual_contacts', JSON.stringify(contacts));
                    
                    showFormAlert(formAlert, 'success', 'Pesan Anda telah disimpan secara lokal. Pastikan backend API sudah running untuk mengirim ke server.');
                    contactForm.reset();
                    
                    setTimeout(() => {
                        formAlert.style.display = 'none';
                    }, 5000);
                    
                } catch (localError) {
                    showFormAlert(formAlert, 'error', `Terjadi kesalahan: ${error.message || 'Silakan coba lagi.'}`);
                }
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }
});

// Helper function to show form alerts
function showFormAlert(element, type, message) {
    if (!element) return;
    
    element.style.display = 'block';
    
    if (type === 'error') {
        element.style.backgroundColor = '#fdd4d4';
        element.style.color = '#dc2626';
    } else if (type === 'success') {
        element.style.backgroundColor = '#d4f4dd';
        element.style.color = '#10b981';
    }
    
    element.textContent = message;
}

        import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
        import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
        
        // Firebase configuration - REPLACE WITH YOUR FIREBASE CONFIG
        const firebaseConfig = {
            apiKey: "YOUR_API_KEY",
            authDomain: "YOUR_AUTH_DOMAIN",
            projectId: "YOUR_PROJECT_ID",
            storageBucket: "YOUR_STORAGE_BUCKET",
            messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
            appId: "YOUR_APP_ID"
        };
        
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        
        // Form submission handler
        const form = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');
        const formAlert = document.getElementById('formAlert');
        
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
            formAlert.style.display = 'none';
            
            try {
                // Collect form data
                const formData = {
                    name: document.getElementById('nama').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('whatsapp').value,
                    company: document.getElementById('perusahaan').value || '',
                    service: document.getElementById('layanan').value,
                    timeline: document.getElementById('timeline').value || '',
                    budget: document.getElementById('budget').value || '',
                    message: document.getElementById('detail').value,
                    timestamp: new Date(),
                    read: false
                };
                
                // Submit to Firebase
                await addDoc(collection(db, 'contact_submissions'), formData);
                
                // Show success message
                formAlert.style.display = 'block';
                formAlert.style.backgroundColor = '#d1fae5';
                formAlert.style.color = '#065f46';
                formAlert.style.border = '1px solid #a7f3d0';
                formAlert.innerHTML = '<i class="fas fa-check-circle"></i> Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.';
                
                // Reset form
                form.reset();
                
                // Scroll to alert
                formAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } catch (error) {
                console.error('Error submitting form:', error);
                
                // Show error message
                formAlert.style.display = 'block';
                formAlert.style.backgroundColor = '#fee2e2';
                formAlert.style.color = '#991b1b';
                formAlert.style.border = '1px solid #fecaca';
                formAlert.innerHTML = '<i class="fas fa-exclamation-circle"></i> Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi kami via WhatsApp.';
            } finally {
                // Reset button
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="far fa-paper-plane"></i> Kirim Inquiry';
            }
        });