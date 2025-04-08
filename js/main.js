// Main JavaScript file for Swiss Metal Trading website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();
    
    // Initialize popovers
    $('[data-toggle="popover"]').popover();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== "#") {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add active class to current nav item based on URL
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentLocation.includes(linkPath) && linkPath !== 'index.html') {
            link.classList.add('active');
            if (link.parentElement.previousElementSibling) {
                link.parentElement.previousElementSibling.querySelector('.nav-link').classList.remove('active');
            }
        } else if (currentLocation.endsWith('/') || currentLocation.endsWith('index.html')) {
            document.querySelector('.navbar-nav .nav-link[href="index.html"]').classList.add('active');
        }
    });
    
    // Form validation for contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Simple form validation
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('is-invalid');
                } else {
                    field.classList.remove('is-invalid');
                }
            });
            
            // Email validation
            const emailField = document.getElementById('email');
            if (emailField) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    isValid = false;
                    emailField.classList.add('is-invalid');
                }
            }
            
            if (isValid) {
                // In a real implementation, this would send the form data to a server
                alert('Thank you for your message. Our team will contact you shortly.');
                contactForm.reset();
            }
        });
    }
    
    // Responsive navigation handling
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            document.querySelector('.navbar-collapse').classList.toggle('show');
        });
    }
    
    // Add animation to cards on hover
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // Add fade-in animation for sections when scrolling
    const sections = document.querySelectorAll('.section');
    
    function checkSections() {
        const triggerBottom = window.innerHeight * 0.8;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerBottom) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial styles for sections
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check sections on initial load
    checkSections();
    
    // Check sections on scroll
    window.addEventListener('scroll', checkSections);
    
    // Handle responsive images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'images/placeholder.jpg';
        });
    });
    
    // Add GDPR cookie consent banner
    if (!localStorage.getItem('cookieConsent')) {
        const cookieBanner = document.createElement('div');
        cookieBanner.className = 'cookie-banner';
        cookieBanner.innerHTML = `
            <div class="container">
                <p>We use cookies to enhance your experience on our website. By continuing to browse, you agree to our <a href="#">Cookie Policy</a>.</p>
                <button id="acceptCookies" class="btn btn-primary btn-sm">Accept</button>
            </div>
        `;
        cookieBanner.style.position = 'fixed';
        cookieBanner.style.bottom = '0';
        cookieBanner.style.left = '0';
        cookieBanner.style.width = '100%';
        cookieBanner.style.padding = '10px 0';
        cookieBanner.style.background = 'rgba(0, 0, 0, 0.8)';
        cookieBanner.style.color = 'white';
        cookieBanner.style.zIndex = '1000';
        
        document.body.appendChild(cookieBanner);
        
        document.getElementById('acceptCookies').addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'true');
            cookieBanner.remove();
        });
    }
    
    // Add accessibility features
    const accessibilityButton = document.createElement('button');
    accessibilityButton.className = 'accessibility-button';
    accessibilityButton.innerHTML = '<i class="fas fa-universal-access"></i>';
    accessibilityButton.setAttribute('aria-label', 'Accessibility Options');
    accessibilityButton.style.position = 'fixed';
    accessibilityButton.style.bottom = '20px';
    accessibilityButton.style.right = '20px';
    accessibilityButton.style.width = '50px';
    accessibilityButton.style.height = '50px';
    accessibilityButton.style.borderRadius = '50%';
    accessibilityButton.style.backgroundColor = 'var(--primary-color)';
    accessibilityButton.style.color = 'white';
    accessibilityButton.style.border = 'none';
    accessibilityButton.style.zIndex = '999';
    accessibilityButton.style.cursor = 'pointer';
    accessibilityButton.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    
    document.body.appendChild(accessibilityButton);
    
    accessibilityButton.addEventListener('click', function() {
        // Toggle high contrast mode
        document.body.classList.toggle('high-contrast');
        
        if (document.body.classList.contains('high-contrast')) {
            document.body.style.backgroundColor = '#000';
            document.body.style.color = '#fff';
            
            document.querySelectorAll('a, button, .btn').forEach(element => {
                element.style.color = '#ffff00';
            });
            
            document.querySelectorAll('.card, .section').forEach(element => {
                element.style.backgroundColor = '#333';
                element.style.color = '#fff';
            });
        } else {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
            
            document.querySelectorAll('a, button, .btn').forEach(element => {
                element.style.color = '';
            });
            
            document.querySelectorAll('.card, .section').forEach(element => {
                element.style.backgroundColor = '';
                element.style.color = '';
            });
        }
    });
    
    // Add performance optimization
    // Lazy load images that are not in the viewport
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                    }
                    
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        });
    }
});
